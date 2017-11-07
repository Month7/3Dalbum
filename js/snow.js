var minSize=20;
var maxSize=50;
var snow=$("<div></div>").css({
    "position":"absolute",
    "top":"-50px"
}).html("❉");
$(function(){
    var $windoWidth=$(window).width();
    var $windowHeight=$(window).height();
    setInterval(function(){
        var startWidth=Math.random()*$windoWidth;
        var endwidth=Math.random()*$windoWidth;
        var time=3000+Math.random()*$windowHeight;
        var startOpacity=0.7+0.3*Math.random();
        var endOpacity=0.3+0.1*Math.random();
        var size=minSize+Math.random()*(maxSize-minSize);
        snow.clone().appendTo($("body")).css({
            "left":startWidth,
            "color":"#fff",
            "opacity":startOpacity,
            "font-size":size,
        }).animate({
            "top":$windowHeight-30,
            "left":endwidth,
            "opacity":endOpacity
        },time,function(){
            $(this).remove();
        })
    },30)
});



