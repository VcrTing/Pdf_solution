<template>
    <div>
        <img src="@/assets/logo.png">
        <br/>
        <img src="https://img2.baidu.com/it/u=4170806406,771015703&fm=253&fmt=auto&app=120&f=JPEG?w=600&h=475" class="img">
        <img src="https://img2.baidu.com/it/u=3015045708,4243438371&fm=26&fmt=auto" class="img">
        <img src="https://img0.baidu.com/it/u=2394090642,2278676572&fm=26&fmt=auto&gp=0.jpg" class="img">

        <div v-if="datas" class="pt_page">
            <div class="tr theader">
                <div class="td">横行 一</div>
                <div class="td">横行 二</div>
                <div class="td">横行 三</div>
                <div class="td">横行 四</div>
                <div class="td">横行 五</div>
            </div>
            <div class="tr" v-for="(dts, i) in datas" :key="i">
                <div v-for="(v, j) in dts" :key="j" class="td">{{ v }}</div>
            </div>
            <div class="pt_footer">
                這個是模版網站，專門用來測試 PDF 打印
            </div>
        </div>
        <div v-else>
            <br/>
            <br/>
            <br/>
            沒有數據
            <br/>
            <br/>
            <br/>
        </div>

        <get-html-btn @done_Father="getHtml"></get-html-btn>
    </div>
</template>

<script>
import GetHtmlBtn from '../../components/GetHtmlBtn.vue'
import axios from 'axios'

import html2pdf from 'html2pdf.js'

    export default {
        components: { GetHtmlBtn },
        name: '',
        data() {
            return {
                datas: null
            }
        },
        computed: {
            
        },
        mounted() {
            this.loading()
        },
        methods: {
            loading() {

                let res = [ ]
                setTimeout(() => {
                    for (let i= 0; i< 90; i++ ) {
                        let sim = [ ]
                        for (let j= 0; j< 5; j++ ) {
                            sim.push(i + '_新_' + j)
                        }
                        res.push(sim)
                    }
                    this.datas = res 
                }, 3000)
            },

            async test() {
                const url = 'http://crm00.svr.up5d.com/pdf/test/'
                let res = await axios.get(url)

                console.log(res)
            },

            clearScript(v) {
                let res = v.replace(/\<script/g, '<!--script>')
                res = res.replace(/\/script\>/g, 'script-->')

                res = this.clear(res)
                return res
            },
            clear(code){
                code = code.replace(/(?:^|\n|\r)\s*\/\*[\s\S]*?\*\/\s*(?:\r|\n|$)/g, '\n').replace(/(?:^|\n|\r)\s*\/\/.*(?:\r|\n|$)/g, '\n');  
                code = code.replace(/(?:^|\n|\r)\s*\/\*\#[\s\S]*?\*\/\s*(?:\r|\n|$)/g, '\n').replace(/(?:^|\n|\r)\s*\/\/.*(?:\r|\n|$)/g, '\n');  
                return code
            },
            
            async getHtml() {
                console.log('Go')
                const url = 'http://crm00.svr.up5d.com/pdf/html_content/?option=pdfkit'

                const html = document.getElementsByTagName('html')[0].outerHTML

                const condition = new FormData()
                condition.append(
                    'html', 
                    this.clearScript(html)
                )

                let res = await axios.post(url, condition)
                console.log('res =', res.data)
            },

        }
    }
</script>

<style lang="css" scoped>

.tr {
    width: 100%;
}
.td {
    width: 20%;
    float: left;
    padding: 8px;
}
.theader {
    padding: 12px 8px;
}
.img {
    height: 90px;
    border-radius: 12px;
}
.pt_page {

    overflow: hidden;
}

.pt_footer {
    width: 100%;
    display: flex;
    color: white;
    min-height: 49px;
    padding: 8px 12px;
    align-items: center;
    justify-content: center;
    background: rgb(65, 78, 74);
}

</style>