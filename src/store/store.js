import { configureStore } from "@reduxjs/toolkit";
import NewsReducer from "./NewsSlice";
import TopicSlice from "./TopicSlice";


const store = configureStore({
    reducer: {
        News: NewsReducer,
        Topic:TopicSlice
    }
})
export default store