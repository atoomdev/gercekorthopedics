import { neon } from '@neondatabase/serverless'
import * as bcrypt from 'bcryptjs'

if (!process.env.DATABASE_URL) {
  console.error('Set DATABASE_URL (Neon connection string) and run again.')
  process.exit(1)
}

const sql = neon(process.env.DATABASE_URL)

async function seedAdmin() {
  try {
    const hashedPassword = await bcrypt.hash('admin', 10)

    try {
      await sql`
        INSERT INTO admin_users (email, password_hash)
        VALUES (${'admin@gmail.com'}, ${hashedPassword})
        ON CONFLICT (email) DO UPDATE SET
          password_hash = EXCLUDED.password_hash
      `
      console.log('✓ Admin user (email): admin@gmail.com / admin')
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e)
      if (msg.includes('email') && msg.includes('does not exist')) {
        await sql`
          INSERT INTO admin_users (username, password_hash)
          VALUES (${'admin@gmail.com'}, ${hashedPassword})
          ON CONFLICT (username) DO UPDATE SET
            password_hash = EXCLUDED.password_hash
        `
        console.log('✓ Admin user (username column): admin@gmail.com / admin')
      } else {
        throw e
      }
    }

    console.log('\n✅ Admin seed completed.')
  } catch (error) {
    console.error('Error seeding admin:', error)
    process.exit(1)
  }
}

seedAdmin()
