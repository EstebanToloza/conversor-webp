# Conversor de Imágenes a WebP

Un script simple de Node.js para convertir imágenes (JPG, PNG, GIF, etc.) al formato WebP.

## Ventajas de WebP

- Menor tamaño de archivo (hasta un 30% más pequeño que JPEG con calidad similar)
- Soporte para transparencia como PNG
- Soporte para animaciones como GIF
- Ampliamente compatible con navegadores modernos

## Requisitos previos

- Node.js (versión 12 o superior)
- npm

## Instalación

1. Clona este repositorio:
   ```
   git clone https://github.com/tu-usuario/conversor-webp.git
   cd conversor-webp
   ```

2. Instala las dependencias:
   ```
   npm install
   ```

## Uso

1. Coloca las imágenes que deseas convertir en la carpeta `imagenes/`

2. Ejecuta el script:
   ```
   node towebp.js
   ```

3. Las imágenes convertidas se encontrarán en la carpeta `webp/`

## Personalización

Puedes ajustar la calidad y otras opciones de conversión modificando las variables en `towebp.js`:

```javascript
// Opciones de WebP
const webpOptions = {
  quality: 80,  // Calidad de la imagen (0-100)
  lossless: false  // Comprimir sin pérdida
};
```

## Licencia

MIT

## Contribuir

¡Las contribuciones son bienvenidas! Si tienes ideas para mejorar este conversor, no dudes en abrir un issue o enviar un pull request.
