/*
* Define at the beginning of the file.
* */
// 'use strict';
//Ref: https://wcc723.github.io/javascript/2017/12/15/javascript-use-strict/

//Var need to be declare either const || var || let but not blank.
 aunite = 'Aunt';
// const aunt = 'aunt';


//Or only apply it under method scope
(function() {
    'use strict';
    // auntie = 'Aunt';
})();

//Modify getter is not allowed at all once it define.
(function () {
    'use strict';
    let family = {
        get mom() {return 'Vic'}
    }
    console.log(family.mom);
//    Attempt to modify getter would result in error
//     family.mom = 'Dad';
})();




(function () {
    //Well known attribute can't be delete
     delete Object.prototype;
})();



aunt = 'Auntie';

//As Auntie is not defined under scope of callAuntie()by the time strict mode is on,
//It would really check does auntie defined yet or not?
function callAuntie() {
    // 'use strict';
    console.log('Call:', this.auntie);
}

callAuntie.call({auntie: 'Call aunt'});
callAuntie();


