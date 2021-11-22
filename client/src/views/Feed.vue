<template>
  <div class="section">
      <h1 class="title">
          Feed Page
      </h1>
      <div class="columns">
          <div class="column">
              <div class="card">
                  <div class="card-content">
                      {{newPost}}
                  </div>
              </div>
          </div>
        <div class="column is-half is-offset-one-quarter">
             <post-edit :new-Post="newPost"/>
            <div class="post" v-for="(p,i) in posts" :key="p.src">
                <post :post="p" @remove="remove(p,i)" />
            </div>
        </div>
      </div>


  </div>
</template>

<script>
import Post from '../Components/Post';
import session from "../services/session";
import { Delete, GetFeed } from "../services/posts";
import PostEdit from "../Components/Post-edit";
export default {
    components: {
        Post,
        PostEdit
    },
    data: ()=> ({
        posts: [],
        newPost: {},
    }),
    async mounted(){
        this.posts = await GetFeed(session.user.handle)
    },
    methods: {
        async remove(post, i){
            console.log({post})
            const response = await Delete(post.id)
            if(response.deleted){
                this.posts.splice(i, 1)
            }
        }
    }
}

</script>

<style>

</style>