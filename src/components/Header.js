import React from 'react'

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    {/* AFTER ADD ROUTER-DOM, CHANGE TO { Link } */}
                    <li>
                        <a href="">Create Task</a>
                        {/* // Assign icon "add" after implement font-awesome */}
                    </li>
                    <li>
                        <a href="">Unfinished Tasks</a>
                        {/* // Assign icon "time" after implement font-awesome */}
                    </li>
                    <li>
                        <a href="">Finished Tasks</a>
                        {/* // Assign icon "finish" after implement font-awesome */}
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
