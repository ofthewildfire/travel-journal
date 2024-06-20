"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
// const React = require("react");
const PostCard = ({ post }) => {
    console.log(post.title);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "bg-white text-[#333333] grid gap-3 p-5 rounded-xl shadow-xl font-lato", children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-2xl font-bold", children: (0, jsx_runtime_1.jsx)("a", { href: post.googleMapsUrl, target: "_blank", rel: "noopener noreferrer", className: " text-[#1c2541] hover:text-pink-600 font-playfair", children: post.title }) }), (0, jsx_runtime_1.jsxs)("span", { className: "location-details flex items-center gap-2 text-[#5bc0be]", children: [(0, jsx_runtime_1.jsx)("img", { className: "location-icon w-3 h-full object-contain", src: "location-icon.png", alt: "location icon", height: 36, width: 36 }), (0, jsx_runtime_1.jsx)("p", { className: "font-bold", children: post.location })] }), (0, jsx_runtime_1.jsxs)("p", { className: "text-[#ff6b6b] text-sm font-playfair", children: [post.startDate, " - ", post.endDate] }), (0, jsx_runtime_1.jsx)("p", { className: "leading-7 text-wrap font-ligt", children: post.description }), (0, jsx_runtime_1.jsx)("img", { className: "rounded-xl w-full", src: post.imageUrl, alt: post.title, height: 200, width: 250 })] }, post.title));
};
exports.default = PostCard;
