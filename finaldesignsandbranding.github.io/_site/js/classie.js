/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */
!function(s){"use strict";function n(s){return new RegExp("(^|\\s+)"+s+"(\\s+|$)")}function e(s,e){(a(s,e)?c:t)(s,e)}var a,t,c;"classList"in document.documentElement?(a=function(s,e){return s.classList.contains(e)},t=function(s,e){s.classList.add(e)},c=function(s,e){s.classList.remove(e)}):(a=function(s,e){return n(e).test(s.className)},t=function(s,e){a(s,e)||(s.className=s.className+" "+e)},c=function(s,e){s.className=s.className.replace(n(e)," ")});var i={hasClass:a,addClass:t,removeClass:c,toggleClass:e,has:a,add:t,remove:c,toggle:e};"function"==typeof define&&define.amd?define(i):s.classie=i}(window);