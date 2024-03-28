// Obtenemos todas las imágenes de la galería
const images = document.querySelectorAll('.gallery .image');

// Iteramos sobre cada imagen
images.forEach(image => {
    // Añadimos un evento para cuando el mouse entre en la imagen
    image.addEventListener('mouseenter', () => {
        // Resaltamos la imagen y aumentamos su tamaño
        image.style.transform = 'scale(1.1)';
    });

    // Añadimos un evento para cuando el mouse salga de la imagen
    image.addEventListener('mouseleave', () => {
        // Quitamos el resaltado y volvemos al tamaño original
        image.style.transform = 'scale(1)';
    });
});
