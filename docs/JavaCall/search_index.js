var documenterSearchIndex = {"docs": [

{
    "location": "#JavaCall.classforname-Tuple{String}",
    "page": "Home",
    "title": "JavaCall.classforname",
    "category": "method",
    "text": "classforname(name::String)\n\nCreate an instance of Class<name> (same as Class.forName(name) in Java)\n\nArgs\n\nname: The name of a class to instantiate\n\nReturns\n\nJavaObject Instance of Class<name>\n\n\n\n\n\n"
},

{
    "location": "#JavaCall.getname-Tuple{JavaObject{Symbol(\"java.lang.Class\")}}",
    "page": "Home",
    "title": "JavaCall.getname",
    "category": "method",
    "text": "getname(cls::JClass)\n\nReturns the fully qualified name of the java class\n\nArgs\n\ncls: The JClass object\n\nReturns\n\nThe fully qualified name of the java class\n\n\n\n\n\n"
},

{
    "location": "#JavaCall.getname-Tuple{JavaObject{Symbol(\"java.lang.reflect.Method\")}}",
    "page": "Home",
    "title": "JavaCall.getname",
    "category": "method",
    "text": "getname(method::JMethod)\n\nReturns the fully qualified name of the java method\n\nArgs\n\ncls: The JClass method\n\nReturns\n\nThe fully qualified name of the method\n\n\n\n\n\n"
},

{
    "location": "#JavaCall.getparametertypes-Tuple{JavaObject{Symbol(\"java.lang.reflect.Method\")}}",
    "page": "Home",
    "title": "JavaCall.getparametertypes",
    "category": "method",
    "text": "getparametertypes(method::JMethod)\n\nReturns the parameter types of the java method\n\nArgs\n\nmethod: The java method object\n\nReturns\n\nVector the parametertypes\n\n\n\n\n\n"
},

{
    "location": "#JavaCall.getreturntype-Tuple{JavaObject{Symbol(\"java.lang.reflect.Method\")}}",
    "page": "Home",
    "title": "JavaCall.getreturntype",
    "category": "method",
    "text": "getreturntype(method::JMethod)\n\nReturns the return type of the java method\n\nArgs\n\nmethod: The java method object\n\nReturns\n\nReturns the type of the return object as a JClass\n\n\n\n\n\n"
},

{
    "location": "#JavaCall.isnull-Tuple{JavaMetaClass}",
    "page": "Home",
    "title": "JavaCall.isnull",
    "category": "method",
    "text": "isnull(obj::JavaMetaClass)\n\nChecks if the passed JavaMetaClass is null or not\n\nArgs\n\nobj: The object of type JavaMetaClass\n\nReturns\n\ntrue if the passed object is null else false\n\n\n\n\n\n"
},

{
    "location": "#JavaCall.isnull-Tuple{JavaObject}",
    "page": "Home",
    "title": "JavaCall.isnull",
    "category": "method",
    "text": "isnull(obj::JavaObject)\n\nChecks if the passed JavaObject is null or not\n\nArgs\n\nobj: The object of type JavaObject\n\nReturns\n\ntrue if the passed object is null else false\n\n\n\n\n\n"
},

{
    "location": "#JavaCall.listmethods-Tuple{JavaObject}",
    "page": "Home",
    "title": "JavaCall.listmethods",
    "category": "method",
    "text": "listmethods(obj::JavaObject)\n\nLists the methods that are available on the java object passed\n\nArgs\n\nobj: The java object\n\nReturns\n\nList of methods\n\n\n\n\n\n"
},

{
    "location": "#JavaCall.listmethods-Union{Tuple{C}, Tuple{Union{Type{JavaObject{C}}, JavaObject{C}},AbstractString}} where C",
    "page": "Home",
    "title": "JavaCall.listmethods",
    "category": "method",
    "text": "listmethods(obj::JavaObject, name::AbstractString)\n\nLists the methods that are available on the java object passed. The methods are filtered based on the name passed\n\nArgs\n\nobj: The java object\nname: The filter (e.g. method name)\n\nReturns\n\nList of methods available on the java object and matching the name passed\n\n\n\n\n\n"
},

{
    "location": "#JavaCall.narrow-Tuple{JavaObject}",
    "page": "Home",
    "title": "JavaCall.narrow",
    "category": "method",
    "text": "Given a JavaObject{T} narrows down T to a real class of the underlying object. For example, JavaObject{:java.lang.Object} pointing to java.lang.String will be narrowed down to JavaObject{:java.lang.String}\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [JavaCall]\nOrder = [:type, :function]"
},

]}