<template>
  <Header></Header>

  <div class="products">
    <div v-for="product in products" :key="product.id" class="product-card">
      <img :src="product.images" alt="Product Image" />
      <h2>{{ product.title }}</h2>
      <p>{{ product.price }}</p>
      <button @click="addCart(product)">Add to cart</button>
      <button @click="removeWhislist(product.id)">Remove to wishlist</button>
    </div>
  </div>
</template>

<script setup>
import Header from './Header.vue'
import { getAuth } from 'firebase/auth'
import { storeToRefs } from 'pinia'
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  updateDoc,
  getDoc,
  query,
  where,
  arrayUnion,
  arrayRemove
} from 'firebase/firestore'

import { getFirestore, getDocs } from 'firebase/firestore'
import { useProductStore } from '../../store/ecommerce'

const productStore = useProductStore()
const { fetchProductsfromUser } = productStore
import { db } from './firebase'

const querryUserWhishlist = query(collection(db, 'userInfo'), where('email', '==', 'jp@gmail.com'))

const querySnapshotProducts = await getDocs(querryUserWhishlist)
let storeProduct = []
storeProduct = querySnapshotProducts.docs.map((doc) => ({
  id: doc.data().whishlistId,
  email: doc.data().email
}))
console.log(storeProduct[0].id, 'values ')
let storeProductIdConvert = storeProduct[0].id
const storeProductIdData = storeProductIdConvert.map((id) => ({ id }))

const q = query(collection(db, 'products'), where('__name__', 'in', storeProduct[0].id))
const querySnapshot = await getDocs(q)
const products = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
console.log(products, 'productsS')
// const removeWhislist =(id)=>{
// console.log(id,"id")
// }

const removeWhislist = async (productId) => {
  const querryUserWhishlist = query(collection(db, 'products'), where('id', '==', productId))
  const querySnapshotProducts = await getDocs(querryUserWhishlist)
  console.log(querySnapshotProducts.docs[0].id, 'product info')

  const userWishlistQuery = query(collection(db, 'userInfo'), where('email', '==', 'jp@gmail.com'))
  const userWishlistSnapshot = await getDocs(userWishlistQuery)
  const userDocId = userWishlistSnapshot.docs[0].id
  const userDocRef = doc(db, 'userInfo', userDocId)
  console.log(userDocRef, 'user Doc')
  console.log(userDocId, 'user details')
  console.log(querySnapshotProducts.docs[0].id, 'product info')
  await updateDoc(userDocRef, {
    wishlistId: arrayRemove(querySnapshotProducts.docs[0].id)
  })

  // products.value = products.value.filter(product => product.id !== productId);
}
</script>
