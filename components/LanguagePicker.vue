<template>
  <div class="custom-select">

    <select class="px-2 text-center" 
    v-model="selectedValue" @change="onChange(selectedValue)">

        <option
          v-for="(locale, index) in $i18n.locales"
          :key="index"
          :value="locale.code"
        >{{locale.name}}</option>

    </select>

    <span class="custom-arrow"></span>

  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedValue: ""
    };
  },
  created() {
    this.selectedValue = this.$i18n.locale;
  },
  methods: {
    onChange(event) {
      console.log(event);
      this.$router.replace(this.switchLocalePath(event));
    }
  }
}
</script>

<style lang="scss" scoped>
.custom-select {
  
}
select {
  box-shadow: 0 10px 25px rgba(0, 0, 0, 1.0);
  font-size: 1rem;
  background: #4d5061;
  color: var(--primary);
  // appearance: none;
  border: 0;
  
}
option{
  
}

</style>