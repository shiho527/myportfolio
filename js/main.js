$(function () {
  // =============================
  // 共通ユーティリティ
  // =============================
  function fadeHtml($el, html, fadeOutSpeed = 150, fadeInSpeed = 300) {
    $el.fadeOut(fadeOutSpeed, function () {
      $(this).html(html).fadeIn(fadeInSpeed);
    });
  }

  function smoothScroll(selector, duration = 1200) {
    $(selector).on("click", function () {
      const href = $(this).attr("href");
      const target = $(href === "#" || href === "" ? "html" : href);
      if (!target.length) return;
      $("html,body").animate(
        { scrollTop: target.offset().top },
        duration,
        "swing",
      );
      return false;
    });
  }

  // =============================
  // ハンバーガーメニュー
  // =============================
  $(".hamburger").on("click", () => $("header").toggleClass("open"));
  $(".nav a").on("click", () => $("header").removeClass("open"));

  // =============================
  // to-top ボタン
  // =============================
  const $toTop = $(".to-top");
  if ($toTop.length) {
    $toTop.hide();
    $(window).on("scroll", () =>
      $(window).scrollTop() > 700 ? $toTop.fadeIn() : $toTop.fadeOut(),
    );
    $toTop.on("click", () => $("html,body").animate({ scrollTop: 0 }, 500));
  }

  // =============================
  // スムーススクロール
  // =============================
  smoothScroll('a[href^="#"]');

  // =============================
  // about 画像フェードイン
  // =============================
  function fadeInOnScroll() {
    $(".img-large, .img-small").each(function () {
      const elemPos = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const windowHeight = $(window).height();

      if (scroll > elemPos - windowHeight + 100) {
        $(this).addClass("fade-in");
      }
    });
  }

  // スクロール時
  $(window).on("scroll", fadeInOnScroll);

  // 初回読み込み時もチェック
  fadeInOnScroll();
});
