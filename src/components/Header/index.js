import './index.scss';
import Logo from '../../assets/fireflyLogo.jpg'
import UserProfile from '../../assets/userprofile.png'
import { useNavigate } from "react-router-dom";


const Header=()=>{

    const navigate = useNavigate();

    const handleLoginClick = () => {
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
                <button onClick={handleLoginClick} className='contact-button'> Contact us</button>
                </div>
        </header>
        </div>
    )
}
export default Header;