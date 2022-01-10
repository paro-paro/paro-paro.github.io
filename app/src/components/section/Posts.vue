<template>
    <section id="Posts" :class="'section'">
        <div :class="'container'">
            <div :class="'row'">
                <div :class="'col-1'">
                    <h1 style="margin: 0; font-size: 30px; font-weight: 400;">Posts</h1>
                </div>

                <div :class="'col-2'">
                    super posts here
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Posts'
}
</script>

<style scoped>
    .section {
        padding: 110px 2rem 110px 2rem;
        display: flex; justify-content: center;
        /*background: #eaf2fa;*/
    }
    .container {
        width: 100%;
        max-width: 1200px;
    }
    .row {
        display: flex;
        align-items: center;
    }
    .col-1 {
        flex: 0 0 25%;
        justify-content: center;
    }
    .col-2 {
        flex: 1 0 65%;
    }
</style>