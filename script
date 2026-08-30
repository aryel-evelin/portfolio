// Carrossel em Fade
const slides = document.querySelectorAll('.fade-bg');
let currentSlide = 0;

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}
setInterval(nextSlide, 4000);

// Gerenciamento de Idioma e Links Locais (PT | EN)
let currentLang = localStorage.getItem('pref_lang');

if (!currentLang) {
    const browserLang = navigator.language || navigator.userLanguage;
    currentLang = browserLang.toLowerCase().startsWith('pt') ? 'pt' : 'en';
}

function updateLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('pref_lang', lang);
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    document.getElementById('lang-text').textContent = lang === 'pt' ? 'EN' : 'PT';

    // Atualização dinâmica do link do currículo apontando para arquivos locais
    const resumeLink = document.getElementById('resume-link');
    if (resumeLink) {
        if (lang === 'pt') {
            resumeLink.href = './curriculo_pt.pdf';
        } else {
            resumeLink.href = './curriculo_en.pdf';
        }
    }

    document.querySelectorAll('[data-pt]').forEach(el => {
        const text = el.getAttribute(`data-${lang}`);
        if (text) {
            if (el.children.length > 0 && el.querySelector('strong')) {
                const strongText = el.querySelector('strong').outerHTML;
                el.innerHTML = strongText + ' ' + text.split(': ')[1];
            } else {
                el.textContent = text;
            }
        }
    });
}

function toggleLanguage() {
    const newLang = currentLang === 'pt' ? 'en' : 'pt';
    updateLanguage(newLang);
}

// Aplica o idioma ao carregar a página
document.addEventListener('DOMContentLoaded', () => updateLanguage(currentLang));
