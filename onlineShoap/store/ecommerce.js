import { defineStore } from 'pinia'
import { db } from './firebase'
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  updateDoc,
  getDoc,
  getDocs,
  query,
  where,
  arrayUnion
} from 'firebase/firestore'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

export const useProductStore = defineStore('product', {
  state: () => ({
    Whishlist: [],
    Cart: [],
    userId: 1
  }),
  actions: {
    async addToWhishlist(product) {
      // const auth = getAuth()
      // const user = auth.currentUser.email
      // console.log(user, 'user')
      const getUserDocId = query(collection(db, 'userInfo'), where('email', '==', 'jp@gmail.com'))
      const getProductDocId = query(collection(db, 'products'), where('id', '==', product.id))
      const querySnapshotProducts = await getDocs(getProductDocId)
      const querySnapshotUser = await getDocs(getUserDocId)
      if (!querySnapshotUser.empty && !querySnapshotProducts.empty) {
        const firstDoc = querySnapshotUser.docs[0].id
        const prodDoc = querySnapshotProducts.docs[0].id
        const storeDocRef = doc(db, 'userInfo', firstDoc)
        await updateDoc(storeDocRef, {
          whishlistId: arrayUnion(prodDoc)
        })
      }
    },

    async addToCart(product) {
      this.Cart.push(product.id)
      console.log(`Added ${product.id} ${product.title} to cart`)

      let products2 = []
      const querySnapshot2 = await getDocs(collection(db, 'products'))
      products2 = querySnapshot2.docs.map(doc => ({ id: doc.id, ...doc.data() }))
      console.log(products2,"from user")
      
    },
    async addUser(username, email, uid) {
      try {
        await addDoc(collection(db, 'userInfo'), {
          uId: uid,
          user: username,
          email: email,
          role: 'user',
          whishlistId: [],
          cardId: []
        })
        this.userId++
      } catch (e) {
        console(e, 'error')
      }
    },
    async fetchProductFromWishlist() {
      try {
        const userInfo = await getDocs(collection(db, 'userInfo'))
        const getWhishlist = await getDocs(collection(db, 'whishlist'))
        let productArr = []
        getWhishlist.forEach((doc) => {
          productArr.push({
            id: doc.data().wlId
          }),
            console.log(productArr, 'productArr')
        })
      } catch (e) {
        console.log(e)
      }
    },
    async fetchProductsfromUser() {
      const auth = getAuth()
      const querryUserWhishlist = query(
        collection(db, 'userInfo'),
        where('email', '==', 'jp@gmail.com')
      )
      
      const querySnapshotProducts = await getDocs(querryUserWhishlist)
      let storeProduct = []
      storeProduct = querySnapshotProducts.docs.map((doc) => ({ id: doc.data().whishlistId ,email:doc.data().email }))
      console.log(storeProduct[0].id, 'values ')
      let storeProductIdConvert = storeProduct[0].id;
     const storeProductIdData = storeProductIdConvert.map(id => ({ id }));
     
  
      const q = query(collection(db, 'products'), where('__name__', 'in', storeProduct[0].id));
      const querySnapshot = await getDocs(q);
      const products = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
      
      console.log(products)

   
    }
  }
})
