function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";

   
} 
 // Get the element with id="defaultOpen" and click on it
 document.getElementById("defaultOpen").click();

 var app = angular.module('ichiban', []);

 app.controller("myCtrl", function($scope){
   $scope.firstName = "Isaac";
   $scope.lastName = "Cornelius";
   $scope.email = "Email: Isaac.H.Cornelius@gmail.com";
   $scope.linkedin = "https://www.linkedin.com/in/isaac-cornelius-73b302161";
 });