<template>
    
        <div v-if="datas" class="pt_page">
            <div class="a-tr">
                <div class="a-td">横行 一</div>
                <div class="a-td">横行 二</div>
                <div class="a-td">横行 三</div>
                <div class="a-td">横行 四</div>
                <div class="a-td">横行 五</div>
            </div>
            <div class="a-tr" v-for="(dts, i) in datas" :key="i">
                <div v-for="(v, j) in dts" :key="j" class="a-td">{{ v }}</div>
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
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                datas: null
                
            }
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
        }
    }
</script>

<style lang="css" scoped>
    
.a-tr {
    width: 100%;
}
.a-td {
    display: inline-block;
    width: 20%;
    padding: 8px;
    text-align: center;
}

.img {
    height: 90px;
    border-radius: 12px;
}
.pt_page {
    width: 100%;
    display: block;
    text-align: center;
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