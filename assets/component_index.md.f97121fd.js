import{_ as o,c as a,b as t,d as n,e,a as l,o as p,r as c}from"./app.265cc386.js";const f=JSON.parse('{"title":"Component","description":"","frontmatter":{},"headers":[{"level":2,"title":"Hierarchy","slug":"hierarchy","link":"#hierarchy","children":[]},{"level":2,"title":"Init","slug":"init","link":"#init","children":[]},{"level":2,"title":"Adding component","slug":"adding-component","link":"#adding-component","children":[]},{"level":2,"title":"Attribute","slug":"attribute","link":"#attribute","children":[]}],"relativePath":"component/index.md"}'),r={name:"component/index.md"},i=n("h1",{id:"component",tabindex:"-1"},[e("Component "),n("a",{class:"header-anchor",href:"#component","aria-hidden":"true"},"#")],-1),d=n("p",null,"Guard UI provides bunch of authentication related UI components.",-1),h=n("h2",{id:"hierarchy",tabindex:"-1"},[e("Hierarchy "),n("a",{class:"header-anchor",href:"#hierarchy","aria-hidden":"true"},"#")],-1),u=l(`<p>In this graph:</p><ul><li>Gray colored components are <code>base</code> components, you should not use them directly</li><li>Green colored components are <code>general</code> components</li><li>Blue colored components are <code>authentication</code> related components</li></ul><h2 id="init" tabindex="-1">Init <a class="header-anchor" href="#init" aria-hidden="true">#</a></h2><p>To use Guard UI component, add the following line in your html file:</p><div class="language-html"><button class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://unpkg.com/guard-ui/dist/index.mjs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">module</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="adding-component" tabindex="-1">Adding component <a class="header-anchor" href="#adding-component" aria-hidden="true">#</a></h2><p>Add components to your DOM by using custom tag:</p><div class="language-html"><button class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">g-button</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Click me</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">g-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="attribute" tabindex="-1">Attribute <a class="header-anchor" href="#attribute" aria-hidden="true">#</a></h2><p>Component has attributes. For most attributes, simply convert CSS property name to camel case:</p><div class="language-html"><button class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">g-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">backgroundColor</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#F00</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Click me</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">g-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>There are component-specific attributes, please check the documentation for the particular component.</p>`,12);function m(y,D,F,g,_,b){const s=c("ZoomImg");return p(),a("div",null,[i,d,h,t(s,{src:"./images/components.png"}),u])}const v=o(r,[["render",m]]);export{f as __pageData,v as default};
