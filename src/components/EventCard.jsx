import React from 'react';
import { Card, Image, Icon, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const EventCard = (props) => {
  const { title, address, image, description, price, id, items, addToFavorites} = props;
  return(
    <Card>
      <Image src={image} wrapped ui={false} />
      <Card.Content>
        <NavLink to={'/event/'+id}>
          <Card.Header>
            {title}
          </Card.Header>
        </NavLink>
        <Card.Meta>
          <span className='date'>{address}</span>
        </Card.Meta>
        <Card.Description>
          {description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        {price}
        <Icon name='rub' />
      </Card.Content>
      <Button disabled={items.filter(item => item.id === id).length > 0} onClick={addToFavorites.bind(this, props)}>Добавить в избранное</Button>
    </Card>
  )
}

export default EventCard;