import InventoryComponent from './components/inventory';
import useNuiEvent from './hooks/useNuiEvent';
import { Items } from './store/items';
import { Locale } from './store/locale';
import { setImagePath } from './store/imagepath';
import { setupInventory } from './store/inventory';
import { Inventory } from './typings';
import { useAppDispatch } from './store';
import { debugData } from './utils/debugData';
import DragPreview from './components/utils/DragPreview';
import { fetchNui } from './utils/fetchNui';
import { useDragDropManager } from 'react-dnd';
import KeyPress from './components/utils/KeyPress';
import { closeContextMenu } from './store/contextMenu';
import { closeTooltip } from './store/tooltip';
import { useRef } from 'react';

interface HandleCloseClickEvent extends React.MouseEvent<HTMLDivElement, MouseEvent> {}

debugData([
  {
    action: 'init',
    data: {
      locale: {},
      items: {},
      leftInventory: {
        id: 'player',
        type: 'player',
        slots: 50,
        label: 'Player',
        weight: 0,
        maxWeight: 5000,
        items: [],
      },
      imagepath: 'images',
    },
  },
  {
    action: 'setupInventory',
    data: {
      leftInventory: {
        id: 'test',
        type: 'player',
        slots: 50,
        label: 'Bob Smith',
        weight: 3000,
        maxWeight: 5000,
        items: [
          {
            slot: 1,
            name: 'iron',
            weight: 3000,
            metadata: {
              description: `Common item - Gray border`,
            },
            count: 5,
          },
          { slot: 2, name: 'copper', weight: 100, count: 12, metadata: { description: 'Rare item - Blue border' } },
          {
            slot: 3,
            name: 'powersaw',
            weight: 0,
            count: 1,
            metadata: {
              durability: 75,
              description: 'Epic item - Purple border',
              serial: 'PWS-2024-8472',
              ammo: 24
            }
          },
          { slot: 4, name: 'diamond', weight: 100, count: 1, metadata: { description: 'Legendary item - Gold border' } },
          { slot: 5, name: 'water', weight: 100, count: 1, metadata: {
              description: 'Common item - Gray border',
              durability: 75,
            }
        },
          { slot: 6, name: 'ruby', weight: 50, count: 2, metadata: { description: 'Legendary item - Gold border' } },
          { slot: 7, name: 'gold_bar', weight: 200, count: 3, metadata: { description: 'Epic item - Purple border' } },
        ],
      },
      rightInventory: {
        id: 'shop',
        type: 'newdrop',
        slots: 20,
        label: 'Bob Smith',
        weight: 3000,
        maxWeight: 5000,
        items: [
          
        ],
      },
    },
  },
]);

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const manager = useDragDropManager();

  useNuiEvent<{
    locale: { [key: string]: string };
    items: typeof Items;
    leftInventory: Inventory;
    imagepath: string;
  }>('init', ({ locale, items, leftInventory, imagepath }) => {
    for (const name in locale) Locale[name] = locale[name];
    for (const name in items) Items[name] = items[name];

    setImagePath(imagepath);
    dispatch(setupInventory({ leftInventory }));
  });

  fetchNui('uiLoaded', {});

  useNuiEvent('closeInventory', () => {
    manager.dispatch({ type: 'dnd-core/END_DRAG' });
  });


  return (
    <div className="app-wrapper">
      <InventoryComponent />
      <DragPreview />
      <KeyPress />
    </div>
  );
};

addEventListener("dragstart", function(event) {
  event.preventDefault()
})

export default App;
