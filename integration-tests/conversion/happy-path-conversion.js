
const expect = require('chai');
const {getListingLatest, filterOutUnusedFields} = require('../helpers/getDataForConversion');
let savedData;


describe('When sending a request to V1/exchange/listing', () => {
  it('should be able to get data for conversion', async () => {
    const {dataForConversion} = await getListingLatest(data);
    
    savedData = filterOutUnusedFields(dataForConversion);
    expect(savedData.length).to.equal(16);
    
  });
});
