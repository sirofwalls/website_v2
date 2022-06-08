import {useState} from 'react'
import {useDispatch} from 'react-redux'
import { sendMail } from '../features/mail/mailSlice'

const Contact = () => {
  const dispatch = useDispatch()

  const [mailSent, setMailSent] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const {
    name, 
    email, 
    message
  } = formData

  // Function to control the state of the itmes being typed
  const onChange = (e) => {
    setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
    }))
}

const onSubmit = (e) => {
  e.preventDefault()

  dispatch(sendMail(formData))

  setMailSent(true)
}

  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form onSubmit={onSubmit} className='flex flex-col max-w-[600px] w-full'>
            <div className="pb-4">
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-400'>Contact</p>
                <p className='text-gray-300 py-4'>\\ Submit the form below to get in contact with me. \\</p>
            </div>

            <input type="text" placeholder='Name' name='name' className='my-4 p-2 bg-[#ccd6f6] rounded-md' required value={name} onChange={onChange}/>
            <input type="email" placeholder='Email' name='email' className='my-4 p-2 bg-[#ccd6f6] rounded-md' required value={email} onChange={onChange}/>
            <textarea name="message" rows="7" className='bg-[#ccd6f6] p-2 rounded-md resize-none' placeholder='Message' required value={message} onChange={onChange}/>
            <button type='submit' className='text-white border-2 hover:bg-pink-600 cursor-pointer hover:border-pink-600 px-4 py-3 rounded-lg mx-auto my-8 flex items-center disabled:hover:border-white disabled:bg-gray-500 disabled:text-black disabled:cursor-default' disabled={mailSent}>Let's Talk</button>
        </form>
    </div>
  )
}

export default Contact