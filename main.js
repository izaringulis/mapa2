window.onload = init;

function init(){
	const map= new ol.Map({
		view: new ol.View({
			center: ol.proj.transform([-78.89,-2.36], 'EPSG:4326','EPSG:3857'),
			zoom: 12.3
			}),
		
		layers:[
		new ol.layer.Tile({
			source: new ol.source.OSM()
		})
		],
		
		target:'js-map'
		
	})
	
	const WMS = new ol.layer.Tile({
		source: new ol.source.TileWMS({
			url:'http://geoserver.idesinde.com:8080/geoserver/ows?',
			params:{
				LAYERS: 'campoverde:CHUNCHI,campoverde:Via_l_Chunchi,campoverde:Poblado_p_Chunchi',
				FORMAT: 'image/png',
				TRANSPARENT: true
			},
			
			attributions:'<a href="http://geoserver.idesinde.com:8080/geoserver/ows?">idesinde</a>'
		})	
	})
	
	map.addLayer(WMS);
}