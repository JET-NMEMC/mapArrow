var mapStuff = initDemoMap();
var map = mapStuff.map;
var layerControl = mapStuff.layerControl;
var templayer = mapStuff.templayer;

function initDemoMap() {
    //Esri
    var Esri_WorldImagery = L.tileLayer(
        "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", {
        // maxZoom: 18,
        attribution: "&copy; Esri"
    });
  
    // Google
    var GoogleImage = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
        attribution: "&copy; Google"
    });

    //OpenStreet
    var OpenStreetMap_Mapnik = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    //--------------------------设置主图层--------------------------------
    var baseLayers = {
        "EsriImage": Esri_WorldImagery,
        "googleimage": GoogleImage,
        "Open Street": OpenStreetMap_Mapnik
    };
    //------------------------------定义复选图层-----------------------------
    var esriAnnotion = L.tileLayer('https://services.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Reference/MapServer/tile/{z}/{y}/{x}', {
        corrdType: "wgs84",
    });


    var overlayLayers = {
        "esri": esriAnnotion
    }
    //----------------------------------------------------------------------地图设置
    var map = L.map("map", {
        layers: [Esri_WorldImagery],
        zoomControl: false,
        attributionControl: false,
    });

    var layerControl = L.control.layers(baseLayers, overlayLayers).addTo(map);
    var templayer = new L.layerGroup();
    map.setView([39, 120], 8);
    return {
        map: map,
        layerControl: layerControl,
        templayer: templayer
    };
};

