import React from 'react';
import { SideMenuContainer } from "./SideMenuElements";
import { useDispatch, useSelector } from "react-redux";

const SideMenu =()=> {

    const sideMenuContents = useSelector(state => state.currentSideMenu);
    const {currentSelection } = sideMenuContents;

    return (
            <SideMenuContainer>
                <h1>{currentSelection? currentSelection: 'no selection'}</h1>
           < / SideMenuContainer>
        );
}


export default SideMenu;