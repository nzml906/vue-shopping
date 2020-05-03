<template>
  <div id="app">
    <PageHeader />

    <Coupons />

    <div class="product-container">
      <ShoppingCart />

      <ProductList />
    </div>
  </div>
</template>

<script>
import PageHeader from "./components/PageHeader";
import Coupons from "./components/Coupons";
import ProductList from "./components/ProductList";
import ShoppingCart from "./components/ShoppingCart";

export default {
  name: "App",
  components: { PageHeader, Coupons, ProductList, ShoppingCart }
};
</script>

<style></style>
