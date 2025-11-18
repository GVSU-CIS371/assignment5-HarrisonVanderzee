import { defineStore } from "pinia"
import { setDoc, getDocs, doc, CollectionReference, collection, QuerySnapshot, QueryDocumentSnapshot } from "firebase/firestore";
import { db } from "../main";

interface BaseBeverageType {
  id: string;
  name: string;
  color: string;
}

interface CreamerType {
  id: string;
  name: string;
  color: string;
}

interface SyrupType {
  id: string;
  name: string;
  color: string;
}
const basesArr = [ 
  { id: "b1", name: "Black Tea", color: "#8B4513" }, 
  { id: "b2", name: "Green Tea", color: "#C8E6C9"},
  { id: "b3", name: "Coffee", color: "#6F4E37" }
];

const creamersArr = [
  { id: "c1", name: "No Cream", color: "transparent" },
  { id: "c2", name: "Milk", color: "AliceBlue" },
  { id: "c3", name: "Cream", color: "#F5F5DC" },
  { id: "c4", name: "Half & Half", color: "#FFFACD" }
];

const syrupsArr = [
  { id: "s1", name: "No Syrup", color: "#c6c6c6" },
  { id: "s2", name: "Vanilla", color: "#FFEFD5" },
  { id: "s3", name: "Caramel", color: "#DAA520" },
  { id: "s4", name: "Hazelnut", color: "#6B4423" }
];

export async function initializeFirestoreData() {
  try {
    // Populate bases
    for (const base of basesArr) {
      const basesDoc = doc(db, "bases", base.id);
      await setDoc(basesDoc, { name: base.name, color: base.color });
    }

    // Populate creamers
    for (const creamer of creamersArr) {
      const creamerDoc = doc(db, "creamers", creamer.id);
      await setDoc(creamerDoc, { name: creamer.name, color: creamer.color });
    }

    // Populate syrups
    for (const syrup of syrupsArr) {
      const syrupDoc = doc(db, "syrups", syrup.id);
      await setDoc(syrupDoc, { name: syrup.name, color: syrup.color });
    }

    console.log("Firestore data initialized successfully");
  } catch (error) {
    console.error("Error initializing Firestore data:", error);
  }
}

export async function pushBeverageToFirestore(base: BaseBeverageType, creamer: CreamerType, syrup: SyrupType, name: string): Promise<string> {
  // Replaces whitespaces in name with underscores to create a valid document ID
  const docId = name.replace(/\s+/g, '_');
    const beverageDoc = doc(db, "beverages", docId);
    await setDoc(beverageDoc, {
      base,
      creamer,
      syrup,
      name
    });
    return docId;
}

export async function fetchBeveragesFromFirestore() {
  const beverages: any[] = [];
  const beveragesCollection: CollectionReference = collection(db, "beverages");

  const qs: QuerySnapshot = await getDocs(beveragesCollection);
  qs.forEach((qd: QueryDocumentSnapshot) => {
    const data = qd.data();
    beverages.push({
      id: qd.id,
      name: data.name,
      base: data.base,
      creamer: data.creamer,
      syrup: data.syrup,
    });
  });
    console.log(beverages);
    return beverages;
}

export async function fetchBasesFromFirestore(): Promise<BaseBeverageType[]> {
  const bases: BaseBeverageType[] = [];
  const basesCollection: CollectionReference = collection(db, "bases");

  const qs: QuerySnapshot = await getDocs(basesCollection);
  qs.forEach((qd: QueryDocumentSnapshot) => {
    const data = qd.data();
    bases.push({
      id: qd.id,
      name: data.name,
      color: data.color,
    });
  });
  console.log(bases);
  return bases;
}

export async function fetchCreamersFromFirestore(): Promise<CreamerType[]> {
  const creamers: CreamerType[] = [];
  const creamersCollection: CollectionReference = collection(db, "creamers");

  const qs: QuerySnapshot = await getDocs(creamersCollection);
  qs.forEach((qd: QueryDocumentSnapshot) => {
    const data = qd.data();
    creamers.push({
      id: qd.id,
      name: data.name,
      color: data.color,
    });
  });
    console.log(creamers);
    return creamers;
}

export async function fetchSyrupsFromFirestore(): Promise<SyrupType[]> {
  const syrups: SyrupType[] = [];
  const syrupsCollection: CollectionReference = collection(db, "syrups");

  const qs: QuerySnapshot = await getDocs(syrupsCollection);
  qs.forEach((qd: QueryDocumentSnapshot) => {
    const data = qd.data();
    syrups.push({
      id: qd.id,
      name: data.name,
      color: data.color,
    });
  });
    console.log(syrups);
    return syrups;
}

export const temp = defineStore('tempStore', {
  state: () => {
    return { 
      temps: ["Hot", "Cold"] as string[],
      selectedTemp: "Cold",
    }
  },

  getters: {
    currentTemp: (state) => state.selectedTemp,
  },

  actions: {
    setCurrentTemp(temp: string) {
      this.selectedTemp = temp
    }
  }
});

export const base = defineStore('baseType', {
  state: () => {
    return {
      bases: [] as BaseBeverageType[],
      selectedBaseId: "b1",
    };
  },
    getters: {
      getBaseById: (state) => {
        return (id: string) => state.bases.find((base) => base.id === id)
      },

      currentBase: (state) => state.bases.find((b) => b.id === state.selectedBaseId),

      returnBaseIds: (state) => {
        const returnedIds: string[] = []
        for (let index = 0; index < state.bases.length; index++) {
          const base = state.bases[index];
          returnedIds.push(base.id)
        }
        return returnedIds
      },
    },

    actions: {
      async loadBases() {
          const basesCollection = await fetchBasesFromFirestore();
          this.bases = basesCollection
      },
      setCurrentBase(id: string) {
        this.selectedBaseId = id
      },
    },
});

export const creamer = defineStore('creamerType', {
  state: () => {
    return {
      creamers: [] as CreamerType[],
      selectedCreamerId: "c1",
    };
  },
  getters: {
    getCreamerById: (state) => {
      return (id: string) => state.creamers.find((creamer) => creamer.id === id)
    },

    currentCreamer: (state) => state.creamers.find((c) => c.id === state.selectedCreamerId),
  },

  actions: {
    async loadCreamers() {
      const creamersCollection = await fetchCreamersFromFirestore();
      this.creamers = creamersCollection;
    },
    setCurrentCreamer(id: string) {
      this.selectedCreamerId = id
    }
  },
});

export const syrup = defineStore('syrupType', {
  state: () => {
    return {
      syrups: [] as SyrupType[],
      selectedSyrupId: "s1",
    };
  },
  getters: {
    getSyrupById: (state) => {
      return (id: string) => state.syrups.find((syrup) => syrup.id === id)
    },

    currentSyrup: (state) => state.syrups.find((s) => s.id === state.selectedSyrupId),
  },

  actions: {
    async loadSyrups() {
        const syrupsCollection = await fetchSyrupsFromFirestore();
        this.syrups = syrupsCollection;
    },
    setCurrentSyrup(id: string) {
      this.selectedSyrupId = id
    },
  },
});

interface SavedBeverage {
  name: string;
  temp: string;
  baseId: string;
  creamerId: string;
  syrupId: string;
}

export const savedBeverages = defineStore('savedBeverages', {
  state: () => {
    return {
      beverages: [] as SavedBeverage[],
    };
  },

  getters: {
    getBeverages: (state) => state.beverages,
    getBeverageByName: (state) => {
      return (name: string) => state.beverages.find((beverage) => beverage.name === name)
    }
  },
  
  actions: {
    addBeverage(beverage: SavedBeverage) {
      this.beverages.push(beverage)
    },
  },
});

export type { BaseBeverageType, CreamerType, SyrupType };

export { temp as tempStore };
export { base as baseStore };
export { creamer as creamerStore };
export { syrup as syrupStore };
export { savedBeverages as savedBeveragesStore };