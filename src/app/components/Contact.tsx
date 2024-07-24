import { toast } from 'react-toastify';
import { useState } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });

  const apiKey = process.env.PUBLIC_ACCESS_KEY || "a4b0c6bd-ebe6-4ec4-989a-400ec5837d2d";
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState("");

  const { submit: onSubmit } = useWeb3Forms({
    access_key: apiKey,
    settings: {
      from_name: "Acme Inc",
      subject: "New Contact Message from your Website",
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setMessage(msg);
      reset();
      toast.success("Message sent successfully!");
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setMessage(msg);
      toast.error("Error sending message. Please try again.");
    },
  });

  return (
    <div className="bg-gray-900 py-8 md:py-14" id="contact">
      <div className="container mx-auto">
        <div className="max-w-screen-md mx-auto">
          <div className="bg-opacity-[3%] bg-dark rounded-md p-11 md:mb-12 lg:mb-5 sm:p-[55px] lg:p-11 xl:p-[55px] wow fadeInUp" data-wow-delay=".15s">
            <h2 className="text-white font-bold text-2xl sm:text-3xl lg:text-2xl xl:text-3xl mb-3">Need Help?</h2>
            <p className="text-white text-base font-medium mb-12">
              Feel free to reach out to me for any questions or opportunities or mail me directly on{" "}
              <a href="mailto:bhandarishankar.official@gmail.com" className="underline text-blue-700" title="Contact Me">
                bhandarishankar.official@gmail.com
              </a>
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-wrap mx-[-16px]">
                <div className="w-full md:w-1/2 px-4">
                  <div className="mb-8">
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-3">Your Name</label>
                    <input
                      {...register("name", { required: "Name is required" })}
                      type="text"
                      placeholder="Enter your name"
                      className="w-full border border-transparent bg-transparent rounded-md shadow-one shadow-signUp py-3 px-6 outline-none focus-visible:shadow-none focus:border-blue-700  bg-[#FFFFFF] "
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message as string}</p>}
                  </div>
                </div>
                <div className="w-full md:w-1/2 px-4">
                  <div className="mb-8">
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-3">Your Email</label>
                    <input
                      {...register("email", { 
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address"
                        }
                      })}
                      type="email"
                      placeholder="Enter your email"
                      className="w-full border border-transparent rounded-md shadow-one shadow-signUp py-3 px-6 outline-none focus-visible:shadow-none focus:border-blue-700 bg-[#FFFFFF]"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message as string}</p>}
                  </div>
                </div>
                <div className="w-full px-4">
                  <div className="mb-8">
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-3">Your Message</label>
                    <textarea
                      {...register("message", { required: "Message is required" })}
                      rows={5}
                      placeholder="Enter your Message"
                      className="w-full border border-transparent rounded-md shadow-one shadow-signUp py-3 px-6 outline-none focus-visible:shadow-none focus:border-blue-700 resize-none"
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message as string}</p>}
                  </div>
                </div>
                <div className="w-full px-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full text-base font-medium text-white bg-blue-700 py-4 px-9 hover:bg-opacity-80 hover:shadow-signUp rounded-md transition duration-300 ease-in-out disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Send"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}