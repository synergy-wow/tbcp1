(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"9i+i":function(s,e,t){"use strict";t.r(e),t.d(e,"StatisticsModule",(function(){return f}));var i=t("ofXK"),o=t("tyNb"),n=t("XNiG"),r=t("1G5W"),c=t("vkgz"),a=t("pHS2"),b=t("wBxZ"),d=t("fXoL"),l=t("suKW"),g=t("HcYF");function m(s,e){if(1&s&&(d.Ob(0,"div",9),d.Jb(1,"progress",10),d.Ob(2,"span",11),d.sc(3),d.Nb(),d.Nb()),2&s){const s=d.Xb();d.xb(1),d.cc("value",s.totalProgress.progress),d.xb(2),d.vc("Total Loot Progress (This Phase): ",s.totalProgress.rankingsReceived," / ",s.totalProgress.rankings,"")}}function u(s,e){if(1&s&&(d.Ob(0,"div",9),d.Jb(1,"progress",12),d.Ob(2,"span",11),d.sc(3),d.Nb(),d.Nb()),2&s){const s=d.Xb();d.xb(1),d.cc("value",s.totalProgressTop10.progress),d.xb(2),d.vc("Top 10 Rankings Progress (This Phase): ",s.totalProgressTop10.rankingsReceived," / ",s.totalProgressTop10.rankings,"")}}function v(s,e){if(1&s&&(d.Ob(0,"li"),d.sc(1),d.Nb()),2&s){const s=e.$implicit;d.xb(1),d.vc(" ",s.ranking.loot.name," (",s.sum,") ")}}function p(s,e){if(1&s&&(d.Ob(0,"div",13),d.Ob(1,"div"),d.Ob(2,"p",4),d.sc(3,"Most Popular Items"),d.Nb(),d.Ob(4,"ol"),d.qc(5,v,2,2,"li",14),d.Nb(),d.Nb(),d.Nb()),2&s){const s=d.Xb();d.xb(5),d.cc("ngForOf",s.mostPopularItems)}}function h(s,e){if(1&s&&(d.Ob(0,"li"),d.sc(1),d.Nb()),2&s){const s=e.$implicit;d.xb(1),d.vc(" ",s.item.name," (",s.count,") ")}}function O(s,e){if(1&s&&(d.Ob(0,"div",13),d.Ob(1,"div"),d.Ob(2,"p",4),d.sc(3,"Most Commonly Looted Items"),d.Nb(),d.Ob(4,"ol"),d.qc(5,h,2,2,"li",14),d.Nb(),d.Nb(),d.Nb()),2&s){const s=d.Xb();d.xb(5),d.cc("ngForOf",s.mostCommonItems)}}const k=[{path:"",component:(()=>{class s{constructor(s,e){this.lootListFacade=s,this.statisticsService=e,this.destroyed$=new n.a,this.raiderCount=0,this.lootReceived=0,this.totalRanked=0,this.avgAttendance=0,this.totalReceivedThisPhase=0,this.totalProgress=null,this.totalProgressTop10=null,this.mostPopularItems=null,this.mostCommonItems=null}ngOnInit(){this.lootListFacade.raiders$.pipe(Object(r.a)(this.destroyed$),Object(c.a)(s=>{this.raiderCount=s.length,this.lootReceived=s.reduce((s,e)=>s+e.receivedLoot.length,0),this.totalRanked=s.reduce((s,e)=>s+e.rankings.length,0),this.avgAttendance=s.reduce((s,e)=>s+e.attendancePoints,0)/this.raiderCount;const e=s.map(s=>this.statisticsService.getRaiderListProgress(s));this.totalProgress=e.reduce((s,e)=>(s.rankings=s.rankings+e.rankings,s.rankingsReceived=s.rankingsReceived+e.rankingsReceived,s),{progress:0,rankings:0,rankingsReceived:0}),this.totalProgress.progress=this.totalProgress.rankingsReceived/this.totalProgress.rankings*100;const t=s.map(s=>this.statisticsService.getRaiderListProgress(s,10));this.totalProgressTop10=t.reduce((s,e)=>(s.rankings=s.rankings+e.rankings,s.rankingsReceived=s.rankingsReceived+e.rankingsReceived,s),{progress:0,rankings:0,rankingsReceived:0}),this.totalProgressTop10.progress=this.totalProgressTop10.rankingsReceived/this.totalProgressTop10.rankings*100;const i=s.reduce((s,e)=>[...s,...e.rankings],[]),o=Object(a.a)(i,"loot.itemId"),n=Object.keys(o).filter(s=>"undefined"!=s).map(s=>({itemId:s,sum:o[s].reduce((s,e)=>s+e.ranking,0)})).sort((s,e)=>e.sum-s.sum),r=Object(b.a)(n,10);this.mostPopularItems=r.map(s=>({ranking:o[s.itemId][0],sum:s.sum}));const c=s.reduce((s,e)=>[...s,...e.receivedLoot],[]),d=Object(a.a)(c,"itemId"),l=Object.keys(d).filter(s=>"undefined"!=s).map(s=>({itemId:s,count:d[s].length})).sort((s,e)=>e.count-s.count),g=Object(b.a)(l,10);this.mostCommonItems=g.map(s=>({item:d[s.itemId][0],count:s.count}))})).subscribe()}ngOnDestroy(){this.destroyed$.next()}}return s.\u0275fac=function(e){return new(e||s)(d.Ib(l.a),d.Ib(g.a))},s.\u0275cmp=d.Cb({type:s,selectors:[["app-statistics"]],decls:35,vars:8,consts:[[1,"columns","is-multiline"],[1,"column","is-12"],[1,"level","is-mobile"],[1,"level-item","has-text-centered","box"],[1,"heading"],[1,"title"],[1,"box","has-background-dark"],["class","has-text-centered",4,"ngIf"],["class","level-item box",4,"ngIf"],[1,"has-text-centered"],["max","100",1,"progress","is-info","mb-0",3,"value"],[1,"has-text-centered","is-size-5","is-grey-light"],["max","100",1,"progress","is-success","mb-0",3,"value"],[1,"level-item","box"],[4,"ngFor","ngForOf"]],template:function(s,e){1&s&&(d.Ob(0,"div",0),d.Ob(1,"div",1),d.Ob(2,"nav",2),d.Ob(3,"div",3),d.Ob(4,"div"),d.Ob(5,"p",4),d.sc(6,"Raiders"),d.Nb(),d.Ob(7,"p",5),d.sc(8),d.Nb(),d.Nb(),d.Nb(),d.Ob(9,"div",3),d.Ob(10,"div"),d.Ob(11,"p",4),d.sc(12,"Total Loot Received (All Time)"),d.Nb(),d.Ob(13,"p",5),d.sc(14),d.Nb(),d.Nb(),d.Nb(),d.Ob(15,"div",3),d.Ob(16,"div"),d.Ob(17,"p",4),d.sc(18,"Total Rankings (This Phase)"),d.Nb(),d.Ob(19,"p",5),d.sc(20),d.Nb(),d.Nb(),d.Nb(),d.Ob(21,"div",3),d.Ob(22,"div"),d.Ob(23,"p",4),d.sc(24,"Average Attendance Points"),d.Nb(),d.Ob(25,"p",5),d.sc(26),d.Nb(),d.Nb(),d.Nb(),d.Nb(),d.Nb(),d.Ob(27,"div",1),d.Ob(28,"div",6),d.qc(29,m,4,3,"div",7),d.qc(30,u,4,3,"div",7),d.Nb(),d.Nb(),d.Ob(31,"div",1),d.Ob(32,"nav",2),d.qc(33,p,6,1,"div",8),d.qc(34,O,6,1,"div",8),d.Nb(),d.Nb(),d.Nb()),2&s&&(d.xb(8),d.tc(e.raiderCount),d.xb(6),d.tc(e.lootReceived),d.xb(6),d.tc(e.totalRanked),d.xb(6),d.tc(e.avgAttendance.toFixed(2)),d.xb(3),d.cc("ngIf",e.totalProgress),d.xb(1),d.cc("ngIf",e.totalProgressTop10),d.xb(3),d.cc("ngIf",e.mostPopularItems),d.xb(1),d.cc("ngIf",e.mostCommonItems))},directives:[i.l,i.k],styles:[""]}),s})()}];let N=(()=>{class s{}return s.\u0275mod=d.Gb({type:s}),s.\u0275inj=d.Fb({factory:function(e){return new(e||s)},imports:[[o.d.forChild(k)],o.d]}),s})(),f=(()=>{class s{}return s.\u0275mod=d.Gb({type:s}),s.\u0275inj=d.Fb({factory:function(e){return new(e||s)},imports:[[i.c,N]]}),s})()}}]);