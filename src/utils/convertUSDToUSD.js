export const convertUSDToUSD = (USD) => {
    const USDtoUSD = USD = USD;
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    });
  
    return formatter.format(USDtoUSD).replace(/\u00a0/g, ' ');
}