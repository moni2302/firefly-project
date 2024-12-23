import './index.scss';
import Logo from '../../assets/fireflyLogo.jpg'
import user from '../../assets/user.png'
import shoppingbag from '../../assets/shopping-bag.png'
import { useNavigate } from "react-router-dom";


const Header=()=>{

    const navigate = useNavigate();

    const userNavigate = () => {
      navigate("/login"); 
    };

    return(
        <div className='App'>
        <header className="header">
                <div className='logo-content'>
                    <img alt='logo' className='logo' src={Logo}/>
                </div>
                <div className='header-content'> 
                    <nav>
                        <ul className='navlist'>
                            <li className=''>
                           Home
                            </li>
                            <li>
                            About us
                            </li>
                            <li>
                            Facilities
                            </li>
                            <li>
                            FAQ's
                            </li>
                            <li>
                            Gallery
                            </li>
                            
                        </ul>
                    </nav>
                </div>
                <div className='user-section'>
                    
                <img src={user} alt="user" className='user-icon' onClick={userNavigate}/>
                <img src={shoppingbag} alt="shoppingbag" className='shopping-icon'/>
                </div>
        </header>
        </div>
    )
}
export default Header;