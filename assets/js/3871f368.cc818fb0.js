"use strict";(self.webpackChunkreact_number_format=self.webpackChunkreact_number_format||[]).push([[319],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=l(r),d=n,f=c["".concat(s,".").concat(d)]||c[d]||u[d]||o;return r?a.createElement(f,i(i({ref:t},m),{},{components:r})):a.createElement(f,i({ref:t},m))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=c;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},118:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>d,frontMatter:()=>p,metadata:()=>l,toc:()=>u});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),i=["components"],p={title:"Pattern Format",sidebar_position:4},s="Props",l={unversionedId:"pattern_format",id:"pattern_format",title:"Pattern Format",description:"allowEmptyFormatting boolean",source:"@site/docs/pattern_format.md",sourceDirName:".",slug:"/pattern_format",permalink:"/react-number-format/docs/pattern_format",editUrl:"https://github.com/s-yadav/react-number-format/docs/pattern_format.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Pattern Format",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Numeric Format",permalink:"/react-number-format/docs/numeric_format"},next:{title:"Customization",permalink:"/react-number-format/docs/customization"}},m={},u=[{value:"allowEmptyFormatting <code>boolean</code>",id:"allowemptyformatting-boolean",level:3},{value:"format <code>string</code>",id:"format-string",level:3},{value:"mask <code>string | Array&lt;string&gt;</code>",id:"mask-string--arraystring",level:3},{value:"patternChar <code>string</code>",id:"patternchar-string",level:3},{value:"Common Props",id:"common-props",level:3},{value:"Other exports",id:"other-exports",level:2},{value:"patternFormatter <code>(numString: string, props: PatternFormatProps) =&gt; string</code>",id:"patternformatter-numstring-string-props-patternformatprops--string",level:3},{value:"removePatternFormat <code>(inputValue: string, changeMeta: ChangeMeta, props: PatternFormatProps) =&gt; string</code>",id:"removepatternformat-inputvalue-string-changemeta-changemeta-props-patternformatprops--string",level:3},{value:"getPatternCaretBoundary <code>(formattedValue: string, props: PatternFormatProps) =&gt; Array&lt;boolean&gt;</code>",id:"getpatterncaretboundary-formattedvalue-string-props-patternformatprops--arrayboolean",level:3},{value:"usePatternFormat: <code>(props: PatternFormatProps) =&gt; NumberFormatBaseProps</code>",id:"usepatternformat-props-patternformatprops--numberformatbaseprops",level:3}],c={toc:u};function d(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"props"},"Props"),(0,o.kt)("h3",{id:"allowemptyformatting-boolean"},"allowEmptyFormatting ",(0,o.kt)("inlineCode",{parentName:"h3"},"boolean")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"default"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"false")),(0,o.kt)("p",null,"By default PatternFormat component does not apply formatting when value is empty (",(0,o.kt)("em",{parentName:"p"},"null, undefined or \u2018\u2019"),"). If you want to apply formatting on empty values set ",(0,o.kt)("inlineCode",{parentName:"p"},"allowEmptyFormatting")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { PatternFormat } from \'react-number-format\';\n\n<PatternFormat format="+1 (###) #### ###" allowEmptyFormatting mask="_" />;\n')),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Demo"),(0,o.kt)("iframe",{src:"https://codesandbox.io/embed/allow-empty-formatting-demo-kjs0lz?fontsize=16&hidenavigation=1&theme=dark&view=preview",className:"csb",title:"allow-empty-formatting-demo",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),(0,o.kt)("h3",{id:"format-string"},"format ",(0,o.kt)("inlineCode",{parentName:"h3"},"string")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"default"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")),(0,o.kt)("p",null,"It defines the format pattern using the ",(0,o.kt)("inlineCode",{parentName:"p"},"#")," (or a ",(0,o.kt)("a",{parentName:"p",href:"#patternchar-string"},(0,o.kt)("inlineCode",{parentName:"a"},"patternChar"))," ) character. ",(0,o.kt)("inlineCode",{parentName:"p"},"#")," is the placeholder character for numbers."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { PatternFormat } from 'react-number-format';\n\n<PatternFormat value={123123} format=\"### ###\" />;\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Demo"),(0,o.kt)("iframe",{src:"https://codesandbox.io/embed/format-demo-m3km9n?fontsize=14&hidenavigation=1&theme=dark&view=preview",className:"csb",title:"format-demo",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),(0,o.kt)("h3",{id:"mask-string--arraystring"},"mask ",(0,o.kt)("inlineCode",{parentName:"h3"},"string | Array<string>")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"default"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")),(0,o.kt)("p",null,"Used as mask character for numeric places, until any numeric character is provided for that position. You can provide different mask characters for every numeric positions by passing array of mask characters. ",(0,o.kt)("strong",{parentName:"p"},"Note"),": The length of mask characters should match the numbers of ",(0,o.kt)("inlineCode",{parentName:"p"},"#")," ",(0,o.kt)("a",{parentName:"p",href:"#patternchar-string"},"patternChar"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { PatternFormat } from \'react-number-format\';\n\n<PatternFormat value="411111" valueIsNumericString format="#### #### #### ####" mask="_" />;\n')),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Demo"),(0,o.kt)("iframe",{src:"https://codesandbox.io/embed/mask-demo-o06dsx?fontsize=14&hidenavigation=1&theme=dark&view=preview",className:"csb",title:"mask-demo",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),(0,o.kt)("h3",{id:"patternchar-string"},"patternChar ",(0,o.kt)("inlineCode",{parentName:"h3"},"string")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"default"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"#")),(0,o.kt)("p",null,"This helps define the ",(0,o.kt)("a",{parentName:"p",href:"#format-string"},(0,o.kt)("inlineCode",{parentName:"a"},"format"))," pattern character."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { PatternFormat } from \'react-number-format\';\n\n<PatternFormat format="%% (%%%)" patternChar="%" value={23456} />;\n')),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Demo"),(0,o.kt)("iframe",{src:"https://codesandbox.io/embed/patternchar-demo-syfu42?fontsize=14&hidenavigation=1&theme=dark&view=preview",className:"csb",title:"patternchar-demo",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),(0,o.kt)("h3",{id:"common-props"},"Common Props"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/props"},"See Common Props"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Other than this it accepts all the props which can be given to a input or span based on displayType you selected.")),(0,o.kt)("h2",{id:"other-exports"},"Other exports"),(0,o.kt)("p",null,"With v5.0 we expose some more utils/hooks which can be used for customization or other utilities"),(0,o.kt)("h3",{id:"patternformatter-numstring-string-props-patternformatprops--string"},"patternFormatter ",(0,o.kt)("inlineCode",{parentName:"h3"},"(numString: string, props: PatternFormatProps) => string")),(0,o.kt)("p",null,"In some places we need to just format the number before we pass it down as value, or in general just to render it. In such cases ",(0,o.kt)("inlineCode",{parentName:"p"},"patternFormatter")," can be used directly."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Parameters")),(0,o.kt)("p",null,"1st. ",(0,o.kt)("inlineCode",{parentName:"p"},"numString"),"(non formatted number string)"),(0,o.kt)("p",null,"2nd. ",(0,o.kt)("inlineCode",{parentName:"p"},"props")," (the format props applicable on numeric format)"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Return"),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"formattedString")," returns the formatted number."),(0,o.kt)("h3",{id:"removepatternformat-inputvalue-string-changemeta-changemeta-props-patternformatprops--string"},"removePatternFormat ",(0,o.kt)("inlineCode",{parentName:"h3"},"(inputValue: string, changeMeta: ChangeMeta, props: PatternFormatProps) => string")),(0,o.kt)("p",null,"Most of the time you might not need this, but in some customization case you might wan't to write a patched version on top of removePatternFormat."),(0,o.kt)("p",null,"However for customization case its recommended to use ",(0,o.kt)("inlineCode",{parentName:"p"},"usePatternFormat")," and patch the methods it returns, as lot of other handling is done in the hook."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Parameters")),(0,o.kt)("p",null,"1st. ",(0,o.kt)("inlineCode",{parentName:"p"},"inputValue"),": the value after user has typed, this will be formatted value with the additional character typed by user."),(0,o.kt)("p",null,"2nd. ",(0,o.kt)("inlineCode",{parentName:"p"},"changeMeta"),": This is the change information rnf sends internally, its basically the change information from the last formatted value and the current typed input value."),(0,o.kt)("p",null,"The type is following"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"{\n  from: {start: number, end: number},\n  to: {start: number, end: number},\n  lastValue: string\n}\n")),(0,o.kt)("p",null,"3rd. ",(0,o.kt)("inlineCode",{parentName:"p"},"props"),": all the numeric format props"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Return"),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"numString")," returns the number in string format."),(0,o.kt)("h3",{id:"getpatterncaretboundary-formattedvalue-string-props-patternformatprops--arrayboolean"},"getPatternCaretBoundary ",(0,o.kt)("inlineCode",{parentName:"h3"},"(formattedValue: string, props: PatternFormatProps) => Array<boolean>")),(0,o.kt)("p",null,"This method returns information about what all position in formatted value where caret can be places, it returns n+1 length array of booleans(where n is the length of formattedValue)."),(0,o.kt)("p",null,"Most of time you don't need this, but in case if you very specific usecase you can patch the function to handle your case."),(0,o.kt)("p",null,"See more details on ",(0,o.kt)("a",{parentName:"p",href:"https://s-yadav.github.io/react-number-format/docs/customization/#concept"},"Concept")),(0,o.kt)("h3",{id:"usepatternformat-props-patternformatprops--numberformatbaseprops"},"usePatternFormat: ",(0,o.kt)("inlineCode",{parentName:"h3"},"(props: PatternFormatProps) => NumberFormatBaseProps")),(0,o.kt)("p",null,"The whole numeric format logic is inside usePatternFormat hook, this returns all the required props which can be passed to ",(0,o.kt)("inlineCode",{parentName:"p"},"NumberFormatBase"),". For customization you can use to patch methods returned by ",(0,o.kt)("inlineCode",{parentName:"p"},"usePatternFormat")," and pass to ",(0,o.kt)("inlineCode",{parentName:"p"},"NumberFormatBase"),"."),(0,o.kt)("p",null,"See more details in ",(0,o.kt)("a",{parentName:"p",href:"https://s-yadav.github.io/react-number-format/docs/customization/"},"Customization")))}d.isMDXComponent=!0}}]);