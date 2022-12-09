<template>
    <div>
        <states-visited v-bind:states="states"></states-visited>
        <h3>You have visited {{ totalVisited }} {{ units }}:</h3>
        <p id="states-visited-list" v-for="state in states" v-bind:key="state.name">
            {{ state.name }} </p>
        
        <p id="all-visited-message" v-if="areAllVisited">You have visited everywhere!</p>
    </div>
</template>

<script>
console.log('statesvisited.vue')
// show the states that have been visited
export default {
    name: 'StatesVisited',
    props: {
        states: Array },
    mounted() {
        this.getVisitedStates()
    },

    methods: { // new function similar to fetchAllStates from StateList
        getVisitedStates() { // get list of visited states
            console.log('getVisitedStates method in StatesVisited.vue')
            this.$stateService.getVisitedStates().then(states => {
                this.states = states
            }).catch(err => {
                alert('Sorry, unable to fetch list of states.')
                console.error(err)
            })
    } },
    computed: {
        totalVisited() {
            let visitedCount = 0
            let visitedStates = [] // empty array for states
            this.states.forEach(state => {
                if (state.visited) {
                    visitedCount++
                    visitedStates.push(state.name)  }
            }) // end forEach
            return visitedCount, visitedStates
        }, // end totalVisited

        areAllVisited() {
            return this.totalVisited === this.states.length  },
        units() {
            if (this.totalVisited === 1) {
                return 'state'
            } else {
                return 'states'
            }
        } // end units
    } // end computed
} // end export


</script>
<style scoped>
#all-visited-message {
    color: purple;
    font-weight: 600; }
#states-visited-list {
    color: darkgreen;
    font-family: sans-serif;
    font-style: italic;
    font-size: medium;
}
</style>