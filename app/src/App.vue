<template>
    <div id="app">
        <NavBar/>
        <Home/>
        <Skills/>
        <Experience/>
        <Contact/>
        <Footer/>
    </div>
</template>

<script>
import NavBar     from '@/components/layout/NavBar'
import Footer     from '@/components/layout/Footer'

import Home       from '@/components/section/Home'
import Skills     from '@/components/section/Skills'
import Experience from '@/components/section/Experience'
import Contact    from '@/components/section/Contact'

// window.onscroll = () => {
//     var icon = document.getElementsByClassName('icon-down-right')[0]
//     if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
//         if (icon) icon.classList.add('hide-icon')
//     } else {
//         if (icon) icon.classList.remove('hide-icon')
//     }
// }

export default {
    name: 'App',
    components: {
        NavBar,
        Footer,
        Home,
        Skills,
        Experience,
        Contact
    },
    // created () {
    //     document.body.classList.add('light-mode')
    // },
    // watch: {
    //     is_light_mode (value) {
    //         value ? this.handleLight() : this.handleDark()
    //     }
    // },
    // computed: {
    //     ...mapState({
    //         is_light_mode: state => state.is_light_mode
    //     })
    // },
    // methods: {
    //     handleLight () {
    //         document.body.classList.remove('dark-mode')
    //         document.body.classList.add('light-mode')
    //     },
    //     handleDark () {
    //         document.body.classList.remove('light-mode')
    //         document.body.classList.add('dark-mode')
    //     }
    // }
}
</script>

<style>
    body, html {
        margin: 0 !important;
        padding: 0 !important;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        scroll-behavior: smooth;
        font-family: roboto, sans-serif;
        /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
        text-rendering: optimizeLegibility;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
    
    p {
        word-break: normal;
        text-justify: inter-word;
        line-height: 1.6;
        font-weight: 400;
        font-family: roboto, sans-serif;
        font-size: 17px;
    }
    
    [class^="gb-"]:not(.gb-base-icon) {
      font-family: roboto, sans-serif;
    }
    
    .m-0 {
        margin: 0;
    }

    .grow {
        transition: all .2s ease-in-out;
    }

    .grow:hover {
        transform: scale(1.2);
    }
    
    /*.el-input__inner {
        border: 1px solid #409EFF !important; 
    }

    .el-textarea__inner {
        border: 1px solid #409EFF !important;
    }*/

    .el-input__inner {
        border: 1px solid #C0C4CC !important; 
    }

    .el-textarea__inner {
        border: 1px solid #C0C4CC !important;
    }

    .el-input__inner::-webkit-input-placeholder {
        opacity: 0.6   !important;
        color: #212529 !important;
    }

    .el-textarea__inner::-webkit-input-placeholder {
        opacity: 0.6   !important;
        color: #212529 !important;
    }

    .el-input__icon {
       color: #212529 !important;
    }

    /* responsive design: mobile first */ /* screen size < 576px */

    .container {
        width: 100%;
        margin-right: auto;
        margin-left: auto;
        background: red;
    }

    @media only screen and (min-width: 576px) { /* 576px <= screen size < 768px */
        .container {
            background: blue;
            max-width: 540px;
        }
    }

    @media only screen and (min-width: 768px) { /* 768px <= screen size < 992px */
        .container {
            background: yellow;
            max-width: 720px;
        }
    }

    @media only screen and (min-width: 992px) { /* 992px <= screen size < 1200px */
        .container {
            background: green;
            max-width: 960px;
        }
    }

    @media only screen and (min-width: 1200px) { /* screen size >= 1200px */
        .container {
            background: purple;
            max-width: 1200px;
        }
    }

    /*.ml-2 {
        margin-left: 0.5rem;
    }
    
    .icon-top-right {
        z-index: 20;
        position: fixed;
        right: 5%; 
        top: 2%;
        cursor: pointer;
    }
    
    .icon-down-right {
        z-index: 20;
        position: fixed;
        right: 5%;
        bottom: 2%;
        cursor: pointer;
    }
    
    .hide-icon {
        display: none;
    }*/
    
    /*.light-mode {
        background-color: #ecf5fd;
        background-color: white;
    }*/
    
    /*.dark-mode {
        background-color: #1b2431;
    }*/
    
    /*.light-font {
        /* 
    }*/
    
    /*/*/
</style>
