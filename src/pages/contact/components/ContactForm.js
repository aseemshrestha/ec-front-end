import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function ContactForm() {
   const { register, handleSubmit, formState: { errors } } = useForm();
   const [formSuccess, setFormSuccess] = useState(false);

   const onSubmit = () => {
      setFormSuccess(true);

      setTimeout(() => {
         setFormSuccess(false);
      }, 4000)
   };

   return (
      <>
         <form className="contact_form" onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
               <div className="col-md-6">
                  <p className="form-box">
                     <input {...register("name", { required: true, maxLength: 20, pattern: /^[a-zA-Z]{2,}(?: [a-zA-Z]+){0,2}$/i })} type="text" placeholder="Full Name" className="form-control" />
                     {errors?.name?.type === "required" && <label className="error">This field is required</label>}
                     {errors?.name?.type === "maxLength" && <label className="error">Full name cannot exceed 20 characters</label>}
                     {errors?.name?.type === "pattern" && <label className="error">Alphabetical characters only</label>}
                  </p>
               </div>
               <div className="col-md-6">
                  <p className="form-box">
                     <input {...register("email", { required: true, pattern: /^[^ ]+@[^ ]+\.[a-z]{2,6}$/i })} type="email" placeholder="Email Address" className="form-control" />
                     {errors?.email?.type === "required" && <label className="error">This field is required</label>}
                     {errors?.email?.type === "pattern" && <label className="error">Incorrect email address</label>}
                  </p>
               </div>
               <div className="col-md-6">
                  <p className="form-box">
                     <input {...register("phone", { required: true, pattern: /^\s*(?:\+?(\d{1,3}))?[- (]*(\d{3})[- )]*(\d{3})[- ]*(\d{4})(?: *[x/#]{1}(\d+))?\s*$/i })} type="tel" placeholder="Phone Number" className="form-control" />
                     {errors?.phone?.type === "required" && <label className="error">This field is required</label>}
                     {errors?.phone?.type === "pattern" && <label className="error">Incorrect phone number</label>}
                  </p>
               </div>
               <div className="col-md-6">
                  <p className="form-box">
                     <input {...register("subject", { required: true, maxLength: 20, pattern: /^[a-zA-Z]{1,}(?: [a-zA-Z]+){0,5}$/i })} type="text" placeholder="Subject" className="form-control" />
                     {errors?.subject?.type === "required" && <label className="error">This field is required</label>}
                     {errors?.subject?.type === "maxLength" && <label className="error">Subject cannot exceed 20 characters</label>}
                     {errors?.subject?.type === "pattern" && <label className="error">Alphabetical characters only</label>}
                  </p>
               </div>
               <div className="col-md-12">
                  <p className="form-box">
                     <textarea {...register("message", { required: true, minLength: 12, maxLength: 300 })} placeholder="Your message" className="form-control" />
                     {errors?.message?.type === "required" && <label className="error">This field is required</label>}
                     {errors?.message?.type === "minLength" && <label className="error">Message should be atleast 12 characters long</label>}
                     {errors?.message?.type === "maxLength" && <label className="error">Message cannot exceed 300 characters</label>}
                  </p>
               </div>
               <div className="col-md-12">
                  <button className="submit-btn btn btn-primary" type="submit">Submit</button>
               </div>
            </div>
         </form>
         {(formSuccess) ? <pre className="success-message"><p><i className="las la-check-circle"></i> Message Sent Successfully</p></pre> : ""}
      </>
   );
}