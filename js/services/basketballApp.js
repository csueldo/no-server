angular.module('basketballApp', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home',{
        url:'/',
        templateUrl: "../index.html"
      })
      .state('find-setup', {
        url:'/find-setup' ,
        parent: 'home' ,
        templateUrl: "../views/find-setup.html"
      })
      .state('findgame', {
        url: '/findgame' ,
        parent: 'home' ,
        templateUrl: '../views/findgame.html'
      })
      .state('setupgame', {
        url: '/setupgame' ,
        parent: 'home' ,
        templateUrl: '../views/setupgame.html'
      });

      $urlRouterProvider
        .otherwise('/');

  });
