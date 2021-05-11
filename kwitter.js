function login(){
    a=document.getElementById("kwit").value;
localStorage.setItem("user_name",a);
window.location="kwitter_room.html";
}