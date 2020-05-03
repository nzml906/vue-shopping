<template>
  <div class="product-card">
    <figure>
      <img
        class="product-card__img"
        :src="product.img"
        src-placeholder="https://cdn-images-1.medium.com/max/80/1*xjGrvQSXvj72W4zD6IWzfg.jpeg"
      />
    </figure>

    <div class="product-card__info">
      <h5>{{ product.title }}</h5>
      <p>{{ product.price | formatMoney }} - Stock: {{ product.inventory }}</p>
      <AddToCart :product="product" />
    </div>
  </div>
</template>

<script>
import AddToCart from './AddToCart';

export default {
  name: 'Product',
  props: {
    product: Object
  },
  components: { AddToCart }
};
</script>
