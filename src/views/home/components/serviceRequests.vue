<template>
    <div style="width:100%;height:100%;" id="service_request_con"></div>
</template>

<script>
import echarts from 'echarts';
export default {
    name: 'serviceRequests',
    mounted () {
        let color = ['#35BDEF','#0D67FC','#E2B045','#9E4AFC','#6DA771'];
        let color1 = ['rgba(53,189,239,0.6)','rgba(13,103,252,0.6)','rgba(226,176,69,0.6)','rgba(158,74,252,0.6)','rgba(109,167,113,0.6)'];
                           
                    
                    
                   
                   
        let y = [            
            {
                name:'广阳区',
                value:[120, 132, 101, 134, 90, 230, 210]
            },
            {
                name:'安次区',
                value:[257, 358, 278, 234, 290, 330, 310]
            },
            {
                name:'永清县',
                value:[379, 268, 354, 269, 310, 478, 358]
            },
            {
                name:'固安县',
                value:[320, 332, 301, 334, 390, 330, 320]
            },
            {
                name:'香河县',
                value:[820, 645, 546, 745, 872, 624, 258]
            }];
        let seriesData = [];
        let i=0;
        let legendArr = [];
        for (var index in y) {
            let obj = y[index];
            seriesData.push(
                {
                    type: 'line',
                    name: obj.name,
                    stack: '总量',
                    itemStyle: {
                        normal: {
                            color: color[i]
                        }
                    },
                    areaStyle: {
                        normal: { 
                         color: color1[i],
                        }
                    },
                    data: obj.value
                })
            legendArr.push({
                name:obj.name,
                icon: 'circle'
            });
            i++
        }       
        const option = {
            grid: {
                left: '1%',
                right: '2%',
                top:'20%',
                bottom:'1%',
                containLabel: true
            },
            legend: {
                top:'1%',
                textStyle:{
                    color:'#1c2438'  
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
                    color: '#1c2438'
                },
                data:  ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
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
            series: seriesData
            
        };
        const serviceRequestCharts = echarts.init(document.getElementById('service_request_con'));
        serviceRequestCharts.setOption(option);

        window.addEventListener('resize', function () {
            serviceRequestCharts.resize();
        });
    }
};
</script>