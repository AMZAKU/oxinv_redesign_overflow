import React from 'react';
import { motion } from 'framer-motion';
import { Shirt, ArrowLeft } from 'lucide-react';

interface ClothingButtonProps {
  isActive: boolean;
  onClick: () => void;
}

const ClothingButton: React.FC<ClothingButtonProps> = ({ isActive, onClick }) => {
  return (
    <motion.button
      className={`flex items-center justify-center w-10 h-10 rounded-lg backdrop-blur-md border-2 transition-all duration-150 cursor-pointer ${
        isActive
          ? 'bg-gradient-to-br from-purple-500/90 to-purple-700/90 border-purple-400 text-white shadow-md shadow-purple-500/15'
          : 'bg-black/40 text-white border-white/20 hover:border-white/40 hover:bg-black/60'
      }`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      {isActive ? <ArrowLeft size={18} /> : <Shirt size={18} />}
    </motion.button>
  );
};

export default ClothingButton;
