import{_ as a,M as d,p as n,q as r,R as e,t,N as i,a1 as o}from"./framework-204010b2.js";const l={},c=o('<h1 id="todoist" tabindex="-1"><a class="header-anchor" href="#todoist" aria-hidden="true">#</a> Todoist</h1><p>拉取 Todoist 数据到 logseq, 并使他们之间保持同步.</p><h2 id="api-token" tabindex="-1"><a class="header-anchor" href="#api-token" aria-hidden="true">#</a> API Token</h2><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>这个 API 密钥可以完全访问你的 Todoist 账户。不要泄漏。</p></div>',4),p={href:"https://todoist.com/app/settings/integrations",target:"_blank",rel:"noopener noreferrer"},h=o('<h2 id="sync" tabindex="-1"><a class="header-anchor" href="#sync" aria-hidden="true">#</a> Sync</h2><p>同步哪些数据</p><table><thead><tr><th style="text-align:left;">类型</th><th style="text-align:left;">详情</th></tr></thead><tbody><tr><td style="text-align:left;">All Todoist Projects</td><td style="text-align:left;">同步所有 Todoist 的任务到 logseq</td></tr><tr><td style="text-align:left;">A Specific Todoist Project</td><td style="text-align:left;">只同步你选中的 Todoist 项目的任务到 logseq</td></tr><tr><td style="text-align:left;">A Specific Todoist Filter</td><td style="text-align:left;">只同步符合过滤器的 Todoist 任务到 logseq</td></tr></tbody></table><h2 id="todoist-filter" tabindex="-1"><a class="header-anchor" href="#todoist-filter" aria-hidden="true">#</a> Todoist filter</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>当 Sync 设置为 <code>A Specific Todoist Filter</code> 时可用.</p></div>',5),f={href:"https://todoist.com/help/articles/introduction-to-filters",target:"_blank",rel:"noopener noreferrer"},g=o(`<p>For example, using GTD and a work parent project, you may have the following filter.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>##Work &amp; @next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="todoist-project" tabindex="-1"><a class="header-anchor" href="#todoist-project" aria-hidden="true">#</a> Todoist Project</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>当 Sync 设置为 <code>All Todoist Projects</code> 时可用.</p></div><p>在 logseq 中创建任务并 <code>Upload to todoist</code> 时, 会将此任务上传到 Todoist 下这个选项所指定的项目中.</p><h2 id="todoist-project-for-new-logseq-events" tabindex="-1"><a class="header-anchor" href="#todoist-project-for-new-logseq-events" aria-hidden="true">#</a> Todoist project for new logseq events</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>当 Sync 设置为 <code>A Specific Todoist Project</code> 时可用.</p></div><p>与 <a href="#todoist-project">Todoist Project</a> 类似.</p><p>该选项指定了哪个 Todoist 项目下的任务需要同步, 以及当在 logseq 中创建任务并上传时, 需要上传到 Todoist 哪个项目里.</p><h2 id="todoist-label-for-new-logseq-events" tabindex="-1"><a class="header-anchor" href="#todoist-label-for-new-logseq-events" aria-hidden="true">#</a> Todoist label for new logseq events</h2><p>在 logseq 中新建的任务, 上传到 Todoist 时, 设置为什么标签</p><h2 id="logseq-block-position" tabindex="-1"><a class="header-anchor" href="#logseq-block-position" aria-hidden="true">#</a> Logseq block position</h2><p>拉取 Todoist 任务后, 存放到 logseq 指定的 page 中.</p>`,13);function u(T,x){const s=d("ExternalLinkIcon");return n(),r("div",null,[c,e("p",null,[t("可以从 "),e("a",p,[t("integrations"),i(s)]),t(" 页面获取 API Token.")]),h,e("p",null,[t("填入一个搜索语句, 使用 "),e("a",f,[t("Todoist Filters"),i(s)]),t(" 语法.")]),g])}const m=a(l,[["render",u],["__file","todoist.html.vue"]]);export{m as default};
