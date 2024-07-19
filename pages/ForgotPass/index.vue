<template>
    <div calss="forgotPass-box"
        style="margin: 0 auto;

        text-align: center;
        background-color: rgb(255, 255, 255);
        color:rgb(0, 0, 0);
        font: 1em sans-serif;
        font-family:Arial, Helvetica, sans-serif;"
    >
        <div class="forgotPass-box-box">
            <img 
            style="width: 235.3px;height: 87px; margin-top: 10%;"
            src="../ForgotPass/LOGO.png" alt="" >
            <div class="forgot-Email lg1"
            style="margin-top: 80px;
                font-size: 26px;
                    font-weight: 400;
                    line-height: 20px;
                    letter-spacing: 0.01em;
                    font-family:Arial, Helvetica, sans-serif;
                    
            "
            >
                <div for=""
                >Nhập email đã đăng ký</div>
                <br>
                <input id="email" v-model="login_email" 
                style="margin-top: 20px;"
                type="email" name="" placeholder="abc@gmail.com">
            </div>
            <button
            style="margin-top: 20px;"
            >
            Gửi</button>
        </div>
    </div>
</template>
<script>
// import { defineComponent } from '@vue/composition-api'

// export default defineComponent({
//     setup() {
        
//     },
// })
</script>
<style>
.forgotPass-box{
    
    margin:  10%;
    text-align: center;
    background-color: rgb(255, 255, 255);
    color:rgb(0, 0, 0);
    font: 1em sans-serif;
    font-family:Arial, Helvetica, sans-serif;
}
.forgotPass-box-box
input {
    width: 500px;
    height: 48px;
    padding: 10px;
    padding-left: 10px;
    padding-right: 10px;
    gap: 0px;
    margin-top: 6px;
    border-radius: 12px ;
    border: 1px ;
    opacity: 0px;
    border: 1px solid rgba(212, 215, 227, 1);
    background: rgba(247, 251, 255, 1);
    font-size: 20px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.01em;
}
.forgotPass-box-box
button {

    width: 503px;
    height: 52px;
    padding: 16px 0px 16px 0px;
    margin-top: 20px;
    gap: 0px;
    border-radius: 12px  ;
    border: 0px white;
    opacity: 0px;
    background:  #4285f4 ;
    font-size: 20px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.01em;
    text-align: center;
    color: rgba(255, 255, 255, 1);
}
input:focus{
    outline:none;
}

</style>
