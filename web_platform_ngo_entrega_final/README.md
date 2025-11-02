# ONG Vida Nova: Plataforma Web

## Entrega IV: Versionamento, Acessibilidade e Deploy

Este projeto é a consolidação de uma plataforma web desenvolvida para a ONG Vida Nova, focada em **educação e sustentabilidade**. A Entrega IV abrange a implementação de práticas profissionais de **Controle de Versão (Git/GitHub)**, **Acessibilidade (WCAG 2.1 Nível AA)** e **Otimização para Produção**, conforme as especificações técnicas.

---

## 1. Controle de Versão e Processo de Desenvolvimento

O projeto utiliza o **Git** para controle de versão e segue a metodologia **GitFlow** para a gestão de branches, garantindo um fluxo de trabalho organizado e escalável.

### 1.1. Estratégia de Branching (GitFlow)

- **`main`**: Branch de produção. Contém o código estável e pronto para deploy.
- **`develop`**: Branch de integração. Contém o histórico completo do projeto e é o branch base para novas funcionalidades.
- **`feature/`**: Branches para o desenvolvimento de novas funcionalidades. Exemplo: `feature/feat-acessibilidade-wcag`.
- **`release/`**: Branches para preparação de novas versões de produção.
- **`hotfix/`**: Branches para correções urgentes em produção (`main`).

### 1.2. Histórico de Commits Semânticos

Adotamos a convenção de **Commits Semânticos** para manter o histórico claro e facilitar a geração de changelogs e o versionamento.

| Tipo | Descrição | Exemplo |
| :--- | :--- | :--- |
| **feat** | Nova funcionalidade. | `feat: Implementa modo de alto contraste para WCAG` |
| **fix** | Correção de um bug. | `fix: Corrige erro de validação do campo CPF` |
| **perf** | Alteração de código que melhora a performance. | `perf: Minificação de assets para produção` |
| **chore** | Alterações na build, ferramentas ou tarefas de manutenção. | `chore: Adiciona .gitignore e configura pnpm` |
| **docs** | Alterações na documentação (README, etc). | `docs: Atualiza documentação da Entrega IV` |
| **style** | Alterações que não afetam o significado do código (espaços, formatação, etc). | `style: Padroniza identação em arquivos HTML` |

### 1.3. Sistema de Releases

O versionamento segue o **Versionamento Semântico (SemVer)** no formato `MAJOR.MINOR.PATCH`.

- **PATCH**: Para correções de bugs (`fix`).
- **MINOR**: Para novas funcionalidades retrocompatíveis (`feat`).
- **MAJOR**: Para mudanças incompatíveis com versões anteriores.

---

## 2. Acessibilidade (WCAG 2.1 Nível AA)

Foram implementadas diversas melhorias para garantir a conformidade com o Nível AA das Diretrizes de Acessibilidade para Conteúdo Web (WCAG 2.1).

| Requisito | Implementação | Benefício |
| :--- | :--- | :--- |
| **Navegação por Teclado** | Elementos interativos (links, botões, campos) são navegáveis com `Tab`. O foco visual é mantido por padrão do navegador. | Usuários que dependem de teclado ou dispositivos de entrada alternativos. |
| **Estrutura Semântica** | Uso correto de tags HTML5 (`<header>`, `<main>`, `<footer>`, `<nav>`, `<section>`, `<article>`) e títulos (`<h1>` a `<h6>`). | Melhora a compreensão do conteúdo por leitores de tela. |
| **Contraste Mínimo** | Implementação de um **Modo de Alto Contraste** (ativado por `Ctrl+H` e CSS `high-contrast`) para garantir o contraste de 4.5:1 exigido para texto normal. | Usuários com baixa visão ou daltonismo. |
| **Suporte para Leitores de Tela** | Uso de atributos **ARIA** (`aria-label`, `aria-expanded`, `aria-controls`, `role="button"`, `role="alert"`) e `skip-link` para pular o menu de navegação. | Usuários cegos ou com deficiência visual. |
| **Modo Escuro Acessível** | Implementação de um Dark Mode via `prefers-color-scheme` no CSS, oferecendo uma alternativa de baixo brilho. | Usuários sensíveis à luz. |

---

## 3. Otimização para Produção

O projeto foi otimizado para reduzir o tempo de carregamento e o consumo de banda.

| Otimização | Ferramenta Utilizada | Resultado |
| :--- | :--- | :--- |
| **Minificação de CSS** | `clean-css-cli` | Redução do tamanho dos arquivos CSS (Ex: `style.min.css`). |
| **Minificação de JavaScript** | `uglify-js` | Remoção de espaços e comentários do `main.js` (Ex: `main.min.js`). |
| **Minificação de HTML** | `html-minifier` | Remoção de espaços, comentários e atributos redundantes nos arquivos HTML. |
| **Compressão de Imagens** | `ImageMagick` (via `convert`) | Redução da qualidade e otimização de metadados das imagens JPG. |

---

## 4. Estrutura do Projeto

```
.
├── assets/
│   ├── css/
│   │   ├── style.min.css         # CSS minificado para produção
│   │   └── (demais arquivos .css originais)
│   ├── images/                   # Imagens otimizadas
│   └── js/
│       └── main.min.js           # JS minificado para produção
├── cadastro.html                 # Página de cadastro de voluntário
├── index.html                    # Página inicial
├── projetos.html                 # Página de projetos e doações
├── dist/                         # Diretório de build para deploy (com arquivos minificados)
├── package.json                  # Configuração do pnpm para otimização
├── pnpm-lock.yaml                # Lockfile do pnpm
└── README.md                     # Este arquivo
```
