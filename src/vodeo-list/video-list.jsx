import React from "react"
import VideoItems from "../video-item/video-items"
import styles from "./video-list.module.css"

const VideoList = (props) => (
    <li className={styles.videos}>
        {props.videos.map((i) => (
            <VideoItems key={i.id} videos={i} />
        ))}
    </li>
)

export default VideoList
