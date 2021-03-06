import React from 'react';
import { MenuContent } from '../menucontent';

import data from '../data';

const MenuContainer = (
  <div>
    {data.map((list) => (
      <MenuContent key={list.label} pages={list.content} title={list.label} />
    ))}
  </div>
);

export { MenuContainer };
