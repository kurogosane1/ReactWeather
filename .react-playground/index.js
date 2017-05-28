
        import React from 'react';
        import ReactDom from 'react-dom';
        import Playground from 'react-playground-kit';
        import * as module from 'g:/Bootcamp/ReactWeather/app/components/Weather.jsx';

        ReactDom.render(React.createElement(Playground, { module }), document.getElementById('app'));
    