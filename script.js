// Função Inteligente para Compartilhamento Nativo ou Cópia de Link (Garante Open Graph)
function shareLink() {
    const shareData = {
        title: 'Aryel Evelin | Copywriting, Roteiros & Storytelling | Fotografia',
        text: 'Especialista em unir visão estratégica de negócios, copywriting, crescimento de audiência e storytelling de alto impacto.',
        url: 'https://smoakdanvers.github.io/portfolio/'
    };

    // Se o dispositivo suportar compartilhamento nativo (celulares puxam a foto de preview do Open Graph)
    if (navigator.share) {
        navigator.share(shareData).catch(() => {});
    } else {
        // Fallback para computadores: Copia o link formatado
        navigator.clipboard.writeText(shareData.url);
        const alertMsg = document.documentElement.lang === 'pt-BR' 
            ? 'Link copiado para a área de transferência! Pronto para enviar com prévia.' 
            : 'Link copied to clipboard! Ready to share with preview.';
        alert(alertMsg);
    }
}

// Ação para Instagram DM (Explica e copia a mensagem pronta para colar no Direct)
function shareInstagram() {
    const textToCopy = "Confira o portfólio da Aryel Evelin: https://smoakdanvers.github.io/portfolio/";
    navigator.clipboard.writeText(textToCopy);
    
    const msg = document.documentElement.lang === 'pt-BR'
        ? "Link copiado! Como o Instagram não permite envio automático de DM via web, abra o Direct do Instagram e cole (Ctrl+V) o link para enviar com a prévia!"
        : "Link copied! Since Instagram doesn't allow automatic web DMs, open Instagram Direct and paste the link to send it with the rich preview!";
    alert(msg);
}
