import Image from "next/image";
import logo from "../../public/assets/logo.png"

import contact from "../../public/assets/contact.png"
const orb = Orbitron({ weight: "600", subsets: ["latin"] });
const orb4 = Orbitron({ weight: "400", subsets: ["latin"] });
const outfit = Outfit({ weight: "600", subsets: ["latin"] });
import { Orbitron, Outfit } from "next/font/google";
import { SocialIcon } from "react-social-icons";
import { useState } from "react";


export default function ContactUs(){


  const [name, setName] = useState(' ')
  const [surname, setSurname] = useState('')
  const [phone, setPhone] = useState('')

  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)


  const handleSubmit = (e) => { 
    e.preventDefault()
    
    console.log('Sending')
  let data = {
      name,
      surname,
      phone,
      email,
      message
    }
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        
      },
      body: JSON.stringify(data)
    
    }).then((res) => { 
      console.log('Response received')  
      
        console.log('Response succeeded!')
       
        if (res.status === 200) {
        setSubmitted(true)
        setPhone('')
        setName('')
        setSurname('')
        setEmail('')
        setMessage('') 
        }
    })
  }



    return(
        <>
        <div className="w-screen flex bg-[#9E00FF] mt-16 py-12">
            <div className="p-12 hidden md:flex justify-center w-full">
                <Image src={contact}></Image>
            </div>
            <div className="w-full">
        <div className="  py-12 flex px-12 justify-start items-center">
          <div className={orb.className} >
            <p className="text-white text-3xl font-bold leading-10">
              Contact Us
            </p>
            <div className="w-full py-8 px-[-28px] flex  justify-start  text-white">
              <p className=" md:text-sm lg:text-base">
                Fill out the form below and we will get in touch with you soon
              </p>
            </div>
            <div className="flex gap-8 h-full">
              <input
              name="name"
                placeholder="First Name"
                onChange={(e)=>{setName(e.target.value)}}
                className="w-full bg-white border-2 rounded-md text-black p-4 border-white  border-opacity-20
              "
              ></input>
              <input name="surname" onChange={(e)=>{setSurname(e.target.value)}} placeholder="Last Name" className="w-full bg-white p-4 border-2 rounded-md text-black  border-white border-opacity-20"></input>
            </div>
            <div className="flex gap-8 py-4 h-full">
              <input
              name="phone"
              
              type="tel"
              onChange={(e)=>{setPhone(e.target.value)}}
                placeholder="Phone Number"
                className="w-full bg-white border-2 rounded-md text-black p-4 border-white border-opacity-20
              "
              ></input>
              <input type="email" name="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="E-Mail" className="w-full bg-white p-4 border-2 text-black  rounded-md border-white border-opacity-20"></input>
            </div>
            <div className="flex gap-8 py-4 h-full">
             <textarea name="message" onChange={(e)=>{setMessage(e.target.value)}} placeholder="How can we help you?" className="w-full bg-white border-2 rounded-md text-black p-4 border-white border-opacity-20"></textarea>
            </div>
            <div className="flex gap-8 py-4 h-full">
                <div onClick={(e)=>{handleSubmit(e)}} className="w-full py-3 px-5 bg-[#6D0BBA] hover:bg-black cursor-pointer flex justify-center text-white rounded-xl" >
                   <div>{submitted ? "Done!" : "Send Messages"}</div>
                </div>
            </div>
          </div>
        </div>
      </div>

        </div>
        <div className="w-screen px-32 flex justify-between items-center bg-black">
            <div>
                <Image src={logo} width={80} className="py-4"></Image>
            </div>  <div className={outfit.className}>
            <div className="flex gap-4 text-[16px] text-white">
              
                <div>Our Cases</div>
                <div>Solutions</div>
                <div>About Us</div></div>
            </div>
            <div>
                <SocialIcon network="twitter" fgColor="white" bgColor="black"></SocialIcon>
                <SocialIcon network="telegram" fgColor="white" bgColor="black"></SocialIcon>
            </div>
        </div>
        </>
    )
}