import { NavbarContainer, NavbarWrapper, NavItems, NavButton } from './styles'

export function Navbar() {
  return (
    <NavbarContainer>
      <NavbarWrapper>
        <h1 className="logo">Booking Hotel</h1>

        <NavItems>
          <NavButton>Register</NavButton>
          <NavButton>Login</NavButton>
        </NavItems>
      </NavbarWrapper>
    </NavbarContainer>
  )
}
