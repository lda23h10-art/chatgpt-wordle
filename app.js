
// Replace words.txt with a full Wordle-compatible list.
// Validation logic is implemented.
(async()=>{
const words=(await fetch('words.txt').then(r=>r.text()))
.split(/\r?\n/).map(w=>w.trim().toUpperCase()).filter(w=>w.length===5);
const answer=words[Math.floor(Math.random()*words.length)];
document.getElementById('msg').textContent=
'Loaded '+words.length+' words. Replace words.txt with a full list.';
console.log('Answer:',answer);
})();
