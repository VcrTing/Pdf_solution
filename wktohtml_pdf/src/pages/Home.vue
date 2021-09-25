<template>
    <div>
        <h2>HOME</h2>
        <p>
            请选择你 PDF 的打印方案
        </p>
        <ul v-for="(v, i) in items" :key="i" class="links">
            <li @click="go(v.link)">
                {{ v.txt }}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                items: [
                    {
                        txt: '浏览器内核自带打印：vue print nb',
                        link: '/vueprintnb'
                    },
                    {
                        txt: 'Js HTML 转 图片打印：Html2pdf',
                        link: '/html2pdf'
                    },
                    {
                        txt: 'Vue HTML 转 图片打印：Vue Html2pdf',
                        link: '/vuehtml2pdf'
                    },
                    {
                        txt: 'HTML 内容传输至后端：wkhtmltopdf 版本一',
                        link: '/v1'
                    },
                    {
                        txt: 'HTML 内容传输至后端：wkhtmltopdf 版本二',
                        link: '/v2'
                    },
                ]
            }
        },
        methods: {
            go(link) {
                this.$router.push({
                    path: link
                })
            }
        }
    }
</script>

<style lang="css" scoped>
.links {
    background: #f1f1f1;
    padding: 12px 48px;
    text-align: left;
    cursor: pointer;
}

.links li {
    position: relative;
    transition: all .2s;
}

.links:hover {

    background: #e2e2e2;
}

.links li::after {
    content: '>';
    position: absolute;
    right: 0
}
</style>