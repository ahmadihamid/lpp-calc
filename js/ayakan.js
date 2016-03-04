$("#ayakan1").on("propertychange change keyup input paste", function() {
  var tot = +$("#ay1total").val();
  var val1 = +$("#ay1b1").val();
  var val2 = +$("#ay1b2").val();
  var val3 = +$("#ay1b3").val();
  var val4 = +$("#ay1b4").val();

  $("#ay1total").val(Math.round((val1 + val2 + val3 + val4)*100)/100);
  $("#ay1result1").val(Math.round((val1 / tot * 100)*100)/100);
  $("#ay1result2").val(Math.round((val2 / tot * 100)*100)/100);
  $("#ay1result3").val(Math.round((val3 / tot * 100)*100)/100);
  $("#ay1result4").val(Math.round((val4 / tot * 100)*100)/100);
  $("#ay1gtotal").val(tot / tot * 100);
});

$("#ayakan2").on("propertychange change keyup input paste", function() {
  var tot = +$("#ay2total").val();
  var val1 = +$("#ay2b1").val();
  var val2 = +$("#ay2b2").val();
  var val3 = +$("#ay2b3").val();
  var val4 = +$("#ay2b4").val();

  $("#ay2total").val(Math.round((val1 + val2 + val3 + val4)*100)/100);
  $("#ay2result1").val(Math.round((val1 / tot * 100)*100)/100);
  $("#ay2result2").val(Math.round((val2 / tot * 100)*100)/100);
  $("#ay2result3").val(Math.round((val3 / tot * 100)*100)/100);
  $("#ay2result4").val(Math.round((val4 / tot * 100)*100)/100);
  $("#ay2gtotal").val(tot / tot * 100);
});

$("#ayakan3").on("propertychange change keyup input paste", function() {
  var tot = +$("#ay3total").val();
  var val1 = +$("#ay3b1").val();
  var val2 = +$("#ay3b2").val();
  var val3 = +$("#ay3b3").val();
  var val4 = +$("#ay3b4").val();

  $("#ay3total").val(Math.round((val1 + val2 + val3 + val4)*100)/100);
  $("#ay3result1").val(Math.round((val1 / tot * 100)*100)/100);
  $("#ay3result2").val(Math.round((val2 / tot * 100)*100)/100);
  $("#ay3result3").val(Math.round((val3 / tot * 100)*100)/100);
  $("#ay3result4").val(Math.round((val4 / tot * 100)*100)/100);
  $("#ay3gtotal").val(tot / tot * 100);
});

$("#ayakan4").on("propertychange change keyup input paste", function() {
  var tot = +$("#ay4total").val();
  var val1 = +$("#ay4b1").val();
  var val2 = +$("#ay4b2").val();
  var val3 = +$("#ay4b3").val();
  var val4 = +$("#ay4b4").val();

  $("#ay4total").val(Math.round((val1 + val2 + val3 + val4)*100)/100);
  $("#ay4result1").val(Math.round((val1 / tot * 100)*100)/100);
  $("#ay4result2").val(Math.round((val2 / tot * 100)*100)/100);
  $("#ay4result3").val(Math.round((val3 / tot * 100)*100)/100);
  $("#ay4result4").val(Math.round((val4 / tot * 100)*100)/100);
  $("#ay4gtotal").val(tot / tot * 100);
});

Math.round10(x, -2);   // 1.01 -- compare this with Math.round(1.005*100)/100 above