<template>
  <q-page class="page-chat flex column">
    <!-- Page content -->
    <q-page-container class="home-page-container">
      <div class="background-image"></div>
      <div class="content-container">
        <div class="text-container">
          <h1>Welcome to Gloomy World</h1>
          <p>
            We are here for you, a place where you can express your feelings,
            share your stories, and connect with like-minded individuals.
          </p>
        </div>

        <div class="quote-container">
          <blockquote class="quote gloomy-text">
            "In the darkest nights, our hearts find solace in sharing our gloomy
            tales."
          </blockquote>
          <blockquote class="quote gloomy-text">
            "Amidst the shadows, we find companionship in our shared pain."
          </blockquote>
          <blockquote class="quote gloomy-text">
            "Embrace the darkness, for it holds the beauty of unspoken
            emotions."
          </blockquote>
        </div>
      </div>
    </q-page-container>
  </q-page>
</template>

<script>
export default {
  // Your script logic here
};
</script>

<style>
.page-chat {
  /* Set a moonlit night background color */
  background-color: #24292e;
}

.home-page-container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.background-image {
  background-image: url("src/assets/moonlit-night.jpg");
  background-size: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.8;
}

.content-container {
  text-align: center;
  padding: 40px;
  max-width: 600px;
  color: #ffffff;
}

.quote-container {
  margin: 30px 0;
}

.quote {
  font-family: "Playfair Display", serif;
  font-style: italic;
  font-size: 22px;
  margin-bottom: 20px;
  color: #c4d7ef;
}

h1 {
  font-family: "Pacifico", cursive;
  font-size: 36px;
  margin-bottom: 20px;
}

p {
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  line-height: 1.6;
}

.get-started-btn {
  margin-top: 30px;
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
  font-weight: bold;
}

/* Gloomy text styles */
.gloomy-text {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  color: #ddd1d1; /* Light grayish-blue text color */
}
</style>
