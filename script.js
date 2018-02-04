//Hier komt mijn JavaScript



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


teama.innerHTML = teamA.name;
teamb.innerHTML = teamB.name;
