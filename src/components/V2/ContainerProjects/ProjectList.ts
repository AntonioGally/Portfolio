import img_communitiess from "../../../img/material/img_communitiess.png";
export default function ListProjetcsModal() {
  return [
    {
      Title: "Quem Vai",
      Link: "https://github.com/AntonioGally/QuemVai_Front-End",
      Text:
        "Existem vários aplicativos de encontro disponíveis no mercado hoje em dia, mas nós queríamos algo mais. Por meio do aplicativo Quem Vai, nós democratizamos a busca e o uso de áreas de lazer, ciente que a maior plataforma de mapas que nós temos (google maps) não nos informa com especificidade todas as áreas de lazer dispníveis nas regiões próximas, e suas características.",
      Image:
        "https://raw.githubusercontent.com/AntonioGally/QuemVai_Front-End/AplicationWeb/src/img/logo/QuemVaiLogo2.png",
      Tecnology: [
        "React JS",
        "Typescript",
        "Firebase",
        "Framer Motion",
        "Material UI",
        "Bootstrap",
        "React Hook Form",
        "Styled Components",
      ],
    },
    {
      Title: "Esse Site",
      Link: "https://github.com/AntonioGally/Portfolio",
      Text:
        "Fiz esse portfólio porque precisava de uma plataforma para postar meus projetos futuros, sei que existe o GitHub, mas essa plataforma é mais voltada para Devs. Quanto ao design do portfólio, me inspirei em vários na internet, e fiz o meu com algumas modificações. Este portfólio conta com uma área de administração que me auxilia a postar novos projetos, gerenciar as mensagens recebidas e trabalhar na escalabilidade do projeto pensando em dados estatísticos",
      Image:
        "https://raw.githubusercontent.com/AntonioGally/Portfolio/master/src/img/logo/logoWhite.png",
      Tecnology: [
        "React JS",
        "Typescript",
        "Firebase",
        "Framer Motion",
        "Material UI",
        "Bootstrap",
        "Styled Components",
        "Styked Icons",
        "React Hook Form",
        "React Router Doom",
      ],
    },
    {
      Title: "Abecedário",
      Link: "https://abecedario.apliqueducacao.com.br",
      Text:
        "O aplicativo foi desenvolvido com foco no auxílio da alfabetização infantil. Ele possui três páginas explicativas: som das letras, tipos de letra contendo ilustração de palavras e a principal função que é a ilustração da grafia das letras, onde a criança consegue aprender a escrever observando a animação de gafria. Foi feita em conjunto da startUp ApliquEducação.",
      Image:
        "https://abecedario.apliqueducacao.com.br/static/media/logoAplique.ff0ca692.png",
      Tecnology: [
        "React JS",
        "Typescript",
        "Framer Motion",
        "Material UI",
        "Styled Components",
        "Howler",
      ],
    },
    {
      Title: "nasa_api's",
      Link: "https://nasapis.netlify.app/#/",
      Text:
        "A ideia nasceu a partir do fato de que a NASA disponibiliza várias API's públicas com informações úteis para a comunidade científica e tais API's são pouco conhecidas pela falta de acessibilidade ou falta de conhecimento necessário para utilizá-las, então fiz uma ferramenta para auxiliar esse processo de utilização",
      Image:
        "https://logodownload.org/wp-content/uploads/2019/03/nasa-logo-0-599x599.png",
      Tecnology: [
        "React JS",
        "Typescript",
        "react-bootstrap",
        "Material UI",
        "Styled Components",
        "axios",
        "react-chartjs-2",
        "react-hook-form",
        "react-router-dom",
        "react-tsparticles",
        "react-scroll",
      ],
    },
    {
      Title: "Communitiess",
      Link: "https://github.com/AntonioGally/communitiess",
      Text:
        "Communitiess é um projeto feito em conjunto com um Designer e um Developer Backend, programado em React Native utilizando JavaScript ",
      Image: img_communitiess,
      Tecnology: [
        "React Native",
        "JavaScript",
        "react-navigation",
        "expo",
        "Styled Components",
        "lottie",
      ],
    },
  ];
}

export function ListProject() {
  return [
    {
      title: "Quem Vai",
      text01:
        " O ”Quem Vai” é uma aplicação web voltada a fomentar o lazer principalmente para os mais jovens.",
      text02:
        "Dentro do projeto, fui responsável por trabalhar junto com uma equipe e desenvolver o Front-end da aplicação em React.",
    },
    {
      title: "Abecedário",
      text01:
        "Esse app foi feito com o objetivo auxiliar os professores na alfabetização infantil, principalmente via EAD.",
      text02:
        "Foi desenvolvido em conjunto com um time de designers e pedagogas, fazendo com que o aplicativo tenha uma base sólida.",
    },
    {
      title: "nasa_api's",
      text01:
        "🛰️ Nasa API's - é uma ferramenta feita em React usando TypeScript como linguagem de programação.",
      text02:
        "Tem como o objetivo usar algumas das API's fornecidas pela NASA para extrair dados interessantes sobre o universo.",
    },
    {
      title: "Communitiess",
      text01:
        "Communitiess é um projeto de rede social com o intuito de facilitar o acesso à informações por meio de comunidades",
      text02:
        "Inicialmente foi planejada para ser apenas um aplicativo mobile feito em React Native usando JavaScript como linguagem de programação.",
    },
  ];
}
