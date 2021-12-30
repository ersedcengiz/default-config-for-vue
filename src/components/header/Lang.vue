<template>
    <div id="LangPanel">
        <div class="langspan-content">
            <span
                v-for="lang in langs"
                :key="lang.sort"
                v-on:click="changeLang(lang.short)"
                class="langa"
                ><img
                    :src="lang.img"
                />{{ lang.name }}</span
            >
        </div>
    </div>
</template>

<script>
import trcircle from '@/assets/lang/tr-circle.svg'
import encircle from '@/assets/lang/en-circle.svg'
export default {
  name: 'Lang',
  data() {
    return {
      activeLang: {},
      langs: [
        {
          name: 'Türkçe',
          short: 'tr',
          img: trcircle
        },
        {
          name: 'English',
          short: 'en',
          img: encircle
        }
      ]
    }
  },
  methods: {
    changeLang: function(ln) {
      const fnd = this.langs.find((el) => {
        return el.short === ln
      })
      if (fnd) {
        this.$i18n.locale = ln
        this.activeLang = fnd
      } else {
        this.activeLang = {
          name: 'Türkçe',
          short: 'tr',
          img: trcircle
        }
      }
    }
  },
  mounted: function() {
    const fnd = this.langs.find((el) => {
      return el.short === this.$i18n
    })
    if (fnd) {
      this.activeLang = fnd
    } else {
      this.activeLang = {
        name: 'Türkçe',
        short: 'tr',
        img: trcircle
      }
    }
  }
}
</script>