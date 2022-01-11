<template>
    <nav :class="'nav-bar'">
        <div :class="'container'">
            
            <div :class="'nav-bar-container-content'">                
                
                <div :class="'nav-item-1'"><a :href="'#Home'"><span>Antonio J Parody Guzmán</span></a></div>
                
                <div :class="'nav-item-2'">
                    <ul>
                        <li 
                            v-for="value, idx in menu"
                            :key="idx">

                            <a v-if="value === 'Resume'" :href="require('@/assets/files/resume.pdf')"><span>{{ value }}</span></a>

                            <a v-else :href="`#${value}`"><span>{{ value }}</span></a>
                        </li>
                    </ul>
                </div>

                <NavBarMenu :class="'nav-item-3'"/>
                <!-- <div :class="'nav-item-4'"><img :src="require('@/assets/icon/moon-2.png')" :height="25"/></div> -->
            </div>
        </div>
    </nav>
</template>

<script>
import NavBarMenu from '../section/NavBar/NavBarMenu'

export default {
    name: 'NavBar',
    components: {
        NavBarMenu
    },
    data () {
        return {
            menu: ['Home', 'Skills', 'Experience', 'Contact', 'Resume'],
            // menu: ['Home', 'Skills', 'Experience', 'Posts', 'Projects', 'Contact', 'Resume']
        }
    }
}
</script>

<style scoped>
    a {
        color: inherit;
        text-decoration: none;
    } 

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

    .nav-bar {
        z-index: 1030;
        height: 70px;
        
        position: fixed; top: 0; right: 0; left: 0;
        padding: 0 2rem 0 2rem;
        
        background: #f7f7f7;
        box-shadow: 0 0.125rem 0.25rem 0 rgb(0 0 0 / 11%);
        
        display: flex; justify-content: center; align-items: center;
    }

    .nav-bar-container-content {
        display: flex; justify-content: flex-end; align-items: center;
    }

    .nav-item-1 {
        margin-right: auto;
        font-size: 20px;
        font-weight: 600;
        cursor: pointer;
    }

    @media only screen and (max-width: 768px) {
        .nav-item-2 {
            display: none;
        }
    }

    @media only screen and (min-width: 768px) {
        .nav-item-3 {
            display: none;
        }
    }
</style>