$(function () {

  /* ── Smooth scroll for sidebar links ── */
  $('#sidebar-nav a, .top-nav a').on('click', function (e) {
    var href = $(this).attr('href');
    if (href && href.charAt(0) === '#') {
      e.preventDefault();
      var target = $(href);
      if (target.length) {
        $('html, body').animate({ scrollTop: target.offset().top - 20 }, 320);
      }
    }
  });

  /* ── Scrollspy: highlight sidebar link of visible section ── */
  var sections = $('#main-content section[id]');
  var sidebarLinks = $('#sidebar-nav a');

  function onScroll() {
    var scrollTop = $(window).scrollTop() + 60;
    var current = '';
    sections.each(function () {
      if (scrollTop >= $(this).offset().top) {
        current = '#' + this.id;
      }
    });
    sidebarLinks.parent().removeClass('active');
    if (current) {
      sidebarLinks.filter('[href="' + current + '"]').parent().addClass('active');
    }
  }

  $(window).on('scroll', onScroll);
  onScroll(); // run once on load

});
