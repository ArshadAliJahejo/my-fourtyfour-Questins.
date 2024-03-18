let guest_list :string [] = ['ahsan','sajid','Allah Dino'];

/*for(let i=0; i<guest_list.length; i++){

   console.log('Dear Mr.' + guest_list[i] + ',\n\n it is our pleasre to inivite you in our party.\n\nThan kyou!') 
}*/

let absent_guest :string = 'sajid';

let new_guest : string = 'sahil';

guest_list[0] = new_guest ;

//for(let i=0; i<guest_list.length; i++){

//console.log(`Dear Mr. ` + guest_list[i] + `,\n\n its is our pleasre to invite you in our party.\n\nThan kyou!\n\n`)}

console.log(` Mr. ${absent_guest} is not join party`)
console.log(`new_guest`);



console.log('Good news ! we find more tables so we are inviting 3 guest..')
// arry main  three guest add kie hen 
guest_list.unshift('farman Ali') ;

guest_list.splice(2 , 0, 'Usman' );

guest_list.push('Ghulam Mustafa');
// yahan py meni six guest ke array ko print krwaya he
for(let i=0; i<guest_list.length; i++){

   console.log ('Dear Mr' + guest_list[i] + `,\n\n its is our pleasre to invite you in our party.\n\nThan kyou!\n\n`)
   


}
// sorry message to guest ko nhi invited keie hen 
console.log('sorry we can not arrange big table, only two people will be invited.');

// yahan py meni  guest remove kie hen
while(guest_list.length> 2){
  let remove_guest=  guest_list.pop();
  console.log(`sorry Mr. ${remove_guest}, you are not invited for party.`);
}
// hamare bache hoie 2 invited guest
for(let i=0; i<guest_list.length; i++){

   console.log ('Dear Mr' + guest_list[i] + `,\n\n you are stil invited.\n\nThan kyou!\n\n`)
}
// meni sare guest array se remove kr deya hen
guest_list.splice(0, 2);
console.log(guest_list);