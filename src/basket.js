class basket {
    constructor () {
        
        this.items =[]
        this.id = 1
        this.maximum = 10
        this.totalQuantity = 0
        this.sum=0
        this.sku = [
            {'sku':'BGLO', 'name':'Bagel','Variant':'Onion','Price':.49},
            {'sku':'BGLP','name':'Bagel','Variant':'Plain','Price':.39},
            {'sku':'BGLE','name':'Bagel','Variant':'Everything','Price':.49},
            {'sku':'COF','name':'Coffee','Variant':'','Price':.99}
        ]
        this.totalPrice = 0
       
    }

    addBagel (sku, quantity) {
        if (quantity+this.items.length>this.maximum){
            return "Too many bagels!"
        }

        const existingItem = this.items.find(item => item['sku'] === sku)

        if (existingItem) {
            existingItem.quantity += quantity
        }
        else {
            this.items.push({'sku':sku,'quantity':quantity})
        }

        return this.items
         
    }

    removeBagel (removeSku, removeQuantity) {
        const removeItem = this.items.find(item => item['sku'] === removeSku)
        if (!removeItem) {
            return 'Item doesn\'t exist'
        }
        if (removeQuantity < removeItem.quantity) {removeItem.quantity -= removeQuantity}
        else if (removeQuantity > removeItem.quantity) {return 'incorrect quantity'}
        else if (removeQuantity=removeItem.quantity) (this.items.indexOf(removeSku)!== -1 && this.items.splice(this.items.indexOf(removeSku),1))

        return this.items
    }

    addMoreBagel (capacity) {
        this.totalQuantity +=capacity

        return this.totalQuantity
    }

    getItemPrice (sku) {
       const item = this.sku.find(value => value['sku']===sku)
       return item
    }

    gettotalPrice() {
        
        
        for (let i=0;i<this.items.length;i++){
        let price = this.sku.find(item => item['sku'] === this.items[i].sku)['Price']
        this.totalPrice += price*this.items[i].quantity;
        }
        return this.totalPrice
    }



}

//const Basket=new basket 
//console.log (Basket.showItemPrice('BGLO'))



module.exports = basket 