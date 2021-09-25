<template>
    
    <div>
        <div>
            <h4>
                淩厲傳
            </h4>

            <p>此人叫淩厲。人如其名，他在那個圈子裏絕對是人人談之色變的人物。他是一個保鏢，花高價雇他的人極其放心。他的身手，十個經過專業訓練的大漢也不是對手，他冷酷無情，毫不心慈手軟。在一場地下商業紛爭中，他和雇主面對幾十個人，在談崩了的情況下，他能將雇主安然帶回，身後是放倒了一地的打手。這一事件，已成了保鏢界的傳奇與神話。
                像淩厲這樣的人，這樣的人生，註定是充滿著傳奇和神話的。雖然他也曾有過太多次生死懸於一線的時刻，可他卻把這些當成了一種刺激，那幾年之中他到底當保鏢賺到多少錢，沒人有計算得清。不過再美的神話也有落幕的時候，他終因遇人不淑，在拼死保護一個大毒販時，被警方生擒。神話終結之處，是蕭蕭的鐵窗生涯。
            </p>

            <h4>表格</h4>
            <data-div></data-div>
        </div>

        <!--
            All other pdf-item will be separated in the pagination process,
            depending on paginate-elements-by-height prop.
        -->
        <div>
            <h4>
                封平传
            </h4>

            <p>这是一个地位尊崇的企业家，叫封平，年近半百开始创业，在短短几年内将一个小门面发展成大集团公司，让许多业内人士和记者惊为天人。是的，在当今竞争如此激烈残酷的现实之中，他能在几年之中迅速崛起，非是天才不能如此。年过六旬的封平事业如日中天，不过他却很低调，丝毫没有大富豪的派头和霸气。令人感到惊奇的是，他竟然是单身，不知是丧失了亲人还是终身未娶。只是听人说在他的办公桌上，摆着一张小女孩的照片，这也让人们凭添了许多猜想。
                然而，更令人难以相信的是，封平一夜之间出卖了集团中自己所有的股份，甚至，那些天文数字的财产他全都捐了出去。这种做法，在国内是尽够惊世骇俗的了。有人说，他孤身一人，挣那么多钱也没人分享，自然捐了。可不管怎样，封平做到了，而且一下子消失在人们的视线之中，连那些为挖新闻无孔不入的记者也寻不到他的踪迹，就像他从未曾出现过辉煌过。
            </p>
        </div>

        <!--
            If you have any image with a remote source
            set html2canvas.useCORS to true, although it is set to true by default
            Ex.
            html2canvas: {
                useCORS: true
            }
        -->
        <div>
            <img :src="remoteImageLink">
        </div>
    </div>
</template>

<script>
import DataDiv from './DataDiv.vue'
    export default {
  components: { DataDiv },
        name: '',
        data() {
            return {
                remoteImageLink: 'https://img0.baidu.com/it/u=2394090642,2278676572&fm=26&fmt=auto&gp=0.jpg'
            }
        }
    }
</script>

<style lang="" scoped>
    
section {
    box-sizing: border-box !important;
}
.pdf-item {
    text-align: center;
    background: #f1f1f1;

    width: 100%;
    
    border-radius: 12px;
    padding: 0 24px;
    margin: 0;

    border-bottom: 1px solid #eee;
}

h4 {
    font-size: 24px;
    font-weight: bold;
    padding: 12px;
    color: rgba(0, 168, 243);

    margin: 0 !important;

    flex: 1;
    width: 100%;
}

p {
    font-size: 12px;
    line-height: 14px;
    display: block;

    flex: 1;
    width: 100%;
}
</style>