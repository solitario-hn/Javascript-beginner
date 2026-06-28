export function formatCurrency(priceCents) {
  return (priceCents / 100).toFixed(2);
}

// export default formatCurrency;
// export default is used when you have to only export exclusively one function/variable from  the file ;
// no need to put {  } for a default func.
