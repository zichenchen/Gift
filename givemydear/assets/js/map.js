$(function (){
    var address1="";
    var address2="";
    var maps=document.getElementById("allmap");
    var map = new BMap.Map(maps);
    var point = new BMap.Point(113.28005304672,35.193570369064);
    var pointarraylist=[];
    pointarraylist.push(point);
    map.centerAndZoom(point,12);
    map.addControl(new BMap.MapTypeControl());  //设置可拖拽
    map.enableScrollWheelZoom(true);  //添加滚轮缩放
    var  marker1=new BMap.Marker(point);
    marker1.setLabel(new BMap.Label("资哥哥在这",{offset:new BMap.Size(15,-25)}));
    map.addOverlay(marker1)//添加标注
    var geolocation=new BMap.Geolocation();
    var myCity = new BMap.LocalCity();
    myCity.get(myFun);
    geolocation.getCurrentPosition(function (r) {
        if (this.getStatus() == BMAP_STATUS_SUCCESS) {
            var mk = new BMap.Marker(r.point);
            mk.setLabel(new BMap.Label("方哲在这",{offset:new BMap.Size(15,-25)}));
            map.addOverlay(mk)//添加标注
            map.panTo(r.point);
            pointarraylist.push(r.point);
            var polygon=new BMap.Polyline(pointarraylist,{strokeColor:"red",strokeWidth:2,strokeOpacity:0.5});
            map.addOverlay(polygon);
            distance=(map.getDistance(pointarraylist[0],pointarraylist[1])).toFixed(2)+"米";
            index=0;
           var words="你在"+address2+" 我在焦作市\n"+
                "我们的距离是"+distance+"\n"+"我会尽快来到你身边 等我呀！";
           function substring(){
               document.getElementById("address").innerText=words.substring(0,index++);
               if(index>words.length){
                   clearInterval(intervalstr);
               }
           }
          intervalstr= setInterval(substring,200);
        }
        else {
            alert('failed' + this.getStatus());
        }


    });
    function myFun(result){
        cityName = result.name;
        address2=cityName;
        map.setCenter(cityName);
        alert("当前定位城市:"+cityName);
    }
});


$(function () {
    var drawing=document.getElementById("drawing1");
    //确定浏览器支持<canvas>元素
    if(drawing.getContext){
        var context=drawing.getContext("2d");
        radian =0;
        radian_add=Math.PI/180;
        context.beginPath();
        context.translate(150,150);
        context.moveTo(getx(radian),gety(radian));
        while(radian<=(Math.PI*2)){
            radian+=radian_add;
            X=getx(radian);
            Y=gety(radian);
            context.lineTo(X,Y);
        }
        context.strokeStyle = "#cac5ff";
        context.stroke();
    }
});
$(function (){
    var drawing2=document.getElementById("drawing2");
    if(drawing2.getContext){
        var context2=drawing2.getContext("2d");
        radian1 =0;
        radian_add1=Math.PI/180;
        context2.beginPath();
        context2.translate(150,150);
        context2.moveTo(getx(radian1),gety(radian1));
        while(radian1<=((new Date().getDate()%30)*12*radian_add1)){
            radian1+=radian_add1;
            X=getx(radian1);
            Y=gety(radian1);
            context2.lineTo(X,Y);
        }
        context2.lineWidth=5;
        context2.strokeStyle = "red";
        context2.stroke();
        context2.beginPath();
        context2.moveTo(getx(radian1),gety(radian1));
        function heart() {
            radian1+=radian_add1;
            if (radian1 > (Math.PI * 2)) {
                drawing2.height=drawing2.height;
                radian1 = 0;
                context2.translate(150, 150);
                context2.moveTo(getx(radian1),gety(radian1));
            }
            X = getx(radian1);
            Y = gety(radian1);
            context2.lineTo(X, Y);
            context2.lineWidth=5;
            context2.strokeStyle = "red";
            context2.stroke();
        }
        setInterval(heart,7200000);
    }
});
$(function () {
    var drawing3=document.getElementById("drawing3");
    //确定浏览器支持<canvas>元素
    if(drawing3.getContext){
        var context3=drawing3.getContext("2d");
        x=1;
        radian_add2=Math.PI/180;
        function hreat1(){
            radian2 =0;
            x++;
            if(x>9){
                x=1;
            }
            drawing3.height=drawing3.height;
            context3.beginPath();
            context3.translate(150,150);
            context3.moveTo(getx1(radian2,x),gety1(radian2,-x));
            while(radian2<=(Math.PI*2)){
                radian2+=radian_add2;
                X=getx1(radian2,x);
                Y=gety1(radian2,-x);
                context3.lineTo(X,Y);
            }
            context3.closePath();
            context3.fillStyle="rgba(255,14,16,"+(1.0/9)*(10-x)+")";
            context3.fill();
            context3.stroke();
        }
        setInterval(hreat1,100);
    }});
$(function () {
    function time() {
      var dt = new Date();
      var hours=dt.getHours();
      var minutes = ""+dt.getMinutes()+"";
      if (minutes < 10) {
            minutes = "0"+minutes+"";
        }
      document.getElementById("time").innerText=(30-(dt.getDate()%30));
      document.getElementById("date").innerText="北京时间："+dt.getFullYear()+"年"+(dt.getMonth()+1)+"月"
        +dt.getDate()+"日\n"+hours+":"+minutes+":"+dt.getSeconds();
    }
   setInterval(time,1000);
});

function getx(t) {
    return 9*(16*Math.pow(Math.sin(t),3));
}
function gety(t) {
    return -9*(13*Math.cos(t)-5*Math.cos(2*t)-2*Math.cos(3*t)-Math.cos(4*t));
}
function getx1(t,x) {
    return x*(16*Math.pow(Math.sin(t),3));
}
function gety1(t,x) {
    return x*(13*Math.cos(t)-5*Math.cos(2*t)-2*Math.cos(3*t)-Math.cos(4*t));
}