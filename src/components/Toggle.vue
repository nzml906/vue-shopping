<template>
  <div>
    <label class="custom-control-my custom-control-inline-my custom-checkbox-my">
      <input type="checkbox" class="custom-control-input-my" @change="action(data)" />
      <span class="custom-control-label-my">{{ data.title }}</span>
    </label>
  </div>
</template>

<script>
export default {
  name: "Toggle",
  props: {
    data: Object,
    action: Function
  }
};
</script>