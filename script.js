  // Fonction pour faire défiler en douceur jusqu'à une section
  function scrollToSection(target) {
    const section = document.querySelector(target);
    if (section) {
      window.scrollTo({
        top: section.offsetTop, // Position de la section par rapport au haut de la page
        behavior: 'smooth' // Transition smooth
      });
    }
  }

  // Écouteurs d'événements pour les liens de navigation
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault(); // Empêcher le comportement par défaut du lien
      const target = this.getAttribute('href'); // Récupérer l'attribut href du lien
      scrollToSection(target); // Appeler la fonction de défilement doux
    });
});