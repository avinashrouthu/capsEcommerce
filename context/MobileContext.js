import React, { createContext, useState, useEffect } from 'react';

export const ContextMobile = createContext();
const MobileContext = (props) => {
  const [modeMobile, setModeMobile] = useState(true);

  const [menuMobile, setMenuMobile] = useState(false);

  function toggleMenuMobile() {
    if (modeMobile) setMenuMobile(!menuMobile);
  }

  useEffect(() => {
    setModeMobile(window.innerWidth < 900 ? true : false);
    function rezise(e) {
      setModeMobile(e.target.innerWidth < 900 ? true : false);
    }

    window.addEventListener('resize', rezise);
    return () => window.removeEventListener('resize', rezise);
  }, []);

  return (
    <ContextMobile.Provider
      value={{ modeMobile, menuMobile, toggleMenuMobile }}
    >
      {props.children}
    </ContextMobile.Provider>
  );
};

export default MobileContext;
