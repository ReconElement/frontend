import './Contents.css'
// export default function Contents(){
    // function handleSubmit(e){
    //     e.preventDefault();//Prevent the browser from reloading the page
        
    // }
    // return(
    //     <form>
    //         <label className="label">Title <input type="text" placeholder="Add title" className="titleform" onChange={handleSubmit} />
    //         </label><br/>
    //         <label className="label">Text  <textarea name="" id="" placeholder="Add text" rows="4" cols="50" className="textbox" onChange={handleSubmit}></textarea>
    //         </label>
    //     </form>
    // )
// }

import { useForm } from 'react-hook-form'
const Contents = ()=>{
    const {register, handleSubmit, reset} = useForm({
        title: "",
        text: ""
    });
    const onSubmit = (data)=>{
        console.log(data.title);
        console.log(data.text);
    }
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <label className="label">Title <input className="titleForm" {...register("title")} type="text" placeholder="add title" id='title'  /></label><br/>
            <label className="label">Note <textarea className="textbox" cols="50" rows="5" {...register("text") } id='text' ></textarea></label><br/>
            <button type="submit" >Submit</button>
        </form>
    )
}

export default Contents;
