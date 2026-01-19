import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

function Calendar({ profile }) {
  const [summaries, setSummaries] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    fetchMonthlySummaries();
  }, [selectedDate]);

  const fetchMonthlySummaries = async () => {
    const year = selectedDate.getFullYear();
    const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
    const startDate = `${year}-${month}-01`;
    const endDate = `${year}-${month}-31`;

    const { data } = await supabase
      .from('daily_summaries')
      .select('*')
      .eq('user_id', profile.id)
      .gte('summary_date', startDate)
      .lte('summary_date', endDate)
      .order('summary_date', { ascending: true });

    if (data) {
      setSummaries(data);
    }
  };

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const renderCalendar = () => {
    const days = [];
    const daysInMonth = getDaysInMonth(selectedDate);
    const firstDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1).getDay();

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const dateStr = `${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
      const summary = summaries.find(s => s.summary_date === dateStr);
      const isOverCalorie = summary && summary.total_calories > profile.calorie_goal;

      days.push(
        <div key={i} className={`calendar-day ${isOverCalorie ? 'over' : 'under'}`}>
          <div className="day-number">{i}</div>
          <div className="day-calories">{summary ? `${summary.total_calories}` : '0'}</div>
        </div>
      );
    }

    return days;
  };

  const prevMonth = () => {
    setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1));
  };

  const nextMonth = () => {
    setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1));
  };

  return (
    <div className="card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button onClick={prevMonth}>← Prev</button>
        <h2>{selectedDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</h2>
        <button onClick={nextMonth}>Next →</button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '5px', marginTop: '20px' }}>
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} style={{ fontWeight: 'bold', textAlign: 'center', padding: '5px' }}>{day}</div>
        ))}
        {renderCalendar()}
      </div>

      <style>{`
        .calendar-day {
          border: 1px solid #ddd;
          padding: 10px;
          text-align: center;
          border-radius: 4px;
          min-height: 60px;
        }
        .calendar-day.empty {
          background: #f9f9f9;
        }
        .calendar-day.under {
          background: #e8f5e9;
        }
        .calendar-day.over {
          background: #ffebee;
        }
        .day-number {
          font-weight: bold;
        }
        .day-calories {
          font-size: 0.9em;
          color: #666;
          margin-top: 5px;
        }
      `}</style>
    </div>
  );
}

export default Calendar;
