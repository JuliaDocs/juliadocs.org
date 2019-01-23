var documenterSearchIndex = {"docs": [

{
    "location": "#GaussianDistributions.Gaussian",
    "page": "Home",
    "title": "GaussianDistributions.Gaussian",
    "category": "type",
    "text": "Gaussian(μ, Σ) -> P\n\nGaussian distribution with mean μ and covariance Σ. Defines rand(P) and (log-)pdf(P, x). Designed to work with Numbers, UniformScalings, StaticArrays and PSD-matrices.\n\nImplementation details: On Σ the functions logdet, whiten and unwhiten (or chol as fallback for the latter two) are called.\n\n\n\n\n\n"
},

{
    "location": "#GaussianDistributions.PSD",
    "page": "Home",
    "title": "GaussianDistributions.PSD",
    "category": "type",
    "text": "PSD{T}\n\nSimple wrapper for the lower triangular Cholesky root of a positive (semi-)definite element σ.\n\n\n\n\n\n"
},

{
    "location": "#GaussianDistributions.BiNormal",
    "page": "Home",
    "title": "GaussianDistributions.BiNormal",
    "category": "type",
    "text": "Bivariate standard normal distribution with correlation ρ\n\n\n\n\n\n"
},

{
    "location": "#GaussianDistributions.conditional-Tuple{Gaussian,Any,Any,Any}",
    "page": "Home",
    "title": "GaussianDistributions.conditional",
    "category": "method",
    "text": "conditional(P::Gaussian, A, B, xB)\n\nConditional distribution of X[i for i in A] given X[i for i in B] == xB if X  P.\n\n\n\n\n\n"
},

{
    "location": "#GaussianDistributions.logpdfnormal-Tuple{Any,Any}",
    "page": "Home",
    "title": "GaussianDistributions.logpdfnormal",
    "category": "method",
    "text": "logpdfnormal(x, Σ)\n\nLogarithm of the probability density function of centered Gaussian with covariance Σ\n\n\n\n\n\n"
},

{
    "location": "#GaussianDistributions.sumlogdiag-Tuple{Float64,Any}",
    "page": "Home",
    "title": "GaussianDistributions.sumlogdiag",
    "category": "method",
    "text": "Sum of the log of the diagonal elements. Second argument d is used to handle UniformScaling and other linear operators whose dimensions are determined by the dimension of the argument they work on.\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [GaussianDistributions]\nOrder = [:type, :function]"
},

]}