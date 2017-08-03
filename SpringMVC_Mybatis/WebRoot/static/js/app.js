var App = (function () {

    var cfg = {
        version: "1.0.0",
        basePath: "",
        index_tabs: "#index-tabs"
    };

    return {
        cfg: cfg,
        init: function (_cfg) {
            this.cfg = $.extend(this.cfg, _cfg);
        },
        addTab: function (cfg) {
            if (cfg.title.length > 8) {
                cfg.title = cfg.title.substring(0, 6) + '...';
            }
            App.tab.add(cfg);
        },
        closeTab: function (title, top) {
            App.tab.close(title, top);
        },
        /**
         * 为某一个tab添加关闭监听
         * @param option {title:'', filter:function, top:false}
         */
        addCloseTabFilter: function (option) {
            App.tab.addCloseFilter(option);
        },
        removeTabFilter: function (title, top) {
            App.tab.removeFilter(title, top);
        }
    };
})();


App.tab = (function () {
    return {
    	filters: {},
        add: function (options) {
            if (typeof options.top == 'undefined' || options.top) {
                return window.parent.App.tab.addTab(options);
            } else {
                return App.tab.addTab(options);
            }
        },
        addTab: function (cfg) {
            var tabs = $(App.cfg.index_tabs);
            if (tabs.tabs('exists', cfg.title)) {
                tabs.tabs('select', cfg.title);
                var tab = tabs.tabs('getSelected');
                if (tab && tab.find('iframe').length > 0) {
                    var _refresh_iframe = tab.find('iframe')[0];
                    var url = cfg.src ? cfg.src : cfg.href;
                    var refresh_url = url ? url
                        : _refresh_iframe.src;
                    _refresh_iframe.contentWindow.location.href = refresh_url;
                }
            } else {
                var content;
                var scroll = false;
                var url = cfg.src ? cfg.src : cfg.href;
                if (url) {
                    content = '<iframe scrolling="' + (scroll ? 'yes' : 'no')
                    + '" frameborder="0"  src="' + url
                    + '" style="width:100%;height:100%;"></iframe>';
                    tabs.tabs('add', {
                        title: cfg.title,
                        id: cfg.id,
                        content: content,
                        iconCls: cfg.iconCls,
                        closable: true
                    });
                    // 解决IE8下面出现滚动条问题
                    $(tabs).tabs('getSelected').find("iframe").parent().css(
                        'overflow', "hidden");
                }
            }
        },
        close: function (title, top) {
            if (typeof top == 'undefined' || top) {
                return window.parent.App.tab.closeTab(title);
            } else {
                return App.tab.closeTab(title);
            }
        },
        closeTab: function (title) {
            var tabs = $("#frametab");
            tabs.tabs('close', title);
        },
        addCloseFilter: function (option) {
            if (typeof option.top == 'undefined' || option.top) {
                return window.top.App.tab.addCloseTabFilter(option);
            } else {
                return App.tab.addCloseTabFilter(option);
            }
        },
        addCloseTabFilter: function (option) {
            var tabs = $("#frametab");
            if (tabs.tabs('exists', option.title)) {
                App.tab.filters[option.title] = option.filter;
            }
        },
        removeFilter: function (title, top) {
            if (typeof top == 'undefined' || top) {
                return window.top.App.tab.removeFilter(title, false);
            } else {
                delete App.tab.filters[title];
            }
        },
        onBeforeClose: function (title, index) {
            var target = this;
            if (typeof App.tab.filters[title] == 'function') {
                var close = function () {
                    var opts = $(target).tabs('options');
                    var bc = opts.onBeforeClose;
                    opts.onBeforeClose = function () {
                    };  // allowed to close now
                    $(target).tabs('close', index);
                    opts.onBeforeClose = bc;
                    delete App.tab.filters[title];
                };
                App.tab.filters[title].apply(this, [close]);
                return false;
            } else {
                return true;
            }
        }

    };
})();