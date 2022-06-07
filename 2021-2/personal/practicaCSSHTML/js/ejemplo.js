function hacerTarea(asunto, callback){
	alert(`Empezando mi ${asunto} tarea`);
	callback();
}

function TerminandoTarea(){
	alert('Tarea terminada');
}

hacerTarea('math', TerminandoTarea);