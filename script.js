document.addEventListener('DOMContentLoaded', function () {
    // Glat rulning for navigationslinks
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            let target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });

    // Kontaktformular håndtering (eksempel med dummy funktion)
    const contactForm = document.querySelector('#kontakt form');
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        // Her kan du indsætte kode til at sende formulardata til din server eller en tredjepartstjeneste
        // For demonstrationens skyld viser vi bare en alert
        alert('Tak for din henvendelse, vi vender tilbage hurtigst muligt!');
        // Reset formular efter indsendelse
        contactForm.reset();
    });

    // Eksempel på projektmodalvisning (simpel)
    // Tilføj event listeners til dine projekt cards for at åbne en modal med mere information
    // Dette kræver, at du har en modal komponent i din HTML, som du kan vise/skjule
});

function toggleText(moreTextId, btnId) {
    var moreText = document.getElementById(moreTextId);
    var btnText = document.getElementById(btnId);

    if (moreText.classList.contains("hidden")) {
        moreText.classList.remove("hidden");
        btnText.textContent = "Se mindre";
    } else {
        moreText.classList.add("hidden");
        btnText.textContent = "Se mere...";
    }
}

module.exports = {
    theme: {
      extend: {
        colors: {
          'custom-blue': '#005f73',
          'custom-orange': '#ffba08',
        },
        fontFamily: {
          body: ['Open Sans', 'sans-serif'],
          headings: ['Merriweather', 'serif'],
        },
      },
    },
  }

  const translations = {
    "omMig": {
        "da": "Om Mig",
        "en": "About Me"
    },
    "mineKompetencer": {
        "da": "Mine Kompetencer",
        "en": "My Skills"
    },
    "projekter": {
        "da": "Projekter",
        "en": "Projects"
    },
    "mitGalleri": {
        "da": "Mit Galleri",
        "en": "My Gallery"
    },
    "kontakt": {
        "da": "Kontakt",
        "en": "Contact"
    },
    "omMigTekst": {
        "da": "Jeg er Rasmus Fjordbak Søndergaard, en passioneret softwareudvikler med en bachelor i Informationsteknologi og kandidatstuderende i Interaktive Digitale Medier...",
        "en": "I am Rasmus Fjordbak Søndergaard, a passionate software developer with a Bachelor's degree in Information Technology and a Master's candidate in Interactive Digital Media..."
    },
    // Tilføj flere oversættelser her
};

function switchLanguage(lang) {
    document.querySelectorAll("[data-translate]").forEach(el => {
        const key = el.getAttribute("data-translate");
        el.textContent = translations[key][lang];
    });
}
