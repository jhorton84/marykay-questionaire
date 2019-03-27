import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setEarnings, setEarningsPoints } from '../../ducks/reducer';

class Earnings extends Component {
    constructor() {
        super();
        this.state = {
            
        }
    }

    checkboxSet = (value, name) => {
        this.props.setEarningsPoints(parseInt(value));
        this.props.setEarnings(name);
        
    }

    render() {
        return (
            <div className='component Earnings'>
                Earnings
                <form>
                    <p>What are your desired Earnings per MONTH?</p>
                    <div className='checkbox'>
                        <input type='radio' id='appt-1' value={1} title='$100'  name='radio' onClick={e => this.checkboxSet(e.target.value, e.target.title)} />
                        <label>$100</label>
                    </div>
                    <div className='checkbox'>
                        <input type='radio' id='appt-2' value={2} title='$400' name='radio' onClick={e => this.checkboxSet(e.target.value, e.target.title)}  />
                        <label>$400</label>
                    </div>
                    <div className='checkbox'>
                        <input type='radio' id='appt-3' value={3} title='$800' name='radio'  onClick={e => this.checkboxSet(e.target.value, e.target.title)} />
                        <label>$800</label>
                    </div>
                    <div className='checkbox'>
                        <input type='radio' id='appt-4' value={4} title='$1200' name='radio'  onClick={e => this.checkboxSet(e.target.value, e.target.title)} />
                        <label>$1200</label>
                    </div>
                    <div className='form-buttons'>
                        <Link className='prev' to='/goals'><button>Previous</button></Link>
                        <Link className='next' to='/restock'><button>Next</button></Link>
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
    setEarnings: setEarnings,
    setEarningsPoints: setEarningsPoints
}

export default connect(mapStateToProps, mapDispatchToProps)(Earnings);