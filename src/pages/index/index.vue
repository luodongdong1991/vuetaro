<template>
  <view class="index">
    <view class="index">
      <AtNoticebar marquee> 欢迎使用 Taro UI Vue </AtNoticebar>
      <AtButton type="primary" :on-click="handleClick" size="small"> AtButton </AtButton>
      <AtToast :is-opened="show" :text="msg" :on-close="handleClose"></AtToast>
      <AtToast :is-opend="show" :text="msg2" :on-close="handleClose"></AtToast>
      <AtIcon value='clock' size='20' color='#F00'></AtIcon>
      <AtFab size="small" :onClick='onButton'>
         click
      </AtFab>
      <AtAvatar image='https://jdc.jd.com/img/100' circle size="small"></AtAvatar>
      <AtAvatar text='L' circle size="small"></AtAvatar>
        <AtCountdown
        :format="{ hours: ':', minutes: ':', seconds: '' }"
        :seconds="3"
        :onTimeUp="onTimeUp"
      />
    </view>
  </view>
</template>

<script>
// 按需引入, 更小的应用体积//引入
import { 
  AtCountdown,
  AtAvatar,
  AtFab,
  AtIcon, 
  AtButton, 
  AtToast,
  AtNoticebar, 
} from "taro-ui-vue";
import "./index.scss";
export default {
  components: {
    //注册
    AtCountdown,
    AtAvatar,
    AtFab,
    AtIcon,
    AtButton,
    AtToast,
    AtNoticebar,
  },
  data() {
    return {
      msg: "Hello world!",
      msg2:'ssssssssss',
      show: false,
    };
  },
  methods: {
    onTimeUp(){
      Taro.showToast({
        title:'time over',
        icon:'success',
        duration:1000,
      })
    },
    onButton(){
      console.log('sssssssssss')
    },
    handleClick() {
      this.show = true;
    },
    handleClose() {
      console.log('sssssssssss')
      this.show = false;
    },
  },
};
</script>
