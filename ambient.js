$(document).ready(function(){

  $("#sun, #hart, #sunset, #cloud").click(function(){
      $(this).toggleClass("total_eclipse");
  });

  $("#sun").click(function(){
      $(this).toggleClass("rotate");
      $("body").toggleClass("newCol_1");
      $("footer").toggleClass("newCol_1f");
      $("#sunset, #hart, #cloud").toggleClass("total_eclipse").toggleClass("outline");

  });

  $("#sunset").click(function(){
      $(this).toggleClass("total_eclipse");
      $("g.tides").toggleClass("flow");
      $("#sun, #sunset").removeClass("outline");
  });

  $("#hart").click(function(){
      $(this).toggleClass("total_eclipse");
      $(this).toggleClass("pulse");
      $("#sun, #sunset, #hart").removeClass("outline");
  });

  $("#cloud").click(function(){
      $(this).toggleClass("total_eclipse");
      $("#bolt2").toggleClass("lightning2");
      $("#bolt1").toggleClass("lightning1");
      $("#sunset, #hart, #sun, #cloud").removeClass("outline");

  });

});


/*d3.js transformations*/
d3.select("body").transition()
    .style("background-color", "black");
