import{_ as e,a as o,b as l}from"./exportWeekly-d2c6f6a4.js";import{_ as a,p as i,q as t,a1 as c}from"./framework-204010b2.js";const d={},n=c('<h1 id="daily-log-record" tabindex="-1"><a class="header-anchor" href="#daily-log-record" aria-hidden="true">#</a> Daily log record</h1><p>Based on <code>Log Key</code> setting, the plugin will collect all the contents under the block in the journal and display it in the calendar</p><p>There are three situations:</p><ol><li>Block with time points, such as: 14:00 foo, will be considered <code>Time</code> event</li><li>Have a time range, such as: 14: 00-16: 00 foo, will be considered <code>Time</code> event</li><li>There is no time point in the block, such as: foo, will be considered <code>all day</code> event</li></ol><p>Take the Log Key as <code>Daily Log</code> as an example:</p><p>journal: <img src="'+e+'" alt=""> calendar: <img src="'+o+'" alt=""></p><p>When Log Key is enabled, the weekly view will display the <code>Export Weekly</code> button, and the weekly agenda will show up and support copy</p><p><img src="'+l+'" alt=""></p>',8),s=[n];function r(p,h){return i(),t("div",null,s)}const u=a(d,[["render",r],["__file","dailylog.html.vue"]]);export{u as default};
