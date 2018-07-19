import Fight from './fight/fight';
import Fighter from './fight/fighter';
import ImprovedFighter from './fight/improvedfighter';

const fighter1: Fighter = new ImprovedFighter('John Cena', 10, 200);
const fighter2: ImprovedFighter = new ImprovedFighter('Rock', 10, 200);

const fight: Fight = new Fight();
fight.startFight(fighter1, fighter2, true, 3, 4, 5, 2);
