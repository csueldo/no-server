angular.module('basketballApp')
  .controller('findgameController', function($scope, basketballService){

    $scope.meetup = basketballService.basketballData;
    console.log($scope.meetup);


    $scope.addMeetup = function( newMeetup ) {

        basketballService.basketballData.unshift( newMeetup );

        $scope.newMeetup = {};


      };
  });
