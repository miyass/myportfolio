$(window).on('touchmove.noScroll', function(e) {
    e.preventDefault();
});

// スクロール無効を解除する
$(window).off('.noScroll');
