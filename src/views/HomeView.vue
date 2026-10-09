<template>
  <section class="inicio">
    <div class="hero">
      <p class="etiqueta">Desarrollo Web · UMG</p>

      <h2>Gestor de Usuarios UMG</h2>

      <p class="descripcion">
        Aplicación desarrollada con Vue 3 para integrar componentes, props, eventos, Vue Router,
        Pinia y consumo de una API REST.
      </p>

      <p>
        Tarea hecha por:
        <strong>Nelson Fernando Enriquez Portillo </strong>
        Carné: <strong>0907-18-14024</strong>
      </p>

      <RouterLink to="/usuarios" class="boton"> Ver usuarios </RouterLink>
    </div>

    <div class="tecnologias">
      <article>
        <h3>Vue 3</h3>
        <p>Interfaz basada en componentes reutilizables.</p>
      </article>

      <article>
        <h3>Vue Router</h3>
        <p>Navegación SPA y rutas dinámicas.</p>
      </article>

      <article>
        <h3>Pinia</h3>
        <p>Administración del estado global.</p>
      </article>

      <article>
        <h3>REST API</h3>
        <p>Obtención de usuarios mediante fetch y JSON.</p>
      </article>
    </div>
  </section>
</template>

<style scoped>
.hero {
  background-color: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 8%);
}

.etiqueta {
  margin: 0 0 10px;
  color: #42b883;
  font-weight: bold;
}

h2 {
  margin: 0 0 15px;
  font-size: 32px;
}

.descripcion {
  max-width: 700px;
  color: #6b7280;
  line-height: 1.6;
}

.boton {
  display: inline-block;
  margin-top: 15px;
  padding: 11px 18px;
  border-radius: 6px;
  background-color: #42b883;
  color: white;
}

.tecnologias {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  margin-top: 25px;
}

.tecnologias article {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
}

.tecnologias h3 {
  margin-top: 0;
}

.tecnologias p {
  margin-bottom: 0;
  color: #6b7280;
}
</style>
