-- Create admin users table
CREATE TABLE IF NOT EXISTS admin_users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create blog posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id SERIAL PRIMARY KEY,
  title_en VARCHAR(500) NOT NULL,
  title_tr VARCHAR(500) NOT NULL,
  slug_en VARCHAR(500) NOT NULL UNIQUE,
  slug_tr VARCHAR(500) NOT NULL UNIQUE,
  content_en TEXT NOT NULL,
  content_tr TEXT NOT NULL,
  excerpt_en VARCHAR(1000),
  excerpt_tr VARCHAR(1000),
  featured_image_url VARCHAR(500),
  author VARCHAR(255),
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create announcements table
CREATE TABLE IF NOT EXISTS announcements (
  id SERIAL PRIMARY KEY,
  title_en VARCHAR(500) NOT NULL,
  title_tr VARCHAR(500) NOT NULL,
  description_en TEXT NOT NULL,
  description_tr TEXT NOT NULL,
  published BOOLEAN DEFAULT true,
  display_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create contact submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(published);
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug_en ON blog_posts(slug_en);
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug_tr ON blog_posts(slug_tr);
CREATE INDEX IF NOT EXISTS idx_announcements_published ON announcements(published);
CREATE INDEX IF NOT EXISTS idx_announcements_display_date ON announcements(display_date DESC);

-- Insert default admin user (password: 123)
INSERT INTO admin_users (username, password_hash) 
VALUES ('123', '$2b$10$5mYhLPYM.Vvkr1VTaH8Gye9h6VLHc8eMUGG0zRQ2zVzVz2VzVzVzV')
ON CONFLICT (username) DO NOTHING;
