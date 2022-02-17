import React from 'react';
import { SideMenuContainer } from "./SideMenuElements";
import { useDispatch, useSelector } from "react-redux";

const SideMenu =()=> {

    const sideMenuContents = useSelector(state => state.currentSideMenu);
    const {currentSelection } = sideMenuContents;
    console.log(currentSelection)

    return (
            <SideMenuContainer>
                {currentSelection? currentSelection: 'no selection'}
           < / SideMenuContainer>
        );
}


export default SideMenu;