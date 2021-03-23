<template>
  <ul>
    <li
      v-bind:class="{ 'color-green': locale === localeActived }"
      v-for="locale in locales"
      :key="locale"
      @click="switchLocale(locale)"
    >
      {{ $t(locale) }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "LocaleSwitcher",
  methods: {
    switchLocale(locale) {
      if (this.$i18n.locale !== locale) {
        this.$i18n.locale = locale;
        this.localeActived = locale;
      }
    }
  },
  data() {
    return {
      locales: process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(","),
      localeActived: "fr"
    };
  }
};
</script>

<style scoped>
ul {
  position: absolute;
  right: 50px;
}
li {
  text-decoration: underline;
  cursor: pointer;
}

.color-green {
  color: #42b983;
}
</style>
