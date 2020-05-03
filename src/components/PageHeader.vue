<template>
  <nav class="app-navbar" v-if="profile.limit">
    <span class="app-navbar__text">
      Hello
      <strong>{{ fullName }}</strong>, your credit limit is
      <ShoppingCartLimit :limit="profile.limit" />
    </span>
  </nav>
</template>

<script>
import ShoppingCartLimit from "./ShoppingCartLimit";
import { mapActions, mapState } from "vuex";

export default {
  name: "PageHeader",
  computed: {
    ...mapState({
      profile: state => state.profile.data
    }),
    fullName() {
      return `${this.profile.firstName} ${this.profile.lastName}`;
    }
  },
  methods: mapActions(["getProfile"]),
  components: { ShoppingCartLimit },
  created() {
    this.getProfile();
  }
};
</script>
