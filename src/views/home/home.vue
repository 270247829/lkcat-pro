<style lang="less">
    @import "./home.less";
    @import "../../styles/common.less";
</style>
<template>
    <div class="home-main">
        <Row :gutter="15">
            <Col :xs="24" :sm="12" :md="6" :style="{marginBottom: '10px'}">
                <infor-card
                    id-name="user_created_count"
                    :end-val="count.createUser"
                    iconType="android-person"
                    color="#2d8cf0"
                    intro-text="访客数量"
                ></infor-card>
            </Col>
            <Col :xs="24" :sm="12" :md="6" :style="{marginBottom: '10px'}">
                <infor-card
                    id-name="visit_count"
                    :end-val="count.visit"
                    iconType="android-chat"
                    color="#64d572"
                    :iconSize="50"
                    intro-text="留言数量"
                ></infor-card>
            </Col>
            <Col :xs="24" :sm="12" :md="6" :style="{marginBottom: '10px'}">
                <infor-card
                    id-name="collection_count"
                    :end-val="count.collection"
                    iconType="ios-game-controller-b"
                    color="#ffd572"
                    intro-text="消费数量"
                ></infor-card>
            </Col>
            <Col :xs="24" :sm="12" :md="6" :style="{marginBottom: '10px'}">
                <infor-card
                    id-name="transfer_count"
                    :end-val="count.transfer"
                    iconType="android-alert"
                    color="#f25e43"
                    intro-text="预警数量"
                ></infor-card>
            </Col>
        </Row>
        <Row :gutter="10" class="margin-top-10 ">
            <Col :md="24" :lg="16" :style="{marginBottom: '10px'}">
                <Card >
                    <p slot="title" class="card-title">
                        <Icon type="android-map"></Icon>
                        地区散点图
                    </p>
                    <div class="map-height">
                        <homeMap></homeMap>
                    </div>
                </Card>
            </Col>
            <Col :md="24" :lg="8" :style="{marginBottom: '10px'}">
                <Card>
                    <p slot="title" class="card-title">
                        <Icon type="ios-pulse-strong"></Icon>
                        数据百分比
                    </p>
                    <div class="map-height">
                        <liquidFill></liquidFill>
                    </div>
                </Card>
            </Col>
        </Row>
        <Row class="margin-top-10">
            <Card>
                <p slot="title" class="card-title">
                    <Icon type="ios-shuffle-strong"></Icon>
                    各区县统计
                </p>
                <div class="line-chart-con">
                    <service-requests></service-requests>
                </div>
            </Card>
        </Row>
        <Row :gutter="10" class="margin-top-10">
            <Col :md="24" :lg="8" :style="{marginBottom: '10px'}">
                <Card>
                    <p slot="title" class="card-title">
                        <Icon type="android-map"></Icon>
                        每日数量
                    </p>
                    <div class="data-source-row">
                        <visite-volume></visite-volume>
                    </div>
                </Card>
            </Col>
            <Col :md="24" :lg="8" :style="{marginBottom: '10px'}">
                <Card>
                    <p slot="title" class="card-title">
                        <Icon type="ios-pulse-strong"></Icon>
                        数据百分比
                    </p>
                    <div class="data-source-row">
                        <data-source-pie></data-source-pie>
                    </div>
                </Card>
            </Col>
            <Col :md="24" :lg="8">
                <Card>
                    <p slot="title" class="card-title">
                        <Icon type="android-wifi"></Icon>
                        数据折线图
                    </p>
                    <div class="data-source-row">
                        <user-flow></user-flow>
                    </div>
                </Card>
            </Col>
        </Row>

    </div>
</template>

<script>
import cityData from './map-data/get-city-value.js';
import homeMap from './components/map.vue';
import liquidFill from './components/liquidFill.vue';

import dataSourcePie from './components/dataSourcePie.vue';
import visiteVolume from './components/visiteVolume.vue';
import serviceRequests from './components/serviceRequests.vue';
import userFlow from './components/userFlow.vue';
import countUp from './components/countUp.vue';
import inforCard from './components/inforCard.vue';
import mapDataTable from './components/mapDataTable.vue';
import toDoListItem from './components/toDoListItem.vue';

export default {
    name: 'home',
    components: {
        homeMap,
        liquidFill,
        dataSourcePie,
        visiteVolume,
        serviceRequests,
        userFlow,
        countUp,
        inforCard,
        mapDataTable,
        toDoListItem
    },
    data () {
        return {
            toDoList: [
                {
                    title: '去LKCat官网学习完整的LKCat组件'
                },
                {
                    title: '去LKCat官网学习完整的LKCat组件'
                },
                {
                    title: '去LKCat官网学习完整的LKCat组件'
                },
                {
                    title: '去LKCat官网学习完整的LKCat组件'
                },
                {
                    title: '去LKCat官网学习完整的LKCat组件'
                }
            ],
            count: {
                createUser: 678,
                visit: 5672,
                collection: 3588931,
                transfer: 2395034
            },
            cityData: cityData,
            showAddNewTodo: false,
            newToDoItemValue: ''
        };
    },
    computed: {
        avatorPath () {
            return localStorage.avatorImgPath;
        }
    },
    methods: {
        addNewToDoItem () {
            this.showAddNewTodo = true;
        },
        addNew () {
            if (this.newToDoItemValue.length !== 0) {
                this.toDoList.unshift({
                    title: this.newToDoItemValue
                });
                setTimeout(() => {
                    this.newToDoItemValue = '';
                }, 200);
                this.showAddNewTodo = false;
            } else {
                this.$Message.error('请输入待办事项内容');
            }
        },
        cancelAdd () {
            this.showAddNewTodo = false;
            this.newToDoItemValue = '';
        }
    }
};
</script>
