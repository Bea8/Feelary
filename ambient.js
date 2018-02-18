$(document).ready(function(){

  $("#sun, #hart, #sunset, #cloud").click(function(){
      $(this).toggleClass("total_eclipse");
  });

  $("#sun").click(function(){
      $(this).toggleClass("rotate");
      $("body").toggleClass("newCol_1");
      $("footer").toggleClass("newCol_1f");
      $("#sunset, #hart, #cloud").removeClass("total_eclipse").toggleClass("outline");

  });

  $("#sunset").click(function(){
      $("g.tides").toggleClass("flow");
  });

  $("#hart").click(function(){
      $(this).toggleClass("pulse");
  });

  $("#cloud").click(function(){
      $("#bolt2").toggleClass("lightning2");
      $("#bolt1").toggleClass("lightning1");

  });

});


/*d3.js transformations*/
d3.select("body").transition()
    .style("background-color", "black");
