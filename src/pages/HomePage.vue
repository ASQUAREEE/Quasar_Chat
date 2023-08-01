<template>
  <q-page ref="groupChat" class="page-chat flex column">
    <!-- Page content -->
    <q-page-container class="home-page-container">
      <div class="home-content">
        <h1>Welcome to Gloomy World</h1>
        <p>
          We are here for you, a place where you can express your feelings,
          share your stories, and connect with like-minded individuals.
        </p>
        <blockquote>
          "In the darkest nights, our hearts find solace in sharing our gloomy
          tales."
        </blockquote>
        <blockquote>
          "Amidst the shadows, we find companionship in our shared pain."
        </blockquote>
        <blockquote>
          "Embrace the darkness, for it holds the beauty of unspoken emotions."
        </blockquote>
        <p>
          Be part of the gloomy community and let your emotions find comfort in
          the shadows of understanding.
        </p>
        <q-btn
          @click="$router.push('/auth')"
          class="get-started-btn"
          label="Get Started"
          color="primary"
        />
      </div>
    </q-page-container>
  </q-page>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
.groupChat {
  background: #e2dfd5;

  /* display: block;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 0;
  opacity: 0.1; */
  z-index: 0;
  background-color: #e5e5f7;

  background-image: radial-gradient(
    #be85a7 0.8500000000000001px,
    #e5e5f7 0.8500000000000001px
  );
  background-size: 17px 17px;
}

.home-page-container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.home-content {
  text-align: center;
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
}

blockquote {
  font-style: italic;
  margin: 20px 0;
}

.get-started-btn {
  margin-top: 20px;
}
</style>
