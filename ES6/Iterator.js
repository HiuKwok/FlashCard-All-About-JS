//Iterator need to declare under Symbol.iterator property
{
    const obj = {
        [Symbol.iterator] : function () {
            return {
                next: function () {
                    return {
                        value: 1,
                        done: true
                    };
                }
            };
        }
    };
}