var documenterSearchIndex = {"docs": [

{
    "location": "#GLM.linkfun-Union{Tuple{RegularizationPath{M,T} where T}, Tuple{M}} where M<:LinearModel",
    "page": "Home",
    "title": "GLM.linkfun",
    "category": "method",
    "text": "link of underlying GLM\n\n\n\n\n\n"
},

{
    "location": "#Lasso.distfun-Union{Tuple{RegularizationPath{M,T} where T}, Tuple{M}} where M<:LinearModel",
    "page": "Home",
    "title": "Lasso.distfun",
    "category": "method",
    "text": "distribution of underlying GLM\n\n\n\n\n\n"
},

{
    "location": "#StatsBase.coef-Tuple{RegularizationPath}",
    "page": "Home",
    "title": "StatsBase.coef",
    "category": "method",
    "text": "coef(path::RegularizationPath; select=:AICc)\n\nReturns a p by nλ coefficient array where p is the number of coefficients (including any intercept) and nλ is the number of path segments, or a selected segment\'s coefficients.\n\nIf model was only initialized but not fit, returns a p vector of zeros. Consistent with StatsBase.coef, if the model has an intercept it is included.\n\nExample:\n\n  m = fit(LassoPath,X,y)\n  coef(m; select=:CVmin)\n\nKeywords\n\nselect=:all returns a p by nλ matrix of coefficients\nselect=:AIC selects the AIC minimizing segment\nselect=:AICc selects the corrected AIC minimizing segment\nselect=:BIC selects the BIC minimizing segment\nselect=:CVmin selects the segment that minimizing out-of-sample mean squared   error from cross-validation with nCVfolds random folds.\nselect=:CV1se selects the segment whose average OOS deviance is no more than   1 standard error away from the one minimizing out-of-sample mean squared   error from cross-validation with nCVfolds random folds.\nnCVfolds=10 number of cross-validation folds\nkwargs... are passed to minAICc(::RegularizationPath) or to   cross_validate_path(::RegularizationPath)\n\n\n\n\n\n"
},

{
    "location": "#StatsBase.deviance-Tuple{RegularizationPath}",
    "page": "Home",
    "title": "StatsBase.deviance",
    "category": "method",
    "text": "deviance at each segment of the path for the fitted model and data\n\n\n\n\n\n"
},

{
    "location": "#StatsBase.deviance-Union{Tuple{V}, Tuple{T}, Tuple{RegularizationPath,AbstractArray{T,2},V}} where V<:(AbstractArray{T,1} where T<:AbstractFloat) where T<:AbstractFloat",
    "page": "Home",
    "title": "StatsBase.deviance",
    "category": "method",
    "text": "deviance at each segement of the path for (potentially new) data X and y select=:all or :AICc like in coef()\n\n\n\n\n\n"
},

{
    "location": "#StatsBase.deviance-Union{Tuple{V}, Tuple{T}, Tuple{RegularizationPath,V,AbstractArray{T,N} where N}, Tuple{RegularizationPath,V,AbstractArray{T,N} where N,AbstractArray{T,1} where T<:AbstractFloat}} where V<:(AbstractArray{T,1} where T<:AbstractFloat) where T<:AbstractFloat",
    "page": "Home",
    "title": "StatsBase.deviance",
    "category": "method",
    "text": "deviance at each segment of the path for (potentially new) y and predicted values μ\n\n\n\n\n\n"
},

{
    "location": "#StatsBase.dof-Tuple{RegularizationPath}",
    "page": "Home",
    "title": "StatsBase.dof",
    "category": "method",
    "text": "dof(path::RegularizationPath)\n\nApproximates the degrees-of-freedom in each segment of the path as the number of non zero coefficients plus a dispersion parameter when appropriate. Note that for GammaLassoPath this may be a crude approximation, as gamlr does this differently.\n\n\n\n\n\n"
},

{
    "location": "#Base.size-Tuple{RegularizationPath}",
    "page": "Home",
    "title": "Base.size",
    "category": "method",
    "text": "size(path) returns (p,nλ) where p is the number of coefficients (including any intercept) and nλ is the number of path segments. If model was only initialized but not fit, returns (p,1).\n\n\n\n\n\n"
},

{
    "location": "#Lasso.computeω!-Union{Tuple{T}, Tuple{Array{T,1},Array{T,1},Array{T,1},SparseCoefficients{T}}} where T",
    "page": "Home",
    "title": "Lasso.computeω!",
    "category": "method",
    "text": "Compute coefficient specific weights vector ωj^t based on previous iteration coefficients β times penaltyfactor\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [Lasso]\nOrder = [:type, :function]"
},

]}
