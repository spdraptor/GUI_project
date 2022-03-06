var quiz = document.getElementsByClassName('q')
var expl = document.getElementsByClassName('expl')
const num1 = localStorage.getItem("num_1"); 
const num2 = localStorage.getItem("num_2"); 
const res = localStorage.getItem("result"); 

var div1= document.createElement('div')
div1.className='q_box'
var n1 = document.createTextNode(`${num1}`)
div1.appendChild(n1)
var div2= document.createElement('div')
div2.className='q_box'
var op = document.createTextNode('+')
div2.appendChild(op)
var div3= document.createElement('div')
div3.className='q_box'
var n2 = document.createTextNode(`${num2}`)
div3.appendChild(n2)
var div4= document.createElement('div')
div4.className='q_box'
var op1 = document.createTextNode('=')
div4.appendChild(op1)
var div5= document.createElement('div')
div5.className='q_box'
var op2 = document.createTextNode(`${res}`)
div5.appendChild(op2)
quiz[0].appendChild(div1)
quiz[0].appendChild(div2)
quiz[0].appendChild(div3)
quiz[0].appendChild(div4)
quiz[0].appendChild(div5)

// var img1=document.getElementsByClassName('img1')
// var img2=document.getElementsByClassName('img2')
// var img3=document.getElementsByClassName('img3')

// img1.src=`imgs/${num1}.jpg`
// img2.src=`imgs/${num2}.jpg`
// img3.src=`imgs/${res}.jpg`
var div1= document.createElement('div')
div1.className='r_box'
var n1 = document.createElement('img')
n1.src=`imgs/${num1}.jpg`
div1.appendChild(n1)
var div2= document.createElement('div')
div2.className='r_box'
var op = document.createTextNode('+')
div2.appendChild(op)
var div3= document.createElement('div')
div3.className='r_box'
var n2 = document.createElement('img')
n2.src=`imgs/${num2}.jpg`
div3.appendChild(n2)
var div4= document.createElement('div')
div4.className='r_box'
var op1 = document.createTextNode('=')
div4.appendChild(op1)
var div5= document.createElement('div')
div5.className='r_box'
var n3 = document.createElement('img')
n3.src=`imgs/${res}.jpg`
div5.appendChild(n3)
expl[0].appendChild(div1)
expl[0].appendChild(div2)
expl[0].appendChild(div3)
expl[0].appendChild(div4)
expl[0].appendChild(div5)