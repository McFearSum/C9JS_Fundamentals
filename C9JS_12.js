/*

C9JS_12 JavaScript file


*/
var batwing = {
	status: "Ready",
	rescueBatman: function () {
	document.write("Locate his transponder ... initiating launch ...");
	}
}

/*
if (batwing.status === "Ready") {
	batwing.rescueBatman();
}
*/

var utilities = {
	printAllMembers: function(targetObject) {
		for (i in targetObject) {
			document.write("<br />" +  targetObject[i]);
		}
	}
}

// utilities.printAllMembers(batwing);
/*
var i_am_empty = { };

utilities.printAllMembers(i_am_empty);
*/

var planet = {
	id: 34,
	name: "Imtempesta Nox",
	faction: {
		factionId: 2,
		name: "Nex",
		notifiction: function() {
			document.write("Nex alliance ... unite!");			
		}
	},
	cities: [
		{ locationId: 15, name: "Gladius" },
		{ locationId: 16, name: "Chalybs" },
		{ locationId: 17, name: "Ensis" }		
	]
};

//planet.faction.notifiction();
//document.write(planet.cities[1].name);
/*
document.write("<br />" + planet.name);
planet.name = "Vultus";
document.write("<br />" + planet.name);

var z = planet;
document.write(z.name);
*/


/*  Here we want to add a new property to our planet object
    but before we define a new element we should check to see
    if it already exists.  If not then go ahead and create it.

if (typeof planet.defense == "undefined") {
	planet.defense = "Ion Canon";
}
document.write(planet.defense);


for (member in planet){
	document.write("<br />" + member + " ==> " + planet[member]);
}
*/

// This is not a class, it is a constructor
function car(make, model, year) {
	this.make = make;
	this.model = model;
	this.year = year;
}

// Here we create 2 instances of the constructor
// JavaScript is a Classless language
var myCar = new car("Eagle", "Talon TSi", 1993);
var myOtherCar = new car("Dodge", "Dart", 1971);

// Now we see how we can access the properties of the object
alert(myCar.model);
alert(myOtherCar.model);





