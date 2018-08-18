<style lang="less">
    @import '../styles/menu.less';
</style>

<template>
    <div>
        <template v-for="item in menuList">
            <MenuItem v-if="!item.children" :name="item.name" :key="'menuitem' + item.name">
                <Icon :type="item.icon || item.icon" :size="iconSize" :key="'menuicon' + item.name"></Icon>
                <span class="layout-text" :key="'title' + item.name">{{ itemTitle(item) }}</span>
            </MenuItem>

            <Submenu v-if="item.children && item.children.length >= 1" :name="item.name" :key="item.name">
                <template slot="title">
                    <Icon :type="item.icon" :size="iconSize"></Icon>
                    <span class="layout-text">{{ itemTitle(item) }}</span>
                </template>


                <sidebar-menu-list :menuList="item.children" :iconSize="iconSize" @on-change="changeMenu"></sidebar-menu-list>

                <!--<MenuItem v-if="!child.children" :name="child.name" :key="'menuitem' + child.name">-->
                <!--<Icon :type="child.icon || child.icon" :size="iconSize" :key="'menuicon' + child.name"></Icon>-->
                <!--<span class="layout-text" :key="'title' + child.name">{{ itemTitle(child) }}</span>-->
                <!--</MenuItem>-->

                <!--<Submenu v-if="child.children && child.children.length >= 1" :name="child.name" :key="child.name">-->
                <!--<template slot="title">-->
                <!--<Icon :type="child.icon" :size="iconSize"></Icon>-->
                <!--<span class="layout-text">{{ itemTitle(child) }}</span>-->
                <!--</template>-->

                <!--<template v-for="child2 in child.children">-->
                <!--<MenuItem :name="child2.name" :key="'menuitem' + child2.name">-->
                <!--<Icon :type="child2.icon" :size="iconSize" :key="'icon' + child2.name"></Icon>-->
                <!--<span class="layout-text" :key="'title' + child2.name">{{ itemTitle(child2) }}</span>-->
                <!--</MenuItem>-->
                <!--</template>-->
                <!--</Submenu>-->
            </Submenu>
        </template>
    </div>
</template>

<script>
    import sidebarMenuList from './sidebarMenuList.vue';

    export default {
        name: 'sidebarMenuList',
        props: {
            menuList: Array,
            iconSize: Number,
            menuTheme: {
                type: String,
                default: 'dark'
            },
            openNames: {
                type: Array
            }
        },
        methods: {
            changeMenu (active) {
                this.$emit('on-change', active);
            },
            itemTitle (item) {
                if (typeof item.title === 'object') {
                    return this.$t(item.title.i18n);
                } else {
                    return item.title;
                }
            }
        },
        updated () {

        },
        mounted () {

        }
    };
</script>
