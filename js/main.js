$(document).ready(function () {
  // ===========================
  // MENU A TENDINA (DROPDOWN)
  // ===========================

// Seleziona tutti gli elementi con la classe "actions" all'interno di ".action_list"
var dropDown = $(".action_list .actions");


  // Gestione hover per desktop
  // Gestisce il comportamento del menu a tendina quando il mouse passa sopra e si allontana
dropDown.hover(
    function () {
      // Se la larghezza della finestra è maggiore di 768px (desktop)
      if ($(window).width() > 768) {
        // Mostra il menu a tendina con un effetto fade-in
        $(this).children(".drop_down").stop(true, true).fadeIn(200);
        // Aggiorna l'attributo aria-expanded per migliorare l'accessibilità
        $(this).children("a").attr("aria-expanded", "true");
      }
    },
    function () {
      // Se la larghezza della finestra è maggiore di 768px (desktop)
      if ($(window).width() > 768) {
        // Nasconde il menu a tendina con un effetto fade-out
        $(this).children(".drop_down").stop(true, true).fadeOut(200);
        // Aggiorna l'attributo aria-expanded per migliorare l'accessibilità
        $(this).children("a").attr("aria-expanded", "false");
      }
    }
);


  // ===========================
  // MENU HAMBURGER RESPONSIVE
  // ===========================
 // Gestisce il comportamento del menu hamburger quando viene cliccato
    $(".hamburger-menu").click(function () {
        // Alterna la classe "active" sul menu di navigazione per mostrare/nascondere i contenuti
        $(".choise").toggleClass("active");
        
        // Verifica se il menu è attivo e aggiorna l'attributo aria-expanded per migliorare l'accessibilità
        var expanded = $(".choise").hasClass("active");
        $(this).attr("aria-expanded", expanded);
    });

  // Gestisce il comportamento del menu dropdown su dispositivi mobili
    $(".actions > a").click(function (event) {
        if ($(window).width() <= 768) {
            event.preventDefault(); // Previene la navigazione del link per permettere l'interazione con il dropdown
            
            // Trova il menu a tendina associato al link cliccato
            var $submenu = $(this).siblings(".drop_down");

            // Chiude eventuali altri menu a tendina aperti prima di aprire quello selezionato
            $(".drop_down").not($submenu).slideUp(200);

            // Alterna la visibilità del menu a tendina corrente
            $submenu.slideToggle(200);

            // Aggiorna l'attributo aria-expanded per migliorare l'accessibilità
            var expanded = $submenu.is(":visible");
            $(this).attr("aria-expanded", expanded);
        }
    });


  // Chiude il menu di navigazione e i menu a tendina quando l'utente clicca al di fuori di essi
    $(document).click(function (event) {
        // Controlla se il clic è avvenuto fuori dagli elementi del menu hamburger o del menu di navigazione
        if (!$(event.target).closest(".hamburger-menu, .choise").length) {
            // Rimuove la classe "active" dal menu di navigazione per chiuderlo
            $(".choise").removeClass("active");

            // Nasconde tutti i menu a tendina aperti
            $(".drop_down").slideUp(200);

            // Resetta l'attributo aria-expanded dei link del menu per migliorare l'accessibilità
            $(".actions > a").attr("aria-expanded", "false");
        }
    });
});