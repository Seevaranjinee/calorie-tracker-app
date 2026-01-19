# 📚 DETAILED STEP-BY-STEP GUIDE - BUILD YOUR APP FROM SCRATCH

## Overview
This guide walks you through EVERY SINGLE STEP to build and deploy your calorie tracker app. Follow each step carefully.

**Total Time**: 1-2 hours
**Difficulty**: Beginner Friendly

---

# PART 1: PREPARATION (15 minutes)

## STEP 1: Install Node.js

**What is Node.js?** It's software that lets you run JavaScript on your computer (not just in browsers).

### How to Install:
1. Go to https://nodejs.org/
2. Download the **LTS (Long Term Support)** version (Currently v20 or higher)
3. Click the installer and follow the prompts
4. Choose "Install for all users"
5. Keep clicking "Next" until done

### Verify Installation:
1. Open **Command Prompt** (Windows) or **Terminal** (Mac/Linux)
2. Type: `node --version`
3. You should see a version number like `v20.10.0`
4. Type: `npm --version`
5. You should see something like `10.2.0`

✅ **If you see version numbers, Node.js is installed correctly!**

---

## STEP 2: Install Git

**What is Git?** Software that lets you save code versions and work with GitHub.

### How to Install:
1. Go to https://git-scm.com/
2. Download the installer
3. Click through the installer (keep defaults)
4. Click "Finish"

### Verify Installation:
1. Open Command Prompt/Terminal
2. Type: `git --version`
3. You should see something like `git version 2.40.0`

✅ **If you see a version, Git is installed!**

---

## STEP 3: Install a Code Editor

**What is a Code Editor?** Software where you write and edit code.

### Recommended: Visual Studio Code (VS Code)
1. Go to https://code.visualstudio.com/
2. Download for your system (Windows/Mac/Linux)
3. Install it (keep defaults)
4. Open VS Code

**Optional but helpful extensions:**
- ES7+ React/Redux/React-Native snippets
- Prettier (code formatter)

---

# PART 2: GET THE CODE (5 minutes)

## STEP 4: Clone Your Repository

**What does "clone" mean?** Copy the entire project from GitHub to your computer.

### How to Clone:
1. Open Command Prompt/Terminal
2. Navigate to where you want the project
   ```
   cd Documents
   ```
   (This puts you in your Documents folder)

3. Clone the repository:
   ```
   git clone https://github.com/Seevaranjinee/calorie-tracker-app.git
   ```
   (Wait for it to finish - you'll see a "calorie-tracker-app" folder)

4. Enter the project folder:
   ```
   cd calorie-tracker-app
   ```

✅ **You now have all the code on your computer!**

---

## STEP 5: Open Project in VS Code

### How to Open:
1. In VS Code, click **File** → **Open Folder**
2. Navigate to the "calorie-tracker-app" folder you just cloned
3. Click **Select Folder**

**You should now see the project file structure on the left side:**
```
calorie-tracker-app/
├── src/
├── public/
├── node_modules/ (will be created)
├── package.json
└── other files...
```

✅ **Project is open! You can see all the files!**

---

# PART 3: INSTALL DEPENDENCIES (5 minutes)

## STEP 6: Install npm Packages

**What are npm packages?** Pre-written code libraries that other developers have written for us to use.

### How to Install:
1. In VS Code, click **Terminal** → **New Terminal**
   (A terminal opens at the bottom of VS Code)

2. Type this command:
   ```
   npm install
   ```

3. Wait... this will download ~500MB of dependencies
   (Takes 2-5 minutes depending on internet speed)

4. You'll see lots of text. When it finishes, you'll see:
   ```
   added XXX packages in XXs
   ```

✅ **All dependencies are installed!**

---

# PART 4: SET UP SUPABASE (10 minutes)

## STEP 7: Create Supabase Account

**What is Supabase?** It's a database service in the cloud where your app stores user data.

### How to Create Account:
1. Go to https://app.supabase.com
2. Click **Sign Up**
3. Sign up with GitHub (easiest option)
4. Follow the prompts

✅ **You have a Supabase account!**

---

## STEP 8: Create a New Project

### How to Create:
1. Click **+ New Project**
2. Fill in:
   - **Name**: `calorie-tracker` (or any name)
   - **Database Password**: Create a strong password (write it down!)
   - **Region**: Choose closest to your location (e.g., Asia Pacific if in India)
3. Click **Create New Project**
4. Wait 2-3 minutes for it to set up

✅ **Project is created!**

---

## STEP 9: Get Your Credentials

**What are credentials?** Your username and password for the database.

### How to Find:
1. In Supabase dashboard, click **Settings** (gear icon)
2. Click **API** on the left
3. Find and copy these two things:
   - **Project URL** (looks like `https://xxxxx.supabase.co`)
   - **anon/public Key** (long string of letters and numbers)

✅ **You have your credentials!**

---

## STEP 10: Update Your Code with Credentials

### How to Update:
1. In VS Code, open: `src/lib/supabase.js`
2. Replace:
   ```
   'YOUR_SUPABASE_PROJECT_URL'
   ```
   with your actual URL

3. Replace:
   ```
   'YOUR_SUPABASE_PUBLISHABLE_KEY'
   ```
   with your actual key

4. Save the file (Ctrl+S)

✅ **Your app is now connected to the database!**

---

# PART 5: ADD ALL REACT COMPONENTS (20 minutes)

## STEP 11: Copy React Components

**What are components?** Small pieces of the app that do specific tasks.

### How to Copy Components:

**You need to copy files from the documentation to your project:**

1. Open `REACT_COMPONENTS_COMPLETE.md` in your browser
2. Find the code section you need (e.g., `src/pages/Auth.jsx`)
3. Click **Copy** button
4. In VS Code, right-click on `src/pages/` folder
5. Click **New File**
6. Name it `Auth.jsx`
7. Paste the code (Ctrl+V)
8. Save (Ctrl+S)

**Repeat for these files:**

From `REACT_COMPONENTS_COMPLETE.md`:
- src/pages/Auth.jsx
- src/pages/Onboarding.jsx
- src/pages/Dashboard.jsx

From `ALL_COMPONENTS_COPY_PASTE.md`:
- src/pages/Today.jsx
- src/pages/Calendar.jsx
- src/components/AddMealForm.jsx
- src/components/DailyStats.jsx
- src/components/MealItem.jsx

From `PRODUCTION_READY_SETUP.md`:
- src/styles/App.css (paste into existing file)
- public/index.html
- src/main.jsx

**After copying, your file structure should look like:**
```
src/
├── pages/
│   ├── Auth.jsx ✅
│   ├── Onboarding.jsx ✅
│   ├── Dashboard.jsx ✅
│   ├── Today.jsx ✅
│   └── Calendar.jsx ✅
├── components/
│   ├── AddMealForm.jsx ✅
│   ├── DailyStats.jsx ✅
│   └── MealItem.jsx ✅
├── styles/
│   └── App.css ✅
├── App.jsx ✅ (already exists)
├── main.jsx ✅
└── lib/ ✅ (already exists)
```

✅ **All components are in place!**

---

# PART 6: TEST LOCALLY (10 minutes)

## STEP 12: Start the Development Server

**What is a development server?** It runs your app on your computer so you can test it.

### How to Start:
1. In VS Code terminal, type:
   ```
   npm run dev
   ```

2. You'll see:
   ```
   VITE v4.x.x  ready in xxx ms
   ➜  Local:   http://localhost:5173/
   ```

3. Click the URL or copy-paste it into your browser

✅ **Your app is running locally!**

---

## STEP 13: Test the App

### What to Test:
1. **Sign Up Page**
   - Enter email: `test@example.com`
   - Enter password: `Test123456!`
   - Click Sign Up
   - You should see the Onboarding page

2. **Onboarding Page**
   - Enter your details (name, age, weight, height)
   - Watch the BMR/TDEE numbers update
   - Click "Complete Setup"

3. **Dashboard**
   - You should see "Welcome" message
   - See your calorie goal
   - Toggle between Today and History

4. **Add a Meal**
   - Click on "Today" tab
   - Select a food from dropdown
   - See calories update
   - Check the progress bar

✅ **All features work! Your app is functional!**

---

# PART 7: BUILD & DEPLOY (10 minutes)

## STEP 14: Build Your App

**What does "build" mean?** Convert your code into optimized files ready for the internet.

### How to Build:
1. Stop the local server (Ctrl+C in terminal)
2. Type:
   ```
   npm run build
   ```

3. Wait for it to finish. You'll see:
   ```
   dist/ folder built successfully
   ```

4. You now have a `dist/` folder with your app ready to deploy

✅ **Your app is built and ready!**

---

## STEP 15: Deploy to GitHub Pages

**What is GitHub Pages?** Free hosting service that makes your app live on the internet.

### How to Deploy:
1. Push your code to GitHub:
   ```
   git add .
   git commit -m "Final build with all components"
   git push origin main
   ```

2. Go to your GitHub repository settings
3. Scroll to **Pages**
4. Under **Source**, select **Deploy from a branch**
5. Select **main** branch and **/dist** folder
6. Click **Save**

7. GitHub will build and deploy your app
8. Wait 2-3 minutes

9. Your app will be live at:
   ```
   https://Seevaranjinee.github.io/calorie-tracker-app/
   ```

✅ **Your app is LIVE on the internet!**

---

# TROUBLESHOOTING

## Problem: "npm command not found"
**Solution**: Node.js not installed. Go back to Step 1 and install it.

## Problem: "Port 5173 already in use"
**Solution**: Another app is using that port. Type:
```
npm run dev -- --port 5174
```

## Problem: "Component not found" error
**Solution**: Make sure all files are created with exact paths and names (case-sensitive!).

## Problem: App doesn't load
**Solution**: Check browser console (F12) for error messages. Debug from there.

## Problem: GitHub Pages shows blank page
**Solution**: Make sure `vite.config.js` has correct `base` path:
```
base: '/calorie-tracker-app/'
```

---

# FINAL CHECKLIST

- [ ] Node.js installed
- [ ] Git installed
- [ ] VS Code installed
- [ ] Repository cloned
- [ ] npm packages installed
- [ ] Supabase account created
- [ ] Supabase credentials added to code
- [ ] All components copied
- [ ] Local testing done
- [ ] App built
- [ ] App deployed to GitHub Pages
- [ ] Live URL working

---

## 🎉 CONGRATULATIONS!

You now have a **LIVE, WORKING CALORIE TRACKER APP** on the internet!

**You learned:**
- How to set up a full-stack project
- How to work with React
- How to use Supabase (database)
- How to deploy to production
- How to use Git and GitHub

**Next Steps:**
1. Share your app with friends
2. Add it to your portfolio
3. Customize the design
4. Add more features
5. Apply for jobs using this project!

**Happy coding! 🚀**
