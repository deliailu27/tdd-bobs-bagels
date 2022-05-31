const basket = require ('../src/basket.js')

describe ('basket',()=> {
    it('add bagel',()=> {
        const Basket= new basket()
        
        const expected = [{id:1, quantity:2, type:'Plain Bagel'}]

        const result = Basket.addBagel(2,'Plain Bagel')

        expect(result).toEqual(expected)


    })

    it ('remove bagel',()=>{
        const Basket = new basket()
        Basket.addBagel(1,'Plain Bagel')

        const expected = []
        const result = Basket.removeBagel(1)

        expect(result).toEqual(expected)
    })

    it('no bagel',()=>{
        const Basket = new basket ()
        Basket.addBagel(2,'Plain Bagel')
        Basket.addBagel(3,'Everything Bagel')

        const expected = "Item doesn't exist"
        const result = Basket.removeBagel(5)

        expect(result).toEqual(expected)
    })

    it ('no too many bagels',()=>{
        const Basket =new basket()
        maximum = 10
        
        const expected = 'Too many bagels!'
        const result = Basket.addBagel(11,'Plain Bagel')

        expect(result).toEqual(expected)
    })

    it ('show price',()=> {
        const Basket = new basket()
        const expected = 4
        const result = Basket.showPrice('Plain Bagel')

        expect(result).toEqual(expected)
    })


    it ('check out',()=> {
        const Basket = new basket()
        Basket.addBagel (2,'Plain Bagel')
        Basket.addBagel (1,'Poppy seed Bagel')

        const expected = 9
        const result = Basket.totalPrice()

        expect(result).toEqual(expected)
    })


}

)