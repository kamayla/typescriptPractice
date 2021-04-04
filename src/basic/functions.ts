export const getText = (text: string, userName?: string): void => {
  console.log(text);
};

export const isUserSignedIn = (userID: string, username?: string): boolean => {
  if (userID === 'ABC') {
    console.log('Function parameters sample 1: User is signed in! UserName is ', username);
    return true;
  }
  return false;
};

export const productsPrice = (...prices: number[]): number => {
  return prices.reduce((prevPrice, currentPrice) => {
    return prevPrice + currentPrice;
  }, 0);
};
