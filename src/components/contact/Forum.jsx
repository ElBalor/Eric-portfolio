"use client";
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Toaster} from 'sonner'



const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};
const render = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0.8,
    },
  },
};

const luner = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};

export default function Form() {

    const sendEmail = (params) => {

        const toastId = toast.loading("Sending your message, please wait...😌");
    
        // toast.loading(
        //   "Sending your message, please wait...😌",
        //   {
        //     id: toastId,          }
        // );
    
        emailjs
          .send(
            process.env.NEXT_PUBLIC_SERVICE_ID,
            process.env.NEXT_PUBLIC_TEMPLATE_ID,
            params,
            {
              publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
              limitRate: {
                throttle: 5000, // you can not send more then 1 email per 5 seconds
              },
            }
          )
          .then(
            () => {
              toast.success(
                "I have received your message😎, I will get back to you soon!",
                {
                  id: toastId,
                }
              );
            },
            (error) => {
              console.log("FAILED...", error.text);
              toast.error(
                "There was an error sending your message😵, please try again later!",
                {
                  id: toastId,
                }
              );
            }
          );
      };

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data =>{
    
    const templateParams = {
        to_name: "ElBalor",
        from_name: data.Fullname,
        reply_to: data.Email,
        message: data.Message,
        Number:data.MobileNumber,
        Developer:data.Developer
      };
  
    sendEmail(templateParams)
  };
  console.log(errors);
  
  return (
   <>
    <Toaster richColors={true}/>
    <motion.form
     variants={container}
     initial="hidden"
     animate="show"
    onSubmit={handleSubmit(onSubmit)}
    className='max-w-md w-full flex flex-col items-center justify-center space-y-4'
    >
      <motion.input 
       variants={item}
      type="text" placeholder="Full name" {...register("Fullname", {required: "Your FullName is Needed!!", minLength:{ value:4, message: "Fullname should be atleast 4 characters long!!"}, maxLength: 80})}
      className='w-full p-2 rounded-md shadow-xl text-foreground focus:outline-none focus:ring-2 focus:ring-accent/60 custom-bg '
      />
      {
        errors.Fullname && <span className='text-red-500 inline-block font-semibold text-lg'>{errors.Fullname.message}</span>
      }
      <motion.input
       variants={item}
      className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/60 custom-bg'
      type="text" placeholder="User name" {...register("Username", {required: true, minLength:{ value:3, message:"Your username should be atleast 3 Charachers long!"},  maxLength: 100})} />
      {
        errors.Username && <span className='text-red-500 inline-block font-semibold text-lg'>{errors.Username.message}</span>
      }
      <motion.input 
       variants={item}
      className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/60 custom-bg'
      type="email" placeholder="Email" {...register("Email", {required: "Email Needed", minLength:{value:5, message:"Invalid Email"}, pattern: /^\S+@\S+$/i})} />
        {
        errors.Email && <span className='text-red-500 inline-block font-semibold text-lg'>{errors.Email.message}</span>
        }

      {/* <motion.input 
      className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/60 custom-bg'
      type="tel" placeholder="Mobile Number" {...register("MobileNumber", {required: true})} /> */}

        <motion.div 
         variants={item}
        className='w-full p-3 rounded-md flex justify-between items-center shadow-lg text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent/60 custom-bg'>
       <motion.h2  variants={item} className=' justify-start'>Developer?</motion.h2>
       <motion.p  variants={render} className='justify-between items-center'> Yes {" "}
      <motion.input 
       variants={item}
       className='text-white' {...register("Developer?", { required: true })} type="radio" value="Yes" />
      </motion.p>
      <motion.p variants={render} className='justify-between items-center'> No {" "}
      <motion.input
       variants={item}
      {...register("Developer?", { required: true })} type="radio" value="No" />
      </motion.p>
       </motion.div>
      <motion.textarea
       variants={item}
      placeholder='Message and Mobile Number'
      className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/60 custom-bg'
      {...register("Message", {required: "Input Message", max: 500, minLength:{value:5, message:"Message Should not be scanty"}, min: 5})} />
        {
        errors.Message && <span className='text-red-500 inline-block font-semibold text-lg'>{errors.Message.message}</span>
        }

      <motion.input 
      value="Cast your Message!"
      className='px-10 py-4 xl:top-0 relative -top-3 rounded-md shadow-lg bg-background border border-accent/40 border-solid hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/60 hover:scale-110 hover:duration-300 cursor-pointer capitalize'
      type="submit" />
    </motion.form>
 
   </> );
}