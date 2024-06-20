"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("@fontsource-variable/playfair-display");
const data_1 = __importDefault(require("./data"));
const PostCard_1 = __importDefault(require("./components/PostCard"));
const Footer_1 = __importDefault(require("./components/Footer"));
function App() {
    const travelData = data_1.default;
    const travelElements = travelData.map((post) => {
        return (0, jsx_runtime_1.jsx)(PostCard_1.default, { post: Object.assign({}, post) });
    });
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("main", { className: " main-content bg-[#f9f9f9]", children: [(0, jsx_runtime_1.jsxs)("header", { className: "main-header bg-[#3a506b] w-full p-2 text-center grid gap-5 text-white", children: [(0, jsx_runtime_1.jsx)("h1", { className: "lowercase font-semibold text-2xl font-playfair", children: "Travel Blog" }), (0, jsx_runtime_1.jsx)("p", { className: "font-lato", children: "Welcome to my travel blog! Here you'll find all the places I've visited and the things I've seen." })] }), (0, jsx_runtime_1.jsx)("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 px-2 py-8", children: travelElements })] }), (0, jsx_runtime_1.jsx)(Footer_1.default, {})] }));
}
exports.default = App;
