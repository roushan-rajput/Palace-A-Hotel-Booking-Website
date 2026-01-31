import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import logo from '../Assets/Palace.png';

import { Link } from 'react-router-dom';

const defaultItems = [
  { label: 'Home', link: '/Loginhome' },
  { label: 'About', link: '/About' },
  { label: 'Contact', link: '/Contact' },
  { label: 'Book Now', link: '/Bookingform' },
  { label: 'My Booking', link: '/Booking' },
  { label: 'Profile', link: '' },
  { label: 'Logout', link: '/Home' }
];

const MENU_HEIGHT = '94vh';

const StaggeredMenu = ({
  position = 'right',
  items = defaultItems,
  accentColor = '#5227FF'
}) => {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);
  const layersRef = useRef([]);
  const busyRef = useRef(false);

  useLayoutEffect(() => {
    gsap.set([panelRef.current, ...layersRef.current], {
      xPercent: position === 'left' ? -100 : 100
    });
  }, [position]);

  const openMenu = useCallback(() => {
    if (busyRef.current) return;
    busyRef.current = true;

    gsap.timeline({
      onComplete: () => (busyRef.current = false)
    })
      .to(layersRef.current, {
        xPercent: 0,
        duration: 0.45,
        stagger: 0.06,
        ease: 'power4.out'
      })
      .to(
        panelRef.current,
        {
          xPercent: 0,
          duration: 0.6,
          ease: 'power4.out'
        },
        '-=0.3'
      );

    setOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    if (busyRef.current) return;
    busyRef.current = true;

    gsap.to(panelRef.current, {
      opacity: 0,
      duration: 0.25,
      ease: 'power2.inOut',
      onComplete: () => {
        gsap.set(panelRef.current, {
          opacity: 1,
          xPercent: position === 'left' ? -100 : 100
        });
        gsap.set(layersRef.current, {
          xPercent: position === 'left' ? -100 : 100
        });
        setOpen(false);
        busyRef.current = false;
      }
    });
  }, [position]);

return (
    <header
      className="staggered-menu-header absolute top-0 left-0 w-full flex items-center justify-between p-[2em] bg-transparent pointer-events-none z-20"
      aria-label="Main navigation header"
    >
      <div className="sm-logo flex items-center select-none pointer-events-auto" aria-label="Logo">
        <img
          src={logo}
          alt="Logo"
          className="sm-logo-img block h-55 w-55 object-contain"
          draggable={false}
          width={110}
          height={24}
        />
      </div>

      <div className="sm-scope fixed inset-0 z-50 pointer-events-none">
        {/* MENU BUTTON */}
        <button
          onClick={open ? closeMenu : openMenu}
          className="absolute top-4 right-12 z-90 text-white font-bold pointer-events-auto"
        >
          {open ? 'Close' : 'Menu'}
        </button>

        {/* BACKGROUND LAYERS */}
        <div
          className="absolute right-0 z-10 pointer-events-none"
          style={{
            height: MENU_HEIGHT,
            top: '53%',
            transform: 'translateY(-50%)',
            width: '280px',
            borderRadius: '1.5rem'
          }}
        >
          {['#B19EEF', accentColor].map((c, i) => (
            <div
              key={i}
              ref={el => (layersRef.current[i] = el)}
              className="absolute top-0 right-0 w-full h-full"
              style={{ background: c, borderRadius: '1.5rem' }}

            />
          ))}
        </div>

        {/* PANEL */}
        <aside
          ref={panelRef}
          className="absolute right-0 bg-white z-20 pointer-events-auto"
          style={{
            height: MENU_HEIGHT,
            top: '53%',
            transform: 'translateY(-50%)',
            width: '280px',
            // height: MENU_HEIGHT,
            padding: '1rem 1rem 1rem',
            borderRadius: '1.5rem'
          }}
        >
          <ul className="flex flex-col gap-1">
            {items.map((item, i) => (
              <li key={i}>
                <Link
                  to={item.link}
                  onClick={closeMenu}
                  className="text-[2rem] font-bold uppercase tracking-tight text-black hover:text-[var(--accent)] transition"
                  style={{ '--accent': accentColor }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </aside>

        <style>{`
        .sm-scope { font-family: system-ui, sans-serif; }

        @media (max-width: 768px) {
          aside {
            width: 100% !important;
            left: 0;
            right: 0;
          }
        }
      `}</style>
      </div>
      
    </header>
  );
}
export default StaggeredMenu;