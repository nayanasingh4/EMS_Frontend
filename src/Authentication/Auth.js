import Header from "../Components/Header";
import Header1 from "../Components/Header1";

//isLoggedIn
export const isLoggedIn=()=>{
    let token=localStorage.getItem("token")
    if(token==null){
        <Header1></Header1>
    }
    else{
        <Header></Header>
    }
}

//doLogin
export const doLogin=(token,email,next)=>{
    localStorage.setItem("token",JSON.stringify(token))
    localStorage.setItem("email",email)
    next()
};

//Log Out
export const doLogout=()=>{
    localStorage.removeItem("token")
    localStorage.removeItem("userid")
   // window.localStorage.clear();
}