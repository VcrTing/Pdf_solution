<template>
    <div>
        <img src="@/assets/logo.png">

        <div v-if="datas" class="pt_page">
            <table class="pt_table">
                <tr class="pt_tr">
                    <td>
                        標題 一
                    </td>
                    <td>
                        標題 二
                    </td>
                    <td>
                        標題 三
                    </td>
                    <td>
                        標題 四
                    </td>
                    <td>
                        標題 五
                    </td>
                </tr>
                
                <tr v-for="(dts, i) in datas" :key="i">
                    <td v-for="(v, j) in dts" :key="j">
                        {{ v }}
                    </td>
                </tr>
            </table>
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
                    for (let i= 0; i< 60; i++ ) {
                        let sim = [ ]
                        for (let j= 0; j< 5; j++ ) {
                            sim.push(i + '_' + j)
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

                console.log(res)
                return res
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
            }
        }
    }
</script>

<style lang="css" scoped>
.pt_table {
    width: 100%;
    border: none;
    line-height: 2.8;
    margin-top: 24px;
    text-align: center;
    border-collapse: unset;
}
.pt_tr {
    border: none;
    line-height: 3.6;
    color: white;
    background: #4d5654;
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