var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#LoopThrottle-1",
    "page": "Readme",
    "title": "LoopThrottle",
    "category": "section",
    "text": "(Image: Build Status) (Image: codecov.io)LoopThrottle is a tiny Julia package that exports the @throttle macro, which can be used to slow down a for loop or while loop by calling sleep at the beginning of each loop iteration (if necessary), so that a designated variable increases at a rate of at most max_rate (compared to wall time)."
},

{
    "location": "#Examples-1",
    "page": "Readme",
    "title": "Examples",
    "category": "section",
    "text": "x = 0\n@throttle t for t = 1 : 0.01 : 2\n    x += 1\nend max_rate = 2.will finish in approximately 0.5 second.x = 0.\n@throttle x for i = 0 : 1000\n    x += 1e-3\nendwill use the default max_rate value of 1. and thus finish in approximately 1 second.i = 0\n@throttle i while i <= 10\n    println(i)\n    i += 1\nend min_sleep_time=1.5 max_rate=1will print the numbers from 0 to 10 at an average rate of one per second, while never sleeping for less than 1.5 second."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [LoopThrottle]\nOrder = [:type, :function]"
},

]}
