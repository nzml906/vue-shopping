<template>
  <div class="product-list">
    <div v-for="(product, index) in productRows" :key="index">
      <Product :product="product" track-by="id" />
    </div>
  </div>
</template>

<script>
import Product from './Product';
import { mapActions, mapState } from 'vuex';

export default {
  name: 'ProductList',
  computed: mapState({
    productRows: state => state.products.all
  }),
  methods: mapActions(['getProducts']),
  components: { Product },
  created() {
    this.getProducts();
  }
};
</script>
