var app = angular.module('toDo');

app.controller('MainCtrl', function($scope, mainService){

  $scope.tasks = mainService.getTasks();
  $scope.jobs = mainService.getJobs();

  $scope.addTask = function(){
    pushedTask = $scope.newTask;
    mainService.addTask(pushedTask);
  };


  $scope.addJob = function(){
    pushedJob = {what: $scope.newJob, active: true};
    mainService.addJob(pushedJob);
  };

  $scope.checked = function(job){
    mainService.changeActivity(job);
  };

});