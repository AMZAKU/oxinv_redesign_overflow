import React, { useState } from 'react'
import { ShowID } from './ShowID'
// import { ShowClothing } from './ShowClothing'
import InventoryClothing from './InventoryClothing'
import { fetchNui } from '../../utils/fetchNui';

export const ExtraControls: React.FC = () => {
    const [clothingMenuVisible, setClothingMenuVisible] = useState(false);
    
    const toggleClothingMenu = () => {
        setClothingMenuVisible(prev => !prev);
    };
    
    const handleRevert = () => {
        fetchNui("toggleCloth", "revertir");
    };
    
    return (
        <>
            <div className='flex justify-between w-full px-2 translate-y-[0.45rem]'>
                <div className='flex flex-row-reverse gap-2'>
                    <ShowID />
                    <button onClick={toggleClothingMenu}>CLOTHING</button>
                </div>
            </div>
            <InventoryClothing visible={clothingMenuVisible} />
        </>
    )
}