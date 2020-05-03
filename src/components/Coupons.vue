<template>
  <div class="coupon-container">
    <h3>Promotions</h3>
    <div class="coupon-button">
      <Toggle
        :data="coupon"
        :action="toggleCoupon"
        v-for="coupon in promotions"
        :key="coupon.id"
      />
    </div>
  </div>
</template>

<script>
import Toggle from "./Toggle";
import { mapActions, mapState } from "vuex";

export default {
  name: "Coupons",
  computed: mapState({
    promotions: (state) => state.promotions.all,
  }),
  methods: mapActions(["getPromotions", "toggleCoupon"]),
  components: { Toggle },
  created() {
    this.getPromotions();
  },
};
</script>
