'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { Button } from '@/components/ui/button';
import { BudgetOverview } from '@/components/BudgetOverview';
import { useAuth } from '@/hooks/useAuth';

export default function DashboardPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Welcome to your Dashboard</h1>
          <Button onClick={handleLogout}>Logout</Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <BudgetOverview />
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
            {/* We'll add a recent transactions component here later */}
            <p>Your recent transactions will be listed here.</p>
          </div>
        </div>
        
        <div className="mt-8">
          <Button>Add New Transaction</Button>
        </div>
      </div>
    </div>
  );
}

