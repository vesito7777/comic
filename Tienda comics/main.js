const carrusel=document.querySelector(".carrusel-items");
let maxScrollLeft=carrusel.scrollWidth=carrusel.clientWidth;
let intervalo=null;
let step=1;
const start=() =>{
    intervalo=setInterval(function(){
        carrusel.scrollLeft=carrusel.scrollLeft+step;
        if(carrusel.scrollLeft===maxScrollLeft){
            step=step*-1;

        }else if(carrusel.scrollLeft===0){
            step=step*-1;

        }

        },10);
    };

     const stop=() => {
        clearInterval(intervalo);
     };

     carrusel.addEventListener('mouseover',()=> {
        stop();
     });

     carrusel.addEventListener("mouseout",()=>{
        start();

     });
     
     start();

     document.getElementById("registroForm").addEventListener("submit",function(event){
        var nombre=document.getElementById("nombre").value.toUpperCase();//Transformar a mayúsculas
        var apellido = document.getElementById('apellido').value;
        var fechaNacimiento=new Date(document.getElementById("fecha_nacimiento").value);
        var emailI = document.getElementById('email').value;
        var dni = document.getElementById('dni').value;//Tranformar a mayúsculas
    
        var error='';
        
        var caja= document.getElementById("errores");
        caja.innerHTML = '';
    
        //Verificar que el nombre solo contenga letras
        if(!soloLetras(nombre)){
            error +="El nombre solo debe que contener letras. <br>";
            event.preventDefault();//Evitar que se envie el formulario
    
        }
        
        //Verificar que el apellido solo contenga letras
        if(!soloLetras(apellido)){
            error +="El apellido solo debe que contener letras.<br>";
            event.preventDefault();//Evitar que se envie el formulario
        }
    
        
    
        //Verificar la fecha de nacimiento(mayor de 18 años)
        var fechaActual=new Date();
        var edadMinima=new Date(fechaActual.getFullYear() - 18, fechaActual.getMonth(), fechaActual.getDate());
        if(fechaNacimiento>edadMinima){
            error +="Debes ser mayor de 18 años. <br>";
            event.preventDefault();//Evitar que se envie el formulario
        }
    
        //Verificar formato de correo electronico
        if(!/\S+@\S+\.\S+/.test(emailI)){
            error +="Formato de correo electronico inválido.<br>";
            event.preventDefault();//Enviar que se envie el formulario
        }
    
        //Verificar formato de DNI(8 dígitos seguidos de una letra)
        if(!/^\d{8}[A-Za-z]$/.test(dni)){
            error +="Formato de DNI inválido(8 dígitos seguidos de una letra.)<br>";
            event.preventDefault();//Evitar que se envie el formulario
        }
    
        //Mostrar mensaje de confirmacion si el formulario  se envia correctamente
        /*
        if(!nombreError.textContent && !apellidoError.textContent && !fechaNacimientoError.textContent && !emailError.textContent && !dniError.textContent){
            confirmationMessage.textContent="¡Registro exitoso!";
            confirmacionMessage.style.display="block";
        }
        */
    
        caja.innerHTML=error;
    
    });
    
    function soloLetras(cadena){
        return/^[a-zA-Z]+$/.test(cadena);
    }
    