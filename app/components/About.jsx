var React = require('react');

var About = (props) => {
  return (
    <div >
      <h3 className="text-center">About</h3>
      <p className="text-center" >This is a weather Application built on React. I have built this as a practice on working with react. </p>
      <p>Here are some of the tools I used:</p>
      <ul>
      <li>
      <a href='https://facebook.github.io/react'>React</a> - this was Javascript Framework used.
      </li>
      <li>
      <a href='https://openweathermap.org'>Open Weather map</a> - I used Open Weather Map to search for weather data by city name.
      </li>
      </ul>
    </div>
  )
};

module.exports = About;
