// Get current sensor readings when the page loads
window.addEventListener('load', getReadings);

// Create Temperature Gauge

var gaugePH = new RadialGauge({
    renderTo: 'gauge-ph',
    width: 300,
    height: 300,
    units: "Level",
    title: "pH",
    minValue: 0,
    maxValue: 15,
    majorTicks: [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14
    ],
    minorTicks: 2,
    strokeTicks: true,
    highlights: [
        {
            "from": 0,
            "to": 1,
            "color": "rgba(255, 44, 44, 0.75)"
        },
        {
            "from": 1,
            "to": 2,
            "color": "rgba(255, 173, 41, 0.75)"
        },
        {
            "from": 2,
            "to": 3,
            "color": "rgba(255, 195, 100, 0.75)"
        },
        {
            "from": 3,
            "to": 4,
            "color": "rgba(248, 250, 39, 0.75)"
        },
        {
            "from": 4,
            "to": 5,
            "color": "rgba(204, 247, 49, 0.75)"
        },
        {
            "from": 5,
            "to": 6,
            "color": "rgba(154, 247, 49, 0.75)"
        },
        {
            "from": 6,
            "to": 7,
            "color": "rgba(154, 247, 49, 0.75)"
        },
        {
            "from": 7,
            "to": 8,
            "color": "rgba(39, 250, 7, 0.75)"
        },
        {
            "from": 8,
            "to": 9,
            "color": "rgba(44, 201, 111, 0.75)"
        },
        {
            "from": 9,
            "to": 10,
            "color": "rgba(44, 192, 145, 0.75)"
        },
        {
            "from": 10,
            "to": 11,
            "color": "rgba(44, 172, 192, 0.75)"
        },
        {
            "from": 11,
            "to": 12,
            "color": "rgba(44, 101, 192, 0.75)"
        },
        {
            "from": 12,
            "to": 13,
            "color": "rgba(98, 44, 192, 0.75)"
        },
        {
            "from": 13,
            "to": 14,
            "color": "rgba(157, 44, 192, 0.75)"
        },
        {
            "from": 14,
            "to": 15,
            "color": "rgba(71, 11, 73, 0.75)"
        }

    ],
    ticksAngle: 225,
    startAngle: 67.5,
    colorMajorTicks: "#ddd",
    colorMinorTicks: "#ddd",
    colorTitle: "#eee",
    colorUnits: "#ccc",
    colorNumbers: "#eee",
    colorPlate: "#323C50",
    borderShadowWidth: 0,
    borders: true,
    needleType: "arrow",
    needleWidth: 2,
    needleCircleSize: 7,
    needleCircleOuter: true,
    needleCircleInner: false,
    animationDuration: 1500,
    animationRule: "linear",
    colorBorderOuter: "#fff",
    colorBorderOuterEnd: "#fff",
    colorBorderMiddle: "#ccc",
    colorBorderMiddleEnd: "#ccc",
    colorBorderInner: "#eee",
    colorBorderInnerEnd: "#eee",
    colorNeedleShadowDown: "#333",
    colorNeedleCircleOuter: "#333",
    colorNeedleCircleOuterEnd: "#111",
    colorNeedleCircleInner: "#111",
    colorNeedleCircleInnerEnd: "#222",
    valueBoxBorderRadius: 1,
    colorValueBoxRect: "#049faa",
    colorValueBoxRectEnd: "#049faa",
    colorValueBoxBackground: "#f1fbfc",
    valueInt: 2,
    value: 7.5
}).draw();

var gaugeTemp = new LinearGauge({
    renderTo: 'gauge-temperature',
    width: 120,
    height: 400,
    units: "Degree Celsius",
    minValue: 0,
    maxValue: 50,
    majorTicks: [
      "0",
      "5",
      "10",
      "15",
      "20",
      "25",
      "30",
      "35",
      "40",
      "45",
      "50"
    ],
    minorTicks: 2,
    strokeTicks: true,
    highlights: [
        {
            "from": 36,
            "to": 50,
            "color": "rgba(200, 50, 50, .75)"
        },
        {
            "from": 32,
            "to": 36,
            "color": "rgba(240, 255, 1, .75)"
        },
        {
            "from": 21,
            "to": 32,
            "color": "rgba(39, 250, 7, 0.75)"
        },
        {
            "from": 0,
            "to": 15,
            "color": "rgba(200, 50, 50, .75)"
        },
        {
            "from": 15,
            "to": 21,
            "color": "rgba(240, 255, 1, .75)"
        }
    ],
    colorPlate: "#323c50",
    colorMajorTicks: '#f5f5f5',
    colorMinorTicks: '#ddd',
    colorPlate: "#323c50",
    colorTitle: "#eee",
    colorUnits: "#ccc",
    colorNumbers: "#eee",
    borderShadowWidth: 0,
    borders: true,
    needleType: "arrow",
    needleWidth: 2,
    animationDuration: 1500,
    animationRule: "linear",
    tickSide: "left",
    numberSide: "left",
    needleSide: "left",
    barStrokeWidth: 7,
    barBeginCircle: false,
    colorValueBoxRect: "#049faa",
    colorValueBoxRectEnd: "#049faa",
    colorValueBoxBackground: "#f1fbfc",
    valueInt: 2,
    colorBarProgressEnd: "#03C0C1",
    value: 25
}).draw();


// Create Humidity Gauge
var gaugeHum = new RadialGauge({
  renderTo: 'gauge-humidity',
  width: 300,
  height: 300,
  units: "Percentage",
  minValue: 0,
  maxValue: 100,
  colorValueBoxRect: "#049faa",
  colorValueBoxRectEnd: "#049faa",
  colorValueBoxBackground: "#f1fbfc",
  valueInt: 2,
  majorTicks: [
      "0%",
      "10%",
      "20%",
      "30%",
      "40%",
      "50%",
      "60%",
      "70%",
      "80%",
      "90%",
      "100%"
  ],
  minorTicks: 4,
  strokeTicks: true,
  highlights: [
      {
          "from": 50,
          "to": 60,
          "color": "rgb(2,165,166, .75)"
      },
      {
          "from": 70,
          "to": 80,
          "color": "rgb(2,165,166, .75)"
      },
      {
          "from": 60,
          "to": 70,
          "color": "rgb(2,234,236, .75)"
      },
      {
          "from": 0,
          "to": 50,
          "color": "rgb(2,115,116, .75)"
      },
      {
          "from": 80,
          "to": 100,
          "color": "rgb(2,115,116, .75)"
      }
  ],

  colorMajorTicks: '#f5f5f5',
  colorMinorTicks: '#ddd',
  colorPlate: "#323c50",
  colorTitle: "#eee",
  colorUnits: "#ccc",
  colorNumbers: "#eee",
  borderShadowWidth: 0,
  borders: false,
  needleType: "line",
  colorNeedle: "#03C0C1",
  colorNeedleEnd: "#007F80",
  needleWidth: 2,
  needleCircleSize: 3,
  colorNeedleCircleOuter: "#007F80",
  needleCircleOuter: true,
  needleCircleInner: false,
  animationDuration: 1500,
  animationRule: "linear",
  borders: true,
  colorBorderOuter: "#fff",
  colorBorderOuterEnd: "#fff",
  colorBorderMiddle: "#ccc",
  colorBorderMiddleEnd: "#ccc",
  colorBorderInner: "#eee",
  colorBorderInnerEnd: "#eee",
  value: 50
}).draw();

//round off Function
let roundOff = (num, places) => {
  const x = Math.pow(10,places);
  return Math.round(num * x) / x;
}

// Function to get current readings on the webpage when it loads for the first time
function getReadings(){
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myObj = JSON.parse(this.responseText);
      console.log(myObj);
      var ph = myObj.phValue;
      var temp = myObj.tempValue ;

      //convert humidity readings to Percentage
      var flag = 1024 - myObj.moistureValue;
      var finalHum = (flag/1024) * 100;

      gaugePH.value = Math.round(ph);
      gaugeTemp.value = Math.round(temp);
      gaugeHum.value = Math.round(finalHum);
      
    }
  };
  xhr.open("GET", "/readings", true);
  xhr.send();
}

if (!!window.EventSource) {
  var source = new EventSource('/events');

  source.addEventListener('open', function(e) {
    console.log("Events Connected");
  }, false);

  source.addEventListener('error', function(e) {
    if (e.target.readyState != EventSource.OPEN) {
      console.log("Events Disconnected");
    }
  }, false);

  source.addEventListener('message', function(e) {
    console.log("message", e.data);
  }, false);

  source.addEventListener('new_readings', function(e) {
    console.log("new_readings", e.data);
    var myObj = JSON.parse(e.data);
    console.log(myObj);
    gaugePH.value= myObj.phValue;
    gaugeTemp.value = myObj.tempValue ;

    //convert humidity readings to Percentage
    var flag = 1024 - myObj.moistureValue;
    var finalHum = (flag/1024) * 100;
    gaugeHum.value = finalHum;

    document.getElementById("d1").innerHTML = roundOff(myObj.phValue, 2);
    document.getElementById("d2").innerHTML = roundOff(myObj.tempValue, 2);
    document.getElementById("d3").innerHTML = roundOff(finalHum, 2);

    if (roundOff(myObj.phValue, 2) < 5){
      document.getElementById("s1").innerHTML = "Low pH";
    }
    else if (myObj.phValue > 5 && myObj.phValue < 6.1) {
      document.getElementById("s1").innerHTML = "Warning pH";
    }
    else if (myObj.phValue > 6.8 && myObj.phValue < 8){
      document.getElementById("s1").innerHTML = "Warning pH";
    }
    else if (myObj.phValue > 8){
      document.getElementById("s1").innerHTML = "High pH";
    }
    else{
      document.getElementById("s1").innerHTML = "Optimal";
    }

    if (myObj.tempValue < 15){
      document.getElementById("s2").innerHTML = "Low Temp";
    }
    else if (myObj.tempValue > 15 && myObj.tempValue < 21 || myObj.tempValue > 32 && myObj.tempValue < 36){
      document.getElementById("s2").innerHTML = "Warning Temp";
    }
    else if (myObj.tempValue > 36){
      document.getElementById("s2").innerHTML = "High Temp";
    }
    else{
      document.getElementById("s2").innerHTML = "Optimal";
    }

    if (finalHum < 50){
      document.getElementById("s3").innerHTML = "Low Moisture";
    }
    else if (finalHum > 50 && finalHum < 60 || finalHum > 70 && finalHum < 80){
      document.getElementById("s3").innerHTML = "Warning Moisture";
    }
    else if (finalHum > 80){
      document.getElementById("s3").innerHTML = "High Moisture";
    }
    else{
      document.getElementById("s3").innerHTML = "Optimal";
    }
  }, false);
}
