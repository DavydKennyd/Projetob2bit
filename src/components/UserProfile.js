"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const api_1 = require("../api");
require("./UserProfile.css");
const UserProfile = ({ token, onLogout }) => {
    const [profile, setProfile] = (0, react_1.useState)(null);
    const [error, setError] = (0, react_1.useState)('');
    (0, react_1.useEffect)(() => {
        console.log('Fetching profile with token:', token);
        (0, api_1.getProfile)(token)
            .then(data => {
            console.log('Received profile data:', data);
            setProfile(data);
        })
            .catch(err => {
            console.error('Error fetching profile:', err);
            setError('Failed to fetch profile');
        });
    }, [token]);
    const handleLogout = () => {
        onLogout();
    };
    if (!token) {
        return (0, jsx_runtime_1.jsx)("div", { children: "Please log in to view your profile." });
    }
    if (error) {
        return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("p", { children: error }), (0, jsx_runtime_1.jsx)("button", { onClick: handleLogout, children: "Log Out" })] }));
    }
    if (!profile) {
        return (0, jsx_runtime_1.jsx)("div", { children: "Loading..." });
    }
    // URL da imagem de perfil ou imagem padrão se avatar for null
    const profileImage = profile.avatar ? profile.avatar.image_high_url : 'https://github.com/DavydKennyd/icone_perfil/blob/main/default-profile.png?raw=true';
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("header", { className: "page-header", children: (0, jsx_runtime_1.jsx)("button", { className: "logout-button", onClick: handleLogout, children: "Logout" }) }), (0, jsx_runtime_1.jsx)("div", { className: "center-container", children: (0, jsx_runtime_1.jsxs)("div", { className: "profile-box", children: [(0, jsx_runtime_1.jsx)("div", { className: "profile-pic-container", children: (0, jsx_runtime_1.jsx)("img", { src: profileImage, alt: "Foto de perfil", className: "profile-pic" }) }), (0, jsx_runtime_1.jsxs)("div", { className: "profile-info", children: [(0, jsx_runtime_1.jsx)("h2", { className: "username", children: (0, jsx_runtime_1.jsxs)("strong", { children: [(0, jsx_runtime_1.jsx)("span", { className: "lighter", children: "Your" }), " Name:"] }) }), (0, jsx_runtime_1.jsxs)("div", { className: "name-container", children: [profile.name, " ", profile.last_name] }), (0, jsx_runtime_1.jsx)("h2", { className: "email", children: (0, jsx_runtime_1.jsxs)("strong", { children: [(0, jsx_runtime_1.jsx)("span", { className: "lighter", children: "Your" }), " E-mail:"] }) }), (0, jsx_runtime_1.jsx)("div", { className: "email-container", children: profile.email })] })] }) })] }));
};
exports.default = UserProfile;
