import React from 'react';


const headerComponent = () => {
    return (
        <div style ={{
            background: "darkblue",
            'padding-top': "10px",
            'padding-left': '20px',
            height: "100px",
            display: "flex"
        }}> 
            <img style = {{padding: "10px"}} src = "https://www.hel.fi/wps/wcm/connect/50249dfa-cfc1-46fe-84c5-25afaa8b9cab/stara_tunnus_Nega_verkkosivuille_3.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE-50249dfa-cfc1-46fe-84c5-25afaa8b9cab-mIwVXes" />
            <img style = {{ padding: "20px"}} src = "https://www.hel.fi/wps/CoHTheme/themes/html/RWD_main_theme_v2/img/HelsinkiUusiLogo.svg" />
      </div>
    )
}

export default headerComponent;