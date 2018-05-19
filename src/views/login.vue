<style lang="less">
    @import './login.less';
</style>

<template>

    <div class="login" @keydown.enter="handleSubmit">
        <loginBack/>
        <div class="login-con">
            <div class="top">
                <div class="header">
                        <img alt="logo" class="logo" :src="logoPath">
                        <span class="title">LKCat Pro</span>
                </div>
                <div class="desc">LKCat Pro 是一款可以快速开发后台管理系统的框架
                </div>
            </div>
            <div >
                <div class="form-con">
                    <Form ref="loginForm" :model="form" :rules="rules">
                        <FormItem prop="userName">
                            <Input v-model="form.userName" placeholder="请输入用户名">
                                <span slot="prepend">
                                    <Icon :size="16" type="person"></Icon>
                                </span>
                            </Input>
                        </FormItem>
                        <FormItem prop="password">
                            <Input type="password" v-model="form.password" placeholder="请输入密码">
                                <span slot="prepend">
                                    <Icon :size="14" type="locked"></Icon>
                                </span>
                            </Input>
                        </FormItem>
                        <FormItem>
                            <Button @click="handleSubmit" type="primary" long>登录</Button>
                        </FormItem>
                    </Form>
                    <p class="login-tip">输入任意用户名和密码即可</p>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import Cookies from 'js-cookie';
import loginBack from './my-components/canvas/loginBack';
import logo from '../images/logo.svg';

export default {
    components:{
        loginBack
    },
    data () {
        return {
            logoPath : logo,
            form: {
                userName: 'LK-Cat Pro',
                password: ''
            },
            rules: {
                userName: [
                    { required: true, message: '账号不能为空', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '密码不能为空', trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
        handleSubmit () {
            this.$refs.loginForm.validate((valid) => {
                if (valid) {
                    Cookies.set('user', this.form.userName);
                    Cookies.set('password', this.form.password);
                    this.$store.commit('setAvator', 'http://localhost:8080/src/images/avator.jpg');
                    if (this.form.userName === 'lkcat_admin') {
                        Cookies.set('access', 0);
                    } else {
                        Cookies.set('access', 1);
                    }
                    this.$router.push({
                        name: 'home_index'
                    });
                }
            });
        }
    },
    mounted () {



    }
};
</script>

<style>

</style>
