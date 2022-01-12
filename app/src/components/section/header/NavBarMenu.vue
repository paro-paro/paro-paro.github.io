<template>
    <div>
        <ul>
            <li 
                v-for="value, idx in menu"
                :key="idx">

                <MenuItem :value="value" @click="$emit('click', $event)"/>
            </li>
        </ul>
    </div>
</template>

<script>
import MenuItem from './MenuItem'

export default {
    name: 'NavBarMenu',
    components: {
        MenuItem
    },
    props: {
        menu: Array
    }
}
</script>

<style scoped>
    ul {
        list-style: none;
        display: flex;
        gap: 15px;
    }

    li {
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
    }
</style>
