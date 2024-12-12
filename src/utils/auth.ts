import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  UserCredential 
} from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../lib/firebase';
import type { User, UserCredentials } from '../types/user';

export async function createUser(credentials: UserCredentials & { 
  firstName?: string;
  lastName?: string;
}): Promise<UserCredential> {
  const { email, password, firstName, lastName } = credentials;
  
  // Create the user in Firebase Auth
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  
  // Update the user's display name if provided
  if (firstName || lastName) {
    await updateProfile(userCredential.user, {
      displayName: `${firstName || ''} ${lastName || ''}`.trim()
    });
  }

  // Send email verification
  await sendEmailVerification(userCredential.user);

  // Create the user document in Firestore
  const userDoc = doc(db, 'users', userCredential.user.uid);
  await setDoc(userDoc, {
    uid: userCredential.user.uid,
    email,
    firstName,
    lastName,
    createdAt: serverTimestamp(),
    lastLogin: serverTimestamp(),
    role: 'user',
    isEmailVerified: false
  });

  return userCredential;
}

export async function loginUser(credentials: UserCredentials): Promise<UserCredential> {
  const { email, password } = credentials;
  return signInWithEmailAndPassword(auth, email, password);
}