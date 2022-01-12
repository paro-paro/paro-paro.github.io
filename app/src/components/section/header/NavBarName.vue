<template>
    <div>
        <span @click="$emit('click', 'Home')">Antonio J Parody Guzmán</span>
    </div>
</template>

<script>
export default {
    name: 'NavBarName'
}
</script>

<style scoped>
    span {
        font-size: 20px;
        font-weight: 600;
        cursor: pointer;
    }
</style>