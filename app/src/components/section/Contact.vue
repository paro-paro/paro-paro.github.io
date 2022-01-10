<template>
    <section id="Contact" :class="'section'">
        <div :class="'container'">
            <div :class="'row'">
                
                <div :class="'col-12 col-lg-4'">
                    <h1 style="margin: 0; font-size: 30px; font-weight: 400;">Contact</h1>
                </div>

                <div :class="'col-12 col-lg-8'">
                    <el-form
                            id="Form"
                            ref="Form"
                            :model="form"
                            :rules="rules"
                            :hide-required-asterisk="true"
                            :show-message="true"
                            :label-position="label_position"
                            :label-width="'auto'"
                            :action="'https://formsubmit.co/6e2d41bf1e229914a814d7d8b06870da'"
                            :method="'POST'"
                            @submit.prevent.native="submit()"><!-- :target="'_blank'" -->
                        
                        <el-form-item
                                    :prop="'name'"
                                    :label="'Name'">
                            
                                <el-input
                                        v-model="form.name"
                                        :name="'name'"
                                        :type="'text'"
                                        :maxlength="55"
                                        :clearable="true">

                                </el-input>
                        </el-form-item>

                        <el-form-item
                                    :prop="'email'"
                                    :label="'Email'">
                            
                                <el-input
                                        v-model.trim="form.email"
                                        :name="'email'"
                                        :type="'text'"
                                        :clearable="true">

                                </el-input>
                        </el-form-item>

                        <el-form-item
                                    :prop="'message'"
                                    :label="'Message'">

                                <el-input
                                        v-model="form.message"
                                        :name="'message'"
                                        :type="'textarea'">

                                </el-input>
                        </el-form-item>

                        <el-form-item>
                            <el-button
                                        :class="'button'"
                                        :native-type="'submit'"
                                        :size="'medium'">Send
                            </el-button>
                        </el-form-item>

                        <input :type="'hidden'" :name="'_subject'" :value="'New paro-paro form contact'">
                    </el-form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Contact',
    data () {
        return {
            form: {
                name: '',
                email: '',
                message: ''
            },
            rules: {
                name: [
                    {
                        required: true,
                        message: 'Please fill in this field',
                        trigger: 'change'
                    }
                ],
                email: [
                    {
                        required: true,
                        message: 'Please fill in this field',
                        trigger: 'change'
                    },
                    {
                        type: 'email',
                        message: 'This email format is not valid',
                        trigger: 'blur'
                    }
                ],
                message: [
                    {
                        required: true,
                        message: 'Please fill in this field',
                        trigger: 'change'
                    }
                ]
            },
            screen_width: window.innerWidth > 0 ? window.innerWidth : screen.width // https://stackoverflow.com/questions/6850164/get-the-device-width-in-javascript
        }
    },
    mounted () {
        window.addEventListener('resize', () => this.screen_width = window.innerWidth > 0 ? window.innerWidth : screen.width)
    },
    computed: {
        label_position () {
            return this.screen_width < 992 ? 'top' : 'left'
        }
    },
    methods: {
        submit () {
            this.$refs.Form.validate(valid => {
                if (valid) document.getElementById('Form').submit()
                else return false
            })
        }
    }
}
</script>

<style scoped>
    .section {
        padding: 110px 2rem 110px 2rem;
        display: flex; justify-content: center;
        background: #eaf2fa;
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
            flex: 0 0 25%;
            max-width: 25%;
        }
    }

    @media only screen and (min-width: 992px) {
        .col-lg-8 {
            flex: 0 0 65%;
            max-width: 65%;
        }
    }
    

    @media only screen and (min-width: 992px) {
        /deep/ .el-form-item {
            margin-bottom: 40px;
        }
    }

    /deep/ .el-input__inner {
        height: 40px;
    }

    /deep/ .el-textarea__inner {
        min-height: 150px !important;
        font-family: inherit;
    }

    /deep/ .el-input__inner:focus {
        /*border: 0 !important;*/
        border-color: #795548 !important;
        /*box-shadow: 0 0 0 0.2rem #996b5b;*/
    }

    /deep/ .el-textarea__inner:focus {
        /*border: 0 !important;*/
        border-color: #795548 !important;
        /*box-shadow: 0 0 0 0.2rem #996b5b;*/
    }

    /deep/ .el-form-item__error {
        padding-top: 8px;
        font-family: roboto, sans-serif;
    }

    /deep/ .el-form-item.is-error .el-input__inner {
        border-color: #795548 !important;
    }

    /deep/ .el-form-item.is-error .el-textarea__inner {
        border-color: #795548 !important;
    }

    .button {
        color: #795548;
        border-color: #795548;
        background: transparent;
    }

    .button:hover {
        color: white;
        border-color: #795548;
        background: #795548;
    }

    .button:focus {
        color: white;
        border-color: #795548;
        background: #795548;
    }
</style>