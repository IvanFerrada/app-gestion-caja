(function(){

	let list = document.getElementById("lista");
	let	taskInput =  document.getElementById("tareaInput");
	let priceInput = document.getElementById("priceInput");
	let	btnAddTask = document.getElementById("btn-agregar");
	

 
	
	let addTask = function(){

		let task = taskInput.value;
		let price = priceInput.value;



		// create a new div

		// add content
		
		
		let buyList = document.createElement("li");
		
		let ordenContent = document.createTextNode(task);
		let ordenPrice   = document.createTextNode(price);
		let button = document.createElement('button'); 
		
		ordenPrice.id ='priceProduc';
		
		button.type = 'button'; 
		button.id = 'btnLista';
		button.innerText = 'X'; 
		document.body.appendChild(button); 
		
		buyList.setAttribute("id", "precio");
		
		//añade texto al div creado.
		buyList.appendChild(ordenContent);
		buyList.appendChild(ordenPrice);
		buyList.appendChild(button);
		
		list.appendChild(buyList);
		
		
		button.addEventListener("click",function(){
			buyList.remove();
		});
		
		
		
		
		taskInput.value = "";
		priceInput.value= "";
		
		
		
	for (var i = 0; i <= list.children.length -1; i++){
			
			
		list.children[i].addEventListener("click", function (){
				
				
			});
		}
	}
	
	
	
	
	
	
	let checkInput = function(){
		taskInput.className = "";
		taskInput.setAttribute("placeholder", "Agrega tu tarea");
		
	};
	
	let deleteTask = function(){
		this.parentNode.removeChild(this);
	};
	
	/*Eventos*/
	
	/*Agregar Tarea*/
	btnAddTask.addEventListener("click", addTask);
	
	/*Check Input*/
	taskInput.addEventListener("click", checkInput);
	
	
	/*Borrando Elementos de la lista*/
	for (var i = 0; i <= list.children.length -1; i++) {
		list.children[i].addEventListener("click", deleteTask);
		
	}
	
	
	let btnTotal = document.getElementById("btnTotal");
	btnTotal.addEventListener("click", box);
	
	function box(){
		let cajaTotal = document.getElementById("precio");
		ibm = cajaTotal;
		console.log(ibm.value);
		
	}
	
	
	
	
	
	
}());



// for (var i = 0; i <= lista.children.length -1; i++) {
	
	
	// 		lista.children[i].addEventListener("click", function (){
		
		// 			this.parentNode.removeChild(this);
		
		// 			return
		// 		});
		// 	}
		




		// if (tarea === "") {
		// 	tareaInput.setAttribute("placeholder", "Agrega una tarea valida");
		// 	tareaInput.className = "error";
		
		// 	return false;
		// }