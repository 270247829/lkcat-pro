<style lang="less">
    @import './500.less';
</style>

<template>
   <div class="error500">
        <Row type="flex" justify="center" align="middle" class="row" >
            <Col span="12">
                <div class="img" ></div>
            </Col>
            <Col span="12" class="content">
                <h1>500</h1>
                <div class="desc">抱歉，你访问的页面不存在</div>
                <div class="error404-btn-con">
                    <Button @click="goHome" size="large" type="primary">返回首页</Button>
                </div>
            </Col>
        </Row>
    </div>
</template>

<script>
export default {
    name: 'Error500',
    methods: {
        backPage () {
            this.$router.go(-1);
        },
        goHome () {
            this.$router.push({
                name: 'home_index'
            });
        }
    }
};
</script>
