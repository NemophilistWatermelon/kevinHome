var log = console.log.bind(console)
    // TODO: dir
const dir = console.dir.bind(console)


import Profile from '../../../components/profile/index.vue'
var config = {
    name: 'blogAll',
    data() {
        return {
            blogData: null,
            blogIndex: null,
        }
    },
    components: { Profile },
    created() {
        this.blogIndex = this.$route.params.id;
        this.getData(this.blogIndex)
    },
    methods: {
        async getData(index) {
            var data = await this.$blogApi.apiGetBlodDetail(index);
            this.blogData = data.data
        }
    }


}
export default config