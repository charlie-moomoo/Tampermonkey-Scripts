// ==UserScript==
// @name         Custom YouTube Country Code
// @namespace    https://github.com/charlie-moomoo
// @version      0.1
// @description  Replace the country code next to the logo with anything you want.
// @author       CharlieMoomoo
// @match        *://*.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        window.onurlchange
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';
    const countrycode = "sus" //Replace it with anything you want
    const replace = ()=>{
        document.querySelectorAll('#country-code').forEach((element)=>{
            element.innerHTML = countrycode
        })
    }
    replace()
    window.addEventListener("urlchange",replace);
})();
