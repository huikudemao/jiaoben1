// ==UserScript==
// @name         hello lzp
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  try to take over the world! lianxi!
// @author       You
// @match        *://*
// @icon         none
// @license      AGPL License
// @grant        none
// ==/UserScript==

// 匿名函数
(function() {
    // 启用严格模式
    'use strict';
    var img2=document.createElement('img');
    document.body.appendChild(img2);
    img2.src="https://pic.baike.soso.com/p/20120724/20120724100154-699505001.jpg";
    img2.style.cssText="width:75px;height:75px;position: absolute;"

    // 鼠标移动事件
    document.onmousemove =function(ev) {
        Ev = ev || window.event;
        var mousePos = mouseCoords(ev);

        img2.style.left=mousePos.x+2+'px';
        img2.style.top=mousePos.y+2+'px';
        // console.log(img2.style.left)
    }
    function mouseCoords(ev) {
        if (ev.pageX || ev.pageY) {
            return {x: ev.pageX, y: ev.pageY};
        }
        return {
            x: ev.clientX + document.body.scrollLeft - document.body.clientLeft,
            y: ev.clientY + document.body.scrollTop - document.body.clientTop
        };
    }
    console.log('第三次上传')
})();