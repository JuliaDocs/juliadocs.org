var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#DevIL-1",
    "page": "Readme",
    "title": "DevIL",
    "category": "section",
    "text": "DevIL / OpenIL binding for JuliaLib version: 1.7.8Currently only IL is bound, ILU and ILUT are not."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "For usage information & documentation please visit  http://openil.sourceforge.net/"
},

{
    "location": "#Essentials-1",
    "page": "Readme",
    "title": "Essentials",
    "category": "section",
    "text": "If you don\'t read the docs, at least read this: you need to call ilInit() before calling any other IL functions, otherwise it might crash your session with null pointer access.Here\'s what a typical cycle of loading an image looks like:using DevIL\n\nilInit()\n\nilBindImage(ilGenImage())\nilLoadImage(\"example.png\")\nw = ilGetInteger(IL_IMAGE_WIDTH)\nh = ilGetInteger(IL_IMAGE_HEIGHT)\ndataPtr = ilGetData()\n# do stuff with the image data and when we\'re done\nilDeleteImage(ilGetInteger(IL_CUR_IMAGE))\n\n# when we\'re done with the library\nilShutDown()"
},

{
    "location": "#Contacts-and-Issues-1",
    "page": "Readme",
    "title": "Contacts & Issues",
    "category": "section",
    "text": "For problems with the Julia binding, please visit https://github.com/JuliaGL/DevIL.jl"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [DevIL]\nOrder = [:type, :function]"
},

]}
