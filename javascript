unction InsertImage(){
	document.querySelectorAll('.box').forEac(image =>{
		if(image.innerText == 'Wpawn || image.innerText == '8pawn){
			image.innerHTML = '$(image.innerText)<img class='allimg allpawn'src="$(image.innerText).png" alt="">'
			image.style.cursor = 'pointer'
		}
		else{
			image.innerHTML = $(image.innerText)<img class='allimg' src="$(image.innerText).png" alt="">'
			image.style.cursor = 'pointer'
		}
	}
})
}
insertImage()

function coloring(){
	const color= document.querySelectorAll('.box')
	color.forEach(color =>{
		getId = color.id
		arr = Array.from(getId)
		arr.shift()
		aside= eval(arr.pop())
		aup = eval(arr.shift())
		a = aside + aup
		
		if(a % 2 == 0){
			color.style.backgroundColor = 'rgb(240,201, 150)'
		}
		if(a % 2 !== 0){
			color.style.backgroundColor = 'rgb(100,75, 43)'
		}
	})
}
coloring()

function reddish(){
	document.querySelectorAll('.box').forEach(i1 =>{
		if(i1.style.backgroundColor == 'pink'){
			document.querySelectorAll('.box').forEach(i2 =>{
				if(i2.style.background == 'green' && i2.innerText.length !== 0)
					
				greenText = i2.innerText
				pinkText = i1.innerText
				pinkColor = ((Array.from(pinkText)).shift()).toString()
				greenColor = ((Array.from(greenText)).shift()).toString()
				
				if(pinkColor == greenColor){
					i2.style.backgroundColor = 'rgb(253, 60, 60)
				}
			}
		})
	}
})

}
tog = 1
document.querySelectorAll('.box').forEach(item =>{
	item.addEventListener('click',function (){
		if(item.style.background =='green' && item.innerText.length == 0){
			tog = tog+1
		}
		else if(item.style.background =='green' && item.innerText.length !==0)
			document.querySelectorAll('.box').forEach(i =>{
				if(i.style.backgroundColor =='pink){
					pinkId = i.id
					pinkText = i.innerText
					
					document.getElementById(pinkId).innerText = ''
					item.innerText = pinkText
					coloring()
					insertImage()
					tog = tog + 1
				}
			})
	}
	getId = item.id
	arr = Array.from(getId)
arr.shift()
aside = eval(arr.pop())
arr.push('0')
aup = eval(arr.join(''))
a = aside + aup

function whosTurn(toggle){
if(item.innerText == '${toggle}pawn'){
item.style.backgroundColor ='pink'

if(document.getElementById('b${a + 100}').innerText.length == 0){
document.getElementById('b${a + 100}').style.backgroundColor ='green'
}	
if(aside < 8 && document.getElementById('b${a + 100 + 1}').innerText.length !== 0){
document.getElementById('b${a + 100 + 1}').style.backgroundColor ='green'
}	
if(document.getElementById('b${a + 100 - 1}').innerText.length !== 0){
document.getElementById('b${a + 100 - 1}').style.backgroundColor ='green'
}	


if(tog % 2 == 0 && > 100){
	if(document.getElementById('b${a - 100}').innerText.length == 0){
		document.getElementById('b${a - 100}').style.backgroundColor = 'green'
	}
	if(document.getElementById('b${a - 100 + 1}').innerText.length == 0){
		document.getElementById('b${a - 100 + 1}').style.backgroundColor = 'green'
	}
	if(document.getElementById('b${a - 100 - 1}').innerText.length == 0){
		document.getElementById('b${a - 100 - 1}').style.backgroundColor = 'green'
	}
}
//King
if(item.innerText == '${toggle}king'){
	if(aside < 8){
		document.getElementById('b${a + 1}').style.backgroundColor = 'green'
	}
	if(aside > 1){
		document.getElementById('b${a - 1}').style.backgroundColor = 'green'
	}
	if(aup < 800){
		document.getElementById('b${a + 100}').style.backgroundColor = 'green'
	}
	if(aup > 100){
		document.getElementById('b${a - 100}').style.backgroundColor = 'green'
	}
	if(aup > 100 && aside < 8){
		document.getElementById('b${a - 100 + 1}').style.backgroundColor = 'green'
	}
	if(aup > 100 && aside < 1){
		document.getElementById('b${a - 100 - 1}').style.backgroundColor = 'green'
	}
	if(aup > 800 && aside < 8){
		document.getElementById('b${a + 100 + 1}').style.backgroundColor = 'green'
	}
	if(aup > 800 && aside < 1){
		document.getElementById('b${a + 100 - 1}').style.backgroundColor = 'green'
	}
	item.syle.backgroundColor ='pink'
	
	//rook
	if(item.innerText == '${toggle}rook'){
		for(let i =1; i < 9; i++){
			if((a + i * 100)<900 && document.getElementById('b${a + i * 100}').innerText == 0){
				document.getElementById('b${a + 100 * 1}').style.backgroundColor = 'green'
			}
			else if((a - i * 100)<900 && document.getElementById('b${a + i * 100}').innerText !== 0){
				document.getElementById('b${a + 100 * 1}').style.backgroundColor = 'green'
				break
			}
			for(let i =1; i < 9; i++){
			if((a + i * 100)<100 && document.getElementById('b${a - i * 100}').innerText == 0){
				document.getElementById('b${a - 100 * 1}').style.backgroundColor = 'green'
			}
			else if((a - i * 100)<100 && document.getElementById('b${a - i * 100}').innerText !== 0){
				document.getElementById('b${a - 100 * 1}').style.backgroundColor = 'green'
				break
			}
		for(let i =1; i < 9; i++){
			if((a - i ) > (aup) && document.getElementById('b${a - i }').innerText == 0){
				document.getElementById('b${a - 100}').style.backgroundColor = 'green'
			}
			else if((a - i *) > (aup) && document.getElementById('b${a - i }').innerText !== 0){
				document.getElementById('b${a - 100 }').style.backgroundColor = 'green'
				break
			}
			}
			item.style.backgroundColor ='pink'
			}
			//Bishop
			if(item.innerText == '${toggle}bishop'){
		for(let i =1; i < 9; i++){
			if((i < (900 - aup) / 100 && i < 9 - aside && document.getElementById('b${a + i * 100 + i}').innerText == 0){
				document.getElementById('b${a + i *100 + i}').style.backgroundColor = 'green'
			}
			else if((i < (900 - aup)/ 100  && i < 9 - aside && document.getElementById('b${a + i * 100 + i}').innerText !== 0){
				document.getElementById('b${a + i * 100 + i}').style.backgroundColor = 'green'
				break
			}
		for(let i =1; i < 9; i++){
			if((i <  aup / 100 && i < 9 - aside && document.getElementById('b${a - i * 100 + i}').innerText == 0){
				document.getElementById('b${a - i *100 + i}').style.backgroundColor = 'green'
			}
			else if((i < aup / 100  && i < 9 - aside && document.getElementById('b${a - i * 100 + 1}').innerText !== 0){
				document.getElementById('b${a - i * 100 + i}').style.backgroundColor = 'green'
				break
			}
			}
		for(let i =1; i < 9; i++){
				if((i < (900 - aup) / 100 && i < aside && document.getElementById('b${a + i * 100 - i}').innerText == 0){
				document.getElementById('b${a + i *100 + i}').style.backgroundColor = 'green'
			}
			else if((i < (900 - aup)/ 100  && i <  aside && document.getElementById('b${a + i * 100 - i}').innerText !== 0){
				document.getElementById('b${a + i * 100 - i}').style.backgroundColor = 'green'
				break
			}
			}
		for(let i =1; i < 9; i++){
			if((i <  aup / 100 && i < aside && document.getElementById('b${a - i * 100 + i}').innerText == 0){
				document.getElementById('b${a - i *100 + i}').style.backgroundColor = 'green'
			}
			else if((i < aup / 100  && i < aside && document.getElementById('b${a - i * 100 + 1}').innerText !== 0){
				document.getElementById('b${a - i * 100 + i}').style.backgroundColor = 'green'
				break
			}
			}
			
			item.style.backgroundColor ='pink'
			}
			//Queen
			if(item.innerText == '${toggle}queen'){
		for(let i =1; i < 9; i++){
			if((a + i * 100)<900 && document.getElementById('b${a + i * 100}').innerText == 0){
				document.getElementById('b${a + i * 100}').style.backgroundColor = 'green'
			}
			else if((a + i * 100)<900 && document.getElementById('b${a + i * 100}').innerText !== 0){
				document.getElementById('b${a + i * 100}').style.backgroundColor = 'green'
				break
			}
			}
		for(let i =1; i < 9; i++){
			if((a - i * 100)<100 && document.getElementById('b${a - i * 100}').innerText == 0){
				document.getElementById('b${a - 100 * 1}').style.backgroundColor = 'green'
			}
			else if((a - i * 100)<100 && document.getElementById('b${a - i * 100}').innerText !== 0){
				document.getElementById('b${a - 100 * 1}').style.backgroundColor = 'green'
				break
			}
		}
		for(let i =1; i < 9; i++){
			if((a + i ) < (aup + 9) && document.getElementById('b${a + i }').innerText == 0){
				document.getElementById('b${a + i}').style.backgroundColor = 'green'
			}
			else if((a + i ) < (aup + 9) && document.getElementById('b${a + i }').innerText !== 0){
				document.getElementById('b${a + i }').style.backgroundColor = 'green'
				break
			}
			}
		for(let i =1; i < 9; i++){
			if((a - i ) < (aup ) && document.getElementById('b${a - i }').innerText == 0){
				document.getElementById('b${a - i}').style.backgroundColor = 'green'
			}
			else if((a - i ) < (aup) && document.getElementById('b${a - i }').innerText !== 0){
				document.getElementById('b${a - i }').style.backgroundColor = 'green'
				break
			}
		for(let i =1; i < 9; i++){
				if((i < (900 - aup) / 100 && i < 9 - aside && document.getElementById('b${a + i * 100 + i}').innerText == 0){
				document.getElementById('b${a + i *100 + i}').style.backgroundColor = 'green'
			}
			else if((i < (900 - aup)/ 100  && i < 9 - aside && document.getElementById('b${a + i * 100 + i}').innerText !== 0){
				document.getElementById('b${a + i * 100 + i}').style.backgroundColor = 'green'
				break
			}
			}
		for(let i =1; i < 9; i++){
			if((i <  aup / 100 && i <9 - aside && document.getElementById('b${a - i * 100 + i}').innerText == 0){
				document.getElementById('b${a - i *100 + i}').style.backgroundColor = 'green'
			}
			else if((i < aup / 100  && i <9 - aside && document.getElementById('b${a - i * 100 + 1}').innerText !== 0){
				document.getElementById('b${a - i * 100 + i}').style.backgroundColor = 'green'
				break
			}
			}
		for(let i =1; i < 9; i++){
				if((i < (900 - aup) / 100 && i < aside && document.getElementById('b${a + i * 100 - i}').innerText == 0){
				document.getElementById('b${a + i *100 - i}').style.backgroundColor = 'green'
			}
			else if((i < (900 - aup)/ 100  && i < aside && document.getElementById('b${a + i * 100 - i}').innerText !== 0){
				document.getElementById('b${a + i * 100 - i}').style.backgroundColor = 'green'
				break
			}
			}
			for(let i =1; i < 9; i++){
			if((i <  aup / 100 && i < aside && document.getElementById('b${a - i * 100 - i}').innerText == 0){
				document.getElementById('b${a - i *100 - i}').style.backgroundColor = 'green'
			}
			else if((i < aup / 100  && i < aside && document.getElementById('b${a - i * 100 - 1}').innerText !== 0){
				document.getElementById('b${a - i * 100 - i}').style.backgroundColor = 'green'
				break
			}
			}
			
			
			
			item.style.backgroundColor ='pink'
			}
			//Knight
			if(item.innerText == '${toggle}knight'){
				if(aside < 7 && aup < 800){
					document.getElementById('b${a + 100 + 2}').style.backgroundColor = 'green'
				}
					
			
				
