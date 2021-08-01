import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import Youtube from "./service/youtube"
import axios from "axios"
const httpClient = axios.create({
    baseURL: "https://youtube.googleapis.com/youtube/v3",
    params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
})

ReactDOM.render(
    <React.StrictMode>
        <App youtube={new Youtube(httpClient)} />
    </React.StrictMode>,
    document.getElementById("root")
)
