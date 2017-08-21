# SQKM Calculator

## Description

* A basic calculator created to make calculations and get the m2 and km2 from a bounding box

## Install

* We need to install all the needed packages, to accomplish that we can execute the following in terminal:

```sh
$ npm install
```

## How to use it

* There is a folder called /input, there will be a json file where we are going to put all the feature that we
		want to evaluate

* An example of that file would be:

```json
[
	{
		"minx":116.342119,
		"maxx":116.394133,
		"miny":39.907679,
		"maxy":39.950330,
		"title":"New"
	}
]
```

* Those coordinates are latitude and longitude of a bounding box (bbox)

## Running the project

* We only need to prepare the features.json file, and then run:

```sh
$ npm start
```

* The process creates an output file called results.json

## Libraries

* http://turfjs.org/
* https://www.npmjs.com/package/easy-converter
