<template>
    <div>
        <ul>
            <li v-for="value, idx in labels" :key="idx">
                <MenuItem 
                        :idx="idx"
                        :value="value"
                        :menu="menu"
                        :is_resume="value === 'Resume'"
                        @update="$emit('update', $event)"
                        @click="$emit('click', $event)"/>
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
    },
    computed: {
        labels () {
            return this.menu.map(item => item.label)
        }
    }
}
</script>

<style scoped>
    ul {
        display: flex;
        gap: 15px;
        list-style: none;
    }

    li {
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
    }
</style>
