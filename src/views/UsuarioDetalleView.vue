<script setup>
import { computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { useUsuariosStore } from '../stores/usuarios'

const route = useRoute()
const router = useRouter()
const store = useUsuariosStore()

const usuario = computed(() => {
  return store.obtenerUsuarioPorId(route.params.id)
})

onMounted(async () => {
  if (store.usuarios.length === 0) {
    await store.cargarUsuarios()
  }
})

function volverUsuarios() {
  router.push({
    name: 'usuarios',
  })
}
</script>

<template>
  <section class="detalle">
    <p v-if="store.cargando" class="mensaje">Cargando información del usuario...</p>

    <p v-else-if="store.error" class="error">
      {{ store.error }}
    </p>

    <article v-else-if="usuario" class="usuario-detalle">
      <div class="encabezado">
        <span class="usuario-id"> Usuario #{{ usuario.id }} </span>

        <h2>{{ usuario.name }}</h2>

        <p class="username">@{{ usuario.username }}</p>
      </div>

      <div class="informacion">
        <div class="dato">
          <strong>Correo electrónico</strong>
          <span>{{ usuario.email }}</span>
        </div>

        <div class="dato">
          <strong>Teléfono</strong>
          <span>{{ usuario.phone }}</span>
        </div>

        <div class="dato">
          <strong>Sitio web</strong>
          <span>{{ usuario.website }}</span>
        </div>

        <div class="dato">
          <strong>Empresa</strong>
          <span>{{ usuario.company.name }}</span>
        </div>

        <div class="dato">
          <strong>Ciudad</strong>
          <span>{{ usuario.address.city }}</span>
        </div>

        <div class="dato">
          <strong>Dirección</strong>
          <span>
            {{ usuario.address.street }},
            {{ usuario.address.suite }}
          </span>
        </div>
      </div>

      <button class="boton" @click="volverUsuarios">Volver a usuarios</button>
    </article>

    <div v-else class="no-encontrado">
      <h2>Usuario no encontrado</h2>

      <p>No existe un usuario con el identificador solicitado.</p>

      <button class="boton" @click="volverUsuarios">Volver a usuarios</button>
    </div>
  </section>
</template>

<style scoped>
.detalle {
  max-width: 800px;
  margin: 0 auto;
}

.usuario-detalle,
.no-encontrado,
.mensaje,
.error {
  background-color: white;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 8%);
}

.encabezado {
  padding-bottom: 20px;
  border-bottom: 1px solid #e5e7eb;
}

.usuario-id {
  color: #6b7280;
  font-size: 14px;
}

h2 {
  margin: 8px 0;
}

.username {
  margin: 0;
  color: #42b883;
}

.informacion {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  margin: 25px 0;
}

.dato {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.dato strong {
  color: #374151;
}

.dato span {
  color: #6b7280;
}

.boton {
  padding: 10px 18px;
  border: none;
  border-radius: 6px;
  background-color: #42b883;
  color: white;
  cursor: pointer;
}

.boton:hover {
  background-color: #369f72;
}

.error {
  background-color: #fee2e2;
  color: #991b1b;
}

.no-encontrado {
  text-align: center;
}
</style>
