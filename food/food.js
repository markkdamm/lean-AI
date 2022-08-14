import dotenv from 'dotenv'
import axios from "axios"
var calories;
dotenv.config()

const foodid = '2003587'
const key = process.env.API_KEY;
const url = `https://api.nal.usda.gov/fdc/v1/foods/list?api_key=${key}`
console.log(url)
axios.get(url).then((response) => response.data).then(data => calories = data).catch(error => console.log(error))
setTimeout(()=>{
console.log(calories)
},3000)
//.foodNutrients[2].nutrient.number


