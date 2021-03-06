const enhancer = require('./enhancer.js');
// test away!


describe('repair()', function () {

    test('should repair ', function () {
        //arrange
        const expected = 100;

        const item = { name: 'Destroyer of Worlds', enhancement: '20', durability: 20 }
        //act
        const actual = enhancer.repair(item)
        //assert
        expect(actual).toBe(expected)

    })
})

describe('succeed()', function () {
    it('returns a new item object modified by succeeds rules', function () {

        const expected = 20

        const item = { name: 'Great Axe of the Sundering', enhancement: 19, durability: 90 }

        const enhance = enhancer.succeed(item)

        expect(enhance).toBe(expected)

    })
})


describe('fail()', function () {
    it('returns a new item object modified by fail rules', function () {

        const expected = { enhancement: 19, durability: 80 }

        const item = { enhancement: 20, durability: 90 }

        const enhance = enhancer.fail(item)

        expect(enhance).toEqual(expected)

    })
})

describe('get()', function () {

    it('returns item name plus enhacement level', function () {

        const expected = { name: "[+5] Protector's Shield", enhancement: 5 }
        const item = { name: "Protector's Shield", enhancement: 5 }

        const newName = enhancer.get(item)

        expect(newName).toEqual(expected)

    })
})