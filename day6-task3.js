class UberPriceCalculator {
    constructor(distance, duration) {
      this.distance = distance; // Distance in kilometers
      this.duration = duration; // Duration in minutes
      this.BASE_FARE = 100; // Base fare in rupees
      this.COST_PER_KM = 10; // Cost per kilometer in rupees
      this.COST_PER_MINUTE = 1; // Cost per minute in rupees
    }
  
    calculatePrice() {
      const fare = this.BASE_FARE + (this.distance * this.COST_PER_KM) + (this.duration * this.COST_PER_MINUTE);
      return fare.toFixed(2);
    }
  }
  const ride = new UberPriceCalculator(16, 30); // Creating an instance with a distance of 16 kilometers and duration of 30 minutes
  const price = ride.calculatePrice();
  console.log(`The price of the Uber ride is ₹${price}`);

  
//   output: The price of the Uber ride is ₹310.00
