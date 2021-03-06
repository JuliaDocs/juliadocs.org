var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#JSONWebTokens.jl-1",
    "page": "Readme",
    "title": "JSONWebTokens.jl",
    "category": "section",
    "text": "(Image: License) (Image: Build Status) (Image: codecov.io)Secure your Julia APIs with JWT."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": ""
},

{
    "location": "#For-HMAC-RSA-Algorithms-1",
    "page": "Readme",
    "title": "For HMAC RSA Algorithms",
    "category": "section",
    "text": "Encode:import JSONWebTokens\nclaims_dict = Dict( \"sub\" => \"1234567890\", \"name\" => \"John Doe\", \"iat\" => 1516239022)\nencoding = JSONWebTokens.HS256(\"secretkey\") # select HS256 encoding\njwt = JSONWebTokens.encode(encoding, claims_dict)\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9obiBEb2UiLCJzdWIiOiIxMjM0NTY3ODkwIiwiaWF0IjoxNTE2MjM5MDIyfQ.TjUTSL0RQayQG-y_h2Tl3FmAgxhC0fYtmeiU7jnMdXY\"Decode:JSONWebTokens.decode(encoding, jwt)Dict{String,Any} with 3 entries:\n  \"name\" => \"John Doe\"\n  \"sub\"  => \"1234567890\"\n  \"iat\"  => 1516239022"
},

{
    "location": "#For-RSASSA-RSA-Algorithms-1",
    "page": "Readme",
    "title": "For RSASSA RSA Algorithms",
    "category": "section",
    "text": "First, generate public and private keys. You can use openssl.$ openssl genrsa -out private.pem 2048\n$ openssl rsa -in private.pem -out public.pem -outform PEM -puboutUse the private key to encode.import JSONWebTokens\nclaims_dict = Dict( \"sub\" => \"1234567890\", \"name\" => \"John Doe\", \"iat\" => 1516239022)\nrsa_private = JSONWebTokens.RS256(\"private.pem\") # Use the filepath to private.pem\njwt = JSONWebTokens.encode(rsa_private, claims_dict)\"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9obiBEb2UiLCJzdWIiOiIxMjM0NTY3ODkwIiwiaWF0IjoxNTE2MjM5MDIyfQ.HUXm8CAiY9EKX3dU1Ym7bZvL7yXMu3TC9iL1do0jvM0oD2rSqY5K06KmQy1qJETYZAIZIgA6ZrX2Q3ug01DVu-Yf1Kx3-OpC39eYuBGH-7P1QgwEcizbh6dw07LGC-xshru1v_tKi9IaogiitnEMLLeGdOuCTtYw2gDRjACq2L2UiJTAgurZ_yxE3cMApo492leubNo9fADtRPpofy37Q2VivfS4XwlTkS9Bxg6jrkBhTr-ieuiBx_kAmk2Zps5f9ih-aNPXi_3p5tNH-8LUMJ5L2CTb6Ui1ghyElI7k8wfXzQIm0fGRiQu9OBnqgm2Bh9AivquXXeX6JQGxyntDqA\"Use the public key to decode.rsa_public = JSONWebTokens.RS256(\"public.pem\") # Use the filepath to public.pem\nJSONWebTokens.decode(rsa_public, jwt)Dict{String,Any} with 3 entries:\n  \"name\" => \"John Doe\"\n  \"sub\"  => \"1234567890\"\n  \"iat\"  => 1516239022"
},

{
    "location": "#Supported-Algorithms-1",
    "page": "Readme",
    "title": "Supported Algorithms",
    "category": "section",
    "text": "HS256\nHS384\nHS512\nRS256\nRS384"
},

{
    "location": "#References-1",
    "page": "Readme",
    "title": "References",
    "category": "section",
    "text": "RFC7519\njwt.io"
},

{
    "location": "autodocs/#JSONWebTokens.HS256",
    "page": "Docstrings",
    "title": "JSONWebTokens.HS256",
    "category": "type",
    "text": "HMAC SHA-256\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JSONWebTokens.HS384",
    "page": "Docstrings",
    "title": "JSONWebTokens.HS384",
    "category": "type",
    "text": "HMAC using SHA-384\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JSONWebTokens.HS512",
    "page": "Docstrings",
    "title": "JSONWebTokens.HS512",
    "category": "type",
    "text": "HMAC using SHA-512\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JSONWebTokens.RS256",
    "page": "Docstrings",
    "title": "JSONWebTokens.RS256",
    "category": "type",
    "text": "RSASSA using SHA-256 hash algorithm\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JSONWebTokens.RS384",
    "page": "Docstrings",
    "title": "JSONWebTokens.RS384",
    "category": "type",
    "text": "RSASSA using SHA-384 hash algorithm\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [JSONWebTokens]\nOrder = [:type, :function]"
},

]}
