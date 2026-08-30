// Carrossel em Fade
const slides = document.querySelectorAll('.fade-bg');
let currentSlide = 0;

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}
setInterval(nextSlide, 4000);

// Gerenciamento de Idioma e Links Locais Dinâmicos (PT | EN)
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

    // Atualização dinâmica dos links locais (Currículo e Portfólios)
    const resumeLink = document.getElementById('resume-link');
    const copyPortfolioLink = document.getElementById('copy-portfolio-link');
    const photoPortfolioLink = document.getElementById('photo-portfolio-link');

    if (lang === 'pt') {
        if (resumeLink) resumeLink.href = './curriculo_pt.pdf';
        if (copyPortfolioLink) copyPortfolioLink.href = './portfolio_copy_pt.pdf';
        if (photoPortfolioLink) photoPortfolioLink.href = './portfolio_fotografia_pt.pdf';
    } else {
        if (resumeLink) resumeLink.href = './curriculo_en.pdf';
        if (copyPortfolioLink) copyPortfolioLink.href = './portfolio_copy_en.pdf';
        if (photoPortfolioLink) photoPortfolioLink.href = './portfolio_fotografia_en.pdf';
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
