<template>
    <div style="width:calc(100% - 10px);height:305px;" id="home_page_map"></div>
</template>

<script>
import echarts from 'echarts';
import geoData from '../map-data/get-geography-value.js';
require('echarts-gl');
export default {
    name: 'homeMap',
    props: {
        cityData: Array
    },
    mounted () {


        var map = echarts.init(document.getElementById('home_page_map'));
        const chinaJson = require('../map-data/131000.json');
        echarts.registerMap('lf', chinaJson);
        let option = {
                    geo3D: {
                        top: -50,
                        bottom: 0,
                        map: 'lf',
                        itemStyle: {
                            areaColor: '#1d5e98',
                            color:'#1d5e98',
                            opacity: 1,
                            borderWidth: 0.4,
                            borderColor: '#000'
                        },
                        viewControl:{
                            distance:160,
                            maxAlpha:150,
                            alpha:55,
                            beta:45,
                            rotateSensitivity:0,
                            panSensitivity:1,
                            panMouseButton:"left",
                            rotateMouseButton:'middle'
                        },
                        label: {
                            // distance:-200,
                            show: true,
                            textStyle: {
                                color: 'black',
                                //地图初始化区域字体颜色
                                fontSize: 17,
                                opacity: 1,
                                backgroundColor: 'rgba(0,0,0,0)',
                                fontFamily: 'Microsoft YaHei'
                            },
                            formatter:function(str){
                                if(str.name == '三河市'){
                                    str.name += "\n";
                                }
                                return str.name
                            }
                        },
                        emphasis: { //当鼠标放上去  地区区域是否显示名称
                            label: {
                                show: true,
                                textStyle: {
                                    color: 'black',
                                    fontSize: 20,
                                    backgroundColor: 'rgba(0,23,11,0)'
                                }
                            }
                        },
                        //shading: 'lambert',
                        light: { //光照阴影
                            main: {
                                color: '#FFF',
                                //光照颜色
                                intensity: 1.2,
                                //光照强度
                                shadowQuality: 'high', //阴影亮度
                                shadow: true,
                                //是否显示阴影
                                alpha: 55,
                                beta: 10
                            },
                            ambient: {
                                intensity: 0.3
                            }
                        },
                        postEffect:{
                            // enable:true,
                            bloom:{
                                enable:true
                            }
                        },
                        zlevel:1
                    },
                    series: [{
                        name: 'scatter3D',
                        type: "scatter3D",
                        coordinateSystem: 'geo3D',
                        itemStyle: {
                            color:'yellow',
                            borderWidth: 1,
                            borderColor: 'rgba(255,255,255,1)'
                        },
                        emphasis: {
                            itemStyle: {
                                color: '#fff'
                            }
                        },
                        zlevel:10,
                        symbol:'circle',
                        symbolSize:12,
                        data: [
                            [116.72,39.53,10],
                            [116.30,39.43,10],
                            [116.68,39.52,10],
                            [116.50,39.32,10],
                            [117.00,39.77,10],
                            [116.63,38.70,10],
                            [116.40,39.10,10]
                        ]
                    }]
                };
                map.setOption(option);
                window.addEventListener('resize',map.resize());
    }
};
</script>


