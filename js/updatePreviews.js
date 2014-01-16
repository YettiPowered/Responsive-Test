UpdatePreviews = function() 
{   
    // elements
    var input = $("input").first();
    var iframes = $("iframe");
    
    //url
    var url = "http://labelmedia.co.uk";
    
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
    
    // update each iframe to the url
    function checkURL()
    {
        // makes sure url starts with "http://" or "https://"
        if (url.substr(0,7) !== "http://" && url.substr(0,8) !== "https://")
        {
            url = "http://" + url;
        }
    }
    
    // update each iframe to the url
    function changeFrameURL()
    {
        iframes.each(function() {
            $(this).attr("src", url);
        });
    }
};

$(function() 
{
    new UpdatePreviews();
});