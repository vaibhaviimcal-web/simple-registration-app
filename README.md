# Simple Registration App

A minimal Next.js application with user registration and Supabase Postgres database.

## Features

- ✅ User registration with name, email, and password
- ✅ Password hashing with bcrypt
- ✅ Email validation and duplicate checking
- ✅ PostgreSQL database with Supabase
- ✅ Beautiful gradient UI
- ✅ Success page after registration
- ✅ Ready for Vercel deployment

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Database:** PostgreSQL (Supabase)
- **Password Hashing:** bcryptjs
- **Styling:** Inline CSS (no dependencies)

## Setup Instructions

### 1. Database Setup

Run the SQL in `database-setup.sql` in your Supabase SQL Editor:

```sql
-- This creates the users table
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
```

### 2. Get Database Connection String

1. Go to Supabase Dashboard → Settings → Database
2. Scroll to "Connection Pooling" section
3. Copy the **Transaction mode** connection string
4. Replace `[YOUR-PASSWORD]` with your database password

**Example:**
```
postgresql://postgres:YourPassword@aws-1-ap-south-1.pooler.supabase.com:6543/postgres
```

### 3. Deploy to Vercel

1. Go to [Vercel](https://vercel.com)
2. Import this repository
3. Add environment variable:
   - **Name:** `DATABASE_URL`
   - **Value:** Your Supabase connection string (from step 2)
4. Click "Deploy"

### 4. Test the App

1. Visit your deployed URL
2. Click "Get Started"
3. Fill in the registration form
4. Submit and see success page!

## Environment Variables

Only one environment variable is required:

```env
DATABASE_URL=postgresql://postgres:password@host:6543/postgres
```

**Important:** Use the **Connection Pooling** URL (port 6543), not the direct connection (port 5432).

## Project Structure

```
simple-registration-app/
├── app/
│   ├── api/
│   │   └── register/
│   │       └── route.ts          # Registration API endpoint
│   ├── register/
│   │   └── page.tsx              # Registration form page
│   ├── success/
│   │   └── page.tsx              # Success page
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Homepage
│   └── globals.css               # Global styles
├── lib/
│   └── db.ts                     # Database connection
├── database-setup.sql            # SQL to create tables
├── package.json                  # Dependencies
├── tsconfig.json                 # TypeScript config
├── next.config.js                # Next.js config
└── README.md                     # This file
```

## API Endpoints

### POST /api/register

Register a new user.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Success Response (201):**
```json
{
  "success": true,
  "message": "Registration successful!",
  "user": {
    "id": "uuid",
    "name": "John Doe",
    "email": "john@example.com",
    "createdAt": "2025-12-27T04:39:43.000Z"
  }
}
```

**Error Responses:**
- `400` - Missing fields or invalid input
- `409` - Email already registered
- `500` - Server error

## Validation Rules

- **Name:** Required
- **Email:** Required, valid email format, unique
- **Password:** Required, minimum 6 characters

## Next Steps

After successful deployment, you can add:

1. **Login functionality** - Authenticate users
2. **User dashboard** - Show user profile
3. **Password reset** - Email-based password recovery
4. **Email verification** - Verify email addresses
5. **More features** - Based on your requirements

## Support

If you encounter any issues:

1. Check Vercel deployment logs
2. Verify DATABASE_URL is correct
3. Ensure Supabase database is active
4. Check that the users table exists

## License

MIT
