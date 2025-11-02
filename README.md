ONG Vida Nova: Plataforma Web - Educação e Sustentabilidade

🌟 Visão Geral do Projeto

Este repositório contém o código-fonte da Plataforma Web da ONG Vida Nova, uma iniciativa focada em educação e sustentabilidade. O projeto foi desenvolvido com um forte foco em qualidade de código, acessibilidade e otimização para produção, seguindo as melhores práticas do mercado.

A plataforma é uma aplicação web estática (HTML, CSS e JavaScript puro) que visa ser o principal ponto de contato online para a ONG, permitindo a divulgação de projetos, captação de voluntários e, potencialmente, recebimento de doações.

🚀 Funcionalidades Principais

A plataforma é composta por três páginas principais, cada uma com um propósito específico:

Página
Arquivo
Descrição
Página Inicial
index.html
Apresentação da ONG, sua missão, visão e valores. Serve como a porta de entrada para o usuário.
Projetos e Doações
projetos.html
Detalhes sobre os projetos de educação e sustentabilidade da ONG, com chamadas para ação para doações.
Cadastro de Voluntário
cadastro.html
Formulário dedicado para o registro de novos voluntários, com foco em acessibilidade e usabilidade.


✨ Destaques Técnicos

O projeto foi construído com ênfase nas seguintes práticas técnicas:

1. Acessibilidade (WCAG 2.1 Nível AA)

A acessibilidade foi uma prioridade, garantindo que a plataforma seja utilizável por pessoas com deficiência. As principais implementações incluem:

•
Navegação por Teclado: Todos os elementos interativos são navegáveis usando a tecla Tab.

•
Estrutura Semântica: Uso correto de tags HTML5 (<header>, <main>, <footer>, <nav>, <section>, <article>) para melhor interpretação por leitores de tela.

•
Modo de Alto Contraste: Funcionalidade ativada por atalho de teclado (Ctrl+H) para garantir o contraste mínimo de 4.5:1 exigido pela WCAG 2.1.

•
Suporte para Leitores de Tela: Implementação de atributos ARIA e um skip-link para pular o menu de navegação.

•
Modo Escuro Acessível: Uso de prefers-color-scheme no CSS para oferecer uma alternativa de baixo brilho para usuários sensíveis à luz.

2. Otimização para Produção

Para garantir um carregamento rápido e eficiente, o projeto passa por um processo de otimização de assets:

Otimização
Ferramenta Utilizada
Benefício
Minificação de CSS
clean-css-cli
Redução do tamanho dos arquivos CSS (style.min.css).
Minificação de JavaScript
uglify-js
Remoção de espaços e comentários do main.js (main.min.js).
Minificação de HTML
html-minifier
Remoção de espaços, comentários e atributos redundantes nos arquivos HTML.
Compressão de Imagens
ImageMagick (via convert)
Otimização de metadados e redução do tamanho de imagens JPG.


3. Controle de Versão e Versionamento Semântico

O projeto utiliza Git para controle de versão e segue a metodologia GitFlow para a gestão de branches.

•
Commits Semânticos: A convenção de commits semânticos é adotada para manter um histórico claro e facilitar o versionamento (e.g., feat:, fix:, perf:).

•
Versionamento Semântico (SemVer): O versionamento segue o formato MAJOR.MINOR.PATCH.

🛠️ Estrutura do Projeto

A estrutura de diretórios reflete a organização de um projeto web estático otimizado:

Plain Text


.
├── assets/
│   ├── css/
│   │   ├── style.min.css         # CSS minificado para produção
│   │   └── (demais arquivos .css originais)
│   ├── images/                   # Imagens otimizadas
│   └── js/
│       └── main.min.js           # JS minificado para produção
├── cadastro.html                 # Página de cadastro de voluntário (Versão de desenvolvimento)
├── index.html                    # Página inicial (Versão de desenvolvimento)
├── projetos.html                 # Página de projetos e doações (Versão de desenvolvimento)
├── dist/                         # Diretório de build para deploy (contém os arquivos minificados)
│   ├── cadastro.html
│   ├── index.html
│   ├── projetos.html
│   └── assets/
├── package.json                  # Configuração do pnpm e scripts de otimização
├── pnpm-lock.yaml                # Lockfile do pnpm
└── README.md                     # Este arquivo


⚙️ Como Executar o Projeto

O projeto é uma aplicação web estática e pode ser executado diretamente no navegador.

Pré-requisitos

Para rodar os scripts de otimização e build, você precisará ter o Node.js e o gerenciador de pacotes pnpm instalados.

•
Node.js (versão LTS recomendada)

•
pnpm

Instalação

1.
Clone o repositório:

2.
Instale as dependências de desenvolvimento (necessárias para os scripts de otimização):

Build para Produção

Para gerar a versão otimizada e minificada do projeto (os arquivos que devem ser enviados para o servidor), execute o script de build:

Bash


pnpm run build


Este comando irá:

1.
Minificar o CSS e o JavaScript.

2.
Comprimir as imagens.

3.
Minificar os arquivos HTML.

4.
Colocar todos os assets prontos para produção no diretório dist/.

Execução Local

Para visualizar o projeto em seu ambiente local, você pode usar um servidor web simples. Se você tiver o Python instalado, pode usar o módulo http.server:

Bash


# Navegue até o diretório da versão de produção
cd dist
# Inicie o servidor
python3 -m http.server 8000


Em seguida, abra seu navegador e acesse http://localhost:8000.

🤝 Contribuição

Agradecemos o seu interesse em contribuir! Siga as diretrizes abaixo:

1.
Faça um fork do projeto.

2.
Crie uma nova branch para sua feature (git checkout -b feature/nome-da-feature).

3.
Faça suas alterações e garanta que os commits sigam a Convenção de Commits Semânticos.

4.
Execute o build de produção para garantir que não há erros (pnpm run build).

5.
Envie suas alterações e abra um Pull Request para a branch develop.

📄 Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo LICENSE para mais detalhes.

📞 Contato

Para dúvidas ou sugestões, entre em contato com a equipe de desenvolvimento.




Desenvolvido por Manus AI

