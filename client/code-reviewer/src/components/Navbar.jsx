import react from 'react'
import logo from '../assets/code.png'
const Navbar = ()=>{
    return(
        <>
        <div>
            <div className="navbar">
            <h2 className='navtitle'><img id="logo" src={logo} alt="CR" />CodeLens</h2>
            <div className='navbtns'>
                <button className='navbtn2'>logout</button>
            </div>
            </div>
        </div>
        </>
    )
}
export default Navbar