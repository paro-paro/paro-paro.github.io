<template>
    <div>
        <el-dropdown 
                    :trigger="'click'"
                    :placement="'bottom-end'">
            
            <span><img :src="require('@/assets/icon/menu.png')" :height="20" style="cursor: pointer"/></span>
            
            <el-dropdown-menu :slot="'dropdown'" :class="'dropdown-menu'">
                <el-dropdown-item 
                                v-for="value, idx in menu"
                                :key="idx">

                        <MenuItem :value="value" @click="$emit('click', $event)"/>
                </el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>            
    </div>
</template>

<script>
import MenuItem from './MenuItem'

export default {
    name: 'NavBarMenuDrop',
    components: {
        MenuItem
    },
    props: {
        menu: Array
    }
}
</script>

<style scoped>
    .dropdown-menu {
        background: #f7f7f7;
    }
</style>
