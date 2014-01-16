#Responsive Test

A quick way to see your website at different sizes.

This should not replace your usual testing of a responsive website, it is to give you a quick view of a website at common sizes.

##Usage instructions

1. Add the responsiveTest.js to your site (optional):
```html
    <script>
    window.onload = function() {
        var url = location.href;
        
        parent.postMessage(url, '*');
    };
    </script>
```

2. Visit the [Responsive Test page](http://link.com) and type your URL into the box.  
Each frame will then load your site, you can then click around within the frames.  
If you added the JavaScript above, each frame will update as a new page is loaded.