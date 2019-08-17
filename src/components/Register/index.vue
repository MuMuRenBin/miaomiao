<template>
    <div class="register_body">
        <div class="register_email">
            邮箱：<input v-model="email" class="register_text" type="text"><button @touchstart='handleToVerify'>发送验证码</button>
        </div>
        <div>
            用户名：<input v-model="username" class="register_text" type="text">
        </div>
        <div>
            密码：<input v-model="password" class="register_text" type="password">
        </div>
        <div>
            确认密码：<input class="register_text" type="password">
        </div>
        <div>
            验证码：<input v-model="verify" class="register_text" type="text">
        </div>
        <div class="register_btn" @touchstart='handleToRegister'><button>注册</button></div>
        <div class="register_link">
            <router-link to="/mine/login" >登录</router-link>
            <router-link to="/mine/findPassword">找回密码</router-link>
        </div>
    </div>
</template>

<script>
import {messageBox} from '@/components/JS'
export default {
    name:'Register',
    data() {
        return {
            email:'',
            username:'',
            password:'',
            verify:'',
        }
    },
    methods: {
        handleToVerify(){
            this.axios.get('/api2/users/verify?email='+this.email)
            .then((res) => {
                var status=res.data.status;
                // console.log(status)
                if(status===0){
                    messageBox({
                        title:'验证码',
                        content:'验证码已发送',
                        ok:'确定'
                    })
                }else{
                    messageBox({
                        title:'验证码',
                        content:'验证码发送失败',
                        ok:'确定'
                    })
                }
            }).catch((err) => {
                
            });
        },
        handleToRegister(){
            console.log(9998888);
            this.axios.post('/api2/users/register',{
                email:this.email,
                username:this.username,
                password:this.password,
                verify:this.verify
            }).then((res)=>{
                var status= res.data.status;
                console.log(status)
                if(status===0){
                    messageBox({
                        title:'注册',
                        content:'用户注册成功',
                        ok:'确定'
                    })
                }else{
                    messageBox({
                        title:'注册',
                        content:res.data.msg+'请重新注册',
                        ok:'确定'
                    })
                }
            })
        }
    },
}
</script>

<style scoped>
    .register_body{width: 95%;margin: 10px; }
    .register_body .register_text{width: 100%;height: 40px;border: none;border-bottom: 1px solid #ccc;margin-bottom: 5px;outline: none;}
    .register_body .register_email{position: relative;}
    .register_body .register_email button{position: absolute;right: 10px;top: 10px;height: 30px; border: none;padding: 5px;}
    .register_body .register_btn{height: 50px;margin: 10px;}
    .register_body .register_btn button{width: 100%;height: 100%;background-color: #e54847;border-radius: 3px;border: none;display: block;color: #fff;;}
    .register_body .register_link{display: flex;justify-content: space-between;}
    .register_body .register_link a{text-decoration: none;margin: 0 5px;font-size: 12px;color: #e54847}    
</style>