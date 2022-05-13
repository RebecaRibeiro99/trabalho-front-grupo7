var exampleModal = document.getElementById("exampleModal");
// exampleModal.addEventListener("show.bs.modal", function (event) {
//   // Button that triggered the modal
//   var button = event.relatedTarget;
//   // Extract info from data-bs-* attributes
//   var recipient = button.getAttribute("data-bs-whatever");
//   // If necessary, you could initiate an AJAX request here
//   // and then do the updating in a callback.
//   //
//   // Update the modal's content.
//   var modalTitle = exampleModal.querySelector(".modal-title");
//   var modalBodyInput = exampleModal.querySelector(".modal-body input");

//   modalTitle.textContent = "New message to " + recipient;
//   modalBodyInput.value = recipient;
// });

const iframeGoogle = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1842.945409644792!2d-43.17342094204452!3d-22.508279196303977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99a7ffb55a8b37%3A0x9b11eb46d28f339e!2sRua%20do%20Imperador%2C%20264%20-%20402%20-%20Centro%2C%20Petr%C3%B3polis%20-%20RJ%2C%2025620-000!5e0!3m2!1spt-BR!2sbr!4v1598978501730!5m2!1spt-BR!2sbr"
width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`;

const dadosModal = [
  {
    nome: "Cristo",
    id: "cristo",
    imagem: "../assets/imagens/cristo2.jpg",
    iframe: iframeGoogle,
    linkDoGoogle: `<a href="https://www.google.com.br/maps/place/Base+Operação+Cristo+Presente/@-22.9519865,-43.2104095,3a,75y,0.42h,78.59t/data=!3m8!1e1!3m6!1sAF1QipNGTFsN0FJsM78bzsubipzMNf9Ubv6KJuk3GJTk!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNGTFsN0FJsM78bzsubipzMNf9Ubv6KJuk3GJTk%3Dw203-h100-k-no-pi-0-ya194.85532-ro-0-fo100!7i8704!8i4352!4m5!3m4!1s0x997f0d5425c69d:0x4e49e31ce5e924d0!8m2!3d-22.9522881!4d-43.210428"
  target="_blank">Visite</a>`,
    descricao: ` Cristo Redentor é uma estátua art déco que retrata Jesus Cristo,
localizada no topo do morro do Corcovado, a 709 metros acima do
nível do mar, com vista para parte considerável da cidade
brasileira do Rio de Janeiro.`,
  },
  {
    nome: "Arcos",
    id: "arcos",
    imagem: "./assets/imagens/arcosll.webp",
    iframe: iframeGoogle,
    linkDoGoogle: `<a href="https://www.google.com.br/maps/place/Escadaria+da+Lapa/@-22.9152049,-43.1790448,3a,75y,241.78h,73.56t/data=!3m6!1e1!3m4!1sd9bZGTv_vxK9AkcEIlBopQ!2e0!7i16384!8i8192!4m5!3m4!1s0x997f80e8013673:0xd35d287d2b30d5f!8m2!3d-22.915186!4d-43.1791378"
  target="_blank">Visite</a>`,
    descricao: `   Composto por 42 arcos de estilo romano, os Arcos da Lapa são a
    maior e mais importante construção colonial do Brasil.`,
  },
  {
    nome: "Maracana",
    id: "maracana",
    imagem: "../assets/imagens/maraca.jpg",
    iframe: iframeGoogle,
    linkDoGoogle: `<a href="https://www.google.com/maps/@-22.9141592,-43.2306283,3a,90y,9.35h,95.46t/data=!3m6!1e1!3m4!1syCl0Ick3GZN7Ia6xVTXZWA!2e0!7i16384!8i8192"
  target="_blank">Visite</a>`,
    descricao: `   Estádio Jornalista Mário Filho, mais conhecido como Maracanã, ou
    carinhosamente como Maraca, é um estádio de futebol localizado na
    Zona Norte da cidade brasileira do Rio de Janeiro..`,
  },
  {
    nome: "Museu",
    id: "museu",
    imagem: "../assets/imagens/museu.jpg",
    iframe: iframeGoogle,
    linkDoGoogle: `<a href="https://www.google.com.br/maps/place/Museu+do+Amanhã/@-22.8943812,-43.1795016,3a,75y,97.4h,104.44t/data=!3m8!1e1!3m6!1sAF1QipN7n7tzZeTp38brU7KEYSKTPyRGzf8W7VYAKbSv!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipN7n7tzZeTp38brU7KEYSKTPyRGzf8W7VYAKbSv%3Dw203-h100-k-no-pi-16.318329-ya5.9646254-ro-0-fo100!7i7168!8i3584!4m7!3m6!1s0x997f5732a12a31:0x316901f971660ce1!8m2!3d-22.8945798!4d-43.1796012!14m1!1BCgIgARICCAI"
  target="_blank">Visite</a>`,
    descricao: ` O Museu do Amanhã é um ambiente de ideias, explorações e perguntas
    que convida o público a refletir sobre como queremos viver - com o
    planeta e entre nós.`,
  },
  {
    nome: "Pao",
    id: "pao",
    imagem: "../assets/imagens/pao-de-acucar.jpg",
    iframe: iframeGoogle,
    linkDoGoogle: `<a href="https://www.google.com.br/maps/place/Pão+de+Açucar/@-22.9492414,-43.1546217,3a,75y,354.98h,83.39t/data=!3m8!1e1!3m6!1sAF1QipM8bc87lfGk0OHAdDteMlpeh79IpFaSmFMV79X1!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipM8bc87lfGk0OHAdDteMlpeh79IpFaSmFMV79X1%3Dw203-h100-k-no-pi-0-ya182.36334-ro0-fo100!7i6080!8i3040!4m7!3m6!1s0x9980409039f845:0x8075d7bcdfbcb48c!8m2!3d-22.9492586!4d-43.1545757!14m1!1BCgIgARICCAI"
  target="_blank">Visite</a>`,
    descricao: ` O Morro da Urca funciona como o aperitivo do passeio, com uma
    vista maravilhosa apreciada por turistas do mundo inteiro.`,
  },
  {
    nome: "Lage",
    id: "lage",
    imagem: "../assets/imagens/parque-lage.webp",
    iframe: iframeGoogle,
    linkDoGoogle: `<a href="https://www.google.com.br/maps/place/Parque+Lage/@-22.959078,-43.212554,3a,75y,24.5h,89.25t/data=!3m8!1e1!3m6!1sAF1QipMqgRTYnnHppqdH2JSKXtemuaaZ-En23ktfKzdB!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMqgRTYnnHppqdH2JSKXtemuaaZ-En23ktfKzdB%3Dw203-h100-k-no-pi-19.807074-ya285.84973-ro0-fo100!7i5720!8i2860!4m7!3m6!1s0x9bd5783c4b0e7f:0x24e4aac202dbc423!8m2!3d-22.9581535!4d-43.2116429!14m1!1BCgIgARICCAI"
  target="_blank">Visite</a>`,
    descricao: `O Parque Henrique Lage é um parque público da cidade do Rio de
    Janeiro, localizado aos pés do morro do Corcovado, na rua Jardim
    Botânico.`,
  },
];
