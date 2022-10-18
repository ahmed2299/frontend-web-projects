let login=document.getElementById('login')

let signInEmail=document.getElementById('signinEmail')
let signInPassword=document.getElementById('signinPassword')

let incorrectUser=document.getElementById('incorrect')


let userList=[]

if(localStorage.getItem('users')!=null){
    userList=JSON.parse(localStorage.getItem('users'))
}


login.addEventListener('click',()=>{

    if(userList.length==0){
        if(signInEmail.value==""||signInPassword.value==""){
            incorrectUser.innerHTML=`<span class="text-danger m-3">All inputs is required</span>`
        }
        else{
            incorrectUser.innerHTML=`<span class="p-2 text-danger">incorrect email or password</span>`
        }
    }
    else{
        userList=JSON.parse(localStorage.getItem('users'))
        checkSignIn()
    }
})

let i
checkSignIn=()=>{
    let temp=""
    flag=0
    for(i=0;i<userList.length;i++){
        if(signInEmail.value==""||signInPassword.value==""){
            temp=`<span class="text-danger m-3">All inputs is required</span>`
            flag=1
            break
        }
        if(signInEmail.value != userList[i].email || signInPassword.value != userList[i].password){
            temp=`<span class="p-2 text-danger">incorrect email or password</span>`
            flag=1
        }
        else{
            flag=0
            localStorage.setItem('userName',JSON.stringify(i))
            break
        }
    }

    if(flag==0){
        location.href='home.html'
    }

    else{
        incorrectUser.innerHTML=temp
    }
    console.log(flag)

}

