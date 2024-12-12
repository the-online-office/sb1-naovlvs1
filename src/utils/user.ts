import { doc, getDoc, setDoc, updateDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase';
import type { User } from '../types/user';

export async function createUserDocument(userData: Partial<User>): Promise<void> {
  const userRef = doc(db, 'users', userData.uid!);
  
  const defaultUserData: Partial<User> = {
    createdAt: new Date().toISOString(),
    lastLogin: new Date().toISOString(),
    role: 'user',
    status: 'active',
    settings: {
      notifications: {
        email: true,
        push: true,
        sms: false
      },
      theme: 'system',
      language: 'en'
    },
    metadata: {
      loginCount: 0,
      lastPasswordChange: new Date().toISOString()
    }
  };

  await setDoc(userRef, { ...defaultUserData, ...userData });
}

export async function getUserById(uid: string): Promise<User | null> {
  const userRef = doc(db, 'users', uid);
  const userSnap = await getDoc(userRef);
  
  if (userSnap.exists()) {
    return userSnap.data() as User;
  }
  
  return null;
}

export async function updateUserProfile(uid: string, updates: Partial<User>): Promise<void> {
  const userRef = doc(db, 'users', uid);
  
  const updateData = {
    ...updates,
    'metadata.lastProfileUpdate': new Date().toISOString()
  };
  
  await updateDoc(userRef, updateData);
}

export async function updateUserSettings(
  uid: string, 
  settings: Partial<User['settings']>
): Promise<void> {
  const userRef = doc(db, 'users', uid);
  await updateDoc(userRef, { settings });
}

export async function getUsersByRole(role: User['role']): Promise<User[]> {
  const usersRef = collection(db, 'users');
  const q = query(usersRef, where('role', '==', role));
  const querySnapshot = await getDocs(q);
  
  return querySnapshot.docs.map(doc => doc.data() as User);
}

export async function updateLoginMetadata(uid: string, deviceInfo?: {
  device: string;
  browser: string;
  os: string;
}): Promise<void> {
  const userRef = doc(db, 'users', uid);
  
  const updates = {
    lastLogin: new Date().toISOString(),
    'metadata.loginCount': increment(1)
  };

  if (deviceInfo) {
    updates['metadata.deviceInfo'] = {
      lastDevice: deviceInfo.device,
      lastBrowser: deviceInfo.browser,
      lastOS: deviceInfo.os
    };
  }

  await updateDoc(userRef, updates);
}