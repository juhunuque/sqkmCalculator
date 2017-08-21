const turf = require('@turf/turf');
const fs = require('fs');
const easyconverter = require('easy-converter');

var results = [];
const c = new easyconverter();

let features = fs.readFileSync('./input/features.json');
features = JSON.parse(features);

features.map((obj, index)=>{
	try{
		const minx = obj['minx'];
		const maxx = obj['maxx'];
		const miny = obj['miny'];
		const maxy = obj['maxy'];
		const title = obj['title'];

		const langLongs = [];
		langLongs.push([minx, miny]) //minx, miny
		langLongs.push([minx, maxy]) // minx, maxy
		langLongs.push([maxx, maxy]) // maxx, maxy
		langLongs.push([maxx, miny]) // maxx, miny
		langLongs.push([minx, miny]) //minx, miny

		const polygon = turf.polygon([langLongs]);
		const area = turf.area(polygon);

		const sqkm = c.convert(area, 'm2').to('km2');
		const resultstr = `Title: ${title} - Area SQM ${area} - Area SQKM ${sqkm}`;
		const resultjson = {
			"title": title,
			"m2": area,
			"km2": sqkm
		}

		results.push(resultjson);
	}catch( err ){
		console.log(`ERROR: ${err}`);
	}
})

if(results.length === 0){
	console.log('No results!');
}

fs.writeFileSync('./results.json', JSON.stringify(results));
