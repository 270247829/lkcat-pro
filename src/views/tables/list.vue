<style lang="less">
    @import '../../styles/common.less';
</style>

<template>
    <div>
        <Row :gutter="10">
            <Col >
                <Card>
                    <p slot="title">
                        <Icon type="ios-list-outline"></Icon>
                       APP用户列表
                    </p>
                    <Row>
                        <Input v-model="searchParams.name" placeholder="请输入姓名搜搜..." style="width: 200px" />
                        <Input v-model="searchParams.idcard" placeholder="请输入身份证号搜搜..." style="width: 200px" />
                        <Input v-model="searchParams.userName" placeholder="请输入用户名搜搜..." style="width: 200px" />

                        <span @click="search" style="margin: 0 10px;"><Button type="primary" icon="search">搜索</Button></span>
                    </Row>
                    <Row class="margin-top-10 ">
                        <Table  :data="tableData1" :columns="tableColumns1" :hover-show="true" :edit-incell="true" stripe></Table>
						<div style="margin: 10px;overflow: hidden">
							<div style="float: right;">
								<Page :page-size="pagination.size" :total="pagination.total" :current="pagination.current" @on-change="changePage"></Page>
							</div>
						</div>
                    </Row>
                    <Modal ref="mod" :width="900" v-model="editModal" title="修改APP用户信息" :loading="loading" @on-ok="ok('formItem')">
                        <Form ref="formItem" :model="formItem" :label-width="140" inline class="form-width" :rules="ruleValidate">
                            <FormItem label="用户名" prop="userName">
                                <Input v-model="formItem.userName" placeholder="请输入" disabled></Input>
                            </FormItem>
                            <FormItem label="姓名" prop="name">
                                <Input v-model="formItem.name" placeholder="请输入" disabled></Input>
                            </FormItem>
                            <FormItem label="密码" prop="passWord">
                                <Input v-model="formItem.passWord" placeholder="请输入" type="password"></Input>
                            </FormItem>
                            <FormItem label="确认密码" prop="rePassWord">
                                <Input v-model="formItem.rePassWord" placeholder="请输入" type="password"></Input>
                            </FormItem>
                            <FormItem label="身份证号" prop="idcard">
                                <Input v-model="formItem.idcard" placeholder="请输入" disabled></Input>
                            </FormItem>
                            <FormItem label="联系电话" prop="phoneNumber">
                                <Input v-model="formItem.phoneNumber" placeholder="请输入" disabled></Input>
                            </FormItem>
                            <FormItem label="部门" prop="department">
                                <Input v-model="formItem.department" placeholder="请输入" disabled></Input>
                            </FormItem>
                        </Form>
                    </Modal>
                </Card>
            </Col>
        </Row>
    </div>
</template>

<script>
import util from '@/libs/util.js';
export default {
    name: 'fw_list',
    data () {
        return {
            loading: true,
			tableData1: [
                {
                    id:0,
                    name:'管理员',
                    idcard:'131002199912125555',
                    userName:'admin',
                    phoneNumber:'18888888888',
                    department:'研发部'
                },
                {
                    id:1,
                    name:'李明',
                    idcard:'131002199112126666',
                    userName:'liming',
                    phoneNumber:'16666666666',
                    department:'财务部'
                },
                {
                    id:2,
                    name:'韩梅梅',
                    idcard:'131002199212121111',
                    userName:'hanmeimei',
                    phoneNumber:'1655555555',
                    department:'研发部'
                }
            ],
            tableColumns1: [
                {
                    title: '姓名',
                    key: 'name'
                },
                {
                    title: '身份证号',
                    key: 'idcard'
                },
                {
                    title: '用户名',
                    key: 'userName'
                },
                {
                    title: '联系电话',
                    key: 'phoneNumber'
                },
                {
                    title: '部门',
                    key: 'department'
                },
                {
                    title: '操作',
                    key: 'id',
                    align: 'center',
                    render: (h, params) => {
                        return h('div', [
                            h('Button', {
                                props: {
                                    type: 'warning',
                                    size: 'small'
                                },
                                style: {
                                    marginRight: '5px'
                                },
                                on: {
                                    click: () => {
                                        this.edit(params.row.id)
                                    }
                                }
                            }, '修改'),
                            h('Poptip', {
                                    props: {
                                        confirm: true,
                                        title: '您确定要删除这条数据吗?',
                                        transfer: true
                                    },
                                    on: {
                                        'on-ok': ()=>{
                                            this.delete(params.index);
                                        }
                                    }
                                }, [
                                    h('Button', {
                                        props: {
                                            type: 'error',
                                            size: 'small'
                                        }
                                    }, '删除')
                                ])

                        ]);
                    }
                }
            ],
			pagination:{
				current:1,
				total:1,
				size:10
            },
            searchParams:{
                userName:'',
                name:'',
                idcard:'',
                start:0,
                length:10
            },
            fetchError: null,
            formItem: {
                id:'',
                companyName: '',
                type: '',
                name: '',
                phoneNumber: '',
                information:''
            },
            ruleValidate: {
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
            },
            editModal:false
        };
    },

    mounted: function () {
        this.$nextTick(function () {
            this.fetchData ();
        })
    },
    methods: {
        fetchData () {
            var self = this;
            self.searchParams.start = self.pagination.size*(self.pagination.current-1);
            self.searchParams.length = self.pagination.size;
            return util.ajax.get('/appUserManagement/list',{ params:self.removeEmptyValue(self.searchParams) })
            .then(function (response) {
                self.tableData1 = response.data.data;
                self.pagination.total = response.data.total;
            })
            .catch(function (error) {
                self.fetchError = error
            })

        },
        search () {
            this.fetchData ();
        },
		changePage (index) {
			this.pagination.current = index;
            this.fetchData();
        },
        detail (index) {
            util.openNewPage(this, 'fw_detail');
            this.$router.push({
                name: 'fw_detail', params: {id:index}
            });
        },
        edit (index) {
            var self = this;
            // util.ajax.get('/appUserManagement/detail?id='+index)
            // .then(function (response) {
            //     if(response.data.success){
            //         self.formItem = response.data.data;
            //         self.showEditModal ();
            //     }else{
            //         self.$Message.error(response.data.message);
            //     }
            // })
            // .catch(function (error) {
            //     self.fetchError = error
            // })

            self.formItem = self.tableData1[index];
            self.showEditModal ();
        },
        delete (index) {
            var self = this;
            // util.ajax.get('/appUserManagement/delete?id='+index)
            // .then(function (response) {
            //     if(response.data.success){
            //         self.$Message.success(response.data.message);
            //     }else{
            //         self.$Message.error(response.data.message);
            //     }
            //     self.fetchData();
            // })
            // .catch(function (error) {
            //     self.fetchError = error
            // })
            self.tableData1.splice(index,1);
            self.$Message.success("删除成功");
        },
        showEditModal () {
            this.editModal = true;
        },
        removeEmptyValue(obj){
            var newArr = {};
            var arr = Object.keys(obj);
            arr.forEach(function(value,key,arr){
                if(obj[value]!=null && obj[value]!=''){
                    newArr[value] = obj[value];
                }
            });
            return newArr;
        },
        ok(name){
            
            var self = this;
            self.$refs[name].validate((valid) => {
                if (valid) {
                    util.ajax.get('/appUserManagement/update',{ params:self.removeEmptyValue(self.formItem) })
                    .then(function (response) {
                        if(response.data.success){
                            self.$Message.success(response.data.message);
                        }else{
                            self.$Message.error(response.data.message);
                        }
                        self.loading = false;
                        self.editModal = false;
                        self.fetchData();
                    })
                    .catch(function (error) {
                        self.fetchError = error
                    })
                } else {
                    self.loading = false;
                    this.$Message.error('请填写必填项');
                }
            })
        }
    },
    watch: {
        '$route' (to) {
            if(to.name==this.$route.name){
                this.fetchData();
            }
        }
    }
};
</script>
