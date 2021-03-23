<script>
import SockJS from "sockjs-client";
import Stomp from "webstomp-client";
export default {
  name: "SockJsClient",
  props: {
    topic: String,
    onMessage: Function
  },
  data() {
    return {
      received_messages: [],
      send_message: null,
      connected: false
    };
  },
  methods: {
    /*send() {
      console.log("Send message:" + this.send_message);
      if (this.stompClient && this.stompClient.connected) {
        const msg = { name: this.send_message };
        console.log(JSON.stringify(msg));
        this.stompClient.send("/app/hello", JSON.stringify(msg), {});
      }
    },*/
    connect() {
      this.socket = new SockJS(process.env.VUE_APP_WEBSOCKET_BASE_URL);
      this.stompClient = Stomp.over(this.socket);
      this.stompClient.debug = () => {};
      this.stompClient.connect(
        {},
        () => {
          this.connected = true;
          this.subscribe();
        },
        error => {
          console.log(error);
          this.connected = false;
        }
      );
    },
    subscribe() {
      this.stompClient.subscribe(this.topic, tick => {
        this.onMessage(JSON.parse(tick.body));
      });
    },
    disconnect() {
      if (this.stompClient) {
        this.stompClient.disconnect();
      }
      this.connected = false;
    },
    tickleConnection() {
      this.connected ? this.disconnect() : this.connect();
    }
  },
  mounted() {
    this.connect();
  },

  render: function() {
    return null; // avoid warning message
  }
};
</script>
