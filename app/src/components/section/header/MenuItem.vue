<template>
    <div>
        <a v-if="value === 'Resume'" :href="href"><span>{{ value }}</span></a>
        <span v-else @click="$emit('click', value)">{{ value }}</span>
    </div>
</template>

<script>
export default {
    name: 'MenuItem',
    props: {
        value: String
    },
    data () {
        return {
            href: require('@/assets/files/resume.pdf')
        }
    }
}
</script>

<style scoped>
    a {
        color: inherit;
        text-decoration: none;
    } 
</style>