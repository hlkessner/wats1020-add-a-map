/* Begin by adding your on ready handler here, and then create the
   rest of your functions inside the on ready handler.


   (Note that you do not need to manually call Bootstrap functions in
   your Javascript because Bootstrap will automatically recognize your
   HTML structures and invoke the proper JS code accordingly. Be sure
   to reference the Bootstrap documentation.)
*/
$( document ).ready(function() {

  //smooth scroll
  $('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 1500, 'swing', function () {
	        window.location.hash = target;
	    });
	});
//fuction that controls the tabs
$('#myTabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
});
  
 var mymap = L.map('mapid').setView([46.852, -121.760], 13);
   
  //Sat layer for the map container
  var satLayer = L.tileLayer('https://api.mapbox.com/styles/v1/hlkessner/ciqyhv0pr0002bsnk4pjtqd5k/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaGxrZXNzbmVyIiwiYSI6ImNpcXU3ZWh5MTAwYWVmcm5odmZjaGNzY3UifQ.EIAGUVi9S2Ew6ajp2sBT8Q', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18, minZoom: 10,
  });
  //Map layer for the map container
      var mapViewLayer = L.tileLayer('https://api.mapbox.com/styles/v1/hlkessner/ciqu7fixp0002bfnhh18ggf5f/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaGxrZXNzbmVyIiwiYSI6ImNpcXU3ZWh5MTAwYWVmcm5odmZjaGNzY3UifQ.EIAGUVi9S2Ew6ajp2sBT8Q', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18, minZoom: 10,
 });
  //street layer for the map container
      var streetLayer = L.tileLayer('https://api.mapbox.com/styles/v1/hlkessner/ciqu7fixp0002bfnhh18ggf5f/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaGxrZXNzbmVyIiwiYSI6ImNpcXU3ZWh5MTAwYWVmcm5odmZjaGNzY3UifQ.EIAGUVi9S2Ew6ajp2sBT8Q', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18, minZoom: 10,
 });
 
var mapLayer = {
   "satellite": satLayer, 
   "map": mapViewLayer, 
   "openStreet": streetLayer
   };
 
  L.control.layers(mapLayer).addTo(mymap);
   satLayer.addTo(mymap);

//Markers for 3 differnet locations on Mt Rainier
  //Marker for Liberty Cap
var liberty = L.circle ([46.862845, -121.769814], 600, {
  color: 'red'
}).addTo(mymap);  
liberty.bindPopup("<b>Liberty Cap</b>").openPopup();
  //Marker for Paradise
var paradise = L.circle ([46.785462, -121.734973], 600, {
    color: 'red'                     
}).addTo(mymap);
paradise.bindPopup("<b>Paradise</b>").openPopup();
  //Marker for Mt Rainer National Park
var park = L.marker ([46.880428, -121.726959]).addTo(mymap);
park.bindPopup("<b>Mt Rainier National Park</b>").openPopup();
})





