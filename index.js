import get_words from './get_words.js'

var colors = ['#325ca8', '#3832a8', '#5732a8', '#7532a8'];
var random_color = colors[Math.floor(Math.random() * colors.length)];

const d = new Date();
document.getElementById('today').innerHTML = d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear() + " quordle words are"
document.getElementById('word').style.color = random_color;

let answers = get_words();
let str = ""; for (let i in answers) str += answers[i] + " ";
document.getElementById('word').innerHTML = str;