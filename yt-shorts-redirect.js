// ==UserScript==
// @name         YouTube Shorts Redirector
// @namespace    https://github.com/charlie-moomoo
// @version      0.1
// @description  Auto redirects /shorts link to /watch?v= link on YouTube.
// @author       CharlieMoomoo
// @match        *://youtube.com/shorts/*
// @match        *://www.youtube.com/shorts/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// @license      MIT
// ==/UserScript==
 
(function() {
    'use strict';
    return window.location.replace(`https://youtube.com/watch?v=${location.href.split("/shorts/")[1]}`);
})();
