// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Flores Amarillas ", inicio: 8, fin: 12 },
  {
    text: "Él la estaba esperando con una flor amarilla",
    inicio: 17,
    fin: 22,
  },
  {
    text: "Ella lo estaba soñando con la luz en su pupila",
    inicio: 24,
    fin: 30,
  },
  {
    text: "Y el amarillo del sol, iluminaba la esquina ",
    inicio: 32.5,
    fin: 38,
  },
  {
    text: "Esquina ",
    inicio: 38.5,
    fin: 40,
  },
  {
    text: "Lo sentía tan cercano, lo sentía desde niña",
    inicio: 40.5,
    fin: 46,
  },
  {
    text: "Ella sabía que él sabía Que algún día pasaría",
    inicio: 46.5,
    fin: 51.5,
  },
  {
    text: "Que vendría a buscarla Con sus flores amarillas",
    inicio: 51.5,
    fin: 58,
  },
  {
    text: "No te apures, no detenga El instante del encuentro",
    inicio: 59.5,
    fin: 63,
  },
  {
    text: "Está dicho que es un hecho No la pierdas, no hay derecho",
    inicio: 63,
    fin: 67,
  },
  {
    text: "No te olvides que la vida Casi nunca está dormida",
    inicio: 67,
    fin: 75,
  },
  {
    text: "En ese bar tan desierto nos esperaba el encuentro",
    inicio: 93.5,
    fin: 99,
  },
  {
    text: "Encuentro",
    inicio: 99,
    fin: 101,
  },
  {
    text: "Ella llegó en limusina amarilla por supuesto",
    inicio: 101.5,
    fin: 107,
  },
  {
    text: "Él se acercó de repente la miro tan de frente",
    inicio: 109.5,
    fin: 115,
  },
  {
    text: "Frente",
    inicio: 115,
    fin: 116,
  },
  {
    text: "Toda una vida soñada y LE DIJO QUE BONITA QUE ESTABA",
    inicio: 117,
    fin: 123,
  },
  {
    text: "Ella sabía que él sabía Que algún día pasaría",
    inicio: 123.5,
    fin: 128.5,
  },
  {
    text: "Que vendría a buscarla Con sus flores amarillas",
    inicio: 128.5,
    fin: 134,
  },
  {
    text: "No te apures, no detenga El instante del encuentro",
    inicio: 136,
    fin: 140,
  },
  {
    text: "Está dicho que es un hecho No la pierdas, no hay derecho",
    inicio: 140,
    fin: 144,
  },
  {
    text: "No te olvides que la vida Casi nunca está dormida",
    inicio: 144,
    fin: 152.5,
  },
  {
    text: "Flores amarrillas ",
    inicio: 160,
    fin: 164.5,
  },
  {
    text: "Ella sabía que él sabía Que algún día pasaría",
    inicio: 169,
    fin: 173.5,
  },
  {
    text: "Que vendría a buscarla Con sus flores amarillas",
    inicio: 173.5,
    fin: 180,
  },
  {
    text: "No te apures, no detenga El instante del encuentro",
    inicio: 181,
    fin: 185,
  },
  {
    text: "Está dicho que es un hecho No la pierdas, no hay derecho",
    inicio: 185,
    fin: 189,
  },
  {
    text: "No te olvides que la vida Casi nunca está dormida",
    inicio: 189,
    fin: 197,
  },
  {
    text: "Ella sabía que él sabía Él sabía, ella sabía",
    inicio: 198,
    fin: 203.5,
  },
  { text: "Que él sabía, ella sabía", inicio: 203.5, fin: 205.5 },
  {
    text: "Y NO se olvidaron de sus flores amarillas",
    inicio: 205.5,
    fin: 214,
  },
  {
    text: "POSDATA : NO SE OLVIDARON",
    inicio: 215.5,
    fin: 224,
  },
];

// Animar las letras
function updateLyrics() {
  var time = audio.currentTime;

  var currentLine = lyricsData.find(
    (line) => time >= line.inicio && time < line.fin,
  );

  if (currentLine) {
    lyrics.innerHTML = currentLine.text;
    lyrics.style.opacity = 1;
  } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 100);

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
