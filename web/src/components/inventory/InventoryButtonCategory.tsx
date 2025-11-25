import React from 'react'
import { DynamicIcon, IconName } from 'lucide-react/dynamic'


interface InventoryButtonCategoryProps {
    view: string,
    icon?: IconName
}

export const InventoryButtonCategory: React.FC<InventoryButtonCategoryProps> = ({ view, icon = "cuboid" }) => {
  return (
    <div className='bg-black/40 backdrop-blur-md py-2 px-3 rounded-lg border-2 border-white/20 hover:border-white/40 hover:bg-black/60 transition-all duration-150'>
        <DynamicIcon name={icon} color="#a855f7" size={28} />
    </div>
  )
}
