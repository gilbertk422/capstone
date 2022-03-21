const Token = artifacts.require('./Token');

require('chai')
  .use(require('chai-as-promised'))
  .should()

contract('Token', ([deployer, receiver]) => { 
  const name = 'DApp Token'
  const symbol = 'DAPP'
  const decimals = '18'
  const totalSupply = '1000000000000000000000000'
  let token

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
      const result = await token.decimals()
      result.toString().should.equal(decimals)
    })

    it('track the total supply', async () => {
      const result = await token.totalSupply()
      result.toString().should.equal(totalSupply)
    })

    it('assigns the total supply to the deployer', async () => {
      const result = await token.balanceOf(deployer)
      result.toString().should.equal(totalSupply)
    })
  })

  describe('sending tokens', () => {
    it('transfers token balances', async () => {
      let balanceOf
      // Before transfer
      balanceOf = await token.balanceOf(deployer);
      console.log('deployer balance before transfer', balanceOf.toString());
      balanceOf = await token.balanceOf(receiver);
      console.log('receiver balance before transfer', balanceOf.toString());

      // Transfer
      await token.transfer(receiver, '100000000000000000000', { from: deployer });

      // After transfer
      balanceOf = await token.balanceOf(deployer);
      console.log('deployer balance after transfer', balanceOf.toString());
      balanceOf = await token.balanceOf(receiver);
      console.log('receiver balance after transfer', balanceOf.toString());
    })
  })
})
