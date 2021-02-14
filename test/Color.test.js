const Color= artifacts.require('./Color.sol')

require('chai').use(require('chai-as-promised')).should()

contract('Color',(accounts) => {
    var contract;

    before(async()=>{
        contract = await Color.deployed();

    })
    describe('deployment', async ()=>{
        it('deploys successfully ', async ()=>{
            const address = await contract.address;
            console.log(address)
            assert.notEqual(address, '');
            assert.notEqual(address, '0x0');
            assert.notEqual(address, null);
            assert.notEqual(address, undefined);

        });
        it('has a name', async ()=>{
            const name= await contract.name();
            console.log(name);
            assert.equal(name, 'Color')
        })

        it('has a symbol', async ()=>{
            const symbol= await contract.symbol();
            console.log(symbol);
            assert.equal(symbol, 'CLR')
        })

    })
    describe('minting', async ()=>{
        it('creates a new token', async ()=> {

        })
    })


})