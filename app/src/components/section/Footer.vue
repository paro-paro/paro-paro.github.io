<template>
    <footer :class="'footer'">
        <div :class="'container'">

            <div style="display: flex; justify-content: center; align-items: center; position: relative">

                <div style="text-align: center">
                    <div style="font-size: 14px">© Antonio Javier Parody Guzmán</div>
                    <div style="font-size: 14px; margin-top: 1rem;">Powered by <a :href="'https://vuejs.org/'" :target="'_blank'" :class="'link'"><span>Vue.js</span></a></div>
                </div>

                <div style="position: absolute; right: 0" :class="'arrow'">
                    <img :src="require('@/assets/icon/arrow-up-black.png')" style="cursor: pointer" @click="click()"/>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    methods: {
        click () {
            window.scrollTo(0, 0)
        }
    }
}
</script>

<style scoped>
    .footer {
        margin: 0;
        padding: 2rem 0;
        display: flex; justify-content: center;
    }
    .link {
        color: #42b983;
    }
    .link:hover {
        text-decoration: underline;
    }
    @media only screen and (max-width: 992px) {
        .arrow {
            display: none;
        }
    }
</style>