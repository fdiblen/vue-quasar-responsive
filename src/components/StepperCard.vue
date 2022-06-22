<template>
  <div class="q-pa-md row items-start q-gutter-md q-mt-xl">
    <q-btn label="Reset" text-color="white" @click="reset" class="q-mb-md bg-primary" />

    <q-stepper
      v-model="step"
      header-nav
      vertical
      color="primary"
      animated
      class="stepper-style"
    >
      <q-step
        v-bind:name="0"
        title="Let's get started"
        icon="settings"
        v-bind:done="step > 0"
        v-on:click="setStep(0)"
      >
        You will start now!

        <q-stepper-navigation>
          <q-btn @click="nextStep" color="primary" label="Continue" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        v-bind:name="1"
        title="Select campaign settings"
        icon="settings"
        v-bind:done="step > 1"
        v-on:click="setStep(1)"
      >
        For each ad campaign that you create, you can control how much you're willing to
        spend on clicks and conversions, which networks and geographical locations you want
        your ads to show on, and more.

        <q-stepper-navigation>
          <!-- <q-btn @click="step = 2" color="primary" label="Continue" /> -->
          <q-btn @click="nextStep" color="primary" label="Continue" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        v-bind:name="2"
        title="Create an ad group"
        caption="Optional"
        icon="create_new_folder"
        v-bind:done="step > 2"
        v-on:click="setStep(2)"
      >
        An ad group contains one or more ads which target a shared set of keywords.

        <q-stepper-navigation>
          <!-- <q-btn @click="step = 4" color="primary" label="Continue" /> -->
          <!-- <q-btn flat @click="step = 1" color="primary" label="Back" class="q-ml-sm" /> -->
          <q-btn @click="nextStep" color="primary" label="Continue" />
          <q-btn flat @click="previousStep" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        v-bind:name="3"
        title="Ad template"
        icon="assignment"
        v-bind:done="step > 3"
        v-on:click="setStep(3)"
      >
        This is step for Ad template.
        <q-stepper-navigation>
          <!-- <q-btn color="primary" label="Finish" />
          <q-btn flat @click="step = 2" color="primary" label="Back" class="q-ml-sm" /> -->
          <q-btn @click="nextStep" color="primary" label="Continue" />
          <q-btn flat @click="previousStep" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        v-bind:name="4"
        title="Create an ad"
        icon="add_comment"
        v-bind:done="step > 4"
        v-on:click="setStep(4)"
      >
        Try out different ad text to see what brings in the most customers, and learn how to
        enhance your ads using features like ad extensions. If you run into any problems with
        your ads, find out how to tell if they're running and how to resolve approval issues.

        <q-stepper-navigation>
          <q-btn @click="finish" color="primary" label="Finish" />
          <q-btn flat @click="previousStep" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      Current step: {{ step }}

    </q-stepper>
  </div>
</template>

<script>
import { ref } from 'vue'
import router from '@/router'

export default {
  name: 'StepperCard',
  setup () {
    const step = ref(1)

    const nextStep = () => {
      console.log('nextStep')
      step.value++
      console.log(step.value)
      router.push(`/step/${step.value}`)
    }

    const previousStep = () => {
      console.log('previousStep')
      step.value--
      console.log(step.value)
      router.push(`/step/${step.value}`)
    }

    const finish = () => {
      console.log('finish')
      step.value = 0
      console.log(step.value)
      router.push('/')
    }

    const setStep = (newStep) => {
      console.log('setStep')
      step.value = newStep
      console.log(step.value)
      if (step.value > 0) {
        router.push(`/step/${step.value}`)
      }
    }

    const reset = () => {
      console.log('reset')
      step.value = 0
      console.log(step.value)
      router.push('/')
    }

    return {
      setStep,
      finish,
      reset,
      step,
      nextStep,
      previousStep
    }
  }
}
</script>

<style lang="sass" scoped>

.stepper-style
  width: 100%

</style>
