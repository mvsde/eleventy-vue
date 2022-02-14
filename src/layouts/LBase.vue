<script setup>
import CFooter from '../components/CFooter.vue'
import CHeader from '../components/CHeader.vue'
import { useMethods, useData } from '../utilities/useGlobal.js'

const { getVueComponentCssForPage } = useMethods()
const { title, description, page, content } = useData()

const css = getVueComponentCssForPage(page.url)
</script>

<template>
  <html lang="en">
    <head>
      <!-- eslint-disable vue/max-attributes-per-line -->
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">

      <title>{{ title }}</title>
      <meta name="description" :content="description">
      <link rel="icon" href="https://logo.factorial.io/color.svg">

      <style v-html="css" />
      <!-- eslint-enable vue/max-attributes-per-line -->
    </head>
    <body>
      <CHeader />

      <main
        class="container"
        v-html="content"
      />

      <CFooter />
    </body>
  </html>
</template>

<style>
body {
  font-family: system-ui, sans-serif;
}

.container {
  width: 50rem;
  max-width: 100%;
}
</style>
