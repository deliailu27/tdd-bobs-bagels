const basket = require ('../src/basket.js')

describe ('basket',()=> {
    it('add bagel',()=> {
        const Basket= new basket()
        
        const expected = [{'sku':'BGLO','quantity':2}]

        const result = Basket.addBagel('BGLO',2)

        expect(result).toEqual(expected)


    })

    it ('remove bagel incorrect quantity',()=>{
        const Basket = new basket()
        Basket.addBagel('BGLO',1)

        const expected = "incorrect quantity"
        const result = Basket.removeBagel('BGLO',2)

        expect(result).toEqual(expected)
    })

    it('no bagel',()=>{
        const Basket = new basket ()
    
        const expected = "Item doesn't exist"
        const result = Basket.removeBagel('BGLO',5)

        expect(result).toEqual(expected)
    })

    it ('no too many bagels',()=>{
        const Basket =new basket()
        
        const expected = 'Too many bagels!'
        const result = Basket.addBagel('BGLP',20)

        expect(result).toEqual(expected)
    })

   

    it ('get item price for valid sku',()=> {
        const Basket = new basket()

        const expected = {'sku':'BGLO', 'name':'Bagel','Variant':'Onion','Price':.49}
        const result = Basket.getItemPrice(expected.sku)

        expect(result).toEqual(expected)
    }

    )

    it ('get item price for invalid sku',()=> {
        const Basket = new basket()

        const expected = undefined
        const result = Basket.getItemPrice('random')

        expect(result).toEqual(expected)
    }

    )


    it ('check out',()=> {
        const Basket = new basket()
        Basket.addBagel ('BGLO',1)
        Basket.addBagel ('BGLP',1)

        const expected = .88
        const result = Basket.gettotalPrice()

        expect(result).toEqual(expected)
    })


}

)