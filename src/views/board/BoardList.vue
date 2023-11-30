<template>
  <div class="board-list">
    <BoardWrite @post-added="addPost" />
    <div class="common-buttons">
      <button
        @click="post"
        type="button"
        class="w3-button w3-round w3-blue-gray"
      >
        등록
      </button>
    </div>
    <table class="w3-table-all">
      <thead>
        <tr>
          <th>No</th>
          <th>제목</th>
          <th>작성자</th>
          <th>등록일시</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(post, index) in 게시글"
          :key="index"
          @click="$router.push('detail/' + index)"
        >
          <td>{{ index + 1 }}</td>
          <td>{{ post.title }}</td>
          <td>{{ post.author }}</td>
          <td>{{ post.date }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {},
  components: {},
  props: {
    게시글: Array,
  },
  methods: {
    post() {
      this.$router.push('/board/write');
    },
  },
};
</script>

<style>
.board-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

.w3-table-all {
  width: 80%;
  max-width: 600px;
  border: 1px solid #ddd;
  border-collapse: collapse;
}

.w3-table-all th,
.w3-table-all td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}

.w3-table-all th {
  background-color: #f2f2f2;
}
</style>
