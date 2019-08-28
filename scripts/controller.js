// basic functionalities
$(document).ready(function(){
  $(".connect").click(function () {
    client = mqtt.connect($("#address").val())
    client.subscribe("mqtt/demo")
    client.on("connect", function () {
      console.log("Successfully connected");
    })
    client.on("message", function (topic, payload) {
      // var add= "<tr><td>" +topic+ "</td><td>" +payload+ "</td></tr>";
      // $("table tbody").append(add);
      console.log([topic, payload].join(": "));  
    })
    client.publish("mqtt/demo", "hello world!")
  
    
    
  })

  $(".publish").click(function(){
    var ttopic=$("#ptopic").val();
    var payload=$("#pload").val();
    client.publish("mqtt/"+ ttopic, payload);
    // var ptopic=$("#ptopic").val();
    // var payload = $("#pload").val();
    // // var time=
    // var add= "<tr><td>" +ptopic+ "</td><td>" +payload+ "</td></tr>";
    // $("table tbody").append(add);
  })
  $(".publish").click(function(){

  })
})





// // advance functionalities
// client = mqtt.connect("ws://broker.hivemq.com:8000/mqtt")
// client.subscribe("mqtt/demo", function (err){
//   if (err){
//     console.log(err);
//   } else {
//     console.log("subscribed")
//   }
// })

// client.on("connect", function(){
//     console.log("Successfully connected");
// })

// client.on("message", function (topic, payload) {
//   console.log([topic, payload].join(": "));
//   client.end();
// })

// client.publish("mqtt/demo", "hello world!", function(err){
//   if (err){
//     console.log(err)
//   } else {
//     console.log("published")
//   }
// })
