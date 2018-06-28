<template>
    <div style="width:100%;height:100%;" id="aliveLine"></div>
</template>

<script>
import echarts from 'echarts';

export default {
    name: 'dataSourcePie',
    data () {
        return {
            data : [],
            now : +new Date(1997, 9, 3),
            oneDay : 24 * 3600 * 1000,
            value : Math.random() * 1000
        };
    },
    mounted () {
        var self = this;
        this.$nextTick(() => {
            var data = self.data;
            for (var i = 0; i < 1000; i++) {
                data.push(self.randomData());
            }
            self.data = data;
            var myChart11 = echarts.init(document.getElementById('aliveLine'));
            let option = {
                title: {
                    text: '动态数据 + 时间坐标轴'
                },
                tooltip: {
                    trigger: 'axis',
                    formatter: function (params) {
                        params = params[0];
                        var date = new Date(params.name);
                        return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
                    },
                    axisPointer: {
                        animation: false
                    }
                },
                xAxis: {
                    type: 'time',
                    splitLine: {
                        show: false
                    }
                },
                yAxis: {
                    type: 'value',
                    boundaryGap: [0, '100%'],
                    splitLine: {
                        show: false
                    }
                },
                series: [{
                    name: '模拟数据',
                    type: 'line',
                    showSymbol: false,
                    hoverAnimation: false,
                    data: data
                }]
            };

            myChart11.setOption(option);
                
            setInterval(function () {
                    self.data.shift();
                    self.data.push(self.randomData());

                myChart11.setOption({
                    series: [{
                        data: self.data
                    }]
                });
            }, 1000);
        });
    },
    methods:{
        randomData(){
            this.now = new Date(+this.now + this.oneDay);
            this.value = this.value + Math.random() * 21 - 10;
            return {
                name: this.now.toString(),
                value: [
                    [this.now.getFullYear(), this.now.getMonth() + 1, this.now.getDate()].join('/'),
                    Math.round(this.value)
                ]
            }
        }
    }
};
</script>
