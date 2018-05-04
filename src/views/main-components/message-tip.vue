<template>        

    <div  class="message-con">

    <Poptip placement="bottom-end" >
            <Badge count="10">
                <Icon type="ios-bell-outline" :size="22" style="width: 100%;"></Icon>
            </Badge>
        <div class="api" slot="content">
            <Tabs value="name1"    :animated="false" >
                <TabPane label="通知(3)" name="name1">
                    <div class="messageList">
                        <div class="left">
                            <Icon type="android-notifications" size="32" />
                        </div>
                        <div class="right">
                            <div class="content">
                                今天下午3点开会
                            </div>
                            <div class="time">
                                今天
                            </div>
                        </div>
                    </div>
                    <div class="messageList">
                        <div class="left">
                            <Icon type="android-notifications" size="32" />
                        </div>
                        <div class="right">
                            <div class="content">
                                今天下午4点开会
                            </div>
                            <div class="time">
                                今天
                            </div>
                        </div>
                    </div>                    
                    <div class="messageList">
                        <div class="left">
                            <Icon type="android-notifications" size="32" />
                        </div>
                        <div class="right">
                            <div class="content">
                                今天下午5点开会
                            </div>
                            <div class="time">
                                今天
                            </div>
                        </div>
                    </div>
                </TabPane>
                <TabPane label="消息(2)" name="name2">
                    <div class="messageList">
                        <div class="left">
                            <Icon type="email" size="32" />
                        </div>
                        <div class="right">
                            <div class="content">
                                今天下午3点开会
                            </div>
                            <div class="time">
                                今天
                            </div>
                        </div>
                    </div>
                    <div class="messageList">
                        <div class="left">
                            <Icon type="email" size="32" />
                        </div>
                        <div class="right">
                            <div class="content">
                                今天下午4点开会
                            </div>
                            <div class="time">
                                今天
                            </div>
                        </div>
                    </div>           
                </TabPane>         
                <TabPane label="待办(5)" name="name3">
                    <div class="messageList">
                        <div class="left">
                            <Icon type="pin" size="32" />
                        </div>
                        <div class="right">
                            <div class="content">
                                今天下午3点开会
                            </div>
                            <div class="time">
                                今天
                            </div>
                        </div>
                    </div>
                    <div class="messageList">
                        <div class="left">
                            <Icon type="pin" size="32" />
                        </div>
                        <div class="right">
                            <div class="content">
                                今天下午4点开会
                            </div>
                            <div class="time">
                                今天
                            </div>
                        </div>
                    </div>                    
                    <div class="messageList">
                        <div class="left">
                            <Icon type="pin" size="32" />
                        </div>
                        <div class="right">
                            <div class="content">
                                今天下午5点开会
                            </div>
                            <div class="time">
                                今天
                            </div>
                        </div>
                    </div>
                   <div class="messageList">
                        <div class="left">
                            <Icon type="pin" size="32" />
                        </div>
                        <div class="right">
                            <div class="content">
                                今天下午4点开会
                            </div>
                            <div class="time">
                                今天
                            </div>
                        </div>
                    </div>                    
                    <div class="messageList">
                        <div class="left">
                            <Icon type="pin" size="32" />
                        </div>
                        <div class="right">
                            <div class="content">
                                今天下午5点开会
                            </div>
                            <div class="time">
                                今天
                            </div>
                        </div>
                    </div>

                </TabPane>

            </Tabs>
        </div>
    </Poptip>
    </div>

</template>

<script>
import util from '@/libs/util.js';
export default {
    name: 'messageTip',
    props: {
        value: {
            type: Number,
            default: 0
        }
    }
};
</script>
