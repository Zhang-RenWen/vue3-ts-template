<template>
  <div id="idle-tracker"></div>
</template>
<script setup lang="ts">
import { useUIStore } from '@/stores/useUIStore';
import { storeToRefs } from 'pinia';
import { onMounted, computed, reactive, ref, mergeProps } from 'vue';
import _ from 'lodash';
import { useConfirmsStore } from '@/stores/useConfirmStore';
import { useAlertsStore } from '@/stores/useAlertsStore';
import { usePermissionStore } from '@/stores/usePermissionStore';
const confirm = useConfirmsStore();
const permissionStore = usePermissionStore();
const alert = useAlertsStore();
const detectEvent = ['mousemove', 'scroll', 'keydown', 'resize', 'click'];
const timeout = import.meta.env.VITE_APP_SESSION_TIMEOUT || 30; //單位分鐘
const preNotifyTime = 5; //單位:分鐘
const sessionExpired = 10 * 60 * 1000; //預設10分鐘為session過期時間
let sessionTimer = null;

function setTracker() {
  setTimeout(() => {
    const lastEventTime = new Date(localStorage.getItem('lastEventTime'));

    if (new Date() - lastEventTime > (timeout - preNotifyTime) * 60 * 1000) {
      onPreNotify();
    }

    if (new Date() - lastEventTime > timeout * 60 * 1000) {
      onExpired();
      return;
    }

    setTracker();
  }, 60 * 1000);
}

async function onExpired() {
  clearSessionTimer();
  detectEvent.forEach((e) => window.removeEventListener(e, onActivity));
  await confirm.showMessage({
    content: `閒置時間超過${timeout}分鐘,系統已登出`,
    showCancelButton: false,
  });
  permissionStore.doLogout();
}
function onPreNotify() {
  alert.showMessage({
    content: `再${preNotifyTime}分鐘,系統即將登出`,
  });
}
const onActivity = _.throttle(function () {
  localStorage.setItem('lastEventTime', new Date());
}, 1000);

function keepSessionAlive() {
  sessionTimer = setInterval(permissionStore.doKeepSessionAlive, sessionExpired);
}

function clearSessionTimer() {
  clearInterval(sessionTimer);
  sessionTimer = null;
}

onMounted(async () => {
  detectEvent.forEach((e) => {
    window.addEventListener(e, onActivity, true);
  });
  localStorage.setItem('lastEventTime', new Date());
  setTracker();
  keepSessionAlive();
});
</script>
