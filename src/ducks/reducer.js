const INITIAL_STATE = {
    appointments: '',
    appPoints: 0,
    goalPoints: 0,
    earningsPoints: 0,
    restockPoints: 0,
    totalPoints: 0,
    goals: '',
    earnings: '',
    restock: '',
    cosmetics: false
}

const SET_APPOINTMENTS = 'SET_APPOINTMENTS';
const SET_APP_POINTS = 'SET_APP_POINTS';
const SET_GOAL_POINTS = 'SET_GOAL_POINTS';
const SET_EARNINGS_POINTS = 'SET_EARNINGS_POINTS';
const SET_RESTOCK_POINTS = 'SET_RESTOCK_POINTS';
const SET_TOTAL_POINTS = 'SET_TOTAL_POINTS';
const SET_GOALS = 'SET_GOALS';
const SET_EARNINGS = 'SET_EARNINGS';
const SET_RESTOCK = 'SET_RESTOCK';
const SET_COSMETICS = 'SET_COSMETICS';

export default function reducer(state = INITIAL_STATE, action) {
    console.log("REDUCER HIT: Action =>", action);
    switch(action.type) {
        case SET_APPOINTMENTS:
        return Object.assign({}, state, { appointments: action.payload });
        
        case SET_APP_POINTS:
        return Object.assign({}, state, { appPoints: action.payload });
        
        case SET_GOAL_POINTS:
        return Object.assign({}, state, { goalPoints: action.payload });
        
        case SET_EARNINGS_POINTS:
        return Object.assign({}, state, { earningsPoints: action.payload });
        
        case SET_RESTOCK_POINTS:
        return Object.assign({}, state, { restockPoints: action.payload });
        
        case SET_TOTAL_POINTS:
        return Object.assign({}, state, { totalPoints: action.payload });
        
        case SET_GOALS:
        return Object.assign({}, state, { goals: action.payload });

        case SET_EARNINGS:
        return Object.assign({}, state, { earnings: action.payload });

        case SET_RESTOCK:
        return Object.assign({}, state, { restock: action.payload });

        case SET_COSMETICS:
        return Object.assign({}, state, { cosmetics: action.payload });
        
        default: return state;
    }
} 

export function setAppointments(appointments) {
    return {
        type: SET_APPOINTMENTS,
        payload: appointments
    }
}

export function setAppPoints(appPoints) {
    return {
        type: SET_APP_POINTS,
        payload: appPoints
    }
}
export function setGoalPoints(goalPoints) {
    return {
        type: SET_GOAL_POINTS,
        payload: goalPoints
    }
}
export function setEarningsPoints(earningsPoints) {
    return {
        type: SET_EARNINGS_POINTS,
        payload: earningsPoints
    }
}
export function setRestockPoints(restockPoints) {
    return {
        type: SET_RESTOCK_POINTS,
        payload: restockPoints
    }
}

export function setTotalPoints(totalPoints) {
    return {
        type: SET_TOTAL_POINTS,
        payload: totalPoints
    }
}

export function setGoals(goals) {
    return {
        type: SET_GOALS,
        payload: goals
    }
}

export function setEarnings(earnings) {
    return {
        type: SET_EARNINGS,
        payload: earnings
    }
}

export function setRestock(restock) {
    return {
        type: SET_RESTOCK,
        payload: restock
    }
}

export function setCosmetics(cosmetics) {
    return {
        type: SET_COSMETICS,
        payload: cosmetics
    }
}