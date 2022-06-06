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

        const existingItem = this.items.find (item => item.sku === sku)

        if (existingItem) {
            existingItem.quantity += quantity
        }
        else {
            this.items.push({'sku':sku,'quantity':quantity})
        }

        return this.items
         
    }

    removeBagel (removeSku, quantity) {
        if (!(removeSku in this.items)) {
            return 'Item doesn\'t exist'
        }
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
        this.totalPrice += this.bagelPrice[this.items[i].type]*this.items[i].quantity;
        }
        return this.totalPrice
    }



}

//const Basket=new basket 
//console.log (Basket.showItemPrice('BGLO'))



module.exports = basket 