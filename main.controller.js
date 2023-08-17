angular.module('name').controller("mainController",function($scope){
    $scope.check=function(){
        $scope.a=document.getElementById('in').value;
        $scope.count=0;
        if($scope.a[0]!="," && $scope.a[0]!=" " && $scope.a!=""){
            $scope.count++;
        }
        for(i=1;i<$scope.a.length-1;i++){
            if($scope.a[i]==","){
                if ($scope.a[i+1]!="," && $scope.a[i+1]!=" " ){
                    $scope.count++;
                }
            }
        }
        if($scope.count > 0 && $scope.count<=3){
            $scope.ou="Enjoy!";
            document.getElementById('in').style.borderColor="green";
        }
        else if($scope.count>3){
            $scope.ou="Too Much!";
            $scope.input="invalid";
            document.getElementById('in').style.borderColor="red";
        }
        else{
            $scope.ou="Please enter data first";
        }
    }
})//&&($scope.a[i+1] >= 65 && $scope.a[i+1] < 91) || ($scope.a[i+1] >= 97 && $scope.a[i+1] < 123)