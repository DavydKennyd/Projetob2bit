"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const api_1 = require("../api");
const axios_1 = __importDefault(require("axios"));
require("./UserProfile.css");
const UserProfile = ({ token, onLogout }) => {
    const [profile, setProfile] = (0, react_1.useState)(null);
    const [error, setError] = (0, react_1.useState)('');
    const [profileImage, setProfileImage] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
        (0, api_1.getProfile)(token)
            .then(data => setProfile(data))
            .catch(err => setError('Failed to fetch profile'));
    }, [token]);
    (0, react_1.useEffect)(() => {
        /*CASO O USUARIO NÃO TENHA  FOTO DE PERFIL IRÁ EXIBIR UMA FOTO PADRÃO QUE ESTÁ HOSPEDADO ONLINE NO MEU GITHUB*/ 
        if (profile) {
            if (profile.avatar && profile.avatar.image_high_url) {
                loadProfileImage(profile.avatar.image_high_url);
            }
            else {
                setProfileImage('https://github.com/DavydKennyd/icone_perfil/blob/main/default-profile.png?raw=true');
            }
        }
    }, [profile]);
    const loadProfileImage = (url) => {
        axios_1.default.get(url, { responseType: 'arraybuffer' })
            .then(response => {
            const blob = new Blob([response.data], { type: response.headers['content-type'] });
            const imageUrl = URL.createObjectURL(blob);
            setProfileImage(imageUrl);
        })
            .catch(() => {
            setProfileImage('https://github.com/DavydKennyd/icone_perfil/blob/main/default-profile.png?raw=true');
        });
    };
    const handleLogout = () => {
        onLogout();
    };
    if (error) {
        return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("p", { children: error }), (0, jsx_runtime_1.jsx)("button", Object.assign({ onClick: handleLogout }, { children: "Log Out" }))] }));
    }
    if (!profile) {
        return (0, jsx_runtime_1.jsx)("div", { children: "Loading..." });
    }
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("header", Object.assign({ className: "page-header" }, { children: (0, jsx_runtime_1.jsx)("button", Object.assign({ className: "logout-button", onClick: handleLogout }, { children: "Logout" })) })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "center-container" }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "profile-box" }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: "profile-pic-container", id: "profile-image" }, { children: (0, jsx_runtime_1.jsx)("img", { src: profileImage || 'https://github.com/DavydKennyd/icone_perfil/blob/main/default-profile.png?raw=true', alt: "Profile" }) })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "profile-info" }, { children: [(0, jsx_runtime_1.jsx)("h2", Object.assign({ className: "username" }, { children: (0, jsx_runtime_1.jsxs)("strong", { children: [(0, jsx_runtime_1.jsx)("span", Object.assign({ className: "lighter" }, { children: "Your" })), " Name:"] }) })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "name-container" }, { children: [profile.name, " ", profile.last_name] })), (0, jsx_runtime_1.jsx)("h2", Object.assign({ className: "email" }, { children: (0, jsx_runtime_1.jsxs)("strong", { children: [(0, jsx_runtime_1.jsx)("span", Object.assign({ className: "lighter" }, { children: "Your" })), " E-mail:"] }) })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "email-container" }, { children: profile.email }))] }))] })) }))] }));
};
exports.default = UserProfile;
