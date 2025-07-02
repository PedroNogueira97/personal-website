document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('mobile-menu-button');
  const menu = document.getElementById('mobile-menu');
  const iconOpen = button.querySelector('.icon-open');
  const iconClose = button.querySelector('.icon-close');
  const html = document.documentElement;

  button.addEventListener('click', () => {
    // Toggle menu visibility
    menu.classList.toggle('hidden');
    
    // Toggle icons
    iconOpen.classList.toggle('hidden');
    iconClose.classList.toggle('hidden');
    
    // Prevent background scrolling when menu is open
    html.classList.toggle('overflow-hidden');
    
    // Add backdrop for better UX
    if (!menu.classList.contains('hidden')) {
      const backdrop = document.createElement('div');
      backdrop.id = 'menu-backdrop';
      backdrop.className = 'fixed inset-0 bg-black bg-opacity-50 z-40';
      backdrop.addEventListener('click', () => {
        menu.classList.add('hidden');
        iconOpen.classList.remove('hidden');
        iconClose.classList.add('hidden');
        html.classList.remove('overflow-hidden');
        backdrop.remove();
      });
      document.body.appendChild(backdrop);
    } else {
      const backdrop = document.getElementById('menu-backdrop');
      if (backdrop) backdrop.remove();
    }
  });
});
