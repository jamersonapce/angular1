angular.module('minhasDiretivas', [])
	.directive('meuPainel', function(){
		var ddo = {};
		ddo.restrict = "AE"; //A: de atributo, E de Elemnto
		ddo.scope = {
			titulo: '@'
		};
		ddo.transclude = true; //indica que todo elemento filho para a diretiva deve ser mantido
		ddo.templateUrl = 'js/directives/meu-painel.html';

		return ddo;
	});