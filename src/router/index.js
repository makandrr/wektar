import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main'
import BlockChoose from '../views/BlockChoose'
import BlockChooseList from '../views/BlockChooseList'
import TopicChoose from '../views/TopicChoose'
import Lesson from '../views/Lesson'

const routes = [
  { path: '/', component: Main },
  { path: '/blocks', component: BlockChoose },
  { path: '/blocks-list', component: BlockChooseList },
  { path: '/:blockName', component: TopicChoose },
  { path: '/:blockName/:topicId', component: Lesson }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
