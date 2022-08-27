import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
export default function NotFound() {

    return (
        <div className="App justify-content-center  d-flex align-items-center " >
            <div>
                <h2>Page not found! </h2>
                <div>
                    <Link to={'/newnotebook/myPanel'}>
                        <p>Your panel</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}
