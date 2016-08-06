app.controller('profileController', ['$scope', function($scope) {
  $scope.userForm = true;
  $scope.user = {};

  $scope.submit = function(){
		$scope.userDetail = $scope.user;
		$scope.userForm = false;
	};
}])

.directive('myUser', function() {
  return {
  	restrict:'EA',
  	scope:{
      new :'='
  	},
    template: 'Name: {{fname}} Address: {{lname}}',

    link: function(scope, ele, att){
    	scope.fname ='';
    	scope.lname ='';
        scope.$watch('new', function (object) {
			if(object){
				scope.fname =object.fname;
    			scope.lname =object.lname;
			}
          });
    }
  };
});

