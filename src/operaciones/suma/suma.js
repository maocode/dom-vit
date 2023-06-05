import {alertaUno} from './alerta-error.js';
import{alertaDos} from './alertados-error.js';
export const suma=()=>{
   const mensaje=document.querySelector("#resultado");  
    let a=parseInt(numerouno.value);
    let b=parseInt(numerodos.value);
    let res=0;
    if(numerouno.value.length === 0 ||numerodos.value.length === 0  ){
     alertaUno();
     console.log('Campo vacio');
    }else{
    
     
    res=a+b;
    if (isNaN(res)){
        alertaDos();
    }else{
    mensaje.innerText=res;
    }
    }
   }