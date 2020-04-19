<template>
  <div id="main">    
    <article class="post">
      <header>
        <div class="title">
          <h2><a href="single.html">Contact</a></h2>
        </div>
      </header>
      <form action="https://formspree.io/ratierd@gmail.com" method="POST">
          <input type="text" name="_replyto" :placeholder="$t('contact.mail')" />
          <br>
          <input type="hidden" name="_subject" value="[ratierd.com] New Message" />
          <textarea name="message" rows="3" :placeholder="$t('contact.message')"></textarea>
          <input type="hidden" name="_next" value="/" />
          <br>
          <input type="submit" :value="$t('contact.send')">
      </form>
      </article>
  </div>
</template>

<script>

export default {

}
</script>

<style scoped>

textarea {
  resize: vertical;
}

</style>
