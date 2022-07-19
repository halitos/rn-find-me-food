import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';

export const loginToFirebase = async (email, password) => {
  const auth = getAuth();
  await signInWithEmailAndPassword(auth, email, password);
};

// Not worth using a context here, but it's a good example of how to use a service
