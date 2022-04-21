import React from 'react'
import Logo from './Logo'
import Menu from './Menu'

const Navbar = () => {
  return (
    <section id="NavbarBlock">
      <article>
        <div className="Navbar-div">
          <Logo />
          <Menu />
        </div>
      </article>
    </section>
  );
}

export default Navbar