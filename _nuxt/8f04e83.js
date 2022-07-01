(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{296:function(t,e,n){"use strict";n.r(e);var r={components:{Layout:n(176).a}},o=n(14),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Layout",{attrs:{title:"withdrawExitFasterMany erc721 POS  ",description:"Get started with maticjs",keywords:"pos client, erc721, withdrawExitFasterMany, polygon, sdk",contentSrc:"/home/runner/work/matic.js/matic.js/content/docs/pos/erc721/withdraw-exit-faster-many.md"}},[n("h1",{attrs:{id:"withdrawexitfastermany"}},[t._v("withdrawExitFasterMany")]),t._v(" "),n("pre",[n("code",{staticClass:"diff language-diff"},[t._v("- 📌 Deprecation Notice\n- This method is depricated and not supported in v3.4.0 and later\n")])]),t._v(" "),n("p",[n("code",[t._v("withdrawExitFasterMany")]),t._v(" method can be used to exit the withdraw process by using the txHash from "),n("code",[t._v("withdrawStartMany")]),t._v(" method.")]),t._v(" "),n("div",{staticClass:"highlight mb-20px mt-20px"},[t._v("\nIt is fast because it generates proof in backend. You need to configure "),n("a",{attrs:{href:"docs/set-proof-api"}},[t._v("setProofAPI")])]),t._v(" "),n("p",[n("strong",[t._v("Note")]),t._v("- withdrawStart transaction must be checkpointed in order to exit the withdraw.")]),t._v(" "),n("pre",[n("code",[t._v("const erc721RootToken = posClient.erc721(<root token address>, true);\n\nconst result = await erc721RootToken.withdrawExitFasterMany(<burn tx hash>);\n\nconst txHash = await result.getTransactionHash();\n\nconst txReceipt = await result.getReceipt();\n")])])])}),[],!1,null,null,null);e.default=component.exports}}]);