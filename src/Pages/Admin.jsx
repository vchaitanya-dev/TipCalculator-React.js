import React,{useState} from 'react'
import {AiFillEye} from 'react-icons/ai'
import {auth} from '../config/firebase'
import {signInWithEmailAndPassword} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { NotificationManager } from 'react-notifications'
function Admin() {
    const navigate = useNavigate()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(true)
    const onSumbit = async (event) => {
        event.preventDefault();
        try{
            await signInWithEmailAndPassword(auth,email,password);
            console.log(auth.currentUser?.email)
            navigate(`/admin/${auth.currentUser.email}`)
        }
        catch(error){
            NotificationManager.error('Error message', 'Click me!', 5000, () => {
                alert('callback');
              });
        }
    }
  return (
    <div className='h-screen flex bg-third'>
        <div  className='w-full max-w-md m-auto bg-first rounded-lig border-primaryBorder shadow-default py-10 px-16'
        >
            <h1 className='text-3xl font-sans text-second mt-4 mb-12 text-center'> Welcome Administator</h1>
            <form>
                <input className={`w-full p-2 text-third border rounded-md 
                outline-none text-sm transition duration-150 ease-in-out mb-4
                `} value={email} onChange={(e) => setEmail(e.target.value)}
                type="email" placeholder="Enter admin email address" />
                <div className='flex flex-row'>
                <input className={`w-full p-2 text-third border rounded-md 
                outline-none text-sm transition duration-150 ease-in-out mb-4
                `} value={password} onChange={(e) => setPassword(e.target.value)}
                type={showPassword === false ? "text" :"password"} placeholder="Enter admin password"/>
               <AiFillEye onClick={() => setShowPassword(!showPassword) } className='show' size={25}/>
                </div>
            <div className='flex justify-center items-center mt-6'>
                <button className={`bg-third py-2 px-4 text-lg text-first  rounded border border-white focus:outline-none 
                foucs: border-first
                `} onClick={onSumbit}
                >Login</button>
            </div>
            </form>
        
        </div>
    </div>
  )
}

export default Admin