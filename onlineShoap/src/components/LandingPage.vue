<template>
  <div class="header">
    <div class="container">
      <div class="navbar">
        <div class="logo">
          <img src="../../public/logo.png" width="125px">
        </div>
        <nav>
            <Header></Header>
        </nav>
        <img src="../../public/cart.png" width="30px" height="30px" alt="">
      </div>
      <div class="row">
        <div class="col-2">
          <h1>Give Your Workout A <br> New Style!</h1>
          <p>Success isn't always about greatness.It's about consistent <br> hard work gains success.Greatness will
            come.</p>
          <a href="" class="btn">Explore Now &#8594</a>
        </div>
        <div class="col-2">
          <img src="../../public/image1.png" alt="">

        </div>
      </div>
    </div>
  </div>





  <div class="categoreis">

    <div class="leftSection">

      <h2>FILTERS</h2><br>
      <input type="radio" id="one" value="One" />
      <label for="one">Male</label><br>

      <input type="radio" id="two" value="Two" />
      <label for="two">Female</label><br><br>


      <h2>PRICE</h2><br>
      <input type="checkbox" id="one" value="One" />
      <label for="one">High</label><br>

      <input type="checkbox" id="two" value="Two" />
      <label for="two">Medium</label><br>

      <input type="checkbox" id="two" value="Two" />
      <label for="two">Low</label><br><br>

    </div>

    <div class="rightSection">


  <div>
    <input v-model="searchKeyword" placeholder="Search products">
    <div class="products">
      <div v-for="product in productArr" :key="product.id" class="product-card">
        <img :src="product.images" alt="Product Image" />
        <h2>{{ product.title }}</h2>
        <p>{{ product.price }}</p>
        <button @click="addCart(product)">Add to cart</button>
        <button @click="addWishlist(product)">Add to wishlist</button>
      </div>
    </div>
  </div>

      <!-- feature products -->
      <div class="small-container">
        <h2 class="title">Featured Products</h2>
        <div class="row">
          <div class="col-4">
            <img src="../../public/product-4.jpg" alt=""> 
            <h4>Red Printed Tshirt</h4> 
            <p>$50</p>
            



          </div>

          <div class="col-4">
            <img src="../../public/product-1.jpg" alt="">
            <h4>Red Printed Tshirt</h4>
            <p>$50</p>


          </div>

          <div class="col-4">
            <img src="../../public/product-2.jpg" alt="">
            <h4>Red Printed Tshirt</h4>
            <p>$50</p>


          </div>

          <div class="col-4">
            <img src="../../public/product-3.jpg" alt="">
            <h4>Red Printed Tshirt</h4>
            <p>$50</p>


          </div>
        </div>

        <h2 class="title">Latest Products</h2>

        <div class="row">
          <div class="col-4">
            <img src="../../public/product-6.jpg" alt="">
            <h4>Red Printed Tshirt</h4>
            <p>$50</p>


          </div>


          <div class="col-4">
            <img src="../../public/product-7.jpg" alt="">
            <h4>Red Printed Tshirt</h4>
            <p>$50</p>


          </div>

          <div class="col-4">
            <img src="../../public/product-8.jpg" alt="">
            <h4>Red Printed Tshirt</h4>
            <p>$50</p>


          </div>

          <div class="col-4">
            <img src="../../public/product-3.jpg" alt="">
            <h4>Red Printed Tshirt</h4>
            <p>$50</p>


          </div>



        </div>

        <div class="row">
          <div class="col-4">
            <img src="../../public/product-4.jpg" alt="">
            <h4>Red Printed Tshirt</h4>
            <p>$50</p>


          </div>


          <div class="col-4">
            <img src="../../public/product-3.jpg" alt="">
            <h4>Red Printed Tshirt</h4>
            <p>$50</p>


          </div>

          <div class="col-4">
            <img src="../../public/product-2.jpg" alt="">
            <h4>Red Printed Tshirt</h4>
            <p>$50</p>


          </div>

          <div class="col-4">
            <img src="../../public/product-1.jpg" alt="">
            <h4>Red Printed Tshirt</h4>
            <p>$50</p>


          </div>



        </div>
      </div>

      <div class="small-container">
        <div class="row">
          <div class="col-3">
            <img src="../../public/category-1.jpg" alt="">
          </div>
          <div class="col-3">
            <img src="../../public/category-2.jpg" alt="">
          </div>
          <div class="col-3">
            <img src="../../public/category-3.jpg" alt="">
          </div>
        </div>
      </div>

    </div>
  </div>

  <!-- offer products -->
  <div class="offer">
    <div class="small-container">
      <div class="row">
        <div class="col-2">
          <img src="../../public/exclusive.png" alt="" class="offer-img">
        </div>
        <div class="col-2">
          <p>Exclusive Available on Redstore</p>
          <h1>Smart Band</h1>
          <small>The Mi Smart Band 4 features a 39.9% larger(than Mi Band 3) AMOLED color full-touch display with
            adjustable brigthness,so everything is clear as can be.</small><br>
          <a href="" class="btn">Buy Now &#8594</a>
        </div>

      </div>
    </div>
  </div>

  <!-- testimonial -->
  <div class="testimonial">
    <div class="small-container">
      <div class="row">
        <div class="col-3">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Maiores accusantium facilis laborum
            similique nesciunt qui fugit porro consequuntur
            iusto reiciendis aliquam voluptates.</p>
          <img src="../../public/user-1.png" alt="">
          <h3>Seam Parker</h3>
        </div>
        <div class="col-3">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Maiores accusantium facilis laborum
            similique nesciunt qui fugit porro consequuntur
            iusto reiciendis aliquam voluptates.</p>
          <img src="../../public/user-2.png" alt="">
          <h3>Elon Walker</h3>
        </div>
        <div class="col-3">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Maiores accusantium facilis laborum
            similique nesciunt qui fugit porro consequuntur
            iusto reiciendis aliquam voluptates.</p>
          <img src="../../public/user-3.png" alt="">
          <h3>John Parker</h3>
        </div>

      </div>

    </div>
  </div>




  <!-- brands -->
  <div class="brands">
    <div class="small-container">
      <div class="row">
        <div class="col-5">
          <img src="../../public/logo-godrej.png" alt="">
        </div>
        <div class="col-5">
          <img src="../../public/logo-oppo.png" alt="">
        </div>
        <div class="col-5">
          <img src="../../public/logo-coca-cola.png" alt="">
        </div>
        <div class="col-5">
          <img src="../../public/logo-paypal.png" alt="">
        </div>
        <div class="col-5">
          <img src="../../public/logo-philips.png" alt="">
        </div>
      </div>
    </div>
  </div>

  <!-- footer -->

  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="footer-co-1">
          <h3>Download Our App</h3>
          <P>Download App for Android and ios mobile phone.</P>
          <div class="app-logo">
            <img src="../../play-store.png" alt="">
            <img src="../../app-store.png" alt="">
          </div>
        </div>

        <div class="footer-co-2">
          <img src="../../public/logo-white.png" alt="">
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


<style>
* {
  margin: 0;
  padding: 0;
}

.navbar {
  display: flex;
  align-items: center;
  padding: 20px;

}

nav {

  flex: 1;
  text-align: right;
}

nav ul {
  display: inline-block;
  list-style-type: none;
}

nav ul li {
  display: inline-block;
  margin-right: 20px;
}

a {
  text-decoration: none;
  color: #555;
  float: left;
}

.container {
  max-width: 1300px;
  margin: auto;
  padding-left: 25px;
  padding-right: 25px;

}

.row {
  display: 1300px;
  margin: auto;
  padding-left: 25px;
  padding-right: 25px;
}

.row {
  display: flex;
  align-items: center;
  /* flex-wrap: wrap; */
  justify-content: space-around;
}

.col-2 {
  flex-basis: 50%;
  min-width: 300px;
}

.col-2 img {
  max-width: 100%;
  padding: 50px 0;
}

.col-2 h1 {
  font-size: 50px;
  line-height: 60px;
  margin: 25px 0;
}

.btn {
  display: inline-block;
  background: #ff533b;
  color: #fff;
  padding: 8px 30px;
  margin: 30px 0;
  border-radius: 30px;
  transition: background 0.5s;
}

.header {
  background: radial-gradient(#fff, #ffd6d6);
}

.header .row {
  margin-top: 70px;
}

.btn:hover {
  background: #563434;
}

.categories {
  margin: 70px 0;
}

.col-3 {
  flex-basis: 30%;
  min-width: 250px;
  margin-bottom: 30px;
}

.col-3 img {
  width: 100%;
}

.small-container {
  max-width: 1080px;
  margin: auto;
  padding-left: 25px;
  padding-right: 25px;

}

.col-4 {
  flex-basis: 25%;
  padding: 10px;
  min-width: 200px;
  margin-bottom: 50px;
  transition: transform 0.5s;
}

.col-4 img {
  width: 100%;
}

.title {
  text-align: center;
  margin: 0 auto 80px;
  position: relative;
  line-height: 60px;
  color: #555;
}

.title::after {
  content: '';
  background: #ff523b;
  width: 80px;
  height: 5px;
  border-radius: 5px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
}

h4 {
  color: #555;
  font-weight: normal;
}

.col-4 {
  font-size: 14px;
}

.col-4:hover {
  transform: translateY(-5px);
}

.offer {
  background: radial-gradient(#fff, #ffd6d6);
  margin-top: 80px;
  padding: 15px 0;
}

.col-2 .offer-img {
  padding: 50px;
}

small {
  color: #555;
}


.testimonial {
  padding-top: 100px;
}

.testimonial .col-3 {
  text-align: center;
  padding: 40px 20px;
  box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: transform 0.5s;
}

.testimonial .col-3 img {
  width: 50px;
  margin-top: 20x;
  border-radius: 50%;
}

.testimonial .col-3:hover {
  transform: translateY(-10px);
}

.testimonial .col-3 h3 {
  font-weight: 600;
  color: #555;
  font-size: 16px;

}

.brands {
  margin: 100px auto;
}

.col-5 {
  width: 160px;
}

.col-5 img {
  width: 100%;
  cursor: pointer;
  filter: grayscale(100%);
}

.col-5 img:hover {
  filter: grayscale(0);
}

.footer {
  background: #000;
  color: #8a8a8a;
  font-size: 14px;
  padding: 60px 0 20px;
}

.footer p {
  color: #8a8a8a;
}

.footer h3 {
  color: #fff;
  margin-bottom: 20px;
}

.footer-col-1,
.footer-col-2,
.footer-col-3,
.footer-col-4 {
  min-width: 250px;
  margin-bottom: 20px;

}

.footer-col-1 {
  flex-basis: 30%;
}

.footer-col-2 {
  flex: 1;
  text-align: center;
}

.footer-col-2 img {
  width: 180px;
  margin-bottom: 20px;
}

.app-logo {
  margin-top: 20px;
}

.app-logo img {
  width: 140px;
}

.routerAccount {
  padding-right: 12px;

}

.leftSection {
  flex: .5;
  background-color: #f1f1f1;
  border-right: 1px solid #ccc;

}

.rightSection {
  flex: 3;
  background-color: #fff;
}

.categoreis {
  display: flex;
  width: 100%;
}

.products {
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  margin-top: 2em;
  margin-left: 1;
}

.product-card {
  width: calc(18% - 1em);
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 8px;
  text-align: center;
}

.product-card img {
  width: 100%;
  height: auto;
}
.product-card button {
  display: block;
  width: 100%;
  padding: 0.5em;
  margin-top: 1em;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.rightSection{
  margin-left: 42px;
}
</style>

<script setup>
import {db} from './firebase';
import { collection, getDocs } from "firebase/firestore";
import { useProductStore } from '../../store/ecommerce';
import { ref } from 'vue'
const searchKeyword = ref('')

const productStore =useProductStore();
const {addToWhishlist, addToCart} =productStore;
const querySnapshot = await getDocs(collection(db, "products"));
let productArr = []
querySnapshot.forEach((doc) => {
  productArr.push({
    category: doc.data().category,
    description: doc.data().description,
    id: doc.data().id,
    images: doc.data().images,
    price: doc.data().price,
    rating: doc.data().rating,
    title: doc.data().title
  })
},
);
let products = []
products = productArr
const filteredProducts = ()=>{
  return products.value.filter(product =>
  {
    return  product.title.toLowerCase().includes(searchKeyword.value.toLowerCase())

  }
  )
}

import Header from './Header.vue';
const addCart =(product)=>{
  
  addToCart(product);

}

const addWishlist =(product)=>{
  addToWhishlist(product);
  
 
}
</script>