import logo from '../assets/Logo.svg';

function Nav() {
    return(
        <>
        <div style={{display:'flex', alignItems: 'center', justifyContent:'center'}}>
        <img src={logo} alt="Little lemon logo" />
        <nav>
      <ul style={{display:'flex',justifyContent: 'center' }}>
        <li style={{padding:'20px'}}><a href="#home">Home</a></li>
        <li style={{padding:'20px'}}><a href="#about">About</a></li>
        <li style={{padding:'20px'}}><a href="#menu">Menu</a></li>
        <li style={{padding:'20px'}}><a href="#reservation">Reservations</a></li>
        <li style={{padding:'20px'}}><a href="#order">Order Online</a></li>
        <li style={{padding:'20px'}}><a href="#login">Login</a></li>
      </ul>
    </nav>
    </div>
        </>
    );
}

export default Nav;