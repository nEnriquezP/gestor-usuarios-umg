import { defineStore } from 'pinia'

export const useUsuariosStore = defineStore('usuarios', {
  state: () => ({
    usuarios: [
      {
        id: 1,
        name: 'Leanne Graham',
        email: 'sincere@april.biz',
      },
      {
        id: 2,
        name: 'Ervin Howell',
        email: 'shanna@melissa.tv',
      },
      {
        id: 3,
        name: 'Clementine Bauch',
        email: 'nathan@yesenia.net',
      },
    ],

    usuarioSeleccionadoId: null,
  }),

  getters: {
    totalUsuarios: (state) => state.usuarios.length,
  },

  actions: {
    seleccionarUsuario(id) {
      this.usuarioSeleccionadoId = id
    },
  },
})
