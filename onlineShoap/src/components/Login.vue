<template>
  <div class="header">
    <div class="container">
      <div class="navbar">
        <div class="logo">
          <img src="../../public/logo.png" width="125px" />
        </div>
        <nav></nav>

        <img src="../../public/cart.png" width="30px" height="30px" alt="" />
      </div>
      <div class="account-page">
        <div class="container">
          <div class="row">
            <div class="col-2">
              <img src="../../public/image1.png" width="100%" alt="" />
            </div>
            <div class="col-2">
              <div class="form-container">
                <div class="form-btn">
                  <span @click="login">Login</span>

                  <span @click="register">Register</span>
                  <hr id="Indicator" />
                </div>

                <form id="LoginForm" @submit.prevent="loginUser" ref="LoginTrans">
                  <input type="email" placeholder="Email" v-model="email" />
                  <input type="password" placeholder="Password" v-model="password" />
                  <button type="submit" class="btn">Login</button>
                  <a href="">Forget password</a>
                </form>

                <form id="RegForm" @submit.prevent="signupUser" ref="ReginTrans">
                  <input type="text" placeholder="Username" v-model="username" />
                  <input type="email" placeholder="Email" v-model="email" />
                  <input type="password" placeholder="Passsword" v-model="password" />
                  <button type="submit" class="btn">Register</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="footer-co-1">
          <h3>Download Our App</h3>
          <P>Download App for Android and ios mobile phone.</P>
          <div class="app-logo">
            <img src="../../play-store.png" alt="" />
            <img src="../../app-store.png" alt="" />
          </div>
        </div>

        <div class="footer-co-2">
          <img src="../../public/logo-white.png" alt="" />
          <h3>Download Our App</h3>
          <P>Download App for Android and ios mobile phone.</P>
        </div>

        <div class="footer-co-3">
          <h3>Useful Links</h3>
          <ul>
            <li>Coupons</li>
            <li>Blog Post</li>
            <li>Return Policy</li>
            <li>Join Affiliate</li>
          </ul>
        </div>

        <div class="footer-co-4">
          <h3>Follow us</h3>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>YourTube</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.routerAccount {
  padding-right: 12px;
}
.form-container {
  background: #fff;
  width: 300px;
  height: 400px;
  position: relative;
  text-align: center;
  padding: 20px 0;
  margin: auto;
  box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}
.form-container span {
  font-weight: bold;
  padding: 0 10px;
  color: #555;
  cursor: pointer;
  width: 100px;
}
.form-btn {
  display: inline-block;
}
.form-container form {
  max-width: 300px;

  padding: 0 20px;
  position: absolute;
  top: 130px;
}

form input {
  width: 100%;
  height: 30px;
  margin: 10px 0;
  /* padding: 0 px; */
  border: 1px solid #ccc;
}
form .btn {
  width: 100%;
  border: none;
  cursor: pointer;
  margin: 10px 0;
}
form .btn:focus {
  outline: none;
}
#LoginForm {
  left: -300px;
  margin-right: 23px;
  width: 250px;
}
#RegForm {
  left: 0;
}
#Indicator {
  width: 100px;
  border: none;
  background: #ff523b;
  height: 3px;
  margin-top: 8px;
  transform: translateX(60px);
}
#LoginForm {
  padding: 0 2px;
  margin-left: 25px;
  margin-right: 15px;
}
</style>

<script setup>
import { ref } from 'vue'
import { app } from './firebase'
import { useProductStore } from '../../store/ecommerce'
import { storeToRefs } from 'pinia'
const productStore = useProductStore()
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'
const router = useRouter()

const LoginTrans = ref(null)
const ReginTrans = ref(null)

const email = ref('')
const password = ref('')
const username = ref('')

const register = () => {
  ReginTrans.value.style.transform = 'translateX(0px)'
  LoginTrans.value.style.transform = 'translateX(0px)'
  Indicator.style.transform = 'translateX(40px)'
}
const login = () => {
  ReginTrans.value.style.transform = 'translateX(300px)'
  LoginTrans.value.style.transform = 'translateX(300px)'
  Indicator.style.transform = 'translateX(-30px)'
}

const signupUser = () => {
  const auth = getAuth()
  debugger
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      const user = userCredential.user
      productStore.addUser(username.value, email.value, user.uid)
      email.value = ''
      password.value = ''
      username.value = ''
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
    })

  // productStore.addUser(username.value,email.value, )
}

const loginUser = () => {
  const auth = getAuth()
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      const user = userCredential.user
      sessionStorage.setItem('user', JSON.stringify(user))
      router.push('/')
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
    })
}
</script>
