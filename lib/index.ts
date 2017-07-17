export function greet(str:string):string{
    if(typeof str !== 'string'){
        return "Please pass string value";
    }
    return "Hello "+ str;

}