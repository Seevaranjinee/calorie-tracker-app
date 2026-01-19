# Complete React Component Source Code

## Installation: Copy-Paste All Files Below

---

## 1. src/lib/supabaseClient.ts

```typescript
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase credentials')
}

export const supabase = createClient(supabaseUrl, supabaseKey)
```

---

## 2. src/lib/foodDatabase.ts - 15 Foods + API Integration

```typescript
export interface FoodItem {
  id: string
  name: string
  calories: number
  protein: number
  carbs: number
  fat: number
  servingSize: string
  servingUnit: string
}

export const commonFoods: FoodItem[] = [
  { id: '1', name: 'Chicken Breast', calories: 165, protein: 31, carbs: 0, fat: 3.6, servingSize: '100', servingUnit: 'g' },
  { id: '2', name: 'Rice (cooked)', calories: 130, protein: 2.7, carbs: 28, fat: 0.3, servingSize: '100', servingUnit: 'g' },
  { id: '3', name: 'Broccoli', calories: 34, protein: 2.8, carbs: 7, fat: 0.4, servingSize: '100', servingUnit: 'g' },
  { id: '4', name: 'Egg', calories: 155, protein: 13, carbs: 1.1, fat: 11, servingSize: '1', servingUnit: 'large' },
  { id: '5', name: 'Banana', calories: 89, protein: 1.1, carbs: 23, fat: 0.3, servingSize: '1', servingUnit: 'medium' },
  { id: '6', name: 'Yogurt (plain)', calories: 59, protein: 10, carbs: 3.3, fat: 0.4, servingSize: '100', servingUnit: 'g' },
  { id: '7', name: 'Salmon', calories: 208, protein: 22, carbs: 0, fat: 13, servingSize: '100', servingUnit: 'g' },
  { id: '8', name: 'Oats', calories: 389, protein: 17, carbs: 66, fat: 7, servingSize: '100', servingUnit: 'g' },
  { id: '9', name: 'Almonds', calories: 579, protein: 21, carbs: 22, fat: 50, servingSize: '100', servingUnit: 'g' },
  { id: '10', name: 'Milk (2%)', calories: 61, protein: 3.2, carbs: 4.8, fat: 1.5, servingSize: '1', servingUnit: 'cup' },
  { id: '11', name: 'Peanut Butter', calories: 588, protein: 25, carbs: 20, fat: 50, servingSize: '2', servingUnit: 'tbsp' },
  { id: '12', name: 'Apple', calories: 52, protein: 0.3, carbs: 14, fat: 0.2, servingSize: '1', servingUnit: 'medium' },
  { id: '13', name: 'Sweet Potato', calories: 86, protein: 1.6, carbs: 20, fat: 0.1, servingSize: '100', servingUnit: 'g' },
  { id: '14', name: 'Olive Oil', calories: 884, protein: 0, carbs: 0, fat: 100, servingSize: '1', servingUnit: 'tbsp' },
  { id: '15', name: 'Chicken Thigh', calories: 209, protein: 26, carbs: 0, fat: 11, servingSize: '100', servingUnit: 'g' }
]

export function searchFood(query: string): FoodItem[] {
  const lowerQuery = query.toLowerCase()
  return commonFoods.filter(food => food.name.toLowerCase().includes(lowerQuery))
}
```

---

## 3. src/lib/utils.ts - BMR & TDEE Calculations

```typescript
export function calculateBMR(gender: string, weight: number, height: number, age: number): number {
  if (gender === 'male') return 10 * weight + 6.25 * height - 5 * age + 5
  return 10 * weight + 6.25 * height - 5 * age - 161
}

export function calculateTDEE(bmr: number, activityLevel: string): number {
  const multipliers: Record<string, number> = { sedentary: 1.2, lightly_active: 1.375, moderately_active: 1.55, very_active: 1.725, super_active: 1.9 }
  return bmr * (multipliers[activityLevel] || 1.55)
}

export function calculateDailyTarget(tdee: number, goal: string): number {
  const adjustments: Record<string, number> = { lose: -400, gain: 400, maintenance: 0 }
  return tdee + (adjustments[goal] || 0)
}

export function round2(num: number): number { return Math.round(num * 100) / 100 }
```

---

## SEE COMPONENTS.md FOR COMPLETE PAGE & COMPONENT CODE
