// ==UserScript==
// @name         hello lzp
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  try to take over the world! lianxi!
// @author       You
// @match        *://*
// @match        *://pan.baidu.com/disk/home*
// @match        *://yun.baidu.com/disk/home*
// @match        *://pan.baidu.com/disk/main*
// @match        *://yun.baidu.com/disk/main*
// @match        *://pan.baidu.com/s*
// @match        *://yun.baidu.com/s*
// @match        *://*.youku.com/*
// @match        *://*.iqiyi.com/*
// @match        *://*.iq.com/*
// @match        *://*.le.com/*
// @match        *://v.qq.com/*
// @match        *://m.v.qq.com/*
// @match        *://*.tudou.com/*
// @match        *://*.mgtv.com/*
// @match        *://tv.sohu.com/*
// @match        *://film.sohu.com/*
// @match        *://*.1905.com/*
// @match        *://*.bilibili.com/*
// @match        *://*.pptv.com/*
// @match        *://item.taobao.com/*
// @match        *://chaoshi.detail.tmall.com/*
// @match        *://detail.tmall.com/*
// @match        *://detail.tmall.hk/*
// @match        *://item.jd.com/*
// @match        *://*.yiyaojd.com/*
// @match        *://*.liangxinyao.com/*
// @match        *://music.163.com/*
// @match        *://y.qq.com/*
// @match        *://*.kugou.com/*
// @match        *://*.kuwo.cn/*
// @match        *://*.ximalaya.com/*
// @match        *://*.zhihu.com/*
// @match        *://*.douyin.com/*
// @match        *://*.kuaishou.com/*
// @match        *://*.ixigua.com/*
// @match        *://*.youtube.com/*
// @icon         none
// @license      AGPL License
// @grant        none
// ==/UserScript==

// 匿名函数
(function() {
    // 启用严格模式
    'use strict';
    console.log('第三次上传')
    var img2=document.createElement('img');
    document.body.appendChild(img2);
    img2.src="https://pic.baike.soso.com/p/20120724/20120724100154-699505001.jpg";
    img2.style.cssText="width:75px;height:75px;position: absolute;z-index: 99999999999 !important"

    // 鼠标移动事件
    document.onmousemove =function(ev) {
        var Ev = ev || window.event;
        var mousePos = mouseCoords(Ev);

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
    
})();