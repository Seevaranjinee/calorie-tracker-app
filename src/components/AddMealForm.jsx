import React, { useState } from 'react';
import { searchFoods } from '../lib/foods';

function AddMealForm({ onAddMeal, onCancel }) {
  const [foodName, setFoodName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [customCalories, setCustomCalories] = useState(0);
  const [foods, setFoods] = useState([]);
  const [selectedFood, setSelectedFood] = useState(null);

  const handleFoodSearch = (e) => {
    const query = e.target.value;
    setFoodName(query);
    if (query.length > 0) {
      setFoods(searchFoods(query));
    } else {
      setFoods([]);
    }
  };

  const handleSelectFood = (food) => {
    setSelectedFood(food);
    setFoodName(food.name);
    setFoods([]);
    setCustomCalories(0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const calories = customCalories || (selectedFood ? selectedFood.calories * quantity : 0);
    
    if (calories > 0) {
      onAddMeal({
        food_name: foodName,
        calories: Math.round(calories),
        protein: selectedFood ? selectedFood.protein * quantity : 0,
        carbs: selectedFood ? selectedFood.carbs * quantity : 0,
        fat: selectedFood ? selectedFood.fat * quantity : 0,
      });
      setFoodName('');
      setQuantity(1);
      setCustomCalories(0);
      setSelectedFood(null);
    }
  };

  return (
    <div className="card">
      <h2>Add Meal</h2>
      <form onSubmit={handleSubmit}>
        <label>Food Name</label>
        <input
          type="text"
          value={foodName}
          onChange={handleFoodSearch}
          placeholder="Search food..."
        />
        {foods.length > 0 && (
          <div style={{ border: '1px solid #ddd', borderRadius: '4px', maxHeight: '150px', overflowY: 'auto', marginBottom: '10px' }}>
            {foods.map(food => (
              <div
                key={food.id}
                onClick={() => handleSelectFood(food)}
                style={{ padding: '8px', cursor: 'pointer', borderBottom: '1px solid #eee' }}
              >
                {food.name} ({food.calories}cal/{food.serving})
              </div>
            ))}
          </div>
        )}

        {selectedFood && (
          <>
            <label>Quantity</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(parseFloat(e.target.value))}
              min="0.1"
              step="0.1"
            />
            <div style={{ background: '#f9f9f9', padding: '10px', borderRadius: '4px', marginBottom: '10px' }}>
              <p>Calories: {(selectedFood.calories * quantity).toFixed(0)}</p>
            </div>
          </>
        )}

        {!selectedFood && foodName && (
          <>
            <label>Custom Calories</label>
            <input
              type="number"
              value={customCalories}
              onChange={(e) => setCustomCalories(parseFloat(e.target.value))}
              placeholder="Enter calories"
            />
          </>
        )}

        <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
          <button type="submit" style={{ flex: 1 }}>Add Meal</button>
          <button type="button" onClick={onCancel} style={{ flex: 1, background: '#999' }}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default AddMealForm;
