const h2Tag = document.getElementsByTagName('h2');
const backpackSection = document.getElementById('backpack');
const cards = document.getElementsByClassName('card');
const backpack = document.getElementById('backpack-console');
const buyNows = document.getElementsByClassName('btn');
const img = document.getElementById('changable-img');
const input = document.getElementById('input');
const stayInTouch = document.getElementById('subscribe')


backpackSection.style.backgroundColor = 'tomato'

for(const h2 of h2Tag){
    h2.style.color = "lightblue"
}
for (const card of cards) {
    card.style.borderRadius = '30px';
}
backpack.addEventListener('click',function (event) {
    console.log(event.target.parentNode)
})
// for (const buyNow of buyNows) {
//     buyNow.addEventListener('click',function (e) {
//         e.target.parentNode.removeChild(e.target)
//     })
// }
input.addEventListener('keyup',function(e){
    const submit = document.getElementById('touch-submit'); 
    if( e.target.value == 'email'){
        submit.removeAttribute('disabled')
    }else{
        submit.setAttribute('disabled',true)
    }
})
img.addEventListener('mouseenter',function (e) {
    img.src = 'images/shoes/shoe-1.png'
    console.log('dont touch me')
})

stayInTouch.addEventListener('dblclick',function (e) {
    e.target.style.backgroundColor = "yellow"
})