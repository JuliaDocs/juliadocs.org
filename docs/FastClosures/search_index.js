var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#FastClosures-1",
    "page": "Readme",
    "title": "FastClosures",
    "category": "section",
    "text": "Releases - PackageEvaluator Development - Build Status\n(Image: FastClosures)    (Image: FastClosures) (Image: Build Status)   (Image: codecov.io)A workaround for https://github.com/JuliaLang/julia/issues/15276, for julia-0.6, somewhat in the spirit of FastAnonymous.jl.  Provides the @closure macro, which wraps a closure in a let block to make reading variable bindings private to the closure.  In certain cases, this make using the closure - and the code surrouding it - much faster.  Note that it\'s not clear that the let block trick implemented in this package helps at all in julia-0.5.  However, julia-0.5 compatibility is provided for backward compatibility convenience."
},

{
    "location": "#Interface-1",
    "page": "Readme",
    "title": "Interface",
    "category": "section",
    "text": "    @closure closure_expressionWrap the closure definition closure_expression in a let block to encourage the julia compiler to generate improved type information.  For example:callfunc(f) = f()\n\nfunction foo(n)\n   for i=1:n\n       if i >= n\n           # Unlikely event - should be fast.  However, capture of `i` inside\n           # the closure confuses the julia-0.6 compiler and causes it to box\n           # the variable `i`, leading to a 100x performance hit if you remove\n           # the `@closure`.\n           callfunc(@closure ()->println(\"Hello \\$i\"))\n       end\n   end\nendHere\'s a further example of where this helps:using FastClosures\n\n# code_warntype problem\nfunction f1()\n    if true\n    end\n    r = 1\n    cb = ()->r\n    identity(cb)\nend\n\n# code_warntype clean\nfunction f2()\n    if true\n    end\n    r = 1\n    cb = @closure ()->r\n    identity(cb)\nend\n\n@code_warntype f1()\n@code_warntype f2()"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [FastClosures]\nOrder = [:type, :function]"
},

]}
