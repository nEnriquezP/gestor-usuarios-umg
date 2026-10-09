<template>
  <section class="acerca">
    <h2>Acerca del proyecto</h2>

    <p>
      <strong>Proyecto:</strong>
      Gestor de Usuarios UMG
    </p>

    <p>
      <strong>Estudiante:</strong>
      Nelson Fernando Enríquez Portillo
    </p>

     <p>
      <strong>Carné:</strong>
      0907-18-14024
    </p>

    <p>
      <strong>Curso:</strong>
      Desarrollo Web / Ciclo VIII
    </p>

     <p>
      <strong>Catedrático:</strong>
      Ing. Elder Amilcar Herrera
    </p>

    <p>
      <strong>Universidad:</strong>
      Universidad Mariano Gálvez de Guatemala
    </p>

    <hr />

    <h3>Descripción</h3>

    <p>
      Esta aplicación integra los principales conceptos trabajados con Vue.js: componentes, props,
      eventos, Vue Router, Pinia y consumo de una API REST mediante fetch.
    </p>

    <h3>API utilizada</h3>

    <p>Los datos de usuarios son obtenidos desde JSONPlaceholder:</p>

    <code> https://jsonplaceholder.typicode.com/users </code>
  </section>
</template>

<style scoped>
.acerca {
  background-color: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 8%);
}

h2 {
  margin-top: 0;
}

h3 {
  margin-top: 25px;
}

p {
  color: #4b5563;
  line-height: 1.6;
}

hr {
  margin: 25px 0;
  border: none;
  border-top: 1px solid #e5e7eb;
}

code {
  display: block;
  padding: 12px;
  overflow-x: auto;
  border-radius: 6px;
  background-color: #f3f4f6;
}
</style>
