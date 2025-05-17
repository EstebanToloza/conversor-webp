// image-to-webp.js
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Directorio de entrada y salida
const inputDir = './imagenes';
const outputDir = './webp';

// Opciones de WebP
const webpOptions = {
    quality: 80, // Calidad de la imagen (0-100)
    lossless: false, // Comprimir sin pérdida
};

// Crear directorio de salida si no existe
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Obtener lista de archivos en el directorio de entrada
fs.readdir(inputDir, (err, files) => {
    if (err) {
        console.error('Error al leer el directorio:', err);
        return;
    }

    // Filtrar solo archivos de imagen
    const imageFiles = files.filter((file) => {
        const ext = path.extname(file).toLowerCase();
        return ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff'].includes(ext);
    });

    if (imageFiles.length === 0) {
        console.log('No se encontraron imágenes para convertir.');
        return;
    }

    console.log(`Encontradas ${imageFiles.length} imágenes para convertir.`);

    // Convertir cada imagen a WebP
    imageFiles.forEach((file) => {
        const inputPath = path.join(inputDir, file);
        const outputPath = path.join(outputDir, `${path.parse(file).name}.webp`);

        sharp(inputPath)
            .webp(webpOptions)
            .toFile(outputPath)
            .then(() => {
                console.log(`Convertido: ${file} -> ${path.parse(file).name}.webp`);
            })
            .catch((err) => {
                console.error(`Error al convertir ${file}:`, err);
            });
    });
});
