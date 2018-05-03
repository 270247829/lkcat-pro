<style lang="less">
    @import '../../../styles/common.less';
    @import './work-flow.less';
</style>

<template>
    <div>
        <Row>
            <Card>
                <div class="step-header-con">
                    <h3>{{ stepData.title }}</h3>
                    <h5>{{ stepData.describe }}</h5>
                </div>
                <p class="step-content" v-html="stepData.content"></p>
                <Form class="step-form" ref="step" :model="step" :rules="stepRules" :label-width="100">
                    <FormItem label="意见：" prop="opinion">
                        <Input :disabled="hasSubmit" v-model="step.opinion" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入意见" />
                    </FormItem>
                    <FormItem label="备注：">
                        <Input :disabled="hasSubmit" v-model="step.remark" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入备注" />
                    </FormItem>
                    <FormItem label="是否通过：" required>
                        <RadioGroup v-model="step.pass">
                            <Radio :disabled="hasSubmit" label="通过"></Radio>
                            <Radio :disabled="hasSubmit" label="不通过"></Radio>
                        </RadioGroup>
                    </FormItem>
                    <FormItem label="">
                        <Button :disabled="hasSubmit" @click="handleSubmit" style="width:100px;" type="primary">提交</Button>
                    </FormItem>
                </Form>
                <Steps :current="currentStep" :status="status">
                    <Step v-for="item in stepList1" :title="item.title" :content="item.describe + '审核并通过'" :key="item.title"></Step>
                </Steps>
            </Card>
        </Row>
    </div>
</template>

<script>
export default {
    name: 'workflow',
    data () {
        return {
            stepList1: [],
            stepData: {
                title: '',
                describe: '',
                content: ''
            },
            step: {
                opinion: '',
                remark: '',
                pass: '通过'
            },
            stepRules: {
                opinion: [
                    { required: true, message: '请填写意见', trigger: 'blur' }
                ]
            },
            hasSubmit: false,
            currentStep: 0,
            status: 'wait'
        };
    },
    methods: {
        handleSubmit () {
            this.$refs['step'].validate((valid) => {
                if (valid) {
                    if (this.step.pass === '通过') {
                        this.currentStep += 1;
                    } else {
                        this.status = 'error';
                    }
                    this.hasSubmit = true;
                }
            });
        }
    },
    mounted () {
        this.stepList1 = [
            {
                title: '申请人',
                describe: '张三'
            },
            {
                title: '部门经历',
                describe: '李四'
            },
            {
                title: '总经理',
                describe: '王五'
            },
            {
                title: '财务',
                describe: '赵六'
            }
        ];
        this.stepData = {
            title: '报销流程',
            describe: '申请人：张三',
            content: '报销住宿费、路费共计3000元'
        };
        this.currentStep = 2;
    }
};
</script>
