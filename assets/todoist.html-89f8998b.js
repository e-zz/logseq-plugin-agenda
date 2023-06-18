import{_ as a,M as n,p as r,q as l,R as e,t,N as i,a1 as o}from"./framework-204010b2.js";const c={},d=o('<h1 id="todoist" tabindex="-1"><a class="header-anchor" href="#todoist" aria-hidden="true">#</a> Todoist</h1><p>Todoist tasks can be synchonised into with Logseq graph using the following options.</p><h2 id="api-token" tabindex="-1"><a class="header-anchor" href="#api-token" aria-hidden="true">#</a> API Token</h2><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>This API key gives complete access to your Todoist account. Use at your own risk.</p></div>',4),h={href:"https://todoist.com/app/settings/integrations",target:"_blank",rel:"noopener noreferrer"},p=o('<p>Please copy your API key from here into the settings page.</p><h2 id="sync" tabindex="-1"><a class="header-anchor" href="#sync" aria-hidden="true">#</a> Sync</h2><p>Two-way sync is availble once you have configured your API key as stated above.</p><p>The sync options are as follows:</p><table><thead><tr><th style="text-align:left;">Option</th><th style="text-align:left;">Details</th></tr></thead><tbody><tr><td style="text-align:left;">All Todoist Projects</td><td style="text-align:left;">This will source all your Todoist tasks. Use this option if you want all your Todoist tasks to be synced with your Logseq graph.</td></tr><tr><td style="text-align:left;">A Specific Todoist Project</td><td style="text-align:left;">Limit the scope of the sync to only include tasks in the project you have selected. Selecting this option will necessitate setting the project you wish to sync with.</td></tr><tr><td style="text-align:left;">A Specific Todoist Filter</td><td style="text-align:left;">Limit the scope of the tasks that will be synced to only those tasks contained within a filter.</td></tr></tbody></table><h2 id="todoist-filter" tabindex="-1"><a class="header-anchor" href="#todoist-filter" aria-hidden="true">#</a> Todoist filter</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Only available if you have set your sync option to <code>A Specific Todoist Filter</code>.</p></div>',7),u={href:"https://todoist.com/help/articles/introduction-to-filters",target:"_blank",rel:"noopener noreferrer"},y=o(`<p>For example, using GTD and a work parent project, you may have the following filter.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>##Work &amp; @next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="todoist-project" tabindex="-1"><a class="header-anchor" href="#todoist-project" aria-hidden="true">#</a> Todoist Project</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Only available if you have set your sync option to <code>All Todoist Projects</code>.</p></div><p>Any new tasks created within Logseq will be added to this Todoist project.</p><h2 id="todoist-project-for-new-logseq-events" tabindex="-1"><a class="header-anchor" href="#todoist-project-for-new-logseq-events" aria-hidden="true">#</a> Todoist project for new logseq events</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Only available if you have set your sync option to <code>A Specific Todoist Project</code>.</p></div><p>Very similar to the <a href="#todoist-project">Todoist Project</a> above. This is used to select the project we wish to sync with.</p><h2 id="todoist-label-for-new-logseq-events" tabindex="-1"><a class="header-anchor" href="#todoist-label-for-new-logseq-events" aria-hidden="true">#</a> Todoist label for new logseq events</h2><p>The label you wish to have assigned to any new tasks created within Logseq.</p><h2 id="logseq-block-position" tabindex="-1"><a class="header-anchor" href="#logseq-block-position" aria-hidden="true">#</a> Logseq block position</h2><p>The page to sync your events with.</p>`,12);function f(g,v){const s=n("ExternalLinkIcon");return r(),l("div",null,[d,e("p",null,[t("Your API token can be fetch from your Todoist account using the "),e("a",h,[t("integrations"),i(s)]),t(" configuration page.")]),p,e("p",null,[t("This filter will be a search statement using the same syntax used in "),e("a",u,[t("Todoist Filters"),i(s)]),t(".")]),y])}const w=a(c,[["render",f],["__file","todoist.html.vue"]]);export{w as default};
