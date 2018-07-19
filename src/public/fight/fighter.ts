export interface IFighter {
    name: string;
    health: number;

    setDamage: (damage: number) => void;
    hit: (enemy: IFighter, point: number) => void;
    isAlive: () => boolean;
}

export default class Fighter implements IFighter{

    protected _name: string;
    protected _power: number;
    protected _health: number;

    constructor(fighterName: string = 'noname', fighterPower: number = 1, fighterHealth: number = 1) {
        this._name = fighterName;
        this._power = fighterPower;
        this._health = fighterHealth;
    }

    setDamage(damage: number): void{
        if (damage > this._health) {
            this._health = 0;
        } else {
            this._health -= damage;
        }
        console.log(`${this._name} health:  ${this._health}`);
    }

    hit(enemy: IFighter, point: number = 1): void{
        enemy.setDamage(point * this._power);
    }

    isAlive(): boolean{
        return this._health > 0;
    }

    get name(): string {
        return this._name;
    }

    get health(): number {
        return this._health;
    }
}