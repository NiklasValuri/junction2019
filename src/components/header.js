import React from 'react';


const headerComponent = () => {
    return (
        <div style ={{
            background: "darkblue",
            height: "100px",
            display: "flex",
            alignContent: 'center'
        }}> 
            <div style ={{
                background: "darkblue",
                height: "100px",
                display: "flex",
                alignContent: 'center'
            }}>
                <img style = {{padding: "20px 40px"}} src = "https://www.hel.fi/wps/wcm/connect/50249dfa-cfc1-46fe-84c5-25afaa8b9cab/stara_tunnus_Nega_verkkosivuille_3.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE-50249dfa-cfc1-46fe-84c5-25afaa8b9cab-mIwVXes" />
            </div>
            <div style ={{
                display: "flex",
                alignContent: 'center',
                padding: '0px',
                margin: '0px',
                marginLeft: 'auto'
            }}>
                <div>
                    <img height='70' width='150' src = "https://www.hel.fi/wps/CoHTheme/themes/html/RWD_main_theme_v2/img/HelsinkiUusiLogo.svg" />
                </div>
            </div>
      </div>
    )
}

export default headerComponent;