import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import mailService from './mailService'

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
        return await mailService.sendMail(mailData)
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
            state.message(action.payload)
        })
    }
})

export const {reset} = mailSlice.actions
export default mailSlice.reducer