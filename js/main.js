$(document).ready(function () {

  /* ===========================
     MENU A TENDINA (DROPDOWN)
  =========================== */

  // Seleziona gli elementi del menu con dropdown
  var dropDown = $(".action_list .actions");
  var dropMenu = dropDown.children(".drop_down"); // Contenitori dei dropdown

  /* ===========================
     MOSTRA/NASCONDI CON HOVER
  =========================== */

  // Usa hover() per combinare mouseenter() e mouseleave()
  dropDown.hover(
      function () {
          // Mostra il menu associato quando il mouse entra
          $(this).children(".drop_down").stop(true, true).fadeIn(200);
      },
      function () {
          // Nasconde il menu associato quando il mouse esce
          $(this).children(".drop_down").stop(true, true).fadeOut(200);
      }
  );

}); // Fine del document ready
