import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setTotalPoints, setRestock, setRestockPoints } from '../../ducks/reducer';

class Restock extends Component {
    constructor() {
        super();
        this.state = {
            
        }
    }

    checkboxSet = (value, name) => {
        this.props.setRestock(name);
        this.props.setRestockPoints(parseInt(value));
    }

    addPoints = () => {
        const { appPoints, goalPoints, earningsPoints, restockPoints } = this.props;
        const totalPoints = appPoints + goalPoints + earningsPoints + restockPoints;
        this.props.setTotalPoints(totalPoints);
    }

    render() {
        return (
            <div className='component Restock'>
                Restock
                <form>
                    <p>How often do you plan to restock your inventory?</p>
                    <div className='checkbox'>
                        <input type='radio' id='appt-1' value={1} title='After every order'  name='radio' onClick={e => this.checkboxSet(e.target.value, e.target.title, e.target.id)} />
                        <label>After every order</label>
                    </div>
                    <div className='checkbox'>
                        <input type='radio' id='appt-2' value={2} title='1/Week' name='radio' onClick={e => this.checkboxSet(e.target.value, e.target.title, e.target.id)}  />
                        <label >1/Week</label>
                    </div>
                    <div className='checkbox'>
                        <input type='radio' id='appt-3' value={3} title='2/Month' name='radio'  onClick={e => this.checkboxSet(e.target.value, e.target.title, e.target.id)} />
                        <label >2/Month</label>
                    </div>
                    <div className='checkbox'>
                        <input type='radio' id='appt-4' value={4} title='1/Month' name='radio'  onClick={e => this.checkboxSet(e.target.value, e.target.title, e.target.id)} />
                        <label >1/Month</label>
                    </div>
                    <div className='form-buttons'>
                        <Link className='prev' to='/goals'><button>Previous</button></Link>
                        <Link className='next' to='/inventory'><button onClick={() => this.addPoints()}>Complete</button></Link>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        totalPoints: state.totalPoints,
        appPoints: state.appPoints,
        goalPoints: state.goalPoints,
        earningsPoints: state.earningsPoints,
        restockPoints: state.restockPoints
    }
}

const mapDispatchToProps = {
    setTotalPoints: setTotalPoints,
    setRestock: setRestock,
    setRestockPoints: setRestockPoints
}

export default connect(mapStateToProps, mapDispatchToProps)(Restock);