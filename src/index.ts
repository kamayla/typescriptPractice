import World from './world';

const root = document.getElementById('app');

const world = new World('こんなはずではなかったのに');

world.sayHello(root)
