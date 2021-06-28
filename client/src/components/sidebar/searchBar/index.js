import React from 'react'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import './styles/searchbar.css'
const index = () => {
    return (
        <div className="sidebar-searchBar">
            <div className="sidebar-searchContainer">
                <SearchOutlinedIcon/>
                <input placeholder="Search or start new chat" type="text"/>

            </div>
        </div>
    )
}

export default index
