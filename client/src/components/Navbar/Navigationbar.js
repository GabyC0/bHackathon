import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';
//import Login from "../login";
import pregnancy from "./pregnancy.jpeg";

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
		{/* <NavLink to="/"> <div> <img className="pregnancy" src={pregnancy} alt="" style={{}}/> </div> </NavLink>	 */}
		<NavLink to="/" activeStyle>
			Home
		</NavLink>
		<NavLink to='/review' activeStyle>
			Review
		</NavLink>
		<NavLink to='/search' activeStyle>
			Search
		</NavLink>
		</NavMenu>
		{/* <NavBtn>
			<Login />
		</NavBtn> */}
	</Nav>
	</>
);
};

export default Navbar;
