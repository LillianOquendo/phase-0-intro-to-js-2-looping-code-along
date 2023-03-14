const names = ["Guadalupe", "Ollie", "Aki"];


function writeCards(names, event){
const container = []
    for (let i = 0; i < names.length; i++){
        container.push (`Thank you, ${names [i]}, for the wonderful ${event} gift!`);

}
return container;
}
console.log(writeCards (names, "surprise"));


function countDown (i){
    while (i >= 0){
    console.log (i);
    i--;
}
}
countDown(10);