<template>
  <div class="chanbel-eadit">
    <!-- 我的频道 -->
    <van-cell center :border="false">
      <div
        slot="title"
        class="channel-title"
      >我的频道</div>
      <van-button
        type="danger"
        round
        plain
        size="mini"
        @click="isEdit = !isEdit"
      >{{ isEdit ? '完成' : '编辑' }}</van-button>
    </van-cell>
    <van-grid :gutter="10">
      <van-grid-item
        :icon="(isEdit && index != 0) ? 'clear' : ''"
        class="grid-item"
        :class="{ active: index === active }"
        v-for="(channel, index) in userChannels"
        :key="index"
        :text="channel.name"
        @click="onUserChannelClick(index)"
      />
    </van-grid>
    <!-- /我的频道 -->

    <!-- 频道推荐 -->
    <van-cell center :border="false">
      <div
        slot="title"
        class="channel-title"
      >频道推荐</div>
    </van-cell>
    <van-grid :gutter="10">
      <van-grid-item
        class="grid-item"
        v-for="(channel, index) in recommendChannels"
        :key="index"
        :text="channel.name"
        @click="onAdd(channel)"
      />
    </van-grid>
    <!-- /频道推荐 -->
  </div>
</template>

<script>
import { getAllChannels } from '@/api/channel'
export default {
  name: 'ChannelEdit',
  components: {},
  props: {
    userChannels: {
      type: Array,
      requied: true
    },
    active: {
      type: Number,
      requied: true
    }
  },
  data () {
    return {
      AllChannels: [], // 获取所有频道数据列表
      isEdit: false // 控制编辑的显示状态
    }
  },
  computed: {
    // 推荐的频道列表
    recommendChannels () {
      // filter 方法: 过滤数据 根据方法返回布尔值 true 来收集数据
      return this.AllChannels.filter(channel => {
        return !this.userChannels.find(userChannel => {
          return userChannel.id === channel.id
        })
      })
    }
  },
  watch: {},
  created () {
    this.loadAllChannels()
  },
  mounted () {},
  methods: {
    async loadAllChannels () {
      const { data } = await getAllChannels()
      this.AllChannels = data.data.channels
    },
    onAdd (channel) {
      this.userChannels.push(channel)
    },
    onUserChannelClick (index) {
      // 编辑状态 删除频道
      if (this.isEdit && index !== 0) {
        this.deleteChannel(index)
      } else {
        // 非编辑状态 切换频道
        this.switchChannel(index)
      }
    },
    deleteChannel (index) {
      // 如果删除的是当前激活频道之前的频道
      if (index <= this.active) {
        // 更新激活频道的索引
        this.$emit('update-active', this.active - 1)
      }
      this.userChannels.splice(index, 1)
      // 数据持久化
    },
    switchChannel (index) {
      console.log('切换频道')

      // 切换频道
      this.$emit('update-active', index)

      // 关闭弹出层
      this.$emit('close')
    }
  }
}
</script>
<style scoped lang="less">
.chanbel-eadit {
    padding-top: 55px;
    .channel-title {
        font-size: 16px;
        color: #333333;
    }
    .grid-item {
        width: 80px;
        height: 43px;
        /deep/ .van-grid-item__content{
            background-color: #f4f5f6;
            /deep/ .van-grid-item__text {
                font-size: 14px;
                color: #222;
                margin-top: 0;
            }
        }
        /deep/ .van-grid-item__icon {
            position: absolute;
            right: -5px;
            top: -5px;
            color: #cccccc;
            font-size: 18px;
        }
    }
    .active {
      /deep/ .van-grid-item__text {
        color: red !important;
      }
    }
}
</style>
