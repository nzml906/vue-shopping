<template>
  <div class="cart-item">
    <div>
      <img
        class="vue-logo"
        :src="item.img"
        src-placeholder="https://cdn-images-1.medium.com/max/80/1*xjGrvQSXvj72W4zD6IWzfg.jpeg"
      />
    </div>

    <div class="cart-item-body">
      <strong class="cart-item-body__title">{{ item.title }}</strong>
      <span
        >Quantity: {{ item.quantity }} - {{ item.price | formatMoney }}</span
      >
    </div>

    <RemoveFromCart :product="item" />
  </div>
</template>

<script>
import RemoveFromCart from './RemoveFromCart';

export default {
  name: 'ShoppingCartItem',
  props: {
    item: Object
  },
  components: { RemoveFromCart }
};
</script>
