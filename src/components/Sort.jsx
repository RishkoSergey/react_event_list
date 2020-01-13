import React from 'react'
import { Menu } from 'semantic-ui-react'

const Sort = ({ setSort, sortBy }) => (
  <Menu text>
    <Menu.Item
      active={sortBy === 'all'}
      onClick={setSort.bind(this, 'all')}
    >
      Все
    </Menu.Item>
    <Menu.Item
      active={sortBy === 'cheap'}
      onClick={setSort.bind(this, 'cheap')}
    >
      Сначала дешевые
    </Menu.Item>
    <Menu.Item
      active={sortBy === 'expensive'}
      onClick={setSort.bind(this, 'expensive')}
    >
      Сначала дорогие
    </Menu.Item>
  </Menu>
)

export default Sort;