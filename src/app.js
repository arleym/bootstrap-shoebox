import * as offline from 'offline-plugin/runtime';
import './app.scss';
import 'bootstrap';
import './js/main.js';

offline.install({
  onUpdateReady: function() {
    offline.applyUpdate();
  }
});
