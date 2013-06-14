// JavaScript Document
$(document).ready(function(e){
	document.addEventListener("deviceready",function(){
		$('.Enviar').tap(function(){
			var formulario=$(this).parents('form');
			var usuario =document.getElementById('Usuario').value;
			var password =document.getElementById('Password').value;
			
			var ID_Usuario="";
			function LoginConectar(U,P)
		{
			datos="usuario"+U+"&password"+P;
			$.ajax({
				type:"post",
				url:"http//192.168.165./sitio6/Log_in_m.php/",
				data: datos
			}).done(function(msg){
				alert(msg);
				if(msg==""||msg==null)
				{alert("usuario incorrecto");}
				else
				{
					var OUsuario=jQuery.parseJSON(msg);
					ID_Usuario=OUsuario.Usuario;
				alert("Bienvenido " + ID_Usuario);
				location.href="#Busquedad";
				}
		});//function msg
		}//function
	
	});//tap
	});//deviceready
});//ready