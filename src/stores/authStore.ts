import { defineStore } from 'pinia';
import { ref } from 'vue';
import { 
  signInWithPopup, 
  signOut, 
  GoogleAuthProvider, 
  User,
  onAuthStateChanged 
} from 'firebase/auth';
import { auth } from '../main';

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null);
  const loading = ref(true);
  const error = ref<string | null>(null);

  // Initialize auth state listener
  const initAuth = () => {
    onAuthStateChanged(auth, (firebaseUser) => {
      user.value = firebaseUser;
      loading.value = false;
    });
  };

  const signInWithGoogle = async () => {
    try {
      error.value = null;
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({
        prompt: 'select_account'
      });
      const result = await signInWithPopup(auth, provider);
      user.value = result.user;
      return result.user;
    } catch (err: any) {
      error.value = err.message;
      console.error('Error signing in with Google:', err);
      throw err;
    }
  };

  const signOutUser = async () => {
    try {
      error.value = null;
      await signOut(auth);
      user.value = null;
    } catch (err: any) {
      error.value = err.message;
      console.error('Error signing out:', err);
      throw err;
    }
  };

  const switchAccount = async () => {
    try {
      await signOutUser();
      await signInWithGoogle();
    } catch (err) {
      console.error('Error switching account:', err);
    }
  };

  return {
    user,
    loading,
    error,
    initAuth,
    signInWithGoogle,
    signOutUser,
    switchAccount
  };
});
