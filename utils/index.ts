// const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'db00b39664msh6cfab35b0e46084p140412jsna9d22941e132',
// 		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
// 	}
// };

import { CarProps } from "@/types";

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age

    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
};

export async function fetchCars(){
    const headers ={
        'X-RapidAPI-Key': 'db00b39664msh6cfab35b0e46084p140412jsna9d22941e132',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response =  await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=carrera',{
        headers: headers,
    });
    const result = await response.json();
    return result;
}

export const generateCarImageUrl = async (car:CarProps,angle?:string) =>{
    // indevanshjaincompany
    const url = new URL('https://cdn.imagin.studio/getimage');
    const {make ,year ,model}  = car;
    url.searchParams.append('customer','indevanshjaincompany');
    url.searchParams.append('make',make);
    url.searchParams.append('modelFamily',model.split(' ')[0]);
    url.searchParams.append('zoomType','fullscreen');
    url.searchParams.append('modelYear',`${year}`);
    url.searchParams.append('angle',`${angle}`);
    return `${url}`;
}

