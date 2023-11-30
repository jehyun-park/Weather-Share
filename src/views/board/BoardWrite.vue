<template>
  <div class="board-write">
    <h2>글 등록</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="title">제목</label>
        <input type="text" id="title" v-model="작성제목" required />
      </div>
      <div class="form-group">
        <label for="author">작성자</label>
        <input type="text" id="author" v-model="작성자" required />
      </div>
      <div class="form-group">
        <label for="content">내용</label>

        <textarea
          @input="$emit('write', $event.target.value)"
          id="content"
          v-model="작성한글"
          rows="5"
          required
        ></textarea>
      </div>
      <button
        @click="publish"
        type="submit"
        class="w3-button w3-round w3-blue-gray"
      >
        등록
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      작성한글: '',
      작성제목: '',
      작성자: '',
    };
  },
  methods: {
    publish() {
      var 내게시글 = {
        date: 'May 15',
        title: this.작성제목,
        content: this.작성한글,
        author: this.작성자,
      };

      this.게시글.unshift(내게시글);
    },
  },
};
</script>

<style>
/* 스타일은 동일하게 유지 */
</style>
