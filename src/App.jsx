import React, { useState, useEffect } from 'react';
import { supabase } from './lib/supabase';
import { calculateBMR, calculateTDEE } from './lib/calculations';
import Auth from './pages/Auth';
import Onboarding from './pages/Onboarding';
import Dashboard from './pages/Dashboard';
import './styles/App.css';

function App() {
  const [session, setSession] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session) {
        fetchProfile(session.user.id);
      } else {
        setLoading(false);
      }
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) {
        fetchProfile(session.user.id);
      }
    });

    return () => subscription?.unsubscribe();
  }, []);

  const fetchProfile = async (userId) => {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();

    if (data) {
      setProfile(data);
    }
    setLoading(false);
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (!session) {
    return <Auth setSession={setSession} />;
  }

  if (!profile) {
    return <Onboarding userId={session.user.id} onProfileCreated={setProfile} />;
  }

  return <Dashboard profile={profile} session={session} setProfile={setProfile} />;
}

export default App;
