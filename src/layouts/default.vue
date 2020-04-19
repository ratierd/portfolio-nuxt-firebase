<template>
  <div>

    <div id="wrapper" class="is-preload">

      <!-- Header -->
        <header id="header">
          <h1><a>{{ $t('menu.title') }}</a></h1>
          <nav class="links">
            <ul>
              <li><a :href="this.$store.getters.url('')">{{ $t('menu.home') }}</a></li>
              <li><a :href="this.$store.getters.url('resume')">{{ $t('menu.resume') }}</a></li>
              <li><a :href="this.$store.getters.url('projects')">{{ $t('menu.projects') }}</a></li>
              <li><a href="https://medium.com/@davidratier">{{ $t('menu.blog') }}</a></li>
              <li><a :href="this.$store.getters.url('contact')">{{ $t('menu.contact') }}</a></li>
            </ul>
          </nav>
          <nav class="main">
            <ul>
              <li v-if="$i18n.locale === 'fr'" class="lang">
                <a :href="(`/en` + $route.fullPath)" class="fa-language">
                    {{ $t('menu.lang') }}
                  </a>
              </li>
              <li v-else class="lang">
                <!-- Any lang pattern ^\/[^\/]+ -->
                <a :href="$route.fullPath.replace(/\/en/, '')" class="fa-language">
                    {{ $t('menu.lang') }}
                  </a>
              </li>
              <li class="menu">
                <a class="fa-bars" href="#menu">Menu</a>
              </li>
            </ul>
          </nav>
        </header>

      <!-- Menu -->
        <section id="menu">

          <!-- Links -->
            <section>
              <ul class="links">
                <li>
                  <a :href="this.$store.getters.url('')">
                    <h2><i class="icon fa-home"></i>  {{ $t('menu.home') }}</h2>
                  </a>
                </li>
                <li>
                  <a :href="this.$store.getters.url('resume')">
                    <h2><i class="icon fa-file"></i>  {{ $t('menu.resume') }}</h2>
                  </a>
                </li>
                <li>
                  <a :href="this.$store.getters.url('projects')">
                    <h2><i class="icon fa-code"></i>  {{ $t('menu.projects') }}</h2>
                  </a>
                </li>
                <li>
                  <a href="https://medium.com/@davidratier">
                    <h2><i class="icon fa-medium"></i>  {{ $t('menu.blog') }}</h2>
                  </a>
                </li>
                <li>
                  <a :href="this.$store.getters.url('contact')">
                    <h2><i class="icon fa-envelope"></i>  {{ $t('menu.contact') }}</h2>
                  </a>
                </li>
              </ul>
            </section>

          <!-- Actions -->
            <section>
              <ul class="actions stacked">
                <li v-if="$i18n.locale === 'fr'">
                  <a :href="`/en` + $route.fullPath" class="button large fit">
                    {{ $t('menu.lang') }}
                  </a>
                </li>
                <li v-else>
                  <!-- Any lang pattern ^\/[^\/]+ -->
                  <a :href="$route.fullPath.replace(/\/en/, '')" class="button large fit">
                    {{ $t('menu.lang') }}
                  </a>
                </li>
              </ul>
            </section>

        </section>

      <!-- Main -->
        <nuxt></nuxt>

      <!-- Sidebar -->
        <section id="sidebar">

          <!-- Intro -->
            <section id="intro">
              <a class="logo"><img src="/images/avatar.jpg" alt="profil" /></a>
              <header>
                <h2>{{ $t('author') }}</h2>
                <p>{{ $t('intro.sentence') }}</p>
              </header>
              <ul class="actions">
                <li><a :href="$t('resume.filepath')" class="button">{{ $t('intro.button') }}</a></li>
              </ul>
            </section>

          <!-- Footer -->
            <section id="footer">
              <ul class="icons">
                <li><a href="https://www.facebook.com/dratier" class="fa-facebook"><span class="label">Facebook</span></a></li>
                <li><a href="https://www.linkedin.com/in/ratierdavid/" class="fa-linkedin"><span class="label">LinkedIn</span></a></li>
                <li><a href="http://fr.viadeo.com/fr/profile/davidratier" class="fa-viadeo"><span class="label">Viadeo</span></a></li>
                <li><a href="https://medium.com/@davidratier" class="fa-medium"><span class="label">Medium</span></a></li>
                <li><a href="https://github.com/ratierd" class="fa-github"><span class="label">Github</span></a></li>
                <li><a href="mailto:ratierd@gmail.com" class="fa-envelope"><span class="label">Email</span></a></li>
              </ul>
            </section>

        </section>

    </div>

    <!-- Scripts -->
    <script src="/js/jquery.min.js"></script>
    <script src="/js/browser.min.js"></script>
    <script src="/js/breakpoints.min.js"></script>
    <script src="/js/util.js"></script>
    <script src="/js/main.js"></script>
    
  </div>
  
</template>

<script>

export default {
  head: {
    link: [
      { rel: 'stylesheet', href:'/css/main.css' }
    ]
  }
}
</script>

<style scoped>

</style>