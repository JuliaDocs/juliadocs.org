var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "#EarthOrientation.jl-1",
    "page": "Home",
    "title": "EarthOrientation.jl",
    "category": "section",
    "text": "Calculate Earth orientation parameters from IERS tables in Julia."
},

{
    "location": "#Installation-1",
    "page": "Home",
    "title": "Installation",
    "category": "section",
    "text": "The package can be installed through Julia\'s package manager:Pkg.add(\"EarthOrientation\")"
},

{
    "location": "#Quickstart-1",
    "page": "Home",
    "title": "Quickstart",
    "category": "section",
    "text": "Fetch the latest [IERS][iers-link] tables:using EarthOrientation\nEarthOrientation.update()Get the current Earth orientation parameters, e.g. for polar motion:xp, yp = polarmotion(now()) # arcsecondsOr the current difference between UT1 and UTC and the associated prediction error:ΔUT1 = getΔUT1(now()) # seconds\nΔUT1_err = getΔUT1_err(now()) # seconds"
},

{
    "location": "#Available-data-1",
    "page": "Home",
    "title": "Available data",
    "category": "section",
    "text": "Polar motion:\nx-coordinate of Earth\'s north pole: getxp\ny-coordinate of Earth\'s north pole: getyp\nboth: polarmotion\nEarth rotation\nDifference between UT1 and UTC: getΔUT1\nExcess length of day: getlod\nPrecession and nutation based on the 1980 IAU conventions\nCorrection to the nutation of the ecliptic: getdψ\nCorrection to the obliquity of the ecliptic: getdϵ\nboth: precession_nutation80\nPrecession and nutation based on the 2000 IAU conventions\nCorrection to the celestial pole\'s x-coordinate: getdx\nCorrection to the celestial pole\'s y-coordinate: getdy\nboth: precession_nutation00There is an associated function that returns the prediction error for each data type, e.g. getxp_err."
},

{
    "location": "#Manual-Data-Management-1",
    "page": "Home",
    "title": "Manual Data Management",
    "category": "section",
    "text": "By default the files downloaded by EarthOrientation.update() will be used. It is also possible to pass different finals.all and finals2000A.all files in CSV format.using EarthOrientation\n\npush!(EOP_DATA, \"finals.csv\", \"finals2000A.csv\")"
},

{
    "location": "api/#",
    "page": "API",
    "title": "API",
    "category": "page",
    "text": ""
},

{
    "location": "api/#EarthOrientation.EOParams-Tuple{String,String}",
    "page": "API",
    "title": "EarthOrientation.EOParams",
    "category": "method",
    "text": "EOParams(iau1980file::String, iau2000file::String)\n\nParse IERS data files into a EOParams object. iau1980file and iau2000file are the paths to a \'finals.all\' and a \'finals2000A.all\' CSV file, respectively.\n\n\n\n\n\n"
},

{
    "location": "api/#EarthOrientation.getdx-Tuple{Any,Any}",
    "page": "API",
    "title": "EarthOrientation.getdx",
    "category": "method",
    "text": "getdx(date; outside_range=:warn)\n\nGet the celestial pole x-coordinate correction for a certain date in milliarcseconds.\n\ndate can either be a DateTime object or a Julian date represented by a Float64. The outside_range argument determines what to do if no data is available for date:\n\n:warn: The last valid value is returned and a warning will be displayed.\n:nothing: The last valid value is returned.\n:error: An OutOfRangeError is thrown.\n\n\n\n\n\n"
},

{
    "location": "api/#EarthOrientation.getdx_err-Tuple{Any,Any}",
    "page": "API",
    "title": "EarthOrientation.getdx_err",
    "category": "method",
    "text": "getdx_err(date; outside_range=:warn)\n\nGet the error in celestial pole x-coordinate correction for a certain date in milliarcseconds.\n\ndate can either be a DateTime object or a Julian date represented by a Float64. The outside_range argument determines what to do if no data is available for date:\n\n:warn: The last valid value is returned and a warning will be displayed.\n:nothing: The last valid value is returned.\n:error: An OutOfRangeError is thrown.\n\n\n\n\n\n"
},

{
    "location": "api/#EarthOrientation.getdy-Tuple{Any,Any}",
    "page": "API",
    "title": "EarthOrientation.getdy",
    "category": "method",
    "text": "getdy(date; outside_range=:warn)\n\nGet the celestial pole y-coordinate correction for a certain date in milliarcseconds.\n\ndate can either be a DateTime object or a Julian date represented by a Float64. The outside_range argument determines what to do if no data is available for date:\n\n:warn: The last valid value is returned and a warning will be displayed.\n:nothing: The last valid value is returned.\n:error: An OutOfRangeError is thrown.\n\n\n\n\n\n"
},

{
    "location": "api/#EarthOrientation.getdy_err-Tuple{Any,Any}",
    "page": "API",
    "title": "EarthOrientation.getdy_err",
    "category": "method",
    "text": "getdy_err(date; outside_range=:warn)\n\nGet the error in celestial pole y-coordinate correction for a certain date in milliarcseconds.\n\ndate can either be a DateTime object or a Julian date represented by a Float64. The outside_range argument determines what to do if no data is available for date:\n\n:warn: The last valid value is returned and a warning will be displayed.\n:nothing: The last valid value is returned.\n:error: An OutOfRangeError is thrown.\n\n\n\n\n\n"
},

{
    "location": "api/#EarthOrientation.getdψ-Tuple{Any,Any}",
    "page": "API",
    "title": "EarthOrientation.getdψ",
    "category": "method",
    "text": "getdψ(date; outside_range=:warn)\n\nGet the ecliptic nutation correction for a certain date in milliarcseconds.\n\ndate can either be a DateTime object or a Julian date represented by a Float64. The outside_range argument determines what to do if no data is available for date:\n\n:warn: The last valid value is returned and a warning will be displayed.\n:nothing: The last valid value is returned.\n:error: An OutOfRangeError is thrown.\n\n\n\n\n\n"
},

{
    "location": "api/#EarthOrientation.getdψ_err-Tuple{Any,Any}",
    "page": "API",
    "title": "EarthOrientation.getdψ_err",
    "category": "method",
    "text": "getdψ_err(date; outside_range=:warn)\n\nGet the error in the ecliptic nutation correction for a certain date in milliarcseconds.\n\ndate can either be a DateTime object or a Julian date represented by a Float64. The outside_range argument determines what to do if no data is available for date:\n\n:warn: The last valid value is returned and a warning will be displayed.\n:nothing: The last valid value is returned.\n:error: An OutOfRangeError is thrown.\n\n\n\n\n\n"
},

{
    "location": "api/#EarthOrientation.getdϵ-Tuple{Any,Any}",
    "page": "API",
    "title": "EarthOrientation.getdϵ",
    "category": "method",
    "text": "getdϵ(date; outside_range=:warn)\n\nGet the ecliptic obliquity correction for a certain date in milliarcseconds.\n\ndate can either be a DateTime object or a Julian date represented by a Float64. The outside_range argument determines what to do if no data is available for date:\n\n:warn: The last valid value is returned and a warning will be displayed.\n:nothing: The last valid value is returned.\n:error: An OutOfRangeError is thrown.\n\n\n\n\n\n"
},

{
    "location": "api/#EarthOrientation.getdϵ_err-Tuple{Any,Any}",
    "page": "API",
    "title": "EarthOrientation.getdϵ_err",
    "category": "method",
    "text": "getdϵ_err(date; outside_range=:warn)\n\nGet the error in the ecliptic obliquity correction for a certain date in milliarcseconds.\n\ndate can either be a DateTime object or a Julian date represented by a Float64. The outside_range argument determines what to do if no data is available for date:\n\n:warn: The last valid value is returned and a warning will be displayed.\n:nothing: The last valid value is returned.\n:error: An OutOfRangeError is thrown.\n\n\n\n\n\n"
},

{
    "location": "api/#EarthOrientation.getlod-Tuple{Any,Any}",
    "page": "API",
    "title": "EarthOrientation.getlod",
    "category": "method",
    "text": "getlod(date; outside_range=:warn)\n\nGet the excess length of day for a certain date in milliseconds.\n\ndate can either be a DateTime object or a Julian date represented by a Float64. The outside_range argument determines what to do if no data is available for date:\n\n:warn: The last valid value is returned and a warning will be displayed.\n:nothing: The last valid value is returned.\n:error: An OutOfRangeError is thrown.\n\n\n\n\n\n"
},

{
    "location": "api/#EarthOrientation.getlod_err-Tuple{Any,Any}",
    "page": "API",
    "title": "EarthOrientation.getlod_err",
    "category": "method",
    "text": "getlod_err(date; outside_range=:warn)\n\nGet the error in the excess length of day for a certain date in milliseconds.\n\ndate can either be a DateTime object or a Julian date represented by a Float64. The outside_range argument determines what to do if no data is available for date:\n\n:warn: The last valid value is returned and a warning will be displayed.\n:nothing: The last valid value is returned.\n:error: An OutOfRangeError is thrown.\n\n\n\n\n\n"
},

{
    "location": "api/#EarthOrientation.getxp-Tuple{Any,Any}",
    "page": "API",
    "title": "EarthOrientation.getxp",
    "category": "method",
    "text": "getxp(date; outside_range=:warn)\n\nGet the x-coordinate of Earth\'s north pole w.r.t. the CIO for a certain date in arcseconds.\n\ndate can either be a DateTime object or a Julian date represented by a Float64. The outside_range argument determines what to do if no data is available for date:\n\n:warn: The last valid value is returned and a warning will be displayed.\n:nothing: The last valid value is returned.\n:error: An OutOfRangeError is thrown.\n\n\n\n\n\n"
},

{
    "location": "api/#EarthOrientation.getxp_err-Tuple{Any,Any}",
    "page": "API",
    "title": "EarthOrientation.getxp_err",
    "category": "method",
    "text": "getxp_err(date; outside_range=:warn)\n\nGet the error for the x-coordinate of Earth\'s north pole w.r.t. the CIO for a certain date in arcseconds.\n\ndate can either be a DateTime object or a Julian date represented by a Float64. The outside_range argument determines what to do if no data is available for date:\n\n:warn: The last valid value is returned and a warning will be displayed.\n:nothing: The last valid value is returned.\n:error: An OutOfRangeError is thrown.\n\n\n\n\n\n"
},

{
    "location": "api/#EarthOrientation.getyp-Tuple{Any,Any}",
    "page": "API",
    "title": "EarthOrientation.getyp",
    "category": "method",
    "text": "getyp(date; outside_range=:warn)\n\nGet the y-coordinate of Earth\'s north pole w.r.t. the CIO for a certain date in arcseconds.\n\ndate can either be a DateTime object or a Julian date represented by a Float64. The outside_range argument determines what to do if no data is available for date:\n\n:warn: The last valid value is returned and a warning will be displayed.\n:nothing: The last valid value is returned.\n:error: An OutOfRangeError is thrown.\n\n\n\n\n\n"
},

{
    "location": "api/#EarthOrientation.getyp_err-Tuple{Any,Any}",
    "page": "API",
    "title": "EarthOrientation.getyp_err",
    "category": "method",
    "text": "getyp_err(date; outside_range=:warn)\n\nGet the error for the y-coordinate of Earth\'s north pole w.r.t. the CIO for a certain date in arcseconds.\n\ndate can either be a DateTime object or a Julian date represented by a Float64. The outside_range argument determines what to do if no data is available for date:\n\n:warn: The last valid value is returned and a warning will be displayed.\n:nothing: The last valid value is returned.\n:error: An OutOfRangeError is thrown.\n\n\n\n\n\n"
},

{
    "location": "api/#EarthOrientation.getΔUT1-Tuple{Any,Any}",
    "page": "API",
    "title": "EarthOrientation.getΔUT1",
    "category": "method",
    "text": "getΔUT1(date; outside_range=:warn)\n\nGet the difference between UTC and UT1 for a certain date in seconds.\n\ndate can either be a DateTime object or a Julian date represented by a Float64. The outside_range argument determines what to do if no data is available for date:\n\n:warn: The last valid value is returned and a warning will be displayed.\n:nothing: The last valid value is returned.\n:error: An OutOfRangeError is thrown.\n\n\n\n\n\n"
},

{
    "location": "api/#EarthOrientation.getΔUT1_err-Tuple{Any,Any}",
    "page": "API",
    "title": "EarthOrientation.getΔUT1_err",
    "category": "method",
    "text": "getΔUT1_err(date; outside_range=:warn)\n\nGet the error in the difference between UTC and UT1 for a certain date in seconds.\n\ndate can either be a DateTime object or a Julian date represented by a Float64. The outside_range argument determines what to do if no data is available for date:\n\n:warn: The last valid value is returned and a warning will be displayed.\n:nothing: The last valid value is returned.\n:error: An OutOfRangeError is thrown.\n\n\n\n\n\n"
},

{
    "location": "api/#EarthOrientation.polarmotion-Tuple{Any,Any}",
    "page": "API",
    "title": "EarthOrientation.polarmotion",
    "category": "method",
    "text": "polarmotion(date; outside_range=:warn)\n\nGet the coordinates of Earth\'s north pole w.r.t. the CIO for a certain date in arcseconds.\n\ndate can either be a DateTime object or a Julian date represented by a Float64. The outside_range argument determines what to do if no data is available for date:\n\n:warn: The last valid value is returned and a warning will be displayed.\n:nothing: The last valid value is returned.\n:error: An OutOfRangeError is thrown.\n\n\n\n\n\n"
},

{
    "location": "api/#EarthOrientation.precession_nutation00-Tuple{Any,Any}",
    "page": "API",
    "title": "EarthOrientation.precession_nutation00",
    "category": "method",
    "text": "precession_nutation00(date; outside_range=:warn)\n\nGet the celestial pole coordinate corrections for a certain date in milliarcseconds.\n\ndate can either be a DateTime object or a Julian date represented by a Float64. The outside_range argument determines what to do if no data is available for date:\n\n:warn: The last valid value is returned and a warning will be displayed.\n:nothing: The last valid value is returned.\n:error: An OutOfRangeError is thrown.\n\n\n\n\n\n"
},

{
    "location": "api/#EarthOrientation.precession_nutation80-Tuple{Any,Any}",
    "page": "API",
    "title": "EarthOrientation.precession_nutation80",
    "category": "method",
    "text": "precession_nutation80(date; outside_range=:warn)\n\nGet the ecliptic corrections for a certain date in milliarcseconds.\n\ndate can either be a DateTime object or a Julian date represented by a Float64. The outside_range argument determines what to do if no data is available for date:\n\n:warn: The last valid value is returned and a warning will be displayed.\n:nothing: The last valid value is returned.\n:error: An OutOfRangeError is thrown.\n\n\n\n\n\n"
},

{
    "location": "api/#API-1",
    "page": "API",
    "title": "API",
    "category": "section",
    "text": "Modules = [EarthOrientation]\nPrivate = false"
},

]}
