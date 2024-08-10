import Navbar from '@/components/dashboard/Navbar'
import React, { useState, useEffect, useRef } from 'react'
import { IoPaperPlaneOutline } from "react-icons/io5";
import chatbot from '../../assets/chatbot.png'
import ReactMarkdown from "react-markdown";
import BeatLoader from "react-spinners/BeatLoader";


const Farmbot = () => {
    const [question, setQuestion] = useState("");
    const [messages, setMessages] = useState([]);
    const [generatingAnswer, setGeneratingAnswer] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const chatContainerRef = useRef(null);

    useEffect(() => {
        const savedMessages =
            JSON.parse(localStorage.getItem("chatMessages")) || [];
        setMessages(savedMessages);
    }, []);

    useEffect(() => {
        localStorage.setItem("chatMessages", JSON.stringify(messages));
    }, [messages]);

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages]);

    async function generateAnswer(e) {
        setGeneratingAnswer(true);
        e.preventDefault();
        const newMessage = { sender: "user", text: question };
        setMessages((prev) => [...prev, newMessage]);
        setQuestion("");

        try {
            setIsLoading(true);
            const response = await fetch('https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=' + import.meta.env.VITE_GEMINI_API_KEY + '', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: newMessage.text }] }]
                })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setIsLoading(false);
            const botMessage = {
                sender: "bot",
                text: data.candidates[0].content.parts[0].text,
            };
            setMessages((prev) => [...prev, botMessage]);
        } catch (error) {
            console.log(error);
            const errorMessage = {
                sender: "bot",
                text: "Sorry - Something went wrong. Please try again!",
            };
            setMessages((prev) => [...prev, errorMessage]);
        }
        setGeneratingAnswer(false);
    }

    return (
        <div className='flex max-w-7xl mx-auto'>
            <Navbar />
            <div className='h-screen overflow-auto p-8 w-full space-y-4'>
                <h1 className='font-semibold text-2xl'>Farmbot</h1>
                <div>
                    <div className='p-2 max-w-xl mx-auto overflow-auto space-y-4'>
                        <p className='p-4 bg-slate-200 font-medium rounded-md text-sm underline'>Ask the chatbot with your queries related to farming and agriculture.</p>

                        {/* looping through messages */}
                        <div ref={chatContainerRef} className='p-4 space-y-4 h-[65vh] overflow-auto'>
                            {
                                messages && messages.map((msg, index) =>
                                    <div key={index} >
                                        {msg.sender === "user" &&
                                            <div className='py-2 flex space-x-4 justify-end'>
                                                <div className='space-y-2'>
                                                    <h1 className='font-semibold text-right'>You</h1>
                                                    <div className='px-3 py-2 bg-blue-500 text-white rounded-l-xl rounded-b-xl text-sm'>
                                                        <ReactMarkdown>
                                                            {msg.text}
                                                        </ReactMarkdown>
                                                    </div>
                                                </div>
                                                <h1 className='h-10 w-10 flex items-center justify-center shrink-0 text-white  rounded-full bg-stone-900'>
                                                    S
                                                </h1>
                                            </div>
                                        }

                                        {msg.sender === "bot" && <div className='py-2 flex space-x-4'>
                                            <h1 className='h-10 w-10 flex items-center justify-center shrink-0 text-white  rounded-full bg-custom-green -800'>
                                                <img src={chatbot} alt="" />

                                            </h1>
                                            <div className='space-y-2'>
                                                <h1 className='font-semibold'>Agrobot</h1>
                                                <div className='p-2 bg-gray-100 rounded-r-xl rounded-b-xl text-sm'>
                                                    <ReactMarkdown>
                                                        {msg.text}
                                                    </ReactMarkdown>
                                                </div>
                                            </div>
                                        </div>
                                        }
                                    </div>
                                )
                            }
                            {
                                messages.length === 0 &&
                                <div className='h-full flex justify-center items-center'>
                                    <div className='flex flex-col items-center '>
                                        <img className='w-16 bg-custom-green rounded-full' src={chatbot} alt="" />
                                        <h1 className='px-4 text-xl font-semibold'>Hi! Welcome to the Agrobot</h1>
                                        <h1 className='text-center text-sm text-black/70 max-w-sm'>Ask the chatbot with your queries related to farming and agriculture.</h1>
                                    </div>
                                </div>

                            }
                            {
                                isLoading && <BeatLoader />
                            }
                        </div>

                    </div>
                    <form onSubmit={generateAnswer} className='flex max-w-xl mx-auto items-center gap-1'>
                        <input
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                            disabled={generatingAnswer}
                            className='w-full px-4 py-3 border border-stone-900 rounded-md text-sm' type="text" placeholder='Ask something...' />
                        <button className='text-xl text-white bg-stone-900 p-3 rounded-md'><IoPaperPlaneOutline /></button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Farmbot
