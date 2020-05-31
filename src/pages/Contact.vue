<template>
  <Layout>
    <h1 class="page-title">Contact Me.</h1>
    <h2>Hey! 🖐</h2>
    <h3>Can't wait to hear from you.</h3>
    <h4>you can mail me at <g-link href="mailto:contact@itzik.co">contact@itzik.co</g-link> or just use the form below.</h4>
    <div class="panel">
      <div class="state"><br><i class="fa fa-envelope-square"></i><br><h1>Contact</h1></div>
      <div class="form">
        <form
                @submit="checkForm"
                action="https://send.pageclip.co/4zSBzG3af0NkVOL1Z9lcA01mrKEJdSoB"
                class="pageclip-form"
                method="post"
        >
          <p v-if="errors.length">
            <b>Please correct the following error(s):</b>
          <ul>
            <li v-for="error in errors">{{ error }}</li>
          </ul>
          </p>
          <input type="text" name="name" placeholder="Chuck Norris" />
          <input type="email" name="email" placeholder="your@email.com" />
          <textarea name="content"></textarea>
          <button type="submit" value="Submit" class="pageclip-form__submit send">
            <span>Send</span>
          </button>
        </form>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Contact Me.',
    script: [{ key: 'script', src: 'https://s.pageclip.co/v1/pageclip.js', body: true, type: 'text/javascript' },]
  },
  data: () => {
    return {
    errors: [],
    name: [],
    email: [],
    content: [],
    }
  },
  methods: {
    checkForm(e) {
      if (!this.name || this.name.length >= 0)
        this.errors.push("Name required.");
      if (!this.email || this.name.length >= 0)
        this.errors.push("Email required.");
      if (!this.content)
        this.errors.push("Message body required.");
      if (this.content.length < 50)
        this.errors.push("Message body min length is 50.");
      e.preventDefault();
    }
  }
}
</script>

<style scoped type="scss">
  @import "https://s.pageclip.co/v1/pageclip.css";
  .panel *:focus {
    box-shadow: 0 0 5px rgba(81, 203, 238, 1);
    border: 1px solid rgba(81, 203, 238, 1);
  }
  .panel {
    width: 400px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    box-shadow: var(--bshadow);
    background: var(--bg-teritary);
    color: var(--body-color);
    margin: 50px auto;
    padding-bottom: 1rem;
    text-align: center;
  }
  .panel .state {
    margin-top: 5px;
    width: 100%;
    height: 155px;
    color: var(--body-color);
    font-size: 20px;
  }
  .panel .state i {
    font-size: 40px;
  }
  .panel .state i {
    color: var(--body-color);
    line-height: 33px;
    height: 30px;
    width: 30px;
    display: inline-block;
  }
  .panel .state h2 {
    font-weight: 400;
  }
  .panel .form {
    width: 340px;
    margin: 5px auto;
  }
  .panel .send {
    height: 45px;
    width: 100%;
    background-color: #8bc34a;
    -webkit-border-radius: 45px;
    -moz-border-radius: 45px;
    border: 0;
    border-radius: 45px;
    position: relative;
    line-height: 45px;
    text-align: center;
    font-weight: bold;
    color: white;
    margin-top: 10px;
    -webkit-transition: background .2s;
    -moz-transition: background .2s;
    -o-transition: background .2s;
    transition: background .2s;
    cursor: pointer;
  }
  .panel .send:active {
    -webkit-transform: translateY(2px);
    -moz-transform: translateY(2px);
    -ms-transform: translateY(2px);
    -o-transform: translateY(2px);
    transform: translateY(2px);
  }
  .panel .send:hover {
    background-color: #599b2d;
  }
  .panel input {
    background: var(--bg);
    -webkit-border-radius: 45px;
    -moz-border-radius: 45px;
    border-radius: 45px;
    font-size: 15px;
    height: 45px;
    color: var(--body-color);
    border: none;
    padding-left: 15px;
    width: -webkit-calc(100% - 15px);
    width: -moz-calc(100% - 15px);
    width: calc(100% - 15px);
    margin-bottom: 10px;
  }
  .panel input[placeholder] {
    color: var(--body-color);
    font-size: 15px;
    font-weight: 500;
  }
  .panel textarea {
    color: var(--body-color);
    background: var(--bg);
    -webkit-border-radius: 45px;
    -moz-border-radius: 45px;
    border-radius: 10px;
    font-size: 15px;
    height: 200px;
    border: none;
    padding-left: 15px;
    width: -webkit-calc(100% - 15px);
    width: -moz-calc(100% - 15px);
    width: calc(100% - 15px);
    margin-bottom: 10px;
  }
  .panel .fack {
    margin-top: 30px;
    font-size: 14px;
  }
  .panel .fack i.fa {
    text-decoration: none;
    color: var(--body-color);
    vertical-align: middle;
    font-size: 20px;
    margin-right: 5px;
  }
  .panel .fack a:link {
    color: #616973;
  }
  .panel .fack a:visited {
    color: #555c65;
  }
</style>