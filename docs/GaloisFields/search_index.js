var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#GaloisFields.jl-finite-fields-for-Julia-1",
    "page": "Readme",
    "title": "GaloisFields.jl - finite fields for Julia",
    "category": "section",
    "text": "Build Status Test coverage\n[![][travis-img]][travis-url] [![][appveyor-img]][appveyor-url] [![Coverage Status][codecov-img]][codecov-url]"
},

{
    "location": "#Introduction-1",
    "page": "Readme",
    "title": "Introduction",
    "category": "section",
    "text": "This module defines types representing [finite fields][galois-fields-wiki]. It supports both fields of prime order and of prime power order.[galois-fields-wiki]: https://en.wikipedia.org/wiki/Finite_field"
},

{
    "location": "#Synopsis-1",
    "page": "Readme",
    "title": "Synopsis",
    "category": "section",
    "text": "The easiest way to create Galois fields is with the @GaloisField and @GaloisField! macros. Typically, you use the former for a field of prime order and the latter for a field of prime power order. In the prime power case, you pass a display name / variable name for the primitive element.using GaloisFields\n\nF = @GaloisField 29     # ℤ/29ℤ\nG = @GaloisField! 27 β   # degree-3 extension of ℤ/3ℤ; multiplicatively generated by β\n\nF(2)^29 == F(2)\nβ^27 == βThe macros also accept pretty-printed versions: more difficult to type but more elegant to read:F = @GaloisField ℤ/29ℤ\nG = @GaloisField 𝔽₂₇ βIf you want to pass your own generator for the representation of a field of order q = p^n, you can:F = @GaloisField! 𝔽₃ β^2 + β + 2\nβ^2 + β + 2 == 0Lastly, there\'s also function interfaces in cases where macros are not appropriate:F = GaloisField(29)               # ℤ/29ℤ\nG, β = GaloisField(81, :β)        # degree-4 extension of ℤ/3ℤ\nG, β = GaloisField(3, 4, :β)      # same; avoid having to factorize 81\nF, β = GaloisField(3, :β => [2, 0, 0, 2, 1]) # same; pass our own custom minimum polynomial"
},

{
    "location": "#Conversions-1",
    "page": "Readme",
    "title": "Conversions",
    "category": "section",
    "text": "If you specify your own minimum polynomial, we make no assumptions about conversions between fields. For example, when definingF = @GaloisField! 𝔽₂ β^2 + β + 1\nG = @GaloisField! 𝔽₂ γ^2 + γ + 1an operation likeG(β)will throw an error. The mathematical reason is that  the fields F and G are isomorphic, but there is two different isomorphisms. (\"They are not canonically isomorphic.\") To choose an identification, you can use the @identify macro (which is not exported by default, so we use its full path):@GaloisFields.identify β => γ^2\n@GaloisFields.identify γ => β^2This allows for conversions such asG(β)\nconvert(F, γ + 1)The inner workings of this distinction are based on the symbol names. So if you define F and G with the same symbol and minimum polynomial:F = @GaloisField! 𝔽₂ β^2 + β + 1\nG = @GaloisField! 𝔽₂ β^2 + β + 1then they are just considered equal and conversions work without extra work."
},

{
    "location": "#Conversions-for-the-default-minimum-polynomials-1",
    "page": "Readme",
    "title": "Conversions for the default minimum polynomials",
    "category": "section",
    "text": "If you do not specify a minimum polynomial, for example by usingF = @GaloisField! 𝔽₈₁ β\nG = @GaloisField! 𝔽₉ γthen we use [Conway polynomials][conway]. They have special compatibility relations between them, allowing conversions:β^10 == γThis only works if there is a subfield isomorphic to G in F, which is the case exactly when the order of F is a power of the order of G.[conway]: https://en.wikipedia.org/wiki/Conwaypolynomial(finite_fields)[travis-img]: https://travis-ci.org/tkluck/GaloisFields.jl.svg?branch=master [travis-url]: https://travis-ci.org/tkluck/GaloisFields.jl[appveyor-img]: https://ci.appveyor.com/api/projects/status/4g6ax1ni7ijx3rn4?svg=true [appveyor-url]: https://ci.appveyor.com/project/tkluck/galoisfields-jl[codecov-img]: https://codecov.io/gh/tkluck/GaloisFields.jl/branch/master/graph/badge.svg [codecov-url]: https://codecov.io/gh/tkluck/GaloisFields.jl"
},

{
    "location": "autodocs/#GaloisFields.GaloisField",
    "page": "Docstrings",
    "title": "GaloisFields.GaloisField",
    "category": "function",
    "text": "F = GaloisField(p)\nF,α = GaloisField(p, :β => [1, 0, 1])\nF,α = GaloisField(p, n, :β)\n\nReturn a type representing a finite field.\n\nThe single-argument signature returns the finite field ℤpℤ.\n\nThe two-arguments signature returns an algebraic extension of that field, with minimum polynomial given by the second argument: a dense representation of the univariate, monic polynomial, with ascending degree.\n\nThe three-arguments signature returns an algebraic extension of that field, with minimum polynomial equal to the Conway polynomial  for (pn). The GaloisFields package ships with a database of Conway  polynomials and will raise an error if it does not contain an entry for  (pn).\n\nNote that in the latter two cases, the variable name (e.g. β above) is part of the type. This lets you define identifications between isomorphic (sub)fields. For example, with the following definition\n\nF = @GaloisField! 𝔽₂ β^2 + β + 1\nG = @GaloisField! 𝔽₂ γ^2 + γ + 1\n\nthe fields F and G are isomorphic, but not canonically. We might define\n\n@GaloisFields.identify β => γ + 1\n@GaloisFields.identify γ => β + 1\n\nto allow for conversions like\n\nG(β)\nconvert(F, γ + 1)\n\nIn the Conway case, you do not have to define your own identifications, as the Conway polynomials satisfy compatibility relations that allow us to use certain distinguished inclusions between them.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GaloisFields.char-Tuple{Type{#s35} where #s35<:(Rational{#s34} where #s34<:Integer)}",
    "page": "Docstrings",
    "title": "GaloisFields.char",
    "category": "method",
    "text": "p = char(GaloisField(3)) # returns 3\n\nReturn the characteristic of a finite field, or 0 for <:Integer or <:Rational{<Integer}.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GaloisFields.AbstractExtensionField",
    "page": "Docstrings",
    "title": "GaloisFields.AbstractExtensionField",
    "category": "type",
    "text": "abstract type AbstractExtensionField <: AbstractGaloisField end\n\nA type representing a finite extension of an underlying finite field.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GaloisFields.AbstractGaloisField",
    "page": "Docstrings",
    "title": "GaloisFields.AbstractGaloisField",
    "category": "type",
    "text": "abstract type AbstractGaloisField <: Number end\n\nA type representing finite fields.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GaloisFields.ExtensionField",
    "page": "Docstrings",
    "title": "GaloisFields.ExtensionField",
    "category": "type",
    "text": "F = ExtensionField{F <: AbstractGaloisField, N, α, MinPoly}\n\nAlgebraic extension of a finite field F of degree N.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GaloisFields.PrimeField",
    "page": "Docstrings",
    "title": "GaloisFields.PrimeField",
    "category": "type",
    "text": "PrimeField{I<:Integer, p}\n\nA type representing an element in ℤ/pℤ.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GaloisFields.Reduced",
    "page": "Docstrings",
    "title": "GaloisFields.Reduced",
    "category": "type",
    "text": "Reduced()\n\nA helper singleton used for asserting that an input value has already been reduced mod p.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GaloisFields.defaultshow-Tuple{Any,Any}",
    "page": "Docstrings",
    "title": "GaloisFields.defaultshow",
    "category": "method",
    "text": "defaultshow(io, t)\n\nOverloading display of types can be a bit hairy; I\'ve seen a declaration like\n\nshow(..., ::Type{<:Val{B}}) where B\n\nbeing called for non-concrete types. (I haven\'t dug deep enough to find a nice minimal example.)\n\nThat\'s why all show overloads for types do\n\n!isconcretetype(t) && return defaultshow(io, t)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [GaloisFields]\nOrder = [:type, :function]"
},

]}
