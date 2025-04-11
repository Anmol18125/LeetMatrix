import React from 'react';
import { useForm } from "react-hook-form";
import './form.css'

const formUsingReacthook = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting,isSubmitted },
      } = useForm();


     async function onSub(data)
    {
await new Promise((resolve)=>setTimeout(resolve,5000))
        console.log('This is username',data)

    }
  return (
    <form  id='formy'  onSubmit={handleSubmit(onSub)} >

<div>
<label >First Name::</label>
<input
className={errors.firstName?'error-input':""}

{...register("firstName",{ required: true, maxLength: 20 ,minLength:{value:3,message:'Bhai sahi naam de'}})} />
{errors.firstName&&<p className={errors.firstName?'error-msg':''}>{errors.firstName.message}</p>}
</div>
<br />
<div>
<label >Middle Name::</label>
<input {...register("MiddleName")} />

</div>
<br />
<div>
<label >Last Name::</label>
<input {...register("LastName",{required: true, maxLength: 20 ,minLength:3,pattern:{value: /^[A-Za-z]+$/i ,message:'Bhai naam sahi sedal'}})} />
{errors.LastName&&<p className={errors.LastName?'error-msg':''}>{errors.LastName.message}</p>}
</div>
<br />

<button 
  id='btn' 
  type='submit' 
  disabled={isSubmitting}
>
  {isSubmitted ? "Rukja bhai submit ho rha h" : ' Submit'}
</button>

    </form>
  )
}

export default formUsingReacthook
