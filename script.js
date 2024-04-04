function Sim () {
    alert ("Voce aceitou namorar comigo");

    location.href = "https://music.youtube.com/watch?v=qmwTfcXsRdQ";
}

function nop (btn) {
    btn.style.position = 'absolute';
    btn.style.bottom = geraPosicao(10, 90);
    btn.style.left = geraPosicao(10, 90);
    console.log('opa, desviei...');
}

function geraPosicao(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}