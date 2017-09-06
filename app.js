var initialize = function(){  
  var center = {lat: 43.3160031, lng: 11.2926298}; // Siena
  var other = {lat: 43.3894567, lng: 11.2219444}; // Monteriggioni
  var mapDiv = document.getElementById('main-map');
  var mainMap = new MapWrapper(mapDiv, center, 10);

  var centreMarker = mainMap.addMarker(center);
  var otherMarker = mainMap.addMarker(other);

  var centreMarkerContent = '<h3>Siena</h3><div><p>A city in Tuscany, Italy. It is the capital of the province of Siena.</p><p>The historic centre of Siena has been declared by <a href="http://whc.unesco.org/en/list/717">UNESCO World Heritage Site</a>. It is one of the nation&#39;s most visited tourist attractions, with over 163,000 international arrivals in 2008. Siena is famous for its cuisine, art, museums, medieval cityscape and the <a href="https://en.wikipedia.org/wiki/Palio_di_Siena">Palio</a>, a horse race held twice a year.</p><p>Attribution: Siena, <a href="https://en.wikipedia.org/wiki/Siena">https://en.wikipedia.org/wiki/Siena</a> (last visited Sep 05, 2017)</p></div>';
  var otherMarkerContent = '<h3>Monteriggioni</h3><div><p>A comune in the province of Siena in the Italian region Tuscany.</p><p>It borders on the communes of Casole d&#39;Elsa, Castellina in Chianti, Castelnuovo Berardenga, Colle di Val d&#39;Elsa, Poggibonsi, Siena and Sovicille. The town is architecturally and culturally significant; it hosts several piazzas, and is referenced in Dante Alighieri&#39;s <a href="https://en.wikipedia.org/wiki/Divine_Comedy">Divine Comedy</a>.</p><p>Attribution: Monteriggioni, <a href="https://en.wikipedia.org/wiki/Monteriggioni">https://en.wikipedia.org/wiki/Monteriggioni</a> (last visited Sep 05, 2017)</p></div>';

  mainMap.addClickMap();
  mainMap.addClickMarker(centreMarker, centreMarkerContent);
  mainMap.addClickMarker(otherMarker, otherMarkerContent);

  var bounceButton = document.querySelector('#button-bounce-markers')
  bounceButton.addEventListener('click', mainMap.bounceMarkers.bind(mainMap))

  var dropButton = document.querySelector('#button-drop-markers')
  dropButton.addEventListener('click', mainMap.dropMarkers.bind(mainMap))

  var gotoButton = document.querySelector('#button-goto-place')
  gotoButton.addEventListener('click', mainMap.gotoPlace.bind(mainMap))

  var whereAmIButton = document.querySelector('#button-where-am-i')
  whereAmIButton.addEventListener('click', mainMap.whereAmI.bind(mainMap))
}

window.addEventListener('load', initialize);