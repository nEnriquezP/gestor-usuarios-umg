<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

import UsuarioCard from '../components/UsuarioCard.vue'
import { useUsuariosStore } from '../stores/usuarios'

const router = useRouter()
const store = useUsuariosStore()

onMounted(() => {
  if (store.usuarios.length === 0) {
    store.cargarUsuarios()
  }
})

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

      <p>Usuarios obtenidos desde una API REST.</p>

      <p v-if="!store.cargando && !store.error">
        <strong>Total de usuarios:</strong>
        {{ store.totalUsuarios }}
      </p>
    </div>

    <p v-if="store.cargando" class="mensaje">Cargando usuarios...</p>

    <p v-else-if="store.error" class="error">
      {{ store.error }}
    </p>

    <div v-else class="lista-usuarios">
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

.mensaje {
  padding: 20px;
  background-color: white;
  border-radius: 10px;
}

.error {
  padding: 20px;
  background-color: #fee2e2;
  color: #991b1b;
  border-radius: 10px;
}
</style>
