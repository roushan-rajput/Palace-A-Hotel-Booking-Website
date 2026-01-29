import StaggeredMenu from '../Components/Staggeredmenu';
import React from 'react'

const StaggeredMenu = () => {
  const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '/Loginhome' },
    { label: 'About', ariaLabel: 'Learn about us', link: '/About' },
    { label: 'Contact', ariaLabel: 'Get in touch', link: '/Contact' },
    { label: 'booking', ariaLabel: 'View your bookings', link: '/Booking' },
    { label: 'Logout', ariaLabel: 'Log out of your account', link: '/Home' },
  ];

  const socialItems = [
    { label: 'Twitter', link: 'https://twitter.com' },
    { label: 'GitHub', link: 'https://github.com' },
    { label: 'LinkedIn', link: 'https://linkedin.com' }
  ];

  <div style={{ height: '100vh', background: '#1a1a1a' }}>
    <StaggeredMenu
      position="right"
      items={menuItems}
      socialItems={socialItems}
      displaySocials
      displayItemNumbering={true}
      menuButtonColor="#ffffff"
      openMenuButtonColor="#fff"
      changeMenuColorOnOpen={true}
      colors={['#B19EEF', '#5227FF']}
      logoUrl="/path-to-your-logo.svg"
      accentColor="#5227FF"
      onMenuOpen={() => console.log('Menu opened')}
      onMenuClose={() => console.log('Menu closed')}
    />
  </div>

}

export default StaggeredMenu

