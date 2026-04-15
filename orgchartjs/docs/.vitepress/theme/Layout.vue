<script setup>
import { ref } from 'vue'
import { withBase } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './custom.css'

const { Layout } = DefaultTheme

const isMobileNavOpen = ref(false)

function toggleMobileNav() {
  isMobileNavOpen.value = !isMobileNavOpen.value
}

function closeMobileNav() {
  isMobileNavOpen.value = false
}

function navigate(url) {
  closeMobileNav()
  window.location.href = url
}
</script>

<template>
  <Layout>
    <template #layout-top>
      <header class="header">
        <nav>
          <button
            id="btn-nav-mobile"
            class="btn-nav-mobile"
            type="button"
            :aria-expanded="isMobileNavOpen ? 'true' : 'false'"
            aria-controls="secondNav"
            aria-label="Toggle navigation"
            @click="toggleMobileNav"
          >
            <svg width="32" height="32">
              <line x1="0" x2="30" y1="10" y2="10" stroke-width="3" stroke="#757575"></line>
              <line x1="0" x2="30" y1="20" y2="20" stroke-width="3" stroke="#757575"></line>
              <line x1="0" x2="30" y1="30" y2="30" stroke-width="3" stroke="#757575"></line>
            </svg>
          </button>

          <nav
            id="secondNav"
            class="secondNav"
            :class="{ 'is-mobile-open': isMobileNavOpen }"
          >
            <ul>
              <li>
                <a id="logo-link" href="https://balkan.app/OrgChartJS" @click.prevent="navigate('https://balkan.app/OrgChartJS')">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="261" height="40" style="margin-top: -5px;">
                    <g transform="matrix(0.75, 0, 0, 0.75, 0, 0)">
                      <rect fill="#039BE5" x="8.5" y="0" width="15" height="15"></rect>
                      <rect fill="#F57C00" x="0" y="17" width="15" height="15"></rect>
                      <rect fill="#FFCA28" x="17" y="17" width="15" height="15"></rect>
                    </g>
                    <text fill="#039be5" style="font-size: 24px;font-family: Roboto, sans-serif;font-weight: 700;" x="30" y="24">BALKAN </text>
                    <text fill="#f57c00" style="font-size: 24px;font-family: Roboto, sans-serif;font-weight: 400;" x="127" y="24">OrgChart JS</text>
                  </svg>
                </a>
              </li>
              <li>
                <a id="products-link" href="https://balkan.app" @click.prevent="navigate('https://balkan.app')">Products</a>
              </li>
              <li>
                <a href="https://balkan.app/OrgChartJS" @click.prevent="navigate('https://balkan.app/OrgChartJS')">Overview</a>
              </li>
              <li>
                <a href="https://balkan.app/OrgChartJS/Demos" @click.prevent="navigate('https://balkan.app/OrgChartJS/Demos')">Demos</a>
              </li>
              <li class="selected">
                <a href="./GettingStarted" @click="closeMobileNav">Docs</a>
              </li>
              <li>
                <a href="https://balkan.app/OrgChartJS/API/" @click.prevent="navigate('https://balkan.app/OrgChartJS/API/')">API</a>
              </li>
              <li>
                <a href="https://balkan.app/OrgChartJS/Download" @click.prevent="navigate('https://balkan.app/OrgChartJS/Download')">Download</a>
              </li>
              <li>
                <a href="https://balkan.app/OrgChartJS/Support" @click.prevent="navigate('https://balkan.app/OrgChartJS/Support')">Support</a>
              </li>
              <li>
                <a href="https://balkan.app/OrgChartJS/Pricing" @click.prevent="navigate('https://balkan.app/OrgChartJS/Pricing')">Pricing</a>
              </li>
            </ul>
          </nav>

          <a class="btn-blue" target="_blank" href="https://orgchartjs.balkan.app/">OrgChart JS Login</a>
        </nav>
      </header>
    </template>

        <template #doc-top>
      <div class="framework-doc-top-row">
        <ul>
          <li>
            <a style="color: #F57C00;" href="#" @click="closeMobileNav">JavaScript</a>
          </li>
          <li>
            <a :href="withBase('/Angular')" @click="closeMobileNav">Angular</a>
          </li>
          <li>
            <a :href="withBase('/React')" @click="closeMobileNav">React</a>    
          </li>
          <li>
            <a :href="withBase('/Vuejs')" @click="closeMobileNav">Vue</a>    
          </li>
        </ul>
      </div>
    </template>

  </Layout>
</template>