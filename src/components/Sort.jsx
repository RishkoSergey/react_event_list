import React from 'react'
import { Menu, Input } from 'semantic-ui-react'

const Sort = ({ setSort, sortBy, setSearch, searchQuery }) => (
  <Menu vertical text>
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
    <Menu.Item
      active={sortBy === 'exhibition'}
      onClick={setSort.bind(this, 'exhibition')}
    >
      Только выставки
    </Menu.Item>
    <Menu.Item
      active={sortBy === 'movie'}
      onClick={setSort.bind(this, 'movie')}
    >
      Только кино
    </Menu.Item>
    <Menu.Item
      active={sortBy === 'festival'}
      onClick={setSort.bind(this, 'festival')}
    >
      Только фестивали
    </Menu.Item>
    <Menu.Item>
      <Input 
        icon="search" 
        value={searchQuery} 
        placeholder="Поиск по событиям..." 
        onChange={e => setSearch(e.target.value)}
      />
    </Menu.Item>
  </Menu>
)

export default Sort;