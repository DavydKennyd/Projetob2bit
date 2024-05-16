"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const api_1 = require("../api");
const react_router_dom_1 = require("react-router-dom"); // Importando useHistory do React Router
require("./LoginForm.css");
const LoginForm = ({ onLoginSuccess }) => {
    const [email, setEmail] = (0, react_1.useState)('');
    const [password, setPassword] = (0, react_1.useState)('');
    const [error, setError] = (0, react_1.useState)('');
    const navigate = (0, react_router_dom_1.useNavigate)(); // Inicializando useNavigate
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Attempting to login with', email, password);
        (0, api_1.login)(email, password)
            .then(data => {
            console.log('Dados do usuarios aqui', data);
            onLoginSuccess(data.token);
            navigate('/profile'); // Redirecionando para a página de perfil
            console.log('Aqui está a informação do token', data.token);
        })
            .catch(err => {
            console.log('Está ocorrendo um erro na autenticação', err);
            setError('Invalid email or password');
        });
    };
    return ((0, jsx_runtime_1.jsx)("div", { className: "center-container", children: (0, jsx_runtime_1.jsxs)("div", { className: "login-container", children: [(0, jsx_runtime_1.jsxs)("div", { className: "logo", children: [(0, jsx_runtime_1.jsx)("span", { className: "blue", children: "b2b" }), (0, jsx_runtime_1.jsx)("span", { className: "yellow", children: "It" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "login-form", children: [(0, jsx_runtime_1.jsxs)("form", { onSubmit: handleSubmit, children: [(0, jsx_runtime_1.jsxs)("div", { className: "form-group", children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "email", children: (0, jsx_runtime_1.jsx)("strong", { children: "E-mail:" }) }), (0, jsx_runtime_1.jsx)("input", { type: "email", id: "email", name: "email", placeholder: "@Gmail.com", required: true, value: email, onChange: (e) => setEmail(e.target.value) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "form-group", children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "password", children: (0, jsx_runtime_1.jsx)("strong", { children: "Password:" }) }), (0, jsx_runtime_1.jsx)("input", { type: "password", id: "password", name: "password", placeholder: "***************", required: true, value: password, onChange: (e) => setPassword(e.target.value) })] }), (0, jsx_runtime_1.jsx)("button", { type: "submit", children: "Sign In" })] }), error && (0, jsx_runtime_1.jsx)("p", { className: "error", children: error })] })] }) }));
};
exports.default = LoginForm;
