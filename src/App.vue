<!-- filepath: App.vue -->
<template>
  <div id="app">
    <header>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container">
          <span class="navbar-brand">Visión Artificial</span>
        </div>
      </nav>
    </header>
    
    <main class="py-4">
      <HomePage />
    </main>
    
    <footer class="bg-dark text-light py-3 mt-5">
      <div class="container text-center">
        <p class="mb-0">Visión Artificial con Vue.js &copy; 2025</p>
      </div>
    </footer>
  </div>
</template>

<script>
import HomePage from './components/HomePage.vue';

export default {
  name: 'App',
  components: {
    HomePage
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: #f8f9fa;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

/* Si estás utilizando Bootstrap, puedes agregar la importación aquí o
   incluirlo en el main.js o index.html */
</style>