<template>
    <div>
        <el-dropdown 
                    :trigger="'click'"
                    :placement="'bottom-start'">
            
            <span><img :src="require('@/assets/icon/menu.png')" :height="25" style="cursor: pointer"/></span>
            
            <el-dropdown-menu :slot="'dropdown'" :class="'dropdown-menu'">
                <el-dropdown-item 
                                v-for="value, idx in menu"
                                :key="idx">

                        <div>
                            <a v-if="value === 'Resume'" :href="require('@/assets/files/resume.pdf')" :target="'_blank'"><span>{{ value }}</span></a>

                            <a v-else :href="`#${value}`"><span>{{ value }}</span></a>
                        </div>
                </el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>            
    </div>
</template>

<script>
export default {
    name: 'NavBarMenu',
    data () {
        return {
            menu: ['Home', 'Skills', 'Experience', 'Contact', 'Resume']
        }
    }
}
</script>

<style scoped>
    .dropdown-menu {
        /*width: 60%;*/
        background: #f7f7f7;
    }
</style>