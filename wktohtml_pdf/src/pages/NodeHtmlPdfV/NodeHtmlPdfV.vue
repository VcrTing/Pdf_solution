<template>
    <div>
        <button class="btn" @click="doing">导出 test.pdf</button>


    </div>
</template>

<script>

    export default {
        name: '',
        data() {
            return {
                
            }
        },
        methods: {
            doing() {
                var pdf = require('html-pdf');

                let options = {
                    format: 'Letter',
                    phantomPath: "./node_modules/phantomjs/bin/phantomjs", 
                }

                let html = this.getHtml()

                console.log(pdf)
                pdf.create(html, options).toFile('./test.pdf', function(err, res) {
                    if (err) return console.log(err);
                    console.log(res); 
                    // { filename: '/app/businesscard.pdf' }
                });
            },

            getHtml() {
                return `<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
    </head>    
    <body>
        <style>
            p { font-family: STSong-Light } 
            div {
                height: 60vh; background: #f1f1f1; 
                border-radius: 12px; padding: 120px 30px; 
                box-sizing: border-box; text-align: center; 
                margin-bottom: 24px; width: 100%; 
            }
        </style>
        <div>这是默认的PDF模版。</div>
        <div>我在测试中文的适配情况</div>
        <div>再分一个页</div>
        <div>这里是 Footer</div>
    </body>
</html>
`
            }
        }
    }
</script>

<style lang="css" scoped>
    
</style>