<script setup>
import { ref, computed } from "vue";
import { RouterView, useRoute, useRouter } from "vue-router";
import { useAlertsStore } from "@/stores/alerts";

import menus from "@/assets/nav-menu.json";
import logo from "@/assets/logo.png";

const route = useRoute();
const router = useRouter();

const alert = useAlertsStore();

const drawer = ref(false);
const user = ref(null);

const title = computed(() => {
  return route.meta?.title || route.name;
});

const showAppBar = computed(() => {
  return true;
});

const showNav = computed(() => {
  return true; //!!route.meta?.parent;
});

function navIconClicked() {
  if (!route.meta?.parent) {
    drawer.value = !drawer.value;
  } else {
    router.back();
  }
}
</script>

<template>
  <v-app>
    <!-- Drawer -->
    <v-navigation-drawer v-model="drawer" app>
      <v-card color="primary" dark tile flat>
        <div
          class="mx-4"
          style="border-radius: 50%; width: 60px; height: 60px"
          :style="`background: url(${user?.photoURL}); background-size: cover;`"
        ></div>

        <v-list dense>
          <v-list-item :title="user?.displayName" :subtitle="user?.email" />
        </v-list>
      </v-card>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item
          v-for="(menu, i) in menus"
          :key="i"
          :prepend-icon="menu.icon"
          :title="menu.title"
          :value="menu.path"
        />
      </v-list>
    </v-navigation-drawer>

    <!-- Header -->
    <v-app-bar
      app
      color="primary"
      class="mx-auto"
      dark
      flat
      max-width="500"
      :style="{ visibility: showAppBar ? 'visible' : 'hidden' }"
    >
      <template v-slot:prepend>
        <v-app-bar-nav-icon v-if="showNav" @click.stop="navIconClicked" />
        <v-app-bar-nav-icon v-else icon="mdi-arrow-left" @click.stop="navIconClicked" />
      </template>

      <div class="d-flex align-center">
        <v-img
          :src="logo"
          class="shrink mx-2"
          contain
          transition="scale-transition"
          width="48"
          @dblclick="$router.push('/')"
        ></v-img>

        <v-divider vertical class="mr-4"></v-divider>

        <v-toolbar-title>
          <template>
            <div class="d-flex flex-column">
              <div class="text-uppercase text-subtitle-2" style="height: 17px">
                <span>{{ title }}</span>
              </div>
            </div>
          </template>
        </v-toolbar-title>
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <!-- Main View -->
    <v-main>
      <router-view></router-view>
    </v-main>

    <!-- Progress -->
    <v-overlay :value="alert.progress">
      <v-progress-circular indeterminate size="64" />
    </v-overlay>

    <!-- Snackbar -->
    <v-snackbar
      v-model="alert.snackbar.visible"
      :color="alert.snackbar.type"
      :timeout="alert.snackbar.timeout"
      bottom
    >
      {{ alert.snackbar.content }}
      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="alert.hideSnackbar()">{{ alert.snackbar.button }}</v-btn>
      </template>
    </v-snackbar>

    <!-- Alert Dialog -->
    <v-dialog v-model="alert.message.visible" max-width="400">
      <v-card>
        <v-card-title class="title">
          {{ alert.message.title }}
        </v-card-title>

        <v-card-text>{{ alert.message.content }}</v-card-text>

        <v-card-actions>
          <v-spacer />

          <v-btn text color="primary" @click="alert.hideMessage()">
            {{ alert.message.button }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>
