<template>
  <!-- C1 -->
  <select v-model="$i18n.locale" @change="changeLanguage">
      <option value="en">English</option>
      <option value="vi">Vietnam</option>
  </select>
  
  <!-- C2 -->
  <!-- <div>
    <select v-model="$i18n.locale">
      <option
        v-for="(lang, i) in langs"
        :key="`lang-${i}`"
        :value="lang">
          {{ lang }}
      </option>
    </select>
  </div> -->

    <!-- <div class="dropdown">
        <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">Ngôn ngữ
        <span class="caret"></span></button>
        <ul class="dropdown-menu">
            <li><a href="#">Việt Nam</a></li>
            <li><a href="#">English</a></li>
        </ul>
    </div> -->
</template>



<script>
export default {
  // C1
  methods:{
      changeLanguage(obj){
          localStorage.setItem('language',obj.target.value)
      }
  }

  // C2
  // name: 'SwitchLocale',
  // data() {
  //   return { langs: ['en', 'vi'] }
  // }
}
</script> 
















// https://github.com/cretueusebiu/laravel-vue-spa/blob/master/resources/js/components/LocaleDropdown.vue
