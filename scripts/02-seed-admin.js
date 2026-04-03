import { neon } from '@neondatabase/serverless'
import * as bcrypt from 'bcryptjs'

const sql = neon(process.env.DATABASE_URL)

async function seedAdmin() {
  try {
    // Create default admin user
    // Email: admin@gmail.com
    // Password: admin (should be changed after first login)
    const hashedPassword = await bcrypt.hash('admin', 10)

    const result = await sql(
      `INSERT INTO admin_users (email, password_hash) 
       VALUES ($1, $2) 
       ON CONFLICT (email) DO NOTHING
       RETURNING id`,
      ['admin@gmail.com', hashedPassword]
    )

    if (result.length > 0) {
      console.log('✓ Admin user created successfully')
      console.log('Email: admin@gmail.com')
      console.log('Password: admin (please change after login)')
    } else {
      console.log('✓ Admin user already exists')
    }

    // Create sample blog posts
    const samplePosts = [
      {
        title: 'Getting Started with Orthopedic Care',
        slug: 'getting-started-orthopedic-care',
        excerpt: 'Learn the basics of orthopedic care and how to maintain healthy joints.',
        content: 'Orthopedic care is essential for maintaining mobility and quality of life. Regular exercise, proper posture, and preventive measures can help avoid many common joint problems. Our team of experts is here to guide you through every step of your wellness journey.\n\nKey points to remember:\n- Stay active with appropriate exercises\n- Maintain good posture throughout the day\n- Listen to your body and seek professional help when needed\n- Invest in proper equipment and footwear',
        published: true,
      },
      {
        title: 'Recovery Tips After Surgery',
        slug: 'recovery-tips-after-surgery',
        excerpt: 'Essential guidelines for a smooth recovery after orthopedic surgery.',
        content: 'Post-surgery recovery is crucial for optimal results. Following your doctor\'s instructions and participating in rehabilitation programs can significantly improve outcomes.\n\nRecovery timeline:\n- Week 1-2: Rest and pain management\n- Week 3-4: Gentle mobility exercises\n- Week 5-8: Progressive strengthening\n- Week 8+: Return to normal activities (as cleared)',
        published: true,
      },
    ]

    for (const post of samplePosts) {
      const result = await sql(
        `INSERT INTO blog_posts (title, slug, excerpt, content, published) 
         VALUES ($1, $2, $3, $4, $5)
         ON CONFLICT (slug) DO NOTHING
         RETURNING id`,
        [post.title, post.slug, post.excerpt, post.content, post.published]
      )

      if (result.length > 0) {
        console.log(`✓ Blog post created: ${post.title}`)
      }
    }

    // Create sample announcement
    await sql(
      `INSERT INTO announcements (title, content, published) 
       VALUES ($1, $2, $3)
       ON CONFLICT DO NOTHING`,
      [
        'Welcome to Gerçek Ortopedi',
        'We are thrilled to announce the launch of our new website and online presence. This platform will allow us to better serve our patients and provide convenient access to our services and information.',
        true,
      ]
    )

    console.log('✓ Announcement created')
    console.log('\n✅ Database seeding completed successfully!')
  } catch (error) {
    console.error('Error seeding database:', error)
    process.exit(1)
  }
}

seedAdmin()
