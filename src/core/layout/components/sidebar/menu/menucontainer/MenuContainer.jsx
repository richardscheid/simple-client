import React from 'react';
import { MenuContent } from '../menucontent';

import data from '../data';

const MenuContainer = (
  <div>
    {data.map((list) => (
      <MenuContent key={list.title} pages={list.content} title={list.title} />
    ))}
  </div>
);

export { MenuContainer };
