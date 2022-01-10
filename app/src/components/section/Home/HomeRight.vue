<template>
    <div>
        <h1 style="margin: 0; font-size: 35px; font-weight: 400;">Biography</h1>
                    
        <p>Hey! Nice to meet you. I'm Antonio and I like to consider myself a learning enthusiast.</p>
        
        <p>It was after my first two jobs as a traditional engineer when I got my first contact with software development and I truly fell in love with it.</p>

        <p>This made me change the course of my career, getting my first tech related job at SuperTech, where I could learnt the basics of start-ups business models working as product manager.</p>

        <p>This experience, along with a very strong determination to become a software developer, allowed me to co-found <a style="color: #795548" :class="'link'" :href="'https://pod.coop/'" :target="'_blank'" >Plant On Demand</a>, the first online sales and management platform for the short food supply chain.</p>

        <div :class="'row'">
            <div :class="'col-3'">
                <h2>Interests</h2>
                <ul>
                    <li>Data driven web applications</li>
                    <li>Software development</li>
                    <li>Education</li>
                    <li>History, football and music</li>
                </ul>
            </div>
            <div :class="'col-4'">
                <h2>Education</h2>
                <ul>
                    <li>Master in Electrical Engineering</li>
                    <li>Master in Secondary Education</li>
                    <li>Certificate Advanced English (C1)</li>
                    <li>1 year exchange program at University of Dayton, EEUU</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeRight'
}
</script>

<style scoped>
    li {
        padding: .3rem;
        font-size: 17px;
    }
    .row {
        display: flex;
        flex-wrap: wrap;
    }
    .col-3 {
        flex: 38;
    }
    .col-4 {
        flex: 62;
    }
</style>