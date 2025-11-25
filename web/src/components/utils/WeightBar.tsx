import React, { useMemo } from 'react';

interface WeightBarProps {
  percent: number;
  current?: number;
  max?: number;
  durability?: boolean;
}

const WeightBar: React.FC<WeightBarProps> = ({ 
  percent, 
  current, 
  max, 
  durability 
}) => {
  const weightClass = useMemo(() => {
    if (durability) return '';
    
    if (percent <= 60) return 'normal';
    if (percent <= 85) return 'warning';
    return 'critical';
  }, [percent, durability]);

  if (durability) {
    return (
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-black/40 rounded-b-md overflow-hidden">
        <div
          style={{
            visibility: percent > 0 ? 'visible' : 'hidden',
            height: '100%',
            width: `${percent}%`,
            background: percent < 30
              ? '#ef4444'
              : percent < 70
              ? '#f59e0b'
              : '#22c55e',
            transition: 'width 0.3s ease',
          }}
        />
      </div>
    );
  }

  return (
    <div className="weight-bar-container">
      <div className="weight-bar">
        <div
          className={`weight-bar-fill ${weightClass}`}
          style={{
            width: `${Math.min(percent, 100)}%`,
          }}
        />
      </div>
    </div>
  );
};
export default WeightBar;
