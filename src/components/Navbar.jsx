import React from 'react';
import { Menu } from 'semantic-ui-react';

const Navbar = () => (
  <Menu>
    <Menu.Item
      name='name'
    >
      События в Санкт-Петербурге
    </Menu.Item>

    <Menu.Menu position='right'>
      <Menu.Item
        name='favorites'
      >
        Избранное
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

export default Navbar;