(function(d,t,a,u,o,s,h,S){"use strict";const g=t.findByProps("openLazy","hideActionSheet"),{FormRow:A,FormArrow:E}=s.Forms,{View:_,Image:P,Text:T}=s.General,I=t.findByProps("ActionSheet")?.ActionSheet??t.find(function(n){return n.render?.name==="ActionSheet"}),{BottomSheetScrollView:B}=t.findByProps("BottomSheetScrollView"),{ActionSheetTitleHeader:w}=t.findByProps("ActionSheetTitleHeader"),{type:N}=t.findByProps("AvatarSizes").default,{useTypingUserIds:C}=t.findByProps("TYPING_WRAPPER_HEIGHT"),z=t.findByStoreName("UserStore"),U=t.findByStoreName("RelationshipStore"),v=t.findByStoreName("GuildMemberStore"),b=t.findByStoreName("ThemeStore"),{showUserProfile:G}=t.findByProps("showUserProfile");function M(n){g.openLazy(new Promise(function(e){return e({default:H})}),"TypingActionSheet",{channel:n})}const x=a.stylesheet.createThemedStyleSheet({text:{fontFamily:a.constants.Fonts.PRIMARY_MEDIUM,fontSize:16,lineHeight:20,color:o.semanticColors.TEXT_MUTED,textAlign:"center",marginTop:8}}),l={0:"channel",1:"dm",2:"channel",3:"dm",5:"channel",6:"channel",10:"thread",11:"thread",12:"thread",13:"channel"};function H(n){let{channel:e}=n;const i=C(e.id).map(function(r){return z.getUser(r)});return React.createElement(I,{scrollable:!0},React.createElement(B,{contentContainerStyle:{paddingBottom:16}},React.createElement(w,{title:`Users typing in ${l[e.type]==="channel"?"#":""}${e.name}`}),i.length!==0?i.map(function(r){return React.createElement(A,{leading:React.createElement(N,{user:r,size:"normal",guildId:e.guild_id}),label:(l[e.type]==="dm"?U.getNickname(r.id):v.getNick(e.guild_id,r.id))??r.username,trailing:React.createElement(E,null),onPress:function(){return G({userId:r.id,channelId:e.id})}})}):React.createElement(_,{style:{paddingTop:32,justifyContent:"center",alignItems:"center"}},React.createElement(P,{source:S.getAssetIDByName(b.theme==="light"?"empty_channel_no_text_channels_light":"empty_channel_no_text_channels_dark"),style:{width:256,height:128,resizeMode:"contain"}}),React.createElement(T,{style:x.text},"Nobody is typing in this ",l[e.type]==="dm"?l[e.type].toUpperCase():l[e.type]," right now."))))}const{View:f,Text:$}=s.General,y=a.stylesheet.createThemedStyleSheet({container:{height:12,borderRadius:6,justifyContent:"center",alignItems:"center",flex:1,backgroundColor:o.semanticColors.BACKGROUND_TERTIARY},text:{paddingHorizontal:2,fontSize:8,fontFamily:a.constants.Fonts.PRIMARY_BOLD,color:o.semanticColors.INTERACTIVE_NORMAL}});function D(n){let{overflow:e,style:i}=n;return React.createElement(f,{style:i},React.createElement(f,{style:y.container},React.createElement($,{style:y.text},"+",e)))}const{Pressable:O}=s.General,{default:Y}=t.findByName("SummarizedIconRow",!1),{type:F}=t.findByProps("AvatarSizes").default,{useTypingUserIds:V}=t.findByProps("TYPING_WRAPPER_HEIGHT"),k=t.findByStoreName("UserStore"),p=t.findByProps("AVATAR_SIZE_MAP");let L=h.unfreeze(p.AVATAR_SIZE_MAP),W=h.unfreeze(p.styles);L.size12=12,W.size12={width:12,height:12,borderRadius:6};const R=a.stylesheet.createThemedStyleSheet({wrapper:{borderWidth:2,borderRadius:16,borderColor:o.semanticColors.BACKGROUND_SECONDARY,backgroundColor:o.semanticColors.BACKGROUND_SECONDARY}});function j(n){let{channel:e}=n;const i=V(e.id).map(function(c){return k.getUser(c)});function r(c){return React.createElement(F,{user:c,size:"size12",guildId:e.guild_id})}return React.createElement(O,{onPress:function(){return M(e)}},React.createElement(Y,{iconWrapperStyle:R.wrapper,items:i,max:5,offsetAmount:-8,overflowComponent:D,overflowStyle:R.wrapper,style:{height:16,paddingRight:2},renderItem:r}))}const K=t.findByProps("TYPING_WRAPPER_HEIGHT");let m;var Z={onLoad:function(){m=u.after("default",K,function(n,e){let[{channel:i}]=n;if(!e)return;const r=e.props?.children,c=u.after("type",r,function(q,X){a.React.useEffect(function(){return function(){c()}},[]),X.props.children[0].props.children.splice(0,1,a.React.createElement(j,{channel:i}))})})},onUnload:function(){m()}};return d.default=Z,Object.defineProperty(d,"__esModule",{value:!0}),d})({},vendetta.metro,vendetta.metro.common,vendetta.patcher,vendetta.ui,vendetta.ui.components,vendetta.utils,vendetta.ui.assets);