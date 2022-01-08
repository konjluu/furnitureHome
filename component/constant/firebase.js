import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import {
  getFirestore,
  collection,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

export const auth = getAuth();
export const db = getFirestore();
export const viewCartRef = collection(db, "itemsOnViewCart");

export const viewCartMock = [
  {
    cost: 2500000,
    id: 1,
    img: "./IMG/item2/1.jpeg",
    name: "item1",
    quantily: 2,
    total: 5000000
  },

  {
    cost: 2500000,
    id: 2,
    img: "./IMG/item2/1.jpeg",
    name: "item2",
    quantily: 1,
    total: 5000000
  },

  {
    cost: 2500000,
    id: 3,
    img: "./IMG/item2/1.jpeg",
    name: "item3",
    quantily: 4,
    total: 5000000
  },

  
];