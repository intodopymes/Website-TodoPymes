
document.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.getElementById('menu-open');
    const closeBtn = document.getElementById('menu-close');
    const mobileMenu = document.getElementById('mobile-menu');

    if (openBtn && closeBtn && mobileMenu) {
        // Abrir Menú (Desliza desde la derecha)
        openBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('translate-x-full', 'opacity-0', 'invisible');
            mobileMenu.classList.add('translate-x-0', 'opacity-100', 'visible');
            document.body.style.overflow = 'hidden'; // Bloquea el scroll del fondo
        });

        // Función para cerrar
        const closeMenu = () => {
            mobileMenu.classList.remove('translate-x-0', 'opacity-100', 'visible');
            mobileMenu.classList.add('translate-x-full', 'opacity-0', 'invisible');
            document.body.style.overflow = 'auto'; // Devuelve el scroll
        };

        closeBtn.addEventListener('click', closeMenu);

        // Cerrar al hacer clic en un enlace
        const menuLinks = mobileMenu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }
});