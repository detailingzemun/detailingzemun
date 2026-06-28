fetch('/content/site.json')
  .then(r => r.ok ? r.json() : null)
  .then(data => {
    if (!data) return;

    if (data.about_title) {
      document.getElementById('about-title').textContent = data.about_title;
    }

    if (data.about_text) {
      document.getElementById('about-text').textContent = data.about_text;
    }

    if (Array.isArray(data.gallery)) {
      const g = document.getElementById('gallery');

      if (g) {
        g.innerHTML = '';

        data.gallery.forEach(item => {
          if (!item.image) return;

          const img = document.createElement('img');
          img.src = item.image;
          img.alt = item.alt || 'Detailing Centar Zemun';
          g.appendChild(img);
        });
      }
    }
  })
  .catch(() => {});

document.querySelectorAll("[data-service]").forEach(function(link) {
  link.addEventListener("click", function() {
    var selectedService = link.getAttribute("data-service");
    var serviceSelect = document.querySelector('select[name="usluga"]');
    var messageBox = document.querySelector('textarea[name="poruka"]');

    setTimeout(function() {
      if (serviceSelect && selectedService) {
        serviceSelect.value = selectedService;
      }

      if (messageBox && selectedService) {
        messageBox.value = "Želim da zakažem: " + selectedService;
      }

      var bookingSection = document.getElementById("zakazivanje");
      if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  });
});
