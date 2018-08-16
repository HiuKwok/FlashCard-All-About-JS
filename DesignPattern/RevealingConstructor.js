/*
* Ref: https://blog.domenic.me/the-revealing-constructor-pattern/
*
*  - The quick take away is revealing constructor pattern allow to modify behaviour upon creation time
*  and only creation time, once the object is initialize. Nothing can change the implementation anymore.
*  And the class would only call selected internal method when it needed.
*
*  - Which is different class got inherit from parent class by subclassing then modify the prototype.
*  Cuz in this way the integrity of the class is not grantee, outsider can modify the selected method
*  when it see fit upon runtime. Which is not the thing you would desire especially building lib-lv code.
*
*  - Promise would be one obvious example when comes to revealingConstructor. The implementation be freezed upon
*  creation time by fed in a method with (resolve && reject).
* */


//Best-practice
const p = new Promise( (resolve, reject) => {
    resolve(1);
})



class readable {
};
//Which is really really bad
class FileReaderStream extends readable {

    constructor(filename) {
        super();
        this.filename = filename;
    }

    _read(size) {}
}

