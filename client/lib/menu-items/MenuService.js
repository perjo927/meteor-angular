(function(){
    'use strict';

    angular.module('menuItems')
        .service('menuService', ['$q', MenuService]);

    /**
   * Menu DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */

    // TODO: CRS keys for lang
    // TODO: Fetch from backend and populate here
    function MenuService($q){
        var menuItems = [
            {
                name: 'About Per',
                avatar: 'about',
                contentHeader: 'Who is Per Jonsson?',
                contentItems: [
                    {
                        title: "Bio",
                        text: "Avant-garde. Embrace change."
                    },
                    {
                        title: "Personal",
                        text: "I have hobbies. That is personal."
                    }

                ],
                actionIconUrl: 'person_add',
                bottomSheet: {
                    title: "Contact Per",
                    items:  [{
                        name: 'Phone',
                        icon: 'phone',
                        iconUrl: 'assets/svg/phone.svg'
                    }, {
                        name: 'Twitter',
                        icon: 'twitter',
                        iconUrl: 'assets/svg/twitter.svg'
                    }, {
                        name: 'Google+',
                        icon: 'google_plus',
                        iconUrl: 'assets/svg/google_plus.svg'
                    }, {
                        name: 'Hangout',
                        icon: 'hangouts',
                        iconUurl: 'assets/svg/hangouts.svg'
                    }]
                }
            },
            {
                name: 'CV',
                avatar: 'cv',
                contentHeader: 'Curriculum Vitae.',
                contentItems: [
                    {}
                ],
                bottomSheet: {
                    title: "",
                    items: []
                }
            },
            {
                name: 'Projects',
                avatar: 'svg-3',
                contentHeader: "Digital Portfolio.",
                contentItems: [
                    {}
                ],
                bottomSheet: {
                    title: "",
                    items: []
                }
            },
            {
                name: 'Recommendations',
                avatar: 'svg-4',
                contentHeader: 'See what others have to say about Per.',
                contentItems: [
                    {}
                ],
                bottomSheet: {
                    title: "",
                    items: []
                }
            },
            {
                name: 'Skills',
                avatar: 'svg-5',
                contentHeader: 'See what Per has up his sleeve.',
                contentItems: [
                    {}
                ],
                bottomSheet: {
                    title: "",
                    items: []
                }
            },
            {
                name: 'Social',
                avatar: 'svg-6',
                contentHeader: "Find out how to contact Per.",
                contentItems: [
                    {}
                ],
                bottomSheet: {
                    title: "",
                    items: []
                }
            }
        ];

        // Promise-based API
        return {
            loadAllMenuItems : function() {
                // Simulate async nature of real remote calls
                return $q.when(menuItems);
            }
        };
    }

})();
