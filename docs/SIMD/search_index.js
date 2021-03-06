var documenterSearchIndex = {"docs": [

{
    "location": "#SIMD.VecRange",
    "page": "Home",
    "title": "SIMD.VecRange",
    "category": "type",
    "text": "VecRange{N}(i::Int)\n\nAnalogous to UnitRange but for loading SIMD vector of width N at index i.\n\nExamples\n\njulia> xs = ones(4);\n\njulia> xs[VecRange{4}(1)]  # calls `vload(Vec{4,Float64}, xs, 1)`\n<4 x Float64>[1.0, 1.0, 1.0, 1.0]\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [SIMD]\nOrder = [:type, :function]"
},

]}
