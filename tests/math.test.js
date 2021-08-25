const { calcTip } = require('../src/math')

test('Should calc total with tip', ()=>{
    const total =  calcTip(10, .3)

    expect(total).toBe(13)
})