var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ILog2-1",
    "page": "Readme",
    "title": "ILog2",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build Status) (Image: Codecov) (Image: Coveralls)This package provides a fast implementation of ilog2.ilog2(n::Real) compute the largest m such that 2^m <= n."
},

{
    "location": "autodocs/#ILog2.ilog2-Union{Tuple{T}, Tuple{T}} where T<:Union{Int128, Int16, Int32, Int64, Int8, UInt128, UInt16, UInt32, UInt64, UInt8}",
    "page": "Docstrings",
    "title": "ILog2.ilog2",
    "category": "method",
    "text": "ilog2(n::Real)\n\nCompute the largest m such that 2^m <= n.\n\nnote: Note\nfloat(2^53 - 1) is the largest n::Float64 for which eps(n) ≤ 1. For larger n::Float64, \"the largest m such that 2^m <= n\" is ambiguous, although ilog2 may return a number. For large enough n::Float64, ilog2 will throw an InexactError. These cautionary statements do not apply for n::Integer.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ILog2.msbindex-Union{Tuple{Type{T}}, Tuple{T}} where T<:Integer",
    "page": "Docstrings",
    "title": "ILog2.msbindex",
    "category": "method",
    "text": "msbindex(::Type{T})\nT is an Integer bits type\n\nReturn one less than the number of bits in T\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [ILog2]\nOrder = [:type, :function]"
},

]}
