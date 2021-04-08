import World from './world';
import { primitiveSample, notExistSample, unKnownSample } from './basic';
import { getText, isUserSignedIn, productsPrice } from './basic/functions';
import objectSample from './object/object';
import { User } from './types';
import arraySample from './array/array';
import genericSample from './generic/generic';
import Game from './oop/shogi';

objectSample();
arraySample();
genericSample();

const list = Game.makePieces();

console.log(list);
const game = new Game();

console.log(game.aaaa);
const world = new World('うげがが');
const root = document.getElementById('app');
world.sayHello(root);
