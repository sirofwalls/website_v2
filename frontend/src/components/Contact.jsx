import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form action="" className='flex flex-col max-w-[600px] w-full'>
            <div className="pb-4">
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-400'>Contact</p>
                <p className='text-gray-300 py-4'>\\ Submit the form below to get in contact with me. \\</p>
            </div>

            <input type="text" placeholder='Name' name='name' className='my-4 p-2 bg-[#ccd6f6] rounded-md' required/>
            <input type="email" placeholder='Email' name='email' className='my-4 p-2 bg-[#ccd6f6] rounded-md' required/>
            <textarea name="message" rows="7" className='bg-[#ccd6f6] p-2 rounded-md resize-none' placeholder='Message' required/>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 rounded-lg mx-auto my-8 flex items-center'>Let's Talk</button>
        </form>
    </div>
  )
}

export default Contact