<template>
  <q-layout view="hHh lpR fFf">

    <PageHeader />

      <div class="row justify-center">

        <div class="col-12 col-md-3 panel-left-style">
          <StepperCard />
        </div>

        <div class="col-12 col-md-6 panel-center-style">
            <q-page-container>
              <router-view />
            </q-page-container>
        </div>

        <div class="col-12 col-md-3 panel-right-style">
          <PreviewCard />
        </div>

      </div>

    <PageFooter />

  </q-layout>
</template>

<script>
import StepperCard from './components/StepperCard.vue'
import PreviewCard from './components/PreviewCard.vue'
import PageFooter from './components/PageFooter.vue'
import PageHeader from './components/PageHeader.vue'

export default {
  name: 'LayoutDefault',

  components: {
    StepperCard,
    PreviewCard,
    PageFooter,
    PageHeader
  },

  setup () {
    return {
    }
  }
}
</script>

<style lang="sass" scoped>

  .panel-left-style
    background: red
    min-height: 100vh
    overflow: auto

  .panel-center-style
    min-height: 100vh
    overflow: auto

  .panel-right-style
    background: green
    min-height: 100vh
    overflow: auto

  .header-style
    background: #9C27B0

  .footer-style
    background: #00bfff

</style>
