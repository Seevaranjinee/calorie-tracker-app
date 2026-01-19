# Complete Setup Guide: Calorie Tracker App

## Quick Start (5 minutes)

### 1. Clone the Repository
```bash
git clone https://github.com/Seevaranjinee/calorie-tracker-app.git
cd calorie-tracker-app
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Create `.env.local` File
In the project root, create a `.env.local` file with your Supabase credentials:

```
VITE_SUPABASE_URL=https://byxopuamrneewhqjwovh.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key_here
```

Get these from: Supabase Dashboard → Settings → API → Project URL & anon (public) key

### 4. Start Development Server
```bash
npm run dev
```

The app will open at `http://localhost:5173`

---

## Project Structure

```
calorie-tracker-app/
├── src/
│   ├── lib/
│   │   └── supabaseClient.ts       # Supabase client initialization
│   ├── pages/
│   │   ├── Auth.tsx                # Login/Signup
│   │   ├── Onboarding.tsx          # BMR calculation & profile
│   │   ├── Today.tsx               # Daily meal logging
│   │   ├── Calendar.tsx            # History & calendar view
│   │   └── Dashboard.tsx           # Main app wrapper
│   ├── components/
│   │   ├── AddMealForm.tsx         # Meal entry form
│   │   ├── DailyStats.tsx          # Calories display
│   │   └── MealList.tsx            # Today's meals
│   ├── App.tsx                     # Main app component
│   ├── App.css                     # Styling
│   └── main.tsx                    # Entry point
├── index.html
├── vite.config.ts
├── package.json
└── .env.local                      # Environment variables (not in git)
```

---

## Features Implemented

✅ **Authentication**
- Email/password signup & login
- Session management via Supabase Auth

✅ **BMR/TDEE Calculation**
- Mifflin-St Jeor formula for BMR
- Activity level multipliers for TDEE
- Goal-based calorie targets (maintenance, lose, gain)

✅ **Daily Meal Logging**
- Add unlimited meals with calories
- Edit/delete meals
- Real-time daily total calculation

✅ **Weight Tracking**
- Log weight entries
- Track weight progress over time

✅ **Calendar & History**
- View daily summaries in calendar view
- Color-coded status (on-track, over, under)
- Month-by-month navigation

---

## Environment Variables

| Variable | Description | Example |
|----------|-------------|----------|
| `VITE_SUPABASE_URL` | Your Supabase project URL | `https://xxx.supabase.co` |
| `VITE_SUPABASE_ANON_KEY` | Public anon key for auth | Long JWT token |

---

## Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## Database Schema

All tables are created in Supabase with Row-Level Security enabled.

### profiles
- `id` (UUID, primary key)
- `email`, `gender`, `age`, `height_cm`, `weight_kg`
- `activity_level`, `goal`
- `bmr`, `tdee`, `daily_calorie_target`
- `created_at`, `updated_at`

### meals
- `id` (UUID, primary key)
- `user_id` (references auth.users)
- `title`, `notes`, `calories`
- `eaten_at` (timestamp)
- `created_at`

### weights
- `id` (UUID, primary key)
- `user_id` (references auth.users)
- `weight_kg`
- `logged_at`, `created_at`

### daily_summaries
- `id` (UUID, primary key)
- `user_id`, `date`
- `total_calories`, `target_calories`, `weight_kg`
- `created_at`, `updated_at`

---

## Deployment

### Deploy to Vercel (Recommended)

1. Push to GitHub
2. Go to vercel.com and connect your repo
3. Add environment variables in Vercel dashboard
4. Click Deploy

### Deploy to Netlify

1. Push to GitHub
2. Connect Netlify to your repo
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Add environment variables
6. Deploy

---

## Troubleshooting

### "Module not found: @supabase/supabase-js"
```bash
npm install @supabase/supabase-js
```

### "Environment variables not loading"
- Ensure `.env.local` file is in the project root
- Variable names must start with `VITE_`
- Restart dev server after adding variables

### "Can't connect to Supabase"
- Check URL and key in `.env.local`
- Verify Supabase project is active
- Check browser console for errors

---

## Next Steps

1. **Customize Styling**: Edit `src/App.css` for your design
2. **Add More Nutrition Data**: Extend meals with protein, carbs, fats
3. **Add Photo Upload**: Store meal photos in Supabase Storage
4. **Mobile App**: Use React Native for iOS/Android version
5. **Social Features**: Add friend connections & challenges

---

## Support

- Supabase Docs: https://supabase.com/docs
- React Docs: https://react.dev
- Vite Docs: https://vitejs.dev

---

**Happy Tracking! 🎯**
