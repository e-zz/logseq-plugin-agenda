import{_ as o,a as p,b as t}from"./otherQuery3-44628526.js";import{_ as e,M as l,p as c,q as i,R as n,t as s,N as u,a1 as k}from"./framework-204010b2.js";const r={},d=n("h1",{id:"query-示例",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#query-示例","aria-hidden":"true"},"#"),s(" Query 示例")],-1),b=n("h2",{id:"使用日期替代-scheduled",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#使用日期替代-scheduled","aria-hidden":"true"},"#"),s(" 使用日期替代 scheduled")],-1),m={href:"https://github.com/haydenull/logseq-plugin-agenda/issues/19",target:"_blank",rel:"noopener noreferrer"},v=k('<p>笔记如下:</p><p><img src="'+o+`" alt=""></p><p>配置如下:</p><p>Query Script:</p><div class="language-clojure line-numbers-mode" data-ext="clojure"><pre class="language-clojure"><code><span class="token punctuation">[</span><span class="token symbol">:find</span> <span class="token punctuation">(</span><span class="token function">pull</span>
  ?block
  <span class="token punctuation">[</span><span class="token symbol">:block/uuid</span>
    <span class="token symbol">:block/parent</span>
    <span class="token symbol">:db/id</span>
    <span class="token symbol">:block/left</span>
    <span class="token symbol">:block/collapsed?</span>
    <span class="token symbol">:block/format</span>
    <span class="token symbol">:block/_refs</span>
    <span class="token symbol">:block/path-refs</span>
    <span class="token symbol">:block/tags</span>
    <span class="token symbol">:block/content</span>
    <span class="token symbol">:block/marker</span>
    <span class="token symbol">:block/priority</span>
    <span class="token symbol">:block/properties</span>
    <span class="token symbol">:block/pre-block?</span>
    <span class="token symbol">:block/scheduled</span>
    <span class="token symbol">:block/deadline</span>
    <span class="token symbol">:block/repeated?</span>
    <span class="token symbol">:block/created-at</span>
    <span class="token symbol">:block/updated-at</span>
    <span class="token symbol">:block/file</span>
    <span class="token symbol">:block/heading-level</span>
    <span class="token punctuation">{</span><span class="token symbol">:block/page</span>
      <span class="token punctuation">[</span><span class="token symbol">:db/id</span> <span class="token symbol">:block/name</span> <span class="token symbol">:block/original-name</span> <span class="token symbol">:block/journal-day</span> <span class="token symbol">:block/journal?</span><span class="token punctuation">]</span><span class="token punctuation">}</span>
    <span class="token punctuation">{</span><span class="token symbol">:block/refs</span>
      <span class="token punctuation">[</span><span class="token symbol">:block/journal-day</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token symbol">:where</span>
  <span class="token punctuation">[</span>?block <span class="token symbol">:block/marker</span> ?marker<span class="token punctuation">]</span>
  <span class="token punctuation">[</span>?rp <span class="token symbol">:block/journal?</span> <span class="token boolean">true</span><span class="token punctuation">]</span>
  <span class="token punctuation">[</span>?block <span class="token symbol">:block/refs</span> ?rp<span class="token punctuation">]</span>
  <span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token keyword">contains?</span> <span class="token operator">#</span><span class="token punctuation">{</span><span class="token string">&quot;TODO&quot;</span> <span class="token string">&quot;DOING&quot;</span> <span class="token string">&quot;NOW&quot;</span> <span class="token string">&quot;LATER&quot;</span> <span class="token string">&quot;WAITING&quot;</span> <span class="token string">&quot;DONE&quot;</span><span class="token punctuation">}</span> ?marker<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Schedule Start: <code>refs[0].journal-day</code></p><p>Date Formatter: <code>yyyyMMdd</code></p><p><img src="`+p+'" alt=""></p><p>日历: <img src="'+t+`" alt=""></p><h2 id="从默认-journal-日历中排除指定页面" tabindex="-1"><a class="header-anchor" href="#从默认-journal-日历中排除指定页面" aria-hidden="true">#</a> 从默认 journal 日历中排除指定页面</h2><p>默认 journal 日历会在所有笔记中查询符合条件的任务, 但是可以通过配置 query script 排除指定页面.</p><p>假如我们希望 journal 日历不显示 <code>your project</code> 页面的任务.</p><p>只需要将以下代码添加到 query 1 2 4 的 script 中：</p><div class="language-clojure line-numbers-mode" data-ext="clojure"><pre class="language-clojure"><code>  <span class="token punctuation">[</span>?page <span class="token symbol">:block/name</span> ?pname<span class="token punctuation">]</span>
  <span class="token punctuation">[</span>?block <span class="token symbol">:block/page</span> ?page<span class="token punctuation">]</span>
  <span class="token punctuation">(</span><span class="token keyword">not</span> <span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token keyword">contains?</span> <span class="token operator">#</span><span class="token punctuation">{</span><span class="token string">&quot;your project&quot;</span><span class="token punctuation">}</span> ?pname<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如 query 1 原本的 script 为：</p><div class="language-clojure line-numbers-mode" data-ext="clojure"><pre class="language-clojure"><code><span class="token punctuation">[</span><span class="token symbol">:find</span> <span class="token punctuation">(</span><span class="token function">pull</span> ?block <span class="token punctuation">[</span>*<span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token symbol">:where</span>
  <span class="token punctuation">[</span>?block <span class="token symbol">:block/marker</span> ?marker<span class="token punctuation">]</span>
  <span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token function">missing?</span> $ ?block <span class="token symbol">:block/deadline</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
  <span class="token punctuation">(</span><span class="token keyword">not</span> <span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token function">missing?</span> $ ?block <span class="token symbol">:block/scheduled</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token keyword">contains?</span> <span class="token operator">#</span><span class="token punctuation">{</span><span class="token string">&quot;TODO&quot;</span> <span class="token string">&quot;DOING&quot;</span> <span class="token string">&quot;NOW&quot;</span> <span class="token string">&quot;LATER&quot;</span> <span class="token string">&quot;WAITING&quot;</span> <span class="token string">&quot;DONE&quot;</span><span class="token punctuation">}</span> ?marker<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改后的 script 为：</p><div class="language-clojure line-numbers-mode" data-ext="clojure"><pre class="language-clojure"><code><span class="token punctuation">[</span><span class="token symbol">:find</span> <span class="token punctuation">(</span><span class="token function">pull</span> ?block <span class="token punctuation">[</span>*<span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token symbol">:where</span>
  <span class="token punctuation">[</span>?block <span class="token symbol">:block/marker</span> ?marker<span class="token punctuation">]</span>
  <span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token function">missing?</span> $ ?block <span class="token symbol">:block/deadline</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
  <span class="token punctuation">(</span><span class="token keyword">not</span> <span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token function">missing?</span> $ ?block <span class="token symbol">:block/scheduled</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">[</span>?page <span class="token symbol">:block/name</span> ?pname<span class="token punctuation">]</span>
  <span class="token punctuation">[</span>?block <span class="token symbol">:block/page</span> ?page<span class="token punctuation">]</span>
  <span class="token punctuation">(</span><span class="token keyword">not</span> <span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token keyword">contains?</span> <span class="token operator">#</span><span class="token punctuation">{</span><span class="token string">&quot;your project&quot;</span><span class="token punctuation">}</span> ?pname<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token keyword">contains?</span> <span class="token operator">#</span><span class="token punctuation">{</span><span class="token string">&quot;TODO&quot;</span> <span class="token string">&quot;DOING&quot;</span> <span class="token string">&quot;NOW&quot;</span> <span class="token string">&quot;LATER&quot;</span> <span class="token string">&quot;WAITING&quot;</span> <span class="token string">&quot;DONE&quot;</span><span class="token punctuation">}</span> ?marker<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18);function y(g,h){const a=l("ExternalLinkIcon");return c(),i("div",null,[d,b,n("p",null,[n("a",m,[s("issue19"),u(a)])]),v])}const _=e(r,[["render",y],["__file","query.html.vue"]]);export{_ as default};
