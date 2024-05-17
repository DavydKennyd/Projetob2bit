"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const LoginForm_1 = __importDefault(require("./components/LoginForm"));
const UserProfile_1 = __importDefault(require("./components/UserProfile"));
require("./App.css");
const App = () => {
    const [token, setToken] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
        }
    }, []);
    const handleLoginSuccess = (token) => {
        setToken(token);
        localStorage.setItem('token', token);
    };
    const handleLogout = () => {
        setToken(null);
        localStorage.removeItem('token');
    };
    
    return ((0, jsx_runtime_1.jsx)(react_router_dom_1.BrowserRouter, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "App" }, { children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/login", element: (0, jsx_runtime_1.jsx)(LoginForm_1.default, { onLoginSuccess: handleLoginSuccess }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/", element: token ? (0, jsx_runtime_1.jsx)(UserProfile_1.default, { token: token, onLogout: handleLogout }) : (0, jsx_runtime_1.jsx)(react_router_dom_1.Navigate, { to: "/login" }) })] }) })) }));
};
exports.default = App;
