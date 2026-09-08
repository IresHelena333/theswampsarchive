// Função para gerar nome de arquivo a partir do nome do animal
function gerarNomeImagem(nomeAnimal) {
    return nomeAnimal
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .replace(/\s+/g, '_') + '.jpg';
}

// Cria os cards
function criarCards(categoria, containerId) {
    const container = document.getElementById(containerId);
    const animais = dadosAnimais[categoria];
    
    const pasta = (categoria === 'mamiferos') ? 'images/mamifero' : (categoria === 'aves' ? 'images/aves' : 'images/repteis_anfibios');

    animais.forEach((animal) => {
        const nomeImagem = gerarNomeImagem(animal.nome);
        const caminho = pasta + '/' + nomeImagem;
        
        const imgHTML = `<img src="${caminho}" alt="${animal.nome}" onerror="this.parentElement.innerHTML='<div style=\'height:100%; display:flex; align-items:center; justify-content:center; background:#d4d9bd; color:#3d4d36; font-weight:bold;\'>Imagem em breve</div>'">`;

        let textoHTML = `<p>${animal.texto}</p>`;
        if (categoria === 'repteis' && animal.nome.toLowerCase().includes('sapo cururu')) {
            textoHTML = `
                <p>${animal.texto.replace('servem de alimento para muitos animais', '<a href="#" id="link-sapo" style="cursor:pointer; color:#0056b3; text-decoration:underline; font-weight:bold;" onclick="event.preventDefault(); irPara404();">servem de alimento para muitos animais</a>')}</p>
            `;
        }

        const card = `
            <div class="card-animal-completo">
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
                        <em class="nome-cientifico">${animal.nomeCientifico}</em>
                    </div>
                    ${textoHTML}
                </div>
                <div class="curiosidade-col">
                    <div class="curiosidade-box">
                        <strong>Curiosidade</strong>
                        <p>${animal.curiosidade}</p>
                    </div>
                </div>
            </div>
        `;

        let jacareOnClick = "";
        if (categoria === 'repteis' && animal.nome.toLowerCase().includes('jacaré')) {
            jacareOnClick = `onclick="clicarJacare('${animal.nome}')"`;
        }
        const cardFinal = card.replace('<div class="card-imagem">', `<div class="card-imagem" ${jacareOnClick}>`);
        container.innerHTML += cardFinal;
    });
}

// Função para atualizar a curiosidade na coluna direita (REMOVIDA)
function atualizarCuriosidade(nome, curiosidade) {
    // Não é mais usada
}

// ===== LÓGICA DO JOGO/EASTER EGG =====
let estadoHistoria = {
    codigoResgatado: false,
    senhaAdminAtiva: false,
    senhaDescoberta: "5219",
    sapoAtivado: false,
};

// Função da Loja (Código promocional)
function verificarCodigo() {
    const input = document.getElementById('codigo-promo').value.trim();
    const msg = document.getElementById('promo-msg');

    if (input === '#Tuiuiúsãoosmelhores') {
        estadoHistoria.codigoResgatado = true;
        msg.innerHTML = "Código aceito! <br><br> OS JACARÉS SÃO IDIOTAS EM FOTOS...";
        msg.style.color = "#2e7d32";
    } else {
        msg.innerHTML = "Código inválido. Tente novamente.";
        msg.style.color = "#c62828";
    }
}

// Função do Jacaré específico (Répteis)
function clicarJacare(nome) {
    if (!estadoHistoria.codigoResgatado) return;

    mostrarDialogo(
        "../images/mascotes/nino.png", 
        ["🐊 Nino: 'Desde a última vez, estou tentando manter a calma... Não posso... Perder...'"]
    );

    document.getElementById('jacare_do_pantanal_senha').style.display = 'flex';
    document.getElementById('jacare_do_pantanal_senha').style.justifyContent = 'center';
    document.getElementById('jacare_do_pantanal_senha').style.alignItems = 'center';
    document.getElementById('senha-descoberta').innerText = estadoHistoria.senhaDescoberta;
}

// Função da Senha (Sobre Nós)
function verificarSenha() {
    const input = document.getElementById('admin-senha').value.trim();
    const msg = document.getElementById('admin-msg');

    if (input === "5219") {
        document.getElementById('tela-sapo').style.display = 'flex';
        document.getElementById('tela-sapo').style.justifyContent = 'center';
        document.getElementById('tela-sapo').style.alignItems = 'center';

        inicializarCanvasSapo();

        // Mostrar o Dani com diálogo após 0.8 segundos
        setTimeout(() => {
            mostrarDialogo(
                "../images/mascotes/dani.png", 
                ["🐸 Dani: 'Como essa página está fazendo isso!'", "Será que o Bibo..."],
                "<div style='color:#FFD700; font-size:18px; font-weight:bold;'>✨ Os vaga-lumes formaram a palavra: <strong>SAPO</strong> ✨</div>"
            );
        }, 800);

        // Expulsar em 4 segundos (com reset da área de senha)
        setTimeout(() => {
            document.getElementById('tela-sapo').style.display = 'none';
            
            // Resetar a área da senha
            document.getElementById('admin-senha').value = "";
            document.getElementById('admin-msg').innerHTML = "";
            document.getElementById('admin-area').style.display = 'none';
            document.getElementById('btn-backup').style.display = 'none';

            // Ir para os répteis
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            document.querySelector('.nav-link[data-target="repteis"]').classList.add('active');
            document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active-section'));
            document.getElementById('repteis').classList.add('active-section');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 4000);
    } else {
        msg.innerHTML = "❌ Senha incorreta.";
        msg.style.color = "#c62828";
    }
}

// Função para ir ao 404
function irPara404() {
    document.getElementById('tela-404').style.display = 'block';
}

// Função para verificar a palavra no 404
function verificar404() {
    const input = document.getElementById('input-404').value.trim();

    if (input.toLowerCase() === 'sapo') {
        document.getElementById('tela-404').style.display = 'none';
        
        mostrarDialogo(
            "../images/mascotes/titu.png", 
            ["🐸 Titu: 'Será que o Bibo...'"]
        );

        setTimeout(() => {
            mostrarDialogo(
                "../images/mascotes/dani.png", 
                ["🐸 Dani: 'Nós...'"]
            );
        }, 2000);
        
        // Resetar a história após os diálogos
        setTimeout(() => {
            resetarHistoria();
        }, 4000);
    } else {
        alert("Palavra incorreta!");
    }
}

// Função para resetar a história ao voltar ao início
function resetarHistoria() {
    estadoHistoria = {
        codigoResgatado: false,
        senhaAdminAtiva: false,
        senhaDescoberta: "5219",
        sapoAtivado: false,
    };

    document.getElementById('codigo-promo').value = "";
    document.getElementById('admin-senha').value = "";
    document.getElementById('promo-msg').innerHTML = "";
    document.getElementById('admin-msg').innerHTML = "";
    document.getElementById('btn-backup').style.display = 'none';
    document.getElementById('admin-area').style.display = 'none';

    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    document.querySelector('.nav-link[data-target="mamiferos"]').classList.add('active');
    document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active-section'));
    document.getElementById('mamiferos').classList.add('active-section');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Função para desenhar a palavra SAPO com vaga-lumes no canvas
function inicializarCanvasSapo() {
    const canvas = document.getElementById("canvas-sapo");
    const ctx = canvas.getContext("2d");

    function ajustarTela() {
        canvas.width = canvas.clientWidth * devicePixelRatio;
        canvas.height = canvas.clientHeight * devicePixelRatio;
        ctx.scale(devicePixelRatio, devicePixelRatio);
    }

    ajustarTela();
    window.addEventListener("resize", ajustarTela);

    const letras = {
        S: ["01111", "11000", "11000", "01111", "00011", "00011", "11110"],
        A: ["01110", "11011", "11011", "11111", "11011", "11011", "11011"],
        P: ["11110", "11011", "11011", "11110", "11000", "11000", "11000"],
        O: ["01110", "11011", "11011", "11011", "11011", "11011", "01110"]
    };

    const palavra = "SAPO";
    const tamanhoPonto = 7;
    const espacamento = 5;
    const espacamentoLetras = 35;
    let pontos = [];

    let larguraTotal = palavra.length * (5 * (tamanhoPonto + espacamento)) + (palavra.length - 1) * espacamentoLetras;
    let inicioX = (canvas.clientWidth - larguraTotal) / 2;
    let inicioY = canvas.clientHeight / 2 - 30;

    palavra.split("").forEach((letra, indice) => {
        const matriz = letras[letra];
        const xLetra = inicioX + indice * (5 * (tamanhoPonto + espacamento) + espacamentoLetras);
        matriz.forEach((linha, y) => {
            [...linha].forEach((valor, x) => {
                if (valor === "1") {
                    pontos.push({
                        x: xLetra + x * (tamanhoPonto + espacamento),
                        y: inicioY + y * (tamanhoPonto + espacamento),
                        brilho: Math.random() * Math.PI * 2
                    });
                }
            });
        });
    });

    function animar() {
        ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
        const tempo = Date.now() * 0.004;

        pontos.forEach((ponto) => {
            const brilho = 0.65 + Math.sin(tempo + ponto.brilho) * 0.35;
            ctx.shadowColor = "#FFD700";
            ctx.shadowBlur = 12;
            ctx.beginPath();
            ctx.arc(ponto.x, ponto.y, 3.5, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 215, 0, ${brilho})`;
            ctx.fill();
            ctx.shadowBlur = 0;
            ctx.beginPath();
            ctx.arc(ponto.x, ponto.y, 1.5, 0, Math.PI * 2);
            ctx.fillStyle = "#FFF4A3";
            ctx.fill();
        });

        requestAnimationFrame(animar);
    }

    animar();
}

// Função para exibir um diálogo com personagem e fala digitando gradativamente
function mostrarDialogo(personagemSrc, falas, informacaoExtra = "") {
    const box = document.getElementById('dialogo-box');
    const textoEl = document.getElementById('dialogo-texto');
    const personagemEl = document.getElementById('dialogo-personagem');
    const extraEl = document.getElementById('dialogo-extra');

    personagemEl.src = personagemSrc;
    personagemEl.style.display = 'block';

    if (informacaoExtra) {
        extraEl.innerHTML = informacaoExtra;
        extraEl.style.display = 'block';
    } else {
        extraEl.style.display = 'none';
    }

    box.style.display = 'flex';
    box.style.pointerEvents = 'auto';

    let falaIndex = 0;
    let charIndex = 0;
    let intervalo;

    function digitarFala() {
        const fala = falas[falaIndex];
        charIndex = 0;
        textoEl.textContent = "";

        intervalo = setInterval(() => {
            textoEl.textContent = fala.substring(0, charIndex);
            charIndex++;
            if (charIndex > fala.length) {
                clearInterval(intervalo);
                falaIndex++;
                if (falaIndex < falas.length) {
                    setTimeout(digitarFala, 1000);
                } else {
                    setTimeout(() => {
                        box.style.display = 'none';
                    }, 1500);
                }
            }
        }, 30);
    }

    digitarFala();
}

// ===== INICIALIZAÇÃO =====
document.addEventListener('DOMContentLoaded', () => {
    criarCards('mamiferos', 'container-mamiferos');
    criarCards('aves', 'container-aves');
    criarCards('repteis', 'container-repteis');

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

    // Mostrar a área da senha apenas quando o jogador descobrir a senha do jacaré
    document.querySelector('.nav-link[data-target="sobre"]').addEventListener('click', function() {
        if (estadoHistoria.senhaAdminAtiva || estadoHistoria.codigoResgatado) {
            document.getElementById('admin-area').style.display = 'block';
        } else {
            document.getElementById('admin-area').style.display = 'none';
        }
    });

    // Botão Backup
    const btnBackup = document.getElementById('btn-backup');
    btnBackup.addEventListener('click', function() {
        document.getElementById('tela-final').style.display = 'block';
        mostrarDialogo(
            "../images/mascotes/dani.png", 
            ["🐸🐸🐸 DANI LOUCO COM O SAPO BIBO AO REDOR! 🐸🐸🐸"]
        );
        setTimeout(() => {
            document.getElementById('tela-final').style.display = 'none';
        }, 6300);
    });
});