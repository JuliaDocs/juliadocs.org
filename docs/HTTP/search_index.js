var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "#HTTP.jl-Documentation-1",
    "page": "Home",
    "title": "HTTP.jl Documentation",
    "category": "section",
    "text": "HTTP.jl is a Julia library for HTTP Messages.HTTP.request sends a HTTP Request Message and returns a Response Message.r = HTTP.request(\"GET\", \"http://httpbin.org/ip\")\nprintln(r.status)\nprintln(String(r.body))HTTP.open sends a HTTP Request Message and opens an IO stream from which the Response can be read.HTTP.open(\"GET\", \"https://tinyurl.com/bach-cello-suite-1-ogg\") do http\n    open(`vlc -q --play-and-exit --intf dummy -`, \"w\") do vlc\n        write(vlc, http)\n    end\nendPages = [\"public_interface.md\", \"internal_architecture.md\", \"internal_interface.md\"]"
},

{
    "location": "public_interface/#",
    "page": "Public Interface",
    "title": "Public Interface",
    "category": "page",
    "text": ""
},

{
    "location": "public_interface/#Public-Interface-1",
    "page": "Public Interface",
    "title": "Public Interface",
    "category": "section",
    "text": ""
},

{
    "location": "public_interface/#HTTP.request-Tuple{String,HTTP.URIs.URI,Array{Pair{SubString{String},SubString{String}},1},Any}",
    "page": "Public Interface",
    "title": "HTTP.request",
    "category": "method",
    "text": "HTTP.request(method, url [, headers [, body]]; <keyword arguments>]) -> HTTP.Response\n\nSend a HTTP Request Message and recieve a HTTP Response Message.\n\ne.g.\n\nr = HTTP.request(\"GET\", \"http://httpbin.org/ip\")\nprintln(r.status)\nprintln(String(r.body))\n\nheaders can be any collection where [string(k) => string(v) for (k,v) in headers] yields Vector{Pair}. e.g. a Dict(), a Vector{Tuple}, a Vector{Pair} or an iterator.\n\nbody can take a number of forms:\n\na String, a Vector{UInt8} or any T accepted by write(::IO, ::T)\na collection of String or AbstractVector{UInt8} or IO streams or items of any type T accepted by write(::IO, ::T...)\na readable IO stream or any IO-like type T for which eof(T) and readavailable(T) are defined.\n\nThe HTTP.Response struct contains:\n\nstatus::Int16 e.g. 200\nheaders::Vector{Pair{String,String}}  e.g. [\"Server\" => \"Apache\", \"Content-Type\" => \"text/html\"]\nbody::Vector{UInt8}, the Response Body bytes  (empty if a response_stream was specified in the request).\n\nFunctions HTTP.get, HTTP.put, HTTP.post and HTTP.head are defined as shorthand for HTTP.request(\"GET\", ...), etc.\n\nHTTP.request and HTTP.open also accept optional keyword parameters.\n\ne.g.\n\nHTTP.request(\"GET\", \"http://httpbin.org/ip\"; retries=4, cookies=true)\n\nHTTP.get(\"http://s3.us-east-1.amazonaws.com/\"; aws_authorization=true)\n\nconf = (readtimeout = 10,\n        pipeline_limit = 4,\n        retry = false,\n        redirect = false)\n\nHTTP.get(\"http://httpbin.org/ip\"; conf..)\nHTTP.put(\"http://httpbin.org/put\", [], \"Hello\"; conf..)\n\nURL options\n\nquery = nothing, replaces the query part of url.\n\nStreaming options\n\nresponse_stream = nothing, a writeable IO stream or any IO-like  type T for which write(T, AbstractVector{UInt8}) is defined.\nverbose = 0, set to 1 or 2 for extra message logging.\n\nConnection Pool options\n\nconnection_limit = 8, number of concurrent connections to each host:port.\npipeline_limit = 16, number of concurrent requests per connection.\nreuse_limit = nolimit, number of times a connection is reused after the                          first request.\nsocket_type = TCPSocket\n\nTimeout options\n\nreadtimeout = 60, close the connection if no data is recieved for this many seconds. Use readtimeout = 0 to disable.\n\nRetry options\n\nretry = true, retry idempotent requests in case of error.\nretries = 4, number of times to retry.\nretry_non_idempotent = false, retry non-idempotent requests too. e.g. POST.\n\nRedirect options\n\nredirect = true, follow 3xx redirect responses.\nredirect_limit = 3, number of times to redirect.\nforwardheaders = true, forward original headers on redirect.\n\nStatus Exception options\n\nstatus_exception = true, throw HTTP.StatusError for response status >= 300.\n\nSSLContext options\n\nrequire_ssl_verification = false, pass MBEDTLS_SSL_VERIFY_REQUIRED to the mbed TLS library. \"... peer must present a valid certificate, handshake is aborted if   verification failed.\"\nsslconfig = SSLConfig(require_ssl_verification)\n\nBasic Authenticaiton options\n\nbasic_authorization=false, add Authorization: Basic header using credentials from url userinfo.\n\nAWS Authenticaiton options\n\naws_authorization = false, enable AWS4 Authentication.\naws_service = split(url.host, \".\")[1]\naws_region = split(url.host, \".\")[2]\naws_access_key_id = ENV[\"AWS_ACCESS_KEY_ID\"]\naws_secret_access_key = ENV[\"AWS_SECRET_ACCESS_KEY\"]\naws_session_token = get(ENV, \"AWS_SESSION_TOKEN\", \"\")\nbody_sha256 = digest(MD_SHA256, body),\nbody_md5 = digest(MD_MD5, body),\n\nCookie options\n\ncookies = false, enable cookies.\ncookiejar::Dict{String, Set{Cookie}}=default_cookiejar\n\nCananoincalization options\n\ncanonicalize_headers = false, rewrite request and response headers in Canonical-Camel-Dash-Format.\n\nRequest Body Examples\n\nString body:\n\nHTTP.request(\"POST\", \"http://httpbin.org/post\", [], \"post body data\")\n\nStream body from file:\n\nio = open(\"post_data.txt\", \"r\")\nHTTP.request(\"POST\", \"http://httpbin.org/post\", [], io)\n\nGenerator body:\n\nchunks = (\"chunk$i\" for i in 1:1000)\nHTTP.request(\"POST\", \"http://httpbin.org/post\", [], chunks)\n\nCollection body:\n\nchunks = [preamble_chunk, data_chunk, checksum(data_chunk)]\nHTTP.request(\"POST\", \"http://httpbin.org/post\", [], chunks)\n\nopen() do io body:\n\nHTTP.open(\"POST\", \"http://httpbin.org/post\") do io\n    write(io, preamble_chunk)\n    write(io, data_chunk)\n    write(io, checksum(data_chunk))\nend\n\nResponse Body Examples\n\nString body:\n\nr = HTTP.request(\"GET\", \"http://httpbin.org/get\")\nprintln(String(r.body))\n\nStream body to file:\n\nio = open(\"get_data.txt\", \"w\")\nr = HTTP.request(\"GET\", \"http://httpbin.org/get\", response_stream=io)\nclose(io)\nprintln(read(\"get_data.txt\"))\n\nStream body through buffer:\n\nio = Base.BufferStream()\n@async while !eof(io)\n    bytes = readavailable(io))\n    println(\"GET data: $bytes\")\nend\nr = HTTP.request(\"GET\", \"http://httpbin.org/get\", response_stream=io)\nclose(io)\n\nStream body through open() do io:\n\nr = HTTP.open(\"GET\", \"http://httpbin.org/stream/10\") do io\n   while !eof(io)\n       println(String(readavailable(io)))\n   end\nend\n\nusing HTTP.IOExtras\n\nHTTP.open(\"GET\", \"https://tinyurl.com/bach-cello-suite-1-ogg\") do http\n    n = 0\n    r = startread(http)\n    l = parse(Int, header(r, \"Content-Length\"))\n    open(`vlc -q --play-and-exit --intf dummy -`, \"w\") do vlc\n        while !eof(http)\n            bytes = readavailable(http)\n            write(vlc, bytes)\n            n += length(bytes)\n            println(\"streamed $n-bytes $((100*n)÷l)%\\u1b[1A\")\n        end\n    end\nend\n\nRequest and Response Body Examples\n\nString bodies:\n\nr = HTTP.request(\"POST\", \"http://httpbin.org/post\", [], \"post body data\")\nprintln(String(r.body))\n\nInterfacing with RESTful JSON APIs:\n\nusing JSON\nparams = Dict(\"user\"=>\"RAO...tjN\", \"token\"=>\"NzU...Wnp\", \"message\"=>\"Hello!\")\nbase_url = \"http://api.domain.com\"\nendpoint = \"/1/messages.json\"\nurl = base_url * endpoint\nr = HTTP.request(\"POST\", url,\n             [\"Content-Type\" => \"application/json\"],\n             JSON.json(params))\nprintln(JSON.parse(String(r.body)))\n\nStream bodies from and to files:\n\nin = open(\"foo.png\", \"r\")\nout = open(\"foo.jpg\", \"w\")\nHTTP.request(\"POST\", \"http://convert.com/png2jpg\", [], in, response_stream=out)\n\nStream bodies through: open() do io:\n\nusing HTTP.IOExtras\n\nHTTP.open(\"POST\", \"http://music.com/play\") do io\n    write(io, JSON.json([\n        \"auth\" => \"12345XXXX\",\n        \"song_id\" => 7,\n    ]))\n    r = startread(io)\n    @show r.status\n    while !eof(io)\n        bytes = readavailable(io))\n        play_audio(bytes)\n    end\nend\n\n\n\n\n\n"
},

{
    "location": "public_interface/#HTTP.open",
    "page": "Public Interface",
    "title": "HTTP.open",
    "category": "function",
    "text": "HTTP.open(method, url, [,headers]) do io\n    write(io, body)\n    [startread(io) -> HTTP.Response]\n    while !eof(io)\n        readavailable(io) -> AbstractVector{UInt8}\n    end\nend -> HTTP.Response\n\nThe HTTP.open API allows the Request Body to be written to (and/or the Response Body to be read from) an IO stream.\n\ne.g. Streaming an audio file to the vlc player:\n\nHTTP.open(\"GET\", \"https://tinyurl.com/bach-cello-suite-1-ogg\") do http\n    open(`vlc -q --play-and-exit --intf dummy -`, \"w\") do vlc\n        write(vlc, http)\n    end\nend\n\n\n\n\n\n"
},

{
    "location": "public_interface/#HTTP.get",
    "page": "Public Interface",
    "title": "HTTP.get",
    "category": "function",
    "text": "HTTP.get(url [, headers]; <keyword arguments>) -> HTTP.Response\n\nShorthand for HTTP.request(\"GET\", ...). See HTTP.request.\n\n\n\n\n\n"
},

{
    "location": "public_interface/#HTTP.put",
    "page": "Public Interface",
    "title": "HTTP.put",
    "category": "function",
    "text": "HTTP.put(url, headers, body; <keyword arguments>) -> HTTP.Response\n\nShorthand for HTTP.request(\"PUT\", ...). See HTTP.request.\n\n\n\n\n\n"
},

{
    "location": "public_interface/#HTTP.post",
    "page": "Public Interface",
    "title": "HTTP.post",
    "category": "function",
    "text": "HTTP.post(url, headers, body; <keyword arguments>) -> HTTP.Response\n\nShorthand for HTTP.request(\"POST\", ...). See HTTP.request.\n\n\n\n\n\n"
},

{
    "location": "public_interface/#HTTP.head",
    "page": "Public Interface",
    "title": "HTTP.head",
    "category": "function",
    "text": "HTTP.head(url; <keyword arguments>) -> HTTP.Response\n\nShorthand for HTTP.request(\"HEAD\", ...). See HTTP.request.\n\n\n\n\n\n"
},

{
    "location": "public_interface/#HTTP.ExceptionRequest.StatusError",
    "page": "Public Interface",
    "title": "HTTP.ExceptionRequest.StatusError",
    "category": "type",
    "text": "The Response has a 4xx, 5xx or unrecognised status code.\n\nFields:\n\nstatus::Int16, the response status code.\nresponse the HTTP.Response\n\n\n\n\n\n"
},

{
    "location": "public_interface/#HTTP.Parsers.ParseError",
    "page": "Public Interface",
    "title": "HTTP.Parsers.ParseError",
    "category": "type",
    "text": "Parser input was invalid.\n\nFields:\n\ncode, error code\nbytes, the offending input.\n\n\n\n\n\n"
},

{
    "location": "public_interface/#HTTP.IOExtras.IOError",
    "page": "Public Interface",
    "title": "HTTP.IOExtras.IOError",
    "category": "type",
    "text": "The request terminated with due to an IO-related error.\n\nFields:\n\ne, the error.\n\n\n\n\n\n"
},

{
    "location": "public_interface/#Requests-1",
    "page": "Public Interface",
    "title": "Requests",
    "category": "section",
    "text": "HTTP.request(::String,::HTTP.URIs.URI,::Array{Pair{SubString{String},SubString{String}},1},::Any)\nHTTP.open\nHTTP.get\nHTTP.put\nHTTP.post\nHTTP.headRequest functions may throw the following exceptions:HTTP.StatusError\nHTTP.ParseError\nHTTP.IOErrorSockets.DNSError"
},

{
    "location": "public_interface/#HTTP.URIs.URI",
    "page": "Public Interface",
    "title": "HTTP.URIs.URI",
    "category": "type",
    "text": "HTTP.URI(; scheme=\"\", host=\"\", port=\"\", etc...)\nHTTP.URI(str) = parse(HTTP.URI, str::String)\n\nA type representing a valid uri. Can be constructed from distinct parts using the various supported keyword arguments. With a raw, already-encoded uri string, use parse(HTTP.URI, str) to parse the HTTP.URI directly. The HTTP.URI constructors will automatically escape any provided query arguments, typically provided as \"key\"=>\"value\"::Pair or Dict(\"key\"=>\"value\"). Note that multiple values for a single query key can provided like Dict(\"key\"=>[\"value1\", \"value2\"]).\n\nThe URI struct stores the compelte URI in the uri::String field and the component parts in the following SubString fields:\n\nscheme, e.g. \"http\" or \"https\"\nuserinfo, e.g. \"username:password\"\nhost e.g. \"julialang.org\"\nport e.g. \"80\" or \"\"\npath e.g \"/\"\nquery e.g. \"Foo=1&Bar=2\"\nfragment\n\nThe HTTP.resource(::URI) function returns a target-resource string for the URI RFC7230 5.3. e.g. \"$path?$query#$fragment\".\n\nThe HTTP.queryparams(::URI) function returns a Dict containing the query.\n\n\n\n\n\n"
},

{
    "location": "public_interface/#HTTP.URIs.escapeuri",
    "page": "Public Interface",
    "title": "HTTP.URIs.escapeuri",
    "category": "function",
    "text": "percent-encode a string, dict, or pair for a uri\n\n\n\n\n\n"
},

{
    "location": "public_interface/#HTTP.URIs.unescapeuri",
    "page": "Public Interface",
    "title": "HTTP.URIs.unescapeuri",
    "category": "function",
    "text": "unescape a percent-encoded uri/url\n\n\n\n\n\n"
},

{
    "location": "public_interface/#HTTP.URIs.splitpath",
    "page": "Public Interface",
    "title": "HTTP.URIs.splitpath",
    "category": "function",
    "text": "Splits the path into components See: http://tools.ietf.org/html/rfc3986#section-3.3\n\n\n\n\n\n"
},

{
    "location": "public_interface/#Base.isvalid-Tuple{HTTP.URIs.URI}",
    "page": "Public Interface",
    "title": "Base.isvalid",
    "category": "method",
    "text": "checks if a HTTP.URI is valid\n\n\n\n\n\n"
},

{
    "location": "public_interface/#URIs-1",
    "page": "Public Interface",
    "title": "URIs",
    "category": "section",
    "text": "HTTP.URI\nHTTP.URIs.escapeuri\nHTTP.URIs.unescapeuri\nHTTP.URIs.splitpath\nBase.isvalid(::HTTP.URIs.URI)"
},

{
    "location": "public_interface/#HTTP.Cookies.Cookie",
    "page": "Public Interface",
    "title": "HTTP.Cookies.Cookie",
    "category": "type",
    "text": "Cookie()\nCookie(; kwargs...)\nCookie(name, value; kwargs...)\n\nA Cookie represents an HTTP cookie as sent in the Set-Cookie header of an HTTP response or the Cookie header of an HTTP request. Supported fields (which can be set using keyword arguments) include:\n\nname: name of the cookie\nvalue: value of the cookie\npath: applicable path for the cookie\ndomain: applicable domain for the cookie\nexpires: a Dates.DateTime representing when the cookie should expire\nmaxage: maxage == 0 means no max age, maxage < 0 means delete cookie now, max age > 0 means the # of seconds until expiration\nsecure::Bool: secure cookie attribute\nhttponly::Bool: httponly cookie attribute\nhostonly::Bool: hostonly cookie attribute\n\nSee http:#tools.ietf.org/html/rfc6265 for details.\n\n\n\n\n\n"
},

{
    "location": "public_interface/#Cookies-1",
    "page": "Public Interface",
    "title": "Cookies",
    "category": "section",
    "text": "HTTP.Cookie"
},

{
    "location": "public_interface/#HTTP.sniff",
    "page": "Public Interface",
    "title": "HTTP.sniff",
    "category": "function",
    "text": "HTTP.sniff(content::Union{Vector{UInt8}, String, IO}) => String (mimetype)\n\nHTTP.sniff will look at the first 512 bytes of content to try and determine a valid mimetype. If a mimetype can\'t be determined appropriately, \"application/octet-stream\" is returned.\n\nSupports JSON detection through the HTTP.isjson(content) function.\n\n\n\n\n\n"
},

{
    "location": "public_interface/#HTTP.Strings.escapehtml",
    "page": "Public Interface",
    "title": "HTTP.Strings.escapehtml",
    "category": "function",
    "text": "escapeHTML(i::String)\n\nReturns a string with special HTML characters escaped: &, <, >, \", \'\n\n\n\n\n\n"
},

{
    "location": "public_interface/#Utilities-1",
    "page": "Public Interface",
    "title": "Utilities",
    "category": "section",
    "text": "HTTP.sniff\nHTTP.Strings.escapehtml"
},

{
    "location": "public_interface/#Server-/-Handlers-1",
    "page": "Public Interface",
    "title": "Server / Handlers",
    "category": "section",
    "text": "HTTP.listen\nHTTP.serve\nHTTP.Handlers\nHTTP.handle\nHTTP.RequestHandlerFunction\nHTTP.StreamHandlerFunction\nHTTP.Router\nHTTP.@register"
},

{
    "location": "internal_architecture/#",
    "page": "Internal Architecture",
    "title": "Internal Architecture",
    "category": "page",
    "text": ""
},

{
    "location": "internal_architecture/#HTTP.Layer",
    "page": "Internal Architecture",
    "title": "HTTP.Layer",
    "category": "type",
    "text": "Request Execution Stack\n\nThe Request Execution Stack is separated into composable layers.\n\nEach layer is defined by a nested type Layer{Next} where the Next parameter defines the next layer in the stack. The request method for each layer takes a Layer{Next} type as its first argument and dispatches the request to the next layer using request(Next, ...).\n\nThe example below defines three layers and three stacks each with a different combination of layers.\n\nabstract type Layer end\nabstract type Layer1{Next <: Layer} <: Layer end\nabstract type Layer2{Next <: Layer} <: Layer end\nabstract type Layer3 <: Layer end\n\nrequest(::Type{Layer1{Next}}, data) where Next = \"L1\", request(Next, data)\nrequest(::Type{Layer2{Next}}, data) where Next = \"L2\", request(Next, data)\nrequest(::Type{Layer3}, data) = \"L3\", data\n\nconst stack1 = Layer1{Layer2{Layer3}}\nconst stack2 = Layer2{Layer1{Layer3}}\nconst stack3 = Layer1{Layer3}\n\njulia> request(stack1, \"foo\")\n(\"L1\", (\"L2\", (\"L3\", \"foo\")))\n\njulia> request(stack2, \"bar\")\n(\"L2\", (\"L1\", (\"L3\", \"bar\")))\n\njulia> request(stack3, \"boo\")\n(\"L1\", (\"L3\", \"boo\"))\n\nThis stack definition pattern gives the user flexibility in how layers are combined but still allows Julia to do whole-stack comiple time optimistations.\n\ne.g. the request(stack1, \"foo\") call above is optimised down to a single function:\n\njulia> code_typed(request, (Type{stack1}, String))[1].first\nCodeInfo(:(begin\n    return (Core.tuple)(\"L1\", (Core.tuple)(\"L2\", (Core.tuple)(\"L3\", data)))\nend))\n\n\n\n\n\n"
},

{
    "location": "internal_architecture/#HTTP.stack",
    "page": "Internal Architecture",
    "title": "HTTP.stack",
    "category": "function",
    "text": "The stack() function returns the default HTTP Layer-stack type. This type is passed as the first parameter to the HTTP.request function.\n\nstack() accepts optional keyword arguments to enable/disable specific layers in the stack: request(method, args...; kw...) request(stack(;kw...), args...; kw...)\n\nThe minimal request execution stack is:\n\nstack = MessageLayer{ConnectionPoolLayer{StreamLayer}}\n\nThe figure below illustrates the full request exection stack and its relationship with HTTP.Response, HTTP.Parsers, HTTP.Stream and the HTTP.ConnectionPool.\n\n ┌────────────────────────────────────────────────────────────────────────────┐\n │                                            ┌───────────────────┐           │\n │  HTTP.jl Request Execution Stack           │ HTTP.ParsingError ├ ─ ─ ─ ─ ┐ │\n │                                            └───────────────────┘           │\n │                                            ┌───────────────────┐         │ │\n │                                            │ HTTP.IOError      ├ ─ ─ ─     │\n │                                            └───────────────────┘      │  │ │\n │                                            ┌───────────────────┐           │\n │                                            │ HTTP.StatusError  │─ ─   │  │ │\n │                                            └───────────────────┘   │       │\n │                                            ┌───────────────────┐      │  │ │\n │     request(method, url, headers, body) -> │ HTTP.Response     │   │       │\n │             ──────────────────────────     └─────────▲─────────┘      │  │ │\n │                           ║                          ║             │       │\n │   ┌────────────────────────────────────────────────────────────┐      │  │ │\n │   │ request(RedirectLayer,     method, ::URI, ::Headers, body) │   │       │\n │   ├────────────────────────────────────────────────────────────┤      │  │ │\n │   │ request(BasicAuthLayer,    method, ::URI, ::Headers, body) │   │       │\n │   ├────────────────────────────────────────────────────────────┤      │  │ │\n │   │ request(CookieLayer,       method, ::URI, ::Headers, body) │   │       │\n │   ├────────────────────────────────────────────────────────────┤      │  │ │\n │   │ request(CanonicalizeLayer, method, ::URI, ::Headers, body) │   │       │\n │   ├────────────────────────────────────────────────────────────┤      │  │ │\n │   │ request(MessageLayer,      method, ::URI, ::Headers, body) │   │       │\n │   ├────────────────────────────────────────────────────────────┤      │  │ │\n │   │ request(AWS4AuthLayer,             ::URI, ::Request, body) │   │       │\n │   ├────────────────────────────────────────────────────────────┤      │  │ │\n │   │ request(RetryLayer,                ::URI, ::Request, body) │   │       │\n │   ├────────────────────────────────────────────────────────────┤      │  │ │\n │   │ request(ExceptionLayer,            ::URI, ::Request, body) ├ ─ ┘       │\n │   ├────────────────────────────────────────────────────────────┤      │  │ │\n┌┼───┤ request(ConnectionPoolLayer,       ::URI, ::Request, body) ├ ─ ─ ─     │\n││   ├────────────────────────────────────────────────────────────┤         │ │\n││   │ request(DebugLayer,                ::IO,  ::Request, body) │           │\n││   ├────────────────────────────────────────────────────────────┤         │ │\n││   │ request(TimeoutLayer,              ::IO,  ::Request, body) │           │\n││   ├────────────────────────────────────────────────────────────┤         │ │\n││   │ request(StreamLayer,               ::IO,  ::Request, body) │           │\n││   └──────────────┬───────────────────┬─────────────────────────┘         │ │\n│└──────────────────┼────────║──────────┼───────────────║─────────────────────┘\n│                   │        ║          │               ║                   │  \n│┌──────────────────▼───────────────┐   │  ┌──────────────────────────────────┐\n││ HTTP.Request                     │   │  │ HTTP.Response                  │ │\n││                                  │   │  │                                  │\n││ method::String                   ◀───┼──▶ status::Int                    │ │\n││ target::String                   │   │  │ headers::Vector{Pair}            │\n││ headers::Vector{Pair}            │   │  │ body::Vector{UInt8}            │ │\n││ body::Vector{UInt8}              │   │  │                                  │\n│└──────────────────▲───────────────┘   │  └───────────────▲────────────────┼─┘\n│┌──────────────────┴────────║──────────▼───────────────║──┴──────────────────┐\n││ HTTP.Stream <:IO          ║           ╔══════╗       ║                   │ │\n││   ┌───────────────────────────┐       ║   ┌──▼─────────────────────────┐   │\n││   │ startwrite(::Stream)      │       ║   │ startread(::Stream)        │ │ │\n││   │ write(::Stream, body)     │       ║   │ read(::Stream) -> body     │   │\n││   │ ...                       │       ║   │ ...                        │ │ │\n││   │ closewrite(::Stream)      │       ║   │ closeread(::Stream)        │   │\n││   └───────────────────────────┘       ║   └────────────────────────────┘ │ │\n│└───────────────────────────║────────┬──║──────║───────║──┬──────────────────┘\n│┌──────────────────────────────────┐ │  ║ ┌────▼───────║──▼────────────────┴─┐\n││ HTTP.Messages                    │ │  ║ │ HTTP.Parsers                     │\n││                                  │ │  ║ │                                  │\n││ writestartline(::IO, ::Request)  │ │  ║ │ parse_status_line(bytes, ::Req\') │\n││ writeheaders(::IO, ::Request)    │ │  ║ │ parse_header_field(bytes, ::Req\')│\n│└──────────────────────────────────┘ │  ║ └──────────────────────────────────┘\n│                            ║        │  ║                                     \n│┌───────────────────────────║────────┼──║────────────────────────────────────┐\n└▶ HTTP.ConnectionPool       ║        │  ║                                    │\n │                     ┌──────────────▼────────┐ ┌───────────────────────┐    │\n │ getconnection() ->  │ HTTP.Transaction <:IO │ │ HTTP.Transaction <:IO │    │\n │                     └───────────────────────┘ └───────────────────────┘    │\n │                           ║    ╲│╱    ║                  ╲│╱               │\n │                           ║     │     ║                   │                │\n │                     ┌───────────▼───────────┐ ┌───────────▼───────────┐    │\n │              pool: [│ HTTP.Connection       │,│ HTTP.Connection       │...]│\n │                     └───────────┬───────────┘ └───────────┬───────────┘    │\n │                           ║     │     ║                   │                │\n │                     ┌───────────▼───────────┐ ┌───────────▼───────────┐    │\n │                     │ Base.TCPSocket <:IO   │ │MbedTLS.SSLContext <:IO│    │\n │                     └───────────────────────┘ └───────────┬───────────┘    │\n │                           ║           ║                   │                │\n │                           ║           ║       ┌───────────▼───────────┐    │\n │                           ║           ║       │ Base.TCPSocket <:IO   │    │\n │                           ║           ║       └───────────────────────┘    │\n └───────────────────────────║───────────║────────────────────────────────────┘\n                             ║           ║                                     \n ┌───────────────────────────║───────────║──────────────┐  ┏━━━━━━━━━━━━━━━━━━┓\n │ HTTP Server               ▼                          │  ┃ data flow: ════▶ ┃\n │                        Request     Response          │  ┃ reference: ────▶ ┃\n └──────────────────────────────────────────────────────┘  ┗━━━━━━━━━━━━━━━━━━┛\n\nSee docs/src/layers.monopic.\n\n\n\n\n\n"
},

{
    "location": "internal_architecture/#Internal-Architecture-1",
    "page": "Internal Architecture",
    "title": "Internal Architecture",
    "category": "section",
    "text": "HTTP.Layer\nHTTP.stack"
},

{
    "location": "internal_architecture/#HTTP.RedirectRequest.RedirectLayer",
    "page": "Internal Architecture",
    "title": "HTTP.RedirectRequest.RedirectLayer",
    "category": "type",
    "text": "request(RedirectLayer, method, ::URI, headers, body) -> HTTP.Response\n\nRedirects the request in the case of 3xx response status.\n\n\n\n\n\n"
},

{
    "location": "internal_architecture/#HTTP.BasicAuthRequest.BasicAuthLayer",
    "page": "Internal Architecture",
    "title": "HTTP.BasicAuthRequest.BasicAuthLayer",
    "category": "type",
    "text": "request(BasicAuthLayer, method, ::URI, headers, body) -> HTTP.Response\n\nAdd Authorization: Basic header using credentials from url userinfo.\n\n\n\n\n\n"
},

{
    "location": "internal_architecture/#HTTP.CookieRequest.CookieLayer",
    "page": "Internal Architecture",
    "title": "HTTP.CookieRequest.CookieLayer",
    "category": "type",
    "text": "request(CookieLayer, method, ::URI, headers, body) -> HTTP.Response\n\nAdd locally stored Cookies to the request headers. Store new Cookies found in the response headers.\n\n\n\n\n\n"
},

{
    "location": "internal_architecture/#HTTP.CanonicalizeRequest.CanonicalizeLayer",
    "page": "Internal Architecture",
    "title": "HTTP.CanonicalizeRequest.CanonicalizeLayer",
    "category": "type",
    "text": "request(CanonicalizeLayer, method, ::URI, headers, body) -> HTTP.Response\n\nRewrite request and response headers in Canonical-Camel-Dash-Format.\n\n\n\n\n\n"
},

{
    "location": "internal_architecture/#HTTP.MessageRequest.MessageLayer",
    "page": "Internal Architecture",
    "title": "HTTP.MessageRequest.MessageLayer",
    "category": "type",
    "text": "request(MessageLayer, method, ::URI, headers, body) -> HTTP.Response\n\nConstruct a Request object and set mandatory headers.\n\n\n\n\n\n"
},

{
    "location": "internal_architecture/#HTTP.AWS4AuthRequest.AWS4AuthLayer",
    "page": "Internal Architecture",
    "title": "HTTP.AWS4AuthRequest.AWS4AuthLayer",
    "category": "type",
    "text": "request(AWS4AuthLayer, ::URI, ::Request, body) -> HTTP.Response\n\nAdd a AWS Signature Version 4 Authorization header to a Request.\n\nCredentials are read from environment variables AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY and AWS_SESSION_TOKEN.\n\n\n\n\n\n"
},

{
    "location": "internal_architecture/#HTTP.RetryRequest.RetryLayer",
    "page": "Internal Architecture",
    "title": "HTTP.RetryRequest.RetryLayer",
    "category": "type",
    "text": "request(RetryLayer, ::URI, ::Request, body) -> HTTP.Response\n\nRetry the request if it throws a recoverable exception.\n\nBase.retry and Base.ExponentialBackOff implement a randomised exponentially increasing delay is introduced between attempts to avoid exacerbating network congestion.\n\nMethods of isrecoverable(e) define which exception types lead to a retry. e.g. HTTP.IOError, Sockets.DNSError, Base.EOFError and HTTP.StatusError (if status is `5xx).\n\n\n\n\n\n"
},

{
    "location": "internal_architecture/#HTTP.ExceptionRequest.ExceptionLayer",
    "page": "Internal Architecture",
    "title": "HTTP.ExceptionRequest.ExceptionLayer",
    "category": "type",
    "text": "request(ExceptionLayer, ::URI, ::Request, body) -> HTTP.Response\n\nThrow a StatusError if the request returns an error response status.\n\n\n\n\n\n"
},

{
    "location": "internal_architecture/#HTTP.ConnectionRequest.ConnectionPoolLayer",
    "page": "Internal Architecture",
    "title": "HTTP.ConnectionRequest.ConnectionPoolLayer",
    "category": "type",
    "text": "request(ConnectionPoolLayer, ::URI, ::Request, body) -> HTTP.Response\n\nRetrieve an IO connection from the ConnectionPool.\n\nClose the connection if the request throws an exception. Otherwise leave it open so that it can be reused.\n\nIO related exceptions from Base are wrapped in HTTP.IOError. See isioerror.\n\n\n\n\n\n"
},

{
    "location": "internal_architecture/#HTTP.TimeoutRequest.TimeoutLayer",
    "page": "Internal Architecture",
    "title": "HTTP.TimeoutRequest.TimeoutLayer",
    "category": "type",
    "text": "request(TimeoutLayer, ::IO, ::Request, body) -> HTTP.Response\n\nClose IO if no data has been received for timeout seconds.\n\n\n\n\n\n"
},

{
    "location": "internal_architecture/#HTTP.StreamRequest.StreamLayer",
    "page": "Internal Architecture",
    "title": "HTTP.StreamRequest.StreamLayer",
    "category": "type",
    "text": "request(StreamLayer, ::IO, ::Request, body) -> HTTP.Response\n\nCreate a Stream to send a Request and body to an IO stream and read the response.\n\nSend the Request body in a background task and begins reading the response immediately so that the transmission can be aborted if the Response status indicates that the server does not wish to receive the message body. RFC7230 6.5.\n\n\n\n\n\n"
},

{
    "location": "internal_architecture/#Request-Execution-Layers-1",
    "page": "Internal Architecture",
    "title": "Request Execution Layers",
    "category": "section",
    "text": "HTTP.RedirectLayer\nHTTP.BasicAuthLayer\nHTTP.CookieLayer\nHTTP.CanonicalizeLayer\nHTTP.MessageLayer\nHTTP.AWS4AuthLayer\nHTTP.RetryLayer\nHTTP.ExceptionLayer\nHTTP.ConnectionPoolLayer\nHTTP.TimeoutLayer\nHTTP.StreamLayer"
},

{
    "location": "internal_architecture/#HTTP.Parsers",
    "page": "Internal Architecture",
    "title": "HTTP.Parsers",
    "category": "module",
    "text": "The parser separates a raw HTTP Message into its component parts.\n\nIf the input data is invalid the Parser throws a HTTP.ParseError.\n\nThe parse_* functions processes a single element of a HTTP Message at a time and return a SubString containing the unused portion of the input.\n\nThe Parser does not interpret the Message Headers. It is beyond the scope of the Parser to deal with repeated header fields, multi-line values, cookies or case normalization.\n\nThe Parser has no knowledge of the high-level Request and Response structs defined in Messages.jl. However, the Request and Response structs must have field names compatible with those expected by the parse_status_line! and parse_request_line! functions.\n\n\n\n\n\n"
},

{
    "location": "internal_architecture/#Parser-1",
    "page": "Internal Architecture",
    "title": "Parser",
    "category": "section",
    "text": "Source: Parsers.jlHTTP.Parsers"
},

{
    "location": "internal_architecture/#HTTP.Messages",
    "page": "Internal Architecture",
    "title": "HTTP.Messages",
    "category": "module",
    "text": "The Messages module defines structs that represent HTTP.Request and HTTP.Response Messages.\n\nThe Response struct has a request field that points to the corresponding Request; and the Request struct has a response field. The Request struct also has a parent field that points to a Response in the case of HTTP Redirect.\n\nThe Messages module defines IO read and write methods for Messages but it does not deal with URIs, creating connections, or executing requests.\n\nThe read methods throw EOFError exceptions if input data is incomplete. and call parser functions that may throw HTTP.ParsingError exceptions. The read and write methods may also result in low level IO exceptions.\n\nSending Messages\n\nMessages are formatted and written to an IO stream by Base.write(::IO,::HTTP.Messages.Message) and or HTTP.Messages.writeheaders.\n\nReceiving Messages\n\nMessages are parsed from IO stream data by HTTP.Messages.readheaders. This function calls HTTP.Parsers.parse_header_field and passes each header-field to HTTP.Messages.appendheader.\n\nreadheaders relies on HTTP.IOExtras.unread! to push excess data back to the input stream.\n\nHeaders\n\nHeaders are represented by Vector{Pair{String,String}}. As compared to Dict{String,String} this allows repeated header fields and preservation of order.\n\nHeader values can be accessed by name using HTTP.Messages.header and HTTP.Messages.setheader (case-insensitive).\n\nThe HTTP.Messages.appendheader function handles combining multi-line values, repeated header fields and special handling of multiple Set-Cookie headers.\n\nBodies\n\nThe HTTP.Message structs represent the Message Body as Vector{UInt8}.\n\nStreaming of request and response bodies is handled by the HTTP.StreamLayer and the HTTP.Stream <: IO stream.\n\n\n\n\n\n"
},

{
    "location": "internal_architecture/#Messages-1",
    "page": "Internal Architecture",
    "title": "Messages",
    "category": "section",
    "text": "Source: Messages.jlHTTP.Messages"
},

{
    "location": "internal_architecture/#HTTP.Streams.Stream",
    "page": "Internal Architecture",
    "title": "HTTP.Streams.Stream",
    "category": "type",
    "text": "Stream(::IO, ::Request)\n\nCreates a HTTP.Stream that wraps an existing IO stream.\n\nstartwrite(::Stream) sends the Request headers to the IO stream.\nwrite(::Stream, body) sends the body (or a chunk of the body).\nclosewrite(::Stream) sends the final 0 chunk (if needed) and calls closewrite on the IO stream. When the IO stream is a HTTP.ConnectionPool.Transaction, calling closewrite releases the HTTP.ConnectionPool.Connection back into the pool for use by the next pipelined request.\nstartread(::Stream) calls startread on the IO stream then  reads and parses the Response headers.  When the IO stream is a HTTP.ConnectionPool.Transaction, calling startread waits for other pipelined responses to be read from the HTTP.ConnectionPool.Connection.\neof(::Stream) and readavailable(::Stream) parse the body from the IO  stream.\ncloseread(::Stream) reads the trailers and calls closeread on the IO  stream.  When the IO stream is a HTTP.ConnectionPool.Transaction,  calling closeread releases the readlock and allows the next pipelined  response to be read by another Stream that is waiting in startread.  If a complete response has not been recieved, closeread throws EOFError.\n\n\n\n\n\n"
},

{
    "location": "internal_architecture/#Streams-1",
    "page": "Internal Architecture",
    "title": "Streams",
    "category": "section",
    "text": "Source: Streams.jlHTTP.Streams.Stream"
},

{
    "location": "internal_architecture/#HTTP.ConnectionPool",
    "page": "Internal Architecture",
    "title": "HTTP.ConnectionPool",
    "category": "module",
    "text": "This module provides the getconnection function with support for:\n\nOpening TCP and SSL connections.\nReusing connections for multiple Request/Response Messages,\nPipelining Request/Response Messages. i.e. allowing a new Request to be sent before previous Responses have been read.\n\nThis module defines a Connection struct to manage pipelining and connection reuse and a Transaction<: IO struct to manage a single pipelined request. Methods are provided for eof, readavailable, unsafe_write and close. This allows the Transaction object to act as a proxy for the TCPSocket or SSLContext that it wraps.\n\nThe pool is a collection of open Connections.  The request function calls getconnection to retrieve a connection from the pool.  When the request function has written a Request Message it calls closewrite to signal that the Connection can be reused for writing (to send the next Request). When the request function has read the Response Message it calls closeread to signal that the Connection can be reused for reading.\n\n\n\n\n\n"
},

{
    "location": "internal_architecture/#Connections-1",
    "page": "Internal Architecture",
    "title": "Connections",
    "category": "section",
    "text": "Source: ConnectionPool.jlHTTP.ConnectionPool"
},

{
    "location": "internal_interface/#",
    "page": "Internal Interfaces",
    "title": "Internal Interfaces",
    "category": "page",
    "text": ""
},

{
    "location": "internal_interface/#Internal-Interfaces-1",
    "page": "Internal Interfaces",
    "title": "Internal Interfaces",
    "category": "section",
    "text": ""
},

{
    "location": "internal_interface/#HTTP.Parsers.find_end_of_header",
    "page": "Internal Interfaces",
    "title": "HTTP.Parsers.find_end_of_header",
    "category": "function",
    "text": "find_end_of_header(bytes) -> length or 0\n\nFind length of header delimited by \\r\\n\\r\\n or \\n\\n.\n\n\n\n\n\n"
},

{
    "location": "internal_interface/#HTTP.Parsers.find_end_of_line",
    "page": "Internal Interfaces",
    "title": "HTTP.Parsers.find_end_of_line",
    "category": "function",
    "text": "Find \\n in bytes\n\n\n\n\n\n"
},

{
    "location": "internal_interface/#HTTP.Parsers.find_end_of_trailer",
    "page": "Internal Interfaces",
    "title": "HTTP.Parsers.find_end_of_trailer",
    "category": "function",
    "text": "find_end_of_trailer(bytes) -> length or 0\n\nFind length of trailer delimited by \\r\\n\\r\\n (or starting with \\r\\n). RFC7230 4.1\n\n\n\n\n\n"
},

{
    "location": "internal_interface/#HTTP.Parsers.parse_status_line!",
    "page": "Internal Interfaces",
    "title": "HTTP.Parsers.parse_status_line!",
    "category": "function",
    "text": "Parse HTTP response-line bytes and set the status and version fields of response. Return a SubString containing the header-field lines.\n\n\n\n\n\n"
},

{
    "location": "internal_interface/#HTTP.Parsers.parse_request_line!",
    "page": "Internal Interfaces",
    "title": "HTTP.Parsers.parse_request_line!",
    "category": "function",
    "text": "Parse HTTP request-line bytes and set the method, target and version fields of request. Return a SubString containing the header-field lines.\n\n\n\n\n\n"
},

{
    "location": "internal_interface/#HTTP.Parsers.parse_header_field",
    "page": "Internal Interfaces",
    "title": "HTTP.Parsers.parse_header_field",
    "category": "function",
    "text": "Parse HTTP header-field. Return Pair(field-name => field-value) and a SubString containing the remaining header-field lines.\n\n\n\n\n\n"
},

{
    "location": "internal_interface/#HTTP.Parsers.parse_chunk_size",
    "page": "Internal Interfaces",
    "title": "HTTP.Parsers.parse_chunk_size",
    "category": "function",
    "text": "Parse HTTP chunk-size. Return number of bytes of chunk-data.\n\nchunk-size = 1*HEXDIG\n\nRFC7230 4.1\n\n\n\n\n\n"
},

{
    "location": "internal_interface/#Parser-Interface-1",
    "page": "Internal Interfaces",
    "title": "Parser Interface",
    "category": "section",
    "text": "HTTP.Parsers.find_end_of_header\nHTTP.Parsers.find_end_of_line\nHTTP.Parsers.find_end_of_trailer\nHTTP.Parsers.parse_status_line!\nHTTP.Parsers.parse_request_line!\nHTTP.Parsers.parse_header_field\nHTTP.Parsers.parse_chunk_size"
},

{
    "location": "internal_interface/#HTTP.Messages.Request",
    "page": "Internal Interfaces",
    "title": "HTTP.Messages.Request",
    "category": "type",
    "text": "Request <: Message\n\nRepresents a HTTP Request Message.\n\nmethod::String  RFC7230 3.1.1\ntarget::String  RFC7230 5.3\nversion::VersionNumber  RFC7230 2.6\nheaders::Vector{Pair{String,String}}  RFC7230 3.2\nbody::Vector{UInt8}  RFC7230 3.3\nresponse, the Response to this Request\ntxcount, number of times this Request has been sent (see RetryRequest.jl).\nparent, the Response (if any) that led to this request (e.g. in the case of a redirect).  RFC7230 6.4\n\n\n\n\n\n"
},

{
    "location": "internal_interface/#HTTP.Messages.Response",
    "page": "Internal Interfaces",
    "title": "HTTP.Messages.Response",
    "category": "type",
    "text": "Response <: Message\n\nRepresents a HTTP Response Message.\n\nversion::VersionNumber  RFC7230 2.6\nstatus::Int16  RFC7230 3.1.2  RFC7231 6\nheaders::Vector{Pair{String,String}}  RFC7230 3.2\nbody::Vector{UInt8}  RFC7230 3.3\nrequest, the Request that yielded this Response.\n\n\n\n\n\n"
},

{
    "location": "internal_interface/#HTTP.Messages.iserror",
    "page": "Internal Interfaces",
    "title": "HTTP.Messages.iserror",
    "category": "function",
    "text": "iserror(::Response)\n\nDoes this Response have an error status?\n\n\n\n\n\n"
},

{
    "location": "internal_interface/#HTTP.Messages.isredirect",
    "page": "Internal Interfaces",
    "title": "HTTP.Messages.isredirect",
    "category": "function",
    "text": "isredirect(::Response)\n\nDoes this Response have a redirect status?\n\n\n\n\n\n"
},

{
    "location": "internal_interface/#HTTP.Messages.ischunked",
    "page": "Internal Interfaces",
    "title": "HTTP.Messages.ischunked",
    "category": "function",
    "text": "ischunked(::Message)\n\nDoes the Message have a \"Transfer-Encoding: chunked\" header?\n\n\n\n\n\n"
},

{
    "location": "internal_interface/#HTTP.Messages.issafe",
    "page": "Internal Interfaces",
    "title": "HTTP.Messages.issafe",
    "category": "function",
    "text": "issafe(::Request)\n\nhttps://tools.ietf.org/html/rfc7231#section-4.2.1\n\n\n\n\n\n"
},

{
    "location": "internal_interface/#HTTP.Messages.isidempotent",
    "page": "Internal Interfaces",
    "title": "HTTP.Messages.isidempotent",
    "category": "function",
    "text": "isidempotent(::Request)\n\nhttps://tools.ietf.org/html/rfc7231#section-4.2.2\n\n\n\n\n\n"
},

{
    "location": "internal_interface/#HTTP.Messages.header",
    "page": "Internal Interfaces",
    "title": "HTTP.Messages.header",
    "category": "function",
    "text": "header(::Message, key [, default=\"\"]) -> String\n\nGet header value for key (case-insensitive).\n\n\n\n\n\n"
},

{
    "location": "internal_interface/#HTTP.Messages.hasheader",
    "page": "Internal Interfaces",
    "title": "HTTP.Messages.hasheader",
    "category": "function",
    "text": "hasheader(::Message, key) -> Bool\n\nDoes header value for key exist (case-insensitive)?\n\n\n\n\n\nhasheader(::Message, key, value) -> Bool\n\nDoes header for key match value (both case-insensitive)?\n\n\n\n\n\n"
},

{
    "location": "internal_interface/#HTTP.Messages.setheader",
    "page": "Internal Interfaces",
    "title": "HTTP.Messages.setheader",
    "category": "function",
    "text": "setheader(::Message, key => value)\n\nSet header value for key (case-insensitive).\n\n\n\n\n\n"
},

{
    "location": "internal_interface/#HTTP.Messages.defaultheader",
    "page": "Internal Interfaces",
    "title": "HTTP.Messages.defaultheader",
    "category": "function",
    "text": "defaultheader(::Message, key => value)\n\nSet header value for key if it is not already set.\n\n\n\n\n\n"
},

{
    "location": "internal_interface/#HTTP.Messages.appendheader",
    "page": "Internal Interfaces",
    "title": "HTTP.Messages.appendheader",
    "category": "function",
    "text": "appendheader(::Message, key => value)\n\nAppend a header value to message.headers.\n\nIf key is the same as the previous header, the value is appended to the value of the previous header with a comma delimiter\n\nSet-Cookie headers are not comma-combined because cookies often contain internal commas.\n\n\n\n\n\n"
},

{
    "location": "internal_interface/#HTTP.Messages.readheaders",
    "page": "Internal Interfaces",
    "title": "HTTP.Messages.readheaders",
    "category": "function",
    "text": "readheaders(::IO, ::Message)\n\nRead headers (and startline) from an IO stream into a Message struct. Throw EOFError if input is incomplete.\n\n\n\n\n\n"
},

{
    "location": "internal_interface/#HTTP.MessageRequest.setuseragent!",
    "page": "Internal Interfaces",
    "title": "HTTP.MessageRequest.setuseragent!",
    "category": "function",
    "text": "Set the default User-Agent string to be used in each HTTP request. Can be manually overridden by passing an explicit User-Agent header.\n\n\n\n\n\n"
},

{
    "location": "internal_interface/#HTTP.Messages.readchunksize",
    "page": "Internal Interfaces",
    "title": "HTTP.Messages.readchunksize",
    "category": "function",
    "text": "Read chunk-size from an IO stream. After the final zero size chunk, read trailers into a Message struct.\n\n\n\n\n\n"
},

{
    "location": "internal_interface/#HTTP.Messages.headerscomplete-Tuple{HTTP.Messages.Response}",
    "page": "Internal Interfaces",
    "title": "HTTP.Messages.headerscomplete",
    "category": "method",
    "text": "headerscomplete(::Message)\n\nHave the headers been read into this Message?\n\n\n\n\n\n"
},

{
    "location": "internal_interface/#HTTP.Messages.writestartline",
    "page": "Internal Interfaces",
    "title": "HTTP.Messages.writestartline",
    "category": "function",
    "text": "writestartline(::IO, ::Message)\n\ne.g. \"GET /path HTTP/1.1\\r\\n\" or \"HTTP/1.1 200 OK\\r\\n\"\n\n\n\n\n\n"
},

{
    "location": "internal_interface/#HTTP.Messages.writeheaders",
    "page": "Internal Interfaces",
    "title": "HTTP.Messages.writeheaders",
    "category": "function",
    "text": "writeheaders(::IO, ::Message)\n\nWrite Message start line and a line for each \"name: value\" pair and a trailing blank line.\n\n\n\n\n\n"
},

{
    "location": "internal_interface/#Base.write-Tuple{IO,HTTP.Messages.Message}",
    "page": "Internal Interfaces",
    "title": "Base.write",
    "category": "method",
    "text": "write(::IO, ::Message)\n\nWrite start line, headers and body of HTTP Message.\n\n\n\n\n\n"
},

{
    "location": "internal_interface/#Messages-Interface-1",
    "page": "Internal Interfaces",
    "title": "Messages Interface",
    "category": "section",
    "text": "HTTP.Messages.Request\nHTTP.Messages.Response\nHTTP.Messages.iserror\nHTTP.Messages.isredirect\nHTTP.Messages.ischunked\nHTTP.Messages.issafe\nHTTP.Messages.isidempotent\nHTTP.Messages.header\nHTTP.Messages.hasheader\nHTTP.Messages.setheader\nHTTP.Messages.defaultheader\nHTTP.Messages.appendheader\nHTTP.Messages.readheaders\nHTTP.MessageRequest.setuseragent!\nHTTP.Messages.readchunksize\nHTTP.Messages.headerscomplete(::HTTP.Messages.Response)\nHTTP.Messages.writestartline\nHTTP.Messages.writeheaders\nBase.write(::IO,::HTTP.Messages.Message)"
},

{
    "location": "internal_interface/#IOExtras-Interface-1",
    "page": "Internal Interfaces",
    "title": "IOExtras Interface",
    "category": "section",
    "text": "HTTP.IOExtras\nHTTP.IOExtras.unread!\nHTTP.IOExtras.startwrite(::IO)\nHTTP.IOExtras.isioerror"
},

{
    "location": "internal_interface/#HTTP.Streams.closebody",
    "page": "Internal Interfaces",
    "title": "HTTP.Streams.closebody",
    "category": "function",
    "text": "closebody(::Stream)\n\nWrite the final 0 chunk if needed.\n\n\n\n\n\n"
},

{
    "location": "internal_interface/#HTTP.Streams.isaborted",
    "page": "Internal Interfaces",
    "title": "HTTP.Streams.isaborted",
    "category": "function",
    "text": "isaborted(::Stream{Response})\n\nHas the server signaled that it does not wish to receive the message body?\n\n\"If [the response] indicates the server does not wish to receive the  message body and is closing the connection, the client SHOULD  immediately cease transmitting the body and close the connection.\" RFC7230, 6.5\n\n\n\n\n\n"
},

{
    "location": "internal_interface/#Streams-Interface-1",
    "page": "Internal Interfaces",
    "title": "Streams Interface",
    "category": "section",
    "text": "HTTP.Streams.closebody\nHTTP.Streams.isaborted"
},

{
    "location": "internal_interface/#HTTP.ConnectionPool.Connection",
    "page": "Internal Interfaces",
    "title": "HTTP.ConnectionPool.Connection",
    "category": "type",
    "text": "Connection{T <: IO}\n\nA TCPSocket or SSLContext connection to a HTTP host and port.\n\nFields:\n\nhost::String\nport::String, exactly as specified in the URI (i.e. may be empty).\npipeline_limit, number of requests to send before waiting for responses.\nidle_timeout, No. of sconds to maintain connection after last transaction.\npeerport, remote TCP port number (used for debug messages).\nlocalport, local TCP port number (used for debug messages).\nio::T, the TCPSocket or `SSLContext.\nexcess::ByteView, left over bytes read from the connection after  the end of a response message. These bytes are probably the start of the  next response message.\nsequence, number of most recent Transaction.\nwritecount, number of Messages that have been written.\nwritedone, signal that writecount was incremented.\nreadcount, number of Messages that have been read.\nreaddone, signal that readcount was incremented.\ntimestamp, time data was last recieved.\n\n\n\n\n\n"
},

{
    "location": "internal_interface/#HTTP.ConnectionPool.Transaction",
    "page": "Internal Interfaces",
    "title": "HTTP.ConnectionPool.Transaction",
    "category": "type",
    "text": "A single pipelined HTTP Request/Response transaction`.\n\nFields:\n\nc, the shared Connection used for this Transaction.\nsequence::Int, identifies this Transaction among the others that share c.\n\n\n\n\n\n"
},

{
    "location": "internal_interface/#HTTP.ConnectionPool.pool",
    "page": "Internal Interfaces",
    "title": "HTTP.ConnectionPool.pool",
    "category": "constant",
    "text": "The pool is a collection of open Connections.  The request function calls getconnection to retrieve a connection from the pool.  When the request function has written a Request Message it calls closewrite to signal that the Connection can be reused for writing (to send the next Request). When the request function has read the Response Message it calls closeread to signal that the Connection can be reused for reading.\n\n\n\n\n\n"
},

{
    "location": "internal_interface/#HTTP.ConnectionPool.getconnection",
    "page": "Internal Interfaces",
    "title": "HTTP.ConnectionPool.getconnection",
    "category": "function",
    "text": "getconnection(type, host, port) -> Connection\n\nFind a reusable Connection in the pool, or create a new Connection if required.\n\n\n\n\n\n"
},

{
    "location": "internal_interface/#HTTP.IOExtras.unread!-Tuple{HTTP.ConnectionPool.Transaction,SubArray{UInt8,1,Array{UInt8,1},Tuple{UnitRange{Int64}},true}}",
    "page": "Internal Interfaces",
    "title": "HTTP.IOExtras.unread!",
    "category": "method",
    "text": "unread!(::Transaction, bytes)\n\nPush bytes back into a connection\'s excess buffer (to be returned by the next read).\n\n\n\n\n\n"
},

{
    "location": "internal_interface/#HTTP.IOExtras.startwrite-Tuple{HTTP.ConnectionPool.Transaction}",
    "page": "Internal Interfaces",
    "title": "HTTP.IOExtras.startwrite",
    "category": "method",
    "text": "startwrite(::Transaction)\n\nWait for prior pending writes to complete.\n\n\n\n\n\n"
},

{
    "location": "internal_interface/#HTTP.IOExtras.closewrite-Tuple{HTTP.ConnectionPool.Transaction}",
    "page": "Internal Interfaces",
    "title": "HTTP.IOExtras.closewrite",
    "category": "method",
    "text": "closewrite(::Transaction)\n\nSignal that an entire Request Message has been written to the Transaction.\n\n\n\n\n\n"
},

{
    "location": "internal_interface/#HTTP.IOExtras.startread-Tuple{HTTP.ConnectionPool.Transaction}",
    "page": "Internal Interfaces",
    "title": "HTTP.IOExtras.startread",
    "category": "method",
    "text": "startread(::Transaction)\n\nWait for prior pending reads to complete.\n\n\n\n\n\n"
},

{
    "location": "internal_interface/#HTTP.IOExtras.closeread-Tuple{HTTP.ConnectionPool.Transaction}",
    "page": "Internal Interfaces",
    "title": "HTTP.IOExtras.closeread",
    "category": "method",
    "text": "closeread(::Transaction)\n\nSignal that an entire Response Message has been read from the Transaction.\n\nIncrement readcount and wake up tasks waiting in startread.\n\n\n\n\n\n"
},

{
    "location": "internal_interface/#Connection-Pooling-Interface-1",
    "page": "Internal Interfaces",
    "title": "Connection Pooling Interface",
    "category": "section",
    "text": "HTTP.ConnectionPool.Connection\nHTTP.ConnectionPool.Transaction\nHTTP.ConnectionPool.pool\nHTTP.ConnectionPool.getconnection\nHTTP.IOExtras.unread!(::HTTP.ConnectionPool.Transaction,::SubArray{UInt8,1,Array{UInt8,1},Tuple{UnitRange{Int64}},true})\nHTTP.IOExtras.startwrite(::HTTP.ConnectionPool.Transaction)\nHTTP.IOExtras.closewrite(::HTTP.ConnectionPool.Transaction)\nHTTP.IOExtras.startread(::HTTP.ConnectionPool.Transaction)\nHTTP.IOExtras.closeread(::HTTP.ConnectionPool.Transaction)"
},

]}
