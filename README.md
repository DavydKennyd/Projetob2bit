# Documentação do Código
## Descrição do Projeto
Este projeto consiste em um sistema de login e perfil de usuário desenvolvido em React e TypeScript. Ele inclui componentes para exibir um formulário de login, gerenciar o estado de autenticação e exibir informações do perfil do usuário após o login bem-sucedido. Abaixo está a documentação dos principais componentes e funcionalidades do projeto.

## Estrutura do Projeto
- App.tsx: Componente principal que gerencia as rotas e o estado de autenticação.
- LoginForm.tsx: Componente de formulário de login que lida com a autenticação do usuário.
- UserProfile.tsx: Componente que exibe o perfil do usuário após o login.
## Requisitos Funcionais
Os requisitos funcionais são definidos no formato de uma história do SCRUM, dividida em três partes: who, what, e why.

- História 1: Login de Usuário
Who: Como um usuário não autenticado,
What: eu quero fazer login no sistema,
Why: para acessar minhas informações de perfil e funcionalidades restritas.
- História 2: Exibição do Perfil do Usuário
Who: Como um usuário autenticado,
What: eu quero ver minhas informações de perfil,
Why: para confirmar que estou logado e visualizar meus dados pessoais.
## Componentes
### App.tsx
- Descrição: O componente App gerencia o estado de autenticação e as rotas da aplicação. Utiliza useState para armazenar o token de autenticação e useEffect para recuperar o token armazenado no localStorage. Define duas rotas: uma para o login (/login) e outra para o perfil do usuário (/).
### LoginForm.tsx
- Descrição: O componente LoginForm gerencia o formulário de login. Utiliza useState para armazenar os valores de email, senha e possíveis erros. O método handleSubmit autentica o usuário e, em caso de sucesso, armazena o token e navega para a página de perfil. Em caso de erro, exibe uma mensagem de erro.
### UserProfile.tsx
- Descrição: O componente UserProfile exibe as informações do perfil do usuário. Utiliza useState para armazenar o perfil, a imagem do perfil e possíveis erros. Utiliza useEffect para buscar o perfil do usuário e carregar a imagem do perfil. Possui um botão de logout que limpa o token de autenticação e redireciona para a página de login.


## Estrutura do Projeto
```bash
    ├── public
    │ ├── index.html
    │ └── ...
    ├── src
    │ ├── components
    │ │ ├── LoginForm.css
    │ │ ├── LoginForm.js
    │ │ ├── LoginForm.tsx
    │ │ ├── UserProfile.css
    │ │ ├── UserProfile.js
    │ │ ├── UserProfile.tsx
    │ │ └── ...
    │ ├── api
    │ │ ├── api.d.ts
    │ │ ├── api.js
    │ │ └── index.ts
    │ ├── App.css
    │ ├── App.js
    │ ├── App.test.js
    │ ├── App.tsx
    │ ├── declarations.d.ts
    │ ├── index.css
    │ ├── index.js
    │ ├── index.tsx
    │ ├── logo.svg
    │ ├── reportWebVitals.js
    │ └── setupTest.js
    └── package.json


## Descrição dos Diretórios e Arquivos

### public
- **index.html**: Arquivo HTML principal do projeto.

### src
- **components**: Diretório contendo componentes reutilizáveis.
  - **LoginForm.css**: Estilos para o componente LoginForm.
  - **LoginForm.js**: Componente LoginForm em JavaScript.
  - **LoginForm.tsx**: Componente LoginForm em TypeScript.
  - **UserProfile.css**: Estilos para o componente UserProfile.
  - **UserProfile.js**: Componente UserProfile em JavaScript.
  - **UserProfile.tsx**: Componente UserProfile em TypeScript.

- **api**: Diretório contendo arquivos relacionados à API.
  - **api.d.ts**: Declarações TypeScript para a API.
  - **api.js**: Código JavaScript para a API.
  - **index.ts**: Ponto de entrada TypeScript para a API.

- **App.css**: Estilos para o componente principal do aplicativo.
- **App.js**: Componente principal do aplicativo em JavaScript.
- **App.test.js**: Testes para o componente principal do aplicativo.
- **App.tsx**: Componente principal do aplicativo em TypeScript.
- **declarations.d.ts**: Arquivo de declarações TypeScript.
- **index.css**: Estilos globais do projeto.
- **index.js**: Ponto de entrada do aplicativo em JavaScript.
- **index.tsx**: Ponto de entrada do aplicativo em TypeScript.
- **logo.svg**: Logo do projeto.
- **reportWebVitals.js**: Arquivo para medir a performance do aplicativo.
- **setupTest.js**: Configurações para os testes.

### package.json
Arquivo de configuração do npm, contendo dependências e scripts do projeto.


## Instalação e Configuração
Siga os passos abaixo para configurar e executar o projeto localmente.

### Pré-requisitos
- Node.js (v14 ou superior)
- npm (v6 ou superior) ou yarn (v1.22 ou superior)

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu_usuario/seu_repositorio.git
   cd seu_repositorio


2. Instale as dependências:
    ```bash
    npm install
    # ou
    yarn install
    ```

3. Configure as variáveis de ambiente no arquivo `.env` (se necessário).

4. Inicie a aplicação:
    ```bash
    npm start
    # ou
    yarn start
    ```

5. Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver a aplicação.

### Login
1. Acesse a página de login em [http://localhost:3000/login](http://localhost:3000/login).
2. Insira seu e-mail e senha.
3. Clique em "Sign In".
4. Se as credenciais estiverem corretas, você será redirecionado para a página de perfil.

### Perfil de Usuário
1. Após fazer login, você será redirecionado para a página de perfil.
2. Aqui você verá seu avatar, nome e e-mail.
3. Você pode sair da sua conta clicando no botão "Logout".

## Tecnologias Utilizadas
- React
- TypeScript
- React Router
- Axios
- CSS

## Feito Por
- Davyd Kennyd 
