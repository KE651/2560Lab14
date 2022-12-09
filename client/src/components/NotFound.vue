<template>
    <div>
        <h2>Regretfully, that page was not found.</h2>
        <div id="go-home-link">
            <!-- provide route -->
            Would you like to 
            <router-link 
            v-bind:to="{ name: 'StateList' }">go to the homepage?
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
            name: 'NotFound'
        }
</script>
