"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const api_1 = require("../api");
const react_router_dom_1 = require("react-router-dom");
require("./LoginForm.css");
const logoUrl = "https://github.com/DavydKennyd/icone_perfil/blob/main/B2Bit%20Logo.png?raw=true"; // URL da imagem online
const LoginForm = ({ onLoginSuccess }) => {
    const [email, setEmail] = (0, react_1.useState)('');
    const [password, setPassword] = (0, react_1.useState)('');
    const [error, setError] = (0, react_1.useState)('');
    const navigate = (0, react_router_dom_1.useNavigate)();
    const handleSubmit = (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        console.log('Attempting to login with', email, password);
        try {
            const { token } = yield (0, api_1.login)(email, password);
            console.log('Token obtido', token);
            const profile = yield (0, api_1.getProfile)(token);
            console.log('Perfil do usuário', profile);
            if (profile.avatar) {
                onLoginSuccess(token);
                navigate('/profile');
                console.log('Aqui está a informação do token', token);
            }
            else {
                setError('Avatar não encontrado no perfil do usuário');
            }
        }
        catch (err) {
            console.log('Está ocorrendo um erro na autenticação', err);
            setError('Invalid email or password');
        }
    });
    return ((0, jsx_runtime_1.jsx)("div", { className: "center-container", children: (0, jsx_runtime_1.jsxs)("div", { className: "login-container", children: [(0, jsx_runtime_1.jsxs)("div", { className: "logo", children: [(0, jsx_runtime_1.jsx)("img", { src: logoUrl, alt: "Logo" }), " "] }), (0, jsx_runtime_1.jsxs)("div", { className: "login-form", children: [(0, jsx_runtime_1.jsxs)("form", { onSubmit: handleSubmit, children: [(0, jsx_runtime_1.jsxs)("div", { className: "form-group", children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "email", children: (0, jsx_runtime_1.jsx)("strong", { children: "E-mail:" }) }), (0, jsx_runtime_1.jsx)("input", { type: "email", id: "email", name: "email", placeholder: "@Gmail.com", required: true, value: email, onChange: (e) => setEmail(e.target.value) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "form-group", children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "password", children: (0, jsx_runtime_1.jsx)("strong", { children: "Password:" }) }), (0, jsx_runtime_1.jsx)("input", { type: "password", id: "password", name: "password", placeholder: "***************", required: true, value: password, onChange: (e) => setPassword(e.target.value) })] }), (0, jsx_runtime_1.jsx)("button", { type: "submit", children: "Sign In" })] }), error && (0, jsx_runtime_1.jsx)("p", { className: "error", children: error })] })] }) }));
};
exports.default = LoginForm;
