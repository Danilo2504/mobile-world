export function calculateDiscountedPrice(price, discount) {
  if (discount && discount > 0) {
    return price * (1 - discount);
  }
  return price;
}

export function formatPrice(price) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
}

export function quantityToPrice(quantity, price) {
  return quantity * price;
}