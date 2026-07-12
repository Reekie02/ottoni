import React from 'react'
import Navbar from '../components/Navbar'
import Announce from '../components/Announce'

const Layout = ({ children }) => {
    return (
        <>
            <Announce />
            <Navbar />
            <main>
                {children}
            </main>
        </>
    )
}

export default Layout