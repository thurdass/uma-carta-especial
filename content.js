/*
 * EDITE SUA CARTA AQUI.
 * Os textos abaixo são rascunhos: ajuste-os para que expressem a sua voz.
 * Procure por EDITAR para encontrar os dados que ainda faltam.
 * Use \n para uma quebra de linha e \n\n para separar parágrafos.
 * Os textos são tratados como texto simples; não escreva tags HTML.
 *
 * PRIVACIDADE: todo este arquivo pode ser lido por quem acessar o site,
 * inclusive campos que não aparecem na página. Não coloque endereço,
 * telefone, documentos ou outras informações que queira manter privadas.
 * Reveja também data de nascimento, escola, nomes da família e fotos antes
 * de publicar. Peça autorização às pessoas que aparecem nas fotografias.
 * A indicação noindex no HTML não torna o site privado.
 */

const siteContent = {
  site: {
    titulo: "Arthur | Uma apresentação, com respeito",
    descricao: "Uma carta para os pais da Danielle sobre quem sou, o que quero construir e as intenções que prefiro demonstrar com atitudes.",
    nomeCurto: "Arthur",
    assinatura: "Arthur.",
    rodape: "Uma apresentação, feita com cuidado e respeito.",
  },

  destinatarios: {
    mae: "Selma Macedo",
    pai: "José Alípio",
  },

  navegacao: {
    sobre: "Sobre mim",
    familia: "Minha família",
    futuro: "Meu futuro",
    nos: "Nós",
    intencoes: "Minhas intenções",
  },

  interface: {
    menu: "Menu",
    fecharMenu: "Fechar",
    verProjeto: "Conhecer o projeto",
    voltarAoTopo: "Voltar ao início",
  },

  apresentacao: {
    abertura: "Uma carta aberta",
    nota: "Para nos conhecermos melhor",
    titulo: "Olá,\n[nomes].",
    subtitulo: "Talvez esta seja uma forma um pouco diferente de me apresentar.",
    descricao: "Mas a intenção é simples: que vocês conheçam um pouco de quem eu sou, do que quero para o futuro e do carinho que tenho pela filha de vocês.",
    botao: "Conheçam um pouco sobre mim",
    remetente: "De Arthur, com respeito.",
    rodape: "Sobre quem sou e o que quero construir",
  },

  sobreMim: {
    rotulo: "Antes de tudo, quem sou",
    titulo: "Um pouco de mim\ne do meu caminho.",
    nomeCompleto: "Arthur da Silva Mendes de Almeida",
    // Deixe idade vazia para calcular a partir do nascimento; ou escreva “17 anos”.
    // A data completa não é exibida, mas continua pública neste arquivo.
    // Para não compartilhá-la, apague nascimento e preencha idade manualmente.
    idade: "",
    nascimento: "30/05/2009",
    cidadeNascimento: "EDITAR",
    cidadeAtual: "EDITAR",
    escola: "CETEP II",
    curso: "Técnico em Informática integrado ao Ensino Médio",
    apresentacao: "Meu nome é [nomeCompleto]. Tenho [idade] e curso [curso] no [escola].",
    descricao: "Gosto de programação e de entender como as coisas funcionam. Tenho aprendido a criar programas e jogos, colocando em prática o que estudo. Também colaboro em projetos de outras pessoas, o que me ensina a trabalhar em conjunto e a aprender com quem tem mais experiência.\n\nAlém disso, estudo inglês. Ainda tenho muito a aprender, mas já sei que quero seguir uma profissão ligada à programação e estou me preparando para isso.",
    // Estas frases só aparecem quando os respectivos dados estão preenchidos.
    detalhes: {
      origem: "Nasci em [cidadeNascimento].",
      cidade: "Hoje, moro em [cidadeAtual].",
    },
    nota: "Quero cursar Engenharia de Software: aprender a planejar e criar programas que sejam úteis para as pessoas.",
    foto: {
      caminho: "assets/images/retrato.jpeg",
      alt: "Retrato de Arthur",
      posicao: "center", // Exemplo: "center 25%" para ajustar o enquadramento.
      legenda: "Prazer, Arthur.",
      reservaTitulo: "Meu retrato, aqui.",
      reservaTexto: "Um espaço para uma foto do meu jeito.",
    },
  },

  interesses: {
    rotuloProjetos: "Projetos",
  },

  // Adicione ou remova projetos copiando ou apagando um bloco completo.
  // Links vazios ou com EDITAR não geram um botão sem destino.
  projetos: [
    {
      nome: "Cyber Legacy",
      categoria: "Um jogo feito por mim",
      descricao: "Um jogo de computador que estou desenvolvendo, juntando meu interesse por jogos com o que aprendo em programação.",
      link: "EDITAR",
    },
    {
      nome: "Segundão System",
      categoria: "Organização da rotina escolar",
      descricao: "Um projeto do qual participo para ajudar minha turma a acompanhar atividades, avisos e horários em um só lugar.",
      link: "https://github.com/thurdass/Segundao-System",
    },
    {
      nome: "Bom Currículo",
      categoria: "Um projeto em que colaboro",
      descricao: "Contribuo com um projeto que está sendo desenvolvido para ajudar as pessoas a preparar seus currículos e se apresentar melhor ao buscar trabalho.",
      link: "https://github.com/thurdass/Bom-Curriculo",
    },
  ],

  caminho: {
    rotulo: "Para onde quero ir",
    titulo: "Um passo\nde cada vez.",
    descricao: "Não tenho todas as respostas sobre o futuro. Mas tenho uma direção e sei que chegar lá exige constância, estudo e trabalho.",
    nota: "Planos para orientar o caminho.\nE maturidade para ajustá-los.",
  },

  futuro: [
    {
      periodo: "Hoje",
      titulo: "Aprimorar meus conhecimentos",
      descricao: "Dedicar-me ao Ensino Médio e ao curso técnico, continuar estudando programação e inglês e colocar o aprendizado em prática.",
    },
    {
      periodo: "Próximo passo",
      titulo: "Buscar meu primeiro estágio",
      descricao: "Quero buscar um estágio durante o terceiro ano, aprender com profissionais e conhecer de perto as responsabilidades do trabalho.",
    },
    {
      periodo: "Faculdade",
      titulo: "Engenharia de Software",
      descricao: "Quero fazer essa faculdade para aprender a planejar, criar e melhorar programas de computador, preparando-me para trabalhar com programação.",
    },
    {
      periodo: "Mais adiante",
      titulo: "Independência e estabilidade",
      descricao: "Conseguir meu primeiro emprego em programação, construir uma carreira e aprender a cuidar da minha vida financeira para assumir responsabilidades maiores.",
    },
  ],

  familia: {
    rotulo: "Quem também faz parte da minha história",
    titulo: "Minha família.",
    descricao: "Para vocês me conhecerem um pouco melhor, também quero apresentar meus pais.",
    mae: {
      rotulo: "Minha mãe",
      nome: "Vania Aparecida da Silva",
      profissao: "Professora e escritora",
    },
    pai: {
      rotulo: "Meu pai",
      nome: "Aloizio Mendes de Almeida",
      profissao: "Enfermeiro",
    },
    foto: {
      caminho: "assets/images/pais.jpeg",
      alt: "Meus pais, Vania Aparecida da Silva e Aloizio Mendes de Almeida",
      posicao: "center",
      legenda: "Um registro da minha família.",
      reservaTitulo: "Um retrato da minha família.",
      reservaTexto: "Aqui, uma foto dos meus pais ou de nós juntos.",
    },
  },

  relacionamento: {
    rotulo: "Uma parte especial da história",
    titulo: "E então, a Danielle entrou na minha vida.",
    // Intencionalmente vazio: o texto provisório foi removido a seu pedido.
    comoConheci: "",
    foto: {
      caminho: "assets/images/juntos.jpg",
      alt: "Arthur e Danielle juntos",
      posicao: "center",
      legenda: "Um registro nosso.",
      detalhe: "Entre tantos momentos simples.",
      reservaTitulo: "Uma lembrança de nós dois.",
      reservaTexto: "Aqui, uma fotografia que conte um pouco da nossa história.",
    },
    rotuloSignificado: "O que ela significa para mim",
    tituloSignificado: "Carinho que vem\ncom admiração.",
    oQueElaSignifica: "Gosto de estar ao lado dela, de ouvir o que ela pensa e de dividir os momentos simples do dia. Meu carinho também passa por admirar a pessoa que ela é, com suas ideias, sua personalidade e seus próprios sonhos.\n\nQuero que nossa relação seja um lugar de confiança e companheirismo, em que os dois tenham espaço para ser quem são e continuar crescendo.",
    destaque: "Estar junto também é respeitar o caminho do outro.",
  },

  intencoes: {
    rotulo: "A parte mais importante desta carta",
    titulo: "Então, quais são\nminhas intenções\ncom a filha de vocês?",
    introducao: "Ter seriedade no que sinto.\nTer cuidado no que faço.",
    textoPrincipal: "Minhas intenções são sérias. Não quero brincar com os sentimentos dela ou tratar nossa relação como algo sem importância. Quero construir confiança com respeito, sinceridade e diálogo.\n\nQuero ser alguém com quem ela possa contar. Apoiar seus sonhos, respeitar suas escolhas e crescer ao lado dela, sem atrapalhar seus estudos, suas amizades ou o futuro que ela deseja para si.\n\nSei que ainda somos jovens e que amadurecer leva tempo. Não tenho como prometer uma vida sem dificuldades, mas posso escolher ouvir, conversar e assumir a responsabilidade pelas minhas atitudes.",
    tituloCasamento: "E sobre um futuro juntos?",
    casamento: "Se nossa história continuar crescendo da maneira que desejo, penso, sim, em construir uma família ao lado dela. Mas sei que coisas importantes não precisam ser apressadas.\n\nAntes disso, quero estudar, trabalhar, conquistar minha independência e me tornar capaz de assumir as responsabilidades que uma família exige. Esse futuro também precisa fazer sentido para ela e ser uma escolha dos dois.",
  },

  principios: {
    rotulo: "Das palavras para as atitudes",
    titulo: "O que vocês\npodem esperar\nde mim.",
    descricao: "Mais do que uma boa apresentação, quero que estes princípios apareçam no dia a dia.",
  },

  compromissos: [
    {
      titulo: "Respeito",
      descricao: "Pela filha de vocês, pelas escolhas e pelos limites dela. Pela família de vocês e pela confiança que se constrói aos poucos.",
    },
    {
      titulo: "Diálogo",
      descricao: "Disposição para ouvir, conversar com honestidade e resolver as diferenças com calma, inclusive quando a conversa for difícil.",
    },
    {
      titulo: "Apoio",
      descricao: "Incentivo aos estudos, aos sonhos e às conquistas dela. Quero somar à sua vida e respeitar o espaço de que ela precisa para crescer.",
    },
    {
      titulo: "Responsabilidade",
      descricao: "Cuidado com minhas escolhas, compromisso com meus estudos e coragem para reconhecer meus erros e procurar fazer melhor.",
    },
  ],

  mensagemFinal: {
    rotulo: "Uma conversa que começa aqui",
    titulo: "Uma última mensagem.",
    texto: "Eu sei que confiança não é conquistada através de um site.\n\nFiz isso apenas para que vocês pudessem conhecer um pouco melhor quem eu sou, o que quero para minha vida e quais são minhas intenções com a filha de vocês.\n\nNão espero que estas palavras sejam suficientes. Espero que, com o tempo, minhas atitudes confirmem cada uma delas.",
    destaque: "Porque respeito\nse demonstra.",
    despedida: "Com respeito,",
  },
};
