<template>
    <nav :class="'nav-bar'">
        <div :class="'container'">
            
            <div :class="'nav-bar-container-content'">                
                
                <div :class="'nav-item-1'"><span @click="scrollTo('Home')">Antonio J Parody Guzmán</span></div>
                
                <div :class="'nav-item-2'">
                    <ul>
                        <li 
                            v-for="value, idx in menu"
                            :key="idx">

                            <a v-if="value === 'Resume'" :href="require('@/assets/files/resume.pdf')"><span>{{ value }}</span></a>

                            <span v-else @click="scrollTo(value)">{{ value }}</span>
                        </li>
                    </ul>
                </div>

                <NavBarMenu :class="'nav-item-3'" @click="scrollTo"/>
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
            menu: ['Home', 'Skills', 'Experience', 'Contact', 'Resume']
        }
    },
    methods: {
        scrollTo (id) {
            document.getElementById(id).scrollIntoView()
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