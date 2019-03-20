<template>
    <div class="d-slide" ref="slide">
        <div class="d-slide-container" ref="slideCon">
            <slot>
                <d-slide-item>
                </d-slide-item>
            </slot>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .d-slide {
        width: 100%;
        height: 100%;
        .d-slide-container {
            width: auto;
            height: inherit;
            white-space: nowrap;
        }
    }
</style>

<script>
    import dSlideItem from './slideItem.vue'

    export default {
        name: "d-slide",
        components: {dSlideItem},
        methods: {
            _setSlideWidth(isResize) {
                let slideCon = this.$refs.slideCon;
                this.children = slideCon.children;

                let width = 0;
                this.slideWidth = this.$refs.slide.clientWidth;
                let slideWidth = this.slideWidth;
                for (let i = 0; i < this.children.length; i++) {
                    let child = this.children[i];
                    child.style.width = slideWidth + 'px';
                    width += slideWidth
                }
                if (this.loop && !isResize) {
                    width += 2 * slideWidth
                }
                slideCon.style.width = width + 'px'
            },
            _setSlideHeight(isResize) {
                let slideCon = this.$refs.slideCon;
                this.children = slideCon.children;

                let height = 0;
                this.slideHeight = this.$refs.slide.clientHeight;
                let slideHeight = this.slideHeight;
                for (let i = 0; i < this.children.length; i++) {
                    let child = this.children[i]
                    child.style.height = slideHeight + 'px'
                    height += slideHeight
                }
                if (this.loop && !isResize) {
                    height += 2 * slideHeight
                }
                slideCon.style.height = height + 'px'
            },
        },
        props: [],
        data: function () {
            return {
                slideWidth: 0,
                slideHeight: 0,
            }
        },
        mounted() {
            this._setSlideWidth();
            this._setSlideHeight();
        },
    }
</script>
