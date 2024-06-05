const citas = [
    '"A la grande le puse cuca" -Homero Simpson',
    '"Ay!" -Señora haciendo split',
    '"Nonono... bueno sí" -Homero Simpson',
    '"Me urge la patrulla, me urge!!!" -Anónimo',
    '"Soy un burro sin mecate" -Burro',
    '"No te vamos a firmar el convenio" -Anónimo',
    '"Eres un mounstro" -Jengibre',
    '"Quiero ir a casa Forest" -Buba',
    '"La venganza nunca es buena, mata el alma y la envenena" -Don Ramón',
];

const titulo = document.querySelector(".titulo_principal");
let contador = 0;
setInterval(() => {
    titulo.innerHTML = citas[contador];
    if (contador >= citas.length-1) {
        contador = 0;
    }else {
        contador++;
    }
}, 3000);