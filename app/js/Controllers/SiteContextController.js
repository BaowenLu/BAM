angular.module('BAMApp.controllers').controller('SiteContextController', function ($scope, dataService) {

	$scope.SubRegionDef = dataService.SubRegionDef;
	$scope.Current = dataService.Current;
	$scope.Items = dataService.Items;
	$scope.subregionSelected = $scope.SubRegionDef[$scope.Items[$scope.Current].SiteContext.IBRA_SubRegion.ID-1];

	$scope.update= function(subregionSelected){
    	$scope.Items[$scope.Current].SiteContext.IBRA_SubRegion.ID = subregionSelected.ID;
    };


});
