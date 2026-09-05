// Função para criar os cards em zig-zag
function criarCards(categoria, containerId) {
    const container = document.getElementById(containerId);
    const animais = dadosAnimais[categoria];

    animais.forEach((animal) => {
        // Usa o caminho da imagem definido no dados.js
        const caminhoImagem = animal.imagem;
        
        const imgHTML = `<img src="${caminhoImagem}" alt="${animal.nome}" onerror="this.parentElement.innerHTML='<div style=\'height:100%; display:flex; align-items:center; justify-content:center; background:#d4d9bd; color:#3d4d36; font-weight:bold;\'>Imagem em breve</div>'">`;

        const card = `
            <div class="card-animal-zigzag" onclick="atualizarCuriosidade('${animal.nome}', '${animal.curiosidade.replace(/'/g, "\\'")}')">
                <div class="foto-col">
                    <div class="card-imagem">${imgHTML}</div>
                </div>
                <div class="texto-col">
                    <div class="titulo-com-icone">
                        <div class="icone-folha">
                            <svg viewBox="0 0 24 24" class="svg-icon" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
                                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
                            </svg>
                        </div>
                        <h3>${animal.nome}</h3>
                    </div>
                    <p>${animal.texto}</p>
                </div>
            </div>
        `;

        container.innerHTML += card;
    });
}

// Função para atualizar a curiosidade na coluna direita
function atualizarCuriosidade(nome, curiosidade) {
    const box = document.getElementById('curiosidade-fixa-texto');
    box.innerHTML = `
        <h4 style="color: #1f2e1b; font-size: 20px; margin-bottom: 10px; border-bottom: 2px solid #3d4d36; padding-bottom: 5px;">${nome}</h4>
        <p>${curiosidade}</p>
    `;
}

// Inicializa tudo
document.addEventListener('DOMContentLoaded', () => {
    criarCards('mamiferos', 'container-mamiferos');
    criarCards('aves', 'container-aves');
    criarCards('repteis', 'container-repteis');

    // Navegação
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.content-section');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            const targetId = this.getAttribute('data-target');
            sections.forEach(section => section.classList.remove('active-section'));
            document.getElementById(targetId).classList.add('active-section');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
});