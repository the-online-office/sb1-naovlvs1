import { createUser } from '../utils/auth';

async function createTestUser() {
  try {
    await createUser({
      email: 'test@example.com',
      password: 'password123',
      firstName: 'Test',
      lastName: 'User'
    });
    console.log('Test user created successfully');
  } catch (error) {
    console.error('Error creating test user:', error);
  }
}

createTestUser();