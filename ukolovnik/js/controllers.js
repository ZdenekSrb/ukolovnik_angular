function FrameworksController( $scope ) {
    $scope.frameworks = JSON.parse(localStorage.getItem('frameworks')) || [];

    $scope.addFramework = function() {
        $scope.data.id = $scope.frameworks.length+1;
        $scope.frameworks.push($scope.data);
        $scope.data = {};
    };

    $scope.$watch(
        'frameworks',
        function( newList, oldList ) {
            localStorage.setItem('frameworks', JSON.stringify(newList));
        },
        true
    );
};