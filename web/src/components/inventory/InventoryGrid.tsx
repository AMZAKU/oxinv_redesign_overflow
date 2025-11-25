import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Inventory } from '../../typings';
import WeightBar from '../utils/WeightBar';
import InventorySlot from './InventorySlot';
import { getTotalWeight } from '../../helpers';
import { useAppSelector } from '../../store';
import { useIntersection } from '../../hooks/useIntersection';
import InventoryControl from './InventoryControl';
import {Backpack, WeightIcon} from 'lucide-react';
import { InventoryButtonCategory } from './InventoryButtonCategory';
import { IconName } from 'lucide-react/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import ClothingButton from './ClothingButton';
import ClothingInterface from './ClothingInterface';
import { Locale } from '../../store/locale';

const PAGE_SIZE = 30;

interface InventoryMeta {
  isMainInventory?: boolean;
  isDropInventory?: {
    value: boolean,
    type: string,
    shouldRender: boolean;
  };
}

const InventoryGrid: React.FC<{ inventory: Inventory, renderControl?: boolean, meta?: InventoryMeta }> = ({ inventory, renderControl, meta = {} }) => {
  const weight = useMemo(
    () => (inventory.maxWeight !== undefined ? Math.floor(getTotalWeight(inventory.items) * 1000) / 1000 : 0),
    [inventory.maxWeight, inventory.items]
  );
  const [page, setPage] = useState(0);
  const [isClothingMode, setIsClothingMode] = useState(false);
  const containerRef = useRef(null);
  const { ref, entry } = useIntersection({ threshold: 0.5 });
  const isBusy = useAppSelector((state) => state.inventory.isBusy);

  useEffect(() => {
    if (entry && entry.isIntersecting) {
      setPage((prev) => ++prev);
    }
  }, [entry]);

  return (
    <motion.div
      className={`flex flex-col gap-2 backdrop-blur-medium transition-smooth ${isClothingMode ? 'overflow-visible' : 'overflow-y-hidden'}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <motion.div
          className={`relative inventory-grid-wrapper rounded-xl
           transition-all duration-300
          ${meta?.isDropInventory?.value
            ? meta.isDropInventory.shouldRender
              ? "opacity-100 h-auto p-3 pb-5 border-4 w-[550px]"
              : "opacity-0 h-0 scale-y-[50%] scale-x-0 p-0"
            : meta?.isMainInventory
              ? isClothingMode
                ? "p-3 pb-5 border-4 w-[550px] h-auto"
                : "p-3 pb-5 border-4 w-[550px] h-[480px]"
              : renderControl
                ? "p-3 pb-5 border-4 w-[550px] h-[360px]"
                : "h-0 opacity-0 overflow-hidden p-0 w-[550px]"
          }`}
          style={{ 
            pointerEvents: isBusy ? 'none' : 'auto', 
            borderColor: "#2f303188",
            background: "linear-gradient(to bottom right, var(--color-main), #111111ff, var(--color-main))"
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            ease: "easeOut"
          }}
      >
        {/* Main Inventory Header - Figma Style */}
        {meta?.isMainInventory && (
          <div className="flex justify-between items-center rounded-lg backdrop-blur-medium transition-smooth">
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <div className="w-8 h-8 rounded-md flex items-center justify-center">
                <Backpack size={25} color="#ffffffff" />
              </div>
              <AnimatePresence mode="wait">
                <motion.h2
                  className="text-white text-2xl font-main font-bold tracking-wider uppercase"
                  key={isClothingMode ? "clothing" : "inventory"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.15,
                    ease: "easeInOut"
                  }}
                >
                  {isClothingMode ? Locale["ui_clothing"] || "CLOTHING" : Locale["ui_inventory"] || "INVENTORY"}
                </motion.h2>
              </AnimatePresence>
            </motion.div>
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <ClothingButton 
                isActive={isClothingMode} 
                onClick={() => setIsClothingMode(!isClothingMode)} 
              />
              <div className="inventory-control-header">
                <InventoryControl />
              </div>
            </motion.div>
          </div>
        )}

        <div>
          {/* Weight Display - Figma Style */}
          { inventory.maxWeight && (
            <div className="relative mt-1 mb-2">
              {/* Premium Weight Bar */}
              <WeightBar 
                percent={inventory.maxWeight ? (weight / inventory.maxWeight) * 100 : 0}
                current={weight}
                max={inventory.maxWeight}
              />
            </div>
          )}

          {
            !meta?.isMainInventory && (
              <div
                style={{ color: "rgb(227 228 227)" }}
                className="relative flex flex-col rounded-sm mt-2 py-1 pb-3 mx-3"
              >
                <div className="flex justify-around">
                  <p style={{ textTransform: "uppercase" }}>
                    { meta.isDropInventory?.type === "newdrop" ? "FLOOR" : inventory.label }
                  </p>
                </div>
              </div>
            )
          }

          { /* <div className="inventory-grid-header-wrapper">
            <p>{inventory.label}</p>
            {inventory.maxWeight && (
              <p>
                {weight / 1000}/{inventory.maxWeight / 1000}kg
              </p>
            )}
          </div>
          <WeightBar percent={inventory.maxWeight ? (weight / inventory.maxWeight) * 100 : 0} /> */ }
        </div>
        
        {/* Conditional rendering: Clothing Interface or Inventory Grid */}
        {meta?.isMainInventory && isClothingMode ? (
          <motion.div
            className="p-3"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <ClothingInterface />
          </motion.div>
        ) : (
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            <motion.div 
              className={`inventory-grid-container`} 
              ref={containerRef}
              style={{
                height: meta?.isMainInventory 
                  ? 'calc(480px - 120px)' // Main inventory: total height - (header + weight bar + padding)
                  : 'calc(360px - 80px)',  // Second inventory: total height - (weight bar + padding)
                maxHeight: meta?.isMainInventory 
                  ? 'calc(480px - 120px)' 
                  : 'calc(360px - 80px)',
                overflowY: 'auto'
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <AnimatePresence>
                {inventory.items.slice(0, (page + 1) * PAGE_SIZE).map((item, index) => (
                  <InventorySlot
                    key={`${inventory.type}-${inventory.id}-${item.slot}`}
                    item={item}
                    ref={index === (page + 1) * PAGE_SIZE - 1 ? ref : null}
                    inventoryType={inventory.type}
                    inventoryGroups={inventory.groups}
                    inventoryId={inventory.id}
                  />
                ))}
              </AnimatePresence>
            </motion.div>
            {/* Fade to transparent effect at bottom */}
            <motion.div 
              className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-main to-transparent pointer-events-none rounded-b-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            />
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default InventoryGrid;
