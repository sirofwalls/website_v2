
import {motion, useAnimation} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { sendMail } from '../features/mail/mailSlice'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css';
import {loading} from '../Data/data'

const Contact = () => {

  const {ref, inView} = useInView({
    threshold: 0.5
  })

  const animation = useAnimation()

  const dispatch = useDispatch()

  const {isLoading, isError, isSuccess, message} = useSelector((state) => state.mail)

  const [mailSent, setMailSent] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    messageText: ''
  })

  useEffect(() => {

    if (isSuccess && !mailSent) {
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
  
    if (isError && !mailSent) {
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

    if (inView) {
      animation.start({
          x: 0,
          opacity: 1,
          transition: {
              type: 'spring',
              duration: 2,
              bounce: 0.3,
          }
      })
  }
}, [isSuccess, isError, message.message, inView, animation])

  const {
    name, 
    email, 
    messageText
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
    <div ref={ref} name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center pt-8 overflow-x-hidden'>
      <ToastContainer />
        <motion.form initial={{x: '100vw', opacity: 0}} animate={animation} onSubmit={onSubmit} className='flex flex-col max-w-[600px] w-full'>
            <div className="pb-4">
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-400'>Contact</p>
                <p className='text-gray-300 py-4'>\\ Submit the form below to get in contact with me. \\</p>
            </div>

            <input type="text" placeholder='Name' name='name' className='my-4 p-2 bg-[#ccd6f6] rounded-md disabled:bg-slate-500' required value={name} onChange={onChange} disabled={mailSent}/>

            <input type="email" placeholder='Email' name='email' className='my-4 p-2 bg-[#ccd6f6] rounded-md disabled:bg-slate-500' required value={email} onChange={onChange} disabled={mailSent}/>

            <textarea name="messageText" rows="7" className='bg-[#ccd6f6] p-2 rounded-md resize-none disabled:bg-slate-500' placeholder='Message' required value={messageText} onChange={onChange} disabled={mailSent}/>

            <button type='submit' className='text-white border-2 hover:bg-pink-600 cursor-pointer hover:border-pink-600 px-4 py-3 rounded-lg mx-auto my-8 flex items-center disabled:hover:border-white disabled:bg-slate-500 disabled:text-black disabled:cursor-default' disabled={mailSent}> {isLoading ? (loading) : ('')} Let's Talk</button>
        </motion.form>
    </div>
  )
}

export default Contact