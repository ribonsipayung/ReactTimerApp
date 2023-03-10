var React = require ('react');
var ReactDOM = require ('react-dom');
var expect = require ('expect');
var $ = require ('jQuery');
var TestUtils = require ('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () =>{
    it('should exists', ()=>{
        expect(Clock).toExist();
    });
    it ('should start timer on started status', (done)=>{
        var timer = TestUtils.renderIntoDocument(<Timer/>);

        timer.handleStatusChange('started');
        expect(timer.state.count).toBe(0);

        setTimeout(()=>{
            expect(timer.state.timerStatus).toBe('started');
            expect(timer.state.count).toBe(1);
        }, 1001);
    });
    it ('should paused timer on paused status', (done)=>{
        var timer = TestUtils.renderIntoDocument(<Timer/>);

        timer.setState({count: 10});
        timer.handleStatusChange('started');
        timer.handleStatusChange('paused');

        setTimeout(()=>{
            expect(timer.state.timerStatus).toBe('paused');
            expect(timer.state.count).toBe(10);
        }, 1001);
    });
    it ('should clear count on stopped status', (done)=>{
        var timer = TestUtils.renderIntoDocument(<Timer/>);

        timer.setState({count: 10});
        timer.handleStatusChange('started');
        timer.handleStatusChange('stopped');

        setTimeout(()=>{
            expect(timer.state.timerStatus).toBe('stopped');
            expect(timer.state.count).toBe(0);
        }, 1001);
    });
});