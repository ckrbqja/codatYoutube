import React, { useRef } from "react"
import styles from "./search_header.module.css"

const SearchHeader = ({ onSearch }) => {
    const inputRef = useRef()
    const handleSearch = () => {
        const value = inputRef.current.value
        onSearch(value)
    }
    const onkeypress = () => {
        handleSearch()
    }

    const onClick = (event) => {
        if (event.key === "Enter") handleSearch()
    }
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img className={styles.img} src="/images/logo.png" alt="log" />
                <h1 className={styles.title}>Youtube</h1>
            </div>
            <input
                ref={inputRef}
                className={styles.buttonImg}
                type="search"
                placeholder="search..."
                onKeyPress={onkeypress}
            />
            <button className={styles.button} type="submit" onClick={onClick}>
                <img src="/images/search.png" alt="search" />
            </button>
        </header>
    )
}

export default SearchHeader
