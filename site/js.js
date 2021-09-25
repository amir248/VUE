
  Vue.component("tab-posts", {
    data: function() {
      return {
        posts: [
          {
            id: 1,
            title: "ChikChicly",
            content:
              "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.!</p>"
          },
          {
            id: 2,
            title: "Амир",
            content:
              "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.!</p>"
          },
          {
            id: 3,
            title: "Excellent",
            content:
              "<p>ВЕселые истории тут будут про шикарный успех.)))</p>"
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
    template: "<div>Тут будет что нибудь написано!</div>"
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
