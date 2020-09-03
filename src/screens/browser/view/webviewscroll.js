import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

(function () {
    var callback = function (direction) {
        window.ReactNativeWebView.postMessage('scroll-' + direction)
    }; // here you can also use json string
    var initTop = document.body.scrollTop;
    window.addEventListener('scroll', function () {
        var currTop = document.body.scrollTop;
        var dist = currTop - initTop;
        if (dist === 0)
            return;
        callback(dist > 0 ? 'down' : 'up');
        initTop = currTop;
    }, false)
})(window);