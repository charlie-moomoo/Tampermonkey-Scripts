// ==UserScript==
// @name         Custom YouTube Logo Color
// @namespace    https://github.com/charlie-moomoo
// @version      0.1
// @description  Custom the color of the YouTube Logo on the nav bar!
// @author       CharlieMoomoo
// @match        *://*.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        window.onurlchange
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';
    const color = "#ff00a7" //Replace it with anything you want
    const replace = ()=>{
        document.querySelector("#logo-icon").children[0].children[0].children[0].children[0].style.fill = color
    }
    replace()
    window.addEventListener("urlchange",replace);
})();
