<style lang="less">
    @import './403.less';
</style>

<template>
    <div class="error403">
        <Row type="flex" justify="center" align="middle" class="row" >
            <Col span="12">
                <div class="img"></div>
            </Col>
            <Col span="12" class="content">
                <h1>403</h1>
                <div class="desc">抱歉，你无权访问该页面</div>
                <div class="error403-btn-con">
                    <Button @click="goHome" size="large" type="primary">返回首页</Button>
                </div>
            </Col>
        </Row>
    </div>
</template>

<script>
export default {
    name: 'Error403',
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
