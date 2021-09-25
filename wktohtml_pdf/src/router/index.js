import Vue from 'vue'
import Router from 'vue-router'
import PdfTemplate from '@/pages/PdfTemplate/PdfTemplate'
import PdfTemplateOther from '@/pages/PdfTemplate/PdfTemplateOther'

import HtmlPdfDemo from '@/pages/HtmlToPdf/HtmlPdfDemo'
import VueHtmlPdfDemo from '@/pages/HtmlToPdf/VueHtmlPdfDemo'

import VuePrintNbDemo from '@/pages/VuePrintNbDemo/VuePrintNbDemo'

import Home from '@/pages/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/v1',
      name: 'PdfTemplate',
      component: PdfTemplate
    },
    {
      path: '/v2',
      name: 'PdfTemplateOther',
      component: PdfTemplateOther
    },
    {
      path: '/html2pdf',
      name: 'HtmlPdfDemo',
      component: HtmlPdfDemo
    },
    {
      path: '/vuehtml2pdf',
      name: 'VueHtmlPdfDemo',
      component: VueHtmlPdfDemo
    },
    {
      path: '/vueprintnb',
      name: 'VuePrintNbDemo',
      component: VuePrintNbDemo
    }
  ]
})
