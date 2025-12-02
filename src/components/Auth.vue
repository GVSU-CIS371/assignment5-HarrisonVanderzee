<template>
  <div class="auth-container">
    <div v-if="authStore.loading" class="auth-loading">
      Loading authentication...
    </div>
    
    <div v-else-if="!authStore.user" class="auth-signed-out">
      <h2>Welcome to Custom Drink Maker</h2>
      <p>Please sign in to save and manage your beverages</p>
      <button @click="handleSignIn" class="sign-in-btn">
        Sign in with Google
      </button>
      <p v-if="authStore.error" class="error-message">{{ authStore.error }}</p>
    </div>
    
    <div v-else class="auth-signed-in">
      <div class="user-info">
        <div class="user-details">
          <p class="user-name">{{ authStore.user.displayName }}</p>
        </div>
      </div>
      <div class="auth-actions">
        <button @click="handleSwitchAccount" class="switch-account-btn">
          Switch Account
        </button>
        <button @click="handleSignOut" class="sign-out-btn">
          Sign Out
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '../stores/authStore';

const authStore = useAuthStore();

const handleSignIn = async () => {
  try {
    await authStore.signInWithGoogle();
  } catch (err) {
    console.error('Sign in failed:', err);
  }
};

const handleSignOut = async () => {
  try {
    await authStore.signOutUser();
  } catch (err) {
    console.error('Sign out failed:', err);
  }
};

const handleSwitchAccount = async () => {
  try {
    await authStore.switchAccount();
  } catch (err) {
    console.error('Switch account failed:', err);
  }
};
</script>

<style scoped>
.auth-container {
  background: white;
  padding: 10px;
  margin: 10px 0;
  position: relative;
  z-index: 1000;
}

.auth-signed-out {
  text-align: center;
}

.sign-in-btn {
  padding: 10px 20px;
  cursor: pointer;
}

.auth-signed-in {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.auth-actions {
  display: flex;
  gap: 10px;
}

button {
  padding: 8px 16px;
  cursor: pointer;
}

.error-message {
  color: red;
}
</style>
