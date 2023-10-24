import React from 'react'
import { forwardRef } from "react";
const Layout = forwardRef(({ children }, ref) => {
    return (
        <>
            <section className="member">
                {children}
            </section>
        </>
    )
})


export default Layout
