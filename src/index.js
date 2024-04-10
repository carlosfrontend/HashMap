import HashMap from './HashMap.js';

HashMap().set('Carlos', 'Godot');
HashMap().set('Sarah', 'Lee');
HashMap().set('Michael', 'Async');
HashMap().set('Lisa', 'Await');
HashMap().set('Ane', 'Chrome');
HashMap().set('enA', 'Firefox');

console.log(HashMap().get('enA'));
// console.log(HashMap().has("Carlos"));
// console.log(HashMap().get("Gerar"));
console.log(HashMap().buckets);
