// Responsive Header--

// function togglemenu() {
//   const menu = document.getElementById("mobileMenu");
//   menu.classList.toggle("active");
// }

/******************************* Header Fixed Script ************************************/

// $(window).scroll(function(){
// 	if ($(this).scrollTop() > 1) {
// 		$('.header-container .header-content').addClass('fixed');
// 	} else {
// 		$('.header-container .header-content').removeClass('fixed');
// 	}
// });

// Slide Up/Down Script--

// $(document).ready(function(){
//   $(".hamburger").click(function(){
//         $(".menu-items-wrapper").slideToggle();
//   });
// });

// Slicing Script---

// select the elements to be moved

// const headerButton = document.querySelector('.header-content-right .menu-items.right');
// const primaryMenu = document.querySelector('.menu-items ul');
// // function to move elements
// function moveElements() {
//   const viewportWidth = window.innerWidth;
//   if (viewportWidth < 998) {
//     // move elements to new location
//     primaryMenu.appendChild(headerButton);
//   } else {
//     // move elements back to original location
//     const headerCta = document.querySelector('.header-content-right');
//     headerCta.appendChild(headerButton);
//   }
// }

// move elements on page load
// moveElements();
// move elements on window resize
// window.addEventListener('resize', moveElements);


// Accordian-JavaScript--

$(document).ready(function () {
  // For the click-based accordions, the first one stays open
  $(".expand-wrapper:not(.on-hover)").each(function () {
    $(this).find(".expand:first").addClass("is-open");
    $(this).find(".expand-content:first").show();
  });

  // Click event for accordions without "on-hover" class
  $(".expand-wrapper:not(.on-hover) .expand-heading").click(function () {
    var $accordionContent = $(this).next(".expand-content");
    var $accordionOuter = $(this).closest(".expand");
    var $parentWrapper = $(this).closest(".expand-wrapper");

    // Slide up all other accordions IN THIS WRAPPER and remove the 'is-open' class
    $parentWrapper.find(".expand-content").not($accordionContent).slideUp();
    $parentWrapper
      .find(".expand")
      .not($accordionOuter)
      .removeClass("is-open");

    // Toggle the clicked accordion
    if ($accordionContent.is(":visible")) {
      $accordionContent.slideUp();
      $accordionOuter.removeClass("is-open");
    } else {
      $accordionContent.slideDown();
      $accordionOuter.addClass("is-open");
    }
  });
});


// Carousel Javascript--

// let goBefore = document.querySelector("#prev"),
//   goAfter = document.querySelector("#back"),
//   cardObj = document.querySelectorAll(".card"),
//   cardArea = document.querySelector(".card-group");

// let currentCard = 0,
//   cardLeft = 0,
//   cardWidth = 565;
// let viewWidth = document.body.clientWidth - document.body.clientWidth * 0.2;
// let windowWidth = document.body.clientWidth;
// let cardCount = Math.floor(viewWidth / cardWidth);
// let viewArray = [];

// function getViewArry(idx) {
//   viewArray.push(idx);
// }

// function resetArry() {
//   viewArray.length = 0;
// }

// function resetCard() {
//   for (let i = 0; i < cardObj.length; i++) {
//     cardObj[i].style.display = "none";
//   }
// }

// function setCard() {
//   for (let i = 0; i < viewArray.length; i++) {
//     cardObj[viewArray[i]].style.display = "block";
//     cardObj[viewArray[i]].style.order = i;
//   }
// }

// function setDisp() {
//   let calLeft = (windowWidth - cardWidth * cardCount) / 2;
//   cardArea.style.left =
//     cardLeft === 0 ? calLeft - 48 + "px" : cardLeft - cardWidth - 48 + "px";
//   cardLeft = cardLeft === 0 ? calLeft - 48 : cardLeft - cardWidth - 24;
// }

// function setArryVal() {
//   if (currentCard >= cardObj.length - cardCount) {
//     for (let i = currentCard; i < cardObj.length; i++) {
//       getViewArry(i);
//     }
//     for (let i = 0; i < cardCount - (cardObj.length - currentCard); i++) {
//       getViewArry(i);
//     }
//   } else {
//     for (let i = currentCard; i < currentCard + cardCount; i++) {
//       getViewArry(i);
//     }
//   }
// }

// loadCard();

// function loadCard() {
//   for (let i = 0; i < cardCount; i++) {
//     getViewArry(i);
//   }
//   resetCard();
//   setCard();
//   setDisp();
// }

// goAfter.addEventListener("click", function() {
//   resetArry();
//   currentCard++;
//   if (currentCard === cardObj.length) currentCard = 0;

//   setArryVal();
//   resetCard();
//   setCard();
// });

// goBefore.addEventListener("click", function() {
//   resetArry();
//   currentCard--;
//   if (currentCard < 0) currentCard = cardObj.length - 1;

//   setArryVal();
//   resetCard();
//   setCard();
// });

// window.addEventListener("resize", function() {
//   viewWidth = document.body.clientWidth - document.body.clientWidth * 0.2;
//   windowWidth = document.body.clientWidth;
//   cardCount = Math.floor(viewWidth / cardWidth);

//   cardArea.style.left = (windowWidth - cardWidth * cardCount) / 2 - 48 + "px";
//   resetArry();
//   if (currentCard === cardObj.length) currentCard = 0;
//   if (currentCard < 0) currentCard = cardObj.length - 1;

//   setArryVal();
//   resetCard();
//   setCard();
// });
