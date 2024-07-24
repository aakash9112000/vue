<template>

</template>

<script setup>
import { useProductStore } from '../../store/ecommerce';
import { storeToRefs } from "pinia";
import { useProductStore } from '../../store/ecommerce';
import { storeToRefs } from "pinia";
const productStore =useProductStore();
const { Whishlist,cart } = storeToRefs(productStore);




</script>