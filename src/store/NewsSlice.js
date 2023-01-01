import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    isSuccess: false,
    isLoading: false,
    isError: false,
    News: []
}

const NewsSlice = createSlice({
    name: "News",
    initialState,
    reducers: {
       
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchNews.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchNews.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.News = action.payload
            })
            .addCase(fetchNews.rejected, (state) => {
                state.isLoading = false
                state.isError = true
                state.News = []
            })
    }
})

export const fetchNews = createAsyncThunk("fetch/News", async (topic) => {
    // console.log(topic+"kk")
    const response = await fetch(`https://eventregistry.org/api/v1/article/getArticles?resultType=articles&keyword=${topic}&lang=eng&articleBodyLen=300&articlesCount=100&apiKey=8fc34cfe-e2f3-410f-8ed1-5df9ce4a92fd`)
    const data = await response.json()

    return data.articles.results
})

export default NewsSlice.reducer





