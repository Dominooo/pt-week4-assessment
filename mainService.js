var app = angular.module('toDo');

app.factory('mainService', function(){

  var tasks = ['eat','sleep'];

  var jobs = [];

  return {
    getTasks: function(){
      return tasks;
    },

    getJobs: function(){
      return jobs;
    },

    changeActivity: function(job){
      for (var i = 0; i < jobs.length; i++) {
        if (job === jobs[i]){
          jobs[i].active = false;
        }
      }
    },

    addTask: function(){
      if (pushedTask){
        tasks.push(pushedTask);
      }
    },

    addJob: function(){
      if (pushedJob){
        jobs.push(pushedJob);
      }
    }

  };






});