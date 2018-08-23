{
//    * -> async
//  yield -> await
}

{
    async function main() {
        //Multiple await(promise), wrap into single try...catch() statement. 
        try {
            const val1 = await func1();
            const val2 = await func2(val1);
            const val3 = await func3(val1, val2);

            console.log('Final: ', val3);
        }
        catch (err) {
            console.error(err);
        }
    }
}