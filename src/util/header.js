const img =(path)=>`/img/${path}`

export const headerData={
    logo:{
        src:img('logo.svg'),
        alt:'TOCOBO',
        href:'/',
    },
    menus:[
        {
            id:'hero',
            label:'hero',
            href:'#hero',
            type:'section',
        },
        {
            id:'follow',
            label:'follow',
            href:'#follow',
            type:'section',
        },
        {
            id:'collection',
            label:'collection',
            href:'#collection',
            type:'section',
        },
        {
            id:'skincare',
            label:'skincare',
            href:'#skincare',
            type:'section',
        },
        {
            id:'instargram',
            label:'instargram',
            href:'#instargram',
            type:'section',
        },
    ],
    utils: [
        { id: "search", label: "검색", icon: img("icon_search.svg"), href: "#" },
        { id: "account", label: "마이", icon: img("icon_myp.svg"), href: "#" },
        { id: "cart", label: "장바", icon: img("icon_cart.svg"), href: "#" },
    ],
    // 상단 공지/배너 (TopBanner용)
    topBanner: {
        enabled: true,
        height: 64,                   // px
        items: [
            { id: "tb-1", text: "새로운 소식이 있습니다.", href: "#" },
            { id: "tb-2", text: "업데이트 안내", href: "#" },
            { id: "tb-3", text: "이벤트 진행 중!", href: "#" },
        ],
        closeIcon: img("icon_pop_close_b.png"),
        background: "#DC272D",
        color: "#fff",
    },
}