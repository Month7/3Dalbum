$(function(){
    var $img=$("#wrap img");
    var $imgL=$img.length;
    var Deg=360/$imgL;
    $img.each(function(i){
        $(this).css("transform","rotateY("+i*Deg+"deg) translateZ(350px)").attr('ondragstart','return false');
        $(this).css("-webkit-box-reflect","below 8px -webkit-linear-gradient(top,rgba(0,0,0,0) 40%,rgba(0,0,0,.7) 100%)")
    });
    
    var nX=0;
    var nY=-10;
    var movX=0;
    var movY=0;
    var run=null;
    $(document).mousedown(function(e){
        clearInterval(run);
        var _x=e.pageX;
        var _y=e.pageY;
        // $("#wrap").css("transform","perspective(800px) rotateX(-20deg) rotateY(20deg)");
        $(this).bind("mousemove",(function(e){
            var x=e.pageX;
            var y=e.pageY;
            nX=x-_x;
            nY=y-_y;
            movX+=nY*0.07;
            movY+=nX*0.07;
            console.log(movX);
            $("#wrap").css("transform","perspective(900px)  rotateX("+movX+"deg) rotateY("+movY+"deg)");
            _x=e.pageX;
            _y=e.pageY;
        })
        );
    }).mouseup(function(){
        $(this).unbind("mousemove");

        run=setInterval(function(){
            nX=nX*0.75;
            nY=nY*0.75;
            if(Math.abs(nX)<1&&Math.abs(nY)){
                clearInterval(run);
            }
            movY+=nX;
            movX+=nY;
            $("#wrap").css("transform","perspective(900px) rotateX("+movX+"deg) rotateY("+movY+"deg)");
            console.log(movY);
        },30);
    })
});
foo();
var foo=function(){
    console.log(n);
    var n=2;
}