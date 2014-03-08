angular.module('app').controller('mvNavBarLoginCtrl', function ($scope, $http, mvIdentity, mvNotifer, mvAuth, $location) {
    $scope.identity = mvIdentity;
    $scope.signin = function (username, password) {
        mvAuth.authenticate(username, password).then(function (success) {
            if (success) {
                mvNotifer.notify('You have successfully signed in!');
            } else {
                mvNotifer.notify('User/Password combination incorrect');
            }
        });
    }

    $scope.signout = function () {
        mvAuth.logoutUser().then(function () {
            $scope.username = "";
            $scope.password = "";
            mvNotifer.notify('You have successfully signed out!');
            $location.path('/');

        })
    }

});