'use client';

import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Category {
  id: string;
  name: string;
  budgeted: number;
  spent: number;
}

export function BudgetOverview() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        // In a real application, this would be an API call
        // For now, we'll use mock data
        const mockData: Category[] = [
          { id: '1', name: 'Housing', budgeted: 1000, spent: 950 },
          { id: '2', name: 'Food', budgeted: 500, spent: 450 },
          { id: '3', name: 'Transportation', budgeted: 200, spent: 180 },
          { id: '4', name: 'Entertainment', budgeted: 150, spent: 200 },
          { id: '5', name: 'Utilities', budgeted: 300, spent: 280 },
        ];
        setCategories(mockData);
      } catch (err) {
        setError('Failed to load budget categories. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (isLoading) {
    return <div className="text-center">Loading budget overview...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  const chartData = categories.map(category => ({
    name: category.name,
    value: category.spent
  }));

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

  const totalBudgeted = categories.reduce((sum, category) => sum + category.budgeted, 0);
  const totalSpent = categories.reduce((sum, category) => sum + category.spent, 0);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Budget Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-medium mb-2">Category Breakdown</h3>
          <ul className="space-y-2">
            {categories.map((category) => (
              <li key={category.id} className="flex justify-between items-center">
                <span>{category.name}</span>
                <span className="font-semibold">
                  ${category.spent.toFixed(2)} / ${category.budgeted.toFixed(2)}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-medium mb-2">Total Budget</h3>
          <p className="font-semibold">
            Spent: ${totalSpent.toFixed(2)} / Budgeted: ${totalBudgeted.toFixed(2)}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

