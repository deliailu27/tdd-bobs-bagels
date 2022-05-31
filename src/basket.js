






class basket {
    constructor () {
        
        this.items =[]
        this.id = 1
        this.maximum = 10
        this.totalQuantity = 0
        this.sum=0
        this.bagelPrice = {
            'Plain Bagel':4,
            'Everything Bagel':6,
            'Poppy seed Bagel':5,

        }
        this.totalPrice = 0
       
    }

    addBagel (quantity,type) {
        const bagel ={
            id:this.id++,
            quantity: quantity,
            type: type 
        }

        this.items.push(bagel)
        this.totalQuantity += quantity

        if (this.totalQuantity<=this.maximum) {
            return this.items
        }
        else {return 'Too many bagels!'}
         
    }

    removeBagel (removeID) {
        let findBagel = this.items.find (bagel=> bagel.id ===removeID)
        if (!findBagel){
            return "Item doesn't exist"
        }
        else return this.items.splice (removeID--,1)
    }

    addMoreBagel (capacity) {
        this.totalQuantity +=capacity

        return this.capacity
    }

    showPrice (type) {
        return this.bagelPrice[type] 
    }

    totalPrice() {
        for (let i=0;i<this.id;i++){
        this.totalPrice += this.bagelPrice[this.items[i].type]*this.items[i].quantity
        }
        return this.totalPrice
    }



}




module.exports = basket 