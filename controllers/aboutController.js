    app.controller('aboutController', ['$scope', function($scope){
	   	$scope.message = 'about us page!';
	   	$scope.isCollapsed = false;
	   	$scope.isCollapsed1 = function(){
	   		$scope.isCollapsed = !$scope.isCollapsed ;
	   	}
	   	$scope.oneAtATime = true;

  $scope.groups = [
    {
      title: 'Dynamic Group Header - 1',
      content: 'Dynamic Group Body - 1'
    },
    {
      title: 'Dynamic Group Header - 2',
      content: 'Dynamic Group Body - 2'
    }
  ];

  $scope.items = ['Item 1', 'Item 2', 'Item 3'];

  $scope.addItem = function() {
    var newItemNo = $scope.items.length + 1;
    $scope.items.push('Item ' + newItemNo);
  };

  $scope.status = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
   }]);
