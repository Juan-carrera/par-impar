const d = document;

const form = d.querySelector(".form");
const resp = d.querySelector(".response");


form.addEventListener("submit", numeroParImpar);


function numeroParImpar(e){

    // PreventDefault evita que el navegador realice la acción por default
    e.preventDefault();
    
    //se obtiene,guarda y castea  el valor del input en una variable
    let valorInput = parseInt(e.target.number.value);

    //multiplica por 3 el valor obtenido del input
    let valorInputMultiplicado = valorInput * 3;
  
    if((valorInputMultiplicado % 2) === 0){

        //removemos la clase none de nuestro div en el DOM
        resp.classList.remove("none");

        //insertamos un parrafo en nuestro div del DOM
        resp.innerHTML = `<p>El numero ${valorInputMultiplicado} es un resultado par</p>`;
        
        //limpiamos el input despues de 1 segundo
        setTimeout(() => { 
          
            form.reset();

            //agregampos la clase none a nuestro div en el DOM
            setTimeout(() => {
                resp.classList.add("none");
            }, 3000);
            
        }, 1000);
        

        
    } else{

        resp.classList.remove("none");
        resp.innerHTML = `<p>El numero ${valorInputMultiplicado} es un resultado impar</p>`;
        
        setTimeout(() => { 
          
            form.reset();

            setTimeout(() => {
                resp.classList.add("none");
            }, 3000);
            
        }, 1000);
      
        
    }
}