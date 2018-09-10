$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


//init ScrollMagic Controller
$(function() {
    var controller = new ScrollMagic.Controller();

    //User's viewerport dimensions. Never used, but probably should have.
    var width = window.innerWidth;
    var height = window.innerHeight;

//TWEENS!

    //Ichi moves off screen
    var ichiOutTween = TweenMax.to("#ichi", 1, {
      left: -300
    });

    //Ichi moves in
    var ichiInTween = TweenMax.fromTo("#ichi2", 1,
    {
      right: -600
    },
    {
      right: 30
    });

    //Keep out
    var keepOutTween = TweenMax.fromTo("#keepOut", 1,
    {
      opacity: 0
    },
    {
      opacity: 1,
      rotation: 360
    });

    //Hides cats at same time as the keepOut
    var eraseKaraTween = TweenMax.fromTo("#kara", 1,
    {
      opacity: 1
    },
    {
      scale: 0,
      opacity: 0
    });

    var eraseIchiTween = TweenMax.fromTo("#ichi2", 1,
    {
      opacity: 1
    },
    {
      scale: 0,
      opacity: 0
    });

    var keepOutEraseTween = TweenMax.to("#keepOut", 1, {
      opacity: 0,
      scale: 0,
      rotation: 480
    });


//SCENES!
    var ichiOutScene = new ScrollMagic.Scene({
      triggerElement: "#top",
      duration: 1800
    })
    .setTween(ichiOutTween)
    .addTo(controller);

    var ichiInScene = new ScrollMagic.Scene({
      triggerElement: "#siteUpdates",
      duration: 1000
    })
    .setTween(ichiInTween)
    .addTo(controller);

    var keepOutScene = new ScrollMagic.Scene({
      triggerElement: "#contact",
      triggerHook: "onEnter",
      duration: 300
    })
    .setTween(keepOutTween)
    .addTo(controller);

    var eraseIchiScene = new ScrollMagic.Scene({
      triggerElement: "#contact",
      triggerHook: "onEnter",
      duration: 150
    })
    .setTween(eraseIchiTween)
    .addTo(controller);

    var eraseKaraScene = new ScrollMagic.Scene({
      triggerElement: "#contact",
      triggerHook: "onEnter",
      duration: 150
    })
    .setTween(eraseKaraTween)
    .addTo(controller);

    var keepOutEraseScene = new ScrollMagic.Scene({
      triggerElement: "form",
      offset: 350,
      triggerHook: "onEnter",
      duration: 150
    })
    .setTween(keepOutEraseTween)
    .addTo(controller);


});
