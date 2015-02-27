var UI = require('ui');
var ajax = require('ajax');

var card = new UI.Card({
  title: 'Weather',
  subtitle: 'Fetching ...'
});

card.show();

var cityName = 'Lexington,SC';
var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName;

ajax(
{
  url: url,
  type: 'json'
},
function(data) {
  console.log('success');
  console.log(data);
  
  var location = data.name;
  var k = data.main.temp;
  var f = (k - 273.15) * 1.8 + 32;
  var temp = Math.round(f) + 'F';
  var desc = data.weather[0].description + '\n' + '\n' + 'tmack rocks';
  
  card.subtitle(location + ', ' + temp);
  card.body(desc);
},
function(error) {
  console.log('error');
  console.log(error);
  
  card.subtitle('Error!');
  card.body(error);
});
