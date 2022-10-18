let signUpName=document.getElementById('signupName')
let signUpEmail=document.getElementById('signupEmail')
let signUpPassword=document.getElementById('signupPassword')

let signUp=document.getElementById('signUp')

let existUser=document.getElementById('exist')

let userList=[]

if(localStorage.getItem('users')!=null){
    userList=JSON.parse(localStorage.getItem('users'))
}


signUp.addEventListener('click',()=>{
    userSignUpData={
        name:signUpName.value,
        email:signUpEmail.value,
        password:signUpPassword.value
    }
    if(userList.length==0){
        if(signUpEmail.value==""||signUpName.value==""||signUpPassword.value==""){
            existUser.innerHTML=`<span class="text-danger m-3">All inputs is required</span>`
        }
        else{
            userList.push(userSignUpData)
            existUser.innerHTML=`<span class="text-success m-3">Success</span>`
            localStorage.setItem('users',JSON.stringify(userList))
        }
    }
    else{
        checkSignUp()
        localStorage.setItem('users',JSON.stringify(userList))

    }

})

checkSignUp=()=>{
    let temp=""
    let flag=0
    check_email=/^[a-zA-Z][a-zA-Z0-9._]*@[a-z]+\.com$/
    console.log(check_email.test(signUpEmail.value))
    console.log(signUpEmail.value)
    if(!check_email.test(signUpEmail.value)){
        temp=`<span class="text-danger m-3">Enter valid email</span>`
        flag=1
    }
    else{
        for(let i=0;i<userList.length;i++){
            if(signUpEmail.value==""||signUpName.value==""||signUpPassword.value==""){
                temp=`<span class="text-danger m-3">All inputs is required</span>`
                flag=1
                break
            }
    
            else if(signUpEmail.value==userList[i].email){
                temp=`<span class="text-danger m-3">Email already exists</span>`
                flag=1
                break
            }
    
        }
        if(flag==0){
            temp=`<span class="text-success m-3">Success</span>`
            userList.push(userSignUpData)
        }
    }
    existUser.innerHTML=temp
}