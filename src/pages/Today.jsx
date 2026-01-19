import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { searchFoods } from '../lib/foods';
import DailyStats from '../components/DailyStats';
import AddMealForm from '../components/AddMealForm';
import MealItem from '../components/MealItem';

function Today({ profile }) {
  const [meals, setMeals] = useState([]);
  const [dailyTotal, setDailyTotal] = useState(0);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchTodayMeals();
  }, []);

  const fetchTodayMeals = async () => {
    const today = new Date().toISOString().split('T')[0];
    const { data } = await supabase
      .from('meals')
      .select('*')
      .eq('user_id', profile.id)
      .eq('meal_date', today);

    if (data) {
      setMeals(data);
      const total = data.reduce((sum, meal) => sum + meal.calories, 0);
      setDailyTotal(total);
    }
  };

  const handleAddMeal = async (mealData) => {
    const today = new Date().toISOString().split('T')[0];
    const { error } = await supabase
      .from('meals')
      .insert([{
        ...mealData,
        user_id: profile.id,
        meal_date: today,
      }]);

    if (!error) {
      fetchTodayMeals();
      setShowForm(false);
    }
  };

  const handleDeleteMeal = async (mealId) => {
    await supabase.from('meals').delete().eq('id', mealId);
    fetchTodayMeals();
  };

  const remaining = Math.max(0, profile.calorie_goal - dailyTotal);

  return (
    <div>
      <DailyStats
        dailyTotal={dailyTotal}
        calorieGoal={profile.calorie_goal}
        remaining={remaining}
      />

      {showForm ? (
        <AddMealForm
          onAddMeal={handleAddMeal}
          onCancel={() => setShowForm(false)}
        />
      ) : (
        <button onClick={() => setShowForm(true)}>+ Add Meal</button>
      )}

      <div className="card">
        <h2>Today's Meals</h2>
        {meals.length === 0 ? (
          <p>No meals logged yet</p>
        ) : (
          meals.map(meal => (
            <MealItem
              key={meal.id}
              meal={meal}
              onDelete={handleDeleteMeal}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Today;
