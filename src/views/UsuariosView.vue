<script setup>
import { useRouter } from 'vue-router'
import UsuarioCard from '../components/UsuarioCard.vue'
import { useUsuariosStore } from '../stores/usuarios'

const router = useRouter()
const store = useUsuariosStore()

function mostrarUsuario(id) {
  store.seleccionarUsuario(id)

  router.push({
    name: 'usuario-detalle',
    params: {
      id: id,
    },
  })
}
</script>

<template>
  <section class="usuarios">
    <div class="encabezado">
      <h2>Usuarios</h2>

      <p>Lista de usuarios del Gestor de Usuarios UMG.</p>

      <p>
        <strong>Total de usuarios:</strong>
        {{ store.totalUsuarios }}
      </p>
    </div>

    <div class="lista-usuarios">
      <UsuarioCard
        v-for="usuario in store.usuarios"
        :key="usuario.id"
        :id="usuario.id"
        :nombre="usuario.name"
        :email="usuario.email"
        @ver-usuario="mostrarUsuario"
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
