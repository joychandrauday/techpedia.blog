import React from 'react';

const Header = () => {
    return (
        <div className="navbar container mx-auto">
            <div className="flex-1">
                <a className="text-2xl font-bold cursor-pointer hover:text-blue-600 font-exo">techpedia<span className='text-blue-600'>.</span>blog</a>
            </div>
            <div className="flex-none gap-2">
                <div className="dropdown dropdown-end">
                    <div tabindex="0" role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
    );
};

export default Header;