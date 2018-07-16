import Main from '@/views/Main.vue';
import parentView from '@/views/main-components/parent-view';

// 不作为Main组件的子页面展示的页面单独写，如下
export const loginRouter = {
    path: '/login',
    name: 'login',
    meta: {
        title: 'Login - 登录'
    },
    component: () => import('@/views/login.vue')
};

export const page404 = {
    path: '/*',
    name: 'error-404',
    meta: {
        title: '404-页面不存在'
    },
    component: () => import('@/views/error-page/404.vue')
};

export const page403 = {
    path: '/403',
    meta: {
        title: '403-权限不足'
    },
    name: 'error-403',
    component: () => import('@//views/error-page/403.vue')
};

export const page500 = {
    path: '/500',
    meta: {
        title: '500-服务端错误'
    },
    name: 'error-500',
    component: () => import('@/views/error-page/500.vue')
};

export const locking = {
    path: '/locking',
    name: 'locking',
    component: () => import('@/views/main-components/lockscreen/components/locking-page.vue')
};

// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
    path: '/',
    name: 'otherRouter',
    component: Main,
    children: [
        { path: 'ownspace', title: '个人中心', name: 'ownspace_index', component: () => import('@/views/own-space/own-space.vue') }
    ]
};

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [
    {
        path: '/home',
        icon: 'pie-graph',
        name: 'home_index',
        title: '首页',
        component: () => import('@/views/home/home.vue')
    },
    {
        path: '/ceshi',
        icon: 'pie-graph',
        name: 'ceshu',
        title: 'cesji',
        component: () => import('@/views/form/add.vue')
    },
    {
        path: '/form',
        icon: 'compose',
        name: 'form',
        title: '表单',
        component: parentView,
        children: [
            { path: 'add', title: '基础表单', name: 'add', icon:'edit',component: () => import('@/views/form/add.vue') },
            { path: 'workflow', title: '分步表单', name: 'workflow', icon: 'arrow-swap', component: () => import('@/views/form/work-flow/work-flow.vue') }
        ]
    },
    {
        path: '/tables',
        icon: 'ios-grid-view',
        name: 'tables',
        title: '表格',
        component: parentView,
        children: [
            { path: 'list', title: '标准列表', name: 'list', icon: 'arrow-move', component: () => import('@/views/tables/list.vue') },
            { path: 'exportableTable', title: '表格导出数据', name: 'exportable-table', icon: 'code-download', component: () => import('@/views/tables/exportable-table.vue') },
            { path: 'table2image', title: '表格转图片', name: 'table-to-image', icon: 'images', component: () => import('@/views/tables/table-to-image.vue')}
        ]
    },
    {
        path: '/component',
        icon: 'social-buffer',
        name: 'component',
        title: '组件',
        component: parentView,
        children: [
            {
                path: 'text-editor',
                icon: 'compose',
                name: 'text-editor',
                title: '富文本编辑器',
                component: () => import('@/views/my-components/text-editor/text-editor.vue')
            },
            {
                path: 'image-editor',
                icon: 'crop',
                name: 'image-editor',
                title: '图片预览编辑',
                component: () => import('@/views/my-components/image-editor/image-editor.vue')
            }
        ]
    },
    {
        path: '/multilevel',
        name: 'multilevel',
        icon: 'android-menu',
        title: '多级菜单',
        component: parentView,
        children: [
            {
                path: 'level_2_1',
                name: 'level_2_1',
                icon: 'android-menu',
                title: '二级-1',
                authority:['admin'],
                component: () => import('@/views/multilevel/level-1.vue')
            },
            {
                path: 'level_2_2',
                name: 'level_2_2',
                icon: 'android-menu',
                title: '二级-2',
                component: parentView,
                children: [
                    {
                        path: 'level_2_2_1',
                        name: 'level_2_2_1',
                        icon: 'android-menu',
                        title: '三级',
                        component: () => import('@/views/multilevel/level-2/level-3/level-3-1.vue')
                    }
                ]
            },
            {
                path: 'level_2_3',
                name: 'level_2_3',
                icon: 'android-menu',
                title: '二级-3',
                component: parentView,
                authority:['admin'],
                children: [
                    {
                        path: 'level_2_3_1',
                        name: 'level_2_3_1',
                        icon: 'android-menu',
                        title: '三级-1',
                        authority:['admin'],
                        component: () => import('@/views/multilevel/level-2/level-2-1.vue')
                    },
                    {
                        path: 'level_2_3_2',
                        name: 'level_2_3_2',
                        icon: 'android-menu',
                        title: '三级-2',
                        component: () => import('@/views/multilevel/level-2/level-2-2.vue')
                    }
                ]
            }
        ]
    },
    {
        path: '/error-page',
        icon: 'android-sad',
        title: '异常页',
        name: 'errorpage',
        component: parentView,
        children: [
            { path: '403', title: '403', name: '403', component: () => import('@/views/error-page/403.vue') },
            { path: '404', title: '404', name: '404', component: () => import('@/views/error-page/404.vue') },
            { path: '500', title: '500', name: '500', component: () => import('@/views/error-page/500.vue') }
        ]
    }
];
export const mainRouter = {
    path: '/',
    name: 'mainRouter',
    component: Main,
    redirect: '/home',
    children: appRouter
};

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
    loginRouter,
    locking,
    mainRouter,
    otherRouter,
    page500,
    page403,
    page404
];
