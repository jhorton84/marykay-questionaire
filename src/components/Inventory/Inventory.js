import React, { Component } from 'react';
import './Inventory.css';
import { connect } from 'react-redux';

class Inventory extends Component {
    constructor() {
        super();
        this.state = {
            inventory: ''
        }
    }
    componentDidMount () {
        const { totalPoints } = this.props;
        totalPoints && this.selectInventory();
    }

    selectInventory = () => {
        const { totalPoints } = this.props;
        if(totalPoints >= 4 && totalPoints <= 6) {
            this.setState({
                inventory: 'Sapphire'
            })
        } else if(totalPoints >= 7 && totalPoints <= 10) {
            this.setState({
                inventory: 'Ruby'
            })
        } else if(totalPoints >= 11 && totalPoints <= 13) {
            this.setState({
                inventory: 'Diamond'
            })
        } else {
            this.setState({
                inventory: "Emerald"
            })
        }
    }


    render() {
        return (
            <div className='component Inventory'>
                Inventory
                <p>You should focus on the {this.state.inventory} line </p>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        totalPoints: state.totalPoints,
    }
}

const mapDispatchToProps = {
 
}

export default connect(mapStateToProps, mapDispatchToProps)(Inventory);