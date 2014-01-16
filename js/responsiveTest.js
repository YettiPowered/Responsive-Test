window.onload = function() {
    var url = location.href;
    
    parent.postMessage(url, '*');
};