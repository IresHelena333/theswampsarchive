const dadosAnimais = {
    mamiferos: [
        { 
            nome: "Onça-pintada", 
            nomeCientifico: "Panthera onca palustris",
            imagem: "onca_pintada.jpg",
            texto: "A onça-pintada é um grande felino encontrado em diferentes regiões da América do Sul e é conhecida por sua força e habilidade como predadora. No Pantanal, vive principalmente em matas ciliares, margens de rios e florestas densas. É carnívora e se alimenta de animais como capivaras, jacarés, veados e queixadas.",
            curiosidade: "A onça-pintada é o maior felino das Américas e uma das maiores do mundo. Ela é uma excelente nadadora e pode caçar presas dentro da água, o que a torna uma predadora extremamente versátil no Pantanal."
        },
        { 
            nome: "Ariranha", 
            nomeCientifico: "Pteronura brasiliensis brasiliensis",
            imagem: "ariranha.jpg",
            texto: "A ariranha é um mamífero aquático muito sociável, conhecido por viver em grupos e passar grande parte do tempo na água. Habita rios calmos, corixos, lagos e margens onde constrói suas tocas. Sua alimentação é principalmente baseada em peixes, como traíras e piranhas.",
            curiosidade: "A ariranha é a maior espécie de lontra do mundo e possui uma das mordidas mais fortes entre os mamíferos. Ela é extremamente territorial e vive em grupos familiares que se comunicam por meio de sons complexos."
        },
        { 
            nome: "Cervo-do-pantanal", 
            nomeCientifico: "Blastocerus dichotomus",
            imagem: "cervo_do_pantanal.jpg",
            texto: "O cervo-do-pantanal é um mamífero herbívoro adaptado a ambientes alagados. Vive em áreas permanentemente inundadas, brejos e locais com vegetação alta. Alimenta-se principalmente de plantas aquáticas, gramíneas e brotos.",
            curiosidade: "O cervo-do-pantanal é o maior cervídeo da América do Sul e possui patas longas e adaptadas para caminhar em áreas alagadas. Ele é um excelente nadador e usa a água como refúgio contra predadores."
        },
        { 
            nome: "Capivara", 
            nomeCientifico: "Hydrochoerus hydrochaeris",
            imagem: "capivara.jpg",
            texto: "A capivara é um mamífero roedor que costuma viver em grupos e possui grande adaptação à vida próxima da água. É encontrada nas margens de rios, lagos, banhados e campos úmidos. Sua alimentação é herbívora e inclui grama, capim e plantas aquáticas.",
            curiosidade: "A capivara é o maior roedor do mundo! Ela tem hábitos semiaquáticos e pode ficar submersa por até 5 minutos para escapar de predadores. Além disso, suas fezes são ricas em nutrientes e servem de alimento para peixes."
        },
        { 
            nome: "Anta-brasileira", 
            nomeCientifico: "Tapirus terrestris terrestris",
            imagem: "anta_brasileira.jpg",
            texto: "A anta-brasileira é um mamífero de grande porte que desempenha um importante papel na dispersão de sementes. Vive em florestas tropicais, matas de galeria e áreas próximas à água. Alimenta-se de folhas, frutos, brotos e cascas de árvores.",
            curiosidade: "A anta-brasileira é considerada a 'jardineira da floresta', pois ao comer frutos e se deslocar por grandes áreas, ela dispersa sementes e ajuda na regeneração das florestas. Além disso, é um ótimo animal para nadar e mergulhar."
        },
        { 
            nome: "Tamanduá-bandeira", 
            nomeCientifico: "Myrmecophaga tridactyla",
            imagem: "tamandua_bandeira.jpg",
            texto: "O tamanduá-bandeira é um mamífero conhecido pelo focinho comprido e pela língua especializada em capturar insetos. Vive em campos abertos, savanas, cerrados e áreas mais secas. Sua alimentação é baseada principalmente em formigas e cupins.",
            curiosidade: "O tamanduá-bandeira pode comer mais de 30 mil insetos em um único dia! Ele usa suas garras fortes para abrir cupinzeiros e formigueiros, e sua língua comprida e pegajosa captura as presas com muita eficiência."
        },
        { 
            nome: "Lobo-guará", 
            nomeCientifico: "Chrysocyon brachyurus",
            imagem: "lobo_guara.jpg",
            texto: "O lobo-guará é um mamífero de aparência característica, com pernas longas e pelagem avermelhada. Habita campos limpos, cerrados e capinzais secos. É onívoro e se alimenta de pequenos roedores, aves, insetos e frutos, especialmente a lobeira.",
            curiosidade: "O lobo-guará é o maior canídeo da América do Sul e possui pernas longas que o ajudam a se locomover em campos de grama alta. Apesar do nome, ele não é um lobo de verdade, e sim um parente distante dos cães e raposas."
        },
        { 
            nome: "Jaguatirica", 
            nomeCientifico: "Leopardus pardalis mitis",
            imagem: "jaguatirica.jpg",
            texto: "A jaguatirica é um felino de médio porte que possui uma pelagem cheia de manchas, ajudando na camuflagem. Vive em matas fechadas, capoeiras e florestas de galeria. É carnívora e caça pequenos mamíferos, aves, lagartos e outros animais.",
            curiosidade: "A jaguatirica é um felino noturno e solitário, conhecido por sua excelente visão noturna. Suas manchas são únicas, como uma impressão digital, e ajudam a se camuflar perfeitamente em ambientes de floresta."
        },
        { 
            nome: "Veado-campeiro", 
            nomeCientifico: "Ozotoceros bezoarticus leucogaster",
            imagem: "veado_campeiro.jpg",
            texto: "O veado-campeiro é um cervídeo que prefere ambientes abertos e possui hábitos principalmente terrestres. Vive em campos abertos e savanas com bastante vegetação rasteira. É herbívoro e se alimenta de folhas tenras, arbustos e gramíneas.",
            curiosidade: "O veado-campeiro é um dos cervídeos mais ameaçados da América do Sul. Ele é conhecido por sua capacidade de correr em alta velocidade e por ser um excelente saltador."
        },
        { 
            nome: "Queixada", 
            nomeCientifico: "Tayassu pecari",
            imagem: "queixada.jpg",
            texto: "A queixada é um mamífero social que costuma viver em grandes bandos e percorrer grandes áreas em busca de alimento. Habita principalmente florestas densas e matas ciliares. É onívora e come frutos, sementes, raízes, brotos e pequenos invertebrados.",
            curiosidade: "A queixada é um animal extremamente social que vive em bandos que podem chegar a mais de 100 indivíduos. Ela possui uma glândula no dorso que exala um odor forte, usado para marcar território e se comunicar com outros membros do grupo."
        },
        { 
            nome: "Mão-pelada", 
            nomeCientifico: "Procyon cancrivorus",
            imagem: "mao_pelada.jpg",
            texto: "O mão-pelada é um mamífero de hábitos principalmente noturnos e bastante adaptado a ambientes próximos da água. Vive em margens de rios, áreas úmidas e manguezais. É onívoro e pode se alimentar de caranguejos, sapos, peixes, insetos e frutos.",
            curiosidade: "O mão-pelada é um excelente escalador e nadador. Seu nome vem do formato de suas patas, que lembram mãos humanas, e são usadas para capturar presas e se alimentar de frutas."
        },
        { 
            nome: "Quati", 
            nomeCientifico: "Nasua nasua",
            imagem: "quati.jpg",
            texto: "O quati é um mamífero conhecido pelo focinho comprido e pela cauda longa, que pode ser mantida erguida enquanto ele se desloca. Vive em florestas de galeria, matas secas e também utiliza as copas das árvores. É onívoro e come frutos, insetos, aranhas, ovos e pequenos vertebrados.",
            curiosidade: "O quati é um animal extremamente curioso e ativo. Ele vive em bandos liderados por fêmeas e usa sua cauda longa para se equilibrar enquanto escala árvores. Seu focinho móvel é usado para farejar alimentos no solo e entre as folhas."
        },
        { 
            nome: "Bugio-preto", 
            nomeCientifico: "Alouatta caraya",
            imagem: "bugio_preto.jpg",
            texto: "O bugio-preto é um primata que vive principalmente nas partes mais altas das árvores. Habita copas de florestas, matas ciliares e cerradões. Sua alimentação é principalmente herbívora, composta por folhas, flores e frutos.",
            curiosidade: "O bugio-preto é conhecido por seu rugido alto e poderoso, que pode ser ouvido a quilômetros de distância. Ele usa esse chamado para marcar território e se comunicar com outros membros do grupo."
        },
        { 
            nome: "Macaco-prego", 
            nomeCientifico: "Sapajus cay",
            imagem: "macaco_prego.jpg",
            texto: "O macaco-prego é um primata bastante inteligente e conhecido pela capacidade de utilizar objetos como ferramentas. Vive em florestas de galeria, matas secas e áreas de transição. É onívoro e se alimenta de frutos, sementes, ovos, insetos e pequenos lagartos.",
            curiosidade: "O macaco-prego é um dos animais mais inteligentes das Américas. Ele usa pedras para quebrar castanhas e cocos, e galhos para pescar cupins. Essa capacidade de usar ferramentas é transmitida de geração em geração."
        },
        { 
            nome: "Tatu-canastra", 
            nomeCientifico: "Priodontes maximus",
            imagem: "tatu_canastra.jpg",
            texto: "O tatu-canastra é um mamífero de hábitos principalmente noturnos e possui grandes garras adaptadas para escavar. Vive em campos abertos, cerrados e locais com solo adequado para a construção de tocas. Alimenta-se principalmente de grandes quantidades de formigas e cupins.",
            curiosidade: "O tatu-canastra é o maior tatu do mundo, podendo chegar a 50 kg! Suas garras dianteiras são tão grandes que podem chegar a 20 cm, sendo usadas para escavar tocas profundas e quebrar cupinzeiros."
        },
        { 
            nome: "Lontra-neotropical", 
            nomeCientifico: "Lontra longicaudis",
            imagem: "lontra_neotropical.jpg",
            texto: "A lontra-neotropical é um mamífero semiaquático que passa bastante tempo procurando alimento na água. Vive em rios, riachos e lagos com vegetação densa nas margens. É carnívora e piscívora, alimentando-se de peixes, crustáceos e pequenos anfíbios.",
            curiosidade: "A lontra-neotropical é um animal solitário e territorial, diferente de sua parente, a ariranha. Ela é conhecida por sua habilidade de nadar e mergulhar, e costuma esconder restos de comida em pedras próximas à água."
        },
        { 
            nome: "Irara", 
            nomeCientifico: "Eira barbara",
            imagem: "irara.jpg",
            texto: "A irara é um mamífero ágil que consegue se movimentar tanto no solo quanto nas árvores. Vive em florestas densas e áreas de mata fechada. É onívora e sua alimentação inclui frutos, pequenos roedores, aves, insetos e mel.",
            curiosidade: "A irara é um animal extremamente versátil e um dos poucos mamíferos que consegue descer de árvores de cabeça para baixo. Ela é conhecida por sua agilidade e por ser uma predadora oportunista."
        },
        { 
            nome: "Gato-mourisco", 
            nomeCientifico: "Herpailurus yagouaroundi",
            imagem: "gato_mourisco.jpg",
            texto: "O gato-mourisco é um felino de corpo alongado e aparência diferente de outros gatos selvagens. Vive em bordas de matas, cerrados e áreas arbustivas secas. É carnívoro e caça principalmente pequenos roedores, aves e lagartos.",
            curiosidade: "O gato-mourisco é um felino único: ele não sobe em árvores como a maioria dos gatos, e sim prefere caçar no solo e em arbustos. Seu corpo alongado e pernas curtas o tornam um especialista em perseguir presas em ambientes fechados."
        },
        { 
            nome: "Veado-catingueiro", 
            nomeCientifico: "Mazama gouazoubira",
            imagem: "veado_catingueiro.jpg",
            texto: "O veado-catingueiro é um pequeno cervídeo que costuma ser discreto e evita locais muito abertos. Habita florestas secundárias, cerrados e capoeiras secas. Alimenta-se de folhas, ramos e frutos caídos, sendo considerado herbívoro e frugívoro.",
            curiosidade: "O veado-catingueiro é um animal solitário e muito territorial. Ele é conhecido por ser um excelente saltador e por usar uma glândula localizada nos olhos para marcar seu território."
        },
        { 
            nome: "Tatu-galinha", 
            nomeCientifico: "Dasypus novemcinctus",
            imagem: "tatu_galinha.jpg",
            texto: "O tatu-galinha é um mamífero protegido por uma carapaça e conhecido por sua capacidade de cavar. Vive em campos, savanas e bordas de matas. Sua alimentação inclui principalmente insetos, larvas e pequenos invertebrados, mas também pode consumir frutos.",
            curiosidade: "O tatu-galinha pode ter até 9 cintas móveis em sua carapaça, o que lhe dá flexibilidade para se mover. Ele é um excelente escavador e pode cavar buracos profundos em poucos minutos para escapar de predadores."
        }
    ],
    aves: [
        { 
            nome: "Tuiuiú", 
            nomeCientifico: "Jabiru mycteria",
            imagem: "tuiuiu.jpg",
            texto: "O tuiuiú é uma das aves mais conhecidas do Pantanal e está muito associado às paisagens alagadas da região. Vive em lagoas temporárias, campos alagados e costuma construir seus ninhos em árvores altas. Alimenta-se de peixes, moluscos, anfíbios, répteis e insetos. <br><br> <strong style='font-size: 18px; color: #1f2e1b; '>#Tuiuiúsãoosmelhores</strong>",
            curiosidade: "O tuiuiú é a maior ave voadora das Américas, com uma envergadura que pode chegar a 2,6 metros. Ele é considerado um símbolo do Pantanal e constrói ninhos enormes, que podem ser reutilizados por várias gerações."
        },
        { 
            nome: "Arara-azul-grande", 
            nomeCientifico: "Anodorhynchus hyacinthinus",
            imagem: "arara_azul_grande.jpg",
            texto: "A arara-azul-grande é uma ave de grande porte, conhecida por sua plumagem azul intensa e seu forte bico. Vive principalmente em matas de galeria e regiões com palmeiras. Sua alimentação é especializada em frutos e castanhas de palmeiras, como acuri e bocaiúva.",
            curiosidade: "A arara-azul-grande é a maior arara do mundo, podendo medir até 1 metro de comprimento. Seu bico é tão forte que consegue quebrar castanhas extremamente duras, e ela é um dos principais dispersores de sementes de palmeiras no Pantanal."
        },
        { 
            nome: "Tucano-toco", 
            nomeCientifico: "Ramphastos toco albogularis",
            imagem: "tucano_toco.jpg",
            texto: "O tucano-toco é uma ave facilmente reconhecida pelo seu grande bico colorido. Vive em bordas de matas, cerrados e copas de árvores isoladas. É onívoro e alimenta-se de frutos, insetos, ovos e até filhotes de outras aves.",
            curiosidade: "O bico do tucano-toco é maior que a sua cabeça e pode chegar a 20 cm, mas é surpreendentemente leve, pois é feito de queratina. Ele usa o bico para se equilibrar, se comunicar e regular a temperatura do corpo."
        },
        { 
            nome: "Cardeal-do-pantanal", 
            nomeCientifico: "Paroaria capitata",
            imagem: "cardeal_do_pantanal.jpg",
            texto: "O cardeal-do-pantanal é uma pequena ave de cores marcantes que costuma ser encontrada próxima à água. Vive em vegetação ribeirinha, arbustos e capoeiras. Alimenta-se principalmente de sementes, grãos e pequenos insetos.",
            curiosidade: "O cardeal-do-pantanal é conhecido por seu canto melodioso, que pode ser ouvido principalmente durante o amanhecer. Apesar de ser chamado de 'cardeal', ele não é parente próximo dos cardeais norte-americanos."
        },
        { 
            nome: "Colhereiro", 
            nomeCientifico: "Platalea ajaja",
            imagem: "colhereiro.jpg",
            texto: "O colhereiro é uma ave aquática conhecida pelo bico longo e achatado, semelhante a uma colher. Vive em lagoas rasas, banhados e áreas de lama. Alimenta-se de pequenos peixes, crustáceos e larvas aquáticas que encontra na água.",
            curiosidade: "O colhereiro usa seu bico em formato de colher para tatear a água e capturar presas. Sua coloração rosa vem dos carotenoides presentes em sua dieta, compostos por crustáceos e pequenos animais aquáticos."
        },
        { 
            nome: "Gavião-belo", 
            nomeCientifico: "Busarellus nigricollis",
            imagem: "gaviao_belo.jpg",
            texto: "O gavião-belo é uma ave de rapina especializada na captura de peixes. Costuma ficar pousado em árvores próximas a rios, lagos e pântanos. Alimenta-se principalmente de peixes que captura na superfície da água.",
            curiosidade: "O gavião-belo é um dos poucos gaviões que caça peixes ativamente. Ele usa suas garras fortes e curvas para agarrar as presas na superfície da água, e costuma ter seu território em áreas de alta densidade de peixes."
        },
        { 
            nome: "Carcará", 
            nomeCientifico: "Caracara plancus",
            imagem: "carcara.jpg",
            texto: "O carcará é uma ave de rapina muito adaptável, encontrada em diferentes tipos de ambientes. Vive em campos abertos, cerrados e pastagens secas. É onívoro e também necrófago, podendo comer carniça, cobras, lagartos, insetos e pequenos roedores.",
            curiosidade: "O carcará é um dos poucos falconídeos que caminha pelo chão em busca de alimento. Ele é extremamente inteligente e adaptável, podendo até mesmo quebrar ovos de outras aves jogando pedras."
        },
        { 
            nome: "Garça-branca-grande", 
            nomeCientifico: "Ardea alba",
            imagem: "garca_branca_grande.jpg",
            texto: "A garça-branca-grande é uma ave aquática de pernas e pescoço longos, geralmente encontrada caminhando em águas rasas. Vive nas margens de rios, lagos, lagoas e praias de rios. Alimenta-se de peixes, sapos, lagartos e insetos aquáticos.",
            curiosidade: "A garça-branca-grande é uma caçadora paciente que pode ficar imóvel por longos períodos esperando uma presa se aproximar. Ela usa suas pernas longas para caminhar em águas rasas e seu bico afiado para capturar presas rapidamente."
        },
        { 
            nome: "Mutum-de-penacho", 
            nomeCientifico: "Crax fasciolata",
            imagem: "mutum_de_penacho.jpg",
            texto: "O mutum-de-penacho é uma ave de grande porte que passa boa parte do tempo caminhando pelo chão das florestas. Vive em matas ciliares e florestas de galeria. Alimenta-se principalmente de frutos caídos, sementes, folhas e brotos.",
            curiosidade: "O mutum-de-penacho possui um penacho de penas na cabeça que pode ser eriçado durante a época de reprodução. Apesar de ser uma ave de grande porte, ele é excelente em se camuflar no chão da floresta."
        },
        { 
            nome: "Anhuma", 
            nomeCientifico: "Anhuma cornuta",
            imagem: "anhuma.jpg",
            texto: "A anhuma é uma ave de aparência característica, associada a ambientes alagados e com vegetação aquática. Vive em pântanos, margens de rios e lagos com plantas flutuantes. É herbívora e alimenta-se de plantas aquáticas, folhas e brotos.",
            curiosidade: "A anhuma possui um esporão ósseo em cada asa, que usa para se defender de predadores. Apesar de ser uma ave aquática, ela não tem membranas nos pés e caminha sobre as plantas flutuantes para se alimentar."
        },
        { 
            nome: "Ema", 
            nomeCientifico: "Rhea americana araneipes",
            imagem: "ema.jpg",
            texto: "A ema é uma grande ave que não consegue voar, mas possui pernas fortes adaptadas para correr. Vive em grandes campos abertos e savanas secas. É onívora e se alimenta de folhas, sementes, frutos, insetos e pequenos répteis.",
            curiosidade: "A ema é a maior ave da América do Sul e pode correr a até 60 km/h. Diferente da maioria das aves, é o macho que choca os ovos e cuida dos filhotes, sendo um pai extremamente dedicado."
        },
        { 
            nome: "Choró-do-pantanal", 
            nomeCientifico: "Cercomacra melanaria",
            imagem: "choro_do_pantanal.jpg",
            texto: "O choró-do-pantanal é uma pequena ave que vive escondida entre a vegetação densa. É encontrado principalmente em brejos com arbustos e matas de galeria alagadas. Alimenta-se de pequenos insetos e larvas que captura entre as folhas.",
            curiosidade: "O choró-do-pantanal é uma ave extremamente territorial e seu canto é um dos sons mais característicos dos brejos do Pantanal. Ele costuma viver em casais e se esconde entre a vegetação rasteira."
        },
        { 
            nome: "Soldadinho", 
            nomeCientifico: "Antilophia galeata",
            imagem: "soldadinho.jpg",
            texto: "O soldadinho é uma ave conhecida principalmente pela aparência colorida dos machos e pelas exibições realizadas durante a reprodução. Vive em matas ciliares úmidas e perto de nascentes. Alimenta-se principalmente de pequenos frutos silvestres.",
            curiosidade: "O soldadinho é uma das poucas aves em que o macho realiza voos acrobáticos para atrair a fêmea. Ele é extremamente territorial e costuma ser encontrado em áreas de floresta bem preservadas."
        },
        { 
            nome: "Siriema", 
            nomeCientifico: "Cariama cristata",
            imagem: "siriema.jpg",
            texto: "A siriema é uma ave de pernas longas que passa grande parte do tempo caminhando pelo chão em busca de alimento. Vive em campos secos, pastagens e cerrados abertos. É onívora e alimenta-se de serpentes, lagartos, roedores, insetos e sementes.",
            curiosidade: "A siriema é conhecida por sua capacidade de caçar cobras, incluindo jararacas. Ela usa suas pernas longas para golpear a presa com força antes de engoli-la."
        },
        { 
            nome: "Jaçanã", 
            nomeCientifico: "Jacana jacana",
            imagem: "jacana.jpg",
            texto: "A jaçanã é uma ave aquática que possui dedos e unhas longos, permitindo que caminhe sobre plantas flutuantes. Vive em lagoas e corixos cobertos por aguapés e outras plantas aquáticas. É onívora e come insetos, moluscos e sementes.",
            curiosidade: "A jaçanã é uma ave em que a fêmea é maior e mais colorida que o macho. Ela é conhecida por sua capacidade de caminhar sobre as folhas de aguapé, sendo chamada de 'pássaro que caminha sobre a água'."
        },
        { 
            nome: "Curicaca", 
            nomeCientifico: "Theristicus caudatus",
            imagem: "curicaca.jpg",
            texto: "A curicaca é uma ave de pernas longas que costuma procurar alimento caminhando pelo solo. Vive em campos secos, pastagens e praias de rios depois da vazante. Alimenta-se de gafanhotos, aranhas, centopeias, sapos e pequenas cobras.",
            curiosidade: "A curicaca tem um bico curvo e sensível que usa para sondar o solo em busca de presas. Seu nome vem do som alto e característico que ela emite, que pode ser ouvido a longas distâncias."
        },
        { 
            nome: "Carão", 
            nomeCientifico: "Aramus guarauna",
            imagem: "carao.jpg",
            texto: "O carão é uma ave associada a ambientes alagados e possui um bico adaptado para procurar alimento. Vive em banhados, brejos, margens de lagoas e áreas úmidas. Alimenta-se principalmente de caramujos aquáticos, conhecidos como aruás.",
            curiosidade: "O carão é um especialista em comer caramujos aquáticos. Ele usa seu bico curvo para extrair o molusco da concha, e é um dos principais predadores de aruás no Pantanal."
        },
        { 
            nome: "Gavião-caramujeiro", 
            nomeCientifico: "Rostrhamus sociabilis",
            imagem: "gaviao_caramujeiro.jpg",
            texto: "O gavião-caramujeiro é uma ave de rapina especializada em capturar caramujos aquáticos. Vive em áreas alagadas, lagoas com vegetação e canais. Sua alimentação é composta quase exclusivamente por caramujos aruás.",
            curiosidade: "O gavião-caramujeiro é uma ave de rapina com hábitos alimentares altamente especializados. Ele usa seu bico fino e curvo para extrair o caramujo da concha sem quebrá-la."
        },
        { 
            nome: "Cabeça-seca", 
            nomeCientifico: "Mycteria americana",
            imagem: "cabeca_seca.jpg",
            texto: "A cabeça-seca é uma ave pernalta que costuma formar grandes grupos em áreas de água rasa. Vive em lagoas temporárias e regiões alagadas, principalmente durante períodos de seca. Alimenta-se de peixes, anfíbios e crustáceos, procurando suas presas com o bico dentro da água e do lodo.",
            curiosidade: "A cabeça-seca é conhecida por sua pele escura e sem penas na cabeça, que lhe rendeu o nome. Ela é uma ave que busca alimento por tateamento, movendo o bico na água e no lodo para capturar peixes e crustáceos."
        },
        { 
            nome: "Talha-mar", 
            nomeCientifico: "Rynchops niger",
            imagem: "talha_mar.jpg",
            texto: "O talha-mar é uma ave aquática facilmente reconhecida pelo formato incomum de seu bico. Vive principalmente em grandes rios e praias de areia e costuma voar muito próximo da superfície da água. Alimenta-se de pequenos peixes, capturados enquanto corta a água com a parte inferior do bico.",
            curiosidade: "O talha-mar é a única ave do mundo com o bico inferior mais longo que o superior. Ele voa rente à água e mergulha o bico inferior para capturar peixes, uma técnica única entre as aves."
        }
    ],
    repteis: [
        { 
            nome: "Jacaré-do-pantanal", 
            nomeCientifico: "Caiman yacare",
            imagem: "jacare_do_pantanal.jpg",
            texto: "O jacaré-do-pantanal é um réptil muito comum nas áreas alagadas do Pantanal e passa grande parte da vida próximo à água. Vive em rios, corixos e lagoas permanentes ou temporárias. É carnívoro e piscívoro, alimentando-se de peixes, moluscos, aves e pequenos mamíferos.",
            curiosidade: "O jacaré-do-pantanal é um dos répteis mais abundantes do Pantanal. Ele é conhecido por sua técnica de caça, onde fica imóvel na água esperando suas presas passarem. Seus dentes são projetados para fora da boca quando ela está fechada, sendo uma das suas características mais marcantes."
        },
        { 
            nome: "Sucuri-amarela", 
            nomeCientifico: "Eunectes notaeus",
            imagem: "sucuri_amarela.jpg",
            texto: "A sucuri-amarela é uma grande serpente semiaquática que passa bastante tempo dentro ou próxima da água. Habita brejos, pântanos, capinzais inundados e áreas de águas rasas. É carnívora e captura aves aquáticas, peixes, jacarés e pequenos mamíferos.",
            curiosidade: "A sucuri-amarela é uma das maiores serpentes do mundo. Ela não possui veneno, e sim mata suas presas por constrição, apertando-as até a morte. Sua capacidade de ficar submersa por longos períodos a torna uma caçadora exímia em ambientes aquáticos."
        },
        { 
            nome: "Jiboia-constritora", 
            nomeCientifico: "Boa constrictor constrictor",
            imagem: "jiboia_constritora.jpg",
            texto: "A jiboia-constritora é uma serpente conhecida por capturar suas presas por constrição. Pode viver em árvores de matas ciliares, cerrados e áreas mais secas. Alimenta-se de aves, lagartos e pequenos roedores.",
            curiosidade: "A jiboia-constritora é uma predadora que mata suas presas apertando-as até a morte. Ela tem uma capacidade incrível de engolir presas muito maiores que sua cabeça, graças às suas mandíbulas flexíveis."
        },
        { 
            nome: "Cágado-de-barbicha", 
            nomeCientifico: "Phrynops geoffroanus",
            imagem: "cagado_de_barbicha.jpg",
            texto: "O cágado-de-barbicha é uma tartaruga de água doce que passa boa parte do tempo dentro da água. Vive em rios, riachos e fundos de lagoas tranquilas. É carnívoro e se alimenta de pequenos peixes, insetos aquáticos e girinos.",
            curiosidade: "O cágado-de-barbicha é um animal solitário que pode ficar submerso por longos períodos. Ele usa sua carapaça para se proteger, mas é comum vê-lo tomando sol nas margens de rios e lagos."
        },
        { 
            nome: "Jabuti-piranga", 
            nomeCientifico: "Chelonoidis carbonarius",
            imagem: "jabuti_piranga.jpg",
            texto: "O jabuti-piranga é um réptil terrestre de movimentos lentos e protegido por uma carapaça resistente. Vive em matas secas, capoeiras e cerradões. É onívoro e come frutos caídos, folhas, flores, cogumelos e, ocasionalmente, carniça.",
            curiosidade: "O jabuti-piranga é conhecido por sua longevidade, podendo viver mais de 50 anos. Apesar de sua lentidão, ele é um excelente dispersor de sementes, pois come frutos e os espalha pelo ambiente."
        },
        { 
            nome: "Teiú-da-frente-branca", 
            nomeCientifico: "Salvator merianae",
            imagem: "teiu_da_frente_branca.jpg",
            texto: "O teiú-da-frente-branca é um lagarto grande e ativo, conhecido por sua capacidade de explorar diferentes ambientes em busca de alimento. Vive em campos abertos, cerrados e bordas de matas. É onívoro e pode comer ovos, insetos, pequenos roedores, aves, frutas e carniça.",
            curiosidade: "O teiú-da-frente-branca é o maior lagarto do Brasil e um dos maiores do mundo. Ele é um excelente cavador, e suas tocas podem ser usadas por outros animais, como serpentes e aves."
        },
        { 
            nome: "Cobra-coral-pantaneira", 
            nomeCientifico: "Micrurus silviae",
            imagem: "cobra_coral_pantaneira.jpg",
            texto: "A cobra-coral-pantaneira é uma serpente que costuma permanecer escondida entre folhas, troncos e no solo. Vive principalmente em áreas de floresta seca, utilizando o subsolo e a serrapilheira como abrigo. É carnívora e alimenta-se principalmente de pequenas serpentes e lagartos que vivem no solo.",
            curiosidade: "A cobra-coral-pantaneira é uma serpente peçonhenta que possui um veneno neurotóxico extremamente potente. Ela é uma especialista em caçar outras serpentes, sendo uma das únicas cobras que se alimentam de outras cobras."
        },
        { 
            nome: "Jararaca-boca-de-sapo", 
            nomeCientifico: "Bothrops mattogrossensis",
            imagem: "jararaca_boca_de_sapo.jpg",
            texto: "A jararaca-boca-de-sapo é uma serpente peçonhenta que utiliza a camuflagem para permanecer escondida no ambiente. Vive em áreas de transição, capoeiras e matas secas próximas de locais úmidos. É carnívora e alimenta-se de pequenos roedores, lagartos e anfíbios.",
            curiosidade: "A jararaca-boca-de-sapo possui um veneno hemorrágico extremamente perigoso. Ela é uma caçadora de emboscada e usa sua camuflagem para permanecer invisível até sua presa se aproximar o suficiente."
        },
        { 
            nome: "Perereca-verde-pantaneira", 
            nomeCientifico: "Boana punctata",
            imagem: "perereca_verde_pantaneira.jpg",
            texto: "A perereca-verde-pantaneira é um anfíbio arborícola que costuma ficar sobre plantas próximas à água. Vive em vegetação flutuante, arbustos de lagoas e brejos. É insetívora e alimenta-se de moscas, mosquitos e pequenos besouros.",
            curiosidade: "A perereca-verde-pantaneira é conhecida por sua capacidade de mudar de cor, o que ajuda na camuflagem. Ela possui discos adesivos nas pontas dos dedos, permitindo que escale superfícies lisas com facilidade."
        },
        { 
            nome: "Sapo-cururu", 
            nomeCientifico: "Rhinella diptycha",
            imagem: "sapo_cururu.jpg",
            texto: "O sapo-cururu é um anfíbio terrestre bastante adaptável e pode ser encontrado tanto em áreas naturais quanto próximas de habitações. Vive em locais úmidos, margens de rios e ambientes terrestres. Alimenta-se principalmente de insetos, mas também pode capturar aranhas, escorpiões e lesmas. <a href='#' id='link-sapo' style='cursor:pointer; color:#0056b3; text-decoration:underline; font-weight:bold;' onclick='event.preventDefault(); irPara404();'>SERVEM DE ALIMENTO PARA MUITOS ANIMAIS</a>.",
            curiosidade: "O sapo-cururu é um dos anfíbios mais comuns do Brasil. Ele possui glândulas de veneno na cabeça e nas costas que secretam uma substância tóxica quando ameaçado. Apesar disso, ele é inofensivo para os humanos, a menos que o veneno entre em contato com as mucosas."
        },
        { 
            nome: "Mussurana / Cobra-preta", 
            nomeCientifico: "Clelia clelia",
            imagem: "mussurana.jpg",
            texto: "A mussurana é uma serpente conhecida por sua capacidade de caçar outras serpentes. Vive principalmente no solo de matas ciliares e em áreas arbustivas úmidas. É carnívora e alimenta-se de outras serpentes, inclusive algumas espécies venenosas.",
            curiosidade: "A mussurana é uma das poucas serpentes que se alimentam de outras serpentes, incluindo jararacas e cascavéis. Ela possui resistência natural ao veneno das presas e é considerada uma aliada no controle de serpentes peçonhentas."
        },
        { 
            nome: "Calango-verde", 
            nomeCientifico: "Ameiva ameiva",
            imagem: "calango_verde.jpg",
            texto: "O calango-verde é um lagarto ativo que costuma passar bastante tempo procurando alimento em locais ensolarados. Vive em áreas abertas, solos arenosos e bordas de estradas. É insetívoro e alimenta-se de besouros, grilos, aranhas e larvas.",
            curiosidade: "O calango-verde é um lagarto muito comum em áreas urbanas e rurais. Ele é extremamente rápido e usa sua velocidade para escapar de predadores e capturar presas."
        },
        { 
            nome: "Tartaruga-da-amazônia", 
            nomeCientifico: "Podocnemis expansa",
            imagem: "tartaruga_da_amazonia.jpg",
            texto: "A tartaruga-da-amazônia é uma grande tartaruga de água doce que passa grande parte da vida nos rios. Habita grandes rios calmos e utiliza praias arenosas para colocar seus ovos. É principalmente herbívora, mas também pode consumir peixes mortos, alimentando-se de frutos, sementes e folhas.",
            curiosidade: "A tartaruga-da-amazônia é a maior tartaruga de água doce da América do Sul. Ela pode viver mais de 70 anos e viaja longas distâncias para chegar às praias onde nasceu, para desovar."
        },
        { 
            nome: "Cobra-d'água", 
            nomeCientifico: "Helicops leopoldina",
            imagem: "cobra_d'agua.jpg",
            texto: "A cobra-d'água é uma serpente adaptada à vida em ambientes de água doce e possui grande habilidade para nadar. Vive em rios, corixos e outros ambientes aquáticos. Alimenta-se principalmente de pequenos peixes, girinos e rãs.",
            curiosidade: "A cobra-d'água é uma excelente nadadora e caçadora aquática. Ela pode ficar submersa por longos períodos e usa sua visão e olfato para localizar presas na água."
        },
        { 
            nome: "Cobra-cipó", 
            nomeCientifico: "Chironius flavolineatus",
            imagem: "cobra_cipo.jpg",
            texto: "A cobra-cipó é uma serpente de corpo fino e alongado, adaptada a se movimentar entre galhos e arbustos. Vive em matas ciliares e cerrados, principalmente sobre a vegetação. É carnívora e alimenta-se principalmente de rãs, pererecas e pequenos lagartos.",
            curiosidade: "A cobra-cipó é uma das serpentes mais rápidas e ágeis do Brasil. Ela é conhecida por sua capacidade de se camuflar entre os galhos, imitando uma planta."
        },
        { 
            nome: "Lagarto-de-parede / Taruíra", 
            nomeCientifico: "Hemidactylus mabouia",
            imagem: "taruira.jpg",
            texto: "O lagarto-de-parede é um pequeno réptil muito adaptado à presença humana e costuma ser visto em paredes e construções. Vive em troncos, rochas e construções. É insetívoro e alimenta-se de mariposas, aranhas, moscas e baratas.",
            curiosidade: "O lagarto-de-parede é um excelente aliado no controle de pragas. Ele possui discos adesivos nas patas que permitem subir em superfícies lisas, como paredes e vidros, e é noturno, saindo para caçar quando o sol se põe."
        },
        { 
            nome: "Falsa-coral", 
            nomeCientifico: "Oxyrhopus guibei",
            imagem: "falsa_coral.jpg",
            texto: "A falsa-coral é uma serpente que possui padrões de cores que podem lembrar os de corais verdadeiras. Vive no chão de florestas secas, cerrados e pastagens. É carnívora e alimenta-se principalmente de pequenos roedores e lagartos.",
            curiosidade: "A falsa-coral usa o mimetismo para se proteger de predadores. Ela imita as cores da cobra-coral verdadeira, que é peçonhenta, para assustar possíveis atacantes, mas na verdade é inofensiva para os humanos."
        },
        { 
            nome: "Rã-pimenta", 
            nomeCientifico: "Leptodactylus labyrinthicus",
            imagem: "ra_pimenta.jpg",
            texto: "A rã-pimenta é um anfíbio de grande porte e possui hábitos principalmente terrestres. Vive nas margens de lagoas, brejos e tocas úmidas no solo. É carnívora e pode comer insetos, outras rãs, pequenos roedores e até filhotes de cobras.",
            curiosidade: "A rã-pimenta é uma das maiores rãs do Brasil e tem uma dieta surpreendentemente variada. Ela é conhecida por seu hábito de cavar tocas no solo, onde se esconde durante o dia e protege seus ovos."
        },
        { 
            nome: "Perereca-assobiadora", 
            nomeCientifico: "Leptodactylus fuscus",
            imagem: "perereca_assobiadora.jpg",
            texto: "A perereca-assobiadora é um pequeno anfíbio encontrado principalmente em áreas abertas que ficam alagadas durante determinados períodos do ano. Vive em campos gramados com alagamento temporário. É insetívora e alimenta-se de pequenos insetos voadores e cupins.",
            curiosidade: "A perereca-assobiadora recebe esse nome por causa do som que emite, que lembra um assobio. Ela é uma das primeiras espécies a se reproduzir após as primeiras chuvas, aproveitando as poças temporárias."
        },
        { 
            nome: "Jacaretinga", 
            nomeCientifico: "Caiman crocodilus",
            imagem: "jacaretinga.jpg",
            texto: "O jacaretinga é um pequeno crocodiliano que prefere ambientes de água doce calmos e rasos. Vive em canais fluviais menores e áreas de águas tranquilas. É piscívoro e carnívoro, alimentando-se de pequenos peixes, caranguejos e insetos.",
            curiosidade: "O jacaretinga é o menor crocodiliano das Américas e pode mudar de cor ao longo da vida, ficando mais escuro quando amadurece. Ele é um animal extremamente adaptável e pode ser encontrado em uma variedade de habitats aquáticos."
        }
    ]
};