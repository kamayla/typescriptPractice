import World from './world';
import { primitiveSample, notExistSample, unKnownSample } from './basic';
import { getText, isUserSignedIn, productsPrice } from './basic/functions';
import objectSample from './object/object';
import { User } from './types';
import arraySample from './array/array';
import genericSample from './generic/generic';

objectSample();
arraySample();
genericSample();

const world = new World('hogehogehoge');
const root = document.getElementById('app');
world.sayHello(root);
