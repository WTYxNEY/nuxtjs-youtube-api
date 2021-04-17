// import Vuex from 'vuex'
// import axios from 'axios'
// import youtubeAPI from '@/api/youtubeAPI'

// const createStore = () => {
//   return new Vuex.Store({
//     state: {
//       // ข้อมูล
//       loadData: [],
//     },
//     mutations: {
//       // จัดการข้อมูลใน state
//       setVideoState(state, videos) {
//         state.loadData = videos
//       },
//     },
//     actions: {
//       // ทำงานร่วมกับ backend เรียกใช้ผ่าน component
//       nuxtServerInit(vueContext, context) {
//         return youtubeAPI
//           .get('/search')
//           .then((res) => {
//             // const videosData = res.data.items
//             // vueContext.commit('setVideoState', videosData)
//             // const videosData = []
//             // for (let i = 0; i < res.data.items.length; i++) {
//             //   videosData.push(res.data.items[i])
//             // }
//             // vueContext.commit('setVideoState', videosData)
//           })
//           .catch((err) => context.error(err))
//       },
//     },
//     getters: {
//       // เอา state ไปใช้งาน
//       getAllPosts(state) {
//         return state.loadData
//       },
//     },
//   })
// }

// export default createStore
