import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const API_URL = '/api/v2/email/'

const initialState = {
    mail: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

// Send the mail
export const sendMail = createAsyncThunk('mail/send', async (mailData, thunkAPI) => {
    try {
        const response = await axios.post(API_URL, mailData)

        return response.data
    } catch (error) {
        // Sends error as message if there was a problem
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const mailSlice = createSlice({
    name: 'mail',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
        .addCase(sendMail.pending, (state) => {
            state.isLoading = true
        })
        .addCase(sendMail.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.message = action.payload
        })
        .addCase(sendMail.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
    }
})

export const {reset} = mailSlice.actions
export default mailSlice.reducer