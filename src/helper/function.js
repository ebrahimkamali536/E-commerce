const isInCart = (selectedItems, id) => {
  const findItem = !selectedItems.find((item) => item.id === id);
  return findItem;
};

const findQuantity = (selectedItems, id) => {
  const index = selectedItems.findIndex((item) => item.id === id);
  if (index === -1) {
    return false;
  } else {
    return selectedItems[index].quantity;
  }
};
const totalPrice = (selectedItems) => {
  const sumPrice = selectedItems.reduce((calculator, item) => calculator + item.quantity * +item.price, 0);
  return sumPrice;
};
const totalProduct = selectedItems => {
    const sumQuantity = selectedItems.reduce((calculator, item) => calculator + item.quantity, 0)
    return sumQuantity;
}
export { isInCart, findQuantity, totalPrice, totalProduct };
