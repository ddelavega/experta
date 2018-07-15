"use strict"; var ThemeCharts = function () { var a = $('[data-toggle="chart"]'), t = { base: "Source Sans" }, e = { gray: { 100: "#95AAC9", 300: "#E3EBF6", 600: "#95AAC9", 700: "#6E84A3", 900: "#283E59" }, primary: { 100: "#D2DDEC", 300: "#A6C5F7", 700: "#2C7BE5" }, black: "#12263F", white: "#FFFFFF", transparent: "transparent" }, r = { defaults: { global: { responsive: !0, maintainAspectRatio: !1, defaultColor: e.primary[600], defaultFontColor: e.gray[600], defaultFontFamily: t.base, defaultFontSize: 13, layout: { padding: 0 }, legend: { display: !1, position: "bottom", labels: { usePointStyle: !0, padding: 16 } }, elements: { point: { radius: 0, backgroundColor: e.primary[700] }, line: { tension: .4, borderWidth: 3, borderColor: e.primary[700], backgroundColor: e.transparent, borderCapStyle: "rounded" }, rectangle: { backgroundColor: e.primary[700] }, arc: { borderWidth: 4, backgroundColor: e.primary[700] } }, tooltips: { enabled: !1, mode: "index", intersect: !1, custom: function (o) { var a = $("#chart-tooltip"); if (a.length || (a = $('<div id="chart-tooltip" class="popover bs-popover-top" role="tooltip"></div>'), $("body").append(a)), 0 !== o.opacity) { if (o.body) { var t = o.title || [], n = o.body.map(function (a) { return a.lines }), s = ""; s += '<div class="arrow"></div>', t.forEach(function (a) { s += '<h3 class="popover-header text-center">' + a + "</h3>" }), n.forEach(function (a, t) { var e = '<span class="popover-body-indicator" style="' + ("background-color: " + o.labelColors[t].backgroundColor) + '"></span>', r = 1 < n.length ? "justify-content-left" : "justify-content-center"; s += '<div class="popover-body d-flex align-items-center ' + r + '">' + e + a + "</div>" }), a.html(s) } var e = $(this._chart.canvas), r = (e.outerWidth(), e.outerHeight(), e.offset().top), l = e.offset().left, i = a.outerWidth(), d = a.outerHeight(), c = r + o.caretY - d - 16, p = l + o.caretX - i / 2; a.css({ top: c + "px", left: p + "px", display: "block" }) } else a.css("display", "none") }, callbacks: { label: function (a, t) { var e = t.datasets[a.datasetIndex].label || "", r = a.yLabel, o = ""; return 1 < t.datasets.length && (o += '<span class="popover-body-label mr-auto">' + e + "</span>"), o += '<span class="popover-body-value">$' + r + "k</span>" } } } }, doughnut: { cutoutPercentage: 83, tooltips: { callbacks: { title: function (a, t) { return t.labels[a[0].index] }, label: function (a, t) { var e = ""; return e += '<span class="popover-body-value">' + t.datasets[0].data[a.index] + "%</span>" } } }, legendCallback: function (a) { var r = a.data, o = ""; return r.labels.forEach(function (a, t) { var e = r.datasets[0].backgroundColor[t]; o += '<span class="chart-legend-item">', o += '<i class="chart-legend-indicator" style="background-color: ' + e + '"></i>', o += a, o += "</span>" }), o } } } }; function o(a, t) { for (var e in t) "object" != typeof t[e] ? a[e] = t[e] : o(a[e], t[e]) } function n(a) { var t = a.data("add"), e = $(a.data("target")).data("chart"); a.is(":checked") ? function a(t, e) { for (var r in e) Array.isArray(e[r]) ? e[r].forEach(function (a) { t[r].push(a) }) : a(t[r], e[r]) }(e, t) : function a(t, e) { for (var r in e) Array.isArray(e[r]) ? e[r].forEach(function (a) { t[r].pop() }) : a(t[r], e[r]) }(e, t), e.update() } function s(a) { var t = a.data("update"), e = $(a.data("target")).data("chart"); o(e, t), function (a, t) { if (void 0 !== a.data("prefix") || void 0 !== a.data("prefix")) { var n = a.data("prefix") ? a.data("prefix") : "", s = a.data("suffix") ? a.data("suffix") : ""; t.options.scales.yAxes[0].ticks.callback = function (a) { if (!(a % 10)) return n + a + s }, t.options.tooltips.callbacks.label = function (a, t) { var e = t.datasets[a.datasetIndex].label || "", r = a.yLabel, o = ""; return 1 < t.datasets.length && (o += '<span class="popover-body-label mr-auto">' + e + "</span>"), o += '<span class="popover-body-value">' + n + r + s + "</span>" } } }(a, e), e.update() } return Chart.scaleService.updateScaleDefaults("linear", { gridLines: { borderDash: [2], borderDashOffset: [2], color: e.gray[300], drawBorder: !1, drawTicks: !1, lineWidth: 0, zeroLineWidth: 0, zeroLineColor: e.gray[300], zeroLineBorderDash: [2], zeroLineBorderDashOffset: [2] }, ticks: { beginAtZero: !0, padding: 10, callback: function (a) { if (!(a % 10)) return "$" + a + "k" } } }), Chart.scaleService.updateScaleDefaults("category", { gridLines: { drawBorder: !1, drawOnChartArea: !1, drawTicks: !1 }, ticks: { padding: 20 }, maxBarThickness: 10 }), o(Chart, r), a.on({ change: function () { var a = $(this); a.is("[data-add]") && n(a) }, click: function () { var a = $(this); a.is("[data-update]") && s(a) } }), { fonts: t, colors: e, options: r } }(), TP1 = function () { var a, t, e, r, o, n = $("#devicesChart"); n.length && (r = n, o = new Chart(r, { type: "doughnut", data: { labels: ["Delivery", "Pending"], datasets: [{ data: [444, 10], backgroundColor: [ThemeCharts.colors.primary[700], ThemeCharts.colors.primary[300]], hoverBorderColor: ThemeCharts.colors.white }] } }), r.data("chart", o), t = (a = n).data("chart").generateLegend(), e = a.data("target"), $(e).html(t)) }(), TP2pe = function () { var a, t, e, r, o, n = $("#devicesChart2"); n.length && (r = n, o = new Chart(r, { type: "doughnut", data: { labels: ["Delivery", "Pending"], datasets: [{ data: [520, 70], backgroundColor: [ThemeCharts.colors.primary[700], ThemeCharts.colors.primary[300]], hoverBorderColor: ThemeCharts.colors.white }] } }), r.data("chart", o), t = (a = n).data("chart").generateLegend(), e = a.data("target"), $(e).html(t)) }(), TP2 = function () { var a, t, e, r, o, n = $("#devicesChart3"); n.length && (r = n, o = new Chart(r, { type: "doughnut", data: { labels: ["Delivery", "Pending"], datasets: [{ data: [590, 54], backgroundColor: [ThemeCharts.colors.primary[700], ThemeCharts.colors.primary[300]], hoverBorderColor: ThemeCharts.colors.white }] } }), r.data("chart", o), t = (a = n).data("chart").generateLegend(), e = a.data("target"), $(e).html(t)) }(), TP2re = function () { var a, t, e, r, o, n = $("#devicesChart4"); n.length && (r = n, o = new Chart(r, { type: "doughnut", data: { labels: ["Delivery", "Pending"], datasets: [{ data: [384, 79], backgroundColor: [ThemeCharts.colors.primary[700], ThemeCharts.colors.primary[300]], hoverBorderColor: ThemeCharts.colors.white }] } }), r.data("chart", o), t = (a = n).data("chart").generateLegend(), e = a.data("target"), $(e).html(t)) }();