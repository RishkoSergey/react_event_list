import React from 'react';
import { Menu, Icon, Button, List, Popup, Grid } from 'semantic-ui-react';

const Favorites = ({ title, id, image, removeFromFavorites }) => (
  <List selection divided verticalAlign="middle">
    <List.Item>
      <List.Content floated="right">
        <Button onClick={removeFromFavorites.bind(this, id)} color="red"><Icon name="remove" /></Button>
      </List.Content>
      <List.Content>{title}</List.Content>
    </List.Item>
  </List>
)

const Navbar = ({ count, items }) => (
  <Grid>
    <Grid.Column mobile={14} largeScreen={16}>
      <Menu>
        <Menu.Item
          name='name'
        >
          События в СПб
        </Menu.Item>

        <Menu.Menu position='right'>
          <Popup trigger={
            <Menu.Item
              name='favorites'
            >
              Избранное(<b>{count}</b>)
            </Menu.Item>
          }
          content={items.map(event => <Favorites {...event}/>)}
          on="click"
        />
        </Menu.Menu>
      </Menu>
    </Grid.Column>
  </Grid>
);

export default Navbar;