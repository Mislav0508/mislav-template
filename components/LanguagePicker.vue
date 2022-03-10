<template>
  <div>

    <select class="px-2 text-center" 
    v-model="selectedValue" @change="onChange(selectedValue)">

        <option
          v-for="(locale, index) in $i18n.locales"
          :key="index"
          :value="locale.code"
        >{{locale.name}}</option>

    </select>

  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedValue: "",
      // flags: [
      //   "/images/flags/picker-uk.png",
      //   "/images/flags/picker-hr.png",
      //   "/images/flags/picker-de.png",
      // ]
    };
  },
  created() {
    this.selectedValue = this.$i18n.locale;
  },
  methods: {
    onChange(event) {
      this.$router.replace(this.switchLocalePath(event));
    }
  }
}
</script>

<style lang="scss" scoped>
select {
  // box-shadow: 2px 2px 2px rgba(0, 0, 0, 1.0);
  font-size: 1rem;
  background: #4d5061;
  color: var(--primary);
  border: 2px solid #4d5061;
  // appearance: none;
  // border: 0;
  cursor: pointer;
  
}
</style>