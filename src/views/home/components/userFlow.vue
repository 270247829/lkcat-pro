<template>
    <div style="width:100%;height:100%;" id="user_flow"></div>
</template>

<script>
import echarts from 'echarts';

export default {
    name: 'userFlow',
    mounted () {
        let myChart = echarts.init(document.getElementById('user_flow'));
        let color = ['#ef393d','#B7C229','#11CEF9','#8654EE','#FF6E71'];
        let seriesData = [];
        let i=0;
        let legendArr = [];
        let multiAreaCurveData = {
            x:['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            y:[
                {value:[120, 132, 101, 134, 90, 230, 210], name:'广阳区'},
                {value:[257, 358, 278, 234, 290, 330, 310], name:'安次区'},
                {value:[379, 268, 354, 269, 310, 478, 358], name:'固安县'},
                {value:[320, 332, 301, 334, 390, 330, 320], name:'永清县'},
                {value:[820, 645, 546, 745, 872, 624, 258], name:'霸州市'}
            ]
        }

        for (var index in multiAreaCurveData.y) {
            let obj = multiAreaCurveData.y[index];
            seriesData.push({
                name:obj.name,
                type:'line',
                smooth: true,
                itemStyle: {
                    normal: {
                        color: color[i]
                    }
                },
                showSymbol: false,
                data: obj.value
            })
            legendArr.push({
                name:obj.name,
                icon: 'circle'
            });
            i++
        }
  
        let option = {
            grid: {
                left: '3%',
                right: '5%',
                bottom: '5%',
                top:'25%',
                containLabel: true
            },
            legend: {
                top:"-2%",
                textStyle:{
                    color:'#0972EE'  
                },
                data: legendArr
            },
            animation: true,
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            xAxis: {
                axisLine: {
                    lineStyle: {
                        color: '#0972EE'
                    }
        
                },
                boundaryGap: false,
                splitLine: {
                    show: false,
                    lineStyle: {
                        type: 'dashed',
                        color: '#0972EE'
                    }
                },
                axisLabel: {
                    color: '#0972EE'
                },
                data: multiAreaCurveData.x
            },
            yAxis: {
                minInterval : 1,
                type: 'value',
                axisLine: {
                    lineStyle: {
                        color: '#0972EE'
                    }
        
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        type: 'dashed',
                        color: '#0972EE'
                    }
                },
                axisLabel: {
                    color: '#0972EE'
                }
            },
            series:seriesData
        };
        myChart.setOption(option);

        window.addEventListener('resize', function () {
            myChart.resize();
        });
    }
};
</script>
