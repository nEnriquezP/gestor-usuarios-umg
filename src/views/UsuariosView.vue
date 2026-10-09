<script setup>
import UsuarioCard from '../components/UsuarioCard.vue'

const usuariosPrueba = [
  {
    id: 1,
    nombre: 'Leanne Graham',
    email: 'sincere@april.biz',
  },
  {
    id: 2,
    nombre: 'Nelson Enriquez P',
    email: 'laumg@gmail.com',
  },
  {
    id: 3,
    nombre: 'Clementine Bauch',
    email: 'nathan@yesenia.net',
  },
]
</script>

<template>
  <section class="usuarios">
    <div class="encabezado">
      <h2>Usuarios</h2>

      <p>Lista de usuarios del Gestor de Usuarios UMG.</p>
    </div>

    <div class="lista-usuarios">
      <UsuarioCard
        v-for="usuario in usuariosPrueba"
        :key="usuario.id"
        :id="usuario.id"
        :nombre="usuario.nombre"
        :email="usuario.email"
      />
    </div>
  </section>
</template>

<style scoped>
.encabezado {
  margin-bottom: 25px;
}

.encabezado h2 {
  margin-bottom: 8px;
}

.encabezado p {
  color: #6b7280;
}

.lista-usuarios {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}
</style>
