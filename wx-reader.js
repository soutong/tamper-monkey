// ==UserScript==
// @name         微信读书自动读书插件
// @namespace    tongss
// @version      0.1
// @description  自动读书
// @author       cyd
// @match        https://weread.qq.com/web/reader/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    // .click() 在这里用不了，所以创建一个鼠标点击事件
    let clickEvent = new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        clientX: 150,
        clientY: 150
    });
    // 每两分钟点击一次“下一章”按钮
    setInterval(function () {
      //  var nextPageButton = document.getElementsByClassName("readerFooter_button")[0];
           // 获取文档中所有的 <span> 元素
var allSpans = document.getElementsByTagName('span');

// 遍历所有 <span> 元素，找到内容为 "下一页" 的元素
var nextPageSpan = null;
for (var i = 0; i < allSpans.length; i++) {
    if (allSpans[i].textContent.trim() === '下一页') {
        nextPageSpan = allSpans[i];
        break;
    }
}

if (nextPageSpan) {
    console.log('找到下一页按钮:', nextPageSpan);
} else {
    console.log('未找到符合条件的下一页按钮');
}
        nextPageSpan.dispatchEvent(clickEvent);
    }, 10000);
})();