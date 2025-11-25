import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useNuiEvent from '../../hooks/useNuiEvent';
import { fetchNui } from '../../utils/fetchNui';
import { Locale } from '../../store/locale';

interface ClothingItem {
  id: string;
  name: string;
  localeKey: string;
  command: string;
  svg: React.ReactNode;
  category: 'head' | 'accessories' | 'clothing' | 'legs';
}

const clothingItems: ClothingItem[] = [
  {
    id: 'hat',
    name: 'Hat',
    localeKey: 'ui_hat',
    command: 'hat',
    category: 'head',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512">
        <path fill="currentColor" d="M195.7 53.97c-6.5-.1-16.1 2.87-15.6 9.53c.4 5.62 36.7 4.08 36.8-.21c.2-6.21-14.1-9.26-21.2-9.32m-74.6 41.99c-16 7.14-33.09 16.14-45.82 28.34c-33.62 35.1-56.12 87.9-50.74 172.6c16.25 22.5 76.46 36.7 108.06 41.7c51.1-22 206.3-45.3 265.1-22.1c-1.4-47.7-13.8-105.6-45.1-151.9c-19.6-35.8-50.2-62-89.9-75.84c-45.6-14.5-97-13.1-141.6 7.2M151.4 356c30.9 46 62.2 82.9 108.7 101.6c2.6.5 6.6 1.1 9.8-1.3c38.8-29.3 146.8-33.6 212.6-14.8c3.6 1 7.1-4.5 5.1-8.2c-17.4-31.7-36.9-63.7-75-90c-78.8-32.6-191.1-7.8-261.2 12.7"/>
      </svg>
    )
  },
  {
    id: 'mask',
    name: 'Mask',
    localeKey: 'ui_mask',
    command: 'mask',
    category: 'head',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
        <path fill="currentColor" d="M19 6H5C3.346 6 2 7.346 2 9v5c0 2.206 1.794 4 4 4h1.637c1.166 0 2.28-.557 2.981-1.491c.66-.879 2.104-.88 2.764.001A3.744 3.744 0 0 0 16.363 18H18c2.206 0 4-1.794 4-4V9c0-1.654-1.346-3-3-3M7.5 13C6.119 13 5 12.328 5 11.5S6.119 10 7.5 10s2.5.672 2.5 1.5S8.881 13 7.5 13m9 0c-1.381 0-2.5-.672-2.5-1.5s1.119-1.5 2.5-1.5s2.5.672 2.5 1.5s-1.119 1.5-2.5 1.5"/>
      </svg>
    )
  },
  {
    id: 'glasses',
    name: 'Glasses',
    localeKey: 'ui_glasses',
    command: 'glasses',
    category: 'head',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32">
        <path fill="currentColor" d="M9.01 8.524A1.5 1.5 0 0 1 10.15 8H12a1 1 0 1 0 0-2h-1.85a3.5 3.5 0 0 0-2.658 1.222l-4.65 5.425A3.5 3.5 0 0 0 2 14.925V19.5A4.5 4.5 0 0 0 6.5 24h4a4.5 4.5 0 0 0 4.5-4.5V17h2v2.5a4.5 4.5 0 0 0 4.5 4.5h4a4.5 4.5 0 0 0 4.5-4.5v-4.575a3.5 3.5 0 0 0-.843-2.278l-4.65-5.425A3.5 3.5 0 0 0 21.85 6H20a1 1 0 1 0 0 2h1.85a1.5 1.5 0 0 1 1.139.524L25.969 12H20.5a3.501 3.501 0 0 0-3.465 3h-2.07a3.501 3.501 0 0 0-3.465-3H6.031zM28 15.5v4a2.5 2.5 0 0 1-2.5 2.5h-4a2.5 2.5 0 0 1-2.5-2.5v-4a1.5 1.5 0 0 1 1.5-1.5h6a1.5 1.5 0 0 1 1.5 1.5m-15 0v4a2.5 2.5 0 0 1-2.5 2.5h-4A2.5 2.5 0 0 1 4 19.5v-4A1.5 1.5 0 0 1 5.5 14h6a1.5 1.5 0 0 1 1.5 1.5"/>
      </svg>
    )
  },
  // 2. Neck/Accessories
  {
    id: 'ear',
    name: 'Earrings',
    localeKey: 'ui_ear',
    command: 'ear',
    category: 'accessories',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 15 15">
        <path fill="currentColor" d="M6 1.654C6 .74 5.26 0 4.346 0H3.5A3.5 3.5 0 0 0 0 3.5V13h1v2h1v-2h1V7h1a2 2 0 0 0 2-2zM10.654 0C9.74 0 9 .74 9 1.654V5a2 2 0 0 0 2 2h1v6h1v2h1v-2h1V3.5A3.5 3.5 0 0 0 11.5 0z"/>
      </svg>
    )
  },
  {
    id: 'neck',
    name: 'Necklace',
    localeKey: 'ui_neck',
    command: 'neck',
    category: 'accessories',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512">
        <path fill="currentColor" d="M70.184 23.738C55.614 23.738 44 35.35 44 49.91s11.614 26.174 26.184 26.174c14.569 0 26.183-11.614 26.183-26.174c0-14.56-11.614-26.172-26.183-26.172m371.632 0c-14.569 0-26.183 11.612-26.183 26.172s11.614 26.174 26.183 26.174C456.386 76.084 468 64.47 468 49.91c0-14.56-11.614-26.172-26.184-26.172M70.184 94.084C55.614 94.084 44 105.696 44 120.256s11.614 26.172 26.184 26.172c14.569 0 26.183-11.612 26.183-26.172S84.753 94.084 70.184 94.084m371.632 0c-14.569 0-26.183 11.612-26.183 26.172s11.614 26.172 26.183 26.172c14.57 0 26.184-11.612 26.184-26.172s-11.614-26.172-26.184-26.172m-354.04 70.344c-14.57 0-26.184 11.614-26.184 26.174c0 14.56 11.614 26.171 26.183 26.171c14.57 0 26.186-11.612 26.186-26.171c0-14.56-11.616-26.174-26.186-26.174zm336.449 0c-14.57 0-26.186 11.614-26.186 26.174c0 14.56 11.616 26.171 26.186 26.171c14.569 0 26.183-11.612 26.183-26.171c0-14.56-11.614-26.174-26.183-26.174M122.96 234.773c-14.57 0-26.186 11.613-26.186 26.172c0 14.56 11.617 26.174 26.186 26.174c14.57 0 26.184-11.614 26.184-26.174c0-14.56-11.615-26.172-26.184-26.172m266.078 0c-14.57 0-26.184 11.613-26.184 26.172c0 14.56 11.615 26.174 26.184 26.174c14.57 0 26.186-11.614 26.186-26.174c0-14.56-11.617-26.172-26.186-26.172m-203.406 42.868c-14.57 0-26.186 11.612-26.186 26.171c0 14.56 11.617 26.172 26.186 26.172c14.57 0 26.183-11.612 26.183-26.171c0-14.56-11.614-26.172-26.183-26.172m140.734 0c-14.57 0-26.183 11.612-26.183 26.171c0 14.56 11.614 26.172 26.183 26.172c14.57 0 26.186-11.612 26.186-26.171c0-14.56-11.617-26.172-26.186-26.172M256 295.227c-14.57 0-26.184 11.612-26.184 26.171c0 14.56 11.615 26.174 26.184 26.174c14.57 0 26.184-11.614 26.184-26.174c0-14.56-11.615-26.171-26.184-26.171m0 70.345c-34 0-61.367 27.359-61.367 61.344s27.366 61.346 61.367 61.346c34 0 61.37-27.361 61.37-61.346S290 365.572 256 365.572"/>
      </svg>
    )
  },
  // 3. Torso/Clothing
  {
    id: 'shirt',
    name: 'Shirt',
    localeKey: 'ui_shirt',
    command: 'shirt',
    category: 'clothing',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512">
        <path fill="currentColor" d="M256 42c-33.88 0-64-10-64-10v2a64 64 0 0 0 128 0v-2s-30.12 10-64 10"/>
        <path fill="currentColor" d="M352 44c-5.49 47.76-46.79 85-96 85s-90.51-37.24-96-85L16 94l18 114l61.71 7.42c7.08.9 7.1.9 7.1 8.19L96 480h320l-6.81-256.39c-.21-7-.21-7 7.1-8.19L478 208l18-114Z"/>
      </svg>
    )
  },
  {
    id: 'vest',
    name: 'Vest',
    localeKey: 'ui_vest',
    command: 'vest',
    category: 'clothing',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 448 512">
        <path fill="currentColor" d="M437.252 239.877L384 160V32a32 32 0 0 0-32-32h-32a23.982 23.982 0 0 0-13.312 4.031l-25 16.672a103.794 103.794 0 0 1-115.376 0l-25-16.672A23.982 23.982 0 0 0 128 0H96a32 32 0 0 0-32 32v128l-53.252 79.877A64 64 0 0 0 0 275.377V480a32 32 0 0 0 32 32h160V288a31.987 31.987 0 0 1 1.643-10.119l13.492-40.481l-56.947-170.839A151.579 151.579 0 0 0 224 86.234a151.565 151.565 0 0 0 73.811-19.668L224 288v224h192a32 32 0 0 0 32-32V275.377a64 64 0 0 0-10.748-35.5M63.5 272.484a12.01 12.01 0 0 1 17-16.968l15.5 15.5l15.5-15.5a12.01 12.01 0 0 1 17 16.968L112.984 288l15.516 15.516a12.01 12.01 0 0 1-17 16.968l-15.5-15.5l-15.5 15.5a12.01 12.01 0 0 1-17-16.968L79.016 288ZM96 456a40 40 0 1 1 40-40a40 40 0 0 1-40 40m263.227-120.215L310.7 336a6.671 6.671 0 0 1-6.7-6.7l.215-48.574A24.987 24.987 0 0 1 331.43 256.1c12.789 1.162 22.129 12.619 22.056 25.419l-.037 5.057l5.051-.037c12.826-.035 24.236 9.275 25.4 22.076a24.948 24.948 0 0 1-24.673 27.17"/>
      </svg>
    )
  },
  {
    id: 'bagoff',
    name: 'Bag',
    localeKey: 'ui_bag',
    command: 'bagoff',
    category: 'clothing',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256">
        <path fill="currentColor" d="M168 40.58V32a24 24 0 0 0-24-24h-32a24 24 0 0 0-24 24v8.58A56.09 56.09 0 0 0 40 96v120a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V96a56.09 56.09 0 0 0-48-55.42M104 32a8 8 0 0 1 8-8h32a8 8 0 0 1 8 8v8h-48Zm8 40h32a8 8 0 0 1 0 16h-32a8 8 0 0 1 0-16m64 144H80v-40h56v8a8 8 0 0 0 16 0v-8h24Zm0-56H80v-8a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16Z"/>
      </svg>
    )
  },
  // 4. Arms/Hands
  {
    id: 'gloves',
    name: 'Gloves',
    localeKey: 'ui_gloves',
    command: 'gloves',
    category: 'clothing',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512">
        <path fill="currentColor" d="M156.5 21.92c-1.3 0-2.5 0-3.8.1c-16.8.86-35.7 7.64-53 18.52c-27.82 17.42-50.42 44.95-54.61 67.66c-14.5 78.7 9.32 146.2 44.82 210c46.99 3.4 90.89-1.2 132.99-11.2c-3.2-14.4-5.7-33.9-3.7-51.5c1-8.8 3-17.2 7.5-24.4c4.4-7.1 12-12.9 21.4-14c5.8-.7 11.3.3 16.4 2.3c2.2-7.8 4.3-15.8 6-23.6c2.8-12.8 5-31.2 3.4-45.5c-.8-7.1-2.6-13.1-4.9-16.8c-2.3-3.7-4.3-5.2-8.2-5.7c-5.3-.6-11.1 2-17.6 8c-6.4 6.1-12.9 15.1-18.4 24.6c-10.8 18.8-17.7 38.4-17.7 38.4l-17.1-5s9.3-36.9 12.2-76.6c1.4-19.97 1.2-40.55-2.3-57.02c-3.5-16.47-10-27.95-19.7-32.99c-7-3.59-15-5.26-23.7-5.27M355 128.5c-8.7 0-16.8 1.7-23.8 5.3c-9.8 5.1-16.3 16.6-19.8 33.1c-3.5 16.6-3.7 37.2-2.3 57.2c2.9 40 12.3 77 12.3 77l-17.2 5.1s-6.9-19.7-17.8-38.6c-5.5-9.5-12-18.6-18.5-24.7c-6.5-6-12.3-8.6-17.6-8c-4 .5-6 2-8.3 5.7c-2.3 3.7-4.1 9.7-4.9 16.9c-1.6 14.3.6 32.8 3.4 45.7c10.5 47.7 33.1 99.2 37.5 109c45.4 11.9 92.9 17.6 143.9 13.9c35.7-64.1 59.5-131.9 45-210.9c-4.2-22.8-26.9-50.4-54.8-67.9c-17.4-11-36.4-17.8-53.3-18.7c-1.3-.1-2.5-.1-3.8-.1m-127.8 196c-5.5 1.3-10.9 2.4-16.4 3.6l8.4 45c7.3-1.2 14.7-2.6 22-4.1c-4.9-13.8-9.9-29.1-14-44.5m-34 6.8c-8.8 1.5-17.7 2.7-26.7 3.6l7.6 44.2c9.2-.9 18.4-2 27.4-3.3zm-101.57 5.1l.37 46.5c6.56 0 13-.1 19.5-.3l-2.5-45.4c-5.8-.2-11.55-.4-17.37-.8m56.77 0c-7 .5-14.2.7-21.5.9l2.5 44.7c9.1-.3 17.9-.8 26.8-1.4zm129.3 94.4l-11.2 44.6c8.5 1.8 16.9 3.4 25.2 4.8l8.3-44.3c-7.5-1.5-14.9-3.2-22.3-5.1m39.9 8.4l-8.2 43.7c9.1 1.3 18.3 2.4 27.4 3.3l7.5-43.4c-9-1-17.9-2.2-26.7-3.6m44.7 5.2l-7.5 43.3c8.8.7 17.7 1.2 26.7 1.5l2.4-44c-7.2-.1-14.4-.4-21.6-.8m57.1 0c-5.9.4-11.7.7-17.5.8l-2.4 44.6c6.4.2 12.9.3 19.5.3z"/>
      </svg>
    )
  },
  {
    id: 'watch',
    name: 'Watch',
    localeKey: 'ui_watch',
    command: 'watch',
    category: 'accessories',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256">
        <path fill="currentColor" d="M208 128a79.85 79.85 0 0 0-27.95-60.68L173 28.43A20 20 0 0 0 153.32 12h-50.64A20 20 0 0 0 83 28.43l-7 38.89a79.84 79.84 0 0 0 0 121.36l7 38.89A20 20 0 0 0 102.68 244h50.64A20 20 0 0 0 173 227.57l7.05-38.89A79.85 79.85 0 0 0 208 128M106 36h44l2.9 16a79.76 79.76 0 0 0-49.76 0Zm44 184h-44l-2.9-16a79.76 79.76 0 0 0 49.76 0Zm-22-36a56 56 0 1 1 56-56a56.06 56.06 0 0 1-56 56m40-56a12 12 0 0 1-12 12h-28a12 12 0 0 1-12-12v-28a12 12 0 0 1 24 0v16h16a12 12 0 0 1 12 12"/>
      </svg>
    )
  },
  {
    id: 'bracelet',
    name: 'Bracelet',
    localeKey: 'ui_bracelet',
    command: 'bracelet',
    category: 'accessories',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
        <path fill="currentColor" d="M11 21.9L6.1 17H1V7h4.6l1.1-1.125q.425-.425.975-.65T8.825 5H19q.425 0 .713.288T20 6q0 .425-.288.713T19 7h-5v1.5h7q.425 0 .713.288T22 9.5q0 .425-.288.713T21 10.5h-7V12h8q.425 0 .713.288T23 13q0 .425-.288.713T22 14h-8v1.5h6q.425 0 .713.288T21 16.5q0 .425-.288.713T20 17.5h-7.875l.15.3q.425.875.263 1.813t-.838 1.612z"/>
      </svg>
    )
  },
  // 5. Lower body/Legs
  {
    id: 'pants',
    name: 'Pants',
    localeKey: 'ui_pants',
    command: 'pants',
    category: 'legs',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256">
        <path fill="currentColor" d="m53.44 43.5l.68-5.5A16 16 0 0 1 70 24h116a16 16 0 0 1 15.88 14l.68 5.49a4 4 0 0 1-4 4.5H57.41a4 4 0 0 1-3.97-4.49M169 64a32.06 32.06 0 0 0 31 24h3.59a4 4 0 0 0 4-4.5l-2-16a4 4 0 0 0-4-3.5ZM52.41 88H56a32.06 32.06 0 0 0 31-24H54.41a4 4 0 0 0-4 3.5l-2 16a4 4 0 0 0 4 4.5m171.47 126l-13.32-106.5a4 4 0 0 0-4-3.5H200a48.07 48.07 0 0 1-47.32-40H136v39.73a8.18 8.18 0 0 1-7.47 8.25a8 8 0 0 1-8.53-8V64h-16.68A48.07 48.07 0 0 1 56 104h-6.59a4 4 0 0 0-4 3.5L32.12 214a16 16 0 0 0 6.71 15.09a16.56 16.56 0 0 0 9.56 2.91h40.3a16 16 0 0 0 15.51-12.06l23.8-92l23.79 91.94A16 16 0 0 0 167.31 232h40.3a16.54 16.54 0 0 0 9.56-2.89a16 16 0 0 0 6.71-15.11"/>
      </svg>
    )
  },
  // 6. Feet
  {
    id: 'shoes',
    name: 'Shoes',
    localeKey: 'ui_shoes',
    command: 'shoes',
    category: 'legs',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256">
        <path fill="currentColor" d="m228.65 129.11l-28.06-9.35a4 4 0 0 0-2.63 0l-43.23 15.72a8.14 8.14 0 0 1-2.73.52a8 8 0 0 1-7.71-5.88a8.17 8.17 0 0 1 5.22-9.73l18.49-6.72a2.54 2.54 0 0 0-.06-4.8a23.93 23.93 0 0 1-8.8-5.25a4 4 0 0 0-4.17-.91l-24.22 8.8a8 8 0 0 1-10.44-5.39a8.17 8.17 0 0 1 5.22-9.73L146 88.93a4 4 0 0 0 2.31-5.34l-3.06-7.16a4 4 0 0 0-5.05-2.19l-25.5 9.27a8 8 0 0 1-10.44-5.39a8.17 8.17 0 0 1 5.22-9.73l24-8.73a4 4 0 0 0 2.31-5.33l-5.4-12.73v-.1a16 16 0 0 0-20.14-8.5L34.53 60.49A16.05 16.05 0 0 0 24 75.53V192a16 16 0 0 0 16 16h200a16 16 0 0 0 16-16v-24.94a40 40 0 0 0-27.35-37.95M240 192H40v-16h200Z"/>
      </svg>
    )
  }
];

const ClothingInterface: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [toggled, setToggled] = useState<Record<string, boolean>>({
    Glasses: false,
    Ear: false,
    Neck: false,
    Watch: false,
    Bracelet: false,
    Vest: false,
    Shirt: false,
    Gloves: false,
    Hat: false,
    Shoes: false,
    Mask: false,
    Hair: false,
    Bagoff: false,
    Pants: false
  });

  const executeCommand = async (command: string) => {
      fetchNui("toggleCloth", command);
      // const variants = item.data || {};
      // setToggled(prev => {
      //   const next = { ...prev };
      //   Object.keys(variants).forEach((key) => {
      //     if (next[key] !== undefined) {
      //       next[key] = variants[key] !== undefined;
      //     }
      //   });
      //   return next;
      // });
  }
 
  // useNuiEvent("toggleCloth", (data) => {
  //   Object.keys(toggled).forEach(k => {
  //     if(!data[k]){
  //       data[k] = false;
  //     }
  //   });
  //   setToggled(data);
  // });

  const categories = [
    { name: 'Head', items: clothingItems.filter(item => item.category === 'head') },
    { name: 'Accessories', items: clothingItems.filter(item => item.category === 'accessories') },
    { name: 'Clothing', items: clothingItems.filter(item => item.category === 'clothing') },
    { name: 'Legs', items: clothingItems.filter(item => item.category === 'legs') }
  ];

  const renderClothingButton = (item: ClothingItem, index: number, categoryIndex: number) => {
    const isToggled = toggled[item.name as keyof typeof toggled] || false;

    return (
      <motion.button
        key={item.id}
        onClick={(e) => {
          e.currentTarget.blur();
          executeCommand(item.command);
        }}
        className={`
          relative group w-16 h-16 rounded-xl border-2 transition-all duration-300
          flex flex-col items-center justify-center gap-1 cursor-pointer
          backdrop-blur-sm font-[Resolve] overflow-hidden
          ${isToggled
            ? 'bg-white/90 border-white text-black shadow-lg shadow-white/25'
            : 'bg-black/40 border-white/20 text-white hover:bg-black/60 hover:border-white/40 hover:shadow-md'
          }
        `}
        initial={{ opacity: 0, scale: 0, rotateY: -90 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{
          duration: 0.5,
          delay: (categoryIndex * 0.1) + (index * 0.08),
          type: "spring",
          stiffness: 120,
          damping: 15
        }}
        whileHover={{
          scale: 1.08,
          rotateY: 5,
          transition: { duration: 0.2 }
        }}
        whileTap={{
          scale: 0.95,
          transition: { duration: 0.1 }
        }}
      >
        {/* Glow effect when active */}
        {isToggled && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        )}

        {/* Icon container */}
        <div className="flex items-center justify-center z-10">
          {item.svg}
        </div>

        {/* Name label */}
        <span className="text-[10px] font-medium text-center leading-tight z-10 px-1">
          {item.name}
        </span>

        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100"
          transition={{ duration: 0.2 }}
        />
      </motion.button>
    );
  };

  return (
    <div className="w-full p-2" ref={containerRef}>
      <div className="grid grid-cols-5 gap-1.5">
        {clothingItems.map((item, index) => {
        const isToggled = toggled[item.name as keyof typeof toggled] || false;

        return (
          <motion.button
            key={item.id}
            onClick={(e) => {
              e.currentTarget.blur();
              executeCommand(item.command);
            }}
            className={`
              group relative flex flex-col items-center justify-center
              w-full aspect-square rounded-lg border-2 p-1.5 cursor-pointer
              backdrop-blur-md font-[Resolve] overflow-hidden
              ${isToggled
                ? 'bg-gradient-to-br from-clothing-active-from/90 to-clothing-active-to/90 border-clothing-border-active text-white shadow-lg shadow-clothing-active/25'
                : 'bg-clothing-inactive text-white border-clothing-border-inactive'
              }
            `}
            initial={{ opacity: 0, y: 15 }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.2,
              delay: index * 0.008,
              ease: "easeOut"
            }}
            whileHover={{
              scale: 1.03
            }}
            whileTap={{
              scale: 0.97
            }}
          >
            {/* Gradient overlay when toggled */}
            {isToggled && (
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-clothing-active-to/10 rounded-lg" />
            )}

            {/* Icon container */}
            <div className="flex items-center justify-center mb-0.5 z-10">
              <div className="w-7 h-7 flex items-center justify-center">
                {item.svg}
              </div>
            </div>

            {/* Name label */}
            <span className="text-[9px] font-bold text-center leading-tight z-10 uppercase tracking-wide">
              {Locale[item.localeKey] || item.name}
            </span>

            {/* Border highlight when active */}
            {isToggled && (
              <div className="absolute inset-0 rounded-lg border-2 border-clothing-border-active/40" />
            )}
          </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default ClothingInterface;
