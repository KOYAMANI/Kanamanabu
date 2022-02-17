import React, { Component } from 'react';
import {SideMenuContainer} from "./SideMenuElements";

const SideMenu =({child})=> {
        return (
            <SideMenuContainer>
                {child}
           < / SideMenuContainer>
        );
}


export default SideMenu;