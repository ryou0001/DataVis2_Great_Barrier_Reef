//Residents
var map_overview = "vegalite_files/overview.vg.json";

var map_NRM_overview = "vegalite_files/map_NRM_overview.vg.json";
var resident_financial_bar = "vegalite_files/resident_financial_bar.vg.json"
var resident_visits_heatmap = "vegalite_files/resident_visits_heatmap.vg.json"
var resident_value_histogram = "vegalite_files/resident_value_histogram_square.vg.json"

var resident_word_cloud = "vegalite_files/resident_word_cloud.vg.json"
var resident_word_bar = "vegalite_files/resident_word_bar.vg.json"
var resident_threats = "vegalite_files/resident_threats.vg.json"


//Climate Change
var climate_change_donut = "vegalite_files/climate_change_donut.vg.json"
var watertemp_scatterplot = "vegalite_files/water_temp_scatterplot.vg.json"
var map_resident_threats_climate = "vegalite_files/map_resident_threats_climate.vg.json"


//Mining
var map_resident_threats_mining = "vegalite_files/map_resident_threats_mining.vg.json"
var mining_jobs_donut = "vegalite_files/mining_jobs_donut.vg.json"
var mining_jobs_bar = "vegalite_files/mining_jobs_bar.vg.json"


//Tourism
var map_resident_threats_tourism = "vegalite_files/map_resident_threats_tourism.vg.json"
var tourist_origins = "vegalite_files/tourist_origin.vg.json"
var tourist_numbers_line = "vegalite_files/tourist_numbers_line.vg.json"
var tourist_jobs_donut = "vegalite_files/tourist_jobs_donut.vg.json"


vegaEmbed("#climate_change_donut", climate_change_donut).then(function(result) {
}).catch(console.error);

vegaEmbed("#resident_threats", resident_threats).then(function(result) {
}).catch(console.error);

vegaEmbed("#map_overview", map_overview).then(function(result) {
}).catch(console.error);

vegaEmbed("#map_NRM_overview", map_NRM_overview).then(function(result) {
}).catch(console.error);

vegaEmbed("#watertemp_scatterplot", watertemp_scatterplot).then(function(result) {
}).catch(console.error);

vegaEmbed("#tourist_origins", tourist_origins).then(function(result) {
}).catch(console.error);

vegaEmbed("#resident_word_bar", resident_word_bar).then(function(result) {
}).catch(console.error);

vegaEmbed("#resident_word_cloud", resident_word_cloud).then(function(result) {
}).catch(console.error);

vegaEmbed("#map_resident_threats_climate", map_resident_threats_climate).then(function(result) {
}).catch(console.error);

vegaEmbed("#map_resident_threats_mining", map_resident_threats_mining).then(function(result) {
}).catch(console.error);

vegaEmbed("#map_resident_threats_tourism", map_resident_threats_tourism).then(function(result) {
}).catch(console.error);

vegaEmbed("#resident_financial_bar", resident_financial_bar).then(function(result) {
}).catch(console.error);

vegaEmbed("#resident_visits_heatmap", resident_visits_heatmap).then(function(result) {
}).catch(console.error);

vegaEmbed("#resident_value_histogram", resident_value_histogram).then(function(result) {
}).catch(console.error);

vegaEmbed("#tourist_numbers_line", tourist_numbers_line).then(function(result) {
}).catch(console.error);

vegaEmbed("#tourist_jobs_donut", tourist_jobs_donut).then(function(result) {
}).catch(console.error);

vegaEmbed("#mining_jobs_donut", mining_jobs_donut).then(function(result) {
}).catch(console.error);

vegaEmbed("#mining_jobs_bar", mining_jobs_bar).then(function(result) {
}).catch(console.error);