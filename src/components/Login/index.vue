<template>
    <div class="login_body">
        <div>
            <input type="text" class="login_text" placeholder="账户名/手机号/Email">
        </div>
        <div>
            <input type="password" class="login_text" placeholder="请输入你的密码">
        </div>
        <div class="login_btn">
            <input type="submit" value="登录">
        </div>
        <div class="login_link">
            <a href="#">立即注册</a>
            <a href="#">找回密码</a>
        </div>
    </div>
</template>

<script>
export default {
    name:'Login'
}
</script>

<style>
    .login_body{width: 100%;padding-top:50px;margin: 5px; }
    .login_body .login_text{width: 100%;height: 40px;border: none;border-bottom: 1px solid #ccc;margin-bottom: 5px;outline: none;}
    .login_body .login_btn{height: 50px;margin: 10px;}
    .login_body .login_btn input{width: 100%;height: 100%;background-color: #e54847;border-radius: 3px;border: none;display: block;color: #fff;;}
    .login_body .login_link{display: flex;justify-content: space-between;}
    .login_body .login_link a{text-decoration: none;margin: 0 5px;font-size: 12px;color: #e54847}
</style>