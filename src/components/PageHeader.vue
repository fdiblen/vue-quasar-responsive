<template>
  <q-header reveal bordered class="text-white header-style">
    <q-toolbar>
      <q-toolbar-title>
        Title
      </q-toolbar-title>
      <q-btn no-caps flat dense icon="bug_report" label="Report an issue"/>
      <q-btn no-caps flat dense icon="description" label="Documentation"/>
    </q-toolbar>
  </q-header>
</template>

<script>
export default {
  name: 'PageHeader',
  setup () {
    return {
    }
  }
}
</script>

<style lang="sass" scoped>
</style>
