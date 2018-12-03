//Github: https://github.com/lucasboot/corridaambiental
var x, y, n;
var tirox = [],
    tiroy = [],
    tirosBS = [],
    tirosAV = 2,
    municao = 2;
var ye = [];
var xe = [];
var resolucao, resolucaojaula, pontuacao;
var aux;
var lion, parot, monkey, uni, personagem;
var naTela = true;
var i, j, k;
var tempoTiro = -1;
var vida;
var jaulax = [],
    jaulay = [];
var jaulaon = true;
var jungle, ocean, shore, sky;
var asas=[], praia, oceano=[];
var chave, chave2, chave3;
var ans = 0;
var TelaInicial;
var tela = 1;
var tempo = 0;
var ararinha, franca, tart, cen, mic;
var ani, ambientebaleia, ambientetartaruga, principal, gameover, vitoria, sommico, somarara, sombaleia, final;
var emcolisao =[];
var musica;
function preload() {
    lion = loadImage('arara.png');
    parot = loadImage('tartaruga.png');
    uni = loadImage('mico.png');
    monkey = loadImage('baleia.png');
    personagem = loadImage('personagem.png');
    scenario = loadImage('scenario.jpg');
    ocean = loadImage('ocean.jpg');
    shore = loadImage('shore.jpg');
    sky = loadImage('sky.png');
    jungle = loadImage('jungle.jpg');
    for(ani=0;ani<5;ani++){
		asas[ani] = loadImage('asas'+ani+'.png');
	}
    praia = loadImage('praia.png');
    for(ani = 0; ani<4; ani++){
		oceano[ani] = loadImage('oceano'+ani+'.png');
	}
	ani = 0;
    chave = loadImage('chave.png');
    chave2 = loadImage('chaveTESTE.png');
    chave3 = loadImage('chaveTESTE.png');
    ararinha = loadImage('ararinha.png');
    franca = loadImage('franca.png');
    tart = loadImage('tart.png');
    cen = loadImage('cen.jpg');
    mic = loadImage('mic.png');
    TelaInicial = loadImage('background.png'); // carrega uma imagem
    font = loadFont('mainfont.TTF'); // carrega uma fonte
    font2 = loadFont('textsfont.ttf'); //fonte para os textos de diálogo
    principal = loadSound('sons/principal.mp3');
    ambientebaleia = loadSound('sons/ambientebaleia.mp3');
    ambientetartaruga = loadSound('sons/ambientetartaruga.mp3');
    gameover = loadSound('sons/gameover.mp3');
    somarara = loadSound('sons/somarara.mp3');
    sombaleia = loadSound('sons/sombaleia.mp3');
    sommico = loadSound('sons/sommico.mp3');
    vitoria = loadSound('sons/vitoria.mp3');
    final = loadSound('sons/final.mp3');
}

function setup() {
	principal.setVolume(0.1);
	ambientebaleia.setVolume(0.1);
	ambientetartaruga.setVolume(0.1);
	gameover.setVolume(0.1);
	somarara.setVolume(0.1);
	sombaleia.setVolume(0.1);
	sommico.setVolume(0.1);
	vitoria.setVolume(0.1);
	musica = 0;
    createCanvas(1080, 500);
    frameRate(30);
    vida = 3;
    x = 20;
    y = 360;
    resolucao = 45;
    resolucaojaula = 55;
    pontuacao = 0;
    for (i = 0; i < tirosAV; i++) {
        tirox[i] = -50;
        tirosBS[i] = false;
        tiroy[i] = -100;
    }

    for (i = 0; i <= 3; i++) {
		emcolisao[i] = false;
        if (i == 0) {
            ye[i] = random(20, 150);
            xe[i] = random(1000, 1200);
            jaulay[i] = ye[i];
            jaulax[i] = xe[i];
        }
        if (i == 1) {
            ye[i] = random(190, 260);
            xe[i] = parseInt(random(1080, 1200));
            jaulay[i] = ye[i];
            jaulax[i] = xe[i];
        }
        if (i == 2) {
            ye[i] = parseInt(random(300, 390));
            xe[i] = parseInt(random(1080, 1200));
            jaulay[i] = ye[i];
            jaulax[i] = xe[i];
        }
        if (i == 3) {
            ye[i] = random(400, 460);
            xe[i] = random(1080, 1200);
            jaulay[i] = ye[i];
            jaulax[i] = xe[i];
        }

    }
}

function draw() {
    //basics
    //tela de vitória
    //contador de animais que não foram salvos
    if ((jaulax[0] < 0 || jaulax[1] < 0 || jaulax[2] < 0 || jaulax[3] < 0)) {
        ans++;
    }
    if(ans>=7){
        if(sommico.isPlaying()){
			sommico.pause();
		}
		if(ambientebaleia.isPlaying()){
			ambientebaleia.pause();
		}
		if(ambientetartaruga.isPlaying()){
			ambientetartaruga.pause();
		}
		if(sombaleia.isPlaying()){
			sombaleia.pause();
		}
		if(somarara.isPlaying()){
			somarara.pause();
		}
		if(final.isPlaying()){
			final.pause();
        }
        ans=0;
        tela = 30;
        musica = 0;
    }
    //colisao do tiro com o inimigo
    //tiro1
    if (dist(tirox[0], tiroy[0], xe[0], ye[0]) < (30) && jaulax[0] < width) {
        jaulax[0] = 1000000000;
        tirox[0] = 11000;
        pontuacao = pontuacao + 10;
    }
    if (dist(tirox[0], tiroy[0], xe[1], ye[1]) < (30) && jaulax[1] < width) {
        jaulax[1] = 1000000000;
        tirox[0] = 11000;
        pontuacao = pontuacao + 10;
    }
    if (dist(tirox[0], tiroy[0], xe[2], ye[2]) < (30) && jaulax[2] < width) {
        jaulax[2] = 1000000000;
        tirox[0] = 11000;
        pontuacao = pontuacao + 10;
    }
    if (dist(tirox[0], tiroy[0], xe[3], ye[3]) < (30) && jaulax[3] < width) {
        jaulax[3] = 1000000000;
        tirox[0] = 11000;
        pontuacao = pontuacao + 10;
    }

    //tiro2
    if (dist(tirox[1], tiroy[1], xe[0], ye[0]) < (30) && jaulax[0] < width) {
        jaulax[0] = 1000000000;
        tirox[1] = 11080;
        pontuacao = pontuacao + 10;
    }
    if (dist(tirox[1], tiroy[1], xe[1], ye[1]) < (30) && jaulax[1] < width) {
        jaulax[1] = 1000000000;
        tirox[1] = 11080;
        pontuacao = pontuacao + 10;
    }
    if (dist(tirox[1], tiroy[1], xe[2], ye[2]) < (30) && jaulax[2] < width) {
        jaulax[2] = 1000000000;
        tirox[1] = 11080;
        pontuacao = pontuacao + 10;
    }
    if (dist(tirox[1], tiroy[1], xe[3], ye[3]) < (30) && jaulax[3] < width) {
        jaulax[3] = 1000000000;
        tirox[1] = 11080;
        pontuacao = pontuacao + 10;
    }

    //colisao inimigo com o personagem
    if (dist(x, y, xe[0], ye[0]) < (30) && jaulax[0] < width && !emcolisao[0]) {
        vida = vida - 1;
        emcolisao[0] = true;
    }
    if (dist(x, y, xe[1], ye[1]) < (30) && jaulax[1] < width && !emcolisao[1]) {
        vida = vida - 1;
        emcolisao[1] = true;
    }
 
    if (dist(x, y, xe[2], ye[2]) < (30) && jaulax[2] < width && !emcolisao[2]) {
        vida = vida - 1;
        emcolisao[2] = true;
    }
    if (dist(x, y, xe[3], ye[3]) < (30) && jaulax[3] < width && !emcolisao[3]) {
        vida = vida - 1;
        emcolisao[3] = true;
    }
    //reaparecimento dos animais
    /*
    for (k = 0; k <= 3; k++) {
        if (xe[k] < 0) {
            xe[k] = 1080 + parseInt(random(0, 2000));
            ye[k] = parseInt(random(40, 420));
            jaulax[k] = xe[k];
            jaulay[k] = ye[k];
        }
    }
    */

    if (tela == 1) { //tela inicial
		if(musica==0){
			principal.play();
			musica++;
		}
        image(TelaInicial, 10, 20); // a imagem carregada é colocada na primeira tela
        textFont(font, 60); //determina uma fonte
        fill(206, 63, 59); //escolhe a cor do texto
        text("Corrida Ambiental", 150, 220); // alert o texto com suas coordenadas
        textSize(30); //muda só o tamanho do texto
        text("Aperte ENTER", 350, 300);
        if (keyIsDown(ENTER)) { //detecta se a tecla ENTER foi pressionada, se sim, vai pra tela 2 do jogo
            tela = 2;   
        }
    }

    if (tela == 2) {
        background(TelaInicial);
        textFont(font2, 40);
        text("Oi, jogador(a). Eu sou o Jõao Verde, poderia me ajudar a ", 50, 200);
        text("aprender mais sobre os animais brasileiros em grande risco de extincao?", 50, 250);
        text("Aperte a seta para direita para continuar...", 600, 450);
        if (keyIsDown(RIGHT_ARROW)) { //detecta se a tecla ENTER foi pressionada, se sim, vai pra tela 2 do jogo
            tela = 3;
        }
    }
    if (tela == 3) {
        background(TelaInicial);
        textFont(font2, 40);
        text("As regras são simples: ", 420, 50);
        text("A cada nivel, precisaremos retirar uma quantidade de animais de certa espécie da jaula.", 50, 140);
        text("Movimente-se com as direcionais e solte uma chave para tirar os animais", 50, 170);
        text("da jaula com a tecla SPACE", 50, 200);
        text("Nao deixe de salvar mais que 7 animais!", 50, 330);
        text("Aperte ENTER para continuar...", 720, 450);
        if (keyIsDown(ENTER)) { //detecta se a tecla ENTER foi pressionada, se sim, vai pra tela 2 do jogo
            tela = 4;
            ani=0;
            principal.pause();
            musica = 0;

        }
    }
    if (tela == 4) { //arara
		if(musica==0){
			somarara.setVolume(0.1);
			somarara.play();
			musica=1;
		}
		
        if (xe[0] < 0) {
            xe[0] = 1080 + parseInt(random(0, 2000));
            ye[0] = parseInt(random(40, 420));
            jaulax[0] = xe[0];
            jaulay[0] = ye[0];
            emcolisao[0] = false;
        }
        if (xe[1] < 0) {
            xe[1] = 1080 + parseInt(random(0, 2000));
            ye[1] = parseInt(random(40, 420));
            jaulax[1] = xe[1];
            jaulay[1] = ye[1];
            emcolisao[1] = false;
        }
        if (xe[2] < 0) {
            xe[2] = 1080 + parseInt(random(0, 2000));
            ye[2] = parseInt(random(40, 420));
            jaulax[2] = xe[2];
            jaulay[2] = ye[2];
            emcolisao[2] = false;
        }
        if (xe[3] < 0) {
            xe[3] = 1080 + parseInt(random(0, 2000));
            ye[3] = parseInt(random(40, 420));
            jaulax[3] = xe[3];
            jaulay[3] = ye[3];
            emcolisao[3] = false;
        }
        background(sky);
        fill(0, 0, 0);
        image(asas[ani], x, y, [70], [70]);
        ani++;
        if(ani>=5){
			ani=0;
		}
        textSize(30);
        text('Vidas: ' + vida, 20, 25);
        text('Munição: ' + municao, 20, 50)
        text('Pontos: ' + pontuacao, 500, 25);
        text('Animais não salvos: ' + ans, 20, 75);
        if (keyIsDown(UP_ARROW)) {
            if (y >= 20) {
                y = y - 10;
            }
        }
        if (keyIsDown(DOWN_ARROW)) {
            if (y < 440) {
                y = y + 10;
            }
        }

        //movimentação das figuras
        for (j = 0; j <= 3; j++) {
            xe[j] = xe[j] - 5;
            jaulax[j] = jaulax[j] - 5;
        }
        //tiro
        if (keyIsDown(32) && tempoTiro < 0) {
            tempoTiro = 5;
            for (i = 0; i < tirosAV; i++) {
                if (tirosBS[i] == false) {
                    tirosBS[i] = true;
                    municao -= 1;
                    tirox[i] = 100;
                    tiroy[i] = y;
                    break;

                }
            }
        }
        tempoTiro--;
        //checar tiros
        for (i = 0; i < tirosAV; i++) {
            if (tirosBS[i]) {
                image(chave, tirox[i], tiroy[i] + 35, [32.5], [32.5]);
                tirox[i] += 20;
                if (tirox[i] > width) {
                    tirox[i] = 10000000;
                    tirosBS[i] = false;
                    municao += 1;
                }
            }

        }
        //desenhando os animais e jaulas
        for (i = 0; i <= 3; i++) {
            //if (i == 0) {
            fill(168, 168, 168);
            rect(jaulax[i], jaulay[i], resolucaojaula, resolucaojaula);
            image(lion, xe[i], ye[i], [resolucao], [resolucao]);
        }

        if (pontuacao > 100) {
            tela = 55;
        }
    }
    if (tela == 55) { // infromações sobre a arara
        background(TelaInicial);
        textFont(font2, 40);
        fill(206, 63, 59);
        text("A arara azul é encontrada nos biomas Amazônia e Pantanal. ", 70, 290);
        text("Essa espécie enfrenta problemas como o tráfico de animais, caça ilegal e o ", 50, 330);
        text("desmatamento de seu habitat. É muito cobiçada por caçadores pois as suas penas ", 50, 370);
        text("possuem grande valor no mercado internacional.", 50, 410);
        image(ararinha, 700, 20);
        textSize(30); //muda só o tamanho do texto
        text("Aperte a seta para a direita para avançar até a próxima fase", 550, 460);
        if (keyIsDown(RIGHT_ARROW)) {
            tela = 5;
            somarara.setVolume(0);
            musica = 0;

        }
    }
    if (tela == 5) { //baleia
		if(musica==0){
			ambientebaleia.play();
			sombaleia.play();
			musica=1;
		}
        if (xe[0] < 0) {
            xe[0] = 1080 + parseInt(random(0, 2000));
            ye[0] = parseInt(random(40, 420));
            jaulax[0] = xe[0];
            jaulay[0] = ye[0];
        }
        if (xe[1] < 0) {
            xe[1] = 1080 + parseInt(random(0, 2000));
            ye[1] = parseInt(random(40, 420));
            jaulax[1] = xe[1];
            jaulay[1] = ye[1];
        }
        if (xe[2] < 0) {
            xe[2] = 1080 + parseInt(random(0, 2000));
            ye[2] = parseInt(random(40, 420));
            jaulax[2] = xe[2];
            jaulay[2] = ye[2];
        }
        if (xe[3] < 0) {
            xe[3] = 1080 + parseInt(random(0, 2000));
            ye[3] = parseInt(random(40, 420));
            jaulax[3] = xe[3];
            jaulay[3] = ye[3];
        }
        background(ocean);
        fill(0, 0, 255);
        image(oceano[ani], x, y, [70], [70]);
        ani++;
        if(ani>=4){
			ani=0;
		}
        textSize(30);
        text('Vidas: ' + vida, 20, 25);
        text('Chaves: ' + municao, 20, 50)
        text('Pontos: ' + pontuacao, 500, 25);
        text('Animais não salvos: ' + ans, 20, 75);
        if (keyIsDown(UP_ARROW)) {
            if (y >= 20) {
                y = y - 10;
            }
        }
        if (keyIsDown(DOWN_ARROW)) {
            if (y < 440) {
                y = y + 10;
            }
        }
        //movimentação das figuras
        for (j = 0; j <= 3; j++) {
            xe[j] = xe[j] - 8;
            jaulax[j] = jaulax[j] - 8;
        }
        //tiro
        if (keyIsDown(32) && tempoTiro < 0) {
            tempoTiro = 5;
            for (i = 0; i < tirosAV; i++) {
                if (tirosBS[i] == false) {
                    tirosBS[i] = true;
                    municao -= 1;
                    tirox[i] = 100;
                    tiroy[i] = y;
                    break;

                }
            }
        }
        tempoTiro--;
        //checar tiros
        for (i = 0; i < tirosAV; i++) {
            if (tirosBS[i]) {
                image(chave2, tirox[i], tiroy[i] + 35, [30], [30]);
                tirox[i] += 20;
                if (tirox[i] > width) {
                    tirox[i] = 10000000;
                    tirosBS[i] = false;
                    municao += 1;
                }
            }

        }
        //desenhando os animais e jaulas
        for (i = 0; i <= 3; i++) {
            //if (i == 0) {
            fill(168, 168, 168);
            rect(jaulax[i], jaulay[i], resolucaojaula, resolucaojaula);
            image(monkey, xe[i], ye[i], [resolucao], [resolucao]);
        }
        //mudando dificuldade e animal
        if (pontuacao > 300) {
            tela = 66;
        }
    }
    if (tela == 66) {
        background(TelaInicial);
        textFont(font2, 40);
        fill(206, 63, 59);
        text("A baleia-franco-do sul (Eubalaena australis), ", 50, 120);
        text("também conhecida como baleia franca austral, ", 50, 160);
        text("é encontrada no litoral brasileiro.", 50, 200);
        text("Ela vem sofrendo com a caça, pesca,", 50, 240);
        text("bem como a poluição das águas. ", 50, 280);
        text("Na época de ter os filhotes, as mães buscam ", 50, 320);
        text("águas mais quentes e rasas para darem à luz", 50, 360)
        text(" É considerada em perigo de extinção.", 50, 400);
        image(franca, 700, 40);
        textSize(30); //muda só o tamanho do texto
        text("Aperte a seta para a direita para avançar até a próxima fase", 500, 480);
        if (keyIsDown(RIGHT_ARROW)) {
            tela = 6;
            ambientebaleia.pause();
            sombaleia.pause();
			musica=0;
        }

    }

    if (tela == 6) { //tartaruga
		if(musica==0){
			ambientetartaruga.play();
			musica=1;
		}
        if (xe[0] < 0) {
            xe[0] = 1080 + parseInt(random(0, 2000));
            ye[0] = parseInt(random(40, 420));
            jaulax[0] = xe[0];
            jaulay[0] = ye[0];
        }
        if (xe[1] < 0) {
            xe[1] = 1080 + parseInt(random(0, 2000));
            ye[1] = parseInt(random(40, 420));
            jaulax[1] = xe[1];
            jaulay[1] = ye[1];
        }
        if (xe[2] < 0) {
            xe[2] = 1080 + parseInt(random(0, 2000));
            ye[2] = parseInt(random(40, 420));
            jaulax[2] = xe[2];
            jaulay[2] = ye[2];
        }
        if (xe[3] < 0) {
            xe[3] = 1080 + parseInt(random(0, 2000));
            ye[3] = parseInt(random(40, 420));
            jaulax[3] = xe[3];
            jaulay[3] = ye[3];
        }
        background(shore);
        fill(0, 0, 0);
        image(praia, x, y, [70], [70]);
        textSize(30);
        text('Vidas: ' + vida, 20, 25);
        text('Chaves: ' + municao, 20, 50)
        text('Pontos: ' + pontuacao, 500, 25);
        text('Animais não salvos: ' + ans, 20, 75);
        if (keyIsDown(UP_ARROW)) {
            if (y >= 20) {
                y = y - 10;
            }
        }
        if (keyIsDown(DOWN_ARROW)) {
            if (y < 440) {
                y = y + 10;
            }
        }
        //movimentação das figuras
        for (j = 0; j <= 3; j++) {
            xe[j] = xe[j] - 9;
            jaulax[j] = jaulax[j] - 9;
        }
        //tiro
        if (keyIsDown(32) && tempoTiro < 0) {
            tempoTiro = 5;
            for (i = 0; i < tirosAV; i++) {
                if (tirosBS[i] == false) {
                    tirosBS[i] = true;
                    municao -= 1;
                    tirox[i] = 100;
                    tiroy[i] = y;
                    break;

                }
            }
        }
        tempoTiro--;
        //checar tiros
        for (i = 0; i < tirosAV; i++) {
            if (tirosBS[i]) {
                image(chave2, tirox[i], tiroy[i] + 35, [30], [30]);
                tirox[i] += 20;
                if (tirox[i] > width) {
                    tirox[i] = 10000000;
                    tirosBS[i] = false;
                    municao += 1;
                }
            }

        }
        //desenhando os animais e jaulas
        for (i = 0; i <= 3; i++) {
            //if (i == 0) {
            fill(168, 168, 168);
            rect(jaulax[i], jaulay[i], resolucaojaula, resolucaojaula);
            image(parot, xe[i], ye[i], [resolucao], [resolucao]);
        }
        //mudando dificuldade e animal
        if (pontuacao > 600) {
            tela = 77;
        }
    }
    if (tela == 77) {
        background(TelaInicial);
        textFont(font2, 35);
        fill(206, 63, 59);
        text("A tartaruga-de-pente é considerada a mais tropical de todas as tartarugas marinhas ", 50, 220);
        text("devido a sua distribuição geográfica, no Brasil podem ser encontradas", 50, 260);
        text("no litoral norte da Bahia e Rio Grande do Norte. O nome foi dado em razão", 50, 300);
        text("da fabricação de pentes com o casco da tartaruga. Assim como na maioria", 50, 340);
        text("das espécies, as principais ameaças são as constantes descaracterizações ", 50, 380);
        text("dos habitats, pesca incidental e poluição dos ambientes marinhos.", 50, 420);
        image(tart, 690, 20);
        textSize(30); //muda só o tamanho do texto
        text("Aperte a seta para a direita para avançar até a próxima fase", 500, 480);
        if (keyIsDown(RIGHT_ARROW)) {
            tela = 7;
            musica=0;
            ambientetartaruga.pause();
        }
    }
    if (tela == 7) { //mico
		if(musica==0){
			sommico.play();
			musica=1;
		}
        if (xe[0] < 0) {
            xe[0] = 1080 + parseInt(random(0, 2000));
            ye[0] = parseInt(random(40, 420));
            jaulax[0] = xe[0];
            jaulay[0] = ye[0];
        }
        if (xe[1] < 0) {
            xe[1] = 1080 + parseInt(random(0, 2000));
            ye[1] = parseInt(random(40, 420));
            jaulax[1] = xe[1];
            jaulay[1] = ye[1];
        }
        if (xe[2] < 0) {
            xe[2] = 1080 + parseInt(random(0, 2000));
            ye[2] = parseInt(random(40, 420));
            jaulax[2] = xe[2];
            jaulay[2] = ye[2];
        }
        if (xe[3] < 0) {
            xe[3] = 1080 + parseInt(random(0, 2000));
            ye[3] = parseInt(random(40, 420));
            jaulax[3] = xe[3];
            jaulay[3] = ye[3];
        }
        background(jungle);
        fill(0, 0, 0);
        image(personagem, x, y, [70], [70]);
        textSize(30);
        text('Vidas: ' + vida, 20, 25);
        text('Chaves: ' + municao, 20, 50)
        text('Pontos: ' + pontuacao, 500, 25);
        text('Animais não salvos: ' + ans, 20, 75);
        if (keyIsDown(UP_ARROW)) {
            if (y >= 20) {
                y = y - 10;
            }
        }
        if (keyIsDown(DOWN_ARROW)) {
            if (y < 440) {
                y = y + 10;
            }
        }
        //movimentação das figuras
        for (j = 0; j <= 3; j++) {
            xe[j] = xe[j] - 10;
            jaulax[j] = jaulax[j] - 10;
        }
        //tiro
        if (keyIsDown(32) && tempoTiro < 0) {
            tempoTiro = 5;
            for (i = 0; i < tirosAV; i++) {
                if (tirosBS[i] == false) {
                    tirosBS[i] = true;
                    municao -= 1;
                    tirox[i] = 100;
                    tiroy[i] = y;
                    break;

                }
            }
        }
        tempoTiro--;
        //checar tiros
        for (i = 0; i < tirosAV; i++) {
            if (tirosBS[i]) {
                image(chave2, tirox[i], tiroy[i] + 35, [30], [30]);
                tirox[i] += 20;
                if (tirox[i] > width) {
                    tirox[i] = 10000000;
                    tirosBS[i] = false;
                    municao += 1;
                }
            }

        }
        //desenhando os animais e jaulas
        for (i = 0; i <= 3; i++) {
            //if (i == 0) {
            fill(168, 168, 168);
            rect(jaulax[i], jaulay[i], resolucaojaula, resolucaojaula);
            image(uni, xe[i], ye[i], [resolucao], [resolucao]);
        }
        //mudando dificuldade e animal

        if (pontuacao > 840) {
            tela = 88;
        }

    }
    if (tela == 88) {
        background(TelaInicial);
        textFont(font2, 35);
        fill(206, 63, 59);
        text("O mico-leão-dourado habita a Mata Atlântica e sofreu durante décadas", 50, 290);
        text("com o desmatamento e o tráfico de animais, o que resultou na eliminação", 50, 330);
        text("quase total da espécie. Hoje, os poucos indivíduos que existem são restritos", 50, 370);
        text("aos remanescentes de florestas do estado do Rio de Janeiro.", 50, 410);
        image(mic, 590, 30);
        textSize(30); //muda só o tamanho do texto
        text("Aperte a seta para a direita para avançar até a próxima fase", 500, 480);
        if (keyIsDown(RIGHT_ARROW)) {
            tela = 8;
            musica=0;
            sommico.pause();
        }
    }
    if (tela == 8) { //todos os animais
		if(musica==0){
			final.play();
			musica=1;
		}
		if(!final.isPlaying()){
			final.play();
		}
        if (xe[0] < 0) {
            xe[0] = 1080 + parseInt(random(0, 2000));
            ye[0] = parseInt(random(40, 420));
            jaulax[0] = xe[0];
            jaulay[0] = ye[0];
        }
        if (xe[1] < 0) {
            xe[1] = 1080 + parseInt(random(0, 2000));
            ye[1] = parseInt(random(40, 420));
            jaulax[1] = xe[1];
            jaulay[1] = ye[1];
        }
        if (xe[2] < 0) {
            xe[2] = 1080 + parseInt(random(0, 2000));
            ye[2] = parseInt(random(40, 420));
            jaulax[2] = xe[2];
            jaulay[2] = ye[2];
        }
        if (xe[3] < 0) {
            xe[3] = 1080 + parseInt(random(0, 2000));
            ye[3] = parseInt(random(40, 420));
            jaulax[3] = xe[3];
            jaulay[3] = ye[3];
        }
        background(scenario);
        fill(0, 0, 255);
        image(personagem, x, y, [70], [70]);
        textSize(30);
        text('Vidas: ' + vida, 20, 25);
        text('Chaves: ' + municao, 20, 50)
        text('Pontos: ' + pontuacao, 500, 25);
        text('Animais não salvos: ' + ans, 20, 75);
        if (keyIsDown(UP_ARROW)) {
            if (y >= 20) {
                y = y - 10;
            }
        }
        if (keyIsDown(DOWN_ARROW)) {
            if (y < 440) {
                y = y + 10;
            }
        }
        //movimentação das figuras
        for (j = 0; j <= 3; j++) {
            xe[j] = xe[j] - 10.5;
            jaulax[j] = jaulax[j] - 10.5;
        }
        //tiro
        if (keyIsDown(32) && tempoTiro < 0) {
            tempoTiro = 5;
            for (i = 0; i < tirosAV; i++) {
                if (tirosBS[i] == false) {
                    tirosBS[i] = true;
                    municao -= 1;
                    tirox[i] = 100;
                    tiroy[i] = y;
                    break;

                }
            }
        }
        tempoTiro--;
        //checar tiros
        for (i = 0; i < tirosAV; i++) {
            if (tirosBS[i]) {
                image(chave3, tirox[i], tiroy[i] + 35, [30], [30]);
                tirox[i] += 20;
                if (tirox[i] > width) {
                    tirox[i] = 10000000;
                    tirosBS[i] = false;
                    municao += 1;
                }
            }

        }
        //desenhando os animais e jaulas
        for (i = 0; i <= 3; i++) {
            if (i == 0) {
                fill(168, 168, 168);
                rect(jaulax[i], jaulay[i], resolucaojaula, resolucaojaula);
                image(lion, xe[i], ye[i], [resolucao], [resolucao]);
            }

            if (i == 1) {
                fill(168, 168, 168);
                rect(jaulax[i], jaulay[i], resolucaojaula, resolucaojaula);
                image(monkey, xe[i], ye[i], [resolucao], [resolucao]);

            }
            if (i == 2) {
                fill(168, 168, 168);
                rect(jaulax[i], jaulay[i], resolucaojaula, resolucaojaula);
                image(parot, xe[i], ye[i], [resolucao], [resolucao]);

            }
            if (i == 3) {
                fill(168, 168, 168);
                rect(jaulax[i], jaulay[i], resolucaojaula, resolucaojaula);
                image(uni, xe[i], ye[i], [resolucao], [resolucao]);

            }
        }
    }
    if (vida < 1) {
		if(sommico.isPlaying()){
			sommico.pause();
		}
		if(ambientebaleia.isPlaying()){
			ambientebaleia.pause();
		}
		if(ambientetartaruga.isPlaying()){
			ambientetartaruga.pause();
		}
		if(sombaleia.isPlaying()){
			sombaleia.pause();
		}
		if(somarara.isPlaying()){
			somarara.pause();
		}
		if(final.isPlaying()){
			final.pause();
		}
        tela = 30;
        musica=0;
    }
    if (tela == 30) {
        vida = 3;
        pontuacao = 0;
        ans = 0;
		if(musica==0){
			gameover.play();
			musica=1;
		}
        background(TelaInicial);
        textFont(font, 100); //determina uma fonte
        fill(206, 63, 59); //escolhe a cor do texto
        text("Game over", 150, 220); // alert o texto com suas coordenadas
        textSize(18); //muda só o tamanho do texto
        text("Aperte CTRL para voltar a tela inicial", 350, 270);
        if (keyIsDown(CONTROL)) {
            gameover.pause();
            tela = 1;
        }
    }
    if (pontuacao >= 1200) {
        tela = 40;
        final.setVolume(0);
        musica=0;
    }
    if (tela == 40) {
		vitoria.play();
        background(TelaInicial);
        textFont(font, 60); //determina uma fonte
        fill(206, 63, 59); //escolhe a cor do texto
        text("Voce venceu!!!", 170, 220); // alert o texto com suas coordenadas
        textSize(15); //muda só o tamanho do texto
        text("Aperte CTRL para jogar novamente", 350, 400);
        vida = 3;
        pontuacao = 0;
        ans = 0;
        if (keyIsDown(CONTROL)) {
            tela = 1;
            vitoria.pause();
            musica = 0;
        }
    }
} //draw