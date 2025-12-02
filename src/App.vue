<template>
  <div>
  <Beverage :isIced="isIced" :creamer="creamerEnabled" :syrup="syrupEnabled"/>
    <ul>
      <li>
        <template v-for="temp in tempState.temps" :key="temp">
          <label>
            <input
              type="radio"
              name="temperature"
              :id="`r${temp}`"
              :value="temp"
              v-model="tempState.selectedTemp"
            />
            {{ temp }}
          </label>
        </template>
      </li>
      <li>
        <template v-for="base in baseState.bases" :key="base.id">
          <label>
            <input
              type="radio"
              name="base.name"
              :id="base.id"
              :value="base.id"
              v-model="baseState.selectedBaseId"
            />
            {{ base.name }}
          </label>
        </template>
      </li>
      <li>
        <template v-for="cream in creamerState.creamers" :key="cream.id">
          <label>
            <input
              type="radio"
              name="cream.name"
              :id="cream.id"
              :value="cream.id"
              v-model="creamerState.selectedCreamerId"
            />
            {{ cream.name }}
          </label>
        </template>
      </li>
      <li>
        <template v-for="syrup in syrupState.syrups" :key="syrup.id">
          <label>
            <input
              type="radio"
              name="syrup.name"
              :id="syrup.id"
              :value="syrup.id"
              v-model="syrupState.selectedSyrupId"
            />
            {{ syrup.name }}
          </label>
        </template>
      </li>
    </ul>
  </div>
    <div>
      <input 
        v-model="beverageName"
        type="text"
        placeholder="Enter Beverage Name"
      />
      <button @click="saveBeverage">Save Beverage</button>
      
      <div>
        <h3>Saved Beverages:</h3>
        <template v-for="bev in savedBeveragesState.beverages" :key="bev.name">
          <label>
            <input
              type="radio"
              name="savedBeverage"
              :value="bev.name"
              @change="loadBeverage(bev)"
            />
            {{ bev.name }}
          </label>
        </template>
      </div>
      <Auth />
    </div>
</template>

<script setup lang="ts">
import Beverage from "./components/Beverage.vue";
import Auth from "./components/Auth.vue";
import { ref, computed, onMounted, watch } from 'vue'
import { tempStore, baseStore, creamerStore, syrupStore, savedBeveragesStore, pushBeverageToFirestore, fetchBeveragesFromFirestore } from "./stores/beverage";
import { BaseBeverageType, CreamerType, SyrupType } from "./stores/beverage";
import { useAuthStore } from "./stores/authStore";

const authStore = useAuthStore();
const tempState = tempStore();
const baseState = baseStore();
const creamerState = creamerStore();
const syrupState = syrupStore();
const savedBeveragesState = savedBeveragesStore();

authStore.initAuth();
watch(() => authStore.user, async (newUser) => {
  if (newUser) {
    await loadUserBeverages(newUser.uid);
  } else {
    savedBeveragesState.beverages = [];
  }
});

const loadUserBeverages = async (userId: string) => {
  try {
    const fetched: any[] = await fetchBeveragesFromFirestore(userId);
    savedBeveragesState.beverages = fetched.map(b => ({
      name: b.name,
      temp: b.base?.temp || b.temp || 'Cold',
      baseId: b.base?.id || b.baseId || 'b1',
      creamerId: b.creamer?.id || b.creamerId || 'c1',
      syrupId: b.syrup?.id || b.syrupId || 's1'
    }));
  } catch (err) {
    console.error('Failed to load user beverages', err);
  }
};

// load collections and saved beverages when app mounts
onMounted(async () => {
  try {
    await Promise.all([
      baseState.loadBases(),
      creamerState.loadCreamers(),
      syrupState.loadSyrups(),
    ]);

    // Load beverages if user is already signed in
    if (authStore.user) {
      await loadUserBeverages(authStore.user.uid);
    }
  } catch (err) {
    console.error('Failed to initialize app data', err);
  }
});

const beverageName = ref('');
const isIced = computed(() => tempState.selectedTemp === 'Cold');
const creamerEnabled = computed(() => creamerState.selectedCreamerId !== 'c1');
const syrupEnabled = computed(() => syrupState.selectedSyrupId !== 's1');

const selectedBase = computed<BaseBeverageType | undefined>(() => baseState.currentBase);
const selectedCreamer = computed<CreamerType | undefined>(() => creamerState.currentCreamer);
const selectedSyrup = computed<SyrupType | undefined>(() => syrupState.currentSyrup);

const saveBeverage = async () => {
  if (!beverageName.value) return;
  
  if (!authStore.user) {
    alert('Please sign in to save beverages');
    return;
  }

  try {
    if (!selectedBase.value || !selectedCreamer.value || !selectedSyrup.value) {
      console.error('Cannot save beverage -- one of base/creamer/syrup is not selected');
      return;
    }

    await pushBeverageToFirestore(
      selectedBase.value, 
      selectedCreamer.value, 
      selectedSyrup.value, 
      beverageName.value,
      authStore.user.uid
    );
    
    await loadUserBeverages(authStore.user.uid);
  } catch (error) {
    console.error('Failed to save beverage to Firestore', error);
  }

  beverageName.value = '';
};

const loadBeverage = (bev: { name: string, temp: string, baseId: string, creamerId: string, syrupId: string }) => {
  tempState.setCurrentTemp(bev.temp);
  baseState.setCurrentBase(bev.baseId);
  creamerState.setCurrentCreamer(bev.creamerId);
  syrupState.setCurrentSyrup(bev.syrupId);
};

</script>

<style lang="scss">
body,
html {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #6e4228;
  background: linear-gradient(to bottom, #6e4228 0%, #956f5a 100%);
}
ul {
  list-style: none;
}
</style>