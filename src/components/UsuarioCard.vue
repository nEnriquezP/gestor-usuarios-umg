<script setup>
defineProps({
  id: {
    type: Number,
    required: true,
  },

  nombre: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <article class="usuario-card">
    <div class="usuario-id">Usuario #{{ id }}</div>

    <h3>{{ nombre }}</h3>

    <p>
      <strong>Correo:</strong>
      {{ email }}
    </p>

    <button class="boton">Ver usuario</button>
  </article>
</template>

<style scoped>
.usuario-card {
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 8%);
}

.usuario-id {
  color: #6b7280;
  font-size: 14px;
  margin-bottom: 10px;
}

h3 {
  margin: 0 0 12px;
  color: #1f2937;
}

p {
  color: #4b5563;
}

.boton {
  margin-top: 10px;
  padding: 10px 16px;
  border: none;
  border-radius: 6px;
  background-color: #42b883;
  color: white;
  cursor: pointer;
}

.boton:hover {
  background-color: #369f72;
}
</style>
