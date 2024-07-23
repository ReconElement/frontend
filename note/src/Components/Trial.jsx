// import {useState} from 'react'
// function Trial(){
//     const [title, setTitle] = useState("")
//     const [text, setText] = useState("")
//     function onChange(Event){
//         setTitle(Event.target.title)
//         setText(Event.target.text)
//     }
//     function onSubmit(){
//         Event.preventDefault();
//         console.log(title)
//         console.log(text)
//     }
//     return(
//         <form onSubmit={onSubmit}>
//             <title>Title <input type="text" name="title" value={title} placeholder="add title" onChange={onChange}/></title><br/>
//             <textarea name="text" id="" value={text} placeholder="add note" onChange={onChange}></textarea><br/>
//             <input type="submit" />
//         </form>
//     )
// }

// export default Trial;

// import {useState} from 'react';
// const Trial = ()=>{
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [errors, setErrors] = useState<{email, password}>({
//         email: "",
//         password: ""
//     });

//     const handleSubmit = (e)=>{
//         e.preventDefault();
//         setErrors({email: "", password: ""});
//         //Manual validation
//         if(!email.includes("@")){
//             setErrors({...errors, email: "Email must include '@'"});
//             return;
//         }
//         if(password.length<8){
//             setErrors({...errors, password: "Password must be at least 8 characters"});
//             return;
//         }

//         setEmail(e.target.email);
//         setPassword(e.target.password);
//         console.log("Form submitted");
//     }

//     return(
//         <form onSubmit={handleSubmit}>
//             <title>Form</title><br/>
//             <input type="text" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
//             {errors.email && <div className="text-red-500">{errors.email}</div>}<br/>
//             <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/><br/>
//             {errors.password && <div className="text-red-500">{errors.password}</div>}<br/>
//         </form>
//     )
// }

// export default Trial;

// import {useState} from 'react';
// const Trial=()=>{
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [errors, setErrors] = useState<{email, password}>({
//         email: "",
//         password: ""
//     });
//     const handleSubmit = (e)=>{
//         e.preventDefault();
//         setErrors({email: "", password:""});
//         //manual validation
//         if(!email.includes("@")){
//             setErrors({...errors, email:"Email must include '@'"});
//             return;
//         }
//         if(password.length<8){
//             setErrors({...errors, password: "The password should be at least 8 characters long"});
//             return;
//         }
//         setEmail(e.target.email);
//         setPassword(e.target.password);
//     }
//     return(
//         <form onSubmit={handleSubmit}>
//             <label>Enter email: <input type="text" name="email" id="" placeholder="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} /></label><br/>
//             <label>Enter password: <input type="password" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} id="" /></label>
//             <input type="submit" />
//         </form>
//     )
// }

// export default Trial;

import {useForm} from 'react-hook-form';
const Trial = ()=>{
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data)=>{
        console.log(data);
        reset({
            email: " ",
            password: " "
        },{
            keepValues: true,

        });
    }
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("email")} type="text" placeholder="Email"/>
            <input {...register("password")} type="password" placeholder="Password"/>
            <button type="submit" onClick={()=>reset()}>Submit</button>
        </form>
    );
};

export default Trial;