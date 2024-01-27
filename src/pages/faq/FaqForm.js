import React from "react";
import { useForm } from "react-hook-form";

export default function FaqForm() {
   const { register, handleSubmit, formState: { errors } } = useForm();
   const onSubmit = (data) => {
      alert(JSON.stringify(data));
   };

   return (
      <form className="faq_form" onSubmit={handleSubmit(onSubmit)}>
         <div className="row">
            <div className="col-md-12">
               <p className="form-box">
                  <input {...register("full_name", { required: true, maxLength: 12, pattern: /^[A-Za-z]+$/i })} type="text" placeholder="Full Name" className="form-control" />
                  {errors?.full_name?.type === "required" && <label className="error">This field is required</label>}
                  {errors?.full_name?.type === "maxLength" && <label className="error">Full name cannot exceed 12 characters</label>}
                  {errors?.full_name?.type === "pattern" && <label className="error">Alphabetical characters only</label>}
               </p>
            </div>
            <div className="col-md-12">
               <p className="form-box">
                  <input {...register("email", { required: true, pattern: /^[^ ]+@[^ ]+\.[a-z]{2,6}$/i })} type="email" placeholder="Email Address" className="form-control" />
                  {errors?.email?.type === "required" && <label className="error">This field is required</label>}
                  {errors?.email?.type === "pattern" && <label className="error">Incorrect email address</label>}
               </p>
            </div>
            <div className="col-md-12">
               <p className="form-box">
                  <input {...register("phone", { required: true, minLength: 6, maxLength: 12 })} type="number" placeholder="Phone Number" className="form-control" />
                  {errors?.phone?.type === "required" && <label className="error">This field is required</label>}
                  {errors?.phone?.type === "minLength" && <label className="error">Phone number cannot below 6 characters</label>}
                  {errors?.phone?.type === "maxLength" && <label className="error">Phone number cannot exceed 12 characters</label>}
               </p>
            </div>
            <div className="col-md-12">
               <p className="form-box">
                  <select {...register("service", { required: true })} defaultValue="1" className="form-select">
                     <option value="1" disabled hidden>Select an option</option>
                     <option value="option1">Option 1</option>
                     <option value="option2">Option 2</option>
                     <option value="option3">Option 3</option>
                     <option value="option4">Option 4</option>
                  </select>
                  {errors?.service?.defaultValue === "1" && <label className="error">Select an option</label>}
               </p>
            </div>
            <div className="col-md-12">
               <button className="submit-btn btn btn-primary" type="submit">Submit Now</button>
            </div>
         </div>
      </form>
   );
}