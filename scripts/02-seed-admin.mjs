/**
 * Admin seed script – ESM, auto-loads .env
 * Run: node scripts/02-seed-admin.mjs
 */

import { readFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

// ── Load .env ──────────────────────────────────────────────────────────────
const __dirname = dirname(fileURLToPath(import.meta.url))
const envPath   = resolve(__dirname, '../.env')

if (!process.env.DATABASE_URL) {
  try {
    const envContent = readFileSync(envPath, 'utf8')
    for (const line of envContent.split('\n')) {
      const trimmed = line.trim()
      if (!trimmed || trimmed.startsWith('#')) continue
      const eqIdx = trimmed.indexOf('=')
      if (eqIdx === -1) continue
      const key = trimmed.slice(0, eqIdx).trim()
      const val = trimmed.slice(eqIdx + 1).trim()
      if (key && !process.env[key]) process.env[key] = val
    }
    console.log('✓ .env loaded')
  } catch {
    console.warn('⚠  Could not load .env:', envPath)
  }
}

if (!process.env.DATABASE_URL) {
  console.error('❌ DATABASE_URL is not set.')
  process.exit(1)
}

// ── Imports ────────────────────────────────────────────────────────────────
import { neon } from '@neondatabase/serverless'
import bcrypt    from 'bcryptjs'

const ADMIN_EMAIL    = 'admin@gmail.com'
const ADMIN_PASSWORD = 'admin123'
const sql            = neon(process.env.DATABASE_URL)

async function seedAdmin() {
  console.log('🔄 Seeding admin user...\n')

  // 1. Create table if it doesn't exist yet (with email column)
  await sql`
    CREATE TABLE IF NOT EXISTS admin_users (
      id            SERIAL PRIMARY KEY,
      email         VARCHAR(255) NOT NULL UNIQUE,
      password_hash VARCHAR(255) NOT NULL,
      created_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `

  // 2. Detect actual columns in the table
  const cols     = await sql`
    SELECT column_name
    FROM   information_schema.columns
    WHERE  table_schema = 'public'
      AND  table_name   = 'admin_users'
  `
  const colNames = cols.map(r => r.column_name)
  console.log('   Mevcut sütunlar:', colNames.join(', '))

  // 3. Migrate: rename 'username' → 'email' if needed
  if (colNames.includes('username') && !colNames.includes('email')) {
    console.log('⚙  "username" sütunu "email" olarak yeniden adlandırılıyor...')
    await sql`ALTER TABLE admin_users RENAME COLUMN username TO email`
    console.log('✓  Sütun yeniden adlandırıldı')
  }

  // 4. Upsert admin user
  const hash = await bcrypt.hash(ADMIN_PASSWORD, 10)
  await sql`
    INSERT INTO admin_users (email, password_hash)
    VALUES (${ADMIN_EMAIL}, ${hash})
    ON CONFLICT (email) DO UPDATE
      SET password_hash = EXCLUDED.password_hash,
          updated_at    = CURRENT_TIMESTAMP
  `

  console.log('')
  console.log('✅ Admin kullanıcısı hazır!')
  console.log('   Email   :', ADMIN_EMAIL)
  console.log('   Password:', ADMIN_PASSWORD)
  console.log('')
  console.log('👉 /admin/login adresine git ve bu bilgilerle giriş yap.')
}

seedAdmin().catch(err => {
  console.error('❌', err)
  process.exit(1)
})
