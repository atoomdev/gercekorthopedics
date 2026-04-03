-- One-time fix if admin_users was created with `username` instead of `email`.
-- Safe to run once in Neon SQL Editor (no-op if already migrated).
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_schema = 'public'
      AND table_name = 'admin_users'
      AND column_name = 'username'
  ) THEN
    ALTER TABLE admin_users RENAME COLUMN username TO email;
  END IF;
END $$;
