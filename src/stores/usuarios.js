import { defineStore } from 'pinia'

export const useUsuariosStore = defineStore('usuarios', {
  state: () => ({
    usuarios: [],
    cargando: false,
    error: null,
    usuarioSeleccionadoId: null,
  }),

  getters: {
    totalUsuarios: (state) => state.usuarios.length,

    obtenerUsuarioPorId: (state) => {
      return (id) => state.usuarios.find((usuario) => usuario.id === Number(id))
    },
  },

  actions: {
    async cargarUsuarios() {
      this.cargando = true
      this.error = null

      try {
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/users')

        if (!respuesta.ok) {
          throw new Error('No se pudieron obtener los usuarios')
        }

        this.usuarios = await respuesta.json()
      } catch (error) {
        this.error = error.message
      } finally {
        this.cargando = false
      }
    },

    seleccionarUsuario(id) {
      this.usuarioSeleccionadoId = id
    },
  },
})
