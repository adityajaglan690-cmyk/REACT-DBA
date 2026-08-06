import 'react';
function Header() {
  return (
    <>
        <nav style={{height:'100px',width:'100%', backgroundColor:'black',color:'white'}}>
            <ul style={{display:'flex',justifyContent:'space-evenly',paddingTop:'50px',listStyle:'none'}}>
                <li>home </li>
                <li>about</li>
                <li>services</li>
                <li>customer</li>
            </ul>
        </nav>
        </>
  )
}

export default Header; 
