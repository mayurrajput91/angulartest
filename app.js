var myApp = angular.module('myApp', []);

angular.module('MyApp', []).directive('animate', function(){
    return function(scope, elm, attrs) {
        setTimeout(function(){
            elm.addClass('show');
        });
    };
}).directive('remove', function(){
    return function(scope, elm, attrs) {
        elm.bind('click', function(e){
            e.preventDefault();
            elm.removeClass('show');
            setTimeout(function(){
                scope.$apply(function(){
                    scope.$eval(attrs.remove);
                });
            }, 200);                    
        });
    };
});

function App($scope) {
    $scope.names = [];
	
	$scope.names = [
    'item one',
    'item two',
    'item three'
  ];
	
	$scope.add = function() {
    	$scope.names.push($scope.Categorie_input);
    	$scope.Categorie_input = '';
	};
	
    /*$scope.remove = function(index) {
        name.push($scope.names.splice(index, 1)[0]);
    };*/
}