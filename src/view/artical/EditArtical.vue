<template>
  <div class="createPost-container">
    <el-form class="form-container" :model="postForm" :rules="rules" ref="postForm">

      <el-button v-loading="loading" style="margin-left: 10px;" type="success" @click="submitForm">发布
      </el-button>
      <el-button v-loading="loading" type="warning" @click="draftForm">草稿</el-button>

      <div class="createPost-main-container">
        <el-row>

          <el-col :span="24">
            <el-form-item style="margin-bottom: 40px;" prop="title">
              <MDinput name="name" v-model="postForm.title" required :maxlength="100">
                标题
              </MDinput>
            </el-form-item>

            <div class="postInfo-container">
              <el-row>
                <el-col :span="8">
                  <el-form-item label-width="45px" label="标签:" class="postInfo-container-item">
                    <el-input v-model="postForm.tag" placeholder="多标签请用逗号分隔"></el-input>
                  </el-form-item>
                </el-col>

                <el-col :span="8">
                  <el-form-item label-width="80px" label="分类:" class="postInfo-container-item" prop="categoryId">
                    <el-select v-model="postForm.categoryId" placeholder="请选择文章分类">
                      <el-option v-for="item in categoryOptions" 
                      :key="item.id" :value="item.id" :label="item.name"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>

                <el-col :span="8">
                  <el-form-item label-width="80px" label="展现方式:" class="postInfo-container-item" prop="showMode">
                    <el-switch
                      v-model="postForm.showMode"
                      active-color="#13ce66"
                      inactive-color="#ff4949"
                      active-text="公开"
                      inactive-text="私有"
                      active-value="1"
                      inactive-value="2">
                    </el-switch>
                  </el-form-item>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>

        <el-form-item style="margin-bottom: 40px;" label-width="45px" label="摘要:">
          <el-input type="textarea" class="article-textarea" :rows="1" autosize placeholder="请输入内容" v-model="postForm.digest">
          </el-input>
          <span class="word-counter" v-show="contentShortLength">{{contentShortLength}}字</span>
        </el-form-item>

        <div class="editor-container">
          <Tinymce :height=600 ref="editor" v-model="postForm.content" />
        </div>
      </div>
    </el-form>

  </div>
</template>

<script>
import Tinymce from '@/components/Tinymce'
import MDinput from '@/components/MDinput'
import { createArticle } from '@/api/article'
import { getCategoryList } from '@/api/category'

const defaultForm = {
  status: 'draft',
  title: '', // 文章题目
  content: '', // 文章内容
  digest: '', // 文章摘要
  categoryId: '', //分类ID
  id: undefined,
  tags: '', //文章标签，自己填写，多个用’,’分隔
  showMode: '1', //展示方式(1：公开；2：私有)
  articleStatus: '0' //文章状态(0：编辑中；1：已发布)
}

export default {
  name: 'articleDetail',
  components: { Tinymce, MDinput },
  props: {
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      postForm: Object.assign({}, defaultForm),
      loading: false,
      categoryOptions: [],
      rules: {
        /*title: [{ validator: validateRequire }],
        content: [{ validator: validateRequire }],
        categoryId : [{ validator: validateRequire }],
        showMode: [{ validator: validateRequire }]*/
      }
    }
  },
  computed: {
    contentShortLength() {
      return this.postForm.digest.length
    }
  },
  created() {
    this.getCategoryList()
    if (this.isEdit) {
      const id = this.$route.params && this.$route.params.id
      this.fetchData(id)
    } else {
      this.postForm = Object.assign({}, defaultForm)
    }
  },
  methods: {
    getCategoryList() {
      getCategoryList().then(response => {
        this.categoryOptions = response.data.data
      })
    },
    fetchData(id) {
      fetchArticle(id).then(response => {
        this.postForm = response.data
        // Just for test
        this.postForm.title += `   Article Id:${this.postForm.id}`
        this.postForm.content_short += `   Article Id:${this.postForm.id}`
      }).catch(err => {
        console.log(err)
      })
    },
    submitForm() {
      this.$refs.postForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.postForm.articleStatus = '1'
          createArticle(this.postForm).then(response => {
            this.$notify({
              title: '成功',
              message: '发布文章成功',
              type: 'success',
              duration: 2000
            })
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    draftForm() {
      if (this.postForm.content.length === 0 || this.postForm.title.length === 0) {
        this.$message({
          message: '请填写必要的标题和内容',
          type: 'warning'
        })
        return
      }
      this.postForm.articleStatus = '0'
      createArticle(this.postForm).then(response => {
        this.$message({
          message: '保存成功',
          type: 'success',
          showClose: true,
          duration: 1000
        })
        this.loading = false
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/style/mixin.scss";
.createPost-container {
  position: relative;
  .createPost-main-container {
    padding: 40px 45px 20px 50px;
    .postInfo-container {
      position: relative;
      @include clearfix;
      margin-bottom: 10px;
      .postInfo-container-item {
        float: left;
      }
    }
    .editor-container {
      min-height: 500px;
      margin: 0 0 30px;
      .editor-upload-btn-container {
        text-align: right;
        margin-right: 10px;
        .editor-upload-btn {
          display: inline-block;
        }
      }
    }
  }
  .word-counter {
    width: 40px;
    position: absolute;
    right: -10px;
    top: 0px;
  }
}
</style>
