
  Vue.component("tab-posts", {
    data: function() {
      return {
        posts: [
          {
            id: 1,
            title: "ChikChicly",
            content:
              "<p>Пишу на яваскрипте и получается изучить вью на шикарном уровене!</p>"
          },
          {
            id: 2,
            title: "Амир",
            content:
              "<p>Амир это грандиозный и шикарный человек, самый лучший!</p>"
          },
          {
            id: 3,
            title: "Excellent",
            content:
              "<p>все и правдо супер шикарно, хорошо, супер просто, лучше всех.</p>"
          },
          {
          id:4,
          title:"Amir Shikaren",
          content: "Это новоая крутая фишка писать сайт через фреймворк вью."
          }
        ],
        selectedPost: null
      };
    },
    template: `
<div class="posts-tab">
  <ul class="posts-sidebar">
    <li
      v-for="post in posts"
      v-bind:key="post.id"
      v-bind:class="{ selected: post === selectedPost }"
      v-on:click="selectedPost = post"
    >
      {{ post.title }}
    </li>
  </ul>
  <div class="selected-post-container">
    <div
      v-if="selectedPost"
      class="selected-post"
    >
      <h3>{{ selectedPost.title }}</h3>
      <div v-html="selectedPost.content"></div>
    </div>
    <strong v-else>
      Click on a blog title to the left to view it.
    </strong>
  </div>
</div>
`
  });

  Vue.component("tab-archive", {
    template: "<div>Archive component</div>"
  });

  new Vue({
    el: "#dynamic-component-demo",
    data: {
      currentTab: "Posts",
      tabs: ["Posts", "Archive"]
    },
    computed: {
      currentTabComponent: function() {
        return "tab-" + this.currentTab.toLowerCase();
      }
    }
  });
