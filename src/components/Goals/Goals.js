import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setGoals, setGoalPoints } from '../../ducks/reducer';


class Goals extends Component {
    constructor() {
        super();
        this.state = {
            
        }
    }

    checkboxSet = (value, name) => {
        this.props.setGoalPoints(parseInt(value));
        this.props.setGoals(name);
        
    }

    render() {
        return (
            <div className='component Goals'>
                Goals
                <form>
                    <p>What is your main Goal?</p>
                    <div className='checkbox'>
                        <input type='radio' id='appt-1' value={1} title='Solid Customer Base'  name='radio' onClick={e => this.checkboxSet(e.target.value, e.target.title, e.target.id)} />
                        <label>Solid Customer Base</label>
                    </div>
                    <div className='checkbox'>
                        <input type='radio' id='appt-2' value={2} title='Car' name='radio' onClick={e => this.checkboxSet(e.target.value, e.target.title, e.target.id)}  />
                        <label>Car</label>
                    </div>
                    <div className='checkbox'>
                        <input type='radio' id='appt-3' value={3} title='Director' name='radio'  onClick={e => this.checkboxSet(e.target.value, e.target.title, e.target.id)} />
                        <label>Director</label>
                    </div>
                    <div className='checkbox'>
                        <input type='radio' id='appt-4' value={4} title='Little Extra Cash' name='radio'  onClick={e => this.checkboxSet(e.target.value, e.target.title, e.target.id)} />
                        <label>Little Extra Cash</label>
                    </div>
                    <div className='form-buttons'>
                        <Link className='prev' to='/appointments'><button>Previous</button></Link>
                        <Link className='next' to='/earnings'><button>Next</button></Link>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        points: state.points
    }
}

const mapDispatchToProps = {
    setGoals: setGoals,
    setGoalPoints: setGoalPoints
}

export default connect(mapStateToProps, mapDispatchToProps)(Goals);