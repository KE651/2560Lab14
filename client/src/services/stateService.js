import axios from 'axios'
// import { response } from 'express'
export default {
    getAllStates() { // router request to get all the states
        console.log('getAllStates')
        return axios.get('/api/states').then( response => {
            return response.data
        })
    },
    setVisited(stateName, visited) { // router request to toggle visited status for StateName
        console.log("stateService.js, setVisited for ", stateName, visited)
        return axios.patch(`/api/state/${stateName}`, { visited: visited })
        .then(response => {
            return response.data
        })
    },
    
    getOneState(stateName) { // get information for one specific state (stateName)
        console.log('getOneState ', stateName)
        return axios.get(`/api/state/${stateName}`).then(response => {
            return response.data
        })
    },
    getVisitedStates() {
        console.log('getVisitedStates stateService.js')
        return axios.get('/api/states_visited').then( response => {
            return response.data
        })
    } // this is not causing the errors

}   // calls axios to get/prepare JSON data from the routes that are defined
