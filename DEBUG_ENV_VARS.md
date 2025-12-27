# 🔍 Debug: Check Your Vercel Environment Variables

## The Problem

The error `getaddrinfo ENOTFOUND Pass-12IS210us-1.ap-south-1.pooler.supabase.com` means something is still trying to make a direct database connection.

## Possible Causes

1. **Old DATABASE_URL still exists** - Most likely cause
2. **Wrong Supabase URL format** - Should be HTTPS API URL, not pooler URL
3. **Cached deployment** - Old environment variables cached

## Step-by-Step Fix

### 1. Check Vercel Environment Variables

Go to: https://vercel.com/dashboard → simple-registration-app → Settings → Environment Variables

**You should see ONLY these 2 variables:**

✅ `NEXT_PUBLIC_SUPABASE_URL`
✅ `SUPABASE_SERVICE_ROLE_KEY`

**You should NOT see:**

❌ `DATABASE_URL`
❌ Any variable with "pooler" in the value
❌ Any variable with port 5432 or 6543

### 2. Verify NEXT_PUBLIC_SUPABASE_URL Format

The value should look like:
```
https://vbmkuswcuzarmuzfdpul.supabase.co
```

**NOT like:**
```
postgresql://...pooler.supabase.com:6543/postgres  ❌ WRONG
```

### 3. Get Correct Values from Supabase

#### For NEXT_PUBLIC_SUPABASE_URL:
1. Go to Supabase Dashboard
2. Settings → API
3. Look for **"Project URL"** or **"API URL"**
4. Copy the HTTPS URL (starts with `https://`)

#### For SUPABASE_SERVICE_ROLE_KEY:
1. Same page (Settings → API)
2. Scroll to **"Project API keys"**
3. Find the **service_role** key
4. Click the eye icon to reveal
5. Copy the entire key (starts with `eyJ`)

### 4. Delete ALL Environment Variables in Vercel

1. Go to Vercel → Settings → Environment Variables
2. Delete EVERY variable (DATABASE_URL, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)
3. Start fresh

### 5. Add Variables Again (Fresh)

Add these TWO variables:

**Variable 1:**
- Name: `NEXT_PUBLIC_SUPABASE_URL`
- Value: `https://vbmkuswcuzarmuzfdpul.supabase.co` (your actual URL)
- Environments: Check ALL (Production, Preview, Development)

**Variable 2:**
- Name: `SUPABASE_SERVICE_ROLE_KEY`
- Value: `eyJ...` (your actual service role key)
- Environments: Check ALL (Production, Preview, Development)

### 6. Redeploy

1. Go to Deployments tab
2. Click "..." on latest deployment
3. Click "Redeploy"
4. **IMPORTANT:** Check "Use existing Build Cache" is UNCHECKED
5. Click "Redeploy"

### 7. Test

After redeployment:
1. Go to https://simple-registration-app.vercel.app/register
2. Open browser console (F12)
3. Try to register
4. Check Vercel logs for any errors

## What to Look For in Logs

**Good logs (should see):**
```
Supabase URL exists: true
Supabase Key exists: true
Supabase URL value: https://vbmkuswcuzarmuzfdpul.supabase.co
```

**Bad logs (should NOT see):**
```
getaddrinfo ENOTFOUND ...pooler.supabase.com
DATABASE_URL
port 5432
port 6543
```

## Still Not Working?

If you still see pooler connection errors after following ALL steps:

1. Take a screenshot of your Vercel environment variables page
2. Take a screenshot of your Supabase Settings → API page
3. Share the Vercel deployment logs
4. We'll debug from there

## Common Mistakes

❌ Using the connection string instead of API URL
❌ Using anon key instead of service_role key
❌ Not checking all environments when adding variables
❌ Not redeploying after changing variables
❌ Having old DATABASE_URL still set
❌ Copying values with extra spaces or line breaks
