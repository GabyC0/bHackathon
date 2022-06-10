import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';
import Login from "../login";

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/home' activeStyle>
			Home
		</NavLink>
		<NavLink to='/review' activeStyle>
			Review
		</NavLink>
		</NavMenu>
		<NavBtn>
			<Login />
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;
