
let nomeHerois = [ 'Upamecano', 'thiLac', 'Madebytime', 'Drexler', 'Hakimi', 'Foden' ];
let quantidadeXp = [ 1323, 3100, 2290, 900, 7750, 10500 ];

for( numReps = 0; numReps < nomeHerois.length; numReps++ ){
    if( quantidadeXp[ numReps ] < 1000 ) {
        console.log( "O heroi de nome", nomeHerois[ numReps ] );
        console.log( "Está no nivel Ferro:", quantidadeXp[ numReps ] );

    } else if ( quantidadeXp[ numReps ] >= 1001 && quantidadeXp[ numReps ] <= 2000 ) {
        console.log( "O heroi de nome", nomeHerois[ numReps ] );
        console.log( "Está no nivel Bronze:", quantidadeXp[ numReps ] );

    } else if ( quantidadeXp[ numReps ] >= 2001 && quantidadeXp[ numReps ] <= 6000 ) {
        console.log( "O heroi de nome", nomeHerois[ numReps ] );
        console.log( "Está no nivel Prata:", quantidadeXp[ numReps ] );

    } else if ( quantidadeXp[ numReps ] >= 6001 && quantidadeXp[ numReps ] <= 7000 ) {
        console.log( "O heroi de nome", nomeHerois[ numReps ] );
        console.log( "Está no nivel Ouro:", quantidadeXp[ numReps ] );

    } else if ( quantidadeXp[ numReps ] >= 7001 && quantidadeXp[ numReps ] <= 8000 ) {
        console.log( "O heroi de nome", nomeHerois[ numReps ] );
        console.log( "Está no nivel Platina:", quantidadeXp[ numReps ] );

    } else if ( quantidadeXp[ numReps ] >= 8001 && quantidadeXp[ numReps ] <= 9000 ) {
        console.log( "O heroi de nome", nomeHerois[ numReps ] );
        console.log( "Está no nivel Ascendente:", quantidadeXp[ numReps ] );

    } else if ( quantidadeXp[ numReps ] >= 9001 && quantidadeXp[ numReps ] <= 10000 ) {
        console.log( "O heroi de nome", nomeHerois[ numReps ] );
        console.log( "Está no nivel Imortal:", quantidadeXp[ numReps ] );

    } else {
        console.log( "O heroi de nome", nomeHerois[ numReps ] );
        console.log( "Está no nivel Radiante:", quantidadeXp[ numReps ] );
    }
}