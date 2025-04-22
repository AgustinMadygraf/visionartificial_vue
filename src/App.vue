<!--
Path: src/App.vue
-->

<template>
  <div id="app">
    <header>
      <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
        <div class="container">
          <span class="navbar-brand">Visión Artificial</span>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link active" href="#">Inicio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Configuración</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    
    <main class="py-4">
      <div class="container">
        <HomePage />
      </div>
    </main>
    
    <!-- Componente de notificaciones responsivo -->
    <NotificationsContainer position="bottom-right" />
    
    <footer class="bg-dark text-light py-3 mt-5">
      <div class="container text-center">
        <p class="mb-0">Visión Artificial con Vue.js &copy; 2025</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import HomePage from './components/HomePage.vue';
import NotificationsContainer from './components/NotificationsContainer.vue';
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

/* Bootstrap está importado en main.js */
</style>