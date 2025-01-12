const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

async function initializeDatabase() {
  try {
    // Initialize Customers
    const customersRef = db.collection('customers');
    await customersRef.add({
      name: 'Test Company',
      email: 'test@example.com',
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    });

    // Initialize Budgets
    const budgetsRef = db.collection('budgets');
    await budgetsRef.add({
      customerId: 'test-customer-id',
      name: 'Q1 2023 Budget',
      startDate: admin.firestore.Timestamp.fromDate(new Date('2023-01-01')),
      endDate: admin.firestore.Timestamp.fromDate(new Date('2023-03-31')),
      totalIncome: 100000,
      totalExpenses: 80000,
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    });

    // Initialize Transactions
    const transactionsRef = db.collection('transactions');
    await transactionsRef.add({
      customerId: 'test-customer-id',
      amount: 5000,
      type: 'income',
      category: 'Sales',
      description: 'Product sale',
      date: admin.firestore.Timestamp.fromDate(new Date()),
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    });

    // Initialize Reports
    const reportsRef = db.collection('reports');
    await reportsRef.add({
      customerId: 'test-customer-id',
      type: 'monthly',
      startDate: admin.firestore.Timestamp.fromDate(new Date('2023-01-01')),
      endDate: admin.firestore.Timestamp.fromDate(new Date('2023-01-31')),
      data: {
        totalIncome: 50000,
        totalExpenses: 40000,
        netIncome: 10000
      },
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    });

    // Initialize Users
    const usersRef = db.collection('users');
    await usersRef.add({
      customerId: 'test-customer-id',
      email: 'user@example.com',
      displayName: 'Test User',
      role: 'admin',
      permissions: {
        canManageUsers: true,
        canManageBudgets: true,
        canManageTransactions: true,
        canViewReports: true,
        canManageSettings: true
      },
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    });

    // Initialize Settings
    const settingsRef = db.collection('settings');
    await settingsRef.add({
      customerId: 'test-customer-id',
      currency: 'EUR',
      fiscalYearStart: {
        month: 1,
        day: 1
      },
      defaultCategories: {
        income: ['Sales', 'Investments'],
        expense: ['Salaries', 'Rent', 'Utilities']
      },
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    });

    console.log('Database initialized successfully');
  } catch (error) {
    console.error('Error initializing database:', error);
  }
}

initializeDatabase();
