import React from 'react'
import styles from './navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <h1>I AM THE NAVBAR</h1>
            <div className={styles.links}>I'm the navbar link</div>
        </div>
    )
}

export default Navbar
