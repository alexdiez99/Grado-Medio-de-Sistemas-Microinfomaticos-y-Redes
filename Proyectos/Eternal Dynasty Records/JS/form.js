function valida_envia(){
			if (document.formulario.nombre.value.length==0){
				alert("Tiene que escribir su nombre")
				document.formulario.nombre.focus()
				return 0;
			}
			if (document.formulario.apellido1.value.length==0){
				alert("Tiene que escribir su primer apellido")
				document.formulario.apellido1.focus()
				return 0;
			}
			if (document.formulario.correo.value.length==0){
				alert("Tienes que escribir su correo electrónico")
				document.formulario.correo.focus()
				return 0;
			}
			if (document.formulario.cp.value.length==0){
				alert("Tienes que escribir su código postal")
				document.formulario.cp.focus()
				return 0;
			}
			if (document.formulario.direccion.value.length==0){
				alert("Tienes que escribir su dirección postal")
				document.formulario.direccion.focus()
				return 0;
			}
			if (document.formulario.poblacion.value.length==0){
				alert("Tienes que escribir su población")
				document.formulario.poblacion.focus()
				return 0;
			}
			if (document.formulario.seleccionar.selectedIndex==0){
				alert("Debe seleccionar el tipo de inscripción")
				document.formulario.seleccionar.focus()
				return 0;
			}
			if (document.formulario.seleccionar2.selectedIndex==0){
				alert("Debe seleccionar el tipo de cuota")
				document.formulario.seleccionar2.focus()
				return 0;
			}
		 	alert("El mail ha sido correctamente enviado y que si no nos ponemos en contacto en las próximas 24 horas llamen al teléfono +34 636 363 636");
   			document.formulario.submit();
		}