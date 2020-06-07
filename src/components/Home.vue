<template>
    <div>
        <h1>Trade Or View Portfolio</h1>
        <h6>You May Save & Load Your Data</h6>
        <h6>Click On EndDay To Begin New Day</h6>
        <hr>
        <p>Your Funds :  {{ funds | currency }}</p>
    </div>
</template>

<script>
export default {
    computed:{
        funds(){
            return this.$store.getters.funds;
        }
    }
}
</script>