var popuptxt=document.querySelector('.popup-txt')
var addition=document.querySelector('.box')

function show(){
    popuptxt.style.display='block'
    addition.style.display='block'
}

var cancelbtn=document.getElementById('cancelbook')
cancelbtn.addEventListener('click',function(event){
    event.preventDefault()
    popuptxt.style.display='none'
    addition.style.display='none'
})


var main = document.querySelector('.main_container')
var add= document.getElementById('addbook')
var addbook=document.getElementById('title-ip')
var addauthor=document.getElementById('Author-ip')
var desp=document.getElementById('book-description')

add.addEventListener('click',function(event){
    event.preventDefault()
    var div=document.createElement('div')
    div.setAttribute("class","container")
    div.innerHTML=`<h2>${addbook.value}</h2>
    <h4>${addauthor.value}</h4>
    <p>${desp.value}</p>
    <button onclick='del(event)'>Delete</button>`
    main.append(div)
    popuptxt.style.display='none'
    addition.style.display='none'
    event.target.closest('form').reset()
})


function del(event){
    event.target.parentElement.remove()
}