
export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': 'ae46838ce8msh7379c5e17ad7d2fp14ecf8jsn51858cf6f34c',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
      }
      const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',{headers:headers});
      const result = await response.json();
}