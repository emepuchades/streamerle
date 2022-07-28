import React from 'react'

function Header() {
    return (
        <div className="navbar">
            <div className="navbar-content px-2">
                <div className="left-icons">
                    <i class="bi bi-info-circle"></i>
                </div>
                <div className="flex items-center">
                    <h1 className="text-2xl font-bold dark:text-white">Streamle
                    </h1>
                </div>
                <div className="right-icons">
                    <i class="bi bi-reception-4"></i>
                </div>
            </div>
        </div>

    )
}

export default Header