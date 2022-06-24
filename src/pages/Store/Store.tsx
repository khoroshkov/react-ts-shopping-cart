import React, { FC } from 'react'
import { Col, Row } from 'react-bootstrap'
import { StoreItem } from '../../components'
import storeItems from '../../data/items.json'

export const Store: FC = () => {
  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItem
              id={item.id}
              name={item.name}
              price={item.price}
              imgUrl={item.imgUrl}
            />
          </Col>
        ))}
      </Row>
    </>
  )
}
