<template>
  <div id="main">

    <!-- Viettech -->
    
      <article class="post">
        <header>
          <div class="title">
            <h2>Viettech</h2>
            <div class="badges">
              <div>HTML</div>
              <div>CSS</div>
              <div>Javascript</div>
              <div>Vue</div>
            </div>
          </div>
          <div class="meta">
            <time class="published" :datetime="$t('projects.viettech.dateFormatted')">{{ $t('projects.viettech.date') }}</time>
            <a href="https://github.com/ratierd/viettech" class="author"><span class="name">Github</span><span class="fa fa-github" style="font-size: 20pt;"></span></a>
          </div>
        </header>
        <p>
          <span class="image right"><img class="border-image" src="/images/viettech.png" alt="viettech" /></span>
          {{ $t('projects.viettech.description') }}
        </p>
        <footer></footer>
      </article>

    <!-- MOA -->

      <article class="post">
        <header>
          <div class="title">
            <h2>MOA</h2>
            <div class="badges">
              <div>Java</div>
            </div>
          </div>
          <div class="meta">
            <time class="published" :datetime="$t('projects.MOA.dateFormatted')">{{ $t('projects.MOA.date') }}</time>
            <a href="https://github.com/ratierd/MOA" class="author"><span class="name">Github</span><span class="fa fa-github" style="font-size: 20pt;"></span></a>
          </div>
        </header>
        <p>
          <span class="image right"><img class="border-image" src="/images/MOA.png" alt="MOA" /></span>
          {{ $t('projects.MOA.description') }}
        </p>
        <footer></footer>
      </article>

    <!-- Coursework android app -->

      <article class="post">
        <header>
          <div class="title">
            <h2>Coursework android app</h2>
            <div class="badges">
              <div>Android</div>
              <div>Java</div>
              <div>HTML</div>
            </div>
          </div>
          <div class="meta">
            <time class="published" :datetime="$t('projects.coursework-android-app.dateFormatted')">{{ $t('projects.coursework-android-app.date') }}</time>
            <a href="https://github.com/ratierd/coursework-android-app" class="author"><span class="name">Github</span><span class="fa fa-github" style="font-size: 20pt;"></span></a>
          </div>
        </header>
        <p>
          <span class="image right"><img class="border-image" src="/images/android-dev.png" alt="android-dev" /></span>
          {{ $t('projects.coursework-android-app.description') }}
        </p>
        <footer></footer>
      </article>

    <!-- Show manager -->

      <article class="post">
        <header>
          <div class="title">
            <h2>Show manager</h2>
            <div class="badges">
              <div>C#</div>
            </div>
          </div>
          <div class="meta">
            <time class="published" :datetime="$t('projects.show-manager.dateFormatted')">{{ $t('projects.show-manager.date') }}</time>
            <a href="https://github.com/ratierd/show-manager" class="author"><span class="name">Github</span><span class="fa fa-github" style="font-size: 20pt;"></span></a>
          </div>
        </header>
        <p>
          <span class="image right"><img class="border-image" src="/images/show-manager.png" alt="show-manager" /></span>
          {{ $t('projects.show-manager.description') }}
        </p>
        <footer></footer>
      </article>

    <!-- Ruzzle -->

      <article class="post">
        <header>
          <div class="title">
            <h2>Ruzzle</h2>
            <div class="badges">
              <div>C</div>
              <div>SDL</div>
            </div>
          </div>
          <div class="meta">
            <time class="published" :datetime="$t('projects.ruzzle.dateFormatted')">{{ $t('projects.ruzzle.date') }}</time>
            <a href="https://github.com/ratierd/ruzzle" class="author"><span class="name">Github</span><span class="fa fa-github" style="font-size: 20pt;"></span></a>
          </div>
        </header>
        <p>
          <span class="image right"><img class="border-image" src="/images/ruzzle.png" alt="ruzzle" /></span>
          {{ $t('projects.ruzzle.description') }}
        </p>
        <footer></footer>
      </article>
    
    <!-- Jeuxdicode -->

      <article class="post">
        <header>
          <div class="title">
            <h2>JeuxDiCode</h2>
            <div class="badges">
              <div>HTML</div>
              <div>CSS</div>
              <div>PHP</div>
              <div>Zend Framework</div>
            </div>
          </div>
          <div class="meta">
            <time class="published" :datetime="$t('projects.jeuxdicode.dateFormatted')">{{ $t('projects.jeuxdicode.date') }}</time>
            <a href="https://github.com/ratierd/jeuxdicode" class="author"><span class="name">Github</span><span class="fa fa-github" style="font-size: 20pt;"></span></a>
          </div>
        </header>
        <p>
          <span class="image right"><img class="border-image" src="/images/jeuxdicode.png" alt="jeuxdicode" /></span>
          {{ $t('projects.jeuxdicode.description') }}
        </p>
        <footer></footer>
      </article>

    <!-- Pacman -->

      <article class="post">
        <header>
          <div class="title">
            <h2>Pacman</h2>
            <div class="badges">
              <div>C</div>
              <div>Embedded</div>
            </div>
          </div>
          <div class="meta">
            <time class="published" :datetime="$t('projects.pacman.dateFormatted')">{{ $t('projects.pacman.date') }}</time>
            <a href="https://github.com/ratierd/pacman" class="author"><span class="name">Github</span><span class="fa fa-github" style="font-size: 20pt;"></span></a>
          </div>
        </header>
        <p>
          <span class="image right"><img class="border-image" src="/images/pacman.png" alt="pacman" /></span>
          {{ $t('projects.pacman.description') }}
        </p>
        <footer></footer>
      </article>

  </div>
</template>

<script>

export default {

}
</script>

<style scoped>

.border-image {
  border: 1px solid rgba(160, 160, 160, 0.3);
}

</style>
