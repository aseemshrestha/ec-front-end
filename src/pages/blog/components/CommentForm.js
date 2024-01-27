import React from "react";
import { useForm } from "react-hook-form";

export default function CommentForm() {
   const { register, handleSubmit, formState: { errors } } = useForm();
   const onSubmit = (data) => {
      alert(JSON.stringify(data));
   };

   return (
      <form className="comment_form" onSubmit={handleSubmit(onSubmit)}>
         <div className="row">
            <div className="col-md-12">
               <p className="form-box">
                  <textarea {...register("comment", { required: true, minLength: 24, maxLength: 300 })} placeholder="Your comment" className="form-control"  />
                  {errors?.comment?.type === "required" && <label className="error">This field is required</label>}
                  {errors?.comment?.type === "minLength" && <label className="error">Comment should be atleast 24 characters long</label>}
                  {errors?.comment?.type === "maxLength" && <label className="error">Comment cannot exceed 300 characters</label>}
               </p>
            </div>
            <div className="col-md-6">
               <p className="form-box">
                  <input {...register("full_name", { required: true, maxLength: 12, pattern: /^[A-Za-z]+$/i })} type="text" placeholder="Full Name" className="form-control" />
                  {errors?.full_name?.type === "required" && <label className="error">This field is required</label>}
                  {errors?.first_name?.type === "maxLength" && <label className="error">First name cannot exceed 12 characters</label>}
                  {errors?.first_name?.type === "pattern" && <label className="error">Alphabetical characters only</label>}
               </p>
            </div>
            <div className="col-md-6">
               <p className="form-box">
                  <input {...register("email", { required: true, pattern: /^[^ ]+@[^ ]+\.[a-z]{2,6}$/i })} type="email" placeholder="Email Address" className="form-control" />
                  {errors?.email?.type === "required" && <label className="error">This field is required</label>}
                  {errors?.email?.type === "pattern" && <label className="error">Incorrect email address</label>}
               </p>
            </div>
            <div className="col-md-12">
               <button className="comment-btn btn btn-primary" type="submit">Post Comment</button>
            </div>
         </div>
      </form>
   );
}