angular.module('app').controller('mvMainCtrl', function ($scope) {
    $scope.courses = [
        {name: 'C# for Sociopath', featured: true, published: new Date('1/1/2014')},
        {name: 'C# for Non-Sociopath', featured: true, published: new Date('1/1/2014')},
        {name: 'Super Duper Expert C#', featured: false, published: new Date('1/1/2013')}
    ]
});