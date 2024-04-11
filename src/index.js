import HashMap from './HashMap.js';

HashMap().set('Girth', 'Wiedenbauer');
HashMap().set('Jonquil', 'Von Haggerston');
HashMap().set('Ben', 'Evolent');
HashMap().set('Phillip', 'Anthropy');
HashMap().set('Miles', 'Tone');
HashMap().set('Alan', 'Fresco');
HashMap().set('Hillary','Ousse');

console.log(HashMap().get('Alan'));

console.log(HashMap().has('Philli'));
console.log(HashMap().has('Alan'));
console.log(HashMap().has('Jonq'));
console.log(HashMap().has('Miles'));
console.log(HashMap().has(''));

console.log(HashMap().buckets);