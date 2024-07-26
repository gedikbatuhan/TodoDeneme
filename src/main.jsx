import React from 'react';
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";

const root = document.getElementById("root");

const rootElement = ReactDOM.createRoot(root);
rootElement.render(<App />);



//! document.getElementById("root") ifadesi, 
//! HTML belgesinde id'si "root" olan elementi 
//! seçer ve bu element, React uygulamasının 
//! yerleştirileceği yerdir. React uygulamaları 
//! genellikle bu şekilde başlar ve tüm bileşenler 
//! bu kök elementin içine render edilir. 
//! Bu, uygulamanın başlangıç noktasını belirler 
//! ve React'in sanal DOM'dan gerçek DOM'a geçiş 
//! yapabilmesini sağlar.