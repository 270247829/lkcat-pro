<style lang="less" scoped>
    .form-width .lkui-form-item{
        width:48%;
    }
</style>

<template>
    <div>
        <Row>
            <Card>
                <p slot="title">
                    <Icon type="compose"></Icon>
                    用户注册
                </p>
                <Form ref="formItem" :model="formItem" :label-width="140" inline class="form-width" :rules="ruleValidate">
                    <FormItem label="用户名" prop="userName">
                        <Input v-model="formItem.userName" placeholder="请输入"></Input>
                    </FormItem>
                    <FormItem label="性别" prop="sex">
                        <RadioGroup v-model="formItem.sex" type="button">
                            <Radio label="男"></Radio>
                            <Radio label="女"></Radio>
                        </RadioGroup>
                    </FormItem>
                    <FormItem label="姓名" prop="name">
                        <Input v-model="formItem.name" placeholder="请输入"></Input>
                    </FormItem>
                    <FormItem label="密码" prop="passWord">
                        <Input v-model="formItem.passWord" placeholder="请输入" type="password"></Input>
                    </FormItem>
                    <FormItem label="确认密码" prop="rePassWord">
                        <Input v-model="formItem.rePassWord" placeholder="请输入" type="password"></Input>
                    </FormItem>

                    <FormItem label="身份证号" prop="idcard">
                        <Input v-model="formItem.idcard" placeholder="请输入"></Input>
                    </FormItem>
                    <FormItem label="联系电话" prop="phoneNumber">
                        <Input v-model="formItem.phoneNumber" placeholder="请输入"></Input>
                    </FormItem>
                    <FormItem label="部门" prop="department">
                        <Input v-model="formItem.department" placeholder="请输入"></Input>
                    </FormItem>
                    <FormItem label="爱好" prop="hobby">
                        <CheckboxGroup>
                            <Checkbox label="twitter">
                                <Icon type="social-twitter"></Icon>
                                <span>Twitter</span>
                            </Checkbox>
                            <Checkbox label="facebook">
                                <Icon type="social-facebook"></Icon>
                                <span>Facebook</span>
                            </Checkbox>
                            <Checkbox label="github">
                                <Icon type="social-github"></Icon>
                                <span>Github</span>
                            </Checkbox>
                            <Checkbox label="snapchat">
                                <Icon type="social-snapchat"></Icon>
                                <span>Snapchat</span>
                            </Checkbox>
                        </CheckboxGroup>
                    </FormItem>
                    <FormItem label="状态" prop="status">
                        <lk-switch size="large">
                            <span slot="open">正常</span>
                            <span slot="close">禁用</span>
                        </lk-switch>
                    </FormItem>
                    <FormItem label="国家" prop="city">
                        <Select  >
                            <Option v-for="item in formItem.cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                    </FormItem>
                    <FormItem label="时间" prop="time">
                        <DatePicker type="datetime" ></DatePicker>
                    </FormItem>
                    <FormItem label="地址" prop="time">
                        <Cascader :data="data"></Cascader>
                    </FormItem>
                    <br>
                    <FormItem label="简介" prop="desc">
                        <Input type="textarea" ></Input>
                    </FormItem>
                    <div style="text-align:center;margin-top:10px;">
                        <Button type="primary" @click="add('formItem')" >保存</Button>
                    </div>
                </Form>
                </Card>
        </Row>
    </div>
</template>
<script>
import util from '@/libs/util.js';
    export default {
        name: 'pau_add',
        data () {
            return {
                currentPageName: this.$route.name,
                formItem: {
                    userName: '',
                    passWord: '',
                    rePassWord:'',
                    name: '',
                    phoneNumber: '',
                    idcard:'',
                    department:'',
                    sex:'男',
                    cityList:[
                        {label:'中国',value:'china'},
                        {label:'美国',value:'usa'}
                    ]
                },
                data: [{
                    value: 'beijing',
                    label: '北京',
                    children: [
                        {
                            value: 'gugong',
                            label: '故宫'
                        },
                        {
                            value: 'tiantan',
                            label: '天坛'
                        },
                        {
                            value: 'wangfujing',
                            label: '王府井'
                        }
                    ]
                }, {
                    value: 'jiangsu',
                    label: '江苏',
                    children: [
                        {
                            value: 'nanjing',
                            label: '南京',
                            children: [
                                {
                                    value: 'fuzimiao',
                                    label: '夫子庙',
                                }
                            ]
                        },
                        {
                            value: 'suzhou',
                            label: '苏州',
                            children: [
                                {
                                    value: 'zhuozhengyuan',
                                    label: '拙政园',
                                },
                                {
                                    value: 'shizilin',
                                    label: '狮子林',
                                }
                            ]
                        }
                    ],
                }],
                ruleValidate: {
                    sex: [
                        { required: true, message: '请选择性别', trigger: 'blur'}
                    ],
                    userName: [
                        { required: true, message: '请输入用户名', trigger: 'blur'}
                    ],
                    passWord: [
                        { required: true, message: '请输入密码', trigger: 'blur'},
                        { required: true, message: '密码必须以字母开头，由字母数字组成的6到24位字符', trigger: 'blur',pattern:/^[a-zA-Z][0-9a-zA-Z]{5,23}$/ }

                    ],
                    rePassWord: [
                        { required: true, message: '请输入确认密码', trigger: 'blur'},
                        { required: true, message: '两次密码输入不一致', trigger: 'blur',validator:this.validatePass}
                    ],
                    name: [
                        { required: true, message: '请输入姓名', trigger: 'blur'}
                    ],
                    phoneNumber: [
                        { required: true, message: '请输入联系电话', trigger: 'blur'}
                    ],
                    idcard: [
                        { required: true, message: '请输入身份证号', trigger: 'blur'}
                    ],
                    department: [
                        { required: true, message: '请输入部门', trigger: 'blur'}
                    ]
                }            
            }
        },
        created() {
            this.defaultData = JSON.parse(JSON.stringify(this.$data));
        },
        methods: {
            add (name) {
                var self = this;
                self.$refs[name].validate((valid) => {
                    if (valid) {
                        util.ajax.get('/appUserManagement/add',{ params:self.formItem })
                        .then(function (response) {
                            if(response.data.success){
                                self.$Modal.success({
                                    title: '家政服务信息',
                                    content: response.data.message
                                });
                                //清空表单
                                //self.$data = Object.assign(self.$data, self.defaultData);
                                self.$refs[name].resetFields();
                                self.$store.commit('removeTag',self.currentPageName);
                                util.openNewPage(self, 'pau_list');
                                self.$router.push({
                                    name: 'pau_list'
                                });
                            }else{
                                self.$Message.error(response.data.message);
                            }
                        })
                        .catch(function (error) {
                            self.$Message.error(error+"");
                        })
                    } else {
                        this.$Message.error('请填写必填项');
                    }
                })
            },  
            validatePass(rule, value, callback){
                var self = this;
                if (value !== self.formItem.passWord) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            }
        },
        mounted: function () {
            this.$nextTick(function () {
                
            })
        },
    }
</script>
