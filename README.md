# Calorie Tracker App

A production-ready full-stack calorie tracker built with React and Supabase. Track daily calorie intake, calculate BMR/TDEE, set goals, and view progress over time.

## Features

- BMR/TDEE Calculations - Automatically calculates your daily calorie needs
- Meal Logging - Add meals with calories and macros in real-time
- Goal Tracking - Set weight goals (lose, maintain, gain) and track progress
- Calendar View - See your daily totals and trends over time
- Secure Auth - Firebase-style authentication with Supabase
- Pre-loaded Foods - 15 common foods with nutrition data
- Fast & Responsive - Built with Vite for instant load times

## Quick Start (5 Minutes)

### Step 1: Follow PRODUCTION_READY_SETUP.md

This file has ALL the code templates you need to create the app in 5 minutes.

### Step 2: Copy Code from Documentation

- **PRODUCTION_READY_SETUP.md** - Setup guide with all file templates
- **REACT_COMPONENTS_COMPLETE.md** - React components ready to copy-paste
- **ALL_COMPONENTS_COPY_PASTE.md** - Additional component code

### Step 3: Install & Configure

```bash
npm install
```

Update `src/lib/supabase.js` with your Supabase credentials

### Step 4: Run Locally

```bash
npm run dev
```

Open http://localhost:5173 in your browser.

### Step 5: Deploy

```bash
npm run build
```

Your app automatically deploys to GitHub Pages.

## Database Schema

Your Supabase has 4 pre-configured tables:
- profiles - User data and calorie goals
- meals - Daily meal entries
- weights - Weight tracking
- daily_summaries - Aggregated daily totals

All with Row Level Security (RLS) enabled.

## Tech Stack

- Frontend: React 18 + Vite
- Backend: Supabase (PostgreSQL + Auth)
- Deployment: GitHub Pages

## Documentation

See the markdown files in the repo root for complete setup instructions and all source code.

---

**Happy Tracking!**
