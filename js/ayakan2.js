$(".ayakan2").on("propertychange change keyup input paste", function() {
  var tot = +$(".total").val();
  var val1 = +$(".b1").val();
  var val2 = +$(".b2").val();
  var val3 = +$(".b3").val();
  var val4 = +$(".b4").val();
  var res1 = +$(".res1").val();
  var res2 = +$(".res2").val();
  var res3 = +$(".res3").val();
  var res4 = +$(".res4").val();
  $("#total").val(val1 + val2 + val3 + val4);
  $("#result1").val(val1 / tot * 100);
  $("#result2").val(val2 / tot * 100);
  $("#result3").val(val3 / tot * 100);
  $("#result4").val(val4 / tot * 100);
  $("#gtotal").val(tot / tot * 100);
});
