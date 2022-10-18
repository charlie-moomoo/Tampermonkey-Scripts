// ==UserScript==
// @name         Scrollable Minecraft.net
// @namespace    https://github.com/charlie-moomoo
// @version      0.1
// @description  Fix unscrollable bug on Minecraft.net
// @author       CharlieMoomoo
// @match        https://minecraft.net/*
// @match        https://www.minecraft.net/*
// @icon         https://www.minecraft.net/etc.clientlibs/minecraft/clientlibs/main/resources/apple-icon-180x180.png
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
     document.body.style.overflow = "visible";
})();
