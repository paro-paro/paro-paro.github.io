<template>
    <div>
        <a v-if="is_resume" :href="require('@/assets/files/resume.pdf')"><span>{{ value }}</span></a>
        <span 
            v-else
            :class="class_"
            @click="$emit('click', value)">{{ value }}
        </span>
    </div>
</template>

<script>
export default {
    name: 'MenuItem',
    props: {
        idx: Number,
        value: String,
        menu: Array,
        is_resume: Boolean
    },
    data () {
        return {
            pageYOffset: undefined,
            offset: undefined
        }
    },
    mounted () {
        // contact section offset is not properly calculated if initData is triggered directly...
        // what I do not understand is why this.$nextTick(() => { this.initData() }) is not working...
        setTimeout(() => {
            this.initData()
        }, 500)
        
        window.addEventListener('resize', () => {
            this.initData()
        })
        
        window.addEventListener('scroll', () => {
            if (!this.is_resume) this.pageYOffset = window.pageYOffset
        })
    },
    watch: {
        is_scrolled () {
            this.updateParent()
        }
    },
    computed: {
        is_scrolled () {
            return this.is_resume
                ?
                    false
                :
                    (this.pageYOffset + 1 >= this.offset) && !this.is_any_menu_item_next_scrolled
        },
        class_ () {
            return this.is_scrolled ? 'underline' : ''
        },
        is_any_menu_item_next_scrolled () {
            return this.is_resume
                ?
                    []
                :
                    this.menu.slice(-this.menu.length + 1 + this.idx).map(item => item.is_scrolled).some(item => item)
        }
    },
    methods: {
        initData () {
            if (!this.is_resume) {
                this.pageYOffset = window.pageYOffset
                this.offset = Math.trunc(document.getElementById(this.value).getBoundingClientRect().top - document.body.getBoundingClientRect().top)
            }
        },
        updateParent () {
            this.$emit('update', { label: this.value, is_scrolled: this.is_scrolled })
        }
    }
}
</script>

<style scoped>
    a {
        color: inherit;
        text-decoration: none;
    }
    .underline {
        text-decoration: underline;
        text-underline-offset: 4px;
    }
</style>
