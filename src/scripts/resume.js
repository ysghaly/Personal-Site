
import $ from 'jquery';

$(document).ready(function(){
  $(".button:contains('Skills')").click(function(){
    window.location.href="/resume/skills";
  });

  
  $(".button:contains('Education')").click(function(){
    
    window.location.href="/resume/education";
  });

  
  $(".button:contains('Experience')").click(function(){
    
    window.location.href="/resume/experience";
  });


  $(".button:contains('Certificates')").click(function(){
    
    window.location.href="/resume/certificates";
  });

  $("span:contains(High)").css("color", "green");
  $("span:contains(Medium)").css("color", "orange");
  $("span:contains(Low)").css("color", "black");
});