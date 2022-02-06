<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
        <a-menu-item key="1">
          <a-icon type="user" />
          <span>实时日志</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="video-camera" />
          <span>实时链路埋点</span>
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="upload" />
          <span>实时业务埋点</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
          height: '100%',
        }"
      >
        <main-content-layout></main-content-layout>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import MainContentLayout from "./MainContentLayout.vue";
var OpenWebSokcet = require("./WebSocketModule");

export default {
  components: {
    MainContentLayout,
  },
  data() {
    return {
      collapsed: false,
    };
  },
  mounted() {
    // 启动底层WebSocket模块
    OpenWebSokcet();
  },
};
</script>
<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}

#components-layout-demo-custom-trigger {
  height: 100%;
}
</style>
