<template>
    <div style="width:calc(100% - 10px);height:305px;" id="liquidfill"></div>
</template>

<script>
import echarts from 'lk-echarts-liquidfill'
export default {
    name: 'liquidfill',
    mounted () {
        var myChart = echarts.init(document.getElementById('liquidfill'));
        let option = {
            series: [{
                type: 'liquidFill',
                data: [0.6, 0.5, 0.4, 0.3],
                radius: '80%'
            }]     
        };
        myChart.setOption(option);
        window.addEventListener('resize',myChart.resize());
    }
};
</script>


