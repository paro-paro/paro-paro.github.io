<template>
    <div id="app">
        <Header/>
        <Home/>
        <Skills/>
        <Experience/>
        <Contact/>
        <Footer/>
    </div>
</template>

<script>
import Header     from '@/components/section/Header'
import Home       from '@/components/section/Home'
import Skills     from '@/components/section/Skills'
import Experience from '@/components/section/Experience'
import Contact    from '@/components/section/Contact'
import Footer     from '@/components/section/Footer'

export default {
    name: 'App',
    components: {
        Header,
        Home,
        Skills,
        Experience,
        Contact,
        Footer
    }
}

// for light/dark mode
// in created => document.body.classList.add('light-mode'). Use watcher to update document.body.classList using 
// document.body.classList.remove('dark-mode')
// document.body.classList.add('light-mode')

</script>

<style>
    body, html {
        font-family: roboto, sans-serif;

        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;

        scroll-behavior: smooth;
        text-rendering: optimizeLegibility;

        margin: 0  !important;
        padding: 0 !important;
    }

    /* responsive design: mobile first */ /* screen size < 576px */

    .container {
        width: 100%;
        margin-right: auto;
        margin-left: auto;
        /*background: red;*/
    }

    @media only screen and (min-width: 576px) { /* 576px <= screen size < 768px */
        .container {
            /*background: blue;*/
            max-width: 540px;
        }
    }

    @media only screen and (min-width: 768px) { /* 768px <= screen size < 992px */
        .container {
            /*background: yellow;*/
            max-width: 720px;
        }
    }

    @media only screen and (min-width: 992px) { /* 992px <= screen size < 1200px */
        .container {
            /*background: green;*/
            max-width: 960px;
        }
    }

    @media only screen and (min-width: 1200px) { /* screen size >= 1200px */
        .container {
            /*background: purple;*/
            max-width: 1200px;
        }
    }

    /* override native html elements classes */

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

    /* override element ui classes */

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

    .popper__arrow {
        display: none !important;
    }

    /* utility classes (global) */

    .m-0 {
        margin: 0;
    }

    .grow {
        transition: all .2s ease-in-out;
    }

    .grow:hover {
        transform: scale(1.2);
    }

    /* no idea what this shit is... */

    [class^="gb-"]:not(.gb-base-icon) {
      font-family: roboto, sans-serif;
    }
</style>
