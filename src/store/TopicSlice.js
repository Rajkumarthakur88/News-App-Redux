import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



const TopicSlice = createSlice({
    name: "Topic",
    initialState: {
        Topic: "india"
    },
    reducers: {
        addSearchtext(state, action) {
            state.Topic = action.payload
            console.log(action.payload);
        }
    }
})

export const { addSearchtext } = TopicSlice.actions
export default TopicSlice.reducer