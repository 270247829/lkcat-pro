<template>
    <div style="width:100%;height:100%;" id="visite_volume_con"></div>
</template>

<script>
import echarts from 'echarts';
export default {
    name: 'visiteVolume',
    data () {
        return {
            //
        };
    },
    mounted () {
        this.$nextTick(() => {
            let visiteVolume = echarts.init(document.getElementById('visite_volume_con'));
            let xAxisData = [];
            let data1 = [];
            let data2 = [];
            for (let i = 0; i < 20; i++) {
                xAxisData.push('类目' + i);
                data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
                data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
            }


        let option = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '1%',
                right: '4%',
                bottom: '1%',
                top:'4%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    data :  ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                    axisLabel:{
                        show:true,
                        color: '#0972EE'
                    },
                    axisLine: {
                        lineStyle:{
                            color: '#0972EE'
                        }
                        
                    },
                    
                }
            ],
            yAxis : [
                {
                    show:true,
                    type : 'value',
                    axisLine: {
                        show:false
                    },
                    splitLine:{
                        show:true,
                        lineStyle:{
                            type:'dashed',
                            color:'#0972EE'
                        }
                    },
                    axisLabel: {
                        color: '#0972EE'
                    }
                }
            ],
            series : [
                {
                    name:'数量',
                    type:'bar',
                    barWidth: '50%',
                    cursor:'default',
                    itemStyle:{
                      normal:{
                            barBorderRadius:100,
                            color:function(idx) {
                                var color = ['#FF6E71','#FAC552','#3586FF','#8654EE','#85B245']
                                var color2 = ['#F89228','#B7C229','#11CEF9','#63A3EF','#3CC99D']

                                var g = new echarts.graphic.LinearGradient(
                                    0, 0, 0, 1, [{
                                            offset: 0,
                                            color: color[idx.dataIndex % color.length]
                                        },
                                        {
                                            offset: 1,
                                            color: color2[idx.dataIndex % color.length]
                                        }
                                    ]
                                )
                              return g

                          }
                      }  
                    },
                    data: [
                        {value: 453682, name: '周一'},
                        {value: 879545, name: '周二'},
                        {value: 2354678, name: '周三'},
                        {value: 1598403, name: '周四'},
                        {value: 543250, name: '周五'},
                        {value: 1305923, name: '周六'},
                        {value: 1103456, name: '周日'}
                    ]
                }
            ]
        };
        
            visiteVolume.setOption(option);

            window.addEventListener('resize', function () {
                visiteVolume.resize();
            });
        });
    }
};
</script>
