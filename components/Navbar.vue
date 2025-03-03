<template>
    <nav class="navbar">
      <div class="navbar-brand">
        <NuxtLink to="/" class="navbar-item logo">
          Luna Jadue
        </NuxtLink>
      </div>
      <div class="navbar-menu">
        <div class="navbar-end">
          <NuxtLink to="/about" class="navbar-item">About</NuxtLink>
          <NuxtLink to="/projects" class="navbar-item">Proyectos</NuxtLink>
          <NuxtLink to="/contact" class="navbar-item">Contacto</NuxtLink>
        </div>
      </div>
    </nav>
</template>
  
  <style scoped>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background-color: rgba(255, 255, 255, 0.9);
  }
  
  .navbar-brand {
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  .navbar-menu {
    display: flex;
  }
  
  .navbar-end {
    display: flex;
    gap: 2rem;
  }
  
  .navbar-item {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    transition: color 0.3s ease;
  }
  
  .navbar-item:hover {
    color: #888;
  }
  
  .logo {
    font-size: 1.8rem;
    letter-spacing: 1px;
  }
  </style>