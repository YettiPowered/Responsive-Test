UpdatePreviews = function() 
{   
    // elements
    var input = $("input").first();
    var iframes = $("iframe");
    
    //url
    var defaultURL = "http://labelmedia.co.uk";
    var url = defaultURL;
    
    // update url when form submitted
    $("form").submit(function(event) {
        event.preventDefault();
        
        // get url from input
        url = input.val();
        
        // check url
        checkURL();
        
        // change frames to url
        changeFrameURL();
    });
    
    // add class when mouse over
    iframes.mouseenter(function() {
        $(this).addClass("mouseOver");
    })
    
    //remove class when mouse out
    iframes.mouseleave(function() {
        $(this).removeClass("mouseOver");
    })
    
    // listen for a url
    if (window.addEventListener) {
        window.addEventListener ("message", receiveMessage, false);        
    } else {
        if (window.attachEvent) {
            window.attachEvent("onmessage", receiveMessage, false);
        }
    }
    
    
    
    // update each iframe to the url
    function checkURL()
    {
        // make sure url is a string
        // if not, revert to defaulr url
        if(typeof url != 'string') {
            url = defaultURL;
        }
        
        // make sure url starts with "http://" or "https://"
        // if not, add it on
        if (url.substr(0,7) !== "http://" && url.substr(0,8) !== "https://")
        {
            url = "http://" + url;
        }
    }
    
    
    
    // update each iframe to the url
    function changeFrameURL()
    {
        iframes.each(function() {
            // only reload if src and url are different
            // only reload if it doesnt have the "mouseOver" class
            if(url != $(this).attr("src") && !$(this).hasClass("mouseOver")) {
                $(this).attr("src", url);
            }
        });
    }
    
    
    
    //change all frames when message recieved
    function receiveMessage(event)
    {
        // make sure url isn't the same as the one received
        if(event.data != url) {
            // set the url
            url = event.data;
            
            // change frames to the new url
            checkURL();
            changeFrameURL();
        }
    }
};

$(function() 
{
    new UpdatePreviews();
});