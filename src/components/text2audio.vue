<template>
  <div>
    <h1>text2audio</h1>
    <audio :src="audio" ref="audio" controls></audio>
  </div>
</template>

<script>
  import qs from "querystring";

  export default {
    name: "text2audio",
    data() {
      return {
        audio: null,
        list: [
          "学宫随着那场九国春秋乱大战落幕，百家争鸣的景象已经不再，可士子人人平等学术不分高下的浩然风气仍然流传了下来，一般而言，建筑恢弘的上阴学宫除去唯有祭酒可入内的功德林，其余各处都去得，各书都读得，只不过一些不成文的规矩千百年来也根深蒂固起来，这些规矩并非历代祭酒创立，多半缘于学宫内某位大学士过于名声鼎盛，后辈出于崇敬，便自动遵循起来，例如上阴学宫有一座大意湖，种植青莲无数，湖水不深，只有两人深度，可清晰见底，一株株青莲可见枝蔓根须，泛舟于上，便像是浮舟于天，宛如仙境。",
          "寻常学宫士子不敢来大意湖泛舟游赏青莲，一则这是黄龙士的成名地，二来一位女子的住所就在湖畔一座阁楼。",
          "这五六年上阴学宫的风头，可都是被她一人给抢光了。"
        ]
      }
    },
    methods: {
      init() {
        this.$refs.audio.volume = 0.5;
        this.getAudio();
      },
      getToken() {
        let APIKey = "73LKbHKLteknKhtOv4RMyc7V";
        let SecretKey = "Oa7fLBIazbITQPidLgNIRbtlbqxDYzqE";
        let url = `https://openapi.baidu.com/oauth/2.0/token?grant_type=client_credentials&client_id=${APIKey}&client_secret=${SecretKey}`;
        console.log(url);
        let token = {
          "access_token": "24.89114068e418b70088a8a399148f3ce7.2592000.1587355712.282335-18966664",
          "session_key": "9mzdA5PkxGEMJ24EV8WvOhkdFdEmLvmomS+VvsvKkQmXWo+xjX5fVFiu\/OIN7tmDLkEtU6KmoBy0O\/p0RYxyWoMCDsEpag==",
          "scope": "audio_voice_assistant_get brain_enhanced_asr audio_tts_post public brain_all_scope picchain_test_picchain_api_scope wise_adapt lebo_resource_base lightservice_public hetu_basic lightcms_map_poi kaidian_kaidian ApsMisTest_Test\u6743\u9650 vis-classify_flower lpq_\u5f00\u653e cop_helloScope ApsMis_fangdi_permission smartapp_snsapi_base iop_autocar oauth_tp_app smartapp_smart_game_openapi oauth_sessionkey smartapp_swanid_verify smartapp_opensource_openapi smartapp_opensource_recapi qatest_scope1 fake_face_detect_\u5f00\u653eScope vis-ocr_\u865a\u62df\u4eba\u7269\u52a9\u7406 idl-video_\u865a\u62df\u4eba\u7269\u52a9\u7406",
          "refresh_token": "25.9a7ad51e1078a8ad6b8ea64a799f9ccd.315360000.1900123712.282335-18966664",
          "session_secret": "3ec732cc0b03685378611607ac34bbe6",
          "expires_in": 2592000
        };
      },
      getAudio() {
        let url = "http://tsn.baidu.com/text2audio?";
        let tex = encodeURI(this.list[0]);
        let param = {
          tex: tex, // 合成的文本，使用UTF-8编码。小于2048个中文字或者英文数字
          tok: "24.89114068e418b70088a8a399148f3ce7.2592000.1587355712.282335-18966664", // 开放平台获取到的开发者access_token
          cuid: "24.89114068e418b70088a8a399148f3ce7.2592000.1587355712.282335-18966664", // 用户唯一标识，用来计算UV值。建议填写能区分用户的机器 MAC 地址或 IMEI 码，长度为60字符以内
          ctp: 1, // 客户端类型选择，web端填写固定值1
          lan: "zh", // 固定值zh。语言选择,目前只有中英文混合模式，填写固定值zh
          // spd: "5", // 语速，取值0-15，默认为5中语速
          // pit: "5", // 音调，取值0-15，默认为5中语调
          // vol: "5", // 音量，取值0-15，默认为5中音量
          per: "103", // 基础音库，度小宇=1，度小美=0，度逍遥=3，度丫丫=4；精品音库：度博文=106，度小童=110，度小萌=111，度米朵=103，度小娇=5
          // aue: "3", // 3为mp3格式(默认)； 4为pcm-16k；5为pcm-8k；6为wav（内容同pcm-16k）; 注意aue=4或者6是语音识别要求的格式，但是音频内容不是语音识别要求的自然人发音，所以识别效果会受影响。
        };
        url = url + qs.stringify(param);
        axios({
          url,
          method: "get",
          responseType: "blob"
        }).then(res => {
          console.log(res);
          this.audio = window.URL.createObjectURL(res.data);
        }).catch(err => {
          console.error(err);
        });
      },
    },
    mounted() {
      this.init();
    }
  }
</script>

<style scoped lang="scss">

</style>
