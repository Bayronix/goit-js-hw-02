function getShippingCost(country) {
  switch (country) {
    case "China":
      const ChinaPrice = 100;
      console.log(`Shipping to ${country} will cost ${ChinaPrice} credits`);
      break;
    case "Chile":
      const ChilePrice = 250;
      console.log(`Shipping to ${country} will cost ${ChilePrice} credits`);
      break;
    case "Australia":
      const AustraliaPrice = 170;
      console.log(`Shipping to ${country} will cost ${AustraliaPrice} credits`);
      break;
    case "Jamaica":
      const JamaicaPrice = 120;
      console.log(`Shipping to ${country} will cost ${JamaicaPrice} credits`);
      break;
    default:
      console.log("Sorry, there is no delivery to your country");
      return;
  }
}

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
