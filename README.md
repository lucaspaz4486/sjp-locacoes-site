# 🏗️ SJP Locações - Plataforma de Aluguel de Equipamentos

Uma Single Page Application (SPA) moderna e responsiva desenvolvida para catalogar e facilitar o orçamento de máquinas e equipamentos para construção civil. O foco deste projeto é **alta performance**, **acessibilidade (A11y)** e **excelente Experiência do Usuário (UX)**.

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)

## ✨ Principais Funcionalidades

* **Arquitetura Standalone & Zoneless:** Desenvolvido sem a dependência do `Zone.js` (`provideZonelessChangeDetection`), utilizando a estratégia de detecção de mudanças `OnPush` para máxima otimização de renderização.
* **Sistema de Temas Dinâmico (Theming):** Alternância instantânea entre os modos **Claro, Escuro e Sépia**, construído com variáveis nativas do CSS (`:root`) sem vazamento de escopo.
* **Filtro Avançado Customizado (Custom Pipe):** Sistema de busca multi-campo que ignora formatações e acentuação (Normalização NFD) para uma busca à prova de erros tipográficos.
* **Layout Fluido & Mobile First:** Construído com CSS Grid e Flexbox nativos, garantindo adaptação perfeita em qualquer resolução (Desktop, Tablet e Mobile).
* **Navegação SPA Otimizada:** Restauração inteligente da posição de rolagem (Scroll Restoration) via Angular Router para navegação orgânica.
* **Integração de Mídia rica:** Hero section utilizando vídeos 3D em loop como background de alta performance.
* **Conversão Direta:** Floating Action Button (FAB) com mensagem pré-formatada integrada à API nativa do WhatsApp.

## 🛠️ Tecnologias Utilizadas

* **Framework:** Angular 17+ (Standalone Components)
* **Linguagem:** TypeScript
* **Estilização:** SCSS / Variáveis CSS / CSS Grid
* **Ícones:** FontAwesome
* **Deploy & Hospedagem:** Netlify
* **CI/CD:** GitHub Actions

## 🚀 Como executar o projeto localmente

### Pré-requisitos
* Node.js (versão 18 ou superior)
* Angular CLI instalado globalmente (`npm install -g @angular/cli`)

### Passos para instalação

1. Clone o repositório:

        git clone [https://github.com/lucaspaz4486/sjp-locacoes-site.git](https://github.com/lucaspaz4486/sjp-locacoes-site.git)

2. Acesse a pasta do projeto:

        cd sjp-locacoes-site

3. Instale as dependências:

        npm install

4. Inicie o servidor de desenvolvimento:

        ng serve

5. Abra o navegador e acesse: `http://localhost:4200`

## ⚙️ Integração Contínua e Deploy (CI/CD)

Este projeto possui uma esteira de deploy automatizada configurada via **GitHub Actions**. 

Sempre que um novo código é enviado para a branch `main`, o pipeline (`main.yml`) realiza automaticamente os seguintes passos:
1. Faz o checkout do código.
2. Configura o ambiente Node.js (v20).
3. Instala as dependências (`npm install`).
4. Executa os testes automatizados em ambiente *Headless* para garantir a integridade da aplicação.
5. Gera a *build* de produção otimizada (`ng build`).
6. Realiza o deploy do artefato gerado diretamente para o **Netlify**.

## 👨‍💻 Autor

**Lucas da Silva Paz**
* Desenvolvedor Web
* [LinkedIn](https://www.linkedin.com/in/lucas-da-silva-paz-7b752b214)
* [GitHub](https://github.com/lucaspaz4486)
* E-mail: lucaspaz4486@gmail.com

---
*© 2026 SJP Locações. Todos os direitos reservados.*