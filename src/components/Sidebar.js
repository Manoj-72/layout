import React from 'react'
import '../Styles/Sidebar.css'

export default function Sidebar(props) {
    return (
    <div className='Sidebar'>
        <div className='Sidebar-body'>
            <h1>{props.content}</h1>
        </div>
    </div>
    )
}