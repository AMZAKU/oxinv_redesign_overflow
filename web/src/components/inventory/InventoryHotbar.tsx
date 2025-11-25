import React, { useState } from 'react';
import { getItemUrl, isSlotWithItem } from '../../helpers';
import useNuiEvent from '../../hooks/useNuiEvent';
import { Items } from '../../store/items';
import WeightBar from '../utils/WeightBar';
import { useAppSelector } from '../../store';
import { selectLeftInventory } from '../../store/inventory';
import { SlotWithItem } from '../../typings';
import { motion, AnimatePresence } from 'framer-motion';


const getRarityColor = (rarity?: string) => {
  switch (rarity) {
    case 'rare':
      return '#3b82f6';
    case 'epic':
      return '#a855f7';
    case 'legendary':
      return '#f59e0b';
    case 'common':
    default:
      return '#6b7280';
  }
};

const InventoryHotbar: React.FC = () => {
  const [hotbarVisible, setHotbarVisible] = useState(false);
  const items = useAppSelector(selectLeftInventory).items.slice(0, 5);

  const [handle, setHandle] = useState<NodeJS.Timeout>();
  useNuiEvent('toggleHotbar', () => {
    if (hotbarVisible) {
      setHotbarVisible(false);
    } else {
      if (handle) clearTimeout(handle);
      setHotbarVisible(true);
      setHandle(setTimeout(() => setHotbarVisible(false), 3000));
    }
  });

  return (
    <AnimatePresence>
      {hotbarVisible && (
        <motion.div
          className="hotbar-container"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        >
          {items.map((item, index) => {
            const itemData = isSlotWithItem(item) ? Items[item.name] : null;
            const rarity = itemData?.rarity || 'common';
            const rarityColor = getRarityColor(rarity);

            return (
              <motion.div
                className="hotbar-item-slot rounded-sm bg-secondary/90 backdrop-blur-[8px]"
                style={{
                  borderTop: isSlotWithItem(item) ? `2px solid ${rarityColor}` : undefined,
                }}
                key={`hotbar-${item.slot}`}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.2,
                  ease: 'easeOut',
                  delay: index * 0.05,
                }}
              >
                {isSlotWithItem(item) && item?.name && (
                  <motion.div
                    className="absolute inset-0 bg-no-repeat bg-center pointer-events-none"
                    style={{
                      backgroundImage: `url(${getItemUrl(item as SlotWithItem)})`,
                      backgroundSize: '60%',
                    }}
                    initial={{ scale: 0.7, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.15, ease: 'easeOut' }}
                  />
                )}

                <div className="item-slot-wrapper">
                  <div className="hotbar-slot-header-wrapper px-2">
                    <div className="inventory-slot-number">{item.slot}</div>
                    {isSlotWithItem(item) && (
                      <div className="item-slot-info-wrapper">
                        <p>{item.count ? `x${item.count.toLocaleString('en-us')}` : ''}</p>
                      </div>
                    )}
                  </div>
                  <div>
                    {isSlotWithItem(item) && item?.durability !== undefined && (
                      <WeightBar percent={item.durability} durability />
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InventoryHotbar;
