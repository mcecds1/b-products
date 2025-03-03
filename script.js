const carousel = document.getElementById("carousel");
        
        function scrollCarousel(amount) {
            carousel.scrollBy({
                left: amount,
                behavior: "smooth"
            });
        }
        
        function autoScroll() {
            if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth) {
                carousel.scrollLeft = 0;
            } else {
                scrollCarousel(200);
            }
        }
        
        setInterval(autoScroll, 4000); // Desplaza cada 4 segundos
        
           // Función para abrir y cerrar el menú
        function toggleMenu() {
        const menu = document.getElementById('menu');
        menu.classList.toggle('open');
    }