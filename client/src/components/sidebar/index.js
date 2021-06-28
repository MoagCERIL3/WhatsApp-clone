import React from 'react'
import SidebarHeader from './header/index'
import SearchBar from './searchBar/index'
import Row from './row/index'
import './styles/sidebar.css'
const index = () => {
    return (
        <div className="sidebar">
            <SidebarHeader/>
            <SearchBar />

            <div className="sidebar-chatRows">
                <Row />
                <Row />
            </div>
            
        </div>
    )
}

export default index
