var num = document.getElementsByClassName('num')
var quiz = document.getElementsByClassName('quiz')

for (var input = 1; input <= 20; input++) {
   
    var num_box=document.createElement('a')
    num_box.className='nums'
    num_box.setAttribute("onclick","get_val(this)")
    num_box.setAttribute("href","result.html")
    var text = document.createTextNode(`${input}`);
    num_box.appendChild(text)
    // console.log(num_box)
    num[0].appendChild(num_box)
    
    // console.log(text)
   }
var num1 =Math.floor(Math.random() * 10) + 1  
var num2 =Math.floor(Math.random() * 10) + 1  
var res=num1+num2

localStorage.setItem('num_1', num1);
localStorage.setItem('num_2', num2);
localStorage.setItem('result', res);

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
var op2 = document.createTextNode('?')
div5.appendChild(op2)
quiz[0].appendChild(div1)
quiz[0].appendChild(div2)
quiz[0].appendChild(div3)
quiz[0].appendChild(div4)
quiz[0].appendChild(div5)
// console.log(quiz)

function get_val(e){
    var val=Number.parseInt(e.innerHTML)
    if (val==res){
        alert("great")
        
    }
    else{
        alert("wrong")
    }
    console.log(val)
}


