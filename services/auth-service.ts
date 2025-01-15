import { auth } from '@/lib/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, User } from 'firebase/auth';

export const loginUser = (email: string, password: string): Promise<User> => {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => userCredential.user);
};

export const registerUser = (email: string, password: string): Promise<User> => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => userCredential.user);
};

export const logoutUser = (): Promise<void> => {
  return signOut(auth);
};≈y

