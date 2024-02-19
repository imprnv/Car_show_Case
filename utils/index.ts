"use-client"
export const  calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 3342; // Base rental price per day in rupees
  const mileageFactor = 30; // Additional rate per km driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};
export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': 'ae46838ce8msh7379c5e17ad7d2fp14ecf8jsn51858cf6f34c',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
      }
      const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',{headers:headers})
      console.log(response);
      const result = await response.json();
      return result;
}

