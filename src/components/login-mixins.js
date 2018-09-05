export default {
  data() {
    return {
      loginform: {
        username: '',
        password: ''
      },
      rulesform: {
        username: [{ required: true, message: '请输入账号', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    }
  },
  methods: {
    resset() {
      this.$refs.loginform.resetFields()
    },
    login() {
      // 首先判断表单验证
      this.$refs.loginform.validate(async valid => {
        if (!valid) return
        const { data: res } = await this.$http.post('login', this.loginform)
        console.log(this.loginform)
        if (res.meta.status !== 200) return this.$message('登录失败')
        window.sessionStorage.setItem('token', res.data.token)
        this.$router.push('/home')
      })
    }
  }
}
