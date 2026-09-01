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

    // Selecionando todos os botões que precisam de links traduzidos
    const resumeLink = document.getElementById('resume-link');
    const copyPortfolioLink = document.getElementById('copy-portfolio-link');
    const photoPortfolioLink = document.getElementById('photo-portfolio-link');
    const cardCopyLink = document.getElementById('card-copy-link');
    const cardPhotoPortfolioLink = document.getElementById('card-photo-portfolio-link');

    // Aplicando os links corretos de acordo com os nomes dos seus PDFs na raiz
    if (lang === 'pt') {
        if (resumeLink) resumeLink.href = '../curriculo_marketing_pt.pdf';
        if (copyPortfolioLink) copyPortfolioLink.href = '../portfolio_copy_pt.pdf';
        if (photoPortfolioLink) photoPortfolioLink.href = '../portfolio_fotografia_pt.pdf';
        if (cardCopyLink) cardCopyLink.href = '../portfolio_copy_pt.pdf';
        if (cardPhotoPortfolioLink) cardPhotoPortfolioLink.href = '../portfolio_fotografia_pt.pdf';
    } else {
        if (resumeLink) resumeLink.href = '../curriculo_marketing_en.pdf';
        if (copyPortfolioLink) copyPortfolioLink.href = '../portfolio_copy_en.pdf';
        if (photoPortfolioLink) photoPortfolioLink.href = '../portfolio_fotografia_en.pdf';
        if (cardCopyLink) cardCopyLink.href = '../portfolio_copy_en.pdf';
        if (cardPhotoPortfolioLink) cardPhotoPortfolioLink.href = '../portfolio_fotografia_en.pdf';
    }

    // Tradução dos textos na página
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

// Função de Compartilhamento
function shareLink() {
    const shareData = {
        title: 'Aryel Evelin | Marketing & Ads',
        text: 'Growth, Conteúdo Estratégico & Storytelling',
        url: window.location.href
    };

    if (navigator.share) {
        navigator.share(shareData).catch(() => {});
    } else {
        navigator.clipboard.writeText(shareData.url);
        const alertMsg = document.documentElement.lang === 'pt-BR' 
            ? 'Link copiado para a área de transferência!' 
            : 'Link copied to clipboard!';
        alert(alertMsg);
    }
}

document.addEventListener('DOMContentLoaded', () => updateLanguage(currentLang));
