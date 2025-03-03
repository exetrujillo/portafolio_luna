<template>
    <div class="home">
      <HeroSection />
      
      <section id="presentacion" class="content-section">
        <h2>Presentación</h2>
        <p>Información general sobre Luna Jadue y su trabajo artístico.</p>
      </section>
      
      <section id="actriz" class="content-section">
        <h2>Actriz</h2>
        <p>Trabajos de Luna como actriz, incluyendo teatro, cine y televisión.</p>
      </section>
      
      <section id="escritura" class="content-section">
        <h2>Escritura</h2>
        <p>Obras literarias, guiones y publicaciones de Luna Jadue.</p>
      </section>
      
      <section id="performance" class="content-section">
        <h2>Performance</h2>
        <p>Performances y proyectos experimentales.</p>
      </section>
    </div>
  </template>
  
  <style scoped>
  .content-section {
    min-height: 100vh;
    padding: 4rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .content-section h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
  
  .content-section p {
    font-size: 1.2rem;
    max-width: 800px;
  }
  
  #presentacion {
    background-color: #f7f7f7;
  }
  
  #actriz {
    background-color: #eaeaea;
  }
  
  #escritura {
    background-color: #f0f0f0;
  }
  
  #performance {
    background-color: #e5e5e5;
  }
  </style>