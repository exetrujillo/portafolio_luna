<template>
    <div>
      <Navbar />
      <main>
        <slot />
      </main>
    </div>
  </template>
  
  <style>
  body {
    margin: 0;
    padding: 0;
    font-family: 'Helvetica Neue', Arial, sans-serif;
  }
  
  main {
    min-height: 100vh;
  }
  </style>