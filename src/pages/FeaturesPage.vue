<template>
  <q-page class="features-page">
    <q-page-container class="q-pa-md">
      <h1 class="features-title text-h4">Features</h1>

      <div class="features-list">
        <q-expansion-item
          v-for="(feature, index) in featuresList"
          :key="index"
          label-color="primary"
          :label="feature.title"
          expand-icon="expand_more"
          expand-separator
        >
          <q-markup>{{ feature.description }}</q-markup>
        </q-expansion-item>
      </div>
    </q-page-container>
  </q-page>
</template>

<script>
export default {
  name: "FeaturesPage",
  data() {
    return {
      featuresList: [
        {
          title: "Embrace Your Emotions",
          description:
            "Gloomy World provides a safe haven for those with hearts bruised by pain, where you can embrace your emotions without fear of judgment. Let your tears flow freely, for here, they are not a sign of weakness but a testament to your strength in navigating through the shadows of life.",
        },
        {
          title: "Find Understanding Companions",
          description:
            "In the sea of loneliness, Gloomy World connects you with kindred spirits who understand the weight of solitude and the burden of a heavy heart. Forge bonds with like-minded souls who walk a similar path, and together, may you discover the power of empathy in healing each other's wounds.",
        },
        {
          title: "Share Your Tales of Darkness",
          description:
            "Within the depths of Gloomy World, share the chapters of your life's haunted book. Whisper your ghostly encounters, pen the narratives of sorrow, and unlock the beauty of unspoken emotions. As you release your tales into the ether, know that you are not alone – others here will listen, understand, and find solace in your shared experiences.",
        },
        {
          title: "Create and Join Groups",
          description:
            "Form or join groups with like-minded individuals to share your stories, experiences, and emotions. Find a sense of belonging and companionship within the gloomy community.",
        },
        {
          title: "Add Friends",
          description:
            "Connect with others who resonate with your emotions and stories. Add friends to your circle and share your gloomy world with those who understand.",
        },
        {
          title: "Group Chats",
          description:
            "Engage in group chats with your fellow companions. Share your thoughts, stories, and experiences in the comforting embrace of the gloomy community.",
        },
        {
          title: "Search for Connections",
          description:
            "Explore and search for new connections that share similar emotions and experiences. Dive into the depths of the gloomy world and find kindred spirits to connect with.",
        },
        {
          title: "One-to-One Live Connections",
          description:
            "Initiate random live video/audio connections with other users. Connect with new people and have real-time conversations.",
        },
        {
          title: "Unread Message Indicator",
          description:
            "Never miss a message in the gloomy world. Get notified of unread messages to ensure you stay connected and engaged with your companions.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.features-page {
  background-color: #24292e;
  color: #ffffff;
}

.features-title {
  font-size: 28px;
  margin-bottom: 20px;
  text-align: center;
}

.features-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.q-expansion-item-header {
  background-color: #360211;
  color: #ffffff;
  padding: 12px 20px;
  border-radius: 8px;
  margin: 8px 0;
  transition: background-color 0.2s ease;
}

.q-expansion-item-content {
  background-color: #360211;
  color: #ffffff;
  padding: 20px;
  border-radius: 0 0 8px 8px;
  border-top: 1px solid #888888;
  transition: background-color 0.2s ease;
}

.q-expansion-item-header:hover,
.q-expansion-item-content:hover {
  background-color: #2c0610;
}

.q-expansion-item-label {
  font-size: 20px;
}

.q-expansion-item-chevron svg {
  fill: #ffffff;
}

.q-expansion-item-separator {
  margin: 0;
}

.q-markup {
  font-size: 16px;
  line-height: 1.6;
}
</style>
