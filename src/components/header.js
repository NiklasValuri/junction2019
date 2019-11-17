import React from 'react';

const headerComponent = () => {
  return (
    <div
      style={{
        background: 'darkblue',
        height: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0px 20px',
      }}
    >
      <img
        height="50px"
        alt=""
        src="https://www.hel.fi/wps/wcm/connect/50249dfa-cfc1-46fe-84c5-25afaa8b9cab/stara_tunnus_Nega_verkkosivuille_3.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE-50249dfa-cfc1-46fe-84c5-25afaa8b9cab-mIwVXes"
      />

      <img
        alt=""
        height="50px"
        src="https://www.hel.fi/wps/CoHTheme/themes/html/RWD_main_theme_v2/img/HelsinkiUusiLogo.svg"
      />
    </div>
  );
};

export default headerComponent;
