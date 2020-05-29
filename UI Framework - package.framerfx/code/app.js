// app.js
import { url } from "framer/resource";
const fontUrl = url('/code/fonts/FarfetchBasis-Regular.woff2')
async function importStylesheets() {
  let css = document.createElement("style");
  css.id = 'fonts';
  css.innerHTML = `
    @font-face {
      font-family: "FarfetchBasis-Regular";
      src: url("${fontUrl}") format("woff");
    } 
  `;
  document.head.appendChild(css);
}
if (!document.getElementById('fonts')) {
  importStylesheets();
  console.log("Font stylesheets loaded");
} else {
  console.log("Font stylesheets already loaded");
}