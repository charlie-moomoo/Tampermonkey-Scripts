// ==UserScript==
// @name         YouTube Shorts Redirector
// @namespace    https://github.com/charlie-moomoo
// @version      0.4
// @description  Auto redirects /shorts link to /watch?v= link on YouTube.
// @author       CharlieMoomoo
// @match        *://*.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        window.onurlchange
// @license      MIT
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    const redirect = ()=>{
      if (!location.pathname.startsWith("/shorts")) return;
      return window.location.replace(`https://youtube.com/watch?v=${location.href.split("/shorts/")[1]}`);
    }
    redirect()
    window.addEventListener("urlchange",redirect);
})();
