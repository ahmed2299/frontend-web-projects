let userName=document.getElementById('username')


let idx=Number(localStorage.getItem('userName'))

userName.innerHTML=`Welcome ${userList[idx].name}`
