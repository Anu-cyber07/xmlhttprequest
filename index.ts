import { getMaxListeners } from "process";

var xhr = new XMLHttpRequest();
const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');
const getData = () => {
   
    xhr.open("GET", "https://reqres.in/api/user?delay=3", true);
    xhr.onload = function(){
        var result=JSON.parse(xhr.responseText);
        console.log(result);
    };
    xhr.send();}
    const sendData = () => {
        let json = JSON.stringify({
            email: 'eve.holt@reqres.in',
             password: 'cityslicka'
          });
          
          xhr.open("POST", 'https://reqres.in/api/register')
          xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
          
          xhr.send(json);}
getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);