<template>
    <div class="tl-con">
        <h1>BMap</h1>

        <div id="map"></div>

        <router-link to="/mine">mine</router-link>

    </div>
</template>

<style scoped lang="scss">
    .list {
        li {
            cursor: pointer;
            line-height: 1rem;
            margin-left: 1rem;
        }
    }

    a {
        line-height: 1rem;
        margin-left: 1rem;
    }

    #map {
        width: 100%;
        height: 300px;
    }

</style>

<script>
    export default {
        name: "BMap",
        methods: {
            loadMapJS() {
                let self = this;

                if (!document.getElementById('BMap')) {
                    let ak = '4MMeD1D97IwjG7XLr9GgW1fSEn3IUsQc';
                    let url = window.location.protocol + '//api.map.baidu.com/getscript?v=2.0&ak=' + ak + '&services=&t=20190123111209';

                    let head = document.getElementsByTagName('head')[0];
                    let script = document.createElement('script');
                    script.type = 'text/javascript';
                    script.src = url;
                    script.setAttribute('id', 'BMap');
                    script.onload = script.onreadystatechange = function () {
                        if (!this.readyState || this.readyState === "loaded" || this.readyState === "complete") {
                            script.onload = script.onreadystatechange = null;
                            console.log('BMap load');
                            self.mapObj.init();
                        }
                    };
                    head.appendChild(script);
                    window.BMap_loadScriptTime = (new Date).getTime();

                } else {
                    self.mapObj.init();
                }

            },

        },
        data() {
            return {
                mapObj: {
                    map: null,
                    createMap() {
                        this.map = new BMap.Map("map"); // 在百度地图容器中创建一个地图
                        let point = new BMap.Point(114.114279, 22.550634); // 定义一个中心点坐标
                        this.map.centerAndZoom(point, 18); // 设定地图的中心点和坐标并将地图显示在地图容器中
                    },
                    setMapEvent() {
                        this.map.enableDragging(); // 启用地图拖拽事件，默认启用(可不写)
                        this.map.disableScrollWheelZoom(); // 禁用地图滚轮放大缩小，默认禁用(可不写)
                        this.map.enableDoubleClickZoom(); // 启用鼠标双击放大，默认启用(可不写)
                        this.map.enableKeyboard(); // 启用键盘上下左右键移动地图
                    },
                    addMapControl() {
                        // 向地图中添加缩放控件
                        let ctrl_nav = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_LEFT, type: BMAP_NAVIGATION_CONTROL_LARGE});
                        this.map.addControl(ctrl_nav);
                        // 向地图中添加比例尺控件
                        let ctrl_sca = new BMap.ScaleControl({anchor: BMAP_ANCHOR_BOTTOM_LEFT});
                        this.map.addControl(ctrl_sca);
                    },
                    markerArr: [{title: "麦斐软件", content: "蔡屋围金龙大厦2002", point: "114.113439|22.550493", isOpen: true, icon: {w: 23, h: 25, l: 46, t: 21, x: 9, lb: 12}}],
                    addMarker() {
                        this.markerArr.map((item, i) => {
                            let p0 = item.point.split("|")[0];
                            let p1 = item.point.split("|")[1];
                            let point = new BMap.Point(p0, p1);
                            let iconImg = this.createIcon(item.icon);
                            let marker = new BMap.Marker(point, {icon: iconImg});
                            let iw = this.createInfoWindow(i);
                            let label = new BMap.Label(item.title, {"offset": new BMap.Size(item.icon.lb - item.icon.x + 10, -20)});
                            marker.setLabel(label);
                            this.map.addOverlay(marker);
                            label.setStyle({
                                borderColor: "#808080",
                                color: "#333",
                                cursor: "pointer"
                            });

                            // 信息窗口事件
                            let _iw = this.createInfoWindow(i);
                            let _marker = marker;
                            _marker.addEventListener("click", function () {
                                this.openInfoWindow(_iw);
                            });
                            _iw.addEventListener("open", function () {
                                _marker.getLabel().hide();
                            });
                            _iw.addEventListener("close", function () {
                                _marker.getLabel().show();
                            });
                            label.addEventListener("click", function () {
                                _marker.openInfoWindow(_iw);
                            });
                            if (item.isOpen) {
                                label.hide();
                                _marker.openInfoWindow(_iw);
                            }
                        });

                    },
                    createInfoWindow(i) {
                        let json = this.markerArr[i];
                        return new BMap.InfoWindow("<b class='iw_poi_title' title='" + json.title + "'>" + json.title + "</b><div class='iw_poi_content'>" + json.content + "</div>");
                    },
                    createIcon(json) {
                        return new BMap.Icon("http://app.baidu.com/map/images/us_mk_icon.png", new BMap.Size(json.w, json.h), {imageOffset: new BMap.Size(-json.l, -json.t), infoWindowOffset: new BMap.Size(json.lb + 5, 1), offset: new BMap.Size(json.x, json.h)})
                    },
                    init() {
                        this.createMap();
                        this.setMapEvent();
                        this.addMapControl();
                        this.addMarker();
                    },
                },
            }
        },
        mounted() {
        },
        activated() {
            this.loadMapJS();
        },
    }
</script>
