<template>
  <div class="test">
    <header class="header">
      <span>今天 4/20周一</span>
      <span class="add">
        <van-icon name="plus" @click="addItem" />
      </span>
    </header>
    <main class="list">
      <div class="item" v-for="(item, index) in list" :key="index">
        <van-checkbox v-model="item.finish" />
        <input
          class="describe"
          type="text"
          :readonly="item.finish"
          v-model="item.describe"
          :class="{ fulfilled: item.finish }"
        />
      </div>
    </main>
  </div>
</template>

<script>
import { Checkbox, Icon } from "vant";
export default {
  name: "HelloWorld",
  components: {
    [Checkbox.name]: Checkbox,
    [Icon.name]: Icon,
  },
  data() {
    return {
      check: false,
      list: [
        {
          finish: false,
          describe: "写一个简述，记事本儿",
        },
        {
          finish: false,
          describe: "细化说明，准备销售的照片",
        },
        {
          finish: false,
          describe: "学习iphone找一个模板，规划结构",
        },
        {
          finish: true,
          describe: "测试发布",
        },
      ],
    };
  },
  methods: {
    addItem() {
      this.list.push({ finish: false, describe: "" });
    },
  },
};
</script>

<style scoped lang="scss">
.test {
  .header {
    padding: 8px 8px 16px 8px;
    display: flex;
    justify-content: space-between;
    .add {
      margin-right: 16px;
    }
  }
  .list {
    color: #666666;
    .item {
      display: flex;
      border-bottom: 1px solid #dddddd;
      .van-checkbox {
        padding: 8px 14px 8px 8px;
      }
      .describe {
        flex: 1;
        border: none;
        background-color: #f7f7f7;
        line-height: 36px;
      }
      .fulfilled {
        text-decoration-line: line-through;
      }
    }
  }
}
</style>
