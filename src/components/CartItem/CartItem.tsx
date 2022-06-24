import React, { FC } from 'react'
import { Button, Stack } from 'react-bootstrap'
import { useShoppingCart } from '../../context/shoppingCartContext'
import storeItems from '../../data/items.json'
import { formatCurrency } from '../../utils/formatCurrency'

type CartItemProps = {
  id: number | string
  quantity: number
}

export const CartItem: FC<CartItemProps> = ({ id, quantity }) => {
  const { removeFromCart } = useShoppingCart()
  const item = storeItems.find((i) => i.id === id)

  if (!item) return null
  return (
    <Stack direction="horizontal" className="d-flex align-items-center">
      <img
        src={item.imgUrl}
        style={{ width: '125px', height: '75px', objectFit: 'cover' }}
      />
      <div className="me-auto">
        <div>
          {item.name}{' '}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: '0.65rem' }}>
              {' '}
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: '0.75rem' }}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <div>{formatCurrency(item.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}>
        &times;
      </Button>
    </Stack>
  )
}
