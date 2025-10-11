var map_overview = "vegalite_files/overview.vg.json";
var vg_2 = "vegalite_files/water_temp.vg.json";

var tourist_origins = "vegalite_files/tourist_origin.vg.json"

var watertemp_scatterplot = "vegalite_files/water_temp_scatterplot.vg.json"

var resident_word_cloud = "vegalite_files/resident_word_cloud.vg.json"

var resident_word_bar = "vegalite_files/resident_word_bar.vg.json"

var map_resident_threats = "vegalite_files/map_resident_threatsx.vg.json"

vegaEmbed("#map_overview", map_overview).then(function(result) {
}).catch(console.error);

vegaEmbed("#map2", vg_2).then(function(result) {
}).catch(console.error);

vegaEmbed("#scatterplot1", watertemp_scatterplot).then(function(result) {
}).catch(console.error);

vegaEmbed("#tourist_origins", tourist_origins).then(function(result) {
}).catch(console.error);

vegaEmbed("#resident_word_bar", resident_word_bar).then(function(result) {
}).catch(console.error);

vegaEmbed("#resident_word_cloud", resident_word_cloud).then(function(result) {
}).catch(console.error);

vegaEmbed("#map_resident_threats", map_resident_threats).then(function(result) {
}).catch(console.error);