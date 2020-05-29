function showimg(element){
    document.getElementById("name").innerHTML = element.alt;
    var img = document.getElementById("photo");
    img.src=element.src;
}
function original(){
    document.getElementById('name').innerHTML = "여기에 사진이 크게 들어갑니다.";
    var img = document.getElementById("photo");
    img.src="imgs/user.png";
}