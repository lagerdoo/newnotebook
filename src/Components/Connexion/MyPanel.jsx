import React from 'react'

export default function MyPanel({ user }) {
    return (
        <div className=" justify-content-center  d-flex align-items-center ">
            <h1>Hello {user.email} </h1>
        </div>
    )
}
