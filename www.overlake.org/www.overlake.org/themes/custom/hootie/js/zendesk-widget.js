window.zEmbed ||
    (function(e, t) {
        var n,
            o,
            d,
            s,
            i = [],
            a = document.createElement('iframe');
        (window.zEmbed = function() {
            i.push(arguments);
        }),
        (window.zE = window.zE || window.zEmbed),
        (a.src = 'javascript:false'),
        (a.title = ''),
        (a.role = 'presentation'),
        ((a.frameElement || a).style.cssText = 'display: none'),
        (d = (d = document.getElementsByTagName('script'))[
            d.length - 1
        ]).parentNode.insertBefore(a, d),
            (s = a.contentWindow.document);
        try {
            o = s;
        } catch (e) {
            (n = document.domain),
            (a.src =
                'javascript:var d=document.open();d.domain="' + n + '";void(0);'),
            (o = s);
        }
        (o.open()._l = function() {
            var e = this.createElement('script');
            n && (this.domain = n),
                (e.id = 'js-iframe-async'),
                (e.src = 'https://assets.zendesk.com/embeddable_framework/main.js'),
                (this.t = +new Date()),
                (this.zendeskHost = 'overlake.zendesk.com'),
                (this.zEQueue = i),
                this.body.appendChild(e);
        }),
        o.write('<body onload="document._l();">'),
            o.close();
    })();