
import $ from 'jquery';

$(document).ready(function(){
  $(".button:contains('Skills')").click(function(){
    // $("#about-education").hide();
    // $("#about-background").show();

    // $(".button:contains('Background')").css("border", "solid");
    // $(".button:contains('Education')").css("border", "none");
    window.location.href="/resume/skills";
  });

  
  $(".button:contains('Education')").click(function(){
    // $("#about-background").hide();
    // $("#about-education").show();
    
    
    // $(".button:contains('Education')").css("border", "solid");
    // $(".button:contains('Background')").css("border", "none");
    
    window.location.href="/resume/education";
  });

  
  $(".button:contains('Experience')").click(function(){
    // $("#about-background").hide();
    // $("#about-education").show();
    
    
    // $(".button:contains('Education')").css("border", "solid");
    // $(".button:contains('Background')").css("border", "none");
    
    window.location.href="/resume/experience";
  });

  $("li:contains(High)").css("color", "green");
  $("li:contains(Medium)").css("color", "orange");
  $("li:contains(Low)").css("color", "black");
});