<template>
    <div class="login_body">
        <div>
            <input v-model='username' type="text" class="login_text" placeholder="账户名/手机号/Email">
        </div>
        <div>
            <input v-model="password" type="password" class="login_text" placeholder="请输入你的密码">
        </div>
        <div>
            <input type="text" class="login_text" placeholder="请输入验证码" v-model="verifyImg"/><img @touchstart='handleToVerifyImg' src="/api2/users/verifyImg" alt="">
        </div>
        <div class="login_btn">
            <input type="submit" value="登录" @touchstart='handleToLogin'>
        </div>
        <div class="login_link">
            <router-link to="/mine/register" >立即注册</router-link>
            <router-link to="/mine/findPassword">找回密码</router-link>
        </div>
    </div>
</template>

<script>
import {messageBox} from '@/components/JS';
export default {
    name:'Login',
    data() {
        return {
            username:'',
            password:'',
            verifyImg:'',
        }
    },
    methods: {
        handleToLogin(){
            this.axios.post('/api2/users/login',{
                username:this.username,
                password:this.password,
                verifyImg:this.verifyImg
            }).then((res) => {
                console.log(res);
                var status = res.data.status;
                var that = this;
                if(status===0){
                    messageBox({
                        title:'登录',
                        content:'登录成功',
                        ok:'确定',
                        handleOk(){
                            that.$router.push('/mine/center')
                        }
                    })
                }else{
                    messageBox({
                        title:'登录',
                        content:res.data.msg,
                        ok:'确定'
                    })
                    this.password=''
                }
            })
        },
        handleToVerifyImg(e){
            e.target.src = '/api2/users/verifyImg?'+Math.random();
        }
    },
}
</script>

<style>
    .login_body{width: 95%;padding-top:50px;margin: 10px; }
    .login_body .login_text{width: 100%;height: 40px;border: none;border-bottom: 1px solid #ccc;margin-bottom: 5px;outline: none;}
    .login_body .login_btn{height: 50px;margin: 10px;}
    .login_body .login_btn input{width: 100%;height: 100%;background-color: #e54847;border-radius: 3px;border: none;display: block;color: #fff;;}
    .login_body .login_link{display: flex;justify-content: space-between;}
    .login_body .login_link a{text-decoration: none;margin: 0 5px;font-size: 12px;color: #e54847}
</style>