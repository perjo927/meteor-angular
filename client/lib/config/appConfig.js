appConfig = function($mdThemingProvider, $mdIconProvider) {

    //$mdIconProvider
    //    .defaultIconSet("../assets/svg/avatars.svg", 128)
    //    .icon("menu", "/svg/menu.svg", 24)
    //    .icon("about", "about.svg", 512)
    //    .icon("cv", "/svg/cv.svg", 1024)
    //    .icon("person_add", "/svg/ic_person_add_24px.svg", 24)
    //    .icon("next", "/svg/ic_navigate_next_24px.svg", 24)
    //    .icon("google_plus", "/svg/google_plus.svg", 512)
    //    .icon("hangouts", "/svg/hangouts.svg", 512)
    //    .icon("twitter", "/svg/twitter.svg", 512)
    //    .icon("phone", "/svg/phone.svg", 512);

    $mdThemingProvider.theme('default')
        .primaryPalette('cyan')
        .accentPalette('lime')
        .warnPalette('deep-orange')
        .backgroundPalette('blue-grey'); // white
};