import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react'

const EventCard = ({ title, description, price, address, image }) => (
  <Card>
    <Image src={image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>
        {title}
      </Card.Header>
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
  </Card>
)

export default EventCard;