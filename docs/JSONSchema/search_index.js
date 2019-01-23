var documenterSearchIndex = {"docs": [

{
    "location": "#JSONSchema.Schema",
    "page": "Home",
    "title": "JSONSchema.Schema",
    "category": "type",
    "text": "Schema(sch::String)\n\nCreate a schema for document validation. sch should be a String containing a valid JSON.\n\nSchema(sch::Dict)\n\nCreate a schema but with sch being a parsed JSON created with JSON.parse() or JSON.parsefile().\n\nExample\n\njulia> myschema = Schema(\"\n  {\n    \"properties\": {\n      \"foo\": {},\n      \"bar\": {}\n    },\n    \"required\": [\"foo\"]\n  }\n  \")\n\njulia> sch = JSON.parsefile(filepath)\njulia> myschema = Schema(sch)\n\n\n\n\n\n"
},

{
    "location": "#Base.isvalid-Tuple{Any,Schema}",
    "page": "Home",
    "title": "Base.isvalid",
    "category": "method",
    "text": "isvalid(x, s::Schema)\n\nCheck that a document x is valid against the Schema s.\n\nExamples\n\njulia> myschema = Schema(\"\n  {\n    \"properties\": {\n      \"foo\": {},\n      \"bar\": {}\n    },\n    \"required\": [\"foo\"]\n  }\n  \")\n\njulia> isvalid( JSON.parse(\"{ \"foo\": true }\"), myschema)\ntrue\njulia> isvalid( JSON.parse(\"{ \"bar\": 12.5 }\"), myschema)\nfalse\n\n\n\n\n\n"
},

{
    "location": "#JSONSchema.diagnose-Tuple{Any,Schema}",
    "page": "Home",
    "title": "JSONSchema.diagnose",
    "category": "method",
    "text": "diagnose(x, s::Schema)\n\nCheck that a document x is valid against the Schema s. If valid return nothing, and if not, return a diagnostic String containing a selection of one or more likely causes of failure.\n\nExamples\n\njulia> diagnose( JSON.parse(\"{ \"foo\": true }\"), myschema)\nnothing\njulia> diagnose( JSON.parse(\"{ \"bar\": 12.5 }\"), myschema)\n\"in [] : required property \'foo\' missing\"\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [JSONSchema]\nOrder = [:type, :function]"
},

]}