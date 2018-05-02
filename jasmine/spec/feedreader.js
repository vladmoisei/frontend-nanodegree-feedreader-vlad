/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* All of our tests are within the $() function,
 * since some of these tests may require DOM elements.
 * This ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This tests to make sure that the allFeeds variable
         * has been defined and that it is not empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This tests that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('have URL defined', function() {
            for (let feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            };
         });


        /* This tests that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('have name defined', function() {
            allFeeds.forEach(feed => {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
         });
    });


    /* Test suite named "The menu" */
    describe('The menu', function() {
        /* This test ensures the menu element is
         * hidden by default.
         */
         it('is hidden by default', function() {
            let elem = document.querySelector('body');
            expect(elem.className).toBe('menu-hidden');
         });

         /* This test ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * has two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          it('changes visibility', function() {
            let elem = document.querySelector('body');
            let menu = document.querySelector('.menu-icon-link');
            menu.click();
            expect(elem.className).toBe('');
            menu.click();
            expect(elem.className).toBe('menu-hidden');
          });
    });

    /* Test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* This test ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * loadFeed() is asynchronous so this test require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('have an element', function(done) {
            expect(document.querySelectorAll('.feed .entry').length).toBeGreaterThan(0);
            done();
        });
    });

    /* Test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        /* This test ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        let feedFirstInnerHTML;
        let feedSecondInnerHTML;
        beforeEach(function(done) {
            loadFeed(0, function() {
                feedFirstInnerHTML = document.querySelector('.feed').innerHTML;
                loadFeed(1, function() {
                    feedSecondInnerHTML = document.querySelector('.feed').innerHTML;
                    done();
                });
            });
        });
        it('changes content', function(done) {
            expect(feedFirstInnerHTML).not.toEqual(feedSecondInnerHTML);
            done();
        });
    });
}());