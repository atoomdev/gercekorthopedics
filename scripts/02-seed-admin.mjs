/**
 * Admin seed script (ESM, dotenv built-in via --env-file flag or manual read)
 * Run: node --env-file=.env scripts/02-seed-admin.mjs
 */

import { readFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

// Load .env manually if not already loaded (fallback for older Node)
const __dirname = dirname(fileURLToPath(import.meta.url))
const envPath = resolve(__dirname, '../.env')

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
      if (key && !process.env[key]) {
        process.env[key] = val
      }
    }
    console.log('✓ .env loaded from:', envPath)
  } catch {
    console.warn('⚠ Could not load .env file:', envPath)
  }
}

if (!process.env.DATABASE_URL) {
  console.error('❌ DATABASE_URL is not set. Add it to .env and re-run.')
  process.exit(1)
}

import { neon } from '@neondatabase/serverless'
import bcrypt from 'bcryptjs'

const ADMIN_EMAIL    = 'admin@gmail.com'
const ADMIN_PASSWORD = 'admin123'

const sql = neon(process.env.DATABASE_URL)

async function seedAdmin() {
  console.log('🔄 Seeding admin user...')

  try {
    // Ensure schema exists
    await sql`
      CREATE TABLE IF NOT EXISTS admin_users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) NOT NULL UNIQUE,
        password_hash VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `
    console.log('✓ admin_users table ready')

    const hashedPassword = await bcrypt.hash(ADMIN_PASSWORD, 10)

    await sql`
      INSERT INTO admin_users (email, password_hash)
      VALUES (${ADMIN_EMAIL}, ${hashedPassword})
      ON CONFLICT (email) DO UPDATE
        SET password_hash = EXCLUDED.password_hash,
            updated_at    = CURRENT_TIMESTAMP
    `

    console.log('')
    console.log('✅ Admin user created/updated successfully!')
    console.log('   Email   :', ADMIN_EMAIL)
    console.log('   Password:', ADMIN_PASSWORD)
    console.log('')
    console.log('👉 Go to /admin/login and sign in with the credentials above.')
  } catch (error) {
    console.error('❌ Error seeding admin:', error)
    process.exit(1)
  }
}

seedAdmin()
