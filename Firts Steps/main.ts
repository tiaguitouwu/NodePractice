let nombre:string= "Raul"
let obj:{name:string, age:number} 

interface obj{
    name:string;
    age:number;
    function:string;
}

obj = {name:"hola",age:10}

interface Login<Pwd>{
    email:string;
    password:Pwd;
}

interface Member{
    userName:string;
    status:MemberStatus
}

enum MemberStatus{
    Active = "Active",
    Inactive = "Inactive",
    New = "New"
}

type PasswordType = string | number
type LoginResult = Promise<null | Member>

async function login(loginArgs: Login<PasswordType>):LoginResult{
    if(loginArgs.email==="email" && loginArgs.password === "password"){
        return {userName:"john", status:MemberStatus.Active}
    }else{
        return null
    }
}

login({email:"app", password:"abc"}).then(result =>{
    if(!result) return
    if(result.status === MemberStatus.Active) console.log("User is active")
})

