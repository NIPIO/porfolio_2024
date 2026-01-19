export default {
  header: [
    { title: "Experiência", section: "experiencia", url: "#experiencia" },
    { title: "Projetos", section: "proyectos", url: "#proyectos" },
    { title: "Sobre mim", section: "sobre-mi", url: "#sobre-mi" },
    { title: "Currículo", url: "/CV_NICO_PIOVANO_2024.pdf", download: true }
  ],
  personal: {
    title: "Desenvolvedor Fullstack",
    subtitle: "+7 anos de experiência.",
    badge: "Disponível para trabalhar",
  },
  projects: {
    title: "Projetos",
    code: "Código",
    preview: "Preview",
    items: [
      {
        title: "ChatQuasar - Chat ao vivo!",
        description: "Chat desenvolvido com o que há de mais recente em Vue (Quasar). Múltiplos usuários podem conversar no mesmo chat. Login e autenticação com Gmail e Firebase. Criado do zero com Quasar."
      },
      {
        title: "App de Clima",
        description: "Aplicação conectada a duas APIs (cidades e clima) para consultar clima atual, diário e semanal. Possui histórico de buscas. Criada do zero com Vue e Tailwind CSS."
      }
    ]
  },
  experience: {
    title: "Experiência profissional",
    learning: "Aprendizados:",
    items: [
      {
        date: "Ago. 2024 - Atual",
        title: "Desenvolvedor Web Fullstack",
        company: "Servicios Computables S.A.",
        usos: ['Vue', 'Laravel', 'Docker', 'MySQL'],
        description: "Desenvolvimento de sistemas para diferentes municípios da República Argentina.",
        aprendizajes: "Aprimoramento de tecnologias frontend. Reutilização de componentes e estados no Vue. Melhoria no uso de Docker."
      },
      {
        date: "Jun. 2021 - Abr. 2023",
        title: "Desenvolvedor Web Fullstack",
        company: "Servicios Computables S.A.",
        usos: ['React', 'Laravel', 'Docker', 'MySQL'],
        description: "Desenvolvimento de sistemas para diferentes municípios da República Argentina.",
        aprendizajes: "Desenvolvimento pessoal e profissional em frontend. Gerenciamento de estados e hooks do React. Desenvolvimento de testes unitários."
      },
      {
        date: "Nov. 2020 - Mai. 2021",
        title: "Desenvolvedor Web Backend",
        company: "Creative Coefficient",
        usos: ['Prestashop', 'React', 'Docker'],
        description: "Desenvolvimento conjunto de painel administrativo de um sistema de milhas reconhecido internacionalmente (Smiles).",
        aprendizajes: "Gerenciamento de CMS, comunicação direta com clientes dos Estados Unidos através de reuniões diárias em inglês."
      },
      {
        date: "Dez. 2018 - Jan. 2021",
        title: "Desenvolvedor Web Fullstack",
        company: "CNRT (Ministério de Transporte)",
        usos: ['Symfony', 'AngularJS', 'Angular', 'MySQL'],
        description: "Manutenção e desenvolvimento de sistemas internos e externos para transportes públicos de curta e longa distância.",
        aprendizajes: "Início como Trainee. De linguagem pura a Frameworks. Base sólida em segurança, arquitetura de dados e otimização de consultas SQL."
      }
    ]
  },
  aboutMe: {
    title: "Sobre mim 😉",
    paragraphs: [
      {
        before: "Iniciei minha carreira em programação em 2016 ",
        strong: "desenvolvendo com paciência, confiança e uma abordagem resolutiva",
        after: " diante dos desafios propostos."
      },
      {
        before: "Adapto-me rapidamente a novas tecnologias e projetos e sempre busco ",
        strong: "soluções pragmáticas",
        after: " que permitam avançar de forma eficaz, inclusive em ambientes desafiadores."
      },
      {
        before: "Além disso, viajei e vivi em vários países da América Latina enquanto trabalhava em hostels, o que fortaleceu minhas ",
        strong: "habilidades sociais, adaptabilidade e capacidade de colaborar",
        after: " com equipes diversas."
      },
      {
        before: "Meus objetivos atuais incluem expandir no âmbito freelance e aplicar minha ",
        strong: "abordagem resolutiva e adaptável",
        after: " para gerar resultados concretos em cada projeto."
      }
    ]
  },
  
  footer: {
    developed: "Desenvolvido com",
    downloadCV: "Baixar CV 2026"
  },
  browserModal: {
    title: "Recomendação de Navegador",
    message: "Esta página contém efeitos visuais 3D que funcionam melhor no Mozilla Firefox.",
    recommendation: "Para uma experiência ideal, recomendo usar o Firefox.",
    downloadFirefox: "Baixar Firefox",
    continue: "Continuar"
  },
  seo: {
    title: "Portfólio de Nico Piovano - Desenvolvedor Web com +7 anos de experiência",
    description: "Contrate Nico para criar sua aplicação web ou mobile."
  },
  chat: {
    title: "Assistente profissional",
    subtitle: "Escolha uma pergunta para continuar",
    greeting: "Olá 👋 Sou o Nico. O que você gostaria de saber?",
    initialBadges: [
      "Qual é sua experiência?",
      "Com quais tecnologias você trabalha?",
      "Como é sua forma de trabalho?",
      "Você está disponível para projetos?"
    ]
  }
}
