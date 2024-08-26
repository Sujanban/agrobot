import Navbar from '@/components/dashboard/Navbar'
import React, { useState } from 'react'
import { GoPaperclip } from "react-icons/go";
import { CiImageOn } from "react-icons/ci";
import { PiMagicWandLight } from "react-icons/pi";
import axios from 'axios';
import toast from 'react-hot-toast';
import { HashLoader } from 'react-spinners';


const Diseasepredictor = () => {
    const [file, setFile] = useState(null);
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };





    // const handleUpload = async (e) => {
    //     e.preventDefault();

    //     if (!file) {
    //         toast.error("Please select a file before uploading.");
    //         return;
    //     }

    //     const validTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    //     if (!validTypes.includes(file.type)) {
    //         toast.error("Please upload a valid image file (jpg, jpeg, png).");
    //         return;
    //     }

    //     const formData = new FormData();
    //     formData.append('image', file);

    //     try {
    //         setLoading(true);
    //         const response = await fetch('http://localhost:5000/submit', {
    //             method: 'POST',
    //             body: formData,
    //         });

    //         if (!response.ok) {
    //             throw new Error(`HTTP error! status: ${response.status}`);
    //         }

    //         const data = await response.json();
    //         setResult(data.res);
    //         toast.success("Plant disease detected successfully!");

    //     } catch (error) {
    //         console.error('Error uploading file:', error);
    //         toast.error("Failed detecting a plant disease. Please try again with another image.");
    //     } finally {
    //         setLoading(false);
    //     }
    // };














    const handleUpload = async (e) => {
        e.preventDefault();

        if (!file) {
            toast.error("Please select a file before uploading.");
            return;
        }

        // Validate file type (optional)
        const validTypes = ['image/jpeg', 'image/png', 'image/jpg'];
        if (!validTypes.includes(file.type)) {
            toast.error("Please upload a valid image file (jpg, jpeg, png).");
            return;
        }

        const formData = new FormData();
        formData.append('image', file);

        try {
            setLoading(true);
            const response = await fetch('http://localhost:5000/submit', {
                method: 'POST',
                body: formData,
            });

            // Parse response and handle error if not ok
            const data = await response.json(); // Parse the JSON from the response

            if (!response.ok) {
                // Backend might send a specific error message in the response body
                const errorMessage = data.error || "Failed to detect plant disease.";
                throw new Error(errorMessage);
            }

            // If successful, set result and show success message
            setResult(data.res);
            toast.success("Plant disease detected successfully!");

        } catch (error) {
            // Handle error by displaying the specific message from the backend
            console.error('Error uploading file:', error);
            toast.error("Couldn't recognize image");  // Show backend error message
        } finally {
            setLoading(false);
        }
    };



    return (
        <div className='flex max-w-7xl mx-auto h-screen'>
            <Navbar />
            <div className='p-8 w-full space-y-4 h-full overflow-auto'>
                <h1 className='font-semibold text-2xl'>Disease Predictor</h1>
                <div className='grid grid-cols-2 '>
                    <div className=' mx-auto px-4 py-8 max-w-md space-y-2 rounded-xl shadow border border-gray-100'>
                        <h1 className='font-medium text-xl text-center'>Upload an Image</h1>
                        <p className='text-sm text-gray-500 text-center'>For best results, images should be atleast 1280x720 px in jpg, png or jpeg format</p>
                        <form>
                            <label htmlFor="upload-photo" className='cursor-pointer'>
                                <div className='py-8 border-2 border-[#5E82FE] p-4 text-center rounded-xl shadow space-y-2'>
                                    <CiImageOn className='mx-auto text-5xl p-2 rounded-full bg-slate-100 shadow border' />
                                    <h2 className='font-medium '>Drag and Drop image files to upload</h2>
                                    <p className='text-sm text-gray-500'>Your images will be private and only visible to you</p>
                                    <div className='pt-2'>
                                        <input name="photo" id="upload-photo" type="file" hidden onChange={handleFileChange} />
                                        <label className='text-sm cursor-pointer shadow px-4 py-2 border rounded-md' htmlFor="upload-photo">Select File</label>
                                        {
                                            file && <div className='mt-4 flex items-center space-x-2 justify-center'>
                                                <GoPaperclip className='text-sm' />
                                                <p>{file.name}</p>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </label>
                            <div className='mt-4 flex  justify-end'>
                                <button onClick={handleUpload} className=' flex items-center space-x-2 bg-stone-900  text-sm text-white px-4 py-2 rounded-md'>
                                    {
                                        loading ? <div className='flex justify-center items-center'>
                                            <HashLoader color='white' size={15} />
                                        </div> :
                                            <PiMagicWandLight />
                                    }
                                    <span>Predict</span>
                                </button>
                            </div>
                        </form>

                    </div>
                    <div className=''>
                        <div className='p-2 shadow border rounded-xl'>
                            <h1 className='p-2 text-xl font-medium'>Result</h1>
                            <div className='grid gap-2'>
                                {/* <div className='px-4 py-2 flex bg-orange-600 text-white items-center gap-4 rounded-md shadow border'>
                                    <GoPaperclip size={30} className='p-1 rounded-full border shadow ' />
                                    <div className='space-y-1'>
                                        <h1 className='text-sm'>49+ different plant disease detection</h1>
                                        <p className='text-gray-5000  text-xs'>We analyze almost all of the diseases that effects plants.</p>
                                    </div>
                                </div>
                                <div className='px-4 py-2 flex bg-emerald-600 text-white items-center gap-4 rounded-md shadow border'>
                                    <GoPaperclip size={30} className='p-1 rounded-full border shadow ' />
                                    <div className='space-y-1'>
                                        <h1 className='text-sm'>98.85% Disease detection accuracy</h1>
                                        <p className='text-gray-5000 text-xs'>We use well tested, highly accurate dataset to train our model.</p>
                                    </div>
                                </div>
                                <div className='px-4 py-2 flex bg-blue-600 text-white items-center gap-4 rounded-md shadow border'>
                                    <GoPaperclip size={30} className='p-1 rounded-full border shadow ' />
                                    <div className='space-y-1'>
                                        <h1 className='text-sm'>200+ different plant supported</h1>
                                        <p className='text-gray-5000 text-xs'>We have suppoer for various types of plants.</p>
                                    </div>
                                </div> */}

                                {result && (
                                    <div>
                                        <div className='shadow border rounded-xl p-4 '>
                                            <h2 >Prediction</h2>
                                            <p className='font-medium'>{result.title}</p>
                                        </div>
                                        <div className='shadow border rounded-xl p-4 '>
                                            <p>Description</p>
                                            <p className='max-h-[300px] overflow-auto font-medium'>{result.description}</p>
                                        </div>

                                        <div className='shadow border rounded-xl p-4'>
                                            <p>Prevention: </p>
                                            <p className='max-h-[300px] overflow-auto font-medium'>{result.prevent}</p>
                                        </div>
                                        <div className='shadow border rounded-xl p-4'>
                                            <p>Supplement Name </p>
                                            <p className='font-medium'>{result.supplement_name}</p>
                                        </div>


                                        {/* <img src={result.image_url} alt={result.title} /> */}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Diseasepredictor