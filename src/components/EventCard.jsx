import React from 'react';
import { Card } from 'semantic-ui-react'

const EventCard = ({ title, description, price }) => (
  <Card>
    {/* <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} /> */}
    <Card.Content>
      <Card.Header>{title}</Card.Header>
      <Card.Meta>
        <span className='date'>{price} руб.</span>
      </Card.Meta>
      <Card.Description>
        {description}
      </Card.Description>
    </Card.Content>
    {/* <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content> */}
  </Card>
)

export default EventCard