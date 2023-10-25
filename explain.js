// Answer to the four question-

/*

1. Explain the difference between 'if...else' and 'switch' statements for conditional logic.
 Answer:


    In javascript 'switch' and 'if...else' statement are used to make decision
    based on condition. But they have different syntax and use cases. 
    
    Let's see an example-
    'if..else' statement-
    
    Here inside () we need to provide a condition and inside{} we will provide'
    the code we want to execute if the condition is true.If the condition is false
    we will execute the code inside else{
    } . That is how if..else statement works.

    if(condition){
        if true this code will execute 
    } else{
        if false this will execute
    }


Switch Statement:

    The `switch` statement is a control structure used for multi-way branching in JavaScript.
    It provides a way to choose between multiple code blocks based on the value of an expression. 
    Here's an example of how it works:
    Inside the `switch` statement, we will provide an expression that is compared to the values specified in each `case`. 
    If there's a match between the expression and a `case` value, the code block for that specific `case` is executed.
    Additionally, if no match is found, the code inside the `default` case is executed. 
    The structure of a `switch` statement is as follows:


    switch (expression) {
    case value1:
        // Code will execute if expression === value1
        break;
    case value2:
        // Code will execute if expression === value2
        break;
    default:
        // Code will execute if none of the cases match
    }

    In this structure, the `break` statement is used to exit the `switch` statement after the code for the matched `case` has been executed. 
    The `default` case is optional and serves as a fallback option when none of the specified `case` values match the expression.



2. What is JavaScript, and what is its primary purpose in web development?
 Answer:
    
    JavaScript is a lightweight and versatile interpreted programming language commonly used for creating dynamic and interactive features on websites. 
    It significantly enhances the user experience by enabling features such as interactivity, form validation, and real-time updates without requiring full page reloads. 
    JavaScript's support for asynchronous operations, such as AJAX requests, is essential for building responsive web applications. 
    Additionally, it empowers developers to manipulate the Document Object Model (DOM) to dynamically modify web page content. 
    JavaScript is a foundational technology in web development, integral to the creation of modern, engaging web applications.






3. Explain the difference between var, let, and const when declaring variables in JavaScript?
 Answer:
    In javascript var,let and const are used to declare variable. But they have
    differcences.  
    
    Variable declared with 'var' are  function scoped. This variable are
    only accessible within the funcion they are declared and the scope
    is not limited to the block in which they are defined. Beside it can be
    hoisted before the function or global scope. It also can be resassigned
    and if declared outside function is considered to be global function.


    Variable decalred with 'let' are block scoped. That means this value
    is confined to the clock and not accessible outside the block. It can be
    hoisted. If we want to access before declaration it will result error.
    It can bes reassigned like 'var' . But it doesn't become global scope
    if declared ouside funtion or block. It remain within its respective 
    scope.

    Varibale declared with 'const' are block scoped and confined to that
    block. It can be hoisted like 'let' but can ne initialized.It will show error 
    if  we want to access before declaration. We can not reassigned the value
    twice. Beside it doesn't becoe golbal variable like let. 

    In modern Javascript it is recommended to use 'let' and 'const' insted of
    'var'. 

4. Explain the concept of "scope" in JavaScript and the difference between global and local scope?
Answer:
    In Javascript, scope refers to the concept where we talk about the rules of declaring a 
    varibale and accessiong it. Here we get a clear idea about declaring,accessing and
    manipulating a variable.

    There are two type of scope in javascript global scope and local scope. 
    
    Global scope -
    The varible declared outside any function or block is global scope.
    The variable can be accessed anywhere in the javascript program.
    It can be executed,modified and accessed  from any part of the code.
    We should be carefull while declaring global varibale, as it can lead
    unintended side effect and naming conflict.

    Local Scope-
    Variable declared within a function or block is local scope.
    It can not accessible outside the function or block which they are defined.
    It is created and destroyed as the function block is executed.

    In summary, understanding scope is vital for writing clean and maintainable javascript code.
    Local scope provides encapsulation and isolation, helps avoid naming conflict and unintended 
    variable modification, while global scope allows variable to be accessed from anywhere in the
    codebases.



*/

