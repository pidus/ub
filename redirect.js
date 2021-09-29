// ==UserScript==
// @name               XVIDEOS
// @namespace          https://github.com/pidus/adblock
// @description        Always redirects
// @include            *://*xvideos.com/*
// @version            1.0
// @run-at             document-start
// @author             1fm@8shield.net
// @grant              none
// ==/UserScript==
 
window.location.replace("https://www.xvideos2.com" + window.location.pathname + window.location.search);
