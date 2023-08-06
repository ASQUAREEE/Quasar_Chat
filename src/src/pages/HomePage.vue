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

        <!-- Features Slideshow -->

        <div class="features-section q-gutter-md">
          <h1 class="feature-title">Features of Gloomy World</h1>
          <div class="slideshow-container">
            <div
              class="mySlides"
              v-for="(feature, index) in features"
              :key="index"
              :class="{ active: index === activeIndex }"
            >
              <q-icon :name="feature.icon" size="md" color="primary" />
              <h3 class="text-h6">{{ feature.title }}</h3>
              <q-card-section>
                <p class="q-mb-md">{{ feature.description }}</p>
              </q-card-section>
            </div>

            <!-- Next/prev buttons -->
            <a class="prev" @click="prevSlide">&#10094;</a>
            <a class="next" @click="nextSlide">&#10095;</a>
          </div>
        </div>
      </div>
    </q-page-container>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      features: [
        {
          icon: "favorite",
          title: "Embrace Your Emotions",
          description:
            "Gloomy World provides a safe haven for those with hearts bruised by pain, where you can embrace your emotions without fear of judgment. Let your tears flow freely, for here, they are not a sign of weakness but a testament to your strength in navigating through the shadows of life.",
        },
        {
          icon: "group",
          title: "Find Understanding Companions",
          description:
            "In the sea of loneliness, Gloomy World connects you with kindred spirits who understand the weight of solitude and the burden of a heavy heart. Forge bonds with like-minded souls who walk a similar path, and together, may you discover the power of empathy in healing each other's wounds.",
        },
        {
          icon: "speaker_notes",
          title: "Share Your Tales of Darkness",
          description:
            "Within the depths of Gloomy World, share the chapters of your life's haunted book. Whisper your ghostly encounters, pen the narratives of sorrow, and unlock the beauty of unspoken emotions. As you release your tales into the ether, know that you are not alone – others here will listen, understand, and find solace in your shared experiences.",
        },
      ],
      activeIndex: 0,
    };
  },
  methods: {
    nextSlide() {
      this.activeIndex = (this.activeIndex + 1) % this.features.length;
    },
    prevSlide() {
      this.activeIndex =
        (this.activeIndex - 1 + this.features.length) % this.features.length;
    },
  },
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

.features-section {
  margin-top: 40px;
}

.features-slider {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.feature {
  flex: 1 0 calc(400px); /* Update this line */
  max-width: calc(500px); /* Update this line */
  border-radius: 8px;
  background-color: #360211;
  margin-bottom: 20px;
  padding: 20px;
  transition: transform 0.2s ease;
}

.feature:hover {
  transform: scale(1.05);
}

/* Slideshow container */
.slideshow-container {
  position: relative;
  /* background: rgb(18, 1, 1); Dark background color */
  background-image: url("src/assets/features.jpg");
  background-size: cover;
  width: 120%;
  height: 120%;
  opacity: 0.9; /* Reduced opacity to create a gloomy effect */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

/* Slides */
.mySlides {
  display: none;
  padding: 80px;
  text-align: center;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.mySlides.active {
  display: block;
  opacity: 1;
}

/* Next & previous buttons */
.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -30px;
  padding: 16px;
  color: #888;
  font-weight: bold;
  font-size: 20px;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

/* Position the "next button" to the right */
.prev {
  left: 10px;
  border-radius: 3px 0 0 3px;
}

.next {
  right: 10px;
  border-radius: 0 3px 3px 0;
}
/* On hover, add a black background color with a little bit see-through */
.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
}

/* Gloomy text styles */
.gloomy-text {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  color: #ddd1d1; /* Light grayish-blue text color */
}

.feature-title {
  color: #c4d7ef;
  font-weight: bold;
}
</style>
