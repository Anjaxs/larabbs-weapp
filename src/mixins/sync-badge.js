export default {
  onShow() {
    console.log('onShow')
    this.updateUnreadCount()
  },
  watch: {
    unreadCount: function() {
      console.log('need update unreadCount')
      this.updateUnreadCount()
    }
  },
  methods: {
    updateUnreadCount() {
      console.log('unreadCount:', this.unreadCount)
      if (this.unreadCount) {
        wx.setTabBarBadge({
          index: 1,
          text: this.unreadCount.toString()
        })
      } else {
        wx.removeTabBarBadge({
          index: 1
        })
      }
    }
  }
}
