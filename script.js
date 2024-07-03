// RESOLVI ADICIONAR ESSA FUNÇÃO POIS UMA AULA! PARA PRATICAR UM POUCO MAIS!
//FICOU BEM BACANA // TIVE QUE CRIAR UM ARRAY PARA BUSCAR AS IMGS COMO VOCES PODEM VER, E COM ISSO CRIAMOS,
// UMA FUNÇAO QUE PERCORREOU O ARRAY  E QUE FAZ A COMPARAÇÃO ULTILIZANDO O BASICO DO IF!
function mudarbody(){
    var body = document.body;
    var images = [
        'codigo1.jpg',
        'vista.jpg',
        'plano.jpg'
    ];

    const pegarImg = body.style.backgroundImage

    let nextImageIndex = images.findIndex(img => `url("${img}")` === pegarImg) + 1;
    if (nextImageIndex >= images.length) nextImageIndex = 0;

    
    body.style.backgroundImage = `url('${images[nextImageIndex]}')`;

     
};