<template>
    <div>    
        <div id="printMe" class="content">
            <p>葫芦娃，葫芦娃</p>
            <p>一根藤上七朵花 </p>
            <p>小小树藤是我家 啦啦啦啦 </p>
            <p>叮当当咚咚当当　浇不大</p>
            <p> 叮当当咚咚当当 是我家</p>
            <p> 啦啦啦啦</p>
            <p>...</p>

            <data-div></data-div>
        </div>

        <button class="btn-print" v-print="'#printMe'">Print local range</button>
    </div>
</template>

<script>
import DataDiv from '../../components/DataDiv.vue'
    export default {
  components: { DataDiv },
        name: '',
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="css" scoped>
.content {
    background: #f1f1f1;
    text-align: center;
    margin-top: 36px;
}

.btn-print {
    position: fixed;
    padding: 4px 12px;
    border: none;
    background: rgb(255, 174, 200);
    color: white;
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
    border-radius: 3px;

    z-index: 999;

    top: 0;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;

    box-shadow: 2px 4px 8px -2px rgba(0, 0, 0, 0.12);
}

</style>