<template>
    <nav :class="'nav-bar'">
        <div :class="'container'">
            <div :class="'div'">               
                <NavBarName 
                            :class="'item-1'"
                            @click="scrollTo"/>
                
                <NavBarMenu
                            :class="'item-2'"
                            :menu="menu"
                            @click="scrollTo"/>

                <NavBarMenuDrop 
                            :class="'item-3'"
                            :menu="menu"
                            @click="scrollTo"/>
            </div>
        </div>
    </nav>
</template>

<script>
import NavBarName     from './header/NavBarName'
import NavBarMenu     from './header/NavBarMenu'
import NavBarMenuDrop from './header/NavBarMenuDrop'

export default {
    name: 'Header',
    components: {
        NavBarName,
        NavBarMenu,
        NavBarMenuDrop
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
    .nav-bar {
        height: 50px;
        z-index: 1030;
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        padding: 0 2rem 0 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #f7f7f7;
        box-shadow: 0 0.125rem 0.25rem 0 rgb(0 0 0 / 11%);
    }

    @media only screen and (min-width: 992px) {
        .nav-bar {
            height: 70px;
        }
    }

    .div {
        display: flex; justify-content: flex-end; align-items: center;
    }

    .item-1 {
        margin-right: auto;
    }

    @media only screen and (max-width: 768px) {
        .item-2 {
            display: none;
        }
    }

    @media only screen and (min-width: 768px) {
        .item-3 {
            display: none;
        }
    }
</style>