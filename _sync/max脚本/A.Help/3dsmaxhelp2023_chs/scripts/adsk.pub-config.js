
     $.extend({
         config: {
             
             productFullName: "3ds Max 2023 帮助",
             defaultPage:  "./files/homepage.htm",
             locale: "zh__PINYIN",

             // Labels (captions).
             

 labels: {
     locateInContent: "在目录中显示",
     addToFavorites: "添加到收藏夹",
     home: "主页: 3ds Max 2023 帮助",
     print: "打印边框",

     tabs: {
         contents: '目录',
         index: '索引',
         favorites: '收藏夹',
         search: '搜索'
     },

     search: {
         searchOptions: '搜索选项',
         searchInHelpFor: '搜索帮助:',
         anyWord: '任意单词',
         allWords: '所有单词',
         phrase: '短语',
         searchInFilesFor: '在文件中搜索:',
         otherOptions: '其他选项',
         ignoreCase: '忽略大小写',
         exactWords: '全字匹配',
         highlightWords: '亮显词',

         warnings: {
             toManyOccurrences: '',
             refineSearch: '请优化查询或尝试其他搜索方法。',
             filteredStopwords: '已过滤以下非索引字 -',
             noResultsBegin: '您的搜索 —',
             noResultsEnd: '— 不匹配任何文档。建议:',
             correctSpelling: '确保所有单词都拼写正确。',
             differentKeywords: '尝试其他关键字。',
             generalKeywords: '尝试更常见的关键字。',
             searchOptions: '尝试其他搜索选项。'
         }
     },

     favorites: {
         noTopicsAdded: '没有向收藏夹添加任何主题。'
     }
 },


             // Default publication search options.
             searchOptions: { caseInsensitiveEnabled: true, caseSensitiveSwitch: true, wholeWordsEnabled: false, wholeWordsSwitch: false, searchMethod: 'or', highlightEnabled: true, searchInThisBook: true, searchStopWords: 'stop-words.js'},

             // Index options.
             indexOptions: {dataFile:"adsk.indexes-data.js"},

             // UI options.
             

 ui: {
     // Navigation pane tab settings.
     tabs: {
         order: [
             'C','I','S','F'
         ],
         tocEnabled: true,
         indexEnabled: true,
         favoritesEnabled: true,
         searchEnabled: true
     },

     responsive: false,

     // Toolbar button settings.
     tools: {
         order: ['home', 'previous', 'parent', 'following', 'separator',
                 'favorites', 'share', 'separator', 'print'],
         home: true,
         previous: true,
         parent: true,
         following: true,
         favorites: true,
         share: true,
         print: true
     }
 },

 features: {
     tabsbarParent: 'navigation',
     banner: true,
     header: true,
     navigation: true,
     splitter: true,
     breadcrums: true,
     splitter: true
 },


             // Array of book configs.
             books: [],

             // Context ids.
             contextIds: {},

             // Booklists.
             booklist: [{data:"3ds Max 帮助",children:[{href:"3dsmaxhelp"},]},{data:"3ds Max 帮助归档",children:[{href:"3dsmaxarchive"}]}]
         }
     });
 