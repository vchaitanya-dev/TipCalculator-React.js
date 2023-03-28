import React,{useState} from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
function Contact() {
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [subject,setSubject] = useState("");
  const [email,setEmail] = useState("");
  const [message,setMessage] = useState("");
  return (
    <>
    <Header />
    <div className='contact'>
        <div  className='w-full max-w-md m-auto bg-third rounded-lig border-primaryBorder shadow-default py-10 px-16'
        >
            <h1 className='text-3xl font-sans text-second mt-2 mb-6 text-center'>
               Get in Touch</h1>
             <p className='text-lg font-sans text-second mt-2 mb-2 text-center'>Feel free to drop a message to us</p>  
            <form className='mt-[-60]'>
            <input type="name" value={firstName}  onChange={(e) => setFirstName(e.target.value) } 
            className='ml-2 w-full mt-2 p-2' placeholder='Enter your first name' />
            <input type="name" value={lastName} onChange={(e) => setLastName(e.target.value)}
            className='ml-2 mt-2 w-full p-2' placeholder='Enter your last name' />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
            className='ml-2 mt-2 w-full p-2' placeholder='Enter your email address' />
            <input type="name" value={subject} onChange={(e) => setSubject(e.target.value)}
            className='ml-2 mt-2 w-full p-2' placeholder='Enter your subject' />
            <textarea value={message} onChange={(e) => setMessage(e.target.value)}
             className='ml-2 mt-2 p-2 h-40 w-full' placeholder='Enter you message'/>
            <button  
            className='ml-2 mt-2 bg-second p-2 text-first rounded self-center'>Submit</button>
            </form>
        </div>
    </div>

    <Footer />
    </>
  )
}

export default Contact