const ws = {
    main: null,
    url: 'localhost:8085?name=d001',
    connect() {
        this.main = new WebSocket('ws://' + this.url);
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
