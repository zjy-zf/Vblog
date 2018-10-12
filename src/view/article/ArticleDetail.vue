<!-- 文章展示页面 -->
<template>
  <div class="artical-detail-show">
    <header class="article-header">
      <h1 class="article-title">{{article.title}}</h1>
      <div class="meta">
        <span><svg-icon icon-class="tag"></svg-icon> {{article.tags}}</span>
        <span><svg-icon icon-class="user"></svg-icon> {{article.userName}}</span>
        <span><i class="el-icon-time"></i> {{article.publishTime | parseTime}}</span>
        <span><svg-icon icon-class="eye"></svg-icon> {{article.clickHit}}浏览</span>
        <span><svg-icon icon-class="comment"></svg-icon> {{article.replyHit}}评论</span>
      </div>
    </header>
    <article class="article-content" v-html="article.content"></article>
  </div>
</template>

<script>
  import { parseTime } from '@/utils'
  import { getArticleDetail } from '@/api/article'
  export default {
    name: 'ArticalDetail',
    data() {
      return {
        article: {
          title: '',
          tag: '',
          userName: '',
          publishTime: '',
          clickHit: '',
          replyHit:　'',
          content: ''
        }
      }
    },
    filters: {
      parseTime(value){
        return parseTime(value)
      }
    },
    created() {
      this.getArticleDetail(this.$route.params)
    },
    methods: {
      getArticleDetail(id) {
        getArticleDetail(id).then(response => {
          this.article = response.data
        })
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  .artical-detail-show {
    .article-header {
      padding: 2px 20px 12px;
      background-color: #fff;
      border-bottom: 1px solid #eee;
      .article-title {
        color: #444;
        font-weight: 400;
        font-size: 24px;
        line-height: 40px;
        margin-bottom: 10px;
      }
      .meta {
        span {
          color: #999;
          margin-left: 20px;
          &:first-child {
            margin-left: 0px;
          }
        }
      }
    }
    .article-content {
      font-size: 15px;
      line-height: 26px;
      text-indent: 30px;
      word-break: break-all;
      word-wrap: break-word;
      position: relative;
      padding: 10px 20px 20px 20px;
      background-color: #fff;
      color: #999;
    }

    ol, li {
      padding: 0;
        list-style: none;
    }
    .article-content h2 {
      font-size: 18px;
      font-weight: blod;
      margin: 20px -20px 20px -24px;
      padding: 10px 20px 9px 10px;
      line-height: 18px;
      border-left: 4px solid #00a67c;
      background-color: #fbfbfb
    }

    .article-content h3 {
      font-size: 16px;
      font-weight: blod;
      margin-bottom: 10px
    }

    .article-content h4 {
      font-size: 15px;
      font-weight: blod
    }

    .article-content p {
      margin: 0 0 15px 0
    }

    .article-content ol,.article-content ul {
      margin: 8px 0 8px 30px
    }

    .article-content li:before {
      display: inline-block;
      font-family: FontAwesome;
      font-style: normal;
      font-weight: 400;
      -webkit-font-smoothing: antialiased;
      content: "\f192";
      width: 20px;
      height: 0;
      line-height: 30px;
      font-size: 12px;
      color: #bbb
    }

    .article-content li {
      text-indent: 0;
      line-height: 30px
    }

    .article-content table {
      border-top: solid 1px #ddd;
      border-left: solid 1px #ddd;
      width: 100%;
      margin-bottom: 16px;
      text-indent: 0
    }

    .article-content table th {
      background-color: #f9f9f9;
      text-align: center
    }

    .article-content table td,.article-content table th {
      border-bottom: solid 1px #ddd;
      border-right: solid 1px #ddd;
      padding: 5px 10px
    }

    .article-content .alignleft {
      float: left;
      text-align: left;
      margin-right: 10px
    }

    .article-content .aligncenter {
      margin: 0 auto;
      text-align: center;
      display: block
    }

    .article-content .alignright {
      float: right;
      text-align: right;
      margin-left: 10px
    }

    .article-content a {
      color: #00a67c
    }

    .article-content a:hover {
      color: #d9534f
    }

    .article-content a.dl {
      border: 2px solid #fff;
      border-radius: 2px;
      margin: 10px 5px 20px 25px;
      box-shadow: 0 0 0 1px #EEE;
      color: #fff;
      display: inline-block;
      text-align: center;
      padding: 8px 16px;
      cursor: pointer;
      vertical-align: text-bottom;
      background: #5fbaac;
      text-indent: 0
    }

    .article-content a.dl i {
      margin-right: 10px;
      vertical-align: inherit
    }

    .article-content a.dl:hover {
      background: #f78585
    }

    .article-content img {
      margin: 0 auto
    }
  }

</style>
