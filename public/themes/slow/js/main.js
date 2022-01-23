$(document).foundation();


$(document).ready(function() {


    //  filter

    function containsAny(source,target) {
        var result = source.filter(function(item){ return target.indexOf(item) > -1});   
        return (result.length > 0);  
    }

    function applyResourceFilters() {
        $('.job-item').each(function(){
            var arrLocation = [],
                arrDepartment = [];

            var getLocation = $(this).attr('data-location'), 
                getDepartment = $(this).attr('data-department');     
                
                
            arrLocation = getLocation.split(' ');
            arrDepartment = getDepartment.split(' ');
                
            if ( resLocation && resLocation.length > 0) {
                var resLocationCheck = containsAny(resLocation,arrLocation);
            } else {
                resLocationCheck = true;
            }

            if ( resDepartment && resDepartment.length > 0) {
                var resDepartmentCheck = containsAny(resDepartment,arrDepartment);
            } else {
                resDepartmentCheck = true;
            }
               
            if( resLocationCheck && resDepartmentCheck ) {
                $(this).addClass('filtered-item');
            } else {
                $(this).removeClass('filtered-item');
            }                    
        });
        // $('.job-item').hide(); 
        
        // $('.job-item.filtered-resource:lt(100)').show();         
    }
    var resLocation = [],
        resDepartment =[];

        

    $('.jobs-filter-list-location input[type="checkbox"]').on('change', function() {
        var checked = $(this).val();
        if ($(this).is(':checked')) {
            resLocation.push(checked);
        } else {
            resLocation.splice($.inArray(checked, resLocation),1);
        }

        if ($('.jobs-filter-list-location input:checked').length > 0) {
            $('.all-location').removeClass('active')
        } else {
            $('.all-location').addClass('active')
        }

        applyResourceFilters();
    });
    $('.jobs-filter-list-department input[type="checkbox"]').on('change', function() {
        var checked = $(this).val();
        if ($(this).is(':checked')) {
            resDepartment.push(checked);
        } else {
            resDepartment.splice($.inArray(checked, resDepartment),1);
        }
        if ($('.jobs-filter-list-department input:checked').length > 0) {
            $('.all-department').removeClass('active')
        } else {
            $('.all-department').addClass('active')
        }
        applyResourceFilters();
    });

    $('.all-department').on('click', function() {
        if ($(this).hasClass('active')) {

        } else {
            $('.jobs-filter-list-department input').prop('checked', false)
            $(this).addClass('active')
            resDepartment = [];
            applyResourceFilters();
        }
    })
    $('.all-location').on('click', function() {
        if ($(this).hasClass('active')) {

        } else {
            $('.jobs-filter-list-location input').prop('checked', false)
            $(this).addClass('active')
            resLocation = [];
            applyResourceFilters();
        }
    })

    // filter ends 





    $('.job-item-click').on('click', function() {
        $(this).parent().toggleClass('active')
        $(this).parent().find('.job-item-details-hold').slideToggle()

        $('.jobs-body').addClass('active')
        $('body').addClass('jobs-active')
        setTimeout(function(){
            if ($('.job-item').hasClass('active') ) {
            } else {
                $('.jobs-body').removeClass('active')
                $('body').removeClass('jobs-active')
            }
        }, 100);

        if ($(this).parent().hasClass('opac')) {
            console.log('has opac')
            $(this).parent().removeClass('opac')
        } else {
            $(this).parent().addClass('opac')
        }
    })

    $('.jobs-filter ul li').on('click', function() {
        filt = $(this).attr('data-job')
        if ($(this).hasClass('active')) {
            $(this).removeClass('active')
            $('.jobs-filter-list[data-job="'+filt+'"]').slideUp()
        } else {
            $('.jobs-filter ul li').removeClass('active')
            $(this).addClass('active')
            $('.jobs-filter-list').slideUp()
            $('.jobs-filter-list[data-job="'+filt+'"]').slideDown()
        }
    })

    $('a[href^="mailto:"]').attr('target', '_blank')

    setTimeout(function(){
        $('.home .join-reveal-trigger').click();
    }, 30000);

    $('.blurry-load').each(function() {
        $(this).before('<span class="blur-effect"></span>');
    })

    if ($('.post-type-archive').length > 0) {
        $(document).scrollTop(0);
    }
    if ($('.single-place-cta-top').length > 0) {
        $('.single-place-cta-top').addClass('height')
    }

    if ($('.white-edition').is(':last-child')) {
        $('.single-story-back-wrapper').addClass('white')
    }

    setTimeout(function(){
        $('.pilgrimage-single-intro-title').removeClass('close')
        $('.pilgrimage-single-intro-text').removeClass('close')
        $('.calendar-intro-wrapper').addClass('close')
        $('.calendar-filter-wrapper').addClass('close')
        $('.projects-intro-wrapper').addClass('close')
        $('.intro-text-wrapper').addClass('close')
    }, 500);

    setTimeout(function(){
        $('.animation-overlay-dark').addClass('close')
    }, 300);

    setTimeout(function(){
        $('.pilgrimage-intro-content').addClass('close')
        $('.pilgrimage-intro-wrapper').addClass('close')
    }, 2000);
    
    setTimeout(function(){
        $('.encyklopedia-bg-overlay').addClass('close')
    }, 1000);
    
    setTimeout(function(){
        $('.journal-intro-wrapper').addClass('close')
        $('.calendar-items-wrapper').addClass('close')
        $('.calendar-archive-wrapper').addClass('close')
        $('.projects-content-wrapper').addClass('close')
        $('.prologue-page-content-new-wrapper').addClass('close')
    }, 1500);
    setTimeout(function(){
        $('.journal-intro-item').addClass('close')
    }, 1800);

    setTimeout(function(){
        $('.journal-intro-text').addClass('close')
    }, 2500);
    setTimeout(function(){
        $('.scroll-down-mouse').addClass('close')
    }, 3500);

    setTimeout(function(){
        $('.journal-introduction-wrapper').addClass('close')
    }, 2200);

    setTimeout(function(){
        $('.journal-featured-wrapper').addClass('close')
    }, 3400);

    setTimeout(function(){
        $('.people-archive-right > span').addClass('close')
    }, 1300);
    setTimeout(function(){
        $('.people-archive-intro').addClass('close')
    }, 1600);
    setTimeout(function(){
        $('.people-archive-list').addClass('close')
    }, 1900);

    
    // window.onbeforeunload = function () {
    //     window.scrollTo(0,0);
    // };
    
        // window.scrollTo(0,0);

    // document.onkeydown = fkey;
    // document.onkeypress = fkey;
    // document.onkeyup = fkey;

    // var wasPressed = false;

    // function fkey(e){
    //         e = e || window.event;
    //     if( wasPressed ) return; 

    //         if (e.keyCode == 116) {
    //             window.onbeforeunload = function () {
    //                 window.scrollTo(0,0);
    //             };
    //         }else {
                
    //         }
    // }

    Splitting();

    function scroll(){

        ! function () {
            var allowedBrowsers=["Mobile","Edge","Chrome","Safari","Firefox"];
            var s, i, c, a, o = {
                    frameRate: 200,
                    animationTime: 500,
                    stepSize: 60,
                    pulseAlgorithm: 1,
                    pulseScale: 4, 
                    pulseNormalize: 1,
                    accelerationDelta: 50,
                    accelerationMax: 3,
                    keyboardSupport: 1,
                    arrowScroll: 50,
                    fixedBackground: 1,
                    excluded: ""
                },
                p = o,
                d = !1,
                u = !1,
                r = {
                    x: 0,
                    y: 0
                },
                f = !1,
                m = document.documentElement,
                l = [],
                w = /^Mac/.test(navigator.platform),
                h = {
                    left: 37,
                    up: 38,
                    right: 39,
                    down: 40,
                    spacebar: 32,
                    pageup: 33,
                    pagedown: 34,
                    end: 35,
                    home: 36
                },
                v = {
                    37: 1,
                    38: 1,
                    39: 1,
                    40: 1
                };
        
            function y() {
                if (!f && document.body) {
                    f = !0;
                    var e = document.body,
                        t = document.documentElement,
                        o = window.innerHeight,
                        r = e.scrollHeight;
                    if (m = 0 <= document.compatMode.indexOf("CSS") ? t : e, s = e, p.keyboardSupport && Y("keydown", S), top != self) u = !0;
                    else if (Z && o < r && (e.offsetHeight <= o || t.offsetHeight <= o)) {
                        var n, a = document.createElement("div");
                        a.style.cssText = "position:absolute; z-index:-10000; top:0; left:0; right:0; height:" + m.scrollHeight + "px", document.body.appendChild(a), c = function () {
                            n = n || setTimeout(function () {
                                d || (a.style.height = "0", a.style.height = m.scrollHeight + "px", n = null)
                            }, 500)
                        }, setTimeout(c, 10), Y("resize", c);
                        if ((i = new R(c)).observe(e, {
                                attributes: !0,
                                childList: !0,
                                characterData: !1
                            }), m.offsetHeight <= o) {
                            var l = document.createElement("div");
                            l.style.clear = "both", e.appendChild(l)
                        }
                    }
                    p.fixedBackground || d || (e.style.backgroundAttachment = "scroll", t.style.backgroundAttachment = "scroll")
                }
            }
            var b = [],
                g = !1,
                n = Date.now();
        
            function x(u, f, m) {
                if (function (e, t) {
                        e = 0 < e ? 1 : -1, t = 0 < t ? 1 : -1, r.x === e && r.y === t || (r.x = e, r.y = t, b = [], n = 0)
                    }(f, m), 1 != p.accelerationMax) {
                    var e = Date.now() - n;
                    if (e < p.accelerationDelta) {
                        var t = (1 + 50 / e) / 2;
                        1 < t && (t = Math.min(t, p.accelerationMax), f *= t, m *= t)
                    }
                    n = Date.now()
                }
                if (b.push({
                        x: f,
                        y: m,
                        lastX: f < 0 ? .99 : -.99,
                        lastY: m < 0 ? .99 : -.99,
                        start: Date.now()
                    }), !g) {
                    var o = q(),
                        w = u === o || u === document.body;
                    null == u.$scrollBehavior && function (e) {
                        var t = D(e);
                        if (null == T[t]) {
                            var o = getComputedStyle(e, "")["scroll-behavior"];
                            T[t] = "smooth" == o
                        }
                        return T[t]
                    }(u) && (u.$scrollBehavior = u.style.scrollBehavior, u.style.scrollBehavior = "auto");
                    var h = function (e) {
                        for (var t = Date.now(), o = 0, r = 0, n = 0; n < b.length; n++) {
                            var a = b[n],
                                l = t - a.start,
                                i = l >= p.animationTime,
                                c = i ? 1 : l / p.animationTime;
                            p.pulseAlgorithm && (c = I(c));
                            var s = a.x * c - a.lastX >> 0,
                                d = a.y * c - a.lastY >> 0;
                            o += s, r += d, a.lastX += s, a.lastY += d, i && (b.splice(n, 1), n--)
                        }
                        w ? window.scrollBy(o, r) : (o && (u.scrollLeft += o), r && (u.scrollTop += r)), f || m || (b = []), b.length ? j(h, u, 1e3 / p.frameRate + 1) : (g = !1, null != u.$scrollBehavior && (u.style.scrollBehavior = u.$scrollBehavior, u.$scrollBehavior = null))
                    };
                    j(h, u, 0), g = !0
                }
            }
        
            function e(e) {
                f || y();
                var t = e.target;
                if (e.defaultPrevented || e.ctrlKey) return !0;
                if (N(s, "embed") || N(t, "embed") && /\.pdf/i.test(t.src) || N(s, "object") || t.shadowRoot) return !0;
                var o = -e.wheelDeltaX || e.deltaX || 0,
                    r = -e.wheelDeltaY || e.deltaY || 0;
                w && (e.wheelDeltaX && K(e.wheelDeltaX, 120) && (o = e.wheelDeltaX / Math.abs(e.wheelDeltaX) * -120), e.wheelDeltaY && K(e.wheelDeltaY, 120) && (r = e.wheelDeltaY / Math.abs(e.wheelDeltaY) * -120)), o || r || (r = -e.wheelDelta || 0), 1 === e.deltaMode && (o *= 40, r *= 40);
                var n = H(t);
                return n ? !! function (e) {
                    if (!e) return;
                    l.length || (l = [e, e, e]);
                    e = Math.abs(e), l.push(e), l.shift(), clearTimeout(a), a = setTimeout(function () {
                        try {
                            localStorage.SS_deltaBuffer = l.join(",")
                        } catch (e) {}
                    }, 1e3);
                    var t = 120 < e && P(e),
                        o = !P(120) && !P(100) && !t;
                    return e < 50 || o
                }(r) || (1.2 < Math.abs(o) && (o *= p.stepSize / 120), 1.2 < Math.abs(r) && (r *= p.stepSize / 120), x(n, o, r), e.preventDefault(), void O()) : !u || !_ || (Object.defineProperty(e, "target", {
                    value: window.frameElement
                }), parent.wheel(e))
            }
        
            function S(e) {
                var t = e.target,
                    o = e.ctrlKey || e.altKey || e.metaKey || e.shiftKey && e.keyCode !== h.spacebar;
                document.body.contains(s) || (s = document.activeElement);
                var r = /^(button|submit|radio|checkbox|file|color|image)$/i;
                if (e.defaultPrevented || /^(textarea|select|embed|object)$/i.test(t.nodeName) || N(t, "input") && !r.test(t.type) || N(s, "video") || function (e) {
                        var t = e.target,
                            o = !1;
                        if (-1 != document.URL.indexOf("www.youtube.com/watch"))
                            do {
                                if (o = t.classList && t.classList.contains("html5-video-controls")) break
                            } while (t = t.parentNode);
                        return o
                    }(e) || t.isContentEditable || o) return !0;
                if ((N(t, "button") || N(t, "input") && r.test(t.type)) && e.keyCode === h.spacebar) return !0;
                if (N(t, "input") && "radio" == t.type && v[e.keyCode]) return !0;
                var n = 0,
                    a = 0,
                    l = H(s);
                if (!l) return !u || !_ || parent.keydown(e);
                var i = l.clientHeight;
                switch (l == document.body && (i = window.innerHeight), e.keyCode) {
                    case h.up:
                        a = -p.arrowScroll;
                        break;
                    case h.down:
                        a = p.arrowScroll;
                        break;
                    case h.spacebar:
                        a = -(e.shiftKey ? 1 : -1) * i * .9;
                        break;
                    case h.pageup:
                        a = .9 * -i;
                        break;
                    case h.pagedown:
                        a = .9 * i;
                        break;
                    case h.home:
                        l == document.body && document.scrollingElement && (l = document.scrollingElement), a = -l.scrollTop;
                        break;
                    case h.end:
                        var c = l.scrollHeight - l.scrollTop - i;
                        a = 0 < c ? 10 + c : 0;
                        break;
                    case h.left:
                        n = -p.arrowScroll;
                        break;
                    case h.right:
                        n = p.arrowScroll;
                        break;
                    default:
                        return !0
                }
                x(l, n, a), e.preventDefault(), O()
            }
        
            function t(e) {
                s = e.target
            }
            var k, B, D = (k = 0, function (e) {
                    return e.uniqueID || (e.uniqueID = k++)
                }),
                E = {},
                M = {},
                T = {};
        
            function O() {
                clearTimeout(B), B = setInterval(function () {
                    E = M = T = {}
                }, 1e3)
            }
        
            function C(e, t, o) {
                for (var r = o ? E : M, n = e.length; n--;) r[D(e[n])] = t;
                return t
            }
        
            function H(e) {
                var t = [],
                    o = document.body,
                    r = m.scrollHeight;
                do {
                    var n = (!1 ? E : M)[D(e)];
                    if (n) return C(t, n);
                    if (t.push(e), r === e.scrollHeight) {
                        var a = L(m) && L(o) || X(m);
                        if (u && z(m) || !u && a) return C(t, q())
                    } else if (z(e) && X(e)) return C(t, e)
                } while (e = e.parentElement)
            }
        
            function z(e) {
                return e.clientHeight + 10 < e.scrollHeight
            }
        
            function L(e) {
                return "hidden" !== getComputedStyle(e, "").getPropertyValue("overflow-y")
            }
        
            function X(e) {
                var t = getComputedStyle(e, "").getPropertyValue("overflow-y");
                return "scroll" === t || "auto" === t
            }
        
            function Y(e, t, o) {
                window.addEventListener(e, t, o || !1)
            }
        
            function A(e, t, o) {
                window.removeEventListener(e, t, o || !1)
            }
        
            function N(e, t) {
                return e && (e.nodeName || "").toLowerCase() === t.toLowerCase()
            }
            if (window.localStorage && localStorage.SS_deltaBuffer) try {
                l = localStorage.SS_deltaBuffer.split(",")
            } catch (e) {}
        
            function K(e, t) {
                return Math.floor(e / t) == e / t
            }
        
            function P(e) {
                return K(l[0], e) && K(l[1], e) && K(l[2], e)
            }
            var $, j = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (e, t, o) {
                    window.setTimeout(e, o || 1e3 / 60)
                },
                R = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
                q = ($ = document.scrollingElement, function () {
                    if (!$) {
                        var e = document.createElement("div");
                        e.style.cssText = "height:10000px;width:1px;", document.body.appendChild(e);
                        var t = document.body.scrollTop;
                        document.documentElement.scrollTop, window.scrollBy(0, 3), $ = document.body.scrollTop != t ? document.body : document.documentElement, window.scrollBy(0, -3), document.body.removeChild(e)
                    }
                    return $
                });
        
            function F(e) {
                var t;
                return ((e *= p.pulseScale) < 1 ? e - (1 - Math.exp(-e)) : (e -= 1, (t = Math.exp(-1)) + (1 - Math.exp(-e)) * (1 - t))) * p.pulseNormalize
            }
        
            function I(e) {
                return 1 <= e ? 1 : e <= 0 ? 0 : (1 == p.pulseNormalize && (p.pulseNormalize /= F(1)), F(e))
            }
            var V = window.navigator.userAgent,
                W = /Edge/.test(V),
                _ = /chrome/i.test(V) && !W,
                U = /safari/i.test(V) && !W,
                G = /firefox/i.test(V),
                J = /mobile/i.test(V),
                Q = /Windows NT 6.1/i.test(V) && /rv:11/i.test(V),
                Z = U && (/Version\/8/i.test(V) || /Version\/9/i.test(V)),
                ee = function () {
                    if (J) return ~allowedBrowsers.indexOf("Mobile");
                    return W ? ~allowedBrowsers.indexOf("Edge") : _ ? ~allowedBrowsers.indexOf("Chrome") : U ? ~allowedBrowsers.indexOf("Safari") : G ? ~allowedBrowsers.indexOf("Firefox") : Q ? ~allowedBrowsers.indexOf("IEWin7") : ~allowedBrowsers.indexOf("other")
                }();
            var te = !1;
            try {
                window.addEventListener("test", null, Object.defineProperty({}, "passive", {
                    get: function () {
                        te = !0
                    }
                }))
            } catch (e) {}
            var oe = !!te && {
                    passive: !1
                },
                re = "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";
        
            function ne(e) {
                for (var t in e) o.hasOwnProperty(t) && (p[t] = e[t])
            }
            re && ee && (Y(re, e, oe), Y("mousedown", t), Y("load", y)), ne.destroy = function () {
                i && i.disconnect(), A(re, e), A("mousedown", t), A("keydown", S), A("resize", c), A("load", y)
            }, window.SmoothScrollOptions && ne(window.SmoothScrollOptions), "function" == typeof define && define.amd ? define(function () {
                return ne
            }) : "object" == typeof exports ? module.exports = ne : window.SmoothScroll = ne
        }();
    }

    var keys = {37: 1, 38: 1, 39: 1, 40: 1};

    function preventDefault(e) {
    e.preventDefault();
    }

    function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
    }

    // modern Chrome requires { passive: false } when adding event
    var supportsPassive = false;
    try {
    window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
        get: function () { supportsPassive = true; } 
    }));
    } catch(e) {}

    var wheelOpt = supportsPassive ? { passive: false } : false;
    var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

    function disableScroll() {
        window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
        window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
        window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
        window.addEventListener('keydown', preventDefaultForScrollKeys, false);
    }
    
        // call this to Enable
    function enableScroll() {
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
        window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
        window.removeEventListener('touchmove', preventDefault, wheelOpt);
        window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
    }

    
    var $window = $(window);

    $window.scroll(function () {
        vHeight = $(window).height();
        scrollTop = $(this).scrollTop()
        st = $window.scrollTop();
        stHomeIntro = st / 3
        $('.intro-home-carousel-item').css('transform', 'translateY('+stHomeIntro+'px)')
        $('.intro-home-carousel-item-title').css('transform', 'translateY(-'+stHomeIntro+'px)')
        $('.single-place-intro-image img, single-place-intro-image video').css('transform', 'translateY('+stHomeIntro+'px)')
        if (st > 1) {
            $('header').stop().addClass('scrolled')
        } else {
            $('header').stop().removeClass('scrolled')
        }

        if (st > 400) {
            $('header').stop().addClass('scrolled-home')
        } else {
            $('header').stop().removeClass('scrolled-home')
        }

    });

    $(window).on('scroll', function () {
        parallaxingImage = $(".place-full-width-it-image")
        $.each(parallaxingImage, function() {
            var element = $(this);
            var elementH = $(this).height();
            var elementTop = element.offset().top - (vHeight / 2) + elementH / 2;
            cof = (scrollTop - elementTop) 
            element.find('.full-width-it-image-hold').css('transform','scale(1.1) translateY('+cof+'px');
        });
    });



    if ($(".post-type-archive-place").length > 0){

        palcesItems = $('.content-places ul li').length
        widthItem = $('.content-places ul li').outerWidth();
        widthVisible = $('.content-places').outerWidth();
        vHeight = $(window).height();
        palcesW = (palcesItems + 1) * widthItem - widthVisible + vHeight + 100
        $(".post-type-archive-place .main-wrapper").css('min-height', palcesW)
        $window.scroll(function () {
            docHeight = $('.main-wrapper').height();
            st = $window.scrollTop();

            $('.content-places').css('transform', 'translateX(-'+st+'px)')

            if (st > docHeight - vHeight - widthItem * 0.5) {
                $('.content-places-last-item').addClass('close')
            } else {
                $('.content-places-last-item').removeClass('close')
            }

            heroPlacesH = $('.places-wrapper-mob-hero-img-hold').outerHeight()

            cofScroll = (st / heroPlacesH) / 2.5
            cofOpacity = (st / heroPlacesH) / 2
            cofHero = 1.4 - cofScroll
            cofHeroOpacity = 1 - cofOpacity

            st2 = st * 0.7

            $('.places-wrapper-mob-hero-img-hold').css('transform', 'translateY('+st2+'px)')
            $('.places-wrapper-mob-hero-img').css({'transform': 'scale('+cofHero+')',
                                                    'opacity': cofHeroOpacity
                                                    })

        });
    }

    if ($(".prologue-content-left-hold").length > 0){
        $window.scroll(function () {
            vHeight = $(window).height();
            st = $window.scrollTop();
            if ($(".prologue-content-left-hold").length > 0){
                prologueM = $(".prologue-content-left-hold").offset().top;
            }
            prologueChapter1Top = $(".chapter-1-trigger").offset().top - vHeight;
            if ($(".chapter-2-trigger").length > 0){
                prologueChapter2Top = $(".chapter-2-trigger").offset().top - vHeight;
            }
            if ($(".chapter-3-trigger").length > 0){
                prologueChapter3Top = $(".chapter-3-trigger").offset().top - vHeight;
            }
            if ($(".chapter-4-trigger").length > 0){
                prologueChapter4Top = $(".chapter-4-trigger").offset().top - vHeight;
            }

            if ($(".prologue-content-left-hold").length > 0){
                if (st > prologueM - 60) {
                    $(".prologue-content-left-hold").addClass('sticked')
                } else {
                    $(".prologue-content-left-hold").removeClass('sticked')
                }
            }


            
            if (st > prologueChapter1Top) {
                $(".prologue-page-right").addClass('fade-away')
                $(".prologue-chapter-wrapper-1").addClass('active')
                $(".prologue-content-left-top").addClass('chapter-reached')
                $(".prologue-content-left-bottom").addClass('chapter-reached')
                $(".prologue-chapter-wrapper-1 .chapter-scroll").addClass('chapter-scroll-top')
            } else {
                $(".prologue-page-right").removeClass('fade-away')
                $(".prologue-chapter-wrapper-1").removeClass('active')
                $(".prologue-content-left-top").removeClass('chapter-reached')
                $(".prologue-content-left-bottom").removeClass('chapter-reached')
                $(".prologue-chapter-wrapper-1 .chapter-scroll").removeClass('chapter-scroll-top')
            }

            if ($(".chapter-2-trigger").length > 0){
                if (st > prologueChapter2Top) {
                    $(".prologue-chapter-wrapper-1").addClass('fade-away')
                    $(".prologue-chapter-wrapper-2").addClass('active')
                    $(".prologue-content-left-bottom").addClass('chapter-2-reached')
                    $(".prologue-content-left-top").addClass('chapter-2-reached')
                    $(".prologue-chapter-wrapper-2 .chapter-scroll").addClass('chapter-scroll-top')
                } else {
                    $(".prologue-chapter-wrapper-1").removeClass('fade-away')
                    $(".prologue-chapter-wrapper-2").removeClass('active')
                    $(".prologue-content-left-bottom").removeClass('chapter-2-reached')
                    $(".prologue-content-left-top").removeClass('chapter-2-reached')
                    $(".prologue-chapter-wrapper-2 .chapter-scroll").removeClass('chapter-scroll-top')
                }
            }

            if ($(".chapter-3-trigger").length > 0){
                if (st > prologueChapter3Top) {
                    $(".prologue-chapter-wrapper-2").addClass('fade-away')
                    $(".prologue-chapter-wrapper-3").addClass('active')
                    $(".prologue-content-left-bottom").addClass('chapter-3-reached')
                    $(".prologue-content-left-top").addClass('chapter-3-reached')
                    $(".prologue-chapter-wrapper-3 .chapter-scroll").addClass('chapter-scroll-top')
                } else {
                    $(".prologue-chapter-wrapper-2").removeClass('fade-away')
                    $(".prologue-chapter-wrapper-3").removeClass('active')
                    $(".prologue-content-left-bottom").removeClass('chapter-3-reached')
                    $(".prologue-content-left-top").removeClass('chapter-3-reached')
                    $(".prologue-chapter-wrapper-3 .chapter-scroll").removeClass('chapter-scroll-top')
                }
            }
            if ($(".chapter-4-trigger").length > 0){
                if (st > prologueChapter4Top) {
                    $(".prologue-chapter-wrapper-3").addClass('fade-away')
                    $(".prologue-chapter-wrapper-4").addClass('active')
                    $(".prologue-content-left-bottom").addClass('chapter-4-reached')
                    $(".prologue-content-left-top").addClass('chapter-4-reached')
                    $(".prologue-chapter-wrapper-4 .chapter-scroll").addClass('chapter-scroll-top')
                } else {
                    $(".prologue-chapter-wrapper-3").removeClass('fade-away')
                    $(".prologue-chapter-wrapper-4").removeClass('active')
                    $(".prologue-content-left-bottom").removeClass('chapter-4-reached')
                    $(".prologue-content-left-top").removeClass('chapter-4-reached')
                    $(".prologue-chapter-wrapper-4 .chapter-scroll").removeClass('chapter-scroll-top')
                }
            }
            

        });
    }


    if ($(".home").length > 0){
        disableScroll()
        SmoothScroll.destroy();

        setTimeout(function(){
            $(".animation-overlay").addClass('close')
            $(".frontpage-logo").addClass('close')
        }, 1000);

        //
        setTimeout(function(){
            $(".frontpage-logo").animate({
                    height: '42px'
                }, {
                duration: 800,
                specialEasing: {
                    height: "swing"
                    }
                }
            )
        }, 2200);
        setTimeout(function(){
            $(".frontpage-overlay").addClass('slide-up')
            $(".frontpage-logo").addClass('resize')
        }, 3000);
        //

        setTimeout(function(){
            // $(".home header").addClass('home-vis')
            $(".frontpage-logo").addClass('remove')
            $(".frontpage-bg").addClass('close')
            $(".intro-home-animation").addClass('close')

        }, 4800);
        setTimeout(function(){
            $(".home header").addClass('home-vis')
        }, 5500);
        

        setTimeout(function(){
            $(".intro-home-content").addClass('close')
            enableScroll()
            scroll()
        }, 6000);
        setTimeout(function(){
            $(".intro-home").addClass('all-vis')
        }, 6000);
        setTimeout(function(){
            $(".intro-home").addClass('scroll-vis')
        }, 9000);
        // setTimeout(function(){
        //     $(".intro-home").addClass('item-height')
        // }, 1500);
        // setTimeout(function(){
        //     $(".intro-home").addClass('blurr-out')
        // }, 2000);
        // setTimeout(function(){
        //     $(".intro-home").addClass('intro-zoom-out')
        // }, 2500);
        // setTimeout(function(){
        //     $(".intro-home").addClass('text-in')
        // }, 3500);
        // setTimeout(function(){
        //     $(".intro-home").addClass('text-fade')
        // }, 4000);
        // setTimeout(function(){
        //     $(".intro-home").removeClass('intro-zoom-out')
        // }, 4500);
        // setTimeout(function(){
        //     $(".intro-home").removeClass('item-height')
        //     $("header").addClass('close')
        // }, 5200);
        // setTimeout(function(){
        //     $(".home").addClass('reg-bg')
        //     $(".intro-home").addClass('all-vis')
        //     enableScroll()
        //     scroll()
        // }, 6000);

    } else if ( ($(".post-type-archive-place").length > 0) && ($(window).innerWidth() >= 1024)) {
        disableScroll()
        SmoothScroll.destroy();
        setTimeout(function(){
            $(".animation-overlay").addClass('close')
        }, 1000);
        setTimeout(function(){
            $("header").addClass('close')
        }, 1000);
        setTimeout(function(){
            $(".content-places").addClass('close')
        }, 1500);
        setTimeout(function(){
            $(".content-places-hold").addClass('close')
        }, 3300);
        setTimeout(function(){
            $(".intro-places-right").addClass('close')
            $(".content-places-hold").addClass('hover-active')
        }, 4500);
        setTimeout(function(){
            palcesItems = $('.content-places ul li').length
            widthItem = $('.content-places ul li').outerWidth();
            widthVisible = $('.content-places').outerWidth();
            vHeight = $(window).height();
            palcesW = (palcesItems + 1) * widthItem - widthVisible + vHeight + 100
            $(".post-type-archive-place .main-wrapper").css('min-height', palcesW)
        }, 5200);
        setTimeout(function(){
            $(".content-places").addClass('titles')
        }, 5200);
        setTimeout(function(){
            enableScroll()
            scroll()
        }, 6000);        
    } else {
        setTimeout(function(){
            $("header").addClass('close')
        }, 1000);
        setTimeout(function(){
            $(".animation-overlay").addClass('close')
        }, 1000);
    }

    setTimeout(function(){
        $(".single-place-intro-image-zoom").addClass('close')
        $(".intro-encyklopedia-image-zoom").addClass('close')
    }, 1000);
    setTimeout(function(){
        $(".intro-encyklopedia-content").addClass('close')
        $(".intro-encyclopedia-text-mob").addClass('close')
    }, 2000);
    setTimeout(function(){
        $(".encyclopedia-sec-part-wrapper").addClass('close')
    }, 2500);
    setTimeout(function(){
        $(".anim-place-intro").addClass('close')
    }, 1500);

    // trigger click

    $(".calendar-item-content-hold h5 span").on('click', function () {
        if ($(this).hasClass('close')) {
            $(this).removeClass('close')
            $(this).closest('.calendar-item-content-hold').find('p:nth-child(n+2)').slideUp()
        } else {
            $(this).addClass('close')
            $(this).closest('.calendar-item-content-hold').find('p:nth-child(n+2)').slideDown()
        }
    });

    $(".object-fit span").on('click', function () {
        $(this).toggleClass('close')
        if ($(this).parent().find('video').hasClass('sound-on')) {
            $(this).parent().find('video').prop('muted', true); 
            $(this).parent().find('video').removeClass('sound-on')
        } else {
            $(this).parent().find('video').prop('muted', false); 
            $(this).parent().find('video').addClass('sound-on')
        }
    });

    $(".encyklopedia-archive-list ul li a").on('click',function (e) {
        e.preventDefault();
        url = $(this).attr('href')
        $('.encyklopedia-bg-overlay').removeClass('close')
        setTimeout(function(){
            window.location.href = url;
        }, 2000);
    });

    $(".pilgrimage-list-item a").on('click',function (ee) {
        ee.preventDefault();
        url = $(this).attr('href')
        $('.pilgrimage-content-wrapper').addClass('clicked')
        $(this).parent().addClass('clicked')
        setTimeout(function(){
            window.location.href = url;
        }, 1000);
    });



    $(".nav-toggle").click(function() {
        // currentPage = $('.nav').find('.current-menu-item').index();
        // neededPage = currentPage + 1;
        $('.nav-toggle').toggleClass('close')
        $('.nav-overlay').toggleClass('close')
        $('.nav-hold').toggleClass('close')
        // $('.nav-content').removeClass('active')
        // $('.nav-content-'+neededPage).addClass('active')
    });

    $(".nav-overlay").click(function() {
        $(".nav-overlay").removeClass('close')
        $('.nav-hold').removeClass('close')
        $('.nav-close').removeClass('close')
        $('.nav-open').addClass('close')
    });

    $(".nav ul li a").hover(function() {
        // navNr = $(this).parent().index()
        // navNrNeeded = navNr + 1
        
        navNr = $(this).attr('data-nav-link')
        $('.nav-content').removeClass('active')
        $('.nav-content-'+navNr).addClass('active')
    });
    
    $(".js-rooms-modal").click(function() {
        $('body').addClass('oh')
        $('.rooms-modal').addClass('close')
        $('.rooms-modal-overlay').addClass('close')
        $('.rooms-modal-close-hold').addClass('close')
    });
    $(".rooms-modal-overlay, .js-rooms-close").click(function() {
        $('body').removeClass('oh')
        $('.rooms-modal').removeClass('close')
        $('.rooms-modal-overlay').removeClass('close')
        $('.rooms-modal-close-hold').removeClass('close')
    });

    $(".encyklopedia-archive-list ul li a").hover(function() {
        $(".encyklopedia-archive-list").addClass('hover')
        encyNr = $(this).parent().attr('data-ency-image')
        $('.encyklopedia-archive-numbers ul li').removeClass('active')
        $(this).closest('.encyklopedia-archive-row').find('.encyklopedia-archive-numbers ul li[data-ency-number="'+encyNr+'"]').addClass('active')
        $(this).closest('.encyklopedia-archive-row').find('.encyklopedia-archive-right-item').removeClass('active')
        $(this).closest('.encyklopedia-archive-row').find('.encyklopedia-archive-right-item[data-ency-info="'+encyNr+'"]').addClass('active')
        $(this).closest('.encyklopedia-archive-row').find('.encyklopedia-archive-right-hold').addClass('active')
    });

    $(".encyklopedia-archive-list ul li a").mouseout(function() {
        $(".encyklopedia-archive-list").removeClass('hover')
        $('.encyklopedia-archive-numbers ul li').removeClass('active')
        $('.encyklopedia-archive-right-hold').removeClass('active')
        // $('.encyklopedia-archive-right-item:first-child').addClass('active')
    });

    $(".people-archive-item .max-width-600").mouseenter(function() {
        people = $(this).parent().attr('data-people')
        $('.people-archive-item-image').removeClass('active')
        $('.people-archive-item-image-placeholder').addClass('close')
        $('.people-archive-item-image[data-people-image='+people+']').addClass('active')
        $('.people-archive-list').addClass('active')
    });
    $(".people-archive-item .max-width-600").mouseleave(function() {
        // $('.people-archive-item-image').removeClass('active')
        $('.people-archive-list').removeClass('active')
    });
    $(".people-archive-item .max-width-600").click(function() {
        if ($(this).parent().hasClass('active')) {
            $(this).find('.people-archive-item-bio').slideUp()
            $(this).parent().removeClass('active')
            $(this).find('.item-less').hide()
            $(this).find('.item-more').show()
        } else {
            $(".people-archive-item").removeClass('active')
            $('.people-archive-item-bio').slideUp()
            $(this).parent().addClass('active')
            $(this).find('.people-archive-item-bio').slideDown()
            $('.item-more').show()
            $('.item-less').hide()
            $(this).find('.item-more').hide()
            $(this).find('.item-less').show()
        }
    });

    $(".encyklopedia-archive-list ul li a").mouseenter(function() {
        thisss = $(this) 
        thisss.addClass('in-action')
        thisss.find('.video-on').get(0).play()
        setTimeout(function(){
            thisss.removeClass('in-action')
        }, 1500);
    });

    $(".audio-button").click(function() {
        if ( $(this).hasClass('playing') ) {
            $(this).removeClass('playing') 
            $(this).find('audio').get(0).pause()
        } else {
            $(this).addClass('playing') 
            $(this).find('audio').get(0).play()
        }
    });

    $(".encyklopedia-archive-list ul li a").mouseleave(function() {
        thiss = $(this)
        if (thiss.hasClass('in-action')) {
            setTimeout(function(){
                thiss.find('.video-out').addClass('close')
                thiss.find('.video-out').get(0).play()
                setTimeout(function(){
                    thiss.find('.video-on').get(0).currentTime = 0;
                }, 500);
                setTimeout(function(){
                    thiss.find('.video-out').removeClass('close')
                }, 1500);
            }, 1500);
        } else {
            thiss.find('.video-out').addClass('close')
            thiss.find('.video-out').get(0).play()
            setTimeout(function(){
                thiss.find('.video-on').get(0).currentTime = 0;
            }, 500);
            setTimeout(function(){
                thiss.find('.video-out').removeClass('close')
            }, 1500);
        }
    });


    window.onscroll = function(ev) {
        if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight - 40) {
          $('.people-image-hold').addClass('position-change')
        } else {
            $('.people-image-hold').removeClass('position-change')
        }
    };


    if ($(".item-resized").length > 0){
        setTimeout(function(){
            topPosition = $(".content-places ul li:first-child a").offset().top
            $(".item-resized").css('top', topPosition)
            $(".places-overlay").addClass('close')
        }, 5000);
    }

    $(".map-module-hold svg path, .map-module-hold svg polygon").hover(function() {
        moduleMap = $(this).attr('id');
        $('.map-module-hover').removeClass('active')
        $('[data-svg='+moduleMap+']').addClass('active')
        $('.map-module-title').removeClass('active')
        $('.map-module-title[data-title='+moduleMap+']').addClass('active')
    });

    $(".map-module-hold svg path, .map-module-hold svg polygon").mouseleave(function() {
        $('.map-module-hover').removeClass('active')
        $('.map-module-title').removeClass('active')
    });

    $(".map-module-nav ul li").hover(function() {
        moduleTab = $(this).attr('data-module-tab');
        $('.map-module-hover').removeClass('active')
        $('[data-svg='+moduleTab+']').addClass('active')
        $('.map-module-title').removeClass('active')
        $('.map-module-title[data-title='+moduleTab+']').addClass('active')
    });

    $(".map-module-additional-tabs-list ul li").hover(function() {
        moduleTab2 = $(this).attr('data-tabv2');
        $('.map-module-hover').removeClass('active')
        $('[data-svg='+moduleTab2+']').addClass('active')
        $('.map-module-title').removeClass('active')
        $('.map-module-title[data-title='+moduleTab2+']').addClass('active')
    });
    
    $(".map-module-nav ul li, .map-module-additional-tabs-list ul li").mouseleave(function() {
        $('.map-module-hover').removeClass('active')
        $('.map-module-title').removeClass('active')
    });

    $(".map-module-hold svg path, .map-module-hold svg polygon").click(function() {

        var target = '#map-nav';
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 50
        }, 700, 'swing', function () {
        });
        moduleMapClicked = $(this).attr('id');
        $('.map-module-hover').removeClass('active')
        $('[data-svg='+moduleMapClicked+']').addClass('active')
        $('.map-module-nav ul li').removeClass('active')
        $('.map-module-nav ul li[data-module-tab='+moduleMapClicked+']').addClass('active')
        $('.map-module-content').removeClass('active')
        $('.map-module-content[data-module-content='+moduleMapClicked+']').addClass('active')

        $('.map-module-additional-tabs-list ul li').removeClass('active')
        $('.map-module-additional-tabs-list ul li[data-tabv2='+moduleMapClicked+']').addClass('active')
    });

    $(".map-module-nav ul li").click(function() {

        moduleTabClicked = $(this).attr('data-module-tab');
        dataLeft = $(this).attr('data-left');
        dataTop = $(this).attr('data-top');
        $('.map-module-placeholder').addClass('active')
        $('.map-module-placeholder').css('transform-origin', dataLeft+'%' +dataTop+'%' )

        $('.map-module-hover').removeClass('active')
        $('[data-svg='+moduleTabClicked+']').addClass('active')
        
        $('.map-module-nav ul li').removeClass('active')
        $(this).addClass('active')
        
        $('.map-module-content-wrapper').addClass('close')
        setTimeout(function(){
            $('.map-module-content').removeClass('active')
            $('.map-module-content[data-module-content='+moduleTabClicked+']').addClass('active')
        }, 400);
        setTimeout(function(){
            $('.map-module-content-wrapper').removeClass('close')
        }, 800);

        $('.map-module-additional-tabs-list ul li').removeClass('active')
        $('.map-module-additional-tabs-list ul li[data-tabv2='+moduleTabClicked+']').addClass('active')
    });

    $(".map-module-additional-tabs-list ul li").click(function() {

        moduleTab2Clicked = $(this).attr('data-tabv2');

        $('.map-module-hover').removeClass('active')
        $('[data-svg='+moduleTab2Clicked+']').addClass('active')
        
        $('.map-module-nav ul li').removeClass('active')
        $('.map-module-nav ul li[data-module-tab='+moduleTab2Clicked+']').removeClass('active')
        
        $('.map-module-content-wrapper').addClass('close')
        setTimeout(function(){
            $('.map-module-content').removeClass('active')
            $('.map-module-content[data-module-content='+moduleTab2Clicked+']').addClass('active')
        }, 400);
        setTimeout(function(){
            $('.map-module-content-wrapper').removeClass('close')
        }, 800);

        $('.map-module-additional-tabs-list ul li').removeClass('active')
        $('.map-module-additional-tabs-list ul li[data-tabv2='+moduleTab2Clicked+']').addClass('active')
    });

    $(document).on('click', function (e) {
        if ($(e.target).is(".map-module-nav ul li") === false) {
            $('.map-module-placeholder').removeClass('active')
        }
    });

    $('.single-story-intro-image-wrapper').addClass('close')
    setTimeout(function(){
        $('.single-story-intro-text, .single-story-intro').addClass('close')
    }, 1500);
    setTimeout(function(){
        $('.single-story-intro-image-wrapper').addClass('fadeout')
    }, 2000);

    $(".journal-intro-item a, .home-story-single-image a, .home-story-multiple ul li a, .journal-archive ul li a").click(function(es) {
        es.preventDefault();
        thiss = $(this)
        disableScroll()
        SmoothScroll.destroy();

        $('.journal-overlay').addClass('close')
        setTimeout(function(){
            leftPosition = thiss.find('.js-journal-item').offset().left
            topPosition = thiss.find('.js-journal-item').offset().top - $window.scrollTop();
            itemHeight = thiss.find('.js-journal-item').outerHeight();
            itemWidth = thiss.find('.js-journal-item').outerWidth();
            $(".journal-loading-item").css({'height': itemHeight,
                                            'width': itemWidth,
                                            'top': topPosition,
                                            'left': leftPosition,
                                })
                                console.log(topPosition)
        }, 100);
        setTimeout(function(){
            $('.journal-loading-item').addClass('close')
        }, 200);
        setTimeout(function(){
            $('.journal-loading-item').addClass('position')
        }, 1200);
        url = $(this).attr('href')
        setTimeout(function(){
            window.location = url;
        }, 2200);
    });
    
    
    
    
    
    $(".contact-trigger a").click(function(ec) {
        ec.preventDefault();
        $('.contact-module-footer').slideDown();
        $('.contact-module-overlay').addClass('close');
        setTimeout(function(){
            $("html, body").animate({ scrollTop: $(document).height() }, 1400);
        }, 100);
    });

    $(".contact-trigger-header a").click(function(eec) {
        eec.preventDefault();

        contactH = $('.contact-module-header').outerHeight()
        $('.contact-module-header').addClass('close')
        $('.contact-module-overlay').addClass('close');
        $('.nav-hold').css('transform', 'translateY(-'+contactH+'px)');
    });

    $(".contact-module-overlay").click(function(ec) {
        $('.contact-module-footer').slideUp(600);
        $('.contact-module-header').removeClass('close')
        $('.contact-module-overlay').removeClass('close');
        $('.nav-hold').css('transform', 'translateY(0)');
        setTimeout(function(){
            $('.nav-hold').attr('style', '');
        }, 800);
    });



    $(".place-link").click(function(e) {
        e.preventDefault();
    //     thiss = $(this)
    //     disableScroll()
    //     SmoothScroll.destroy();

    //     items = $('.content-places ul li').length;
    //     widthItem = $('.content-places ul li').outerWidth();
    //     placeElement = $(this).parent().index() + 1

    //     if (placeElement == 1) {
    //         $('.content-places-hold').addClass('first-clicked')
    //     } else if (placeElement == items) {
    //         $('.content-places-hold').addClass('last-clicked')
    //     } else {

    //     }
    //     wWidth = $(window).width();
    //     sti = widthItem * placeElement - (wWidth / 2) + (widthItem / 2) + 10 * placeElement + 17

    //     $("html, body").animate({ scrollTop: sti }, 600);
    //     $('.content-places-last-item').removeClass('close')
    //     $('.intro-places-right').removeClass('close')
    //     $('.intro-places-left').addClass('close')
    //     $(this).parent().addClass('clicked')
    //     $(this).closest('ul').addClass('clicked')

    //     // $(this).addClass('widen')
        url = $(this).attr('href')
        $(".animation-overlay").removeClass('close')
        setTimeout(function(){
            window.location = url;
        }, 800);

    //     setTimeout(function(){
    //         leftPosition = thiss.offset().left
    //         itemHeight = thiss.find('.content-places-image-hover-image').outerHeight();
    //         $(".item-resized").css('left', leftPosition)
    //         $(".item-resized-image").css('height', itemHeight)
    //     }, 900);
    //     setTimeout(function(){
    //         $(".item-resized-"+placeElement).addClass('close')
    //     }, 1000);
    //     setTimeout(function(){
    //         $(".content-places-hold").addClass('hide')            
    //     }, 1100);
    //     setTimeout(function(){
    //         $(".item-resized").addClass('resize')

    //     }, 1200);
    //     setTimeout(function(){
    //         window.location = url;
    //     }, 2500);
    });


    

    $(".pilgrimage-bottom-list ul li a").hover(function() {
        pID = $(this).parent().attr('data-pid')
        $('.section-p-last-top-image img').removeClass('active')
        $('.section-p-last-top-image img[data-pimage="'+pID+'"]').addClass('active')
    });
    $(".section-p-last-top-nav a").hover(function() {
        pID = $(this).attr('data-pid')
        $('.section-p-last-top-image img').removeClass('active')
        $('.section-p-last-top-image img[data-pimage="'+pID+'"]').addClass('active')
        $('.pilgrimage-bottom-list ul li').removeClass('active')
        $('.pilgrimage-bottom-list ul li[data-pid="'+pID+'"]').addClass('active')

    });
    $(".pilgrimage-bottom-list ul li a, .section-p-last-top-nav a").mouseout(function() {
        $('.section-p-last-top-image img').removeClass('active')
        $('.pilgrimage-bottom-list ul li').removeClass('active')
    });



    if ($(".section-p-trigger").length > 0){

        setTimeout(function(){
            pilLeft = $('.pilgrimage-single-intro-image img').offset().left
            pilTop = $('.pilgrimage-single-intro-image img').offset().top
            pilHeight = $('.pilgrimage-single-intro-image img').outerHeight();
            pilWidth = $('.pilgrimage-single-intro-image img').width();
            $('.fixed-p-image').css({left: pilLeft,
                                    top: pilTop,
                                    height: pilHeight,
                                    width: pilWidth,
            })
        }, 1000);

        $window.scroll(function () {
            vHeight = $(window).height();
            st = $window.scrollTop();

            pTrigger = $('.section-p-trigger').offset().top
            pTrigger2 = $('.section-after-intro').offset().top

            if (st < pTrigger) {
                $('.fixed-p-image').removeClass('resize')
                $('.fixed-p-title').removeClass('toggle')
                $('.pilgrimage-single-intro-text').removeClass('close')
                $('.pilgrimage-single-intro-title').removeClass('close')
            }
            
            if (($('.section-p-trigger').hasClass('active')) || ($('.section-after-intro:first-child').hasClass('active'))) {
                $('.fixed-p-title').addClass('toggle')
                $('.fixed-p-image').addClass('resize')
                $('.pilgrimage-single-intro-text').addClass('close')
                $('.pilgrimage-single-intro-title').addClass('close')
            } 

        });

    }

    // Entry table scroll wrap
    $( ".entry table" ).wrap( "<div class='table-scroll'></div>" );

    // #ScrollToTop

    // $("a[href='#top']").click(function() {
    //   $("html, body").animate({ scrollTop: 0 }, "slow");
    //   return false;
    // });

    


    // #href scroll //

    $('.single-place-nav ul li a[href^="#"], .single-place-subnav ul li a[href^="#"]').on('click',function (ev) {
        
        ev.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 120
        }, 700, 'swing', function () {
        });
    });

    $('.page-template-tp-prologue .prologue-chapters-list ul li a[href^="#"]').on('click',function (e) {
        
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 0, 'swing', function () {
        });
    });

    $('a.scroll-down[href^="#"], a.scroll-down-mouse[href^="#"]').on('click',function (evv) {
        
        evv.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 20
        }, 700, 'swing', function () {
        });
    });


    $('.owl-carousel.intro-home-carousel').owlCarousel({
        loop:false,
        margin:0,
        nav:false,
        smartSpeed: 1000,
        items:1
    })
    introDotsW = $('.intro-home-carousel .owl-dots').outerWidth()
    captionLeft = introDotsW + 32
    $('.intro-home-carousel-item-title').css('left', captionLeft)


    roadsCarousel = $('.owl-carousel.home-roads-carousel')
    roadsCarousel.owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        smartSpeed: 1000,
        items: 1.1,
        autoWidth: true
    })
    introDotsW = $('.home-roads-carousel .owl-dots').outerWidth()
    captionRoads = introDotsW + 12
    $('.home-roads-carousel-item-title').css('left', captionRoads)

    $('.roads-next').click(function() {
        roadsCarousel.trigger('next.owl.carousel');
    })


    peopleCarousel = $('.owl-carousel.home-people-carousel')
    peopleCarousel.owlCarousel({
        loop:false,
        margin:10,
        nav:true,
        smartSpeed: 1000,
        items: 1.1,
        autoWidth: true,
        dots: false
    })

    function peopleSliderClasses() {
        peopleCarousel.each(function() {
            var total = $(this).find('.owl-item.active').length;
            $(this).find('.owl-item').removeClass('firstactiveitem');
            $(this).find('.owl-item').removeClass('lastactiveitem');
            $(this).find('.owl-item.active').each(function(index) {
                if (index === 0) {
                    $(this).addClass('firstactiveitem')
                }
                if (index === total - 1 && total > 1) {
                    $(this).addClass('lastactiveitem')
                }
            })
        })
    }
    peopleSliderClasses();
    peopleCarousel.on('translated.owl.carousel', function(event) {
        peopleSliderClasses()
        if ($(this).find('.owl-next').hasClass('disabled')) {
            $(this).addClass('last-reached')
        } else {
            $(this).removeClass('last-reached')
        }

    }); 



    roomsCarousel = $('.owl-carousel.rooms-carousel')
    roomsCarousel.owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        smartSpeed: 1000,
        items: 1,
    })
    // introDotsW = $('.home-rooms-carousel .owl-dots').outerWidth()
    // captionrooms = introDotsW + 12
    // $('.home-rooms-carousel-item-title').css('left', captionrooms)

    // $('.rooms-next').click(function() {
    //     roomsCarousel.trigger('next.owl.carousel');
    // })


    moduleCarousel = $('.owl-carousel.module-carousel')
    moduleCarousel.owlCarousel({
        loop:true,
        dots: false,
        margin:0,
        nav:true,
        smartSpeed: 1000,
        items: 1,
    })

    pqCarousel = $('.owl-carousel.pq-carousel')
    pqCarousel.owlCarousel({
        loop:true,
        dots: false,
        nav:true,
        center:true,
        smartSpeed: 1000,
        items: 2.8,
        responsive:{
            0:{
                items: 1.6,
                margin:6
            },
            640:{
                items: 2.5,
                margin:70
            },
            1024:{
                items: 2.8,
                margin:200
            },
            1441:{
                items: 2.8,
                margin:250,
            }
        }
    }) 

    $('.portrait-quote-prev').click(function() {
        pqCarousel.trigger('prev.owl.carousel');
    })
    $('.portrait-quote-next').click(function() {
        pqCarousel.trigger('next.owl.carousel');
    })

    storyCarousel = $('.owl-carousel.story-carousel')
    storyCarousel.owlCarousel({
        loop:true,
        dots: false,
        nav:true,
        center:true,
        smartSpeed: 1000,
        autoWidth: true,
        responsive:{
            0:{
                margin:6
            },
            640:{
                margin:40
            },
            1024:{
                margin:50,
            },
            1201:{
                margin:80,
            },
            1337:{
                margin:104,
            }
        }
    }) 

    $('.story-prev').click(function() {
        storyCarousel.trigger('prev.owl.carousel');
    })
    $('.story-next').click(function() {
        storyCarousel.trigger('next.owl.carousel');
    })

    storyMobCarousel = $('.owl-carousel.story-carousel-mob')
    storyMobCarousel.owlCarousel({
        loop:true,
        dots: true,
        nav:false,
        center:true,
        items: 1.06,
        smartSpeed: 1000,
        margin: 6
    })

    placesSubfooterCarousel = $('.owl-carousel.places-subfooter-carousel')
    placesSubfooterCarousel.owlCarousel({
        loop:true,
        dots: false,
        nav:false,
        center:true,
        items: 1.5,
        smartSpeed: 1000,
        margin: 55
    })
    calendarCarousel = $('.owl-carousel.calendar-carousel')
    calendarCarousel.owlCarousel({
        loop:true,
        dots: false,
        nav:false,
        mouseDrag:false,
        responsive:{
            0:{
                loop:true,
                margin:4,
                items: 1.4,
            },
            640:{
                loop:false,
                margin:11,
                items: 3,
            },
        }
    })


    setTimeout(function(){
        var maxHeight = 0;
    
        $(".pq-carousel-quote").each(function(){
            if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
        });
        
        $(".pq-carousel-quote-hold").css('min-height',maxHeight+'px');
    }, 1000);






    var $window = $(window);
    $vH = $(window).height();
    $window.scroll(function () {
        st = $window.scrollTop();
        
        if (st > 0) {
            $('.single-place-cta-top-fixed').stop().addClass('scrolled');
        } else {
            $('.single-place-cta-top-fixed').stop().removeClass('scrolled');
        }

        if (st > $vH) {
            $('.single-place-cta-top-hold').stop().addClass('close');
        } else {
            $('.single-place-cta-top-hold').stop().removeClass('close');
        }
    });


    // animations
    var $animation_elements = $('.animation-element');
    var $animation_elements2 = $('.animation-element-nogap');
    $vHeight = $(window).height();
    function check_if_in_view() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);
        $.each($animation_elements, function() {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top + $vHeight / 6;
            var element_bottom_position = (element_top_position + element_height);
            if ((element_bottom_position >= window_top_position) &&
                (element_top_position <= window_bottom_position)) {
            $element.addClass('in-view');
            } 
        });
        $.each($animation_elements2, function() {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);
            if ((element_bottom_position >= window_top_position) &&
                (element_top_position <= window_bottom_position)) {
            $element.addClass('in-view');
            } 
        });
    }
    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');

    // animations
    // var $animation_elements2 = $('.animation-element-nogap');
    // $vHeight = $(window).height();
    // function check_if_in_view2() {
    //     var window_height2 = $window.height();
    //     var window_top_position2 = $window.scrollTop();
    //     var window_bottom_position2 = (window_top_position2 + window_height2);
    //     $.each($animation_elements2, function() {
    //         var $element2 = $(this);
    //         var element_height2 = $element2.outerHeight();
    //         var element_top_position2 = $element2.offset().top;
    //         var element_bottom_position2 = (element_top_position2 + element_height2);
    //         if ((element_bottom_position2 >= window_top_position2) &&
    //             (element_top_position2 <= window_bottom_position2)) {
    //         $element2.addClass('in-view');
    //         } 
    //     });
    // }
    // $window.on('scroll resize', check_if_in_view2);
    // $window.trigger('scroll');

    const blurryImageLoad = new BlurryImageLoad();
    blurryImageLoad.load();

    // $(window).load(function () {
    //     $('.image-loading-effect-hold').addClass('page-laoded') 
    // });

    $('.journal-archive ul li:lt(8)').show();

    archiveItems = $(".journal-archive ul li").size();
    if (archiveItems < 9) {
        $('.js-more-stories').parent().hide();
    } else {
        $('.js-more-stories').parent().show();
    }

    $('.js-more-stories').click(function () {
        shown = $('.journal-archive ul li:visible').size()+8;
        if(shown< archiveItems) {$('.journal-archive ul li:lt('+shown+')').show();}
        else {$('.journal-archive ul li:lt('+archiveItems+')').show();
             $('.js-more-stories').parent().hide();
             }
    });

    $('.fixed-arrow').on('click', function () {
        $('#fp-nav ul li a.active').parent().next().find('span').addClass('red').click()
    });


    $(window).scroll(function() {
        if($(window).scrollTop() + $(window).height() > $(document).height() - $vHeight + 100) {
            $('.fixed-p-title').addClass('close')
            $('.fixed-arrow').addClass('close')
        } else {
            $('.fixed-p-title').removeClass('close')
            $('.fixed-arrow').removeClass('close')
        }
     });

    


    $('.calendar-archive-wrapper .calendar-item:lt(3)').show();

    EventsItems = $(".calendar-archive-wrapper .calendar-item").size();
    if (EventsItems < 4) {
        $('.js-more-events').parent().hide();
    } else {
        $('.js-more-events').parent().show();
    }

    $('.js-more-events').click(function () {
        shown = $('.calendar-archive-wrapper .calendar-item:visible').size()+8;
        if(shown< EventsItems) {$('.calendar-archive-wrapper .calendar-item:lt('+shown+')').show();}
        else {$('.calendar-archive-wrapper .calendar-item:lt('+EventsItems+')').show();
             $('.js-more-events').parent().hide();
             }
    });



    // new fullpage('#fullpage', {
    //     scrollBar: true,
    //     navigation: true,
    //     scrollingSpeed: 800,
    // });


    if ($("#fullpage").length > 0){
        if($(window).innerWidth() <= 639) {
            fullpage_api.destroy('all');
        } else {
            // $('#fullpage').fullpage({
            //     scrollBar: true,
            //     navigation: true,
            //     scrollingSpeed: 800,
            // });
            new fullpage('#fullpage', {
                scrollBar: true,
                navigation: true,
                scrollingSpeed: 800,
            });
        }
    
    //     $(window).on('resize', function(){
    //         var win = $(this); //this = window
    //         if (win.innerWidth() <= 639) {
    //             fullpage_api.destroy('all');
    //         } else {
    //             $('#fullpage').fullpage({
    //                 scrollBar: true,
    //                 navigation: true,
    //                 scrollingSpeed: 800,
    //             });
    //         }
    //     });
    }

    $('.custom-select').select2({
        minimumResultsForSearch: -1
    });

    // rooms form
    document.addEventListener( 'wpcf7mailsent', function( event ) {
        if ( '3348' == event.detail.contactFormId ) {
            document.getElementById('form-rooms-hold').style.display = 'none';
            $('#form-rooms-success').addClass('toggle')
            $('.reveal-reservation-text-rooms').hide()
        }
    }, false );

    // tables form
    document.addEventListener( 'wpcf7mailsent', function( event ) {
        if ( '3349' == event.detail.contactFormId ) {
            document.getElementById('form-tables-hold').style.display = 'none';
            $('#form-tables-success').addClass('toggle')
            $('.reveal-reservation-text-tables').hide()
        }
    }, false );


    $( function() {
        // var dateFormat = "mm/dd/yy",
          from = $( "#from" )
            .datepicker({
              defaultDate: "+1w",
              changeMonth: true,
              dateFormat: 'dd MM, yy',
              onClose: function( selectedDate ) {
                $( "#to" ).datepicker( "option", "minDate", selectedDate );
              }
            })
            .on( "change", function() {
              to.datepicker( "option", "minDate", getDate( this ) );
            }),
          to = $( "#to" ).datepicker({
            defaultDate: "+1w",
            changeMonth: true,
            dateFormat: 'dd MM, yy',
            onClose: function( selectedDate ) {
                $( "#from" ).datepicker( "option", "maxDate", selectedDate );
              }
          })
          .on( "change", function() {
            from.datepicker( "option", "maxDate", getDate( this ) );
          });
     
        // function getDate( element ) {
        //   var date;
        //   try {
        //     date = $.datepicker.parseDate( dateFormat, element.value );
        //   } catch( error ) {
        //     date = null;
        //   }
     
        //   return date;
        // }
      } );

      $('#time').datetimepicker({
        dateFormat: 'dd MM, yy',
      });

        $(".js-cookies").click(function(){
            Cookies.set("cookie_notice_accepted", 1, {expires: 30});
            $('.cookies-hold').fadeOut();
        })

        $(".reveal-join .close-button, .reveal-overlay").click(function(){
            Cookies.set("join_modal", 1, {expires: 30});
        });

        if (Cookies.get('places') == 1) {
            setTimeout(function(){
                enableScroll()
                scroll()
            }, 1000);
        }
    
    if ($('.single-place').length > 0) {
        plcTitle = $('.content-places-title h1').text().trim();

        setTimeout(function(){
            $('.reservation-form-element-location .custom-select').val(plcTitle);
            $('.reservation-form-element-location .custom-select').trigger('change');
        }, 1000);

        rEmail = $('.reservation-email-el').text().trim()
        setTimeout(function(){
            $('[name="reservations-email"]').each(function() {
                $(this).val(rEmail)
            })
        }, 1000);

        resEmail = $('.restaurent-reservation-email').text().trim()
        setTimeout(function(){
            $('[name="restaurant-email"]').each(function() {
                $(this).val(resEmail)
            })
        }, 1000);
    }

    $('.rooms-modal-item .btn-border').on('click', function() {
        roomsTitle = $(this).closest('.rooms-modal-item-right').find('.rooms-modal-item-title span').text().trim()
        console.log(roomsTitle)
        setTimeout(function(){
            $('.reservation-form-element-room .custom-select').val(roomsTitle); 
            $('.reservation-form-element-room .custom-select').trigger('change');
        }, 1000);
    })

    $('.js-rooms-close, .rooms-modal-overlay').on('click', function() {
        $('.reservation-form-element-room .custom-select').val('Best Available'); 
        $('.reservation-form-element-room .custom-select').trigger('change');
    })


    if(window.location.hash) {
        aHash = window.location.hash
        if (aHash == '#rooms-types')
        setTimeout(function(){
            $('.js-rooms-modal').trigger('click')
        }, 300);

        setTimeout(function(){
            $(aHash).toggleClass('active')
            $(aHash).find('.job-item-details-hold').slideToggle()

            $('.jobs-body').addClass('active')
            $('body').addClass('jobs-active')
            // setTimeout(function(){
            //     if ($('.job-item').hasClass('active') ) {
            //     } else {
            //         $('.jobs-body').removeClass('active')
            //         $('body').removeClass('jobs-active')
            //     }
            // }, 100);

            if ($(aHash).hasClass('opac')) {
                console.log('has opac')
                $(aHash).removeClass('opac')
            } else {
                $(aHash).addClass('opac')
            }
        }, 300);

        setTimeout(function(){
            $('html, body').stop().animate({
                'scrollTop': $(aHash).offset().top - 45
            }, 0, 'swing', function () {
            });
        }, 600);


    } 


    
 });

