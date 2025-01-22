import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../Components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import { useState } from "react";
import axios from "axios";

const Signup = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    async function handleSubmit() {
        const res=await axios.post("http://localhost:3000/api/v1/user/signup",{
            firstName:firstName,
            lastName:lastName,
            username:email,
            password:password
        });
        if(res.status===200){
            alert("User created successfully");
        }
        
    }


    return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign up"} />
        <SubHeading label={"Enter your infromation to create an account"} />
        <InputBox onchange={e=>{setFirstName(e.target.value)}} placeholder="John" label={"First Name"} />
        <InputBox onchange={e=>{setLastName(e.target.value)}} placeholder="Doe" label={"Last Name"} />
        <InputBox onchange={e=>{setEmail(e.target.value)}} placeholder="harkirat@gmail.com" label={"Email"} />
        <InputBox onchange={e=>{setPassword(e.target.value)}}placeholder="123456" label={"Password"} />
        <div className="pt-4">
          <Button label={"Sign up"} onClick={handleSubmit} />
        </div>
        <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
      </div>
    </div>
  </div>
}
export default Signup;