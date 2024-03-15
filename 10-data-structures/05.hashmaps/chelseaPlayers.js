const HashMap = require('./HashMap');

const chelseaPlayers = new HashMap(16);

function populateHM() {
    chelseaPlayers.assign("Graeme Le Saux", "England")
    chelseaPlayers.assign("Steve Clarke", "Scotland")
    chelseaPlayers.assign("David Lee", "England")
    chelseaPlayers.assign("Kevin Hitchcock", "England")
    chelseaPlayers.assign("Ken Monkou", "Netherlands")
    chelseaPlayers.assign("Dave Beasant", "England")
    chelseaPlayers.assign("Graham Stuart", "England")
    chelseaPlayers.assign("Craig Burley", "Scotland")
    chelseaPlayers.assign("Erland Johnsen", "Norway")
    chelseaPlayers.assign("Andy Townsend", "Republic of) Ireland")
    chelseaPlayers.assign("Frank Sinclair", "Jamaica")
    chelseaPlayers.assign("Eddie Newton", "England")
    chelseaPlayers.assign("Dennis Wise", "England")
    chelseaPlayers.assign("Andy Myers", "England")
    chelseaPlayers.assign("John Spencer", "Scotland")
    chelseaPlayers.assign("Dmitri Kharine", "Russia")
    chelseaPlayers.assign("Gavin Peacock", "England")
    chelseaPlayers.assign("Michael Duberry", "England")
    chelseaPlayers.assign("Mark Hughes", "Wales")
    chelseaPlayers.assign("Dan Petrescu", "Romania")
    chelseaPlayers.assign("Frank Leboeuf", "France")
    chelseaPlayers.assign("Roberto Di Matteo", "Italy")
    chelseaPlayers.assign("Jody Morris", "England")
    chelseaPlayers.assign("Gianfranco Zola", "Italy")
    chelseaPlayers.assign("Tore André Flo", "Norway ")
    chelseaPlayers.assign("Gustavo Poyet", "Uruguay")
    chelseaPlayers.assign("Ed de Goey", "Netherlands")
    chelseaPlayers.assign("Celestine Babayaro", "Nigeria")
    chelseaPlayers.assign("Albert Ferrer", "Spain")
    chelseaPlayers.assign("Marcel Desailly", "France")
    chelseaPlayers.assign("John Terry", "England")
    chelseaPlayers.assign("Mario Melchiot", "Netherlands")
    chelseaPlayers.assign("Carlo Cudicini", "Italy")
    chelseaPlayers.assign("Jesper Grønkjær", "Denmark")
    chelseaPlayers.assign("Jimmy Floyd Hasselbaink", "Netherlands")
    chelseaPlayers.assign("Eiður Guðjohnsen", "Iceland")
    chelseaPlayers.assign("William Gallas", "France")
    chelseaPlayers.assign("Frank Lampard", "England")
    chelseaPlayers.assign("Damien Duff", "Republic of Ireland")
    chelseaPlayers.assign("Geremi", "Cameroon")
    chelseaPlayers.assign("Claude Makélélé", "France")
    chelseaPlayers.assign("Wayne Bridge", "England")
    chelseaPlayers.assign("Joe Cole", "England")
    chelseaPlayers.assign("Arjen Robben", "Netherlands")
    chelseaPlayers.assign("Ricardo Carvalho", "Portugal")
    chelseaPlayers.assign("Alex", "Brazil")
    chelseaPlayers.assign("Didier Drogba", "Ivory Coast")
    chelseaPlayers.assign("Paulo Ferreira", "Portugal")
    chelseaPlayers.assign("Petr Čech", "Czech Republic")
    chelseaPlayers.assign("Shaun Wright-Phillips", "England")
    chelseaPlayers.assign("Michael Essien", "Ghana")
    chelseaPlayers.assign("Michael Ballack", "Germany")
    chelseaPlayers.assign("Salomon Kalou", "Ivory Coast")
    chelseaPlayers.assign("Ashley Cole", "England")
    chelseaPlayers.assign("John Obi Mikel", "Nigeria")
    chelseaPlayers.assign("Florent Malouda", "France")
    chelseaPlayers.assign("José Bosingwa", "Portugal")
    chelseaPlayers.assign("Nicolas Anelka", "France")
    chelseaPlayers.assign("Branislav Ivanović", "Serbia")
    chelseaPlayers.assign("Nemanja Matić", "Serbia")
    chelseaPlayers.assign("Fernando Torres", "Spain")
    chelseaPlayers.assign("Ramires", "Brazil")
    chelseaPlayers.assign("Juan Mata", "Spain")
    chelseaPlayers.assign("David Luiz", "Brazil")
    chelseaPlayers.assign("Thibaut Courtois", "Belgium")
    chelseaPlayers.assign("Oscar", "Brazil")
    chelseaPlayers.assign("Gary Cahill", "England")
    chelseaPlayers.assign("Eden Hazard", "Belgium")
    chelseaPlayers.assign("Victor Moses", "Nigeria")
    chelseaPlayers.assign("César Azpilicueta", "Spain")
    chelseaPlayers.assign("Willian", "Brazil")
    chelseaPlayers.assign("Diego Costa", "Spain")
    chelseaPlayers.assign("Cesc Fàbregas", "Spain")
    chelseaPlayers.assign("Kurt Zouma", "France")
    chelseaPlayers.assign("Andreas Christensen", "Denmark")
    chelseaPlayers.assign("Ruben Loftus-Cheek", "England")
    chelseaPlayers.assign("Pedro", "Spain")
    chelseaPlayers.assign("Marcos Alonso", "Spain")
    chelseaPlayers.assign("N'Golo Kanté", "France")
    chelseaPlayers.assign("Antonio Rüdiger", "Germany")
    chelseaPlayers.assign("Mason Mount", "England")
    chelseaPlayers.assign("Callum Hudson-Odoi", "England")
    chelseaPlayers.assign("Olivier Giroud", "France")
    chelseaPlayers.assign("Ross Barkley", "England")
    chelseaPlayers.assign("Jorginho", "Italy")
    chelseaPlayers.assign("Mateo Kovačić", "Croatia")
    chelseaPlayers.assign("Kepa Arrizabalaga", "Spain")
    chelseaPlayers.assign("Reece James", "England")
    chelseaPlayers.assign("Christian Pulisic", "United States")
    chelseaPlayers.assign("Édouard Mendy", "Senegal")
    chelseaPlayers.assign("Kai Havertz", "Germany")
    chelseaPlayers.assign("Thiago Silva", "Brazil")
    chelseaPlayers.assign("Hakim Ziyech", "Morocco")
    chelseaPlayers.assign("Ben Chilwell", "England")
}
populateHM();


console.log(chelseaPlayers.retrieve("N'Golo Kanté"));
console.log(chelseaPlayers.retrieve('Didier Drogba'));
console.log(chelseaPlayers.retrieve('David Luiz'));
console.log(chelseaPlayers.retrieve('John Terry'));


console.log("The hash map is a HashMap object with \"hashmap\" as key and an array of LinkedList items:\n", chelseaPlayers);
console.log("The values is an array with length", chelseaPlayers.hashmap.length, "containing objects:");
for (let index = 0; index < chelseaPlayers.hashmap.length; index++) {
    try {
        console.log("<<<< OBJECT ", index, ">>>>")
        console.log(chelseaPlayers.hashmap[index]);
        console.log("level 1 - .head.data", chelseaPlayers.hashmap[index].head.data);
        console.log("level 2 - .head.next.data", chelseaPlayers.hashmap[index].head.next.data);
        console.log("level 3 - .head.next.next.data", chelseaPlayers.hashmap[index].head.next.next.data);
        console.log("level 4 - .head.next.next.next.data", chelseaPlayers.hashmap[index].head.next.next.next.data);
    } catch (error) {
        continue;
    }

}



