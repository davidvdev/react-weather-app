import React from 'react'

const WeatherInfo = (props) => {
    
    const loaded = () => {

        let tempColor = {color: 'inherit'}
        if (props.weatherData.main.temp < 40){
            tempColor = {color: 'blue'}
        } else if(props.weatherData.main.temp > 90) {
            tempColor = {color: 'red'}
        } else {
            tempColor = {color: 'inherit'}
        }

        return(<>
            <h2>{props.weatherData.name}</h2>
            <h1 style={tempColor}>{props.weatherData.main.temp}<span>&#176;F</span></h1>
            <h2>{props.weatherData.weather[0].description}</h2>
            <div className="min-max">
                <div className="temps">
                    <h6>min</h6>
                    <h2>{props.weatherData.main.temp_min}<span>&#176;F</span></h2>
                </div>
                <div className="temps">
                    <h6>max</h6>
                    <h2>{props.weatherData.main.temp_max}<span>&#176;F</span></h2>
                </div>
            </div>


            {/* THIS SHOULD HAVE BEEN MADE OUT OF COMPONENTS, BUT I DIDN'T THINK ABOUT IT UNTIL HALFWAY THROUGH... */}
            <div className="five-day">
                <div>
                    <h4>Day One</h4>
                    <h4>{props.fiveDay.list[0].main.temp}<span>&#176;F</span></h4>
                    <h5>{props.fiveDay.list[0].weather[0].description}</h5>
                    <div className="min-max">
                    <   div className="temps">
                            <h5>MIN</h5>
                        </div>
                        <div className="temps">
                            <h5>MAX</h5>
                        </div>
                    </div>
                </div>
                <div>
                    <h4>Day Two</h4>
                    <h4>{props.fiveDay.list[1].main.temp}<span>&#176;F</span></h4>
                    <h5>{props.fiveDay.list[1].weather[0].description}</h5>
                    <div className="min-max">
                    <   div className="temps">
                            <h5>MIN</h5>
                        </div>
                        <div className="temps">
                            <h5>MAX</h5>
                        </div>
                    </div>
                </div>
                <div>
                    <h4>Day Three</h4>
                    <h4>{props.fiveDay.list[2].main.temp}<span>&#176;F</span></h4>
                    <h5>{props.fiveDay.list[2].weather[0].description}</h5>
                    <div className="min-max">
                    <   div className="temps">
                            <h5>MIN</h5>
                        </div>
                        <div className="temps">
                            <h5>MAX</h5>
                        </div>
                    </div>
                </div>
                <div>
                    <h4>Day Four</h4>
                    <h4>{props.fiveDay.list[3].main.temp}<span>&#176;F</span></h4>
                    <h5>{props.fiveDay.list[3].weather[0].description}</h5>
                    <div className="min-max">
                    <   div className="temps">
                            <h5>MIN</h5>
                        </div>
                        <div className="temps">
                            <h5>MAX</h5>
                        </div>
                    </div>
                </div>
                <div>
                    <h4>Day Five</h4>
                    <h4>{props.fiveDay.list[4].main.temp}<span>&#176;F</span></h4>
                    <h5>{props.fiveDay.list[4].weather[0].description}</h5>
                    <div className="min-max">
                    <   div className="temps">
                            <h5>MIN</h5>
                        </div>
                        <div className="temps">
                            <h5>MAX</h5>
                        </div>
                    </div>
                </div>
            </div>
        </>)
    }
    
    const loading = () => {return <></>}

   return props.fiveDay ? loaded() : loading();

}

export default WeatherInfo