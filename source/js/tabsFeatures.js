'use strict';

(function () {
  var featuresTabs = new Tabs({
    wrapperClass: 'features',
    tabContainerClass: 'features__tabs',
    tabClass: 'features__tab',
    activeTabClass: 'features__tab--active',
    contentClass: 'features__content',
    activeContentClass: 'features__content--active'
  });

  featuresTabs.addListener();

})();
