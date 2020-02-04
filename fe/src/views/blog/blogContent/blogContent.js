const dir = console.log.bind(console)
const log = console.log.bind(console)


export default {
    name: 'blogContent',
    props: {
        tit: {
            type: String,
            default () {
                return 'blog nothing title!'
            },
        },
        content: {
            type: String,
            default () {
                return 'blog nothing title!'
            },
        },
        time: {
            type: String,
            default () {
                return 'blog nothing title!'
            },
        },
        artIndex: {
            type: String,
            required: true
        },

    },

    methods: {
        handerClickTit(val) {
            return null;
        }
    }

};