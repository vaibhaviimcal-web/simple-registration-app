# 🚨 CRITICAL: Remove Old Environment Variable

## The Problem

Your app is still trying to connect to the pooler database because the old `DATABASE_URL` environment variable is still set in Vercel.

## The Solution

### Step 1: Delete Old Variable in Vercel

1. Go to https://vercel.com/dashboard
2. Click on **simple-registration-app**
3. Click **Settings** → **Environment Variables**
4. **FIND AND DELETE:** `DATABASE_URL` (if it exists)
5. Click the trash icon to remove it

### Step 2: Verify Correct Variables Are Set

Make sure you have ONLY these TWO variables:

#### Variable 1: NEXT_PUBLIC_SUPABASE_URL
- Go to Supabase Dashboard → Settings → API
- Copy **Project URL** (looks like: `https://vbmkuswcuzarmuzfdpul.supabase.co`)
- Add to Vercel with key: `NEXT_PUBLIC_SUPABASE_URL`

#### Variable 2: SUPABASE_SERVICE_ROLE_KEY
- Go to Supabase Dashboard → Settings → API
- Scroll to **Project API keys**
- Click eye icon on **service_role** key (NOT anon key!)
- Copy the long key starting with `eyJ`
- Add to Vercel with key: `SUPABASE_SERVICE_ROLE_KEY`

### Step 3: Redeploy

1. Go to **Deployments** tab in Vercel
2. Click **...** on latest deployment
3. Click **Redeploy**
4. Wait for completion

### Step 4: Test

1. Visit https://simple-registration-app.vercel.app/register
2. Try registering a user
3. Should work now!

---

## Checklist

- [ ] Deleted `DATABASE_URL` from Vercel
- [ ] Added `NEXT_PUBLIC_SUPABASE_URL` 
- [ ] Added `SUPABASE_SERVICE_ROLE_KEY`
- [ ] Redeployed the app
- [ ] Tested registration

---

## Screenshot Guide

### Where to find Supabase keys:

1. **Supabase Dashboard** → Your Project
2. **Settings** (gear icon) → **API**
3. You'll see:
   - **Project URL**: Copy this for `NEXT_PUBLIC_SUPABASE_URL`
   - **API Keys** section:
     - `anon` `public` ❌ Don't use
     - `service_role` `secret` ✅ Use this for `SUPABASE_SERVICE_ROLE_KEY`

### Where to set in Vercel:

1. **Vercel Dashboard** → Your Project
2. **Settings** → **Environment Variables**
3. Click **Add New**
4. Enter key name and value
5. Select all environments (Production, Preview, Development)
6. Click **Save**

---

## Still Getting Errors?

If you still see pooler connection errors:
1. Double-check you deleted `DATABASE_URL`
2. Make sure you redeployed after changing variables
3. Check Vercel logs for debug output
4. The logs should show "Supabase URL exists: true" and "Supabase Key exists: true"
