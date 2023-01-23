const axios = require('axios');
const qs = require('qs');

const coinMarketUrl = 'https://sandbox-api.coinmarketcap.com';

const getListingLatest = async () => {
  try {
    const url = `${coinMarketUrl}/v1/cryptocurrency/listings/latest`;
    const headers = {
      'X-CMC_PRO_API_KEY': 'b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c',
    };

    const result = await axios.get(url, {headers});
    return result.data;
  } catch (error) {
    console.log(error);

    throw error;
  }
};

const filterOutUnusedFields = (data = []) => data.map((record) => {
  const {id,
    name,
    symbol,
    slug,
    cmc_rank,
    num_market_pairs,
    circulating_supply,
    total_supply,
    max_suply,
    last_update,
    date_added,
    tags, platform,
    self_reported_circulating_supply,
    self_reported_market_cap, quote} = record;

  return {id,
    name,
    symbol,
    slug,
    cmc_rank,
    num_market_pairs,
    circulating_supply,
    total_supply,
    max_suply,
    last_update,
    date_added,
    tags, platform,
    self_reported_circulating_supply,
    self_reported_market_cap, quote};
});

module.exports = {
  getListingLatest,
  filterOutUnusedFields,
};
