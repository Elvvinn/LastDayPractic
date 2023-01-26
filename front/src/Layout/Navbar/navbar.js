import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.scss'
function NavbarSection() {
    return (
        <nav className='navbarsection'>

            <div className='generaldiv'>

                <div className='needdiv'>

                    <div>
                        <img src='https://preview.colorlib.com/theme/aroma/img/logo.png' />
                    </div>
                    <div className='generallidiv'>

                        <ul className='licomps'>

                            <li>Home </li>
                            <li> Shop</li>
                            <li> Blog </li>
                            <li> Pages </li>
                            <Link className='linkclass' to={"/add"}> <li>  Add </li> </Link>
                            <li> Contact </li>

                        </ul>

                    </div>

                    <div className='itemandbtn'>
                        <div className='icondiv'>
                            <i class="fa-solid fa-magnifying-glass"></i>
                            <i class="fa-solid fa-basket-shopping"></i>
                        </div>
                        <button>Buy Now </button>
                    </div>
                </div>
            </div>

        </nav>
    )
}

export default NavbarSection