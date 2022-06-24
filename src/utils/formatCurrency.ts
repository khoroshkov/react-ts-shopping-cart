const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: 'USD',
  style: 'currency'
})

export const formatCurrency = (price: number) => {
  return CURRENCY_FORMATTER.format(price)
}
