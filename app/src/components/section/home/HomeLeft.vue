<template>
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
                    <a :href="require('@/assets/files/resume.pdf')"><img :src="require('@/assets/icon/cv.png')" :class="'grow'" :height="32" style="cursor: pointer"/></a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeLeft'
}
</script>

<style scoped>
    .avatar {
        width: 270px;
        height: 270px;
        margin: 0 auto;
        object-fit: cover;
    }
    .avatar-circle {
        border-radius: 50%;
    }
    .link:hover {
        text-decoration: underline;
    }
</style>