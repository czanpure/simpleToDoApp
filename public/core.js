var simpleTodo = angular.module('simpleTodo', []);

function mainController($scope, $http){
    $scope.formData = {};

    $http.get('/api/todos/')
         .success(function(data){
            $scope.todos = data;
        })
        .error(function(data){
            console.log('Error:' + data);
        });

    $scope.createTodo = function() {
        $http.post('/api/todos/', $scope.formData)
             .success(function(data){
                // clear the form so that user can enter a new todos
                $scope.formData = {};
                $scope.todos = data;
                console.log(data);
            })
             .error(function(data){
                console.log('Error:' + data);
            });
    };

    //delete a todouser created
    $scope.deleteTodo = function(id) {
        $http.delete('/api/todos/' + id)
             .success(function(data){
                $scope.todos = data;
                console.log(data);
            })
             .error(function(){
                console.log('Error:' + data);
            })
    };
}