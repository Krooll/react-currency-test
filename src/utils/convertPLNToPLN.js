export const convertPLNToPLN = (PLN) => {
    const PLNtoPLN = PLN = PLN;
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'PLN'
    });
  
    return formatter.format(PLNtoPLN).replace(/\u00a0/g, ' ');
}