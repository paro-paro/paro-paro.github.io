<template>
    <section id="Home" :class="'section'">
        <div :class="'container'">
            <div :class="'row'">
                <div :class="'col-12 col-lg-4'">
                    <HomeLeft/>
                </div>

                <div :class="'col-12 col-lg-8'">
                    <HomeRight/>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import HomeLeft  from './home/HomeLeft'
import HomeRight from './home/HomeRight'

export default {
    name: 'Home',
    components: {
        HomeLeft,
        HomeRight
    }
}
</script>

<style scoped>
    .section {
        padding: 140px 2rem 110px 2rem;
        display: flex; justify-content: center; align-items: center;
    }
    .row {
        display: flex; flex-wrap: wrap;
    }
    .col-12 {
        flex: 0 0 100%;
        max-width: 100%;
    }
    @media only screen and (min-width: 992px) {
        .col-lg-4 {
            flex: 0 0 36%;
            max-width: 36%;
        }
    }
    @media only screen and (min-width: 992px) {
        .col-lg-8 {
            flex: 0 0 64%;
            max-width: 64%;
        }
    }
</style>