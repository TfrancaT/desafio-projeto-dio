
let nomeHeroi;
    nomeHeroi = "Upamecano";

let quantidadeExp;
    quantidadeExp = 1150;

    if( quantidadeExp <= 1000 ){
        console.log( nomeHeroi, "Seu nível de experiência está em:", quantidadeExp );
        console.log( "Sua classificação é Ferro." );
    } else if ( quantidadeExp >= 1001 && quantidadeExp <= 2000 ) {
        console.log( nomeHeroi, "Seu nível de experiência está em:", quantidadeExp );
        console.log( "Sua classificação é Bronze." );
    } else if ( quantidadeExp >= 2001 && quantidadeExp <= 6000 ) { 
        console.log( nomeHeroi, "Seu nível de experiência está em:", quantidadeExp );
        console.log( "Sua classificação é PRata." );
    } else if ( quantidadeExp >= 6001 && quantidadeExp <= 7000 ) { 
        console.log( nomeHeroi, "Seu nível de experiência está em:", quantidadeExp );
        console.log( "Sua classificação é Ouro." );
    } else if ( quantidadeExp >= 7001 && quantidadeExp <= 8000 ) { 
        console.log( nomeHeroi, "Seu nível de experiência está em:", quantidadeExp );
        console.log( "Sua classificação é Platina." );
    } else if ( quantidadeExp >= 8001 && quantidadeExp <= 9000 ) { 
        console.log( nomeHeroi, "Seu nível de experiência está em:", quantidadeExp );
        console.log( "Sua classificação é Ascendente." );
    } else if ( quantidadeExp >= 9001 && quantidadeExp <= 10000 ) { 
        console.log( nomeHeroi, "Seu nível de experiência está em:", quantidadeExp );
        console.log( "Sua classificação é Imortal." );
    } else { 
        console.log( nomeHeroi, "Seu nível de experiência está em:", quantidadeExp );
        console.log( "Sua classificação é Radiante." );
    }