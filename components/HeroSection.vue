<template>
  <section class="hero">
    <div 
      v-for="(image, index) in images" 
      :key="index" 
      class="hero-image" 
      :style="{
        backgroundImage: `url(${image})`,
        opacity: index === activeIndex ? opacity : index === previousIndex ? 1 - opacity : 0,
        zIndex: index === activeIndex ? -1 : index === previousIndex ? -2 : -3
      }">
    </div>
    <div class="hero-buttons">
      <button @click="scrollToSection('presentacion')" class="btn">Presentación</button>
      <button @click="scrollToSection('actriz')" class="btn">Actriz</button>
      <button @click="scrollToSection('escritura')" class="btn">Escritura</button>
      <button @click="scrollToSection('performance')" class="btn">Performance</button>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const images = [
  `/images/placeholder-image.jpg`,
  `/images/placeholder-image2.jpg`,
  `/images/placeholder-image3.jpg`,
  `/images/placeholder-image4.jpg`
];

// Variables reactivas para controlar las imágenes y las animaciones
const activeIndex = ref(0);
const previousIndex = ref(null);
const opacity = ref(1);
const transitioning = ref(false);
let intervalId = null;
let animationId = null;

// Función para realizar la transición de disolución cruzada
const crossFade = (startTime, duration) => {
  const now = performance.now();
  const elapsed = now - startTime;
  const progress = Math.min(elapsed / duration, 1);
  
  opacity.value = progress;
  
  if (progress < 1) {
    animationId = requestAnimationFrame(() => crossFade(startTime, duration));
  } else {
    // Transición completada
    previousIndex.value = null;
    transitioning.value = false;
    opacity.value = 1;
  }
};

// Función para cambiar la imagen con efecto de disolución cruzada
const changeImage = () => {
  if (transitioning.value) return;
  
  transitioning.value = true;
  previousIndex.value = activeIndex.value;
  opacity.value = 0;
  
  // Establecer la nueva imagen activa
  activeIndex.value = (activeIndex.value + 1) % images.length;
  
  // Iniciar la animación
  const duration = 1000; // 1 segundo
  crossFade(performance.now(), duration);
};

// Función para iniciar la rotación de imágenes
const startImageRotation = () => {
  intervalId = setInterval(changeImage, 5000); // Cambia cada 5 segundos (está en milisegundos)
};

// Función para detener la rotación
const stopImageRotation = () => {
  if (intervalId) {
    clearInterval(intervalId);
  }
  if (animationId) {
    cancelAnimationFrame(animationId);
  }
};

// Función para desplazarse a una sección específica
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// Ciclo de vida: cuando el componente se monta
onMounted(() => {
  startImageRotation();
});

// Ciclo de vida: cuando el componente se desmonta
onUnmounted(() => {
  stopImageRotation();
});
</script>

<style scoped>
.hero {
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}

.hero-buttons {
  position: absolute;
  right: 5%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 10;
}

.btn {
  padding: 0.8rem 1.5rem;
  background-color: rgba(255, 255, 255, 0.8);
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn:hover {
  background-color: #fff;
  transform: translateX(-5px);
}
</style>