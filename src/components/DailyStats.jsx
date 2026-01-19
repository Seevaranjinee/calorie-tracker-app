import React from 'react';

function DailyStats({ dailyTotal, calorieGoal, remaining }) {
  const percentage = Math.min(100, (dailyTotal / calorieGoal) * 100);

  return (
    <div className="card">
      <div className="stats">
        <div className="stat-box">
          <div className="stat-label">Consumed</div>
          <div className="stat-value">{Math.round(dailyTotal)}</div>
          <div className="stat-label" style={{ fontSize: '0.8em', marginTop: '5px' }}>cal</div>
        </div>
        <div className="stat-box">
          <div className="stat-label">Goal</div>
          <div className="stat-value">{Math.round(calorieGoal)}</div>
          <div className="stat-label" style={{ fontSize: '0.8em', marginTop: '5px' }}>cal</div>
        </div>
        <div className="stat-box">
          <div className="stat-label">Remaining</div>
          <div className="stat-value" style={{ color: remaining > 0 ? '#4CAF50' : '#f44336' }}>
            {Math.round(remaining)}
          </div>
          <div className="stat-label" style={{ fontSize: '0.8em', marginTop: '5px' }}>cal</div>
        </div>
      </div>

      <div style={{ marginTop: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
          <span>Progress</span>
          <span>{percentage.toFixed(0)}%</span>
        </div>
        <div style={{
          width: '100%',
          height: '10px',
          backgroundColor: '#e0e0e0',
          borderRadius: '5px',
          overflow: 'hidden'
        }}>
          <div style={{
            width: `${percentage}%`,
            height: '100%',
            backgroundColor: percentage > 100 ? '#f44336' : '#4CAF50',
            transition: 'width 0.3s ease'
          }}></div>
        </div>
      </div>
    </div>
  );
}

export default DailyStats;
