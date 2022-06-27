 //HandleCouner function for project 1
 let counter=0;
 function add(){
  counter++;
  document.getElementById('counter').innerText=`${counter}`;
 }
 function minus(){
  counter--;
  document.getElementById('counter').innerText=`${counter}`;
 }
 function reset(){
  counter=0;
  document.getElementById('counter').innerText=`${counter}`;
 }