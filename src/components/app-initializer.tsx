'use client';

import { useState, useEffect } from 'react';
import SplashScreen from '@/components/splash-screen';

export default function AppInitializer({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return <>{children}</>;
}
