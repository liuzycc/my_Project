export default {
  data() {
    return {
      menuList: [],
      collapse: true
    }
  },
  created() {
    this.getMenus()
  },
  methods: {
    logOut() {
      window.sessionStorage.removeItem('token')
      this.$router.push('/login')
    },
    async getMenus() {
      const { data: res } = await this.$http.get('menus')
      console.log(res)
      if (res.meta.status !== 200) return this.$message.error('获取列表失败')
      this.menuList = res.data
    }
  }
}
