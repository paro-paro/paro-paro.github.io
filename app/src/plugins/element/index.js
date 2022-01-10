import Vue from 'vue'
import { 
    Button,
    Input,
    Collapse,
    CollapseItem,
    Form,
    FormItem,
} from 'element-ui'

Vue.use(Button)
Vue.use(Input)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Form)
Vue.use(FormItem)

import lang   from 'element-ui/lib/locale/lang/es'
import locale from 'element-ui/lib/locale'

locale.use(lang)

