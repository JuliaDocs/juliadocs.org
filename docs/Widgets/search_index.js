var documenterSearchIndex = {"docs": [

{
    "location": "#Widgets.node-Tuple{Widget}",
    "page": "Home",
    "title": "Widgets.node",
    "category": "method",
    "text": "node(w::Widget)\n\nReturn primary node for widget w\n\n\n\n\n\n"
},

{
    "location": "#Widgets.scope!-Tuple{Widget,Any}",
    "page": "Home",
    "title": "Widgets.scope!",
    "category": "method",
    "text": "scope!(w::Widget, sc)\n\nsets up a primary scope sc for widget w\n\n\n\n\n\n"
},

{
    "location": "#Widgets.scope-Tuple{Widget}",
    "page": "Home",
    "title": "Widgets.scope",
    "category": "method",
    "text": "scope(w::Widget)\n\nReturn primary scope for widget w if it exists, nothing otherwise.\n\n\n\n\n\n"
},

{
    "location": "#Widgets.layout-Tuple{Any,Widget}",
    "page": "Home",
    "title": "Widgets.layout",
    "category": "method",
    "text": "layout(f, w::Widget)\n\nCreate a new Widget that is a copy of w and whose layout is the layout of w composed with the function f.\n\nExamples\n\nusing InteractBase, CSSUtil, Widgets\nw = button(\"OK\")\nWidgets.layout(w) do t\n    hbox(\"Click here\", t)\nend\n\n\n\n\n\n"
},

{
    "location": "#Widgets.layout-Tuple{Widget}",
    "page": "Home",
    "title": "Widgets.layout",
    "category": "method",
    "text": "layout(w::Widget)\n\nReturn the function that will be used to determine the layout of widget w.\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [Widgets]\nOrder = [:type, :function]"
},

]}
