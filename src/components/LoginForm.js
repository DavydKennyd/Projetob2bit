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
        try {
            const { token } = yield (0, api_1.login)(email, password);
            const profile = yield (0, api_1.getProfile)(token);
            if (profile.avatar) {
                onLoginSuccess(token);
                navigate('/');
            }
        }
        catch (err) {
            setError('Invalid email or password');
        }
    });
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: "center-container" }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "login-container" }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: "logo" }, { children: (0, jsx_runtime_1.jsx)("img", { src: logoUrl, alt: "Logo" }) })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "login-form" }, { children: [(0, jsx_runtime_1.jsxs)("form", Object.assign({ onSubmit: handleSubmit }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "form-group" }, { children: [(0, jsx_runtime_1.jsx)("label", Object.assign({ htmlFor: "email" }, { children: (0, jsx_runtime_1.jsx)("strong", { children: "E-mail:" }) })), (0, jsx_runtime_1.jsx)("input", { type: "email", id: "email", name: "email", placeholder: "@Gmail.com", required: true, value: email, onChange: (e) => setEmail(e.target.value) })] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "form-group" }, { children: [(0, jsx_runtime_1.jsx)("label", Object.assign({ htmlFor: "password" }, { children: (0, jsx_runtime_1.jsx)("strong", { children: "Password:" }) })), (0, jsx_runtime_1.jsx)("input", { type: "password", id: "password", name: "password", placeholder: "***************", required: true, value: password, onChange: (e) => setPassword(e.target.value) })] })), (0, jsx_runtime_1.jsx)("button", Object.assign({ type: "submit" }, { children: "Sign In" }))] })), error && (0, jsx_runtime_1.jsx)("p", Object.assign({ className: "error" }, { children: error }))] }))] })) })));
};
exports.default = LoginForm;
