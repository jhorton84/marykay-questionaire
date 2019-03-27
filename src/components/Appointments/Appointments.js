import React, { Component } from 'react';
import './Appointments.css';
import { connect } from 'react-redux';
import { setAppointments, setAppPoints } from '../../ducks/reducer';
import { Link } from 'react-router-dom';

class Appointments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    checkboxSet = (value, name) => {
        this.props.setAppPoints(parseInt(value));
        this.props.setAppointments(name);
        
    }

    render() {
        return (
            <div className='component Appointments'>
                Appointments
                <form>
                    <p>How many appointments do you plan to set?</p>
                    <div className='checkbox'>
                        <input type='radio' id='appt-1' value={1} title='1/month'  name='radio' onClick={e => this.checkboxSet(e.target.value, e.target.title)} />
                        <label>1/month</label>
                    </div>
                    <div className='checkbox'>
                        <input type='radio' id='appt-2' value={2} title='2-3/month' name='radio' onClick={e => this.checkboxSet(e.target.value, e.target.title)}  />
                        <label>2-3/month</label>
                    </div>
                    <div className='checkbox'>
                        <input type='radio' id='appt-3' value={3} title='1-2/week' name='radio'  onClick={e => this.checkboxSet(e.target.value, e.target.title)} />
                        <label>1-2/week</label>
                    </div>
                    <div className='checkbox'>
                        <input type='radio' id='appt-4' value={4} title='3+/week' name='radio'  onClick={e => this.checkboxSet(e.target.value, e.target.title)} />
                        <label>3+/week</label>
                    </div>
                    <div className='form-buttons'>
                        <Link className='next' to='/goals'><button>Next</button></Link>
                    </div>
                </form>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        appointments: state.setAppointments,
        appPoints: state.appPoints
    }
}

const mapDispatchToProps = {
    setAppointments: setAppointments,
    setAppPoints: setAppPoints
}

export default connect(mapStateToProps, mapDispatchToProps)(Appointments);