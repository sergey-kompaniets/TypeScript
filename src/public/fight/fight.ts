import { IFighter } from './fighter';
import ImprovedFighter from './improvedfighter';

export interface IFight {        
    startFight: (fighter1: IFighter, fighter2: IFighter, deathFight: boolean, ...point: number[]) => void;
}

export default class Fight implements IFight{

    static instance: IFight;

    constructor() {
        if (Fight.instance) {
            return Fight.instance as Fight;
        } else {
            Fight.instance = this;
        }
    }

    startFight(fighter1: IFighter, fighter2: IFighter, deathFight: boolean, ...point: number[]): void {

        let i: number = 0;
        let whoseHit: boolean = !!Math.round(Math.random());

        while (fighter1.isAlive() && fighter2.isAlive()) {

            if (whoseHit) {
                this.hit(fighter1, fighter2, point[i]);
            } else {
                this.hit(fighter2, fighter1, point[i]);
            }
            whoseHit = !whoseHit;

            i++;
            if (deathFight && i == point.length) {
                i = 0;
            }

            if (!deathFight && i == point.length) {
                break;
            }
        }

        if (fighter1.health == fighter2.health) {
            console.log(`Round was a draw. ${fighter1.name} health : ${fighter1.health},  ${fighter2.name} health : ${fighter2.health}`);
        }
        if (fighter1.health < fighter2.health) {
            console.log(`${fighter2.name} won the fight.  ${fighter1.name} health : ${fighter1.health},  ${fighter2.name} health : ${fighter2.health}`);
        }
        if (fighter1.health > fighter2.health) {
            console.log(`${fighter1.name} won the fight.  ${fighter1.name} health : ${fighter1.health},  ${fighter2.name} health : ${fighter2.health}`);
        }
    }

    private hit(fighter1: IFighter, fighter2: IFighter, point: number): void {
        if ( (fighter1 instanceof ImprovedFighter) && Math.round( Math.random()) ) {
            fighter1.doubleHit(fighter2, point);
        } else {
            fighter1.hit(fighter2, point);
        }
    }
}

