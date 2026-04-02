import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import Tabs from './components/Tabs.vue'
import Tab from './components/Tab.vue'
import GettingStartedTabs from './components/GettingStartedTabs.vue'
import Demo from './components/Demo.vue'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }: { app: any }) {
    app.component('Tabs', Tabs)
    app.component('Tab', Tab)
    app.component('GettingStartedTabs', GettingStartedTabs)
    app.component('Demo', Demo)
  }
}
