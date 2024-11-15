'use client'
import Image from "next/image";
import { FormEvent, useState } from "react";
import ContactImg from "../Images/Contact.jpg";
import { toast, ToastContainer } from "react-toastify";  // Correct import
import 'react-toastify/dist/ReactToastify.css'; // Import required CSS

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false); // Track submission state

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        setIsSubmitting(true); // Start loading state
        try {
            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                toast.success(result.message); // Show success toast
                setFormData({ name: "", email: "", phone: "", message: "" }); // Clear form
            } else {
                toast.error(result.message); // Show error toast
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            toast.error('Something went wrong! Please try again later.'); // Show error toast for network failure
        } finally {
            setIsSubmitting(false); // End loading state
        }
    };

    return (
        <div className="font-sans w-screen dark:bg-gray-900 py-4 mx-auto relative rounded-3xl overflow-hidden">
            <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-purple"></div>
            <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-purple"></div>
            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl tracking-normal font-bold text-center text-gray-800 dark:text-white mb-8">
                Let’s Talk
            </h1>

            <div className="grid md:grid-cols-2 gap-8 py-8 px-6">
                <div className="text-center flex flex-col items-center justify-center">
                    <Image
                        src={ContactImg}
                        alt="Contact us illustration"
                        width={500}
                        height={500}
                        className="shrink-0 w-5/6"
                    />
                </div>

                <form className="rounded-tl-3xl rounded-bl-3xl" onSubmit={handleSubmit}>
                    <h2 className="text-2xl text-purple font-bold text-center mb-6">
                        Drop Me a Line
                    </h2>
                    <div className="max-w-md mx-auto space-y-3 relative">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full bg-gray-100 rounded-md py-3 px-4 text-sm outline-blue-600 focus-within:bg-transparent"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-gray-100 rounded-md py-3 px-4 text-sm outline-blue-600 focus-within:bg-transparent"
                        />
                        <input
                            type="text"
                            name="phone"
                            placeholder="Phone No."
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full bg-gray-100 rounded-md py-3 px-4 text-sm outline-blue-600 focus-within:bg-transparent"
                        />
                        <textarea
                            name="message"
                            placeholder="Message"
                            rows={6}
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full bg-gray-100 rounded-md px-4 text-sm pt-3 outline-blue-600 focus-within:bg-transparent"
                        />

                        <button
                            type="submit"
                            disabled={isSubmitting} // Disable button while submitting
                            className={`text-white w-full relative bg-purple rounded-md text-sm px-6 py-3 mt-6 flex items-center justify-center gap-2 ${isSubmitting ? 'cursor-not-allowed opacity-50' : ''}`}
                        >
                            {isSubmitting ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16px"
                                    height="16px"
                                    fill="#fff"
                                    className="animate-spin mr-2 inline"
                                    viewBox="0 0 548.244 548.244"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16px"
                                    height="16px"
                                    fill="#fff"
                                    className="mr-2 inline"
                                    viewBox="0 0 548.244 548.244"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            )}
                            Send Message
                        </button>
                    </div>
                </form>
            </div>

            {/* Render ToastContainer to show notifications */}
            <ToastContainer />
        </div>
    );
}
