
let personal: string = '';

personal = prompt('what is your name?')|| '';

let lowercase: string = personal.toLowerCase();
let Uppercase: string = personal.toUpperCase();

let titleCase :string = personal.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')

if (personal !== null && personal !== ''){
    alert(`Hello ${personal}, Here are you name in:
    lowerCase: ${lowercase}
    UpperCase: ${Uppercase}
    TitleCase: ${titleCase}`
    )

}
else{
    alert('please fill your name !')
}