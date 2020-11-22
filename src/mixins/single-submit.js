export default {
  data: {
    // 提交中状态
    isSubmitting: false
  },
  methods: {
    async singleSubmit() {
      console.log(this.isSubmitting)
      if (this.isSubmitting) {
        return
      }

      this.isSubmitting = true

      await this.submit()

      this.isSubmitting = false
    }
  }
}
