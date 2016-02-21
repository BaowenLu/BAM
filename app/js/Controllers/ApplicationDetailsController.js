angular.module('BAMApp.controllers').controller('ApplicationDetailsController', function ($scope, dataService) {
    $scope.items = dataService.Items;
    $scope.current = dataService.Current;
    $scope.selected = $scope.items[dataService.Current];
    $scope.update= function(selected){
    	switch(selected.ID)
    	{
    		case 0:
    			$scope.current = dataService.Current = 0;
    		break;
    		case 1:
    			$scope.current = dataService.Current = 1;
    		break;
    		case 2:
    			$scope.current = dataService.Current = 2;
    		break;
    	}
    };
});


