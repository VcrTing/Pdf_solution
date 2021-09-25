<template>
    <button @click="done">
        Go
    </button>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                
            }
        },
        methods: {
            done() {
                this.$emit('done_Father')
            }
        }
    }
</script>

<style lang="css" scoped>
button {
    display: inline-block;
    position: fixed;
    top: 80vh;
    right: 0;
    margin-right: 12px;
    padding: 12px;
    font-size: 18px;
    background: rgb(70, 146, 122);
    border: 4px solid rgb(197, 234, 222);
    border-radius: 60px;
    color: white
}    
</style>