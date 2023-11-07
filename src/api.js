
async function getCityData(city) {
    const API=process.env.REACT_APP_API_KEY
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API}`)
        const data = await response.json();
        return data
    }catch(err){
        // console.log(err);
        console.log(err)
    }
}

export default getCityData