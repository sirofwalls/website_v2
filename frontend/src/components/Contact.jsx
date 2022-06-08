import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { sendMail } from '../features/mail/mailSlice'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css';

const Contact = () => {
  const dispatch = useDispatch()

  const {isLoading, isError, isSuccess, message} = useSelector((state) => state.mail)

  const [mailSent, setMailSent] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    messageText: ''
  })

  useEffect(() => {

    if (isSuccess) {
      toast.success(message.message, {
        position: "bottom-center",
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }
  
    if (isError) {
      toast.error(message.message, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
      setMailSent(false)
    }
}, [isSuccess, isError, message.message])

  const {
    name, 
    email, 
    messageText
  } = formData

  const loading = (
    <svg role="status" className="inline w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-pink-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
  </svg>
  )

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
      <ToastContainer />
        <form onSubmit={onSubmit} className='flex flex-col max-w-[600px] w-full'>
            <div className="pb-4">
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-400'>Contact</p>
                <p className='text-gray-300 py-4'>\\ Submit the form below to get in contact with me. \\</p>
            </div>

            <input type="text" placeholder='Name' name='name' className='my-4 p-2 bg-[#ccd6f6] rounded-md' required value={name} onChange={onChange} disabled={mailSent}/>
            <input type="email" placeholder='Email' name='email' className='my-4 p-2 bg-[#ccd6f6] rounded-md' required value={email} onChange={onChange} disabled={mailSent}/>
            <textarea name="messageText" rows="7" className='bg-[#ccd6f6] p-2 rounded-md resize-none' placeholder='Message' required value={messageText} onChange={onChange} disabled={mailSent}/>
            <button type='submit' className='text-white border-2 hover:bg-pink-600 cursor-pointer hover:border-pink-600 px-4 py-3 rounded-lg mx-auto my-8 flex items-center disabled:hover:border-white disabled:bg-gray-500 disabled:text-black disabled:cursor-default' disabled={mailSent}> {isLoading ? (loading) : ('')} Let's Talk</button>
        </form>
    </div>
  )
}

export default Contact