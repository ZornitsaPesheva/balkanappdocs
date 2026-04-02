<template>
  <Tabs defaultTab="cdn">
    <Tab name="cdn" label="CDN">
      <h3>Add this script in your HTML file</h3>
      <div class="vp-code-group">
        <div class="tabs">
          <input type="radio" name="group-cdn" id="tab-cdn-html" checked>
          <label data-title="HTML" for="tab-cdn-html">Free Trial and Commercial Licenses</label>
          <input type="radio" name="group-cdn" id="tab-cdn-esm">
          <label data-title="ESM" for="tab-cdn-esm">Community Edition (Free)</label>
        </div>
        <div class="blocks">
          <div class="language-html active">
            <span class="lang">html</span>
            <pre class="shiki shiki-themes github-light github-dark" tabindex="0"><code><span class="line"><span style="--shiki-light:#cf222e;--shiki-dark:#f97583">&lt;</span><span style="--shiki-light:#116329;--shiki-dark:#7ee787">script</span> <span style="--shiki-light:#116329;--shiki-dark:#7ee787">src</span><span style="--shiki-light:#24292f;--shiki-dark:#c9d1d9">=</span><span style="--shiki-light:#0a3069;--shiki-dark:#a5d6ff">"https://cdn.balkan.app/orgchart.js"</span><span style="--shiki-light:#cf222e;--shiki-dark:#f97583">&gt;&lt;/</span><span style="--shiki-light:#116329;--shiki-dark:#7ee787">script</span><span style="--shiki-light:#cf222e;--shiki-dark:#f97583">&gt;</span></span></code></pre>
          </div>
          <div class="language-js">
            <span class="lang">html</span>
            <pre class="shiki shiki-themes github-light github-dark" tabindex="0"><code><span class="line"><span style="--shiki-light:#cf222e;--shiki-dark:#f97583">&lt;</span><span style="--shiki-light:#116329;--shiki-dark:#7ee787">script</span> <span style="--shiki-light:#116329;--shiki-dark:#7ee787">src</span><span style="--shiki-light:#24292f;--shiki-dark:#c9d1d9">=</span><span style="--shiki-light:#0a3069;--shiki-dark:#a5d6ff">"https://cdn.balkan.app/orgchart-community.js"</span><span style="--shiki-light:#cf222e;--shiki-dark:#f97583">&gt;&lt;/</span><span style="--shiki-light:#116329;--shiki-dark:#7ee787">script</span><span style="--shiki-light:#cf222e;--shiki-dark:#f97583">&gt;</span></span></code></pre>
          </div>
        </div>
      </div>
    </Tab>

    <Tab name="downloaded" label="Downloaded">
      <ol>

        <li>Download the latest version of OrgChart JS from the <a href="https://balkan.app/OrgChartJS/Download" target="_blank">Download page</a>.</li>
        <li>Extract the downloaded archive and include the <code>js</code> file in your project.</li>
        <li>Add the script to your HTML file:</li>
        <div class="vp-code-group">
          <div class="tabs">
            <input type="radio" name="group-downloaded" id="tab-downloaded-html" checked>
            <label data-title="HTML" for="tab-downloaded-html">Free Trial and Commercial Licenses</label>
            <input type="radio" name="group-downloaded" id="tab-downloaded-esm">
            <label data-title="ESM" for="tab-downloaded-esm">Community Edition (Free)</label>
          </div>
          <div class="blocks">
            <div class="language-html active">
              <span class="lang">html</span>
              <pre class="shiki shiki-themes github-light github-dark" tabindex="0"><code><span class="line"><span style="--shiki-light:#cf222e;--shiki-dark:#f97583">&lt;</span><span style="--shiki-light:#116329;--shiki-dark:#7ee787">script</span> <span style="--shiki-light:#116329;--shiki-dark:#7ee787">src</span><span style="--shiki-light:#24292f;--shiki-dark:#c9d1d9">=</span><span style="--shiki-light:#0a3069;--shiki-dark:#a5d6ff">"path/to/orgchart.js"</span><span style="--shiki-light:#cf222e;--shiki-dark:#f97583">&gt;&lt;/</span><span style="--shiki-light:#116329;--shiki-dark:#7ee787">script</span><span style="--shiki-light:#cf222e;--shiki-dark:#f97583">&gt;</span></span></code></pre>
            </div>
            <div class="language-js">
              <span class="lang">html</span>
              <pre class="shiki shiki-themes github-light github-dark" tabindex="0"><code><span class="line"><span style="--shiki-light:#cf222e;--shiki-dark:#f97583">&lt;</span><span style="--shiki-light:#116329;--shiki-dark:#7ee787">script</span> <span style="--shiki-light:#116329;--shiki-dark:#7ee787">src</span><span style="--shiki-light:#24292f;--shiki-dark:#c9d1d9">=</span><span style="--shiki-light:#0a3069;--shiki-dark:#a5d6ff">"path/to/orgchart-community.js"</span><span style="--shiki-light:#cf222e;--shiki-dark:#f97583">&gt;&lt;/</span><span style="--shiki-light:#116329;--shiki-dark:#7ee787">script</span><span style="--shiki-light:#cf222e;--shiki-dark:#f97583">&gt;</span></span></code></pre>

            </div>
          </div>
        </div>
        <li>TypeScript declarations:</li>
        <p>To have intellisense you also need to add the <code>.d.ts</code> file to your project.</p>
        <div class="vp-code-group">
          <div class="tabs">
            <input type="radio" name="group-dts" id="tab-dts-orgchart" checked>
            <label data-title="orgchart.d.ts" for="tab-dts-orgchart">Free Trial and Commercial Licenses</label>
            <input type="radio" name="group-dts" id="tab-dts-orgchart-community">
            <label data-title="orgchart-community.d.ts" for="tab-dts-orgchart-community">Community Edition (Free)</label>
          </div>
          <div class="blocks">
            <div class="language-ts active">
              <span class="lang">ts</span>
              <pre class="shiki shiki-themes github-light github-dark" tabindex="0"><code><span class="line">/// &lt;reference path="orgchart.d.ts" /&gt;</span></code></pre>
            </div>
            <div class="language-ts">
              <span class="lang">ts</span>
              <pre class="shiki shiki-themes github-light github-dark" tabindex="0"><code><span class="line">/// &lt;reference path="orgchart-community.d.ts" /&gt;</span></code></pre>
            </div>
          </div>
        </div>
      </ol> 

    </Tab>

    <Tab name="cdn-module" label="CDN as module">
      <h3>Add this module script in your HTML file</h3>
      <div class="vp-code-group">
        <div class="tabs">
          <input type="radio" name="group-cdn-module" id="tab-cdn-module-orgchart" checked>
          <label data-title="Module" for="tab-cdn-module-orgchart">Free Trial and Commercial Licenses</label>
          <input type="radio" name="group-cdn-module" id="tab-cdn-module-community">
          <label data-title="Module" for="tab-cdn-module-community">Community Edition (Free)</label>
        </div>
        <div class="blocks">
          <div class="language-html active">
            <span class="lang">html</span>
            <pre class="shiki shiki-themes github-light github-dark" tabindex="0"><code><span class="line">&lt;script type="module"&gt;</span>
<span class="line">  import OrgChart from "https://cdn.balkan.app/orgchart.js";</span>
<span class="line">&lt;/script&gt;</span></code></pre>
          </div>
          <div class="language-js">
            <span class="lang">html</span>
            <pre class="shiki shiki-themes github-light github-dark" tabindex="0"><code><span class="line">&lt;script type="module"&gt;</span>
<span class="line">  import OrgChart from "https://cdn.balkan.app/orgchart-community.js";</span>
<span class="line">&lt;/script&gt;</span></code></pre>
          </div>
        </div>
      </div>
    </Tab>



    <Tab name="downloaded-module" label="Downloaded as Module">
      <h3>Import the downloaded file as a module</h3>
      <ol>
        <li>Download the latest version of OrgChart JS from the <a href="https://balkan.app/OrgChartJS/Download" target="_blank">Download page</a>.</li>
        <li>Extract the archive and keep the module files in your project.</li>
      </ol>
      <div class="vp-code-group">
        <div class="tabs">
          <input type="radio" name="group-downloaded-module" id="tab-downloaded-module-orgchart" checked>
          <label data-title="Module" for="tab-downloaded-module-orgchart">Free Trial and Commercial Licenses</label>
          <input type="radio" name="group-downloaded-module" id="tab-downloaded-module-community">
          <label data-title="Module" for="tab-downloaded-module-community">Community Edition (Free)</label>
        </div>
        <div class="blocks">
          <div class="language-html active">
            <span class="lang">html</span>
            <pre class="shiki shiki-themes github-light github-dark" tabindex="0"><code><span class="line">&lt;script type="module"&gt;</span>
<span class="line">  import OrgChart from "./path/to/orgchart.js";</span>
<span class="line">&lt;/script&gt;</span></code></pre>
          </div>
          <div class="language-js">
            <span class="lang">html</span>
            <pre class="shiki shiki-themes github-light github-dark" tabindex="0"><code><span class="line">&lt;script type="module"&gt;</span>
<span class="line">  import OrgChart from "./path/to/orgchart-community.js";</span>
<span class="line">&lt;/script&gt;</span></code></pre>
          </div>
        </div>
      </div>
    </Tab>

    <Tab name="npm" label="npm">
      <h3>Install via package manager</h3>
      <div class="vp-code-group">
        <div class="tabs">
          <input type="radio" name="group-npm" id="tab-npm-commercial" checked>
          <label data-title="commercial" for="tab-npm-commercial">balkan-orgchart-js</label>
          <input type="radio" name="group-npm" id="tab-npm-community">
          <label data-title="community" for="tab-npm-community">balkan-orgchart-js-community</label>
        </div>
        <div class="blocks">
          <div class="language-bash active">
            <span class="lang">bash</span>
            <pre class="shiki shiki-themes github-light github-dark" tabindex="0"><code><span class="line">npm install balkan-orgchart-js</span>
<span class="line"># or with yarn:</span>
<span class="line">yarn add balkan-orgchart-js</span></code></pre>
          </div>
          <div class="language-bash">
            <span class="lang">bash</span>
            <pre class="shiki shiki-themes github-light github-dark" tabindex="0"><code><span class="line">npm install balkan-orgchart-js-community</span>
<span class="line"># or with yarn:</span>
<span class="line">yarn add balkan-orgchart-js-community</span></code></pre>
          </div>
        </div>
      </div>
      <p>Import it in your code:</p>
      <div class="vp-code-group" style="margin-top: 8px;">
        <div class="tabs">
          <input type="radio" name="group-npm-import" id="tab-npm-import-commercial" checked>
          <label data-title="commercial" for="tab-npm-import-commercial">balkan-orgchart-js</label>
          <input type="radio" name="group-npm-import" id="tab-npm-import-community">
          <label data-title="community" for="tab-npm-import-community">balkan-orgchart-js-community</label>
        </div>
        <div class="blocks">
          <div class="language-js active">
            <span class="lang">js</span>
            <pre class="shiki shiki-themes github-light github-dark" tabindex="0"><code><span class="line">import OrgChart from "balkan-orgchart-js";</span></code></pre>
          </div>
          <div class="language-js">
            <span class="lang">js</span>
            <pre class="shiki shiki-themes github-light github-dark" tabindex="0"><code><span class="line">import OrgChart from "balkan-orgchart-js-community";</span></code></pre>
          </div>
        </div>
      </div>
    </Tab>
  </Tabs>
</template>
