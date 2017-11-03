/**
 * Created by YY on 2017/10/25.
 */
import home from '../components/home.vue';
import list from '../components/list.vue';
import addList from '../components/addList.vue';
export default{
  routes:[
    {path:'*',component:home},
    {path:'/home',component:home},

    {path:'/lists',component:list,children:[{path:'addList',component:addList}]}
  ]
}
