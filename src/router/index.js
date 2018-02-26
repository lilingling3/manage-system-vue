import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'history', // 路由去掉# 路径添加名字
    routes: [
        {
            path: '/',
            redirect: '/login',
            name:'Login'
        },
        {
            path: '/readme',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            // name:'Home',
            children:[
                {
                    path: '/',
                    component: resolve => require(['../components/page/Readme.vue'], resolve),
                    name:'Readme'
                },
                {
                    path: '/basetable',
                    component: resolve => require(['../components/page/BaseTable.vue'], resolve),
                    name:'basetable'
                },
                {
                    path: '/vuetable',
                    component: resolve => require(['../components/page/VueTable.vue'], resolve) ,    // vue-datasource组件
                    name:'vuetable'
                },
                {
                    path: '/baseform',
                    component: resolve => require(['../components/page/BaseForm.vue'], resolve),
                    name:'baseform'
                },
                {
                    path: '/vueeditor',
                    component: resolve => require(['../components/page/VueEditor.vue'], resolve),    // Vue-Quill-Editor组件
                    name:'vueeditor'
                },
                {
                    path: '/markdown',
                    component: resolve => require(['../components/page/Markdown.vue'], resolve) ,    // Vue-Quill-Editor组件
                    name:'markdown'
                },
                {
                    path: '/upload',
                    component: resolve => require(['../components/page/Upload.vue'], resolve) ,      // Vue-Core-Image-Upload组件
                    name:'upload'
                },
                {
                    path: '/basecharts',
                    component: resolve => require(['../components/page/BaseCharts.vue'], resolve),   // vue-schart组件
                    name:'basecharts'
                },
                {
                    path: '/drag',
                    component: resolve => require(['../components/page/DragList.vue'], resolve),    // 拖拽列表组件
                    name:'drag'
                }
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve),
            name:'login'
        },
    ]
})
