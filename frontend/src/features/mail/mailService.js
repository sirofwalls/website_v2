import axios from 'axios'

const API_URL = '/api/v2/email/'

// Create new Workorder
const sendMail = async (mailData) => {

    const response = await axios.post(API_URL, mailData)

    return response.data
}

const mailService = {
    sendMail
}

export default mailService