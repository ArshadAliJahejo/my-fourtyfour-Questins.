"use strict";
let personal = '';
personal = prompt('what is your name?') || '';
let lowercase = personal.toLowerCase();
let Uppercase = personal.toUpperCase();
let titleCase = personal.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
if (personal !== null && personal !== '') {
    alert(`Hello ${personal}, Here are you name in:
    lowerCase: ${lowercase}
    UpperCase: ${Uppercase}
    TitleCase: ${titleCase}`);
}
else {
    alert('please fill your name !');
}
