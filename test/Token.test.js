const Token = artifacts.require('./Token');

require('chai')
  .use(require('chai-as-promised'))
  .should()

contract('Token', (accounts) => { 
  const name = 'DApp Token'
  const symbol = 'DAPP'
  const decimals = 18
  const totalSupply = 'fill me in ...'
  let token;

  beforeEach(async () => {
    token = await Token.new()
  })

  describe('deployment', () => {
    it('tracks the name', async () => {
      const result = await token.name()
      result.should.equal(name)
    })

    it('track the symbol', async () => {
      const result = await token.symbol()
      result.should.equal(symbol)
    })
    
    it('track the decimals', async () => {
      const result = await token.symbol()
      result.should.equal(decimals)
    })

    it('track the total supply', async () => {
      const result = await token.symbol()
      result.should.equal(totalSupply)
    })
  })
})
