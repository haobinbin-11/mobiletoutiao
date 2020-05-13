<template>
  <van-cell class="article-item">
    <div slot="title">{{ article.title }}</div>
    <div slot="label">
      <div class="cover-wrap" v-if="article.cover.type === 3">
        <div class="cover-wrap-item">
          <van-image
            width="116"
            height="73"
            fit="vover"
            v-for="(img, index) in article.cover.images"
            :src="img"
            :key="index"
          />
        </div>
      </div>
      <div class="label_wrap">
        <apan>{{ article.aut_name }}</apan>
        <apan>{{ article.aut_count }}评论</apan>
        <apan>{{ article.pubdate }}</apan>
      </div>
    </div>
    <van-image
      v-if="article.cover.type === 1"
      width="116"
      height="73"
      fit="cover"
      :src="article.cover.images[0]"
    />
  </van-cell>
</template>

<script>
export default {
  name: 'ArticleItem',
  components: {},
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>
<style scoped lang="less"></style>
