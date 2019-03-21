const ws = {
    main: null,
    url: 'ws://localhost:8085',
    connect(data) {
        let params = data ? '?id=' + data.id + '&name=' + data.name : '';
        this.main = new WebSocket(this.url + params);
        this.main.onopen = this.open;
        this.main.onmessage = this.message;
        this.main.onerror = this.error;
        this.main.onclose = this.close;
    },
    open() {
        console.log('open');
    },
    message(data) {
        console.log('msg', data);
    },
    send(data) {
        this.main.send(data);
    },
    error(error) {
        console.log(error);
    },
    close() {
        console.log('webSocket断开连接')
    },
};

export default ws
