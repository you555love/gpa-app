<template>
  <q-card class="q-ma-md">
    <q-img
      :src="product.image"
      spinner-color="primary"
      spinner-size="82px"
      style="height: 140px; max-width: 150px"
    />
    <q-card-section>
      <slot name="card-header"></slot>
      <div class="text-h6">{{ product.name }}</div>
      <div class="text-subtitle2">Price: {{ product.price }} Baht</div>
    </q-card-section>
    <q-card-actions vertical>
      <q-btn outline label="Add to Cart" @click="addToCart" />
    </q-card-actions>
  </q-card>
</template>
<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})
const emit = defineEmits(['add-to-cart'])
const addToCart = () => {
  emit('add-to-cart', props.product)
}
</script>
