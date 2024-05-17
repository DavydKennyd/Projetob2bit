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
1- App.tsx
- Descrição: O componente App gerencia o estado de autenticação e as rotas da aplicação. Utiliza useState para armazenar o token de autenticação e useEffect para recuperar o token armazenado no localStorage. Define duas rotas: uma para o login (/login) e outra para o perfil do usuário (/).
2- LoginForm.tsx
- Descrição: O componente LoginForm gerencia o formulário de login. Utiliza useState para armazenar os valores de email, senha e possíveis erros. O método handleSubmit autentica o usuário e, em caso de sucesso, armazena o token e navega para a página de perfil. Em caso de erro, exibe uma mensagem de erro.
3- serProfile.tsx
- Descrição: O componente UserProfile exibe as informações do perfil do usuário. Utiliza useState para armazenar o perfil, a imagem do perfil e possíveis erros. Utiliza useEffect para buscar o perfil do usuário e carregar a imagem do perfil. Possui um botão de logout que limpa o token de autenticação e redireciona para a página de login.


## Estrutura do Projeto
.
├── public
│ ├── index.html
│ └── ...
├── src
│ ├── components
│ │ ├── LoginForm.tsx
│ │ ├── UserProfile.tsx
│ │ └── ...
│ ├── api
│ │ └── index.ts
│ ├── App.tsx
│ ├── index.tsx
│ └── ...
└── package.json

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


2.Instale as dependências:
    ```bash
    npm install
    # ou
    yarn install
    ```

3.Configure as variáveis de ambiente no arquivo `.env` (se necessário).

4.Inicie a aplicação:
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

## Estrutura do Código

### `LoginForm.tsx`
Este componente é responsável por renderizar o formulário de login, capturar as credenciais do usuário e realizar a autenticação.

### `UserProfile.tsx`
Este componente é responsável por buscar e exibir as informações de perfil do usuário autenticado, incluindo o avatar.

### `App.tsx`
Este é o componente principal que gerencia as rotas e o estado de autenticação do usuário.

### `api/index.ts`
Este módulo contém funções para se comunicar com a API de autenticação e perfil.

## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## Licença
Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
Screenshots (Opcional)