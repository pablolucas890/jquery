$(document).ready(() => {
	
	$('#documentacao').on('click', () => {

		//Método load: carrega uma págia e recebe como parâmetro uma url
		//
		//	SINTAXE
		//
		//
		/*

		$.post('url',objetoParametro,funcaoResposta)

		$.post('url',
		{
			valor1: variavel1,
			valor2: variavel2
		},
		function(resposta){
			acao
		}
		)

		*/
		//
		//
		//$('#pagina').load('documentacao.html')

		/*
		$.get('documentacao.html', data => { 
			$('#pagina').html(data)
		})
		*/
		$.post('documentacao.html', data => { 
			$('#pagina').html(data)
		})
	})

	$('#suporte').on('click', () => {
		//$('#pagina').load('suporte.html')

		/*
		$.get('suporte.html', data => { 
			$('#pagina').html(data)
		})
		*/
		$.post('suporte.html', data => { 
			$('#pagina').html(data)
		})
	})


	//ajax
	$('#competencia').on('change', e => { // quando o select for mudado

		let competencia = $(e.target).val() //seleção do value do select
		
		//	método nativo Ajax do jQuery
		//	
		//	SINTAXE:
		/*
		
		$.ajax({
			url: 'url',
			type: 'Tipo de Requisiçao (GET or POST)',
			data: {
				parametro1 : valor1,
				parametro2 : valor2
			},
			dataType: 'tipo de recepçao de dados (json)'
			success: dados => {
				varivael3 = dados.valorResposta3;
				variavel4 = dados.valorResposta4;
				acao
			}
			error: erro => {
				variavelDeErro = erro;
				acao
			}
		})
		.done(function(Array){
			variavel5  = Array['valor1DoVetorJson']
			variavel6  = Array['valor2DoVetorJson']
			acao
		}
		.fail(function(jqXHR, textStatus, msg){
			acao
		})
		)


		*/ 
		
		
		$.ajax({
			type: 'GET',
			url: 'app.php',
			data: `competencia=${competencia}`, //x-www-form-urlencoded
			dataType: 'json',
			success: dados => { 
				$('#numeroVendas').html(dados.numeroVendas)
				$('#totalVendas').html(dados.totalVendas)
			},
			error: erro => { console.log(erro) }
		})

		//método, url, dados, sucesso, erro
	})
})