var documenterSearchIndex = {"docs": [

{
    "location": "#KernelDensityEstimatePlotting.plotKDE-Tuple{FactorGraph,Symbol}",
    "page": "Home",
    "title": "KernelDensityEstimatePlotting.plotKDE",
    "category": "method",
    "text": "plotKDE(fgl, sym; axis, dims, c, levels, title)\n\n\nA peneric KDE plotting function that allows marginals of higher dimensional beliefs and various keyword options.\n\nExample:\n\np = kde!(randn(3,100))\n\nplotKDE(p)\nplotKDE(p, dims=[1;2], levels=3)\nplotKDE(p, dims=[1])\n\nq = kde!(5*randn(3,100))\nplotKDE([p;q])\nplotKDE([p;q], dims=[1;2], levels=3)\nplotKDE([p;q], dims=[1])\n\n\n\n\n\n"
},

{
    "location": "#RoMEPlotting.getColorsByLength",
    "page": "Home",
    "title": "RoMEPlotting.getColorsByLength",
    "category": "function",
    "text": "getColorsByLength()\ngetColorsByLength(len)\n\n\nStandardize the length colors used by RoMEPlotting.\n\n\n\n\n\n"
},

{
    "location": "#RoMEPlotting.plotKDEofnc-Tuple{FactorGraph,Symbol}",
    "page": "Home",
    "title": "RoMEPlotting.plotKDEofnc",
    "category": "method",
    "text": "plotKDEofnc(fgl, fsym; marg, N)\n\n\nplot absolute values of variables and measurement surrounding fsym factor.\n\n\n\n\n\n"
},

{
    "location": "#RoMEPlotting.plotKDEresiduals-Tuple{FactorGraph,Symbol}",
    "page": "Home",
    "title": "RoMEPlotting.plotKDEresiduals",
    "category": "method",
    "text": "plotKDEresiduals(fgl, fsym; N, levels, dims, fill, api)\n\n\nTrye plot relative values of variables and measurement surrounding fsym factor.\n\n\n\n\n\n"
},

{
    "location": "#RoMEPlotting.plotLocalProduct-Tuple{FactorGraph,Symbol}",
    "page": "Home",
    "title": "RoMEPlotting.plotLocalProduct",
    "category": "method",
    "text": "plotLocalProduct(fgl, lbl; N, dims, api, levels, show, dirpath, mimetype, sidelength)\n\n\nPlot the proposal belief from neighboring factors to lbl in the factor graph (ignoring Bayes tree representation), and show with new product approximation for reference.\n\n\n\n\n\n"
},

{
    "location": "#RoMEPlotting.plotLocalProduct-Union{Tuple{T}, Tuple{FactorGraph,T}} where T<:AbstractString",
    "page": "Home",
    "title": "RoMEPlotting.plotLocalProduct",
    "category": "method",
    "text": "plotLocalProduct{T <: AbstractString}(fgl::FactorGraph, lbl::T; N::Int=100, dims::Vector{Int}=Int[])\n\nPlot the proposal belief from neighboring factors to lbl in the factor graph (ignoring Bayes tree representation), and show with new product approximation for reference. String version is obsolete and will be deprecated.\n\n\n\n\n\n"
},

{
    "location": "#RoMEPlotting.plotPose-Union{Tuple{AS}, Tuple{FactorGraph,Array{Symbol,1}}} where AS<:AbstractString",
    "page": "Home",
    "title": "RoMEPlotting.plotPose",
    "category": "method",
    "text": "plotPose(fgl, syms; levels, c, show, filepath, app)\n\n\nExample: pl = plotPose(fg, [:x1; :x2; :x3])\n\n\n\n\n\n"
},

{
    "location": "#RoMEPlotting.plotPriorsAtCliq-Tuple{BayesTree,Symbol,Symbol}",
    "page": "Home",
    "title": "RoMEPlotting.plotPriorsAtCliq",
    "category": "method",
    "text": "plotPriorsAtCliq(treel, lb, cllb)\n\nPlot the product of priors and incoming upward messages for variable in clique.\n\nplotPriorsAtCliq(tree, :x2, :x1[, marg=[1;2]])\n\n\n\n\n\n"
},

{
    "location": "#RoMEPlotting.plotUpMsgsAtCliq-Tuple{BayesTree,Symbol,Symbol}",
    "page": "Home",
    "title": "RoMEPlotting.plotUpMsgsAtCliq",
    "category": "method",
    "text": "plotUpMsgsAtCliq(treel, lb, cllb)\n\nDraw the up pass belief of lb from clique cllb.\n\nplotUpMsgsAtCliq(tree, :x2, :x1)\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [RoMEPlotting]\nOrder = [:type, :function]"
},

]}
