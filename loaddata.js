var ldata = data;


$("#Nummern_1_ text").hover(function(e) {
  console.log($(this).text());
  $('#info').css('display','block');
  var cname = "";
  var num = "";
  var dname = "";

  for(var i = 0;i < ldata.length;i++){
    if(ldata[i]["Constituency Number"] == $(this).text()) {
      cname = ldata[i]["Constituency Name"]; 
      dname = ldata[i]["DIST_NAME"];
      num = ldata[i]["Constituency Number"];
   
      break;
    }

  }
  $('#info').html("<table>" + "<tr>" +  "Constituency Number: " + num + "</tr>" + "<br>" + "<tr>" +  "District Name: " + dname + "</tr>" + "<br>" + "<tr>" +  "Constituency Name: " + cname + "</tr>" + "</table>");
  //   $('#info').html("<table>" + 
  //   "<tr>" + 
  //     "<th rowspan="2">" + "District" + "</th>" + 
  //     "<th>" + "Constituency" + "</th>" + 
  //     "<th rowspan="2" colspan="2">" + "ST" + "</th>" + 
  //   "<tr>" + 
  //     "<th>" + "Constituency No" + "</th>" + 
  //   "</tr>" + 

  //   "<tr>" + 
  //     "<th>" + "Rank" + "</th>" + 
  //     "<th>" + "Party"  + "</th>" + 
  //     "<th>" + "Candidates" + "</th>" + 
  //     "<th>" + "Votes" +"</th>" +
  //   "</tr>" +

    
  // "</table>");

});
$("#Nummern_1_ text").mouseleave(function(e) {
  $('#info').css('display','none');
});


$(document).mousemove(function(e) {
  if(e.pageY - $('#info').height() - 30 < 0) $("#info").css('top', e.pageY+100);
  else $('#info').css('top',Math.min(e.pageY + 100,e.pageY-$('#info').height()-30));
  $('#info').css('left',Math.max(0,e.pageX-($('#info').width())/2));
}).mouseover(); 

