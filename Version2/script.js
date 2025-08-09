document.addEventListener('DOMContentLoaded', function() {

    // --- Animaciones de Scroll ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show-element');
            }
        });
    }, { threshold: 0.1 });

    const hiddenElements = document.querySelectorAll('.hidden-element');
    hiddenElements.forEach(el => observer.observe(el));

    // --- Header con Scroll ---
    const header = document.getElementById('main-header');
    if (header) { // Verificar que el header existe
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // --- Menú Móvil ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mainNav = document.getElementById('main-nav');

    if (mobileMenuButton && mainNav) { // Verificar que los elementos existen
        mobileMenuButton.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });
    }

    // --- Pestañas del Programa ---
    // Hacer la función accesible globalmente para los atributos onclick del HTML
    window.openDay = function(evt, dayName) {
        let i, tabcontent, tablinks;
        
        // Ocultar todo el contenido de las pestañas
        tabcontent = document.getElementsByClassName("tab-content");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        
        // Quitar la clase 'active' de todos los botones
        tablinks = document.getElementsByClassName("tab-link");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        
        // Mostrar el contenido de la pestaña seleccionada y marcar el botón como activo
        const dayContent = document.getElementById(dayName);
        if (dayContent) { // Verificar que el contenido del día existe
            dayContent.style.display = "block";
        }
        evt.currentTarget.className += " active";
    }

    // --- SMOOTH SCROLLING FOR NAV LINKS ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetElement = document.querySelector(this.getAttribute('href'));
            if (targetElement) { // Verificar que el elemento de destino existe
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

});