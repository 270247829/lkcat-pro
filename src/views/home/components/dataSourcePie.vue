<template>
    <div style="width:100%;height:100%;" id="data_source_con"></div>
</template>

<script>
import echarts from 'echarts';

export default {
    name: 'dataSourcePie',
    data () {
        return {
            //
        };
    },
    mounted () {
        this.$nextTick(() => {
            var dataSourcePie = echarts.init(document.getElementById('data_source_con'));
            let option = {
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    data: ['广阳区','安次区','固安县','永清县','霸州市']
                },
                series : [
                    {
                        name: '数据百分比',
                        type: 'pie',
                        radius : '55%',
                        center: ['50%', '60%'],
                        data:[
                            {value:335, name:'广阳区',itemStyle:{color:'#ef393d'}},
                            {value:310, name:'安次区',itemStyle:{color:'#5fe063'}},
                            {value:234, name:'固安县',itemStyle:{color:'#11CEF9'}},
                            {value:135, name:'永清县',itemStyle:{color:'#8654EE'}},
                            {value:548, name:'霸州市',itemStyle:{color:'#f88e2e'}}
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            };
            dataSourcePie.setOption(option);
            window.addEventListener('resize', function () {
                dataSourcePie.resize();
            });
        });
    }
};
</script>
