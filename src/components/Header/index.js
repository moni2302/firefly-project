import './index.scss';
import Logo from '../../assets/logo.jpeg'
import UserProfile from '../../assets/userprofile.png'


const Header=()=>{
    return(
        <div>
        <header className="header">
                <div>
                    <img alt='logo' className='logo' src={Logo}/>
                </div>
                <div className='header-content'> 
                    <div>
                        <p className='company_name'>FIRE FLY</p>
                    </div>
                    <div>
                        <ul className='navlist'>
                            <li className=''>
                            Whole Spices
                            </li>
                            <li>
                            Honey & Jaggery
                            </li>
                            <li>
                            Rituals
                            </li>
                            <li>
                            Gift sets
                            </li>
                            <li>
                            Seasonal fruit
                            </li>
                            
                        </ul>
                    </div>
                </div>
                <div className='user-section'>
                <img alt='user_profile' className='user_profile' src={UserProfile}/>
                </div>
        </header>
        </div>
    )
}
export default Header;