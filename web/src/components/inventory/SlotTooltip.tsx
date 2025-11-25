import { Inventory, SlotWithItem } from '../../typings';
import React, { Fragment, useMemo } from 'react';
import { Items } from '../../store/items';
import { Locale } from '../../store/locale';
import ReactMarkdown from 'react-markdown';
import { useAppSelector } from '../../store';
import ClockIcon from '../utils/icons/ClockIcon';
import { getItemUrl } from '../../helpers';
import Divider from '../utils/Divider';
import { Weight } from 'lucide-react';
import AmmoIcon from '../utils/icons/AmmoIcon';
import { FingerPrintIcon } from '../utils/icons/FingerPrintIcon';
import { DurabilityIcon } from '../utils/icons/DurabilityIcon';

const SlotTooltip: React.ForwardRefRenderFunction<
  HTMLDivElement,
  { item: SlotWithItem; inventoryType: Inventory['type']; style: React.CSSProperties }
> = ({ item, inventoryType, style }, ref) => {
  const additionalMetadata = useAppSelector((state) => state.inventory.additionalMetadata);
  const itemData = useMemo(() => Items[item.name], [item]);
  const ingredients = useMemo(() => {
    if (!item.ingredients) return null;
    return Object.entries(item.ingredients).sort((a, b) => a[1] - b[1]);
  }, [item]);
  const description = item.metadata?.description || itemData?.description;
  const ammoName = itemData?.ammoName && Items[itemData?.ammoName]?.label;

  // Check if there's any content to show in tooltip-content
  const hasContent = useMemo(() => {
    if (inventoryType === 'crafting') return true;
    return !!(
      description ||
      ammoName ||
      item.durability !== undefined ||
      item.metadata?.ammo !== undefined ||
      item.metadata?.serial ||
      (item.metadata?.components && item.metadata?.components[0]) ||
      item.metadata?.weapontint ||
      additionalMetadata.some((data: { metadata: string }) => item.metadata && item.metadata[data.metadata])
    );
  }, [description, ammoName, item, inventoryType, additionalMetadata]);

  return (
    <>
      {!itemData ? (
        <div className="tooltip-wrapper" ref={ref} style={style}>
          <div className="tooltip-header-wrapper">
            <p>{item.name}</p>
          </div>

        </div>
      ) : (
        <div style={{ ...style }} className="tooltip-wrapper" ref={ref}>
          <div 
            className="tooltip-header-wrapper"
          >
            <p className='flex-1'>{item.metadata?.label || itemData.label || item.name}</p>
            {inventoryType === 'crafting' ? (
              <div className="tooltip-crafting-duration">
                <ClockIcon />
                <p>{(item.duration !== undefined ? item.duration : 3000) / 1000}s</p>
              </div>
            ) : (
              <>
                <div className="flex justify-center items-center gap-2">
                  <Weight size={17} />
                  <p>
                    {item.weight > 0
                      ? item.weight >= 1000
                        ? `${(item.weight / 1000).toLocaleString('en-us', {
                            minimumFractionDigits: 2,
                          })}kg `
                        : `${item.weight.toLocaleString('en-us', {
                            minimumFractionDigits: 0,
                          })}g `
                      : ''}
                  </p>
                </div>
                <p>{item.metadata?.type}</p>
              </>
            )}
          </div>

          {hasContent && (
            <div className='tooltip-content'>
              {description && (
                <div className="tooltip-description mb-1">
                  <ReactMarkdown className="tooltip-markdown">{description}</ReactMarkdown>
                </div>
              )}
              {ammoName && (
                  <p className='flex-1'>
                    {Locale.ammo_type}: {ammoName}
                  </p>
              )}
              {inventoryType !== 'crafting' ? (
                <div className='flex flex-wrap gap-1'>

                  {item.durability !== undefined && (
                    <div className='bg-black/60 text-white bg-black/70 w-fit px-[.35rem] rounded-md m-0 p-0 text-[12px] gap-1 flex items-center'>
                      <DurabilityIcon />
                      <span className='text-red'>{Math.trunc(item.durability)}</span>
                    </div>
                  )}
                  {item.metadata?.ammo !== undefined && (
                    <div className='bg-black/60 text-white bg-black/70 w-fit px-[.35rem] rounded-md m-0 p-0 text-[12px] gap-1 flex items-center'>
                      <AmmoIcon />
                      <span className='text-red'>{item.metadata.ammo}</span>
                    </div>
                  )}
                  {item.metadata?.serial && (
                    <div className='bg-black/60 text-white bg-black/70 w-fit px-[.35rem] rounded-md m-0 p-0 text-[12px] gap-1 flex items-center'>
                      <FingerPrintIcon />
                      <span className='text-red'>{item.metadata.serial}</span>
                    </div>
                  )}
                  {item.metadata?.components && item.metadata?.components[0] && (
                    <p>
                      {Locale.ui_components}:{' '}
                      {(item.metadata?.components).map((component: string, index: number, array: []) =>
                        index + 1 === array.length ? Items[component]?.label : Items[component]?.label + ', '
                      )}
                    </p>
                  )}
                  {item.metadata?.weapontint && (
                    <p>
                      {Locale.ui_tint}: {item.metadata.weapontint}
                    </p>
                  )}
                  {additionalMetadata.map((data: { metadata: string; value: string }, index: number) => (
                    <Fragment key={`metadata-${index}`}>
                      {item.metadata && item.metadata[data.metadata] && (
                        <p>
                          {data.value}: {item.metadata[data.metadata]}
                        </p>
                      )}
                    </Fragment>
                  ))}
                </div>
              ) : (
                <div className="tooltip-ingredients">
                  {ingredients &&
                    ingredients.map((ingredient) => {
                      const [item, count] = [ingredient[0], ingredient[1]];
                      return (
                        <div className="tooltip-ingredient" key={`ingredient-${item}`}>
                          <img src={item ? getItemUrl(item) : 'none'} alt="item-image" />
                          <p>
                            {count >= 1
                              ? `${count}x ${Items[item]?.label || item}`
                              : count === 0
                              ? `${Items[item]?.label || item}`
                              : count < 1 && `${count * 100}% ${Items[item]?.label || item}`}
                          </p>
                        </div>
                      );
                    })}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default React.forwardRef(SlotTooltip);