
import { Navigate, useNavigate } from 'react-router-dom';
import './App.css'
import InputOne from './Component/InputOne'

function Login() {
  const navigete=useNavigate();
 const handleSubmit =(e)=>{
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("username");
    const password = form.get("password");
    console.log(name,password)
    if( name =='admin' && password=="1234"){
        document.getElementById("message").innerText="Successfully Login";
        navigete("/success");
    }
    else {
        document.getElementById("message").innerText="Wrong Credentials";
    }
 }
  
  return (
   <>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <InputOne type={"text"} name={"username"}></InputOne>
            </div>
            <div className="mb-6">
                <InputOne type={"password"} name={"password"}></InputOne>
            </div>
                <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Login</button>
         </form>
         <p id="message"></p>
      </div>
    </div>
   </>
  )
}

export default Login
