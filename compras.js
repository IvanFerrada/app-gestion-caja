// (function(){
	/*Variables*/
    let lista = document.getElementById("labelSecond");
    
    let	tareaInput  = document.getElementById("productoEntrada");
    let precioInput = document.getElementById("precioInput");
	let fechaInput  = document.getElementById("fechaInput");

	// let precioFloat = document.getElementById("dos");
	
	
	
	
	let	btnNuevaTarea = document.getElementById("btnAgregar");
	
	let btnDelete = document.getElementById("btnAgregar");
	
	
	
	
	/*Funciones*/
	var agregarTarea = function(){
		let tarea  = tareaInput.value;
        let precio = precioInput.value;
		let fecha  = fechaInput.value;
		let bntD   = btnDelete.value;
		
		
        let	nuevoProducto = document.createElement("li");
        let	enlace = document.createElement("a");
        let contenido = document.createTextNode(tarea);
        
	
		
        /*Creamos elemento (a) precio*/ 
        let enlacePrecio = document.createElement("a");
        let contenidoPrecio = document.createTextNode(precio);
		
        /*Creamos elemento (a) fecha*/
        let enlaceFecha = document.createElement("a");
		let contenidoFecha = document.createTextNode(fecha);
		
		let enlaceButton = document.createElement('a'); 
		let contenidoBtn = document.createTextNode(bntD);
		
		enlaceButton.addEventListener("click", function(){
			nuevoProducto.remove();
		});
		
		
		
		//
		if (tarea === "") {
			tareaInput.setAttribute("placeholder", "Agrega una tarea valida");
			tareaInput.className = "error";
            
			return false;
		}
		
		/*Agregamos el contenido al enlace*/
        enlace.appendChild(contenido);
		enlace.setAttribute("href", "#");
        enlace.setAttribute('id', 'one');
		
        enlacePrecio.appendChild(contenidoPrecio);  
        enlacePrecio.setAttribute("href", '#');
		enlacePrecio.setAttribute("id", "dos");
		enlacePrecio.setAttribute("Class", "total");
		enlacePrecio.setAttribute("type", "number");
		enlacePrecio.setAttribute("value", "");
        
        enlaceFecha.appendChild(contenidoFecha);
        enlaceFecha.setAttribute('href', '#');
		enlaceFecha.setAttribute('id', 'tres');
	
        
		enlaceButton.appendChild(contenidoBtn);
		enlaceButton.setAttribute("href","#");
		enlaceButton.setAttribute("id", "btnDelete");
		enlaceButton.innerText = "X";
		enlaceButton.type = "button";
		
        
		/*Agrergamos el enlace (a) a la nueva tarea (li)*/
        nuevoProducto.appendChild(enlace);
        nuevoProducto.appendChild(enlacePrecio);
		nuevoProducto.appendChild(enlaceFecha);
		nuevoProducto.appendChild(enlaceButton);
		
		
		/*Agregamos la nueva tarea a la lista*/
        lista.appendChild(nuevoProducto);
        // lista.appendChild(nuevoPrecio);
        
		
		
        tareaInput.value = "";
        precioInput.value= "";
		
		
		for (var i = 0; i <= lista.children.length -1; i++) {
			
			
			lista.children[i].addEventListener("click", function (){
				
				// this.parentNode.removeChild(this);
				
				return
			});
		}
		
		
	}
	
	
	
	
	var comprobarInput = function(){
		tareaInput.className = "";
		tareaInput.setAttribute("placeholder", "Agrega tu tarea");
		
	};
	
	var eleminarTarea = function(){
		this.parentNode.removeChild(this);
	};
	
	/*Eventos*/
	
	/*Agregar Tarea*/
	btnNuevaTarea.addEventListener("click",  function(){
		agregarTarea();
		
	});
	
	/*Comprobar Input*/
	tareaInput.addEventListener("click", comprobarInput);
	
	


	
	
	
	
	
	
	
	// }());
	

	