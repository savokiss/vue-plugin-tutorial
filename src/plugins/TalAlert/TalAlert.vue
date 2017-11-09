<template>
  <div class="wrapper" v-show="visible">
    <div class="talAlert">
      <p class="body">{{ message }}</p>
      <div class="btnWrapper">
        <button class="btn cancelBtn" @click.stop="handleCancel">取消</button>
        <button class="btn confirmBtn" @click.stop="handleConfirm">确定</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      visible: false,
      message: ''
    }
  },
  methods: {
    close () {
      this.visible = false
    },
    handleCancel () {
      this.reject('canceled')
      this.close()
    },
    handleConfirm () {
      this.resolve('confirmed')
      this.close()
    }
  }
}
</script>

<style scoped>
.wrapper {
  position: fixed;
  z-index: 100;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
}

.talAlert {
  position: fixed;
  z-index: 101;
  width: 80%;
  max-width: 300px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  overflow: hidden;
  border: 1px solid #dedede;
  background-color: #fff;
  border-radius: 5px;
  font-size: 16px;
}

.body {
  min-height: 2rem;
  padding: 0.8rem 0.3rem;
}

.btnWrapper {
  position: relative;
  line-height: 48px;
  font-size: 18px;
  display: flex;
  border-top: 1px solid #dedede;
}

.btn {
  display: block;
  flex: 1;
  height: 0.8rem;
  line-height: 0.8rem;
  text-decoration: none;
  background-color: #fff;
}

.btn:active,.btn:visited {
  background-color: rgba(0, 0, 0, 0.06);
}

.confirmBtn {
  border-left: 1px solid #d5d5d6;
}
</style>

