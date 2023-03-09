var React = require('react');
var ReactDOM = require('react-dom');
var{Route, Router, IndexRoute, hashHistory}=require('react-router');
var Main = require('Main');
var Countdown = require('./components/Countdown');
var Timer = require('./components/Timer');

// Load foundation
$(document).foundation();

//App css
require('style-loader!css-loader!sass-loader!applicationStyles')

ReactDOM.render(
    <Router history={hashHistory}>
       <Route path="/" component={Main}>
        <Route path="countdown" component={Countdown}/>
        <IndexRoute component={Timer}/>
       </Route>
    </Router>,
    document.getElementById('app')
);