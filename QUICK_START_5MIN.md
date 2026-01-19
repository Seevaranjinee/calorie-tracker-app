# ⚡ CALORIE TRACKER - RUN IN 5 MINUTES

## 🚀 Super Quick Start

Everything is ready in your GitHub repo. Follow these 4 steps:

### Step 1️⃣: Clone (30 seconds)
```bash
git clone https://github.com/Seevaranjinee/calorie-tracker-app.git
cd calorie-tracker-app
```

### Step 2️⃣: Install (1-2 minutes)
```bash
npm install
```

### Step 3️⃣: Configure Supabase (1 minute)
1. Open `src/lib/supabase.js`
2. Replace these two lines with YOUR Supabase credentials:
```javascript
const SUPABASE_URL = 'YOUR_SUPABASE_PROJECT_URL'
const SUPABASE_KEY = 'YOUR_SUPABASE_PUBLISHABLE_KEY'
```
**Get your credentials from:** https://app.supabase.com → Your Project → Settings → API

### Step 4️⃣: Run (1 minute)
```bash
npm run dev
```
Open: `http://localhost:5173`

---

## 💻 WHAT YOU'LL SEE:

1. **Sign Up Page** - Create your account
2. **Onboarding** - Enter your weight, height, age → Auto-calculates BMR + daily calorie goal
3. **Today's Page** - 
   - Shows: Calories Consumed | Goal | Remaining
   - Add meals from 15 pre-loaded foods (or custom calories)
   - See live progress bar
4. **Calendar** - View last 30 days of calorie tracking

---

## 🎯 TEST CREDENTIALS

You can sign up with any email:
- Email: `test@example.com`
- Password: `Test123456!`

---

## 📱 Try on Mobile

After running locally, open on your phone:
```
http://YOUR_COMPUTER_IP:5173
```
(Get YOUR_COMPUTER_IP from command line output)

---

## 🌐 DEPLOY TO WEB

Once everything works locally, deploy free to GitHub Pages:
```bash
npm run build
```
Your app will be live at: `https://seevaranjinee.github.io/calorie-tracker-app/`

---

## 📂 PROJECT FILES

All source code is in the `src/` folder:
- **src/pages/** - Authentication, Setup, Dashboard, Daily Tracking, Calendar
- **src/components/** - Meal form, Stats display, Meal items
- **src/lib/** - Supabase setup, BMR calculator, Food database
- **src/styles/** - Complete CSS styling

---

## ⚠️ COMMON ISSUES

**"Can't sign up?"**
→ Check Supabase URL & Key are correct in `src/lib/supabase.js`

**"npm install fails?"**
→ Make sure Node.js v16+ is installed: `node --version`

**"Page is blank?"**
→ Open browser console (F12) and check for errors

---

## 🎉 THAT'S IT!

You now have a fully functional calorie tracker app with:
✅ User authentication
✅ BMR/TDEE calculator
✅ Daily meal logging
✅ Calorie goals tracking
✅ Calendar view
✅ Database persistence

Happy tracking! 💪
