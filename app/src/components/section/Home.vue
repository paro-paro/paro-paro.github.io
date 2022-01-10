<template>
    <section id="Home" :class="'section'">
        <div :class="'container'">
            <div :class="'row'">
                
                <div :class="'col-1'">
                    <div style="display: flex; flex-direction: column; text-align: center;">
                        
                        <img :class="'avatar avatar-circle'" :src="require('@/assets/img/profile.jpg')">
                        

                        <div>
                            <h2 style="margin: 1.5rem 0 0 0; font-size: 30px; font-weight: 400">Antonio J Parody Guzmán</h2>
                            <h3 style="margin: 2rem 0 0 0">Co-Founder - Full Stack Developer</h3>
                            
                            <h4 style="color: #795548; margin: 1rem 0 0 0">
                                <a :class="'link'" :href="'https://pod.coop/'" :target="'_blank'" >Plant On Demand</a>
                            </h4>
                        </div>

                        <div style="margin-top: 3rem">
                            <ul style="display: flex; list-style: none; justify-content: center; align-items: center; margin: 0; padding: 0; gap: 5px">
                                
                                <li><a :href="'https://www.linkedin.com/in/aparody/'" :target="'_blank'"><img :class="'grow'" :src="require('@/assets/icon/linkedin.png')" :height="32"/></a></li>
                                <li><a :href="'https://github.com/paro-paro'"         :target="'_blank'"><img :class="'grow'" :src="require('@/assets/icon/github.png')"/></a></li>
                                
                                <li>
                                    <a :href="'https://formsubmit.co/el/seyuvo'"><img :src="require('@/assets/icon/gmail.png')" :class="'grow'" :height="35" style="cursor: pointer"/></a>
                                </li>

                                <!-- <li>
                                    <a :href="'mailto:aparodyg@gmail.com'"><img :src="require('@/assets/icon/gmail.png')" :class="'grow'" :height="35" style="cursor: pointer"/></a>
                                </li> -->
                                
                                <li>
                                    <a :href="require('@/assets/files/resume.pdf')" :target="'_blank'"><img :src="require('@/assets/icon/cv.png')" :class="'grow'" :height="32" style="cursor: pointer"/></a>
                                </li>
                            </ul>
                        </div>
                    </div>


                </div>

                <div :class="'col-2'">
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
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style scoped>
    li {
        padding: .3rem;
        font-size: 17px;
    }
    .section {
        padding: 140px 2rem 110px 2rem;
        display: flex; justify-content: center; align-items: center;
    }
    .row {
        display: flex;
    }
    .col-1 {
        flex: 36;
        justify-content: center;
    }
    .col-2 {
        flex: 64;
    }
    .col-3 {
        flex: 38;
    }
    .col-4 {
        flex: 62;
    }
    .avatar {
        width: 270px;
        height: 270px;
        margin: 0 auto;
        object-fit: cover
    }
    .avatar-circle {
        border-radius: 50%;
    }
    .link:hover {
        text-decoration: underline;
    }
</style>