import React from "react"
import VideoItems from "../video-item/video-items"
import styles from "./video-list.module.css"

const VideoList = ({ videos, selectedVideo, display }) => {
    console.log(display)
    return (
        <li className={styles.videos}>
            {videos.map((i) => (
                <VideoItems key={i.id} videos={i} selectedVideo={selectedVideo} display={display} />
            ))}
        </li>
    )
}

export default VideoList
