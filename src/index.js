import HashMap from './HashMap.js';
import HashSet from './HashSet.js';

HashMap().set('Girth', 'Wiedenbauer');
HashMap().set('Jonquil', 'Von Haggerston');
HashMap().set('Ben', 'Evolent');
HashMap().set('Phillip', 'Anthropy');
HashMap().set('Miles', 'Tone');
HashMap().set('Alan', 'Fresco');
HashMap().set('Hillary', 'Ousse');
HashMap().set('ela', 'First');
HashMap().set('ale', 'Second');
HashMap().set('Carlos', 'Old');
HashMap().set('Carlos', 'New');
HashMap().set('Sara', 'Kork');
HashMap().set('Rita', 'Stan');
HashMap().set('Clark', 'Woo');
HashMap().set('Steven', 'Ben');
HashMap().set('Vanesa', 'Flow');
HashMap().set('Marcos', 'Santana');
HashMap().set('Yolanda', 'Morgan');
HashMap().set('Lucas', 'Stars');
HashMap().set('Robert', 'Kush');


console.log('\n===== BUCKETS =====');
console.log(HashMap().buckets);
console.log('\n===== LENGTH =====');
console.log(HashMap().length());
console.log('\n===== GET VALUE =====');

console.log(`\nThe value of the key Phillip: is: ${HashMap().get('Phillip')}`);
console.log('\n===== HAS KEY? =====');
console.log(`\nHas Phillip? ${HashMap().has('Phillip')}`);
console.log(`\nHas Alan? ${HashMap().has('Alan')}`);
console.log(`\nHas Jonq? ${HashMap().has('Jonq')}`);
console.log(`\nHas Miles? ${HashMap().has('Miles')}`);
console.log(`\nHas a void string? ${HashMap().has('')}`);
console.log(`\nHas ale? ${HashMap().has('ale')}`);
console.log('\n===== REMOVED =====');
console.log(`\nIs removed Jonquil? ${HashMap().remove('Jonquil')}`);
console.log(`\nIs removed ale? ${HashMap().remove('ale')}`);
console.log(`\nIs removed Phillip? ${HashMap().remove('Phillip')}`);
console.log(`\nIs removed Carlos? ${HashMap().remove('Carlos')}`);
console.log('\n===== BUCKETS AFTER REMOVES =====');
console.log(HashMap().buckets);
console.log('\n===== LENGTH =====');
console.log(HashMap().length());
console.log('\n===== KEYS =====');
console.log(HashMap().keys());
console.log('\n===== VALUES =====');
console.log(HashMap().values());
console.log('\n===== ENTRIES =====');
console.log(HashMap().entries());
HashMap().clear();
console.log('\n===== BUCKETS AFTER CLEAR =====');
console.log(HashMap().buckets);
console.log('\n===== LENGTH =====');
console.log(HashMap().length());


console.log('\n===== EXTRA CREDIT HASHSET =====');
HashSet().set('Paris');
HashSet().set('London');
HashSet().set('Berlín');
HashSet().set('Madeira');
HashSet().set('Viena');
HashSet().set('Valencia');
HashSet().set('New York');
HashSet().set('Canada');
HashSet().set('Porto');
HashSet().set('Lima');
HashSet().set('Mexico DF');
HashSet().set('Amsterdam');
HashSet().set('Frankfurt');
HashSet().set('Lisbon');
HashSet().set('Rome');
HashSet().set('Athenas');
HashSet().set('The Cairo City');
HashSet().set('Manchester');

console.log('\n===== BUCKETS HASHSET =====');
console.log(HashSet().buckets);
console.log('\n===== LENGTH HASHSET =====');
console.log(HashSet().length());
console.log('\n===== HAS KEY? HASHSET =====');
console.log(`\nHas London? ${HashSet().has('London')}`);
console.log(`\nHas Lisbon? ${HashSet().has('Lisbon')}`);
console.log(`\nHas Rom? ${HashSet().has('Rom')}`);
console.log(`\nHas a void string? ${HashSet().has('')}`);

console.log('\n===== REMOVED HASHSET =====');
console.log(`\nIs removed Lisbon? ${HashSet().remove('Lisbon')}`);
console.log(`\nIs removed Porto? ${HashSet().remove('Porto')}`);
console.log(`\nIs removed New? ${HashSet().remove('New')}`);
console.log(`\nIs removed Paris? ${HashSet().remove('Paris')}`);
console.log('\n===== BUCKETS AFTER REMOVES HASHSET =====');
console.log(HashSet().buckets);
console.log('\n===== LENGTH HASHSET =====');
console.log(HashSet().length());
console.log('\n===== KEYS HASHSET =====');
console.log(HashSet().keys());
HashSet().clear();
console.log('\n===== BUCKETS AFTER CLEAR HASHSET =====');
console.log(HashSet().buckets);
console.log('\n===== LENGTH =====');
console.log(HashSet().length());

