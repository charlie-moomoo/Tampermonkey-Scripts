// ==UserScript==
// @name         AntiRickroll
// @namespace    *://github.com/charlie-moomoo
// @version      0.1
// @description  Removes the page when you're trying to access a Rickroll page.
// @author       CharlieMoomoo
// @match        *://blogs.mtdv.me/*
// @match        *://r.mtdv.me/*
// @match        *://*.youtube.com/watch?v=dQw4w9WgXcQ*
// @match        *://*.youtube.com/watch?v=AACOcpA8i-U*
// @match        *://*.youtube.com/watch?v=j8PxqgliIno*
// @match        *://*.youtube.com/watch?v=bIwVIx5pp88*
// @match        *://*.youtube.com/watch?v=HnfkEVtetuE*
// @match        *://*.youtube.com/watch?v=QB7ACr7pUuE*
// @match        *://*.youtube.com/watch?v=mrThFRR3n8A*
// @match        *://*.youtube.com/watch?v=MCjlo7PtXMQ*
// @match        *://*.youtube.com/watch?v=a6pbjksYUHY*
// @match        *://*.youtube.com/watch?v=ll-mQPDCn-U*
// @match        *://*.youtube.com/watch?v=iik25wqIuFo*
// @match        *://*.youtube.com/watch?v=dRV6NaciZVk*
// @match        *://*.youtube.com/watch?v=LWErcuHm_C4*
// @match        *://*.youtube.com/watch?v=j7gKwxRe7MQ*
// @icon         https://static.wikia.nocookie.net/youtube/images/c/ce/RickRollButWithADifferentLink.jpg/revision/latest?cb=20201023192005
// @grant        window.onurlchange
// @license      MIT
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
     document.write('Rickroll detected!<br><br>Rickroll removal powered by AntiRickroll');
     document.title = 'Rickroll detected';
     window.stop();
})();
