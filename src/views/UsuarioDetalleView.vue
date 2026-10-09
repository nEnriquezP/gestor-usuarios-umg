<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const idUsuario = route.params.id
</script>

<template>
  <section class="detalle">
    <h2>Detalle del usuario</h2>

    <p>
      Usuario seleccionado:
      <strong>{{ idUsuario }}</strong>
    </p>

    <p>Más adelante aquí mostraremos la información completa del usuario.</p>
  </section>
</template>

<style scoped>
.detalle {
  background-color: white;
  padding: 30px;
  border-radius: 10px;
}

h2 {
  margin-top: 0;
}
</style>
