import {suma} from './suma';

const btnSuma = document.querySelector("#btnSuma");
 const mensaje=document.querySelector("#resultado");
  //valor de los text
  const numerouno=document.querySelector("#numerouno");
  const numerodos=document.querySelector("#numerodos");
  const btnLimpiar=document.querySelector("#btnLimpiar");
 
  
   // eventos de los botones event of buttons
  btnSuma.addEventListener("click",()=>{
 suma();
   });

  btnLimpiar.addEventListener("click",()=>{
    numerouno.value='';
    numerodos.value='';
    mensaje.innerText='';
   numerouno.focus();
   document.getElementById("msgNuevo").innerHTML = "";
   
 
  });


