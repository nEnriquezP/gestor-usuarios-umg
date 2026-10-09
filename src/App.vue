<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="app">
    <header class="header">
      <div class="contenedor">
        <h1>Gestor de Usuarios UMG</h1>

        <nav class="navegacion">
          <RouterLink to="/">Inicio</RouterLink>
          <RouterLink to="/usuarios">Usuarios</RouterLink>
          <RouterLink to="/about">Acerca de</RouterLink>
        </nav>
      </div>
    </header>

    <main class="contenido">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.header {
  background-color: #1f2937;
  color: white;
  padding: 20px;
}

.contenedor {
  max-width: 1100px;
  margin: 0 auto;
}

h1 {
  margin: 0 0 15px;
}

.navegacion {
  display: flex;
  gap: 20px;
}

.navegacion a {
  color: #d1d5db;
}

.navegacion a:hover {
  color: white;
}

.navegacion a.router-link-active {
  color: #42b883;
  font-weight: bold;
}

.contenido {
  max-width: 1100px;
  margin: 0 auto;
  padding: 30px 20px;
}
</style>
