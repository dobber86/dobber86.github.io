
//	Alle eigenschappen van de teams (objecten) met een class gebruiken. Die kan ik dan gebruiken voor de Stand.

/*
class team = {
	constructor(name) {
		this._name = name;
		this._speler1: 'Speler 1',
		this._speler2: 'Speler 2',
		this._speler3: 'Speler 3',
		this._speler4: 'Speler 4',
		this._gespeeld: 0,
		this._totaalPunten: 0,
		this._saldo: 0,
	}
	
	get name() {
		return this._name;
	}
	
	get speler1() {
		return this._speler1;
	}
	
	get speler2() {
		return this._speler2;
	}
	
	get speler2() {
		return this._speler2;
	}
	
	get speler2() {
		return this._speler2;
	}
	
	get gespeeld() {
		return this._gespeeld;
	}
	
	get totaalPunten() {
		return this._totaalPunten;
	}
	
	get saldo() {
		return this._saldo;
	}	
	
}

const teamA = new team('Slagerij');
const teamB = new team('Autobedrijf');
const teamC = new team('Sportmassage');
const teamD = new team('Bouwbedrijf');
*/




//	Ingevoerde namen uitvoeren in de wedstrijden

function editTeam() {		// indrukken opslaan knop teams
	
	updateNames("teama");
	updateNames("teamb");
	updateNames("teamc");
	updateNames("teamd");
}	

function updateNames(team) {
	
		let t = document.getElementsByClassName(team);		//variabele voor alle team namen in een klasse
		
		let l = team.substring(4, 5);		//team letter pakken
		l = l.toUpperCase();
		
		for (let i = 0; i < t.length; i++) {		//net zo lang uitvoeren tot het aantal keer dat een team voorkomt 
			t[i].innerHTML = document.getElementById("name_t" + l).value;		//pak de naam uit invoerbox en schrijven
		}
		
		// Spelers
		for (let j = 1; j < 5; j++) { 		//4 spelers in een team
			
			let s = document.getElementsByClassName(`t${l}s${j}`);		//variabele voor alle namen in een klasse
				
			for (let i = 0; i < s.length; i++) {		//net zo lang uitvoeren tot het aantal keer dat een speler voorkomt 
				s[i].innerHTML = document.getElementById(`name_t${l}s${j}`).value;		//pak de naam uit invoerbox en schrijven
			}
		}
		
}

//	Verwerken van ingevoerde scores
function editScore() {
	
}

