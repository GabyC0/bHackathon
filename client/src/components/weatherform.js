const WeatherForm = (props) =>{

    return (
        <form className="weather-form" onSubmit={props.getWeather}>
            <input type="text" name="city" placeholder="City"/>

            <button>Changesss</button>

        </form>

    )

};

export default WeatherForm;