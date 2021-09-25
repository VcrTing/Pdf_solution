<template>
    <div>
        <vue-html2pdf
            :show-layout="false"
            :float-layout="true"
            :preview-modal="false"
            :enable-download="false"
            :manual-pagination="false"

            :pdf-quality="2"
            :pdf-format="'a4'"
            pdf-orientation="landscape"

            :pdf-content-width="'98%'"
            :paginate-elements-by-height="1400"

            :html-to-pdf-options="option"

            @progress="onProgress($event)"
            @startPagination="startPagination()"
            @hasPaginated="hasPaginated()"
            @beforeDownload="beforeDownload($event)"
            @hasDownloaded="hasDownloaded($event)"

            ref="html2Pdf"

            class="rooter"
        ><pdf-content-v-1 slot="pdf-content"></pdf-content-v-1></vue-html2pdf> 

        <div class="content">
            <pdf-content-v-1></pdf-content-v-1>
        </div>

        <button class="btn btn-pdf" @click="outPort">导出</button>
    </div>
</template>

<script>
import VueHtml2pdf from 'vue-html2pdf'
import PdfContentV1 from '../../components/PdfContentV1.vue';

    export default {
        name: '',
        components: {
            VueHtml2pdf,
            PdfContentV1
        },
        data() {
            return {
                option: {
                    margin: [0, 5, 0, 5],
                    filename: 'vue_htmltopdf'
                }
            }
        },
        methods: {
            outPort() {
                this.$refs.html2Pdf.generatePdf();
            },

            onProgress() {

            },
            startPagination() {

            },
            hasPaginated() {

            },
            hasDownloaded() {

            },

            async beforeDownload ({ html2pdf, options, pdfContent }) {
                await html2pdf().set(options).from(pdfContent).toPdf().get('pdf').then((pdf) => {
                    console.log(pdf)
                    
                    const totalPages = pdf.internal.getNumberOfPages()
                    for (let i = 0; i <= totalPages; i++) {
                        pdf.setPage(i)
                        pdf.setFontSize(10)
                        pdf.setTextColor(150)
                        pdf.text('Page ' + i + ' of ' + totalPages, (pdf.internal.pageSize.getWidth() * 0.88), (pdf.internal.pageSize.getHeight() - 0.3))
                    } 
                    
                }).save()
            }
        }
    }
</script>

<style scoped>
.rooter {
    margin: 0;
    padding: 0;
    text-align: center;
}

.btn {
    border: none;
    background: #f5f5f5;
    border-radius: 4px;
    padding: 4px 20px;
    cursor: pointer;
    margin: 12px;
}

.content {
    

}

.btn-pdf {
    position: fixed;
    right: 12px;
    top: 70vh;
    background: white;
    padding: 3px 14px;
    border-radius: 36px;
    font-weight: bold;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.8);
    background: rgba(248, 153, 75, 0.9);
    border: 2px solid rgba(237, 199, 136, 0.65);
    box-shadow: 2px 4px 8px -2px rgba(0, 0, 0, 0.12);
}
</style>