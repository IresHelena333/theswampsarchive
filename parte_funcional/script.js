// ===== FUNÇÕES DE ÁUDIO (Com proteção) =====
function tocarMusicaCalma() {
    const musicaCalma = document.getElementById('musica-calma');
    const musicaTensa = document.getElementById('musica-tensa');
    
    if (musicaTensa) {
        musicaTensa.pause();
        musicaTensa.currentTime = 0;
    }
    if (musicaCalma) {
        musicaCalma.play().catch(() => {});
    }
}

function tocarMusicaTensa() {
    const musicaCalma = document.getElementById('musica-calma');
    const musicaTensa = document.getElementById('musica-tensa');
    
    if (musicaCalma) {
        musicaCalma.pause();
        musicaCalma.currentTime = 0;
    }
    if (musicaTensa) {
        musicaTensa.play().catch(() => {});
    }
}

// ===== CRIAÇÃO DOS CARDS =====
function gerarNomeImagem(nomeAnimal) {
    return nomeAnimal
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .replace(/\s+/g, '_') + '.jpg';
}

function criarCards(categoria, containerId) {
    const container = document.getElementById(containerId);
    const animais = dadosAnimais[categoria];
    
    // Caminhos corretos (com acentos!)
    const pasta = (categoria === 'mamiferos') ? '../imagens/mamífero' : (categoria === 'aves' ? '../imagens/aves' : '../imagens/répteis_anfíbios');

    animais.forEach((animal) => {
        // Verifica se a imagem tem nome personalizado no dados.js, senão gera automaticamente
        const nomeImagem = animal.imagem || gerarNomeImagem(animal.nome);
        const caminho = pasta + '/' + nomeImagem;
        
        const imgHTML = `<img src="${caminho}" alt="${animal.nome}" onerror="this.parentElement.innerHTML='<div style=\'height:100%; display:flex; align-items:center; justify-content:center; background:#d4d9bd; color:#3d4d36; font-weight:bold;\'>Imagem em breve</div>'">`;

        // Lógica do Jacaré
        let extraOnClick = "";
        if (categoria === 'repteis' && animal.nome.toLowerCase().includes('jacaré')) {
            extraOnClick = ` onclick="clicarJacare('${animal.nome}')"`;
        }

        // Lógica do Sapo Cururu
        let textoHTML = `<p>${animal.texto}</p>`;

        // Ícone da categoria
        let iconeCategoria = '';
        if (categoria === 'mamiferos') {
            iconeCategoria = `<img src="../imagens/decoração/carne_icon.png" class="icone-animal">`;
        } else if (categoria === 'aves') {
            iconeCategoria = `<img src="../imagens/decoração/pena_icon.png" class="icone-animal">`;
        } else {
            iconeCategoria = `<img src="../imagens/decoração/ovo_icon.png" class="icone-animal">`;
        }

        const card = `
            <div class="card-animal-completo" ${extraOnClick}>
                <div class="foto-col">
                    <div class="card-imagem">${imgHTML}</div>
                </div>
                <div class="texto-col">
                    <div class="titulo-com-icone">
                        <div class="icone-folha">
                            ${iconeCategoria}
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

        // Adiciona padrões de decoração aos cards
        const padroes = ['card-padrao-1', 'card-padrao-2', 'card-padrao-3', 'card-padrao-4', 'card-padrao-5'];
        const padraoAleatorio = padroes[Math.floor(Math.random() * padroes.length)];
        
        const temp = document.createElement('div');
        temp.innerHTML = card.trim();
        const cardElement = temp.firstElementChild;

        if (cardElement) {
            cardElement.classList.add(padraoAleatorio);
            container.appendChild(cardElement);
        }
    });
}

// ===== LÓGICA DO JOGO / EASTER EGGS =====
let estadoHistoria = {
    codigoResgatado: false,
    senhaAdminAtiva: false,
    clicouJacare: false,
    senhaDescoberta: "5219"
};

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

function clicarJacare(nome) {
    if (!estadoHistoria.codigoResgatado) return;

    // MOSTRA A SENHA PRIMEIRO
    const telaSenha = document.getElementById('tela-jacare-senha');
    if (telaSenha) {
        telaSenha.style.display = 'flex';
        telaSenha.style.justifyContent = 'center';
        telaSenha.style.alignItems = 'center';
        document.getElementById('senha-descoberta').innerText = estadoHistoria.senhaDescoberta;
    }

    // Desabilita o botão Fechar
    const botaoFechar = document.querySelector('#tela-jacare-senha button');
    if (botaoFechar) {
        botaoFechar.disabled = true;
    }

    // A fala do Nino aparece 500ms depois (com o botão desabilitado)
    setTimeout(() => {
        mostrarDialogo(
            "../imagens/mascotes/nino.png", 
            ["Nino: 'Desde a última vez, estou tentando manter a calma... Não posso... Perder...'"],
            "",
            () => {
                // Habilita o botão Fechar quando a fala termina
                const botaoFechar = document.querySelector('#tela-jacare-senha button');
                if (botaoFechar) {
                    botaoFechar.disabled = false;
                }
            }
        );
    }, 500);
}

function fecharTelaSenha() {
    document.getElementById('tela-jacare-senha').style.display = 'none';
}

function verificarSenha() {
    const input = document.getElementById('admin-senha').value.trim();
    const msg = document.getElementById('admin-msg');

    if (input === estadoHistoria.senhaDescoberta) {
        estadoHistoria.senhaAdminAtiva = true;
        msg.innerHTML = "✅ Senha correta! Os vaga-lumes começam a brilhar...";
        msg.style.color = "#2e7d32";

        // MOSTRA O POP-UP DO SAPO
        const telaSapo = document.getElementById('tela-sapo');
        if (telaSapo) {
            telaSapo.style.display = 'flex';
        }

        // INICIALIZA O CANVAS
        inicializarCanvasSapo();

        // MOSTRA O TEXTO DOS VAGALUMES (PRIMEIRO - 1 segundo)
        setTimeout(() => {
            const vagaLumes = document.getElementById('vaga-lumes-texto');
            if (vagaLumes) {
                vagaLumes.innerHTML = "✨ Os vaga-lumes formaram a palavra: <strong>SAPO</strong> ✨";
                vagaLumes.style.display = 'block';
            }
        }, 1000);

        // MOSTRA A FALA DO DANI (DEPOIS DO TEXTO - 3 segundos)
        // Aqui usamos a MESMA função mostrarDialogo() do Nino, para o design ser idêntico
        setTimeout(() => {
            mostrarDialogo(
                "../imagens/mascotes/Dani.png", 
                ["Dani: 'Como essa página está fazendo isso!'", "Será que o Bibo..."],
                );
        }, 3000);

        // EXPULSÃO EM 12 SEGUNDOS (fecha tudo)
        setTimeout(() => {
            document.getElementById('tela-sapo').style.display = 'none';
            document.getElementById('dani-dialogo').style.display = 'none';
            document.getElementById('vaga-lumes-texto').style.display = 'none';
            document.getElementById('dialogo-box').style.display = 'none';
        }, 12000);
    } else {
        msg.innerHTML = "❌ Senha incorreta.";
        msg.style.color = "#c62828";
    }
}

function irPara404() {
    const tela404 = document.getElementById('tela-404');
    tela404.style.display = 'block';

    // 1. Titu aparece assim que a tela 404 é exibida
    mostrarDialogo(
        "../imagens/mascotes/Titu.png",
        ["Titu: 'Será que o Bibo...'"],
        ""
    );

    // 2. Dani aparece 4 segundos depois
    setTimeout(() => {
        mostrarDialogo(
            "../imagens/mascotes/Dani.png",
            ["Dani: 'Nós...'"],
            ""
        );
    }, 4000);
}

function verificar404() {
    const input = document.getElementById('input-404').value.trim();

    if (input.toLowerCase() === 'sapo') {
        // Esconde input e botão
        document.getElementById('input-404').style.display = 'none';
        document.querySelector('#tela-404 button').style.display = 'none';

        // 1. Titu aparece primeiro
        //    Quando o Titu terminar de falar, o callback chama o Dani
        mostrarDialogo(
            "../imagens/mascotes/Titu.png",
            ["Titu: 'Será que o Bibo...'"],
            "",
            () => {
                // 2. Dani aparece SÓ DEPOIS que o Titu terminar
                mostrarDialogo(
                    "../imagens/mascotes/Dani.png",
                    ["Dani: 'Nós...'"],
                    "",
                    () => {
                        // 3. Só recarrega DEPOIS que o Dani terminar
                        window.location.reload();
                    }
                );
            }
        );
    } else {
        alert("Palavra incorreta!");
    }
}

function resetarHistoria() {
    estadoHistoria = {
        codigoResgatado: false,
        senhaAdminAtiva: false,
        clicouJacare: false,
        senhaDescoberta: "5219"
    };

    document.getElementById('codigo-promo').value = "";
    document.getElementById('admin-senha').value = "";
    document.getElementById('promo-msg').innerHTML = "";
    document.getElementById('admin-msg').innerHTML = "";
    document.getElementById('btn-backup').style.display = 'none';

    // ESCONDE O DANI E O POP-UP
    document.getElementById('dani-dialogo').style.display = 'none';
    document.getElementById('tela-sapo').style.display = 'none';
    document.getElementById('vaga-lumes-texto').style.display = 'none';
    document.getElementById('dialogo-box').style.display = 'none';

    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    document.querySelector('.nav-link[data-target="mamiferos"]').classList.add('active');
    document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active-section'));
    document.getElementById('mamiferos').classList.add('active-section');
}

function inicializarCanvasSapo() {
    const canvas = document.getElementById("canvas-sapo");
    if (!canvas) return;

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

function mostrarDialogo(personagemSrc, falas, informacaoExtra = "", aoTerminar = null) {
    const box = document.getElementById('dialogo-box');
    if (!box) return;

    const textoEl = document.getElementById('dialogo-texto');
    const personagemEl = document.getElementById('dialogo-personagem');
    const extraEl = document.getElementById('dialogo-extra');

    // Seta a imagem e garante que está visível
    personagemEl.src = personagemSrc;
    personagemEl.style.display = 'block';
    personagemEl.style.visibility = 'visible';
    personagemEl.style.opacity = '1';

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
                        
                        if (aoTerminar) {
                            aoTerminar();
                        }
                    }, 1500);
                }
            }
        }, 30);
    }

    digitarFala();
}

// ===== INICIALIZAÇÃO =====
document.addEventListener('DOMContentLoaded', () => {
    // ===== 1. INICIA A MÚSICA CALMA =====
    tocarMusicaCalma();

    // ===== 2. CRIA OS CARDS =====
    criarCards('mamiferos', 'container-mamiferos');
    criarCards('aves', 'container-aves');
    criarCards('repteis', 'container-repteis');

    // ===== 3. NAVEGAÇÃO ENTRE AS ABAS =====
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

    // ===== 4. MOSTRAR A ÁREA DE SENHA (SOBRE NÓS) =====
    const sobreLink = document.querySelector('.nav-link[data-target="sobre"]');
    if (sobreLink) {
        sobreLink.addEventListener('click', function() {
            if (estadoHistoria.senhaAdminAtiva || estadoHistoria.codigoResgatado) {
                document.getElementById('admin-area').style.display = 'block';
            } else {
                document.getElementById('admin-area').style.display = 'none';
            }
        });
    }

    // ===== 5. BOTÃO BACKUP =====
    const btnBackup = document.getElementById('btn-backup');
    if (btnBackup) {
        btnBackup.addEventListener('click', function() {
            tocarMusicaCalma();
            document.getElementById('tela-final').style.display = 'block';
            mostrarDialogo(
                "../imagens/mascotes/dani.png",
                ["🐸🐸🐸 DANI LOUCO COM O SAPO BIBO AO REDOR! 🐸🐸🐸"]
            );
            setTimeout(() => {
                document.getElementById('tela-final').style.display = 'none';
            }, 6300);
        });
    }

    // ===== 6. GARANTE QUE A PÁGINA INICIE NO TOPO E NA ABA DOS MAMÍFEROS =====
    // (Isso é executado sempre que a página é carregada ou recarregada)
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Ativa a aba dos mamíferos
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    document.querySelector('.nav-link[data-target="mamiferos"]').classList.add('active');
    document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active-section'));
    document.getElementById('mamiferos').classList.add('active-section');
});