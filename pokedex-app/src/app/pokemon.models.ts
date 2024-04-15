export class Pokemon {
    id: number = 0;
    hp: number = 0;
    cp: number = 0;
    name: string = '';
    picture: string = '';
    types: Array<string> = [];
    created: Date = new Date();
}