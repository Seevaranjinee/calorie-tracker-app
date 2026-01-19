import React from 'react';

function MealItem({ meal, onDelete }) {
  return (
    <div style={{
      background: '#f9f9f9',
      padding: '15px',
      marginBottom: '10px',
      borderRadius: '4px',
      borderLeft: '4px solid #4CAF50',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div>
        <div style={{ fontWeight: 'bold', fontSize: '1.1em' }}>{meal.food_name}</div>
        <div style={{ fontSize: '0.9em', color: '#666', marginTop: '5px' }}>
          {meal.calories} cal
          {meal.protein > 0 && ` • P: ${meal.protein.toFixed(1)}g`}
          {meal.carbs > 0 && ` • C: ${meal.carbs.toFixed(1)}g`}
          {meal.fat > 0 && ` • F: ${meal.fat.toFixed(1)}g`}
        </div>
      </div>
      <button
        onClick={() => onDelete(meal.id)}
        style={{
          background: '#f44336',
          padding: '8px 16px',
          border: 'none',
          borderRadius: '4px',
          color: 'white',
          cursor: 'pointer',
          fontSize: '0.9em'
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default MealItem;
