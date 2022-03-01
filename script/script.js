var num = document.getElementsByClassName('num')

for (var input = 1; input <= 10; input++) {
   
    var num_box=document.createElement('div')
    num_box.className='nums'
    var text = document.createTextNode(`${input}`);
    num_box.appendChild(text)
    // console.log(num_box)
    num[0].appendChild(num_box)
    
    // console.log(text)
   }