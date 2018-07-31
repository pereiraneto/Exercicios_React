import React from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import {inc, dec, stepChanged} from './counterActions'

const Counter = props => (
    <div>
        <h1>{props.counter.number}</h1>
        <input onChange={props.stepChanged} value={props.counter.step} type="number"/>
        <button onClick={props.dec}>Dec</button>
        <button onClick={props.inc}>Inc</button>
    </div>
)

function mapStateToProps(state){
    return {
        counter: state.counter
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ inc, dec, stepChanged }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
