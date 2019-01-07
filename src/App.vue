<template>
    <div id="app">
        <ul class="list">
            <li v-for="item in list" @click="share(item)">{{item}}</li>
            <li><a href="javascript:window.open('http://www.facebook.com/sharer.php?u='+encodeURIComponent(document.location.href)+'&t='+encodeURIComponent(document.title),'_blank','toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=600, height=450,top=100,left=350');void(0)"> <i class="fa fa-facebook" aria-hidden="true"></i> Share </a></li>
            <li><a href="//plus.google.com/share?app=110&url=http%3A%2F%2Fphpstack-175879-514271.cloudwaysapps.com%2Fproduct%2Fdetail%2Fid%2F46" target="_blank" onclick="window.open(this.href,'','scrollbars=1,resizable=1,width=400,height=620');return false;">
                <div dir="ltr" class="ozWidgetPlusButtonHeight24_"><span id="widget_bounds" style=""><div style="height:24px;" class="ozWidgetRioButton_ ozIdPlusShareButton_" id="button" title="Share"><div class="ozWidgetRioButtonContentWrapper_"><div style="margin:2px 0 0 2px;" class="ozWidgetRioButtonIcon_"><div style="width:18px;height:18px;" class="ozWidgetRioButtonSvgImageWithFallback_ ozWidgetRioButtonIconImage_ ozWidgetRioButtonIconImage18_"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 14 14" class="ozWidgetRioButtonSvg_"><path d="M12.5,6.2V4.7h-1.1v1.5H9.8v1.1h1.5v1.5h1.1V7.3H14V6.2H12.5z"></path><path d="M4.4,6.1v1.7h2.3c-0.2,1-1.1,1.8-2.3,1.8C3,9.6,1.8,8.4,1.8,7S3,4.4,4.4,4.4C5,4.4,5.6,4.6,6,5l1.3-1.3 C6.5,3.1,5.6,2.6,4.4,2.6C2,2.6,0,4.6,0,7s2,4.4,4.4,4.4c2.5,0,4.2-1.8,4.2-4.3c0-0.3,0-0.7-0.1-1C8.5,6.1,4.4,6.1,4.4,6.1z"></path></svg></div></div><span style="font-size:11px;line-height:22px;" class="ozWidgetRioButtonContents_">Share</span></div></div></span>
                </div>
            </a></li>
        </ul>

        <button @click="verify">滑块验证</button>

    </div>
</template>

<script>
    export default {
        name: 'app',
        methods: {
            share(key) {
                console.log(key);
                switch (key) {
                    case 'twitter':
                        window.open("http://twitter.com/home?status=" + encodeURIComponent(location.href) + "" + encodeURIComponent('shareTitle'), "sharer", "toolbar=0,status=0,width=626,height=436");
                        break;
                    case 'facebook':
                        window.open("http://www.facebook.com/sharer.php?u=" + encodeURIComponent(location.href));
                        break;
                    case 'google':
                        window.open("https://plus.google.com/share?url=" + encodeURIComponent(location.href), "sharer", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600");
                        break;
                    case 'linkedIn':
                        window.open("http://www.linkedin.com/shareArticle?url=" + encodeURIComponent(location.href), "sharer", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600");
                        break;
                }
            },

            verify() {
                this.$slideVerify.show();
            },
        },
        data() {
            return {
                list: ['twitter', 'facebook', 'google', 'linkedIn']
            }
        },
        mounted() {
            console.log(1);
        }
    }
</script>

<style lang="scss">
    .list {
        li {
            cursor: pointer;
        }
    }
</style>
