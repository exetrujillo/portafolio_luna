const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Función para ejecutar comandos shell
function run(command) {
  console.log(`Ejecutando: ${command}`);
  execSync(command, { stdio: 'inherit' });
}

// Construir el proyecto
console.log('Construyendo el proyecto...');
run('npm run build');

// Preparar el directorio docs
console.log('Preparando el directorio docs...');
if (fs.existsSync('docs')) {
  fs.rmSync('docs', { recursive: true, force: true });
}
fs.mkdirSync('docs', { recursive: true });

// Copiar los archivos de .output/public a docs
console.log('Copiando archivos a docs...');
fs.cpSync('.output/public', 'docs', { recursive: true });

// Crear un archivo .nojekyll en docs para evitar el procesamiento de Jekyll
console.log('Creando archivo .nojekyll...');
fs.writeFileSync('docs/.nojekyll', '');

console.log('Despliegue completado! Ahora puedes hacer commit y push a GitHub.');