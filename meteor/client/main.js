class Item {
  constructor (item) {
    this.name = item.name
    this.qty = +item.qty
    this.price = +item.price
  }
}

class Basket {
  constructor (firstname) {
    this.items = []
    this.username = firstname
  }
  addItem(item) {
    let newItem = new Item(item)
    this.items.push(newItem)
  }

}

basket1 = new Basket('mathieu')

/*
TODO

addID
removeItem
changeQty
showBaskets

*/
