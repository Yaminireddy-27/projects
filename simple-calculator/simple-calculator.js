let inputSearch=document.getElementById("inputSearch");
let buttons=document.querySelectorAll("button");

function calculate(){
	try{
		inputSearch.value=eval(inputSearch.value);
	} catch(error) {
		inputSearch.value="malformed Operarion";
	}
}

function operation(buttonValue){
	if (buttonValue === "AC"){
		inputSearch.value="";
	}else if(buttonValue === "DEL"){
		inputSearch.value=inputSearch.value.slice(0,-1);
	}else{
		inputSearch.value += buttonValue;
	}
}


