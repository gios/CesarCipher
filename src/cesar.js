var fs = require('fs');
var path = require('path');

WinJS.Application.onready = function () {
    "use strict";
    var decodeCesarResult;
    
    // DOM variable
    var holder = document.getElementById("holder"),
        target1 = document.getElementById("target1"),
        target2 = document.getElementById("target2"),
        target3 = document.getElementById("target3"),
        copyright = document.getElementById("copyright"),
        shareButton = document.getElementById("shareButton"),
        rateApp = document.getElementById("rateApp");
    // END DOM variable

    // preventDefault to drag and drop file uploading
    window.ondragover = function (e) {
        e.preventDefault();
        return false;
    };

    window.onscroll = function () {
        window.scrollTo(0, 0);
    };

    window.ondrop = function (e) {
        e.preventDefault();
        return false;
    };
    // END preventDefault to drag and drop file uploading

    // File drag and drop events
    holder.ondragover = function (evt) {
        WinJS.UI.Animation.pointerDown(evt.target);
        return false;
    };

    holder.ondragleave = function (evt) {
        WinJS.UI.Animation.pointerUp(evt.target);
        return false;
    };

    holder.ondrop = function (e) {
        e.preventDefault();
        
        var that = this;
        for (var i = 0; i < e.dataTransfer.files.length; ++i) {
            fs.readFile(e.dataTransfer.files[i].path, {
                encoding: 'utf8'
            }, function (err, data) {
                if (err) {
                    return alert(err);
                }
                that.style.backgroundColor = "blue";
                that.innerText = "DOWNLOADED!"
                decodeCesarResult = cesarDecode(data);
            });
        }
        return false;
    };
    // END File drag and drop events
    
    // Cesar Decoder Event
    function cesarDecodeEvent(evt) {
        if(typeof decodeCesarResult === "undefined") decodeCesarResult = "Error! You don't download a file into this system. Try later.";
        document.querySelector("#cesarFlyout div").innerText = decodeCesarResult;
        document.getElementById("cesarFlyout").winControl.show(target1);
    }
    
    target1.addEventListener("mouseup", cesarDecodeEvent, false);
    // END Cesar Decoder Event

    // Windows Metro animation
    WinJS.UI.Animation.enterPage(target1, null);
    WinJS.UI.Animation.enterPage([target1, target2], null);
    WinJS.UI.Animation.enterPage([target1, target2, target3], null);
    WinJS.UI.Animation.enterPage([holder, target1, target2, target3, rateApp], null);
    WinJS.UI.Animation.enterPage([copyright, shareButton], null);
    // END Windows Metro animation

    // Share popup message
    function showConfirmFlyout() {
        document.getElementById("shareFlyout").winControl.show(shareButton);
    }

    WinJS.UI.processAll().then(function () {
        document.getElementById("shareButton").addEventListener("click", showConfirmFlyout, false);
    });
    // END Share popup message

    // Defaults button action
    function onPointerDown(evt) {
        WinJS.UI.Animation.pointerDown(evt.target);
        evt.preventDefault();
    }

    function onPointerUp(evt) {
        WinJS.UI.Animation.pointerUp(evt.target);
        evt.preventDefault();
    }

    function addPointerDownHandlers(target) {
        target.addEventListener("mousedown", onPointerDown, false);
    }

    function addPointerUpHandlers(target) {
        target.addEventListener("mouseup", onPointerUp, false);
    }
    addPointerDownHandlers(target1);
    addPointerUpHandlers(target1);
    addPointerDownHandlers(target2);
    addPointerUpHandlers(target2);
    addPointerDownHandlers(target3);
    addPointerUpHandlers(target3);
    // END Defaults button action

    WinJS.UI.processAll();
};

WinJS.Application.start();