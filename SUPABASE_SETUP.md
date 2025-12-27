# How to Get Supabase API Keys

## Step 1: Go to Supabase Dashboard

1. Open https://supabase.com/dashboard
2. Click on your project: **ai-prescription-db**
3. Click on **Settings** (gear icon in left sidebar)
4. Click on **API** in the Settings menu

## Step 2: Get the Project URL

Look for the section called **Project URL** or **API URL**

Copy the URL that looks like:
```
https://vbmkuswcuzarmuzfdpul.supabase.co
```

**This is your `NEXT_PUBLIC_SUPABASE_URL`**

## Step 3: Get the Service Role Key

Scroll down to the **Project API keys** section

You'll see two keys:
- `anon` `public` - DON'T use this one
- `service_role` `secret` - USE THIS ONE ✅

Click the **eye icon** to reveal the `service_role` key

Copy the long key that looks like:
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZibWt1c3djdXphcm11emZkcHVsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTYxNjE2MTYxNiwiZXhwIjoxOTMxNzM3NjE2fQ.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

**This is your `SUPABASE_SERVICE_ROLE_KEY`**

## Step 4: Add to Vercel

1. Go to https://vercel.com/dashboard
2. Click on your project: **simple-registration-app**
3. Click **Settings** → **Environment Variables**
4. Add these TWO variables:

### Variable 1:
- **Key:** `NEXT_PUBLIC_SUPABASE_URL`
- **Value:** (paste your project URL from Step 2)
- **Environment:** Production, Preview, Development (check all)

### Variable 2:
- **Key:** `SUPABASE_SERVICE_ROLE_KEY`
- **Value:** (paste your service_role key from Step 3)
- **Environment:** Production, Preview, Development (check all)

5. Click **Save**

## Step 5: Redeploy

1. Go to **Deployments** tab
2. Click the **...** menu on the latest deployment
3. Click **Redeploy**
4. Wait for deployment to complete

## Step 6: Test

1. Go to https://simple-registration-app.vercel.app/register
2. Try registering a user
3. Check Vercel logs if there are still errors

---

## Common Issues

### "Invalid API key" error
- Make sure you copied the **service_role** key, NOT the anon key
- Make sure there are no extra spaces when pasting
- The key should start with `eyJ`

### "Database configuration missing" error
- Make sure both environment variables are set
- Make sure you selected all environments (Production, Preview, Development)
- Redeploy after adding variables

### Still not working?
- Check Vercel logs for the debug output
- The logs will show if the environment variables are being read correctly
