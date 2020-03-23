<template>
  <div class="tl-con">
    <v-header>刮刮乐</v-header>
    <div class="tl-main">
      <canvas id="con"></canvas>
    </div>
  </div>
</template>

<script>
  export default {
    name: "scratch",
    methods: {
      pageInit() {
        setTimeout(() => {
          this.clean();
        })
      },

      clean() {
        Object.assign(this.$data, this.$options.data());
        this.canvasInit();
      },

      canvasInit() {
        let self = this;

        function Scratch() {
          this.name = 'scratch';
        }

        Scratch.prototype = {
          init() {
            let canvas = document.getElementById('con');
            this.draw(canvas);
          },
          // 等级
          getLevel(level) {
            level = level || Math.round(Math.random() * 3);  // 四舍五入
            if (!level) return ['很遗憾您没有中奖'];
            let textArr = [];
            textArr.push('恭喜您获得');
            switch (level) {
              case 1:
                textArr.push('一等奖');
                break;
              case 2:
                textArr.push('二等奖');
                break;
              case 3:
                textArr.push('三等奖');
                break;
            }
            return textArr
          },
          // 绘制
          draw(canvas) {
            let width = canvas.width;
            let height = canvas.height;
            canvas.style.backgroundImage = 'url(' + self.bg + ')';
            let ctx = canvas.getContext('2d');
            this.drawText(canvas, ctx, width, height, this.getLevel());
            this.drawMask(canvas, ctx, width, height);
          },
          // 绘制奖项文本
          drawText(canvas, ctx, w, h, prize) {
            ctx.fillStyle = "#ff0";
            ctx.fillRect(0, 0, w, h);
            ctx.font = "24px Microsoft YaHei UI";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            if (prize.length === 1) {
              ctx.fillStyle = "#f00";
              ctx.fillText(prize[0], w / 2, h / 2);
            } else {
              ctx.fillStyle = "#000";
              ctx.fillText(prize[0], w / 2, 50);
              ctx.font = "30px cursive";
              ctx.fillStyle = "#ff4040";
              ctx.fillText(prize[1], w / 2, 90);
            }
          },
          // 绘制遮罩
          drawMask(canvas, ctx, w, h) {
            ctx.fillStyle = "#46a0ff";
            ctx.fillRect(0, 0, w, h);
            // 水印
            let img = new Image(5, 5);
            img.src = self.logo;
            img.onload = () => {
              // createPattern不能自定义大小，用离屏Canvas，设置好宽高后绘制图片进去
              let canvasImg = document.createElement('canvas');
              canvasImg.width = 30;
              canvasImg.height = 30;
              canvasImg.getContext('2d').drawImage(img, 0, 0, 30, 30);
              ctx.fillStyle = ctx.createPattern(canvasImg, 'repeat');
              ctx.fillRect(0, 0, w, h);
            };

            this.listen(canvas, ctx);
          },
          listen(canvas, ctx) {
            let isMobile = window.navigator.userAgent.indexOf('Mobile') !== -1;
            console.log(isMobile);
            let down = isMobile ? 'ontouchstart' : 'onmousedown';
            let move = isMobile ? 'ontouchmove' : 'onmousemove';

            canvas[down] = (event) => {
              console.log('onmousedown', event);
              event = event || window.event; // ie的event在window下
              ctx.moveTo(event.offsetX || event.changedTouches[0].clientX, event.offsetY || event.changedTouches[0].clientY);

              canvas[move] = (event) => {
                console.log('onmousemove', event);
                event = event || window.event;
                ctx.lineTo(event.offsetX || event.changedTouches[0].clientX, event.offsetY || event.changedTouches[0].clientY);
                // ctx.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
                ctx.globalCompositeOperation = 'destination-out';
                ctx.lineWidth = 20;
                ctx.lineCap = 'round'; // 设置线条端点样式
                ctx.lineJoin = 'round'; // 当两条线条交汇时，创建圆形边角
                ctx.stroke();
              };

            };

            document.onmouseup = () => {
              canvas.onmousemove = null;
              canvas.onmouseup = null;
            }

          },
        };

        let scratch = new Scratch();
        canvasScratch.init();

      },
    },
    data() {
      return {
        logo: require('../assets/images/logo/logo.png'),
        bg: require('../assets/images/transform/card1.jpg'),
      }
    },
    mounted() {
    },
    activated() {
      this.pageInit();
    },
  }
</script>

<style scoped lang="scss">
  #con {
    width: 5rem;
    height: 3rem;
    font-family: "Microsoft YaHei UI", cursive;
  }
</style>
