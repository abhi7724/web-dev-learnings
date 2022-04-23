// the scope is by default global
//Lexical Scope
function Dada(){
    var name = 'abhinav';
    // likes is not accessible here
    function Papa(){
        console.log(name);
        //name is accessible here
        //likes is not accessible here
        function Beta(){
            //Innermost level of the scope chain
            //name is also accessible here
            var likes = 'Coding';
        }
        console.log(likes);
        Beta()
    }
    Papa()
}
Dada()