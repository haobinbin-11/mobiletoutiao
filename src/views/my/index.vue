<template>
  <div class="my-container">
    <!-- <div class="user-info">
      <div class="base-info"></div>
      <div class="data-info"></div>
    </div> -->
    <van-cell-group>
      <van-cell
        center
        title="单元格"
        value="内容"
      >
        <van-image
          slot="icon"
          width="50"
          height="50"
          round
          fit="cover"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <div slot="title">昵称</div>
        <van-buttton
          size="small"
          round
        >编辑资料</van-buttton>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: 'MyIndex',
  components: {},
  props: {},
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
