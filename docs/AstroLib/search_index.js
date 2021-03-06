var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Introduction",
    "title": "Introduction",
    "category": "page",
    "text": ""
},

{
    "location": "#AstroLib.jl-1",
    "page": "Introduction",
    "title": "AstroLib.jl",
    "category": "section",
    "text": "AstroLib is a package of small generic routines useful above all in astronomical and astrophysical context, written in Julia.Included are also translations of some IDL Astronomy User’s Library procedures, which are released under terms of BSD-2-Clause License. AstroLib’s functions are not drop-in replacement of those procedures, Julia standard data types are often used (e.g., DateTime type instead of generic string for dates) and the syntax may slightly differ.An extensive error testing suite ensures old fixed bugs will not be brought back by future changes."
},

{
    "location": "#Installation-1",
    "page": "Introduction",
    "title": "Installation",
    "category": "section",
    "text": "AstroLib is available for Julia 0.7 and later versions, and can be installed with Julia\'s built-in package manager. In a Julia session run the commandjulia> Pkg.update()\njulia> Pkg.add(\"AstroLib\")Older versions are also available for Julia 0.4-0.6.Note that, in order to work, a few functions require external files, which are automatically downloaded when building the package. Should these files be missing for some reason, you will be able to load the package but some functions may not work properly. You can manually build the package withjulia> Pkg.build(\"AstroLib\")"
},

{
    "location": "#Usage-1",
    "page": "Introduction",
    "title": "Usage",
    "category": "section",
    "text": "After installing the package, you can start using AstroLib withusing AstroLibMany functions in AstroLib.jl are compatible with Measurements.jl package, which allows you to define quantities with uncertainty and propagate the error when performing calculations according to propagation of uncertainty rules. For example:julia> using AstroLib, Measurements\n\njulia> mag2flux(12.54 ± 0.03)\n3.499451670283562e-14 ± 9.669342299577655e-16"
},

{
    "location": "#How-Can-I-Help?-1",
    "page": "Introduction",
    "title": "How Can I Help?",
    "category": "section",
    "text": "AstroLib.jl is developed on GitHub. You can contribute to the project in a number of ways: by translating more routines from IDL Astronomy User’s Library, or providing brand-new functions, or even improving existing ones (make them faster and more precise). Also bug reports are encouraged."
},

{
    "location": "#License-1",
    "page": "Introduction",
    "title": "License",
    "category": "section",
    "text": "The AstroLib.jl package is licensed under the MIT “Expat” License. The original author is Mosè Giordano."
},

{
    "location": "#Notes-1",
    "page": "Introduction",
    "title": "Notes",
    "category": "section",
    "text": "This project is a work-in-progress, only few procedures have been translated so far. In addition, function syntax may change from time to time. Check TODO.md out to see how you can help. Volunteers are welcome!"
},

{
    "location": "#Documentation-1",
    "page": "Introduction",
    "title": "Documentation",
    "category": "section",
    "text": "Every function provided has detailed documentation that can be accessed at Julia REPL withjulia> ?FunctionNameor withjulia> @doc FunctionName"
},

{
    "location": "#Related-Projects-1",
    "page": "Introduction",
    "title": "Related Projects",
    "category": "section",
    "text": "This is not the only effort to bundle astronomical functions written in Julia language. Other packages useful for more specific purposes are available at JuliaAstro. A list of other packages is available here.Because of this, some of IDL AstroLib’s utilities are not provided in AstroLib.jl as they are already present in other Julia packages. Here is a list of such utilities:aper, see AperturePhotometry.jl package\nasinh, already present in Julia with the same name\ncirrange, it is equivalent to mod(x, 360).  To restrict a number to the   range [0, 2pi) use mod2pi(x)\ncosmo_param, see Cosmology.jl package\ngalage, see Cosmology.jl package\nglactc_pm, see SkyCoords.jl package\nglactc, see SkyCoords.jl package\njplephinterp, see JPLEphemeris.jl package\njplephread, see JPLEphemeris.jl package\njplephtest, see JPLEphemeris.jl package\nlumdist, see Cosmology.jl package\nreadcol, use readdlm, part of Julia Base.DataFmt module. This is not a complete replacement for readcol but most of the time it does-the-right-thing even without using any option (it automatically identifies string and numerical columns) and you do not need to manually specify a variable for each columnIn addition, there are similar projects for Python (Python AstroLib) and R (Astronomy Users Library)."
},

{
    "location": "ref/#",
    "page": "Reference",
    "title": "Reference",
    "category": "page",
    "text": ""
},

{
    "location": "ref/#Reference-1",
    "page": "Reference",
    "title": "Reference",
    "category": "section",
    "text": ""
},

{
    "location": "ref/#Data-types-1",
    "page": "Reference",
    "title": "Data types",
    "category": "section",
    "text": ""
},

{
    "location": "ref/#Observatory-1",
    "page": "Reference",
    "title": "Observatory",
    "category": "section",
    "text": "AstroLib.jl defines a new Observatory type. This can be used to define a new object holding information about an observing site. It is a [composite type] whose fields arename (String type): the name of the site\nlatitude (Float64 type): North-ward latitude of the site in degrees\nlongitude (Float64 type): East-ward longitude of the site in degrees\naltitude (Float64 type): altitude of the site in meters\ntz (Float64 type): the number of hours of offset from UTCThe type constructor Observatory can be used to create a new Observatory object. Its syntax isObservatory(name, lat, long, alt, tz)name should be a string; lat, long, and tz should be anything that can be converted to a floating number with ten function; alt should be a real number.A predefined list of some observing sites is provided with AstroLib.observatories constant. It is a dictionary whose keys are the abbreviated names of the observatories. For example, you can access information of the European Southern Observatory withjulia> obs = AstroLib.observatories[\"eso\"]\nObservatory: European Southern Observatory\nlatitude:    -29.256666666666668°N\nlongitude:   -70.73°E\naltitude:    2347.0 m\ntime zone:   UTC-4\n\njulia> obs.longitude\n-70.73You can list all keys of the dictionary withkeys(AstroLib.observatories)Feel free to contribute new sites or adjust information of already present ones."
},

{
    "location": "ref/#Planet-1",
    "page": "Reference",
    "title": "Planet",
    "category": "section",
    "text": "The package provides Planet type to hold information about Solar System planets. Its fields areDesignation:\nname: the name\nPhysical characteristics:\nradius: mean radius in meters\neqradius: equatorial radius in meters\npolradius: polar radius in meters\nmass: mass in kilogram\nOrbital characteristics (epoch J2000):\necc: eccentricity of the orbit\naxis: semi-major axis of the orbit in meters\nperiod: sidereal orbital period in secondsThe constructor has this syntax:Planet(name, radius, eqradius, polradius, mass, ecc, axis, period)The list of Solar System planets, from Mercury to Pluto, is available with AstroLib.planets dictionary. The keys of this dictionary are the lowercase names of the planets. For example:julia> AstroLib.planets[\"mercury\"]\nPlanet:            Mercury\nmean radius:       2.4397e6 m\nequatorial radius: 2.4397e6 m\npolar radius:      2.4397e6 m\nmass:              3.3011e23 kg\neccentricity:      0.20563069\nsemi-major axis:   5.790905e10 m\nperiod:            5.790905e10 s\n\njulia> AstroLib.planets[\"mars\"].eqradius\n3.3962e6\n\njulia> AstroLib.planets[\"saturn\"].mass\n5.6834e25"
},

{
    "location": "ref/#Functions-organized-by-category-1",
    "page": "Reference",
    "title": "Functions organized by category",
    "category": "section",
    "text": ""
},

{
    "location": "ref/#Coordinates-and-positions-1",
    "page": "Reference",
    "title": "Coordinates and positions",
    "category": "section",
    "text": "adstring(), aitoff(), altaz2hadec(), baryvel(), bprecess(), co_aberration(), co_nutate(), co_refract(), eci2geo(), eq2hor(), eqpole(), euler(), gcirc(), geo2eci(), geo2geodetic(), geo2mag(), geodetic2geo(), hadec2altaz(), helio_rv(), helio(), hor2eq(), jprecess(), mag2geo(), mean_obliquity(), planet_coords(), polrec(), posang(), precess(), precess_cd(), precess_xyz(), premat(), radec(), recpol(), true_obliquity(), zenpos()"
},

{
    "location": "ref/#Time-and-date-1",
    "page": "Reference",
    "title": "Time and date",
    "category": "section",
    "text": "ct2lst(), daycnv(), get_date(), get_juldate(), helio_jd(), jdcnv(), juldate(), month_cnv(), nutate(), ydn2md(), ymd2dn()"
},

{
    "location": "ref/#Moon-and-sun-1",
    "page": "Reference",
    "title": "Moon and sun",
    "category": "section",
    "text": "moonpos(), mphase(), sunpos(), xyz()"
},

{
    "location": "ref/#Utilities-1",
    "page": "Reference",
    "title": "Utilities",
    "category": "section",
    "text": "airtovac(), calz_unred(), deredd(), flux2mag(), gal_uvw(), imf(), ismeuv(), kepler_solver(), lsf_rotate(), mag2flux(), paczynski(), planck_freq(), planck_wave(), rad2sec(), rhotheta(), sec2rad(), sixty(), sphdist(), ten(), tic_one(), ticpos(), tics(), trueanom(), uvbybeta(), vactoair()"
},

{
    "location": "ref/#Miscellaneous-(non-astronomy)-functions-1",
    "page": "Reference",
    "title": "Miscellaneous (non-astronomy) functions",
    "category": "section",
    "text": "ordinal()"
},

{
    "location": "ref/#AstroLib.Observatory",
    "page": "Reference",
    "title": "AstroLib.Observatory",
    "category": "type",
    "text": "Type holding information about an observing site.  Its fields are:\n\nname: the name of the site\nlatitude: North-ward latitude of the site in degrees\nlongitude: East-ward longitude of the site in degrees\naltitude: altitude of the site in meters\ntz: the number of hours of offset from UTC\n\n\n\n\n\n"
},

{
    "location": "ref/#AstroLib.Planet",
    "page": "Reference",
    "title": "AstroLib.Planet",
    "category": "type",
    "text": "Type holding information about a planet.  Its fields are:\n\nDesignation:\n\nname: the name\n\nPhysical characteristics:\n\nradius: mean radius in meters\neqradius: equatorial radius in meters\npolradius: polar radius in meters\nmass: mass in kilogram\n\nOrbital characteristics (epoch J2000):\n\necc: eccentricity of the orbit\naxis: semi-major axis of the orbit in meters\nperiod: sidereal orbital period in seconds\n\nPosition characteristics (epoch J2000):\n\ninc: inclination in degrees\nasc_long: longitude of the ascending node in degrees\nper_long: longitude of perihelion in degrees\nmean_long: mean longitude in degrees\n\n\n\n\n\n"
},

{
    "location": "ref/#AstroLib.adstring-Union{Tuple{T}, Tuple{T,T}} where T<:AbstractFloat",
    "page": "Reference",
    "title": "AstroLib.adstring",
    "category": "method",
    "text": "adstring(ra::Real, dec::Real[, precision::Int=2, truncate::Bool=true]) -> string\nadstring([ra, dec]) -> string\nadstring(dec) -> string\nadstring([ra], [dec]) -> [\"string1\", \"string2\", ...]\n\nPurpose\n\nReturns right ascension and declination as string(s) in sexagesimal format.\n\nExplanation\n\nTakes right ascension and declination expressed in decimal format, converts them to sexagesimal and return a formatted string.  The precision of right ascension and declination can be specified.\n\nArguments\n\nArguments of this function are:\n\nra: right ascension in decimal degrees.  It is converted to hours before printing.\ndec: declination in decimal degrees.\n\nThe function can be called in different ways:\n\nTwo numeric arguments: first is ra, the second is dec.\nAn iterable (array, tuple) of two elements: (ra, dec).\nOne numeric argument: it is assumed only dec is provided.\n\nOptional keywords affecting the output format are always available:\n\nprecision (optional integer keyword): specifies the number of digits of declination seconds.  The number of digits for right ascension seconds is always assumed to be one more precision.  If the function is called with only dec as input, precision default to 1, in any other case defaults to 0.\ntruncate (optional boolean keyword): if true, then the last displayed digit in the output is truncated in precision rather than rounded.  This option is useful if adstring is used to form an official IAU name (see http://vizier.u-strasbg.fr/Dic/iau-spec.htx) with coordinate specification.\n\nOutput\n\nThe function returns one string.  The format of strings can be specified with precision and truncate keywords, see above.\n\nExample\n\njulia> using AstroLib\n\njulia> adstring(30.4, -1.23, truncate=true)\n\" 02 01 35.9  -01 13 48\"\n\njulia> adstring.([30.4, -15.63], [-1.23, 48.41], precision=1)\n2-element Array{String,1}:\n \" 02 01 36.00  -01 13 48.0\"\n \" 22 57 28.80  +48 24 36.0\"\n\n\n\n\n\n"
},

{
    "location": "ref/#AstroLib.airtovac-Tuple{Real}",
    "page": "Reference",
    "title": "AstroLib.airtovac",
    "category": "method",
    "text": "airtovac(wave_air) -> wave_vacuum\n\nPurpose\n\nConverts air wavelengths to vacuum wavelengths.\n\nExplanation\n\nWavelengths are corrected for the index of refraction of air under standard conditions. Wavelength values below 2000 Å will not be altered, take care within 1 Å 2000 Å.  Uses relation of Ciddor (1996).\n\nArguments\n\nwave_air: the wavelength in air.\n\nOutput\n\nVacuum wavelength in angstroms.\n\nMethod\n\nUses relation of Ciddor (1996), Applied Optics 62, 958.\n\nExample\n\nIf the air wavelength is w = 6056.125 (a Krypton line), then airtovac(w) yields a vacuum wavelength of 6057.8019.\n\njulia> using AstroLib\n\njulia> airtovac(6056.125)\n6057.801930991426\n\nNotes\n\nvactoair converts vacuum wavelengths to air wavelengths.\n\nCode of this function is based on IDL Astronomy User\'s Library.\n\n\n\n\n\n"
},

{
    "location": "ref/#AstroLib.aitoff-Tuple{Real,Real}",
    "page": "Reference",
    "title": "AstroLib.aitoff",
    "category": "method",
    "text": "aitoff(l, b) -> x, y\n\nPurpose\n\nConvert longitude l and latitude b to (x, y) using an Aitoff projection.\n\nExplanation\n\nThis function can be used to create an all-sky map in Galactic coordinates with an equal-area Aitoff projection.  Output map coordinates are zero longitude centered.\n\nArguments\n\nl: longitude, scalar or vector, in degrees.\nb: latitude, number of elements as l, in degrees.\n\nCoordinates can be given also as a 2-tuple (l, b).\n\nOutput\n\n2-tuple (x, y).\n\nx: x coordinate, same number of elements as l.  x is normalized to be in -180 180.\ny: y coordinate, same number of elements as l.  y is normalized to be in -90 90.\n\nExample\n\nGet (x y) Aitoff coordinates of Sirius, whose Galactic coordinates are (22723 -8890).\n\njulia> using AstroLib\n\njulia> x, y = aitoff(227.23, -8.890)\n(-137.92196683723276, -11.772527357473054)\n\nNotes\n\nSee AIPS memo No. 46 (ftp://ftp.aoc.nrao.edu/pub/software/aips/TEXT/PUBL/AIPSMEMO46.PS), page 4, for details of the algorithm.  This version of aitoff assumes the projection is centered at b=0 degrees.\n\nCode of this function is based on IDL Astronomy User\'s Library.\n\n\n\n\n\n"
},

{
    "location": "ref/#AstroLib.altaz2hadec-Tuple{Real,Real,Real}",
    "page": "Reference",
    "title": "AstroLib.altaz2hadec",
    "category": "method",
    "text": "altaz2hadec(alt, az, lat) -> ha, dec\n\nPurpose\n\nConvert Horizon (Alt-Az) coordinates to Hour Angle and Declination.\n\nExplanation\n\nCan deal with the NCP singularity.  Intended mainly to be used by program hor2eq.\n\nArguments\n\nInput coordinates may be either a scalar or an array, of the same dimension.\n\nalt: local apparent altitude, in degrees, scalar or array.\naz: the local apparent azimuth, in degrees, scalar or vector, measured east of north!!!  If you have measured azimuth west-of-south (like the book Meeus does), convert it to east of north via: az = (az + 180) % 360.\nlat: the local geodetic latitude, in degrees, scalar or array.\n\nalt and az can be given as a 2-tuple (alt, az).\n\nOutput\n\n2-tuple (ha, dec)\n\nha: the local apparent hour angle, in degrees.  The hour angle is the time that right ascension of 0 hours crosses the local meridian.  It is unambiguously defined.\ndec: the local apparent declination, in degrees.\n\nThe output coordinates are always floating points and have the same type (scalar or array) as the input coordinates.\n\nExample\n\nArcturus is observed at an apparent altitude of 59d,05m,10s and an azimuth (measured east of north) of 133d,18m,29s while at the latitude of +43.07833 degrees.  What are the local hour angle and declination of this object?\n\njulia> using AstroLib\n\njulia> ha, dec = altaz2hadec(ten(59,05,10), ten(133,18,29), 43.07833)\n(336.6828582472844, 19.182450965120402)\n\nThe widely available XEPHEM code gets:\n\nHour Angle = 336.683\nDeclination = 19.1824\n\nNotes\n\nhadec2altaz converts Hour Angle and Declination to Horizon (Alt-Az) coordinates.\n\nCode of this function is based on IDL Astronomy User\'s Library.\n\n\n\n\n\n"
},

{
    "location": "ref/#AstroLib.baryvel-Tuple{Real}",
    "page": "Reference",
    "title": "AstroLib.baryvel",
    "category": "method",
    "text": "baryvel(dje, deq) -> dvelh, dvelb\n\nPurpose\n\nCalculates heliocentric and barycentric velocity components of Earth.\n\nExplanation\n\nBaryvel takes into account the Earth-Moon motion, and is useful for radial velocity work to an accuracy of ~1 m/s.\n\nArguments\n\ndje: julian ephemeris date\ndeq (optional): epoch of mean equinox of dvelh and dvelb. If deq is not provided, then it is assumed to be equal to dje.\n\nOutput\n\ndvelh: heliocentric velocity component. in km/s\ndvelb: barycentric velocity component. in km/s\n\nExample\n\nCompute the radial velocity of the Earth toward Altair on 15-Feb-1994 using both the original Stumpf algorithm.\n\njulia> using AstroLib\n\njulia> jd = jdcnv(1994, 2, 15, 0)\n2.4493985e6\n\njulia> baryvel(jd, 2000)\n([-17.0724, -22.8112, -9.88932], [-17.0808, -22.8047, -9.88626])\n\nNotes\n\nThe 3-vectors outputs dvelh and dvelb are given in a right-handed coordinate system with the +X axis toward the Vernal Equinox, and +Z axis toward the celestial pole.\n\nCode of this function is based on IDL Astronomy User\'s Library.\n\n\n\n\n\n"
},

{
    "location": "ref/#AstroLib.bprecess",
    "page": "Reference",
    "title": "AstroLib.bprecess",
    "category": "function",
    "text": "bprecess(ra, dec[, epoch]) -> ra1950, dec1950\nbprecess(ra, dec, muradec[, parallax=parallax, radvel=radvel]) -> ra1950, dec1950\n\nPurpose\n\nPrecess positions from J2000.0 (FK5) to B1950.0 (FK4).\n\nExplanation\n\nCalculates the mean place of a star at B1950.0 on the FK4 system from the mean place at J2000.0 on the FK5 system.\n\nbprecess function has two methods, one for each of the following cases:\n\nthe proper motion is known and non-zero\nthe proper motion is unknown or known to be exactly zero (i.e. extragalactic radio sources).  Better precision can be achieved in this case by inputting the epoch of the original observations.\n\nArguments\n\nThe function has 2 methods.  The common mandatory arguments are:\n\nra: input J2000 right ascension, in degrees.\ndec: input J2000 declination, in degrees.\n\nThe two methods have a different third argument (see \"Explanation\" section for more details).  It can be one of the following:\n\nmuradec: 2-element vector containing the proper motion in seconds of arc per tropical century in right ascension and declination.\nepoch: scalar giving epoch of original observations.\n\nIf none of these two arguments is provided (so bprecess is fed only with right ascension and declination), it is assumed that proper motion is exactly zero and epoch = 2000.\n\nIf it is used the method involving muradec argument, the following keywords are available:\n\nparallax (optional numerical keyword): stellar parallax, in seconds of arc.\nradvel (optional numerical keyword): radial velocity in km/s.\n\nRight ascension and declination can be passed as the 2-tuple (ra, dec).  You can also pass ra, dec, parallax, and radvel as arrays, all of the same length N.  In that case, muradec should be a matrix 2×N.\n\nOutput\n\nThe 2-tuple of right ascension and declination in 1950, in degrees, of input coordinates is returned.  If ra and dec (and other possible optional arguments) are arrays, the 2-tuple of arrays (ra1950, dec1950) of the same length as the input coordinates is returned.\n\nMethod\n\nThe algorithm is taken from the Explanatory Supplement to the Astronomical Almanac 1992, page 186.  See also Aoki et al (1983), A&A, 128, 263.  URL: http://adsabs.harvard.edu/abs/1983A%26A...128..263A.\n\nExample\n\nThe SAO2000 catalogue gives the J2000 position and proper motion for the star HD\n\nFind the B1950 position.\n\nRA(2000) = 13h 42m 12.740s\nDec(2000) = 8d 23\' 17.69\'\'\nMu(RA) = -.0257 s/yr\nMu(Dec) = -.090 \'\'/yr\n\njulia> using AstroLib\n\njulia> muradec = 100*[-15*0.0257, -0.090]; # convert to century proper motion\n\njulia> ra = ten(13, 42, 12.74)*15;\n\njulia> decl = ten(8, 23, 17.69);\n\njulia> adstring(bprecess(ra, decl, muradec), precision=2)\n\" 13 39 44.526  +08 38 28.63\"\n\nNotes\n\n\"When transferring individual observations, as opposed to catalog mean place, the safest method is to transform the observations back to the epoch of the observation, on the FK4 system (or in the system that was used to to produce the observed mean place), convert to the FK5 system, and transform to the the epoch and equinox of J2000.0\" – from the Explanatory Supplement (1992), p. 180\n\njprecess performs the precession to J2000 coordinates.\n\nCode of this function is based on IDL Astronomy User\'s Library.\n\n\n\n\n\n"
},

{
    "location": "ref/#AstroLib.calz_unred",
    "page": "Reference",
    "title": "AstroLib.calz_unred",
    "category": "function",
    "text": "calz_unred(wave, flux, ebv[, r_v]) -> deredden_wave\n\nPurpose\n\nDeredden a galaxy spectrum using the Calzetti et al. (2000) recipe.\n\nExplanation\n\nCalzetti et al.  (2000, ApJ 533, 682; http://adsabs.harvard.edu/abs/2000ApJ...533..682C) developed a recipe for dereddening the spectra of galaxies where massive stars dominate the radiation output, valid between 012 to 22 microns.  (calz_unred extrapolates between 012 and 00912 microns.)\n\nArguments\n\nwave: wavelength (Angstroms)\nflux: calibrated flux.\nebv: color excess E(B-V).  If a negative ebv is supplied, then fluxes will be reddened rather than deredenned.  Note that the supplied color excess should be that derived for the stellar continuum, EBV(stars), which is related to the reddening derived from the gas, EBV(gas), via the Balmer decrement by EBV(stars) = 0.44*EBV(gas).\nr_v (optional): ratio of total to selective extinction, default is 4.05.  Calzetti et al. (2000) estimate r_v = 405 pm 080 from optical-IR observations of 4 starbursts.\n\nOutput\n\nUnreddened flux, same units as flux.  Flux values will be left unchanged outside valid domain (00912 - 22 microns).\n\nExample\n\nEstimate how a flat galaxy spectrum (in wavelength) between 1200 Å and 3200 Å is altered by a reddening of E(B-V) = 0.1.\n\nwave = collect(1200:50:3150);\nflux = ones(wave);\nflux_new = calz_unred.(wave, flux, -0.1);\n\nUsing a plotting tool you can visualize the unreddend flux.  For example, with PyPlot.jl\n\nusing PyPlot\nplot(wave, flux_new)\n\nNotes\n\nCode of this function is based on IDL Astronomy User\'s Library.\n\n\n\n\n\n"
},

{
    "location": "ref/#AstroLib.co_aberration",
    "page": "Reference",
    "title": "AstroLib.co_aberration",
    "category": "function",
    "text": "co_aberration(jd, ra, dec[, eps=NaN]) -> d_ra, d_dec\n\nPurpose\n\nCalculate changes to right ascension and declination due to the effect of annual aberration\n\nExplanation\n\nWith reference to Meeus, Chapter 23\n\nArguments\n\njd: julian date, scalar or vector\nra: right ascension in degrees, scalar or vector\ndec: declination in degrees, scalar or vector\neps (optional): true obliquity of the ecliptic (in radians). It will be calculated if no argument is specified.\n\nOutput\n\nThe 2-tuple (d_ra, d_dec):\n\nd_ra: correction to right ascension due to aberration, in arc seconds\nd_dec: correction to declination due to aberration, in arc seconds\n\nExample\n\nCompute the change in RA and Dec of Theta Persei (RA = 2h46m,11.331s, Dec = 49d20\',54.5\'\') due to aberration on 2028 Nov 13.19 TD\n\njulia> using AstroLib\n\njulia> jd = jdcnv(2028,11,13,4, 56)\n2.4620887055555554e6\n\njulia> co_aberration(jd,ten(2,46,11.331)*15,ten(49,20,54.54))\n(30.04404628365077, 6.699400463119431)\n\ndra = 30.04404628365103\'\' (≈ 2.003s) ddec = 6.699400463118504\'\'\n\nNotes\n\nCode of this function is based on IDL Astronomy User\'s Library.\n\nThe output dra is not multiplied by cos(dec), so that apparentra = ra + d_ra/3600.\n\nThese formula are from Meeus, Chapters 23.  Accuracy is much better than 1 arcsecond. The maximum deviation due to annual aberration is 20.49\'\' and occurs when the Earth\'s velocity is perpendicular to the direction of the star.\n\nThis function calls true_obliquity and sunpos.\n\n\n\n\n\n"
},

{
    "location": "ref/#AstroLib.co_nutate-Tuple{Real,Real,Real}",
    "page": "Reference",
    "title": "AstroLib.co_nutate",
    "category": "method",
    "text": "co_nutate(jd, ra, dec) -> d_ra, d_dec, eps, d_psi, d_eps\n\nPurpose\n\nCalculate changes in RA and Dec due to nutation of the Earth\'s rotation\n\nExplanation\n\nCalculates necessary changes to ra and dec due to the nutation of the Earth\'s rotation axis, as described in Meeus, Chap 23. Uses formulae from Astronomical Almanac, 1984, and does the calculations in equatorial rectangular coordinates to avoid singularities at the celestial poles.\n\nArguments\n\njd: julian date, scalar or vector\nra: right ascension in degrees, scalar or vector\ndec: declination in degrees, scalar or vector\n\nOutput\n\nThe 5-tuple (d_ra, d_dec, eps, d_psi, d_eps):\n\nd_ra: correction to right ascension due to nutation, in degrees\nd_dec: correction to declination due to nutation, in degrees\neps: the true obliquity of the ecliptic\nd_psi: nutation in the longitude of the ecliptic\nd_eps: nutation in the obliquity of the ecliptic\n\nExample\n\nExample 23a in Meeus: On 2028 Nov 13.19 TD the mean position of Theta Persei is 2h 46m 11.331s 49d 20\' 54.54\'\'. Determine the shift in position due to the Earth\'s nutation.\n\njulia> using AstroLib\n\njulia> jd = jdcnv(2028,11,13,4,56)\n2.4620887055555554e6\n\njulia> co_nutate(jd,ten(2,46,11.331) * 15,ten(49,20,54.54))\n(0.004400660977140092, 0.00172668646508356, 0.40904016038217555, 14.859389427896476, 2.7038090372350574)\n\nNotes\n\nCode of this function is based on IDL Astronomy User\'s Library.\n\nThe output of d_ra and d_dec in IDL AstroLib is in arcseconds, however it is in degrees here.\n\nThis function calls mean_obliquity and nutate.\n\n\n\n\n\n"
},

{
    "location": "ref/#AstroLib.co_refract",
    "page": "Reference",
    "title": "AstroLib.co_refract",
    "category": "function",
    "text": "co_refract(old_alt[, altitude=0, pressure=NaN, temperature=NaN,\n           epsilon=0.25, to_observe=false]) -> aout\n\nPurpose\n\nCalculate correction to altitude due to atmospheric refraction.\n\nExplanation\n\nBecause the index of refraction of air is not precisely 1.0, the atmosphere bends all incoming light, making a star or other celestial object appear at a slightly different altitude (or elevation) than it really is.  It is important to understand the following definitions:\n\nObserved Altitude: The altitude that a star is seen to be, with a telescope. This is where it appears in the sky. This is should be always greater than the apparent altitude.\nApparent Altitude: The altitude that a star would be at, if ~there were no atmosphere~ (sometimes called the \"true\" altitude). This is usually calculated from an object\'s celestial coordinates. Apparent altitude should always be smaller than the observed altitude.\n\nThus, for example, the Sun\'s apparent altitude when you see it right on the horizon is actually -34 arcminutes.\n\nThis program uses a couple of simple formulae to estimate the effect for most optical and radio wavelengths. Typically, you know your observed altitude (from an observation), and want the apparent altitude. To go the other way, this program uses an iterative approach.\n\nArguments\n\nold_alt: observed altitude in degrees. If to_observe is set to true, this should be apparent altitude\naltitude (optional): the height of the observing location, in meters. This is only used to determine an approximate temperature and pressure, if these are not specified separately. Default is 0 i.e. sea level\npressure (optional): the pressure at the observing location, in millibars. Default is NaN\ntemperature (optional): the temperature at the observing location, in Kelvins. Default is NaN\nepsilon (optional): the accuracy to obtain, in arcseconds. If to_observe is true, then it will be calculated. Default is 0.25 arcseconds\nto_observe (optional boolean keyword): if set to true, it is assumed that old_alt has apparent altitude as its input and the observed altitude will be found\n\nOutput\n\naout: apparent altitude, in degrees. Observed altitude is returned if to_observe is set to true\n\nExample\n\nThe lower limb of the Sun is observed to have altitude of 0d 30\'. Calculate the the true (i.e. apparent) altitude of the Sun\'s lower limb using mean  conditions of air pressure and temperature.\n\njulia> using AstroLib\n\njulia> co_refract(0.5)\n0.02584736873098442\n\nNotes\n\nIf altitude is set but the temperature or pressure is not, the program will make an intelligent guess for the temperature and pressure.\n\nWavelength Dependence\n\nThis correction is 0 at zenith, about 1 arcminute at 45 degrees, and 34 arcminutes at the horizon for optical wavelengths. The correction is non-negligible at all wavelengths, but is not very easily calculable. These formulae assume a wavelength of 550 nm, and will be accurate to about 4 arcseconds for all visible wavelengths, for elevations of 10 degrees and higher. Amazingly, they are also accurate for radio frequencies less than ~ 100 GHz.\n\nReferences\n\nMeeus, Astronomical Algorithms, Chapter 15.\nExplanatory Supplement to the Astronomical Almanac, 1992.\nMethods of Experimental Physics, Vol 12 Part B, Astrophysics, Radio Telescopes, Chapter 2.5, \"Refraction Effects in the Neutral Atmosphere\", by R.K. Crane.\n\nCode of this function is based on IDL Astronomy User\'s Library.\n\n\n\n\n\n"
},

{
    "location": "ref/#AstroLib.ct2lst-Tuple{Real,Real}",
    "page": "Reference",
    "title": "AstroLib.ct2lst",
    "category": "method",
    "text": "ct2lst(longitude, jd) -> local_sidereal_time\nct2lst(longitude, tz, date) -> local_sidereal_time\n\nPurpose\n\nConvert from Local Civil Time to Local Mean Sidereal Time.\n\nArguments\n\nThe function can be called in two different ways.  The only argument common to both methods is longitude:\n\nlongitude: the longitude in degrees (east of Greenwich) of the place for which the local sidereal time is desired.  The Greenwich mean sidereal time (GMST) can be found by setting longitude = 0.\n\nThe civil date to be converted to mean sidereal time can be specified either by providing the Julian days:\n\njd: this is number of Julian days for the date to be converted.\n\nor the time zone and the date:\n\ntz: the time zone of the site in hours, positive East of the Greenwich meridian (ahead of GMT).  Use this parameter to easily account for Daylight Savings time (e.g. -4=EDT, -5 = EST/CDT).\ndate: this is the local civil time with type DateTime.\n\nOutput\n\nThe local sidereal time for the date/time specified in hours.\n\nMethod\n\nThe Julian days of the day and time is question is used to determine the number of days to have passed since 2000-01-01.  This is used in conjunction with the GST of that date to extrapolate to the current GST; this is then used to get the LST.  See Astronomical Algorithms by Jean Meeus, p. 84 (Eq. 11-4) for the constants used.\n\nExample\n\nFind the Greenwich mean sidereal time (GMST) on 2008-07-30 at 15:53 in Baltimore, Maryland (longitude=-76.72 degrees).  The timezone is EDT or tz=-4\n\njulia> using AstroLib, Dates\n\njulia> lst = ct2lst(-76.72, -4, DateTime(2008, 7, 30, 15, 53))\n11.356505172312609\n\njulia> sixty(lst)\n3-element StaticArrays.SArray{Tuple{3},Float64,1,3}:\n 11.0\n 21.0\n 23.418620325392112\n\nFind the Greenwich mean sidereal time (GMST) on 2015-11-24 at 13:21 in Heidelberg, Germany (longitude=08° 43\' E).  The timezone is CET or tz=1. Provide ct2lst only with the longitude of the place and the number of Julian days.\n\njulia> using AstroLib, Dates\n\njulia> longitude=ten(8, 43); # Convert longitude to decimals.\n\njulia> jd = jdcnv(DateTime(2015, 11, 24, 13, 21) - Dates.Hour(1));\n# Get number of Julian days. Remember to subtract the time zone in\n# order to convert local time to UTC.\n\njulia> lst = ct2lst(longitude, jd) # Calculate Greenwich Mean Sidereal Time.\n17.140685171005316\n\njulia> sixty(lst)\n3-element StaticArrays.SArray{Tuple{3},Float64,1,3}:\n 17.0\n  8.0\n 26.466615619137883\n\nNotes\n\nCode of this function is based on IDL Astronomy User\'s Library.\n\n\n\n\n\n"
},

{
    "location": "ref/#AstroLib.daycnv",
    "page": "Reference",
    "title": "AstroLib.daycnv",
    "category": "function",
    "text": "daycnv(julian_days) -> DateTime\n\nPurpose\n\nConverts Julian days number to Gregorian calendar dates.\n\nExplanation\n\nTakes the number of Julian calendar days since epoch -4713-11-24T12:00:00 and returns the corresponding proleptic Gregorian Calendar date.\n\nArgument\n\njulian_days: Julian days number.\n\nOutput\n\nProleptic Gregorian Calendar date, of type DateTime, corresponding to the given Julian days number.\n\nExample\n\njulia> using AstroLib\n\njulia> daycnv(2440000)\n1968-05-23T12:00:00\n\nNotes\n\njdcnv is the inverse of this function.\n\n\n\n\n\n"
},

{
    "location": "ref/#AstroLib.deredd-NTuple{5,Real}",
    "page": "Reference",
    "title": "AstroLib.deredd",
    "category": "method",
    "text": "deredd(Eby, by, m1, c1, ub) -> by0, m0, c0, ub0\n\nPurpose\n\nDeredden stellar Stromgren parameters given for a value of E(b-y)\n\nArguments\n\nEby: color index E(b-y), scalar (E(b-y) = 0.73*E(B-V))\nby: b-y color (observed)\nm1: Stromgren line blanketing parameter (observed)\nc1: Stromgren Balmer discontinuity parameter (observed)\nub: u-b color (observed)\n\nAll arguments can be either scalars or arrays all of the same length.\n\nOutput\n\nThe 4-tuple (by0, m0, c0, ub0).\n\nby0: b-y color (dereddened)\nm0: line blanketing index (dereddened)\nc0: Balmer discontinuity parameter (dereddened)\nub0: u-b color (dereddened)\n\nThese are scalars or arrays of the same length as the input arguments.\n\nExample\n\njulia> using AstroLib\n\njulia> deredd(0.5, 0.2, 1.0, 1.0, 0.1)\n(-0.3, 1.165, 0.905, -0.665)\n\nNotes\n\nCode of this function is based on IDL Astronomy User\'s Library.\n\n\n\n\n\n"
},

{
    "location": "ref/#AstroLib.eci2geo-NTuple{4,Real}",
    "page": "Reference",
    "title": "AstroLib.eci2geo",
    "category": "method",
    "text": "eci2geo(x, y, z, jd) -> latitude, longitude, altitude\n\nPurpose\n\nConvert Earth-centered inertial coordinates to geographic spherical coordinates.\n\nExplanation\n\nConverts from ECI (Earth-Centered Inertial) (x, y, z) rectangular coordinates to geographic spherical coordinates (latitude, longitude, altitude).  Julian day is also needed as input.\n\nECI coordinates are in km from Earth center at the supplied time (True of Date). Geographic coordinates assume the Earth is a perfect sphere, with radius equal to its equatorial radius.\n\nArguments\n\nx: ECI x coordinate at jd, in kilometers.\ny: ECI y coordinate at jd, in kilometers.\nz: ECI z coordinate at jd, in kilometers.\njd: Julian days.\n\nThe three coordinates can be passed as a 3-tuple (x, y, z).  In addition, x, y, z, and jd can be given as arrays of the same length.\n\nOutput\n\nThe 3-tuple of geographical coordinate (latitude, longitude, altitude).\n\nlatitude: latitude, in degrees.\nlongitude: longitude, in degrees.\naltitude: altitude, in kilometers.\n\nIf ECI coordinates are given as arrays, a 3-tuple of arrays of the same length is returned.\n\nExample\n\nObtain the geographic direction of the vernal point on 2015-06-30T14:03:12.857, in geographic coordinates, at altitude 600 km.  Note: equatorial radii of Solar System planets in meters are stored into AstroLib.planets dictionary.\n\njulia> using AstroLib\n\njulia> x = AstroLib.planets[\"earth\"].eqradius*1e-3 + 600;\n\njulia> lat, long, alt = eci2geo(x, 0, 0, jdcnv(\"2015-06-30T14:03:12.857\"))\n(0.0, 230.87301833205856, 600.0)\n\nThese coordinates can be further transformed into geodetic coordinates using geo2geodetic or into geomagnetic coordinates using geo2mag.\n\nNotes\n\ngeo2eci converts geographic spherical coordinates to Earth-centered inertial coordinates.\n\nCode of this function is based on IDL Astronomy User\'s Library.\n\n\n\n\n\n"
},

{
    "location": "ref/#AstroLib.eq2hor",
    "page": "Reference",
    "title": "AstroLib.eq2hor",
    "category": "function",
    "text": "eq2hor(ra, dec, jd[, obsname; ws=false, B1950=false, precession=true, nutate=true,\n       aberration=true, refract=true, pressure=NaN, temperature=NaN]) -> alt, az, ha\n\neq2hor(ra, dec, jd, lat, lon[, altitude=0; ws=false, B1950=false,\n       precession=true, nutate=true, aberration=true, refract=true,\n       pressure=NaN, temperature=NaN]) -> alt, az, ha\n\nPurpose\n\nConvert celestial  (ra-dec) coords to local horizon coords (alt-az).\n\nExplanation\n\nThis code calculates horizon (alt,az) coordinates from equatorial (ra,dec) coords. It performs precession, nutation, aberration, and refraction corrections.\n\nArguments\n\nThis function has two base methods.  With one you can specify the name of the observatory, if present in AstroLib.observatories, with the other one you can provide the coordinates of the observing site and, optionally, the altitude.\n\nCommon mandatory arguments:\n\nra: right ascension of object, in degrees\ndec: declination of object, in degrees\njd: julian date\n\nOther positional arguments:\n\nobsname: set this to a valid observatory name in AstroLib.observatories.\n\nor\n\nlat: north geodetic latitude of location, in degrees.\nlon: AST longitude of location, in degrees. You can specify west longitude with a negative sign.\naltitude: the altitude of the observing location, in meters.  It is 0 by default\n\nOptional keyword arguments:\n\nws (optional boolean keyword): set this to true to get the azimuth measured\nB1950 (optional boolean keyword): set this to true if the ra and dec are specified in B1950 (FK4 coordinates) instead of J2000 (FK5). This is false by default\nprecession (optional boolean keyword): set this to false for no precession correction, true by default\nnutate (optional boolean keyword): set this to false for no nutation, true by default\naberration (optional boolean keyword): set this to false for no aberration correction, true by default\nrefract (optional boolean keyword): set this to false for no refraction correction, true by default\npressure (optional keyword): the pressure at the observing location, in millibars. Default value is NaN\ntemperature (optional keyword): the temperature at the observing location, in Kelvins. Default value is NaN\n\nOutput\n\nalt: altitude of horizon coords, in degrees\naz: azimuth angle measured East from North (unless ws is true), in degrees\nha: hour angle, in degrees\n\nExample\n\njulia> using AstroLib\n\njulia> alt_o, az_o = eq2hor(ten(6,40,58.2)*15, ten(9,53,44), 2460107.25, ten(50,31,36),\n                            ten(6,51,18), 369, pressure = 980, temperature=283)\n(16.42399150972157, 265.60656932130564, 76.11502253130612)\n\njulia> adstring(az_o, alt_o)\n\" 17 42 25.6  +16 25 26\"\n\nNotes\n\nCode of this function is based on IDL Astronomy User\'s Library.\n\n\n\n\n\n"
},

{
    "location": "ref/#AstroLib.eqpole-Tuple{Real,Real}",
    "page": "Reference",
    "title": "AstroLib.eqpole",
    "category": "method",
    "text": "eqpole(l, b[; southpole = false]) -> x, y\n\nPurpose\n\nConvert right ascension l and declination b to coordinate (x y) using an equal-area polar projection.\n\nExplanation\n\nThe output x and y coordinates are scaled to be in the range -90 90 and to go from equator to pole to equator.  Output map points can be centered on the north pole or south pole.\n\nArguments\n\nl: longitude, scalar or vector, in degrees\nb: latitude, same number of elements as right ascension, in degrees\nsouthpole (optional boolean keyword): keyword to indicate that the plot is to be centered on the south pole instead of the north pole.  Default is false.\n\nOutput\n\nThe 2-tuple (x y):\n\nx coordinate, same number of elements as right ascension, normalized to be in the range -90 90.\ny coordinate, same number of elements as declination, normalized to be in the range -90 90.\n\nExample\n\njulia> using AstroLib\n\njulia> eqpole(100, 35, southpole=true)\n(-111.18287262822456, -19.604540237028665)\n\njulia> eqpole(80, 19)\n(72.78853915267848, 12.83458333897169)\n\nNotes\n\nCode of this function is based on IDL Astronomy User\'s Library.\n\n\n\n\n\n"
},

{
    "location": "ref/#AstroLib.euler-Tuple{Real,Real,Integer}",
    "page": "Reference",
    "title": "AstroLib.euler",
    "category": "method",
    "text": "euler(ai, bi, select[, FK4=true, radians=true])\n\nPurpose\n\nTransform between Galactic, celestial, and ecliptic coordinates.\n\nExplanation\n\nThe function is used by the astro procedure.\n\nArguments\n\nai: input longitude, scalar or vector.\nbi: input latitude, scalar or vector.\nselect : integer input specifying type of coordinate transformation. SELECT   From          To     | SELECT   From       To    1   RA-Dec (2000) Galactic |   4    Ecliptic   RA-Dec    2   Galactic      RA-DEC   |   5    Ecliptic   Galactic    3   RA-Dec        Ecliptic |   6    Galactic   Ecliptic\nFK4 (optional boolean keyword) : if this keyword is set to true, then input and output celestial and ecliptic coordinates should be given in equinox B1950. When false, by default, they should be given in equinox J2000.\nradians (optional boolean keyword) : if this keyword is set to true, all input and output angles are in radians rather than degrees.\n\nOutput\n\na 2-tuple (ao, bo):\n\nao: output longitude in degrees.\nbo: output latitude in degrees.\n\nExample\n\nFind the Galactic coordinates of Cyg X-1 (ra=299.590315, dec=35.201604)\n\njulia> using AstroLib\n\njulia> euler(299.590315, 35.201604, 1)\n(71.33498957116959, 3.0668335310640984)\n\nNotes\n\nCode of this function is based on IDL Astronomy User\'s Library.\n\n\n\n\n\n"
},

{
    "location": "ref/#AstroLib.flux2mag",
    "page": "Reference",
    "title": "AstroLib.flux2mag",
    "category": "function",
    "text": "flux2mag(flux[, zero_point, ABwave=number]) -> magnitude\n\nPurpose\n\nConvert from flux expressed in erg/(s cm² Å) to magnitudes.\n\nExplanation\n\nThis is the reverse of mag2flux.\n\nArguments\n\nflux: the flux to be converted in magnitude, expressed in erg/(s cm² Å).\nzero_point: the zero point level of the magnitude.  If not\n\nsupplied then defaults to 21.1 (Code et al 1976).  Ignored if the ABwave  keyword is supplied\n\nABwave (optional numeric keyword): wavelength in Angstroms.\n\nIf supplied, then returns Oke AB magnitudes (Oke & Gunn 1983, ApJ, 266, 713;  http://adsabs.harvard.edu/abs/1983ApJ...266..713O).\n\nOutput\n\nThe magnitude.\n\nIf the ABwave keyword is set then magnitude is given by the expression\n\ntextABmag = -25log_10(f) - 5log_10(textABwave) - 2406\n\nOtherwise, magnitude is given by the expression\n\ntextmag = -25log_10(textflux) - textzero point\n\nExample\n\njulia> using AstroLib\n\njulia> flux2mag(5.2e-15)\n14.609991640913002\n\njulia> flux2mag(5.2e-15, 15)\n20.709991640913003\n\njulia> flux2mag(5.2e-15, ABwave=15)\n27.423535345634598\n\nNotes\n\nCode of this function is based on IDL Astronomy User\'s Library.\n\n\n\n\n\n"
},

{
    "location": "ref/#AstroLib.gal_uvw-NTuple{6,Real}",
    "page": "Reference",
    "title": "AstroLib.gal_uvw",
    "category": "method",
    "text": "gal_uvw(ra, dec, pmra, pmdec, vrad, plx[, lsr=true]) -> u, v, w\n\nPurpose\n\nCalculate the Galactic space velocity (u v w) of a star.\n\nExplanation\n\nCalculates the Galactic space velocity (u v w) of a star given its (1) coordinates, (2) proper motion, (3) parallax, and (4) radial velocity.\n\nArguments\n\nUser must supply a position, proper motion, radial velocity and parallax. Either scalars or arrays all of the same length can be supplied.\n\n(1) Position:\n\nra: right ascension, in degrees\ndec: declination, in degrees\n\n(2) Proper Motion\n\npmra: proper motion in right ascension in arc units (typically milli-arcseconds/yr).  If given mu_alpha – proper motion in seconds of time/year – then this is equal to 15 mu_alpha cos(textdec).\npmdec: proper motion in declination (typically mas/yr).\n\n(3) Radial Velocity\n\nvrad: velocity in km/s\n\n(4) Parallax\n\nplx: parallax with same distance units as proper motion measurements typically milliarcseconds (mas)\n\nIf you know the distance in parsecs, then set plx to 1000textdistance, if proper motion measurements are given in milli-arcseconds/yr.\n\nThere is an additional optional keyword:\n\nlsr (optional boolean keyword): if this keyword is set to true, then the output velocities will be corrected for the solar motion (u v w)_odot = (-85 1338 649) (Coşkunoǧlu et al. 2011 MNRAS, 412, 1237; DOI:10.1111/j.1365-2966.2010.17983.x) to the local standard of rest (LSR).  Note that the value of the solar motion through the LSR remains poorly determined.\n\nOutput\n\nThe 3-tuple (u v w)\n\nu: velocity (km/s) positive toward the Galactic anticenter\nv: velocity (km/s) positive in the direction of Galactic rotation\nw: velocity (km/s) positive toward the North Galactic Pole\n\nMethod\n\nFollows the general outline of Johnson & Soderblom (1987, AJ, 93, 864; DOI:10.1086/114370) except that u is positive outward toward the Galactic anticenter, and the J2000 transformation matrix to Galactic coordinates is taken from the introduction to the Hipparcos catalog.\n\nExample\n\nCompute the U,V,W coordinates for the halo star HD 6755.  Use values from Hipparcos catalog, and correct to the LSR.\n\njulia> using AstroLib\n\njulia> ra=ten(1,9,42.3)*15.; dec = ten(61,32,49.5);\n\njulia> pmra = 627.89;  pmdec = 77.84; # mas/yr\n\njulia> vrad = -321.4; dis = 129; # distance in parsecs\n\njulia> u, v, w = gal_uvw(ra, dec, pmra, pmdec, vrad, 1e3/dis, lsr=true)\n(118.2110474553902, -466.4828898385057, 88.16573278565097)\n\nNotes\n\nThis function does not take distance as input.  See \"Arguments\" section above for how to provide it using parallax argument.\n\nCode of this function is based on IDL Astronomy User\'s Library.\n\n\n\n\n\n"
},

{
    "location": "ref/#AstroLib.gcirc-Tuple{Integer,Real,Real,Real,Real}",
    "page": "Reference",
    "title": "AstroLib.gcirc",
    "category": "method",
    "text": "gcirc(units, ra1, dec1, ra2, dec2) -> angular_distance\n\nPurpose\n\nComputes rigorous great circle arc distances.\n\nExplanation\n\nInput position can be either radians, sexagesimal right ascension and declination, or degrees.\n\nArguments\n\nunits: integer, can be either 0, or 1, or 2.  Describes units of inputs and output:\n0: everything (input right ascensions and declinations, and output distance) is radians\n1: right ascensions are in decimal hours, declinations in decimal degrees, output distance in arc seconds\n2: right ascensions and declinations are in degrees, output distance in arc seconds\nra1:  right ascension or longitude of point 1\ndec1: declination or latitude of point 1\nra2: right ascension or longitude of point 2\ndec2: declination or latitude of point 2\n\nBoth ra1 and dec1, and ra2 and dec2 can be given as 2-tuples (ra1, dec1) and (ra2, dec2).\n\nOutput\n\nAngular distance on the sky between points 1 and 2, as a AbstractFloat.  See units argument above for the units.\n\nMethod\n\n\"Haversine formula\" see http://en.wikipedia.org/wiki/Great-circle_distance.\n\nExample\n\njulia> using AstroLib\n\njulia> gcirc(0, 120, -43, 175, +22)\n1.590442261600714\n\nNotes\n\nThe function sphdist provides an alternate method of computing a spherical\n\ndistance.\n\nThe Haversine formula can give rounding errors for antipodal points.\n\nCode of this function is based on IDL Astronomy User\'s Library.\n\n\n\n\n\n"
},

{
    "location": "ref/#AstroLib.geo2eci-NTuple{4,Real}",
    "page": "Reference",
    "title": "AstroLib.geo2eci",
    "category": "method",
    "text": "geo2eci(latitude, longitude, altitude, jd) -> x, y, z\n\nPurpose\n\nConvert geographic spherical coordinates to Earth-centered inertial coordinates.\n\nExplanation\n\nConverts from geographic spherical coordinates (latitude, longitude, altitude) to ECI (Earth-Centered Inertial) (x, y, z) rectangular coordinates.  Julian days is also needed.\n\nGeographic coordinates assume the Earth is a perfect sphere, with radius equal to its equatorial radius.  ECI coordinates are in km from Earth center at epoch TOD (True of Date).\n\nArguments\n\nlatitude: geographic latitude, in degrees.\nlongitude: geographic longitude, in degrees.\naltitude: geographic altitude, in kilometers.\njd: Julian days.\n\nThe three coordinates can be passed as a 3-tuple (latitude, longitude, altitude).  In addition, latitude, longitude, altitude, and jd can be given as arrays of the same length.\n\nOutput\n\nThe 3-tuple of ECI (x, y, z) coordinates, in kilometers.  The TOD epoch is the supplied jd time.\n\nIf geographical coordinates are given as arrays, a 3-tuple of arrays of the same length is returned.\n\nExample\n\nObtain the ECI coordinates of the intersection of the equator and Greenwich\'s meridian on 2015-06-30T14:03:12.857\n\njulia> using AstroLib\n\njulia> geo2eci(0, 0, 0, jdcnv(\"2015-06-30T14:03:12.857\"))\n(-4024.8671780315185, 4947.835465127513, 0.0)\n\nNotes\n\neci2geo converts Earth-centered inertial coordinates to geographic spherical coordinates.\n\nCode of this function is based on IDL Astronomy User\'s Library.\n\n\n\n\n\n"
},

{
    "location": "ref/#AstroLib.geo2geodetic-NTuple{5,Real}",
    "page": "Reference",
    "title": "AstroLib.geo2geodetic",
    "category": "method",
    "text": "geo2geodetic(latitude, longitude, altitude) -> latitude, longitude, altitude\ngeo2geodetic(latitude, longitude, altitude, planet) -> latitude, longitude, altitude\ngeo2geodetic(latitude, longitude, altitude, equatorial_radius, polar_radius) -> latitude, longitude, altitude\n\nPurpose\n\nConvert from geographic (or planetographic) to geodetic coordinates.\n\nExplanation\n\nConverts from geographic (latitude, longitude, altitude) to geodetic (latitude, longitude, altitude).  In geographic coordinates, the Earth is assumed a perfect sphere with a radius equal to its equatorial radius.  The geodetic (or ellipsoidal) coordinate system takes into account the Earth\'s oblateness.\n\nGeographic and geodetic longitudes are identical.  Geodetic latitude is the angle between local zenith and the equatorial plane.  Geographic and geodetic altitudes are both the closest distance between the satellite and the ground.\n\nArguments\n\nThe function has two base methods.  The arguments common to all methods and always mandatory are latitude, longitude, and altitude:\n\nlatitude: geographic latitude, in degrees.\nlongitude: geographic longitude, in degrees.\naltitude: geographic altitude, in kilometers.\n\nIn order to convert to geodetic coordinates, you can either provide custom equatorial and polar radii of the planet or use the values of one of the planets of Solar System (Pluto included).\n\nIf you want to use the method with explicit equatorial and polar radii the additional mandatory arguments are:\n\nequatorial_radius: value of the equatorial radius of the body, in kilometers.\npolar_radius: value of the polar radius of the body, in kilometers.\n\nInstead, if you want to use the method with the selection of a planet, the only additional argument is the planet name:\n\nplanet (optional string argument): string with the name of the Solar System planet, from \"Mercury\" to \"Pluto\".  If omitted (so, when only latitude, longitude, and altitude are provided), the default is \"Earth\".\n\nIn all cases, the three coordinates can be passed as a 3-tuple (latitude, longitude, altitude).  In addition, geographical latitude, longitude, and altitude can be given as arrays of the same length.\n\nOutput\n\nThe 3-tuple (latitude, longitude, altitude) in geodetic coordinates, for the body with specified equatorial and polar radii (Earth by default).\n\nIf geographical coordinates are given as arrays, a 3-tuple of arrays of the same length is returned.\n\nMethod\n\nStephen P.  Keeler and Yves Nievergelt, \"Computing geodetic coordinates\", SIAM Rev. Vol. 40, No. 2, pp. 300-309, June 1998 (DOI:10.1137/S0036144597323921).\n\nPlanetary constants are from Planetary Fact Sheet (http://nssdc.gsfc.nasa.gov/planetary/factsheet/index.html).\n\nExample\n\nLocate the Earth geographic North pole (latitude: 90°, longitude: 0°, altitude 0 km), in geodetic coordinates:\n\njulia> using AstroLib\n\njulia> geo2geodetic(90, 0, 0)\n(90.0, 0.0, 21.38499999999931)\n\nThe same for Jupiter:\n\njulia> using AstroLib\n\njulia> geo2geodetic(90, 0, 0, \"Jupiter\")\n(90.0, 0.0, 4638.0)\n\nFind geodetic coordinates for point of geographic coordinates (latitude, longitude, altitude) = (43.16°, -24.32°, 3.87 km) on a planet with equatorial radius 8724.32 km and polar radius 8619.19 km:\n\njulia> using AstroLib\n\njulia> geo2geodetic(43.16, -24.32, 3.87, 8724.32, 8619.19)\n(43.849399515234516, -24.32, 53.53354478670964)\n\nNotes\n\nWhereas the conversion from geodetic to geographic coordinates is given by an exact, analytical formula, the conversion from geographic to geodetic isn\'t. Approximative iterations (as used here) exist, but tend to become less good with increasing eccentricity and altitude.  The formula used in this routine should give correct results within six digits for all spatial locations, for an ellipsoid (planet) with an eccentricity similar to or less than Earth\'s.  More accurate results can be obtained via calculus, needing a non-determined amount of iterations.\n\nIn any case, the function geodetic2geo, which converts from geodetic (or planetodetic) to geographic coordinates, can be used to estimate the accuracy of geo2geodetic.\n\njulia> using AstroLib\n\njulia> collect(geodetic2geo(geo2geodetic(67.2, 13.4, 1.2))) - [67.2, 13.4, 1.2]\n3-element Array{Float64,1}:\n -3.5672513831741526e-9\n  0.0\n  9.484211194177306e-10\n\nCode of this function is based on IDL Astronomy User\'s Library.\n\n\n\n\n\n"
},

{
    "location": "ref/#AstroLib.geo2mag",
    "page": "Reference",
    "title": "AstroLib.geo2mag",
    "category": "function",
    "text": "geo2mag(latitude, longitude[, year]) -> geomagnetic_latitude, geomagnetic_longitude\n\nPurpose\n\nConvert from geographic to geomagnetic coordinates.\n\nExplanation\n\nConverts from geographic (latitude, longitude) to geomagnetic (latitude, longitude).  Altitude is not involved in this function.\n\nArguments\n\nlatitude: geographic latitude (North), in degrees.\nlongitude: geographic longitude (East), in degrees.\nyear (optional numerical argument): the year in which to perform conversion. If omitted, defaults to current year.\n\nThe coordinates can be passed as arrays of the same length.\n\nOutput\n\nThe 2-tuple of magnetic (latitude, longitude) coordinates, in degrees.\n\nIf geographical coordinates are given as arrays, a 2-tuple of arrays of the same length is returned.\n\nExample\n\nKyoto has geographic coordinates 35° 00\' 42\'\' N, 135° 46\' 06\'\' E, find its geomagnetic coordinates in 2016:\n\njulia> using AstroLib\n\njulia> geo2mag(ten(35,0,42), ten(135,46,6), 2016)\n(36.86579228937769, -60.184060536651614)\n\nNotes\n\nThis function uses list of North Magnetic Pole positions provided by World Magnetic Model (https://www.ngdc.noaa.gov/geomag/data/poles/NP.xy).\n\nmag2geo converts geomagnetical coordinates to geographic coordinates.\n\nCode of this function is based on IDL Astronomy User\'s Library.\n\n\n\n\n\n"
},

{
    "location": "ref/#AstroLib.geodetic2geo-NTuple{5,Real}",
    "page": "Reference",
    "title": "AstroLib.geodetic2geo",
    "category": "method",
    "text": "geodetic2geo(latitude, longitude, altitude) -> latitude, longitude, altitude\ngeodetic2geo(latitude, longitude, altitude, planet) -> latitude, longitude, altitude\ngeodetic2geo(latitude, longitude, altitude, equatorial_radius, polar_radius) -> latitude, longitude, altitude\n\nPurpose\n\nConvert from geodetic (or planetodetic) to geographic coordinates.\n\nExplanation\n\nConverts from geodetic (latitude, longitude, altitude) to geographic (latitude, longitude, altitude).  In geographic coordinates, the Earth is assumed a perfect sphere with a radius equal to its equatorial radius.  The geodetic (or ellipsoidal) coordinate system takes into account the Earth\'s oblateness.\n\nGeographic and geodetic longitudes are identical.  Geodetic latitude is the angle between local zenith and the equatorial plane.  Geographic and geodetic altitudes are both the closest distance between the satellite and the ground.\n\nArguments\n\nThe function has two base methods.  The arguments common to all methods and always mandatory are latitude, longitude, and altitude:\n\nlatitude: geodetic latitude, in degrees.\nlongitude: geodetic longitude, in degrees.\naltitude: geodetic altitude, in kilometers.\n\nIn order to convert to geographic coordinates, you can either provide custom equatorial and polar radii of the planet or use the values of one of the planets of Solar System (Pluto included).\n\nIf you want to use the method with explicit equatorial and polar radii the additional mandatory arguments are:\n\nequatorial_radius: value of the equatorial radius of the body, in kilometers.\npolar_radius: value of the polar radius of the body, in kilometers.\n\nInstead, if you want to use the method with the selection of a planet, the only additional argument is the planet name:\n\nplanet (optional string argument): string with the name of the Solar System planet, from \"Mercury\" to \"Pluto\".  If omitted (so, when only latitude, longitude, and altitude are provided), the default is \"Earth\".\n\nIn all cases, the three coordinates can be passed as a 3-tuple (latitude, longitude, altitude).  In addition, geodetic latitude, longitude, and altitude can be given as arrays of the same length.\n\nOutput\n\nThe 3-tuple (latitude, longitude, altitude) in geographic coordinates, for the body with specified equatorial and polar radii (Earth by default).\n\nIf geodetic coordinates are given as arrays, a 3-tuple of arrays of the same length is returned.\n\nMethod\n\nStephen P.  Keeler and Yves Nievergelt, \"Computing geodetic coordinates\", SIAM Rev. Vol. 40, No. 2, pp. 300-309, June 1998 (DOI:10.1137/S0036144597323921).\n\nPlanetary constants from \"Allen\'s Astrophysical Quantities\", Fourth Ed., (2000).\n\nExample\n\nFind geographic coordinates of geodetic North pole (latitude: 90°, longitude: 0°, altitude 0 km) of the Earth:\n\njulia> using AstroLib\n\njulia> geodetic2geo(90, 0, 0)\n(90.0, 0.0, -21.38499999999931)\n\nThe same for Jupiter:\n\njulia> using AstroLib\n\njulia> geodetic2geo(90, 0, 0, \"Jupiter\")\n(90.0, 0.0, -4638.0)\n\nFind geographic coordinates for point of geodetic coordinates (latitude, longitude, altitude) = (43.16°, -24.32°, 3.87 km) on a planet with equatorial radius 8724.32 km and polar radius 8619.19 km:\n\njulia> using AstroLib\n\njulia> geodetic2geo(43.16, -24.32, 3.87, 8724.32, 8619.19)\n(42.46772711708433, -24.32, -44.52902080669082)\n\nNotes\n\ngeo2geodetic converts from geographic (or planetographic) to geodetic coordinates.\n\nCode of this function is based on IDL Astronomy User\'s Library.\n\n\n\n\n\n"
},

{
    "location": "ref/#AstroLib.get_date-Tuple{Dates.DateTime,Bool,Bool}",
    "page": "Reference",
    "title": "AstroLib.get_date",
    "category": "method",
    "text": "get_date([date, old=true, timetag=true]) -> string\n\nPurpose\n\nReturns the UTC date in \"CCYY-MM-DD\" format for FITS headers.\n\nExplanation\n\nThis is the format required by the DATE and DATE-OBS keywords in a FITS header.\n\nArgument\n\ndate (optional): the date in UTC standard.  If omitted, defaults to the current UTC time.  Each element can be either a DateTime type or anything that can be converted to that type.  In the case of vectorial input, each element is considered as a date, so you cannot provide a date by parts.\nold (optional boolean keyword): see below.\ntimetag (optional boolean keyword): see below.\n\nOutput\n\nA string with the date formatted according to the given optional keywords.\n\nWhen no optional keywords (timetag and old) are supplied, the format of the output string is \"CCYY-MM-DD\" (year-month-day part of the date), where CCYY represents a 4-digit calendar year, MM the 2-digit ordinal number of a calendar month within the calendar year, and DD the 2-digit ordinal number of a day within the calendar month.\nIf the boolean keyword old is true (default: false), the year-month-day part of date has \"DD/MM/YY\" format.  This is the formerly (pre-1997) recommended for FITS.  Note that this format is now deprecated because it uses only a 2-digit representation of the year.\nIf the boolean keyword timetag is true (default: false), \"Thh:mm:ss\" is appended to the year-month-day part of the date, where <hh> represents the hour in the day, <mm> the minutes, <ss> the seconds, and the literal \'T\' the ISO 8601 time designator.\n\nNote that old and timetag keywords can be used together, so that the output string will have \"DD/MM/YYThh:mm:ss\" format.\n\nExample\n\njulia> using AstroLib, Dates\n\njulia> get_date(DateTime(21937, 05, 30, 09, 59, 00), timetag=true)\n\"21937-05-30T09:59:00\"\n\nNotes\n\nA discussion of the DATExxx syntax in FITS headers can be found in\n\nhttp://www.cv.nrao.edu/fits/documents/standards/year2000.txt\n\nThose who wish to use need further flexibility in their date formats (e.g. to\n\nuse TAI time) should look at Bill Thompson\'s time routines in  http://sohowww.nascom.nasa.gov/solarsoft/gen/idl/time\n\n\n\n\n\n"
},

{
    "location": "ref/#AstroLib.get_juldate-Tuple{}",
    "page": "Reference",
    "title": "AstroLib.get_juldate",
    "category": "method",
    "text": "get_juldate() -> julian_days\n\nPurpose\n\nReturn the number of Julian days for current time.\n\nExplanation\n\nReturn for current time the number of Julian calendar days since epoch -4713-11-24T12:00:00 as a floating point.\n\nExample\n\nget_juldate()\ndaycnv(get_juldate())\n\nNotes\n\nUse jdcnv to get the number of Julian days for a different date.\n\n\n\n\n\n"
},

{
    "location": "ref/#AstroLib.hadec2altaz-Tuple{Real,Real,Real}",
    "page": "Reference",
    "title": "AstroLib.hadec2altaz",
    "category": "method",
    "text": "hadec2altaz(ha, dec, lat[, ws=true]) -> alt, az\n\nPurpose\n\nConvert Hour Angle and Declination to Horizon (Alt-Az) coordinates.\n\nExplanation\n\nCan deal with the NCP singularity.  Intended mainly to be used by program eq2hor.\n\nArguments\n\nInput coordinates may be either a scalar or an array, of the same dimension.\n\nha: the local apparent hour angle, in degrees.  The hour angle is the time that right ascension of 0 hours crosses the local meridian.  It is unambiguously defined.\ndec: the local apparent declination, in degrees.\nlat: the local geodetic latitude, in degrees, scalar or array.\nws (optional boolean keyword): if true, the output azimuth is measured West from South.  The default is to measure azimuth East from North.\n\nha and dec can be given as a 2-tuple (ha, dec).\n\nOutput\n\n2-tuple (alt, az)\n\nalt: local apparent altitude, in degrees.\naz: the local apparent azimuth, in degrees.\n\nThe output coordinates are always floating points and have the same type (scalar or array) as the input coordinates.\n\nExample\n\nArcturus is observed at an apparent hour angle of 336.6829 and a declination of 19.1825 while at the latitude of +43° 4\' 42\'\'.  What are the local altitude and azimuth of this object?\n\njulia> using AstroLib\n\njulia> alt, az = hadec2altaz(336.6829, 19.1825, ten(43, 4, 42))\n(59.08617155005685, 133.3080693440254)\n\nNotes\n\naltaz2hadec converts Horizon (Alt-Az) coordinates to Hour Angle and Declination.\n\nCode of this function is based on IDL Astronomy User\'s Library.\n\n\n\n\n\n"
},

{
    "location": "ref/#AstroLib.helio",
    "page": "Reference",
    "title": "AstroLib.helio",
    "category": "function",
    "text": "helio(jd, list[, radians=true]) -> hrad, hlong, hlat\n\nPurpose\n\nCompute heliocentric coordinates for the planets.\n\nExplanation\n\nThe mean orbital elements for epoch J2000 are used. These are derived from a 250 yr least squares fit of the DE 200 planetary ephemeris to a Keplerian orbit where each element is allowed to vary linearly with time. Useful mainly for dates between 1800 and 2050, this solution fits the terrestrial planet orbits to ~25\'\' or better, but achieves only ~600\'\' for Saturn.\n\nArguments\n\njd: julian date, scalar or vector\nnum: integer denoting planet number, scalar or vector 1 = Mercury, 2 = Venus, ... 9 = Pluto\nradians(optional): if this keyword is set to true, than the longitude and latitude output are in radians rather than degrees.\n\nOutput\n\nhrad: the heliocentric radii, in astronomical units.\nhlong: the heliocentric (ecliptic) longitudes, in degrees.\nhlat: the heliocentric latitudes in degrees.\n\nExample\n\n(1) Find heliocentric position of Venus on August 23, 2000\n\njulia> using AstroLib\n\njulia> helio(jdcnv(2000,08,23,0), 2)\n(0.7213758288364316, 198.39093251916148, 2.887355631705488)\n\n(2) Find the current heliocentric positions of all the planets\n\njulia> using AstroLib\n\njulia> helio.([jdcnv(1900)], 1:9)\n9-element Array{Tuple{Float64,Float64,Float64},1}:\n (0.4207394142180803, 202.60972662618906, 3.0503005607270532)\n (0.7274605731764012, 344.5381482401048, -3.3924346961624785)\n (0.9832446886519147, 101.54969268801035, 0.012669354526696368)\n (1.4212659241051142, 287.8531100442217, -1.5754626002228043)\n (5.386813769590955, 235.91306092135062, 0.9131692817310215)\n (10.054339927304339, 268.04069870870387, 1.0851704598594278)\n (18.984683376211326, 250.0555468087738, 0.05297087029604253)\n (29.87722677219009, 87.07244903504716, -1.245060583142733)\n (46.9647515992327, 75.94692594417324, -9.576681044165511)\n\nNotes\n\nThis program is based on the two-body model and thus neglects interactions between the planets.\n\nThe coordinates are given for equinox 2000 and not the equinox of the supplied date.\n\nCode of this function is based on IDL Astronomy User\'s Library.\n\n\n\n\n\n"
},

{
    "location": "ref/#AstroLib.helio_jd-Tuple{Real,Real,Real}",
    "page": "Reference",
    "title": "AstroLib.helio_jd",
    "category": "method",
    "text": "helio_jd(date, ra, dec[, B1950=true, diff=false]) -> jd_helio\nhelio_jd(date, ra, dec[, B1950=true, diff=true]) -> time_diff\n\nPurpose\n\nConvert geocentric (reduced) Julian date to heliocentric Julian date.\n\nExplanation\n\nThis procedure corrects for the extra light travel time between the Earth and the Sun.\n\nAn online calculator for this quantity is available at http://www.physics.sfasu.edu/astro/javascript/hjd.html\n\nUsers requiring more precise calculations and documentation should look at the IDL code available at http://astroutils.astronomy.ohio-state.edu/time/\n\nArguments\n\ndate: reduced Julian date (= JD - 2400000).  You can use juldate() to calculate the reduced Julian date.\nra and dec: right ascension and declination in degrees.  Default equinox is J2000.\nB1950 (optional boolean keyword): if set to true, then input coordinates are assumed to be in equinox B1950 coordinates.  Default is false.\ndiff (optional boolean keyword): if set to true, the function returns the time difference (heliocentric JD - geocentric JD) in seconds.  Default is false.\n\nOutput\n\nThe return value depends on the value of diff optional keywords:\n\nif diff is false (default), then the heliocentric reduced Julian date is returned.\nif diff is true, then the time difference in seconds between the geocentric and heliocentric Julian date is returned.\n\nExample\n\nWhat is the heliocentric Julian date of an observation of V402 Cygni (J2000: RA = 20 9 7.8, Dec = 37 09 07) taken on June 15, 2016 at 11:40 UT?\n\njulia> using AstroLib\n\njulia> jd = juldate(2016, 6, 15, 11, 40);\n\njulia> helio_jd(jd, ten(20, 9, 7.8) * 15, ten(37, 9, 7))\n57554.98808289718\n\nNotes\n\nWayne Warren (Raytheon ITSS) has compared the results of this algorithm with the FORTRAN subroutines in the STARLINK SLALIB library (see http://star-www.rl.ac.uk/).\n\n                                                 Time Diff (sec)\n     Date               RA(2000)   Dec(2000)  STARLINK      IDL\n\n1999-10-29T00:00:00.0  21 08 25.  -67 22 00.  -59.0        -59.0\n1999-10-29T00:00:00.0  02 56 33.4 +00 26 55.  474.1        474.1\n1940-12-11T06:55:00.0  07 34 41.9 -00 30 42.  366.3        370.2\n1992-02-29T03:15:56.2  12 56 27.4 +42 10 17.  350.8        350.9\n2000-03-01T10:26:31.8  14 28 36.7 -20 42 11.  243.7        243.7\n2100-02-26T09:18:24.2  08 26 51.7 +85 47 28.  104.0        108.8\n\nCode of this function is based on IDL Astronomy User\'s Library.\n\n\n\n\n\n"
},

{
    "location": "ref/#AstroLib.helio_rv",
    "page": "Reference",
    "title": "AstroLib.helio_rv",
    "category": "function",
    "text": "helio_rv(jd, T, P, V_0, K[, e, ω]) -> rv\n\nPurpose\n\nReturn the heliocentric radial velocity of a spectroscopic binary.\n\nExplanation\n\nThis function will return the heliocentric radial velocity of a spectroscopic binary star at a given heliocentric date given its orbit.\n\nArguments\n\njd: time of observation, as number of Julian days.\nT: time of periastron passage (max. +ve velocity for circular orbits), same time system as jd\nP: the orbital period in same units as jd\nV_0: systemic velocity\nK: velocity semi-amplitude in the same units as V_0\ne: eccentricity of the orbit.  It defaults to 0 if omitted\nω: longitude of periastron in degrees.  It defaults to 0 if omitted\n\nOutput\n\nThe predicted heliocentric radial velocity in the same units as Gamma for the date(s) specified by jd.\n\nExample\n\n(1) What was the heliocentric radial velocity of the primary component of HU Tau at 1730 UT 25 Oct 1994?\n\njulia> using AstroLib\n\njulia> jd = juldate(94, 10, 25, 17, 30); # Obtain Geocentric Julian days\n\njulia> hjd = helio_jd(jd, ten(04, 38, 16) * 15, ten(20, 41, 05)); # Convert to HJD\n\njulia> helio_rv(hjd, 46487.5303, 2.0563056, -6, 59.3)\n-62.965570107789475\n\nNB: the functions juldate and helio_jd return a reduced HJD (HJD - 2400000) and so T and P must be specified in the same fashion.\n\n(2) Plot two cycles of an eccentric orbit, e=06, omega=45degree for both components of a binary star.  Use PyPlot.jl for plotting.\n\nusing PyPlot\nφ = range(0, stop=2, length=1000); # Generate 1000 phase points\nplot(φ ,helio_rv.(φ, 0, 1, 0, 100, 0.6, 45)) # Plot 1st component\nplot(φ ,helio_rv.(φ, 0, 1, 0, 100, 0.6, 45+180)) # Plot 2nd component\n\nNotes\n\nThe user should ensure consistency with all time systems being used (i.e. jd and t should be in the same units and time system).  Generally, users should reduce large time values by subtracting a large constant offset, which may improve numerical accuracy.\n\nIf using the the function juldate and helio_jd, the reduced HJD time system must be used throughtout.\n\nCode of this function is based on IDL Astronomy User\'s Library.\n\n\n\n\n\n"
},

{
    "location": "ref/#AstroLib.hor2eq",
    "page": "Reference",
    "title": "AstroLib.hor2eq",
    "category": "function",
    "text": "hor2eq(alt, az, jd[, obsname; ws=false, B1950=false, precession=true, nutate=true,\n       aberration=true, refract=true, lat=NaN, lon=NaN, altitude=0, pressure=NaN,\n       temperature=NaN]) -> ra, dec, ha\n\nhor2eq(alt, az, jd, lat, lon[, altitude=0; ws=false, B1950=false,\n       precession=true, nutate=true, aberration=true, refract=true, pressure=NaN,\n       temperature=NaN]) -> ra, dec, ha\n\nPurpose\n\nConverts local horizon coordinates (alt-az) to equatorial (ra-dec) coordinates.\n\nExplanation\n\nThis is a function to calculate equatorial (ra,dec) coordinates from horizon (alt,az) coords. It is accurate to about 1 arcsecond or better. It performs precession, nutation, aberration, and refraction corrections.\n\nArguments\n\nThis function has two base methods.  With one you can specify the name of the observatory, if present in AstroLib.observatories, with the other one you can provide the coordinates of the observing site and, optionally, the altitude.\n\nCommon mandatory arguments:\n\nalt: altitude of horizon coords, in degrees\naz: azimuth angle measured East from North (unless ws is true), in degrees\njd: julian date\n\nOther positional arguments:\n\nobsname: set this to a valid observatory name in AstroLib.observatories.\n\nor\n\nlat: north geodetic latitude of location, in degrees.\nlon: AST longitude of location, in degrees. You can specify west longitude with a negative sign.\naltitude: the altitude of the observing location, in meters.  It is 0 by default\n\nOptional keyword arguments:\n\nws (optional boolean keyword): set this to true to get the azimuth measured westward from south. This is false by default\nB1950 (optional boolean keyword): set this to true if the ra and dec are specified in B1950 (FK4 coordinates) instead of J2000 (FK5). This is false by default\nprecession (optional boolean keyword): set this to false for no precession, true by default\nnutate (optional boolean keyword): set this to false for no nutation, true by default\naberration (optional boolean keyword): set this to false for no aberration correction, true by default\nrefract (optional boolean keyword): set this to false for no refraction correction, true by default\npressure (optional keyword): the pressure at the observing location, in millibars. Default value is NaN\ntemperature (optional keyword): the temperature at the observing location, in Kelvins. Default value is NaN\n\nOutput\n\nra: right ascension of object, in degrees (FK5)\ndec: declination of the object, in degrees (FK5)\nha: hour angle, in degrees\n\nExample\n\nYou are at Kitt Peak National Observatory, looking at a star at azimuth angle 264d 55m 06s and elevation 37d 54m 41s (in the visible). Today is Dec 25, 2041 and the local time is 10 PM precisely. What is the right ascension and declination (J2000) of the star you\'re looking at? The temperature here is about 0 Celsius, and the pressure is 781 millibars. The Julian date for this time is 2466879.7083333\n\njulia> using AstroLib\n\njulia> ra_o, dec_o = hor2eq(ten(37,54,41), ten(264,55,06), 2466879.7083333,\n                            \"kpno\", pressure = 781, temperature = 273)\n(3.3224480269254717, 15.19061543702944, 54.61174536229464)\n\njulia> adstring(ra_o, dec_o)\n\" 00 13 17.4  +15 11 26\"\n\nNotes\n\nCode of this function is based on IDL Astronomy User\'s Library.\n\n\n\n\n\n"
},

{
    "location": "ref/#AstroLib.imf-Tuple{AbstractArray{#s757,1} where #s757<:Real,AbstractArray{#s756,1} where #s756<:Real,AbstractArray{#s755,1} where #s755<:Real}",
    "page": "Reference",
    "title": "AstroLib.imf",
    "category": "method",
    "text": "imf(mass, expon, mass_range) -> psi\n\nPurpose\n\nCompute an N-component power-law logarithmic initial mass function (IMF).\n\nExplanation\n\nThe function is normalized so that the total mass distribution equals one solar mass.\n\nArguments\n\nmass: mass in units of solar mass, vector.\nexpon: power law exponent, vector. The number of values in expon equals the number of different power-law components in the IMF.\nmass_range: vector containing the mass upper and lower limits of the IMF and masses where the IMF exponent changes. The number of values in massrange should be one more than in expon. The values in massrange should be monotonically increasing and positive.\n\nOutput\n\npsi: mass function, number of stars per unit logarithmic mass interval evaluated for supplied masses.\n\nExample\n\nShow the number of stars per unit mass interval at 3 Msun for a Salpeter (expon = -1.35) IMF, with a mass range from 0.1 MSun to 110 Msun.\n\njulia> using AstroLib\n\njulia> imf([3], [-1.35], [0.1, 110]) / 3\n1-element Array{Float64,1}:\n 0.01294143518151214\n\nNotes\n\nCode of this function is based on IDL Astronomy User\'s Library.\n\n\n\n\n\n"
},

{
    "location": "ref/#AstroLib.ismeuv",
    "page": "Reference",
    "title": "AstroLib.ismeuv",
    "category": "function",
    "text": "ismeuv(wave, hcol[, he1col=hcol*0.1, he2col=0, fano=false]) -> tau\n\nPurpose\n\nCompute the continuum interstellar EUV optical depth\n\nExplanation\n\nThe EUV optical depth is computed from the photoionization of hydrogen and helium.\n\nArguments\n\nwave: wavelength value (in Angstroms). Useful range is 40 - 912 A; at shorter wavelength metal opacity should be considered, at longer wavelengths there is no photoionization.\nhcol: interstellar hydrogen column density in cm-2.\nhe1col (optional): neutral helium column density in cm-2. Default is 0.1*hcol (10% of hydrogen column)\nhe2col (optional): ionized helium column density in cm-2 Default is 0.\nfano (optional boolean keyword): If this keyword is true, then the 4 strongest auto-ionizing resonances of He I are included. The shape of these resonances is given by a Fano profile - see Rumph, Bowyer, & Vennes 1994, AJ, 107, 2108. If these resonances are included then the input wavelength vector should have a fine (>~0.01 A) grid between 190 A and 210 A, since the resonances are very narrow.\n\nOutput\n\ntau: Vector giving resulting optical depth, non-negative values.\n\nExample\n\nOne has a model EUV spectrum with wavelength, w (in Angstroms). Find the EUV optical depth by 1e18 cm-2 of HI, with N(HeI)/N(HI) = N(HeII)/N(HI) = 0.05.\n\njulia> using AstroLib\n\njulia> ismeuv.([670, 910], 1e19, 5e17, 5e17)\n2-element Array{Float64,1}:\n 27.35393320556168\n 62.683796028917286\n\nNotes\n\nCode of this function is based on IDL Astronomy User\'s Library.\n\n\n\n\n\n"
},

{
    "location": "ref/#AstroLib.jdcnv",
    "page": "Reference",
    "title": "AstroLib.jdcnv",
    "category": "function",
    "text": "jdcnv(date) -> julian_days\n\nPurpose\n\nConvert proleptic Gregorian Calendar date in UTC standard to number of Julian days.\n\nExplanation\n\nTakes the given proleptic Gregorian date in UTC standard and returns the number of Julian calendar days since epoch -4713-11-24T12:00:00.\n\nArgument\n\ndate: date in proleptic Gregorian Calendar.  Each element can be either a DateTime or anything that can be converted directly to DateTime.\n\nOutput\n\nNumber of Julian days, as a floating point.\n\nExample\n\nFind the Julian days number at 2016 August 23, 03:39:06.\n\njulia> using AstroLib, Dates\n\njulia> jdcnv(DateTime(2016, 08, 23, 03, 39, 06))\n2.4576236521527776e6\n\njulia> jdcnv(2016, 08, 23, 03, 39, 06)\n2.4576236521527776e6\n\njulia> jdcnv(\"2016-08-23T03:39:06\")\n2.4576236521527776e6\n\nNotes\n\nThis is the inverse of daycnv.\n\nget_juldate returns the number of Julian days for current time.  It is equivalent to jdcnv(now(Dates.UTC)).\n\nFor the conversion of Julian date to number of Julian days, use juldate.\n\n\n\n\n\n"
},

{
    "location": "ref/#AstroLib.jprecess",
    "page": "Reference",
    "title": "AstroLib.jprecess",
    "category": "function",
    "text": "jprecess(ra, dec[, epoch]) -> ra2000, dec2000\njprecess(ra, dec, muradec[, parallax=parallax, radvel=radvel]) -> ra2000, dec2000\n\nPurpose\n\nPrecess positions from B1950.0 (FK4) to J2000.0 (FK5).\n\nExplanation\n\nCalculate the mean place of a star at J2000.0 on the FK5 system from the mean place at B1950.0 on the FK4 system.\n\njprecess function has two methods, one for each of the following cases:\n\nthe proper motion is known and non-zero\nthe proper motion is unknown or known to be exactly zero (i.e. extragalactic radio sources).  Better precision can be achieved in this case by inputting the epoch of the original observations.\n\nArguments\n\nThe function has 2 methods.  The common mandatory arguments are:\n\nra: input B1950 right ascension, in degrees.\ndec: input B1950 declination, in degrees.\n\nThe two methods have a different third argument (see \"Explanation\" section for more details).  It can be one of the following:\n\nmuradec: 2-element vector containing the proper motion in seconds of arc per tropical century in right ascension and declination.\nepoch: scalar giving epoch of original observations.\n\nIf none of these two arguments is provided (so jprecess is fed only with right ascension and declination), it is assumed that proper motion is exactly zero and epoch = 1950.\n\nIf it is used the method involving muradec argument, the following keywords are available:\n\nparallax (optional numerical keyword): stellar parallax, in seconds of arc.\nradvel (optional numerical keyword): radial velocity in km/s.\n\nRight ascension and declination can be passed as the 2-tuple (ra, dec).  You can also pass ra, dec, parallax, and radvel as arrays, all of the same length N.  In that case, muradec should be a matrix 2×N.\n\nOutput\n\nThe 2-tuple of right ascension and declination in 2000, in degrees, of input coordinates is returned.  If ra and dec (and other possible optional arguments) are arrays, the 2-tuple of arrays (ra2000, dec2000) of the same length as the input coordinates is returned.\n\nMethod\n\nThe algorithm is taken from the Explanatory Supplement to the Astronomical Almanac 1992, page 184.  See also Aoki et al (1983), A&A, 128, 263.  URL: http://adsabs.harvard.edu/abs/1983A%26A...128..263A.\n\nExample\n\nThe SAO catalogue gives the B1950 position and proper motion for the star HD 119288.   Find the J2000 position.\n\nRA(1950) = 13h 39m 44.526s\nDec(1950) = 8d 38\' 28.63\'\'\nMu(RA) = -.0259 s/yr\nMu(Dec) = -.093 \'\'/yr\n\njulia> using AstroLib\n\njulia> muradec = 100 * [-15*0.0259, -0.093]; # convert to century proper motion\n\njulia> ra = ten(13, 39, 44.526)*15;\n\njulia> decl = ten(8, 38, 28.63);\n\njulia> adstring(jprecess(ra, decl, muradec), precision=2)\n\" 13 42 12.740  +08 23 17.69\"\n\nNotes\n\n\"When transferring individual observations, as opposed to catalog mean place, the safest method is to tranform the observations back to the epoch of the observation, on the FK4 system (or in the system that was used to to produce the observed mean place), convert to the FK5 system, and transform to the the epoch and equinox of J2000.0\" – from the Explanatory Supplement (1992), p. 180\n\nbprecess performs the precession to B1950 coordinates.\n\nCode of this function is based on IDL Astronomy User\'s Library.\n\n\n\n\n\n"
},

{
    "location": "ref/#AstroLib.juldate-Tuple{Dates.DateTime}",
    "page": "Reference",
    "title": "AstroLib.juldate",
    "category": "method",
    "text": "juldate(date::DateTime) -> reduced_julia_days\n\nPurpose\n\nConvert from calendar to Reduced Julian Days.\n\nExplanation\n\nJulian Day Number is a count of days elapsed since Greenwich mean noon on 1 January 4713 B.C.  Julian Days are the number of Julian days followed by the fraction of the day elapsed since the preceding noon.\n\nThis function takes the given date and returns the number of Julian calendar days since epoch 1858-11-16T12:00:00 (Reduced Julian Days = Julian Days - 2400000).\n\nArgument\n\ndate: date in Julian Calendar, UTC standard.  Each element can be given in DateTime type or anything that can be converted to that type.\n\nOutput\n\nThe number of Reduced Julian Days is returned.\n\nExample\n\nGet number of Reduced Julian Days at 2016-03-20T15:24:00.\n\njulia> using AstroLib, Dates\n\njulia> juldate(DateTime(2016, 03, 20, 15, 24))\n57468.14166666667\n\njulia> juldate(2016, 03, 20, 15, 24)\n57468.14166666667\n\njulia> juldate(\"2016-03-20T15:24\")\n57468.14166666667\n\nNotes\n\nJulian Calendar is assumed, thus before 1582-10-15T00:00:00 this function is not the inverse of daycnv.  For the conversion proleptic Gregorian date to number of Julian days, use jdcnv, which is the inverse of daycnv.\n\nCode of this function is based on IDL Astronomy User\'s Library.\n\n\n\n\n\n"
},

{
    "location": "ref/#AstroLib.kepler_solver-Tuple{Real,Real}",
    "page": "Reference",
    "title": "AstroLib.kepler_solver",
    "category": "method",
    "text": "kepler_solver(M, e) -> E\n\nPurpose\n\nSolve Kepler\'s equation in the elliptic motion regime (0 leq e leq 1) and return eccentric anomaly E.\n\nExplanation\n\nIn order to find the position of a body in elliptic motion (e.g., in the two-body problem) at a given time t, one has to solve the Kepler\'s equation\n\nM(t) = E(t) - esin E(t)\n\nwhere M(t) = (t - t_0)P is the mean anomaly, E(t) the eccentric anomaly, e the eccentricity of the orbit, t_0 is the time of periapsis passage, and P is the period of the orbit.  Usually the eccentricity is given and one wants to find the eccentric anomaly E(t) at a specific time t, so that also the mean anomaly M(t) is known.\n\nArguments\n\nM: mean anomaly.\ne: eccentricity, in the elliptic motion regime (0 leq e leq 1)\n\nOutput\n\nThe eccentric anomaly E, restricted to the range -pi pi.\n\nMethod\n\nMany different numerical methods exist to solve Kepler\'s equation.  This function implements the algorithm proposed in Markley (1995) Celestial Mechanics and Dynamical Astronomy, 63, 101 (DOI:10.1007/BF00691917).  This method is not iterative, requires only four transcendental function evaluations, and has been proved to be fast and efficient over the entire range of elliptic motion 0 leq e leq 1.\n\nExample\n\n(1) Find the eccentric anomaly for an orbit with eccentricity e = 07 and for M(t) = 8pi3.\n\njulia> using AstroLib\n\njulia> ecc = 0.7;\n\njulia> E = kepler_solver(8pi/3, ecc)\n2.5085279492864223\n\n(2) Plot the eccentric anomaly as a function of mean anomaly for eccentricity e = 0, 05, 09.  Recall that kepler_solver gives E in -pi pi, use mod2pi to have it in 0 2pi.  Use PyPlot.jl for plotting.\n\nusing AstroLib, PyPlot\nM = range(0, stop=2pi, length=1001)[1:end-1];\nfor ecc in (0, 0.5, 0.9); plot(M, mod2pi.(kepler_solver.(M, ecc))); end\n\nNotes\n\nThe true anomaly can be calculated with trueanom function.\n\n\n\n\n\n"
},

{
    "location": "ref/#AstroLib.lsf_rotate",
    "page": "Reference",
    "title": "AstroLib.lsf_rotate",
    "category": "function",
    "text": "lsf_rotate(delta_v, v_sin_i[, epsilon = 0.3]) -> velocity_grid, lsf\n\nPurpose\n\nCreate a 1-d convolution kernel to broaden a spectrum from a rotating star.\n\nExplanation\n\nCan be used to derive the broadening effect (LSF, line spread function) due to rotation on a synthetic stellar spectrum.  Assumes constant limb darkening across the disk.\n\nArguments\n\ndelta_v: the step increment (in km/s) in the output rotation kernel\nv_sin_i: the rotational velocity projected along the line of sight (km/s)\nepsilon (optional numeric argument): the limb-darkening coefficient, default = 0.6 which is typical for photospheric lines.  The specific intensity I at any angle theta from the specific intensity I_textcen at the center of the disk is given by:\nI = I_textcencdot(1 - varepsiloncdot(1 - cos(theta)))\n\nOutput\n\nThe 2-tuple (velocity_grid, lsf):\n\nvelocity_grid: vector of velocity grid with the same number of elements as lsf (see below)\nlsf: the convolution kernel vector for the specified rotational velocity. The number of points in lsf will be always be odd (the kernel is symmetric) and equal to either ceil(2*v_sin_i/delta_v) or ceil(2*v_sin_i/delta_v) + 1, whichever number is odd.  Elements of lsf will always be of type AbstractFloat.  To actually compute the broadening, the spectrum should be convolved with the rotational lsf\n\nExample\n\nPlot the line spread function for a star rotating at 90 km/s in velocity space every 3 km/s.  Use PyPlot.jl for plotting.\n\nusing PyPlot\nplot(lsf_rotate(3, 90)...)\n\nNotes\n\nCode of this function is based on IDL Astronomy User\'s Library.\n\n\n\n\n\n"
},

{
    "location": "ref/#AstroLib.mag2flux",
    "page": "Reference",
    "title": "AstroLib.mag2flux",
    "category": "function",
    "text": "mag2flux(mag[, zero_point, ABwave=number]) -> flux\n\nPurpose\n\nConvert from magnitudes to flux expressed in erg/(s cm² Å).\n\nExplanation\n\nThis is the reverse of flux2mag.\n\nArguments\n\nmag: the magnitude to be converted in flux.\nzero_point: the zero point level of the magnitude.  If not supplied then defaults to\n\n21.1 (Code et al 1976).  Ignored if the ABwave keyword is supplied\n\nABwave (optional numeric keyword): wavelength, in Angstroms.  If supplied, then the\n\ninput mag is assumed to contain Oke AB magnitudes (Oke & Gunn 1983, ApJ, 266, 713;  http://adsabs.harvard.edu/abs/1983ApJ...266..713O).\n\nOutput\n\nThe flux.\n\nIf the ABwave keyword is set, then the flux is given by the expression\n\ntextflux = 10^-04(textmag +2406 + 4log_10(textABwave))\n\nOtherwise the flux is given by\n\ntextflux =  10^-04(textmag + textzero point)\n\nExample\n\njulia> using AstroLib\n\njulia> mag2flux(8.3)\n1.7378008287493692e-12\n\njulia> mag2flux(8.3, 12)\n7.58577575029182e-9\n\njulia> mag2flux(8.3, ABwave=12)\n3.6244115683017193e-7\n\nNotes\n\nCode of this function is based on IDL Astronomy User\'s Library.\n\n\n\n\n\n"
},

{
    "location": "ref/#AstroLib.mag2geo",
    "page": "Reference",
    "title": "AstroLib.mag2geo",
    "category": "function",
    "text": "mag2geo(latitude, longitude[, year]) -> geographic_latitude, geographic_longitude\n\nPurpose\n\nConvert from geomagnetic to geographic coordinates.\n\nExplanation\n\nConverts from geomagnetic (latitude, longitude) to geographic (latitude, longitude).  Altitude is not involved in this function.\n\nArguments\n\nlatitude: geomagnetic latitude (North), in degrees.\nlongitude: geomagnetic longitude (East), in degrees.\nyear (optional numerical argument): the year in which to perform conversion. If omitted, defaults to current year.\n\nThe coordinates can be passed as arrays of the same length.\n\nOutput\n\nThe 2-tuple of geographic (latitude, longitude) coordinates, in degrees.\n\nIf geomagnetic coordinates are given as arrays, a 2-tuple of arrays of the same length is returned.\n\nExample\n\nFind position of North Magnetic Pole in 2016\n\njulia> using AstroLib\n\njulia> mag2geo(90, 0, 2016)\n(86.395, -166.29000000000002)\n\nNotes\n\nThis function uses list of North Magnetic Pole positions provided by World Magnetic Model (https://www.ngdc.noaa.gov/geomag/data/poles/NP.xy).\n\ngeo2mag converts geographic coordinates to geomagnetic coordinates.\n\nCode of this function is based on IDL Astronomy User\'s Library.\n\n\n\n\n\n"
},

{
    "location": "ref/#AstroLib.mean_obliquity-Tuple{Real}",
    "page": "Reference",
    "title": "AstroLib.mean_obliquity",
    "category": "method",
    "text": "mean_obliquity(jd) -> m_eps\n\nPurpose\n\nReturn the mean obliquity of the ecliptic for a given Julian date\n\nExplanation\n\nThe function is used by the co_nutate procedure.\n\nArguments\n\njd: julian date\n\nOutput\n\nm_eps: mean obliquity of the ecliptic, in radians\n\nExample\n\njulia> using AstroLib\n\njulia> mean_obliquity(jdcnv(1978,01,7,11, 01))\n0.4091425159336512\n\nNotes\n\nThe algorithm used to find the mean obliquity(eps0) is mentioned in USNO Circular 179, but the canonical reference for the IAU adoption is apparently Hilton et al., 2006, Celest.Mech.Dyn.Astron. 94, 351. 2000\n\n\n\n\n\n"
},

{
    "location": "ref/#AstroLib.month_cnv-Tuple{Integer}",
    "page": "Reference",
    "title": "AstroLib.month_cnv",
    "category": "method",
    "text": "month_cnv(number[, shor=true, up=true, low=true]) -> month_name\nmonth_cnv(name) -> number\n\nPurpose\n\nConvert between a month English name and  the equivalent number.\n\nExplanation\n\nFor example, converts from \"January\" to 1  or vice-versa.\n\nArguments\n\nThe functions has two methods, one with numeric input (and three possible boolean keywords) and the other one with string input.\n\nNumeric input arguments:\n\nnumber: the number of the month to be converted to month name.\nshort (optional boolean keyword): if true, the abbreviated (3-character) name of the month will be returned, e.g. \"Apr\" or \"Oct\".  Default is false.\nup (optional boolean keyword): if true, the name of the month will be all in upper case, e.g. \"APRIL\" or \"OCTOBER\".  Default is false.\nlow (optional boolean keyword): if true, the name of the month will be all in lower case, e.g. \"april\" or \"october\".  Default is false.\n\nString input argument:\n\nname: month name to be converted to month number.\n\nOutput\n\nThe month name or month number, depending on the input.  For numeric input, the format of the month name is influenced by the optional keywords.\n\nExample\n\njulia> using AstroLib\n\njulia> month_cnv.([\"janua\", \"SEP\", \"aUgUsT\"])\n3-element Array{Int64,1}:\n 1\n 9\n 8\n\njulia> month_cnv.([2, 12, 6], short=true, low=true)\n3-element Array{String,1}:\n \"feb\"\n \"dec\"\n \"jun\"\n\n\n\n\n\n"
},

{
    "location": "ref/#AstroLib.moonpos-Tuple{Real}",
    "page": "Reference",
    "title": "AstroLib.moonpos",
    "category": "method",
    "text": "moonpos(jd[, radians=true]) -> ra, dec, dis, geolong, geolat\n\nPurpose\n\nCompute the right ascension and declination of the Moon at specified Julian date.\n\nArguments\n\njd: the Julian ephemeris date.  It can be either a scalar or an array\nradians (optional boolean keyword): if set to true, then all output angular quantities are given in radians rather than degrees.  The default is false\n\nOutput\n\nThe 5-tuple (ra, dec, dis, geolong, geolat):\n\nra: apparent right ascension of the Moon in degrees, referred to the true equator of the specified date(s)\ndec: the declination of the Moon in degrees\ndis: the distance between the centre of the Earth and the centre of the Moon in kilometers\ngeolong: apparent longitude of the moon in degrees, referred to the ecliptic of the specified date(s)\ngeolat: apparent longitude of the moon in degrees, referred to the ecliptic of the specified date(s)\n\nIf jd is an array, then all output quantities are arrays of the same length as jd.\n\nMethod\n\nDerived from the Chapront ELP2000/82 Lunar Theory (Chapront-Touze\' and Chapront, 1983, 124, 50), as described by Jean Meeus in Chapter 47 of ``Astronomical Algorithms\'\' (Willmann-Bell, Richmond), 2nd edition, 1998.  Meeus quotes an approximate accuracy of 10\" in longitude and 4\" in latitude, but he does not give the time range for this accuracy.\n\nComparison of the IDL procedure with the example in ``Astronomical Algorithms\'\' reveals a very small discrepancy (~1 km) in the distance computation, but no difference in the position calculation.\n\nExample\n\n(1) Find the position of the moon on April 12, 1992\n\njulia> using AstroLib\n\njulia> jd = jdcnv(1992, 4, 12);\n\njulia> adstring(moonpos(jd)[1:2],precision=1)\n\" 08 58 45.23  +13 46 06.1\"\n\nThis is within 1\" from the position given in the Astronomical Almanac.\n\n(2) Plot the Earth-moon distance during 2016 with sampling of 6 hours.  Use PyPlot.jl for plotting\n\nusing PyPlot\npoints = DateTime(2016):Dates.Hour(6):DateTime(2017);\nplot(points, moonpos(jdcnv.(points))[3])\n\nNotes\n\nCode of this function is based on IDL Astronomy User\'s Library.\n\n\n\n\n\n"
},

{
    "location": "ref/#AstroLib.mphase-Tuple{Real}",
    "page": "Reference",
    "title": "AstroLib.mphase",
    "category": "method",
    "text": "mphase(jd) -> k\n\nPurpose\n\nReturn the illuminated fraction of the Moon at given Julian date(s).\n\nArguments\n\njd: the Julian ephemeris date.\n\nOutput\n\nThe illuminated fraction k of Moon\'s disk, with 0 leq k leq 1. k = 0 indicates a new moon, while k = 1 stands for a full moon.\n\nMethod\n\nAlgorithm from Chapter 46 of \"Astronomical Algorithms\" by Jean Meeus (Willmann-Bell, Richmond) 1991.  sunpos and moonpos are used to get positions of the Sun and the Moon, and the Moon distance.  The selenocentric elongation of the Earth from the Sun (phase angle) is then computed, and used to determine the illuminated fraction.\n\nExample\n\nPlot the illuminated fraction of the Moon for every day in January 2018 with a hourly sampling.  Use PyPlot.jl for plotting\n\nusing PyPlot\npoints = DateTime(2018,01,01):Dates.Hour(1):DateTime(2018,01,31,23,59,59);\nplot(points, mphase.(jdcnv.(points)))\n\nNote that in this calendar month there are two full moons, this event is called blue moon.\n\nNotes\n\nCode of this function is based on IDL Astronomy User\'s Library.\n\n\n\n\n\n"
},

{
    "location": "ref/#AstroLib.nutate-Tuple{Real}",
    "page": "Reference",
    "title": "AstroLib.nutate",
    "category": "method",
    "text": "nutate(jd) -> long, obliq\n\nPurpose\n\nReturn the nutation in longitude and obliquity for a given Julian date.\n\nArguments\n\njd: Julian ephemeris date, it can be either a scalar or a vector\n\nOutput\n\nThe 2-tuple (long, obliq), where\n\nlong: the nutation in longitude\nobl: the nutation in latitude\n\nIf jd is an array, long and obl are arrays of the same length.\n\nMethod\n\nUses the formula in Chapter 22 of ``Astronomical Algorithms\'\' by Jean Meeus (1998, 2nd ed.) which is based on the 1980 IAU Theory of Nutation and includes all terms larger than 0.0003\".\n\nExample\n\n(1) Find the nutation in longitude and obliquity 1987 on Apr 10 at Oh.  This is example 22.a from Meeus\n\njulia> using AstroLib\n\njulia> jd = jdcnv(1987, 4, 10);\n\njulia> nutate(jd)\n(-3.7879310771104917, 9.442520698644492)\n\n(2) Plot the daily nutation in longitude and obliquity during the 21st century. Use PyPlot.jl for plotting.\n\nusing PyPlot\nyears = DateTime(2000):DateTime(2100);\nlong, obl = nutate(jdcnv.(years));\nplot(years, long); plot(years, obl)\n\nYou can see both the dominant large scale period of nutation, of 18.6 years, and smaller oscillations with shorter periods.\n\nNotes\n\nCode of this function is based on IDL Astronomy User\'s Library.\n\n\n\n\n\n"
},

{
    "location": "ref/#AstroLib.ordinal-Tuple{Integer}",
    "page": "Reference",
    "title": "AstroLib.ordinal",
    "category": "method",
    "text": "ordinal(num) -> result\n\nPurpose\n\nConvert an integer to a correct English ordinal string.\n\nExplanation\n\nThe first four ordinal strings are \"1st\", \"2nd\", \"3rd\", \"4th\" ....\n\nArguments\n\nnum: number to be made ordinal. It should be of type int.\n\nOutput\n\nresult: ordinal string, such as \'1st\' \'3rd \'164th\' \'87th\' etc\n\nExample\n\njulia> using AstroLib\n\njulia> ordinal.(1:5)\n5-element Array{String,1}:\n \"1st\"\n \"2nd\"\n \"3rd\"\n \"4th\"\n \"5th\"\n\nNotes\n\nThis function does not support float arguments, unlike the IDL implementation. Code of this function is based on IDL Astronomy User\'s Library.\n\n\n\n\n\n"
},

{
    "location": "ref/#AstroLib.paczynski-Tuple{Real}",
    "page": "Reference",
    "title": "AstroLib.paczynski",
    "category": "method",
    "text": "paczynski(u) -> amplification\n\nPurpose\n\nCalculate gravitational microlensing amplification of a point-like source by a single point-like lens.\n\nExplanation\n\nReturn the gravitational microlensing amplification of a point-like source by a single point-like lens, using Paczyński formula\n\nA(u) = fracu^2 + 2usqrtu^2 + 4\n\nwhere u is the projected distance between the lens and the source in units of Einstein radii.\n\nIn order to speed up calculations for extreme values of u, the following asyntotic expressions for A(u) are used:\n\nA(u) =\nbegincases\n 1u  u ll 1 \n textsgn(u)  u gg 1\nendcases\n\nArguments\n\nu: projected distance between the lens and the source, in units of Einstein radii\n\nOutput\n\nThe microlensing amplification for the given distance.\n\nExample\n\nCalculate the microlensing amplification for u = 10^-10, 10^-1, 1, 10, 10^10:\n\njulia> using AstroLib\n\njulia> paczynski.([1e-10, 1e-1, 1, 10, 1e10])\n5-element Array{Float64,1}:\n  1.0e10\n 10.037461005722337\n  1.3416407864998738\n  1.0001922892047386\n  1.0\n\nNotes\n\nThe expression of A(u) of microlensing amplification has been given by Bohdan Paczyński in\n\nPaczynski, B. 1986, ApJ, 304, 1. DOI:10.1086/164140, Bibcode:1986ApJ...304....1P\n\nThe same expression was actually found by Albert Einstein half a century earlier:\n\nEinstein, A. 1936, Science, 84, 506. DOI:10.1126/science.84.2188.506, Bibcode:1936Sci....84..506E\n\n\n\n\n\n"
},

{
    "location": "ref/#AstroLib.planck_freq-Tuple{Real,Real}",
    "page": "Reference",
    "title": "AstroLib.planck_freq",
    "category": "method",
    "text": "planck_freq(frequency, temperature) -> black_body_flux\n\nPurpose\n\nCalculate the flux of a black body per unit frequency.\n\nExplanation\n\nReturn the spectral radiance of a black body per unit frequency using Planck\'s law\n\nB_nu(nu T) = frac2hnu ^3c^2 frac1e^frachnuk_mathrmBT - 1\n\nArguments\n\nfrequency: frequency at which the flux is to be calculated, in Hertz.\ntemperature: the equilibrium temperature of the black body, in Kelvin.\n\nOutput\n\nThe spectral radiance of the black body, in units of W/(sr·m²·Hz).\n\nExample\n\nPlot the spectrum of a black body in 10^12 10^154 Hz at 8000 K. Use PyPlot.jl for plotting.\n\nusing PyPlot\nfrequency = exp10.(range(12, stop=15.4, length=1000));\ntemperature = ones(frequency)*8000;\nflux = planck_freq.(frequency, temperature);\nplot(frequency, flux)\n\nNotes\n\nplanck_wave calculates the flux of a black body per unit wavelength.\n\n\n\n\n\n"
},

{
    "location": "ref/#AstroLib.planck_wave-Tuple{Real,Real}",
    "page": "Reference",
    "title": "AstroLib.planck_wave",
    "category": "method",
    "text": "planck_wave(wavelength, temperature) -> black_body_flux\n\nPurpose\n\nCalculate the flux of a black body per unit wavelength.\n\nExplanation\n\nReturn the spectral radiance of a black body per unit wavelength using Planck\'s law\n\nB_lambda(lambda T) =frac2hc^2lambda^5frac1e^frachclambda k_mathrmBT - 1\n\nArguments\n\nwavelength: wavelength at which the flux is to be calculated, in meters.\ntemperature: the equilibrium temperature of the black body, in Kelvin.\n\nOutput\n\nThe spectral radiance of the black body, in units of W/(sr·m³).\n\nExample\n\nPlot the spectrum of a black body in 0 3 µm at 5000 K.  Use PyPlot.jl for plotting.\n\nusing PyPlot\nwavelength = range(0, stop=3e-6, length=1000);\ntemperature = ones(wavelength)*5000;\nflux = planck_wave.(wavelength, temperature);\nplot(wavelength, flux)\n\nNotes\n\nplanck_freq calculates the flux of a black body per unit frequency.\n\nCode of this function is based on IDL Astronomy User\'s Library.\n\n\n\n\n\n"
},

{
    "location": "ref/#AstroLib.planet_coords-Tuple{Real,Integer}",
    "page": "Reference",
    "title": "AstroLib.planet_coords",
    "category": "method",
    "text": "planet_coords(date, num)\n\nPurpose\n\nFind right ascension and declination for the planets when provided a date as input.\n\nExplanation\n\nThis function uses the helio to get the heliocentric ecliptic coordinates of the planets at the given date which it then converts these to geocentric ecliptic coordinates ala \"Astronomical Algorithms\" by Jean Meeus (1991, p 209). These are then converted to right ascension and declination using euler.\n\nThe accuracy between the years 1800 and 2050 is better than 1 arcminute for the terrestial planets, but reaches 10 arcminutes for Saturn. Before 1850 or after 2050 the accuracy can get much worse.\n\nArguments\n\ndate: Can be either a single date or an array of dates. Each element can be either a DateTime type or Julian Date. It can be a scalar or vector.\nnum: integer denoting planet number, scalar or vector 1 = Mercury, 2 = Venus, ... 9 = Pluto. If not in that change, then the program will throw an error.\n\nOutput\n\nra: right ascension of planet(J2000), in degrees\ndec: declination of the planet(J2000), in degrees\n\nExample\n\nFind the RA, Dec of Venus on 1992 Dec 20\n\njulia> using AstroLib, Dates\n\njulia> adstring(planet_coords(DateTime(1992,12,20),2))\n\" 21 05 02.8  -18 51 41\"\n\nNotes\n\nCode of this function is based on IDL Astronomy User\'s Library.\n\n\n\n\n\n"
},

{
    "location": "ref/#AstroLib.polrec-Tuple{Real,Real}",
    "page": "Reference",
    "title": "AstroLib.polrec",
    "category": "method",
    "text": "polrec(radius, angle[, degrees=true]) -> x, y\n\nPurpose\n\nConvert 2D polar coordinates to rectangular coordinates.\n\nExplanation\n\nThis is the partial inverse function of recpol.\n\nArguments\n\nradius: radial coordinate of the point.  It may be a scalar or an array.\nangle: the angular coordinate of the point.  It may be a scalar or an array of the same lenth as radius.\ndegrees (optional boolean keyword): if true, the angle is assumed to be in degrees, otherwise in radians.  It defaults to false.\n\nMandatory arguments can also be passed as the 2-tuple (radius, angle), so that it is possible to execute recpol(polrec(radius, angle)).\n\nOutput\n\nA 2-tuple (x, y) with the rectangular coordinate of the input.  If radius and angle are arrays, x and y are arrays of the same length as radius and angle.\n\nExample\n\nGet rectangular coordinates (x y) of the point with polar coordinates (r varphi) = (17 227), with angle varphi expressed in degrees.\n\njulia> using AstroLib\n\njulia> x, y = polrec(1.7, 227, degrees=true)\n(-1.1593972121062475, -1.2433012927525897)\n\n\n\n\n\n"
},

{
    "location": "ref/#AstroLib.posang-Tuple{Integer,Real,Real,Real,Real}",
    "page": "Reference",
    "title": "AstroLib.posang",
    "category": "method",
    "text": "posang(units, ra1, dec1, ra2, dec2) -> angular_distance\n\nPurpose\n\nCompute rigorous position angle of point 2 relative to point 1.\n\nExplanation\n\nComputes the rigorous position angle of point 2 (with given right ascension and declination) using point 1 (with given right ascension and declination) as the center.\n\nArguments\n\nunits: integer, can be either 0, or 1, or 2.  Describes units of inputs and\n\noutput:     * 0: everything (input right ascensions and declinations, and output       distance) is radians     * 1: right ascensions are in decimal hours, declinations in decimal degrees,       output distance in degrees     * 2: right ascensions and declinations are in degrees, output distance in       degrees\n\nra1:  right ascension or longitude of point 1\ndec1: declination or latitude of point 1\nra2: right ascension or longitude of point 2\ndec2: declination or latitude of point 2\n\nBoth ra1 and dec1, and ra2 and dec2 can be given as 2-tuples (ra1, dec1) and (ra2, dec2).\n\nOutput\n\nAngle of the great circle containing [ra2, dec2] from the meridian containing [ra1, dec1], in the sense north through east rotating about [ra1, dec1]. See units argument above for units.\n\nMethod\n\nThe \"four-parts formula\" from spherical trigonometry (p. 12 of Smart\'s Spherical Astronomy or p. 12 of Green\' Spherical Astronomy).\n\nExample\n\nMizar has coordinates (ra, dec) = (13h 23m 55.5s, +54° 55\' 31\'\').  Its companion, Alcor, has coordinates (ra, dec) = (13h 25m 13.5s, +54° 59\' 17\'\'). Find the position angle of Alcor with respect to Mizar.\n\njulia> using AstroLib\n\njulia> posang(1, ten(13, 25, 13.5), ten(54, 59, 17), ten(13, 23, 55.5), ten(54, 55, 31))\n-108.46011246802047\n\nNotes\n\nThe function sphdist provides an alternate method of computing a spherical\n\ndistance.\n\nNote that posang is not commutative: the position angle between A and B is theta, then the position angle between B and A is 180 + theta.\n\nCode of this function is based on IDL Astronomy User\'s Library.\n\n\n\n\n\n"
},

{
    "location": "ref/#AstroLib.precess-NTuple{4,Real}",
    "page": "Reference",
    "title": "AstroLib.precess",
    "category": "method",
    "text": "precess(ra, dec, equinox1, equinox2[, FK4=true, radians=true]) -> prec_ra, prec_dec\n\nPurpose\n\nPrecess coordinates from equinox1 to equinox2.\n\nExplanation\n\nThe default (ra, dec) system is FK5 based on epoch J2000.0 but FK4 based on B1950.0 is available via the FK4 boolean keyword.\n\nArguments\n\nra: input right ascension, scalar or vector, in degrees, unless the radians keyword is set to true\ndec: input declination, scalar or vector, in degrees, unless the radians keyword is set to true\nequinox1: original equinox of coordinates, numeric scalar.\nequinox2: equinox of precessed coordinates.\nFK4 (optional boolean keyword): if this keyword is set to true, the FK4 (B1950.0) system precession angles are used to compute the precession matrix. When it is false, the default, use FK5 (J2000.0) precession angles.\nradians (optional boolean keyword): if this keyword is set to true, then the input and output right ascension and declination vectors are in radians rather than degrees.\n\nOutput\n\nThe 2-tuple (ra, dec) of coordinates modified by precession.\n\nExample\n\nThe Pole Star has J2000.0 coordinates (2h, 31m, 46.3s, 89d 15\' 50.6\"); compute its coordinates at J1985.0\n\njulia> using AstroLib\n\njulia> ra, dec = ten(2,31,46.3)*15, ten(89,15,50.6)\n(37.94291666666666, 89.26405555555556)\n\njulia> adstring(precess(ra, dec, 2000, 1985), precision=1)\n\" 02 16 22.73  +89 11 47.3\"\n\nPrecess the B1950 coordinates of Eps Ind (RA = 21h 59m,33.053s, DEC = (-56d, 59\', 33.053\") to equinox B1975.\n\njulia> using AstroLib\n\njulia> ra, dec = ten(21, 59, 33.053) * 15, ten(-56, 59, 33.053)\n(329.88772083333333, -56.992514722222225)\n\njulia> adstring(precess(ra, dec, 1950, 1975, FK4=true), precision=1)\n\" 22 01 15.46  -56 52 18.7\"\n\nMethod\n\nAlgorithm from \"Computational Spherical Astronomy\" by Taff (1983), p. 24. (FK4). FK5 constants from \"Explanatory Supplement To The Astronomical Almanac\" 1992, page 104 Table 3.211.1 (https://archive.org/details/131123ExplanatorySupplementAstronomicalAlmanac).\n\nNotes\n\nAccuracy of precession decreases for declination values near 90 degrees. precess should not be used more than 2.5 centuries from 2000 on the FK5 system (1950.0 on the FK4 system).  If you need better accuracy, use bprecess or jprecess as needed.\n\nCode of this function is based on IDL Astronomy User\'s Library.\n\n\n\n\n\n"
},

{
    "location": "ref/#AstroLib.precess_cd",
    "page": "Reference",
    "title": "AstroLib.precess_cd",
    "category": "function",
    "text": "precess_cd(cd, epoch1, epoch2, crval_old, crval_new[, FK4=true]) -> cd\n\nPurpose\n\nPrecess the coordinate description matrix.\n\nExplanation\n\nThe coordinate matrix is precessed from epoch1 to epoch2.\n\nArguments\n\ncd: 2 x 2 coordinate description matrix in degrees\nepoch1: original equinox of coordinates, scalar\nepoch2: equinox of precessed coordinates, scalar\ncrval_old: 2 element vector containing right ascension and declination in degrees of the reference pixel in the original equinox\ncrval_new: 2 element vector giving crval in the new equinox\nFK4 (optional boolean keyword): if this keyword is set to true, then the precession constants are taken in the FK4 reference frame. When it is false, the default is the FK5 frame\n\nOutput\n\ncd: coordinate description containing precessed values\n\nExample\n\njulia> using AstroLib\n\njulia> precess_cd([20 60; 45 45], 1950, 2000, [34, 58], [12, 83])\n2×2 Array{Float64,2}:\n  48.8944  147.075\n 110.188   110.365\n\nNotes\n\nCode of this function is based on IDL Astronomy User\'s Library. This function should not be used for values more than 2.5 centuries from the year 1900. This function calls sec2rad, precess and bprecess.\n\n\n\n\n\n"
},

{
    "location": "ref/#AstroLib.precess_xyz-NTuple{5,Real}",
    "page": "Reference",
    "title": "AstroLib.precess_xyz",
    "category": "method",
    "text": "precess_xyz(x, y, z, equinox1, equinox2) -> prec_x, prec_y, prec_z\n\nPurpose\n\nPrecess equatorial geocentric rectangular coordinates.\n\nArguments\n\nx, y, z: scalars or vectors giving heliocentric rectangular coordinates.\nequinox1: original equinox of coordinates, numeric scalar.\nequinox2: equinox of precessed coordinates, numeric scalar.\n\nInput coordinates can be given also a 3-tuple (x, y, z).\n\nOutput\n\nThe 3-tuple (x, y, z) of coordinates modified by precession.\n\nExample\n\nPrecess 2000 equinox coordinates (1, 1, 1) to 2050.\n\njulia> using AstroLib\n\njulia> precess_xyz(1, 1, 1, 2000, 2050)\n(0.9838854500981734, 1.0110925876508692, 1.0048189888146941)\n\nMethod\n\nThe equatorial geocentric rectangular coordinates are converted to right ascension and declination, precessed in the normal way, then changed back to x, y and z using unit vectors.\n\nNotes\n\nCode of this function is based on IDL Astronomy User\'s Library.\n\n\n\n\n\n"
},

{
    "location": "ref/#AstroLib.premat-Tuple{Real,Real}",
    "page": "Reference",
    "title": "AstroLib.premat",
    "category": "method",
    "text": "premat(equinox1, equinox2[, FK4=true]) -> precession_matrix\n\nPurpose\n\nReturn the precession matrix needed to go from equinox1 to equinox2.\n\nExplanation\n\nThis matrix is used by precess and baryvel to precess astronomical coordinates.\n\nArguments\n\nequinox1: original equinox of coordinates.\nequinox2: equinox of precessed coordinates.\nFK4 (optional boolean keyword): if this keyword is set to true, the FK4 (B1950.0) system precession angles are used to compute the precession matrix. When it is false, the default, use FK5 (J2000.0) precession angles.\n\nOutput\n\nA 3×3 matrix, used to precess equatorial rectangular coordinates.\n\nExample\n\nReturn the precession matrix from 1950.0 to 1975.0 in the FK4 system\n\njulia> using AstroLib\n\njulia> premat(1950,1975,FK4=true)\n3×3 StaticArrays.SArray{Tuple{3,3},Float64,2,9}:\n 0.999981    -0.00558775  -0.00242909\n 0.00558775   0.999984    -6.78691e-6\n 0.00242909  -6.78633e-6   0.999997\n\nMethod\n\nFK4 constants from \"Computational Spherical Astronomy\" by Taff (1983), p. 24. (FK4). FK5 constants from \"Explanatory Supplement To The Astronomical Almanac\" 1992, page 104 Table 3.211.1 (https://archive.org/details/131123ExplanatorySupplementAstronomicalAlmanac).\n\nNotes\n\nCode of this function is based on IDL Astronomy User\'s Library.\n\n\n\n\n\n"
},

{
    "location": "ref/#AstroLib.rad2sec-Tuple{Real}",
    "page": "Reference",
    "title": "AstroLib.rad2sec",
    "category": "method",
    "text": "rad2sec(rad) -> seconds\n\nPurpose\n\nConvert from radians to seconds.\n\nArgument\n\nrad: number of radians.\n\nOutput\n\nThe number of seconds corresponding to rad.\n\nExample\n\njulia> using AstroLib\n\njulia> rad2sec(1)\n206264.80624709636\n\nNotes\n\nUse sec2rad to convert seconds to radians.\n\n\n\n\n\n"
},

{
    "location": "ref/#AstroLib.radec-Tuple{Real,Real}",
    "page": "Reference",
    "title": "AstroLib.radec",
    "category": "method",
    "text": "radec(ra::Real, dec::Real[, hours=true]) -> ra_hours, ra_minutes, ra_seconds, dec_degrees, dec_minutes, dec_seconds\n\nPurpose\n\nConvert right ascension and declination from decimal to sexagesimal units.\n\nExplanation\n\nThe conversion is to sexagesimal hours for right ascension, and sexagesimal degrees for declination.\n\nArguments\n\nra: decimal right ascension, scalar or array.  It is expressed in degrees, unless the optional keyword hours is set to true.\ndec: declination in decimal degrees, scalar or array, same number of elements as ra.\nhours (optional boolean keyword): if false (the default), ra is assumed to be given in degrees, otherwise ra is assumed to be expressed in hours.\n\nOutput\n\nA 6-tuple of AbstractFloat:\n\n(ra_hours, ra_minutes, ra_seconds, dec_degrees, dec_minutes, dec_seconds)\n\nIf ra and dec are arrays, also each element of the output 6-tuple are arrays of the same dimension.\n\nExample\n\nPosition of Sirius in the sky is (ra, dec) = (6.7525, -16.7161), with right ascension expressed in hours.  Its sexagesimal representation is given by\n\njulia> using AstroLib\n\njulia> radec(6.7525, -16.7161, hours=true)\n(6.0, 45.0, 9.0, -16.0, 42.0, 57.9600000000064)\n\n\n\n\n\n"
},

{
    "location": "ref/#AstroLib.recpol-Tuple{Real,Real}",
    "page": "Reference",
    "title": "AstroLib.recpol",
    "category": "method",
    "text": "recpol(x, y[, degrees=true]) -> radius, angle\n\nPurpose\n\nConvert 2D rectangular coordinates to polar coordinates.\n\nExplanation\n\nThis is the partial inverse function of polrec.\n\nArguments\n\nx: the abscissa coordinate of the point.  It may be a scalar or an array.\ny: the ordinate coordinate of the point.  It may be a scalar or an array of the same lenth as x.\ndegrees (optional boolean keyword): if true, the output angle is given\n\nin degrees, otherwise in radians.  It defaults to false.\n\nMandatory arguments may also be passed as the 2-tuple (x, y), so that it is possible to execute polrec(recpol(x, y)).\n\nOutput\n\nA 2-tuple (radius, angle) with the polar coordinates of the input.  The coordinate angle coordinate lies in the range -pi pi if degrees=false, or -180 180 when degrees=true.\n\nIf x and y are arrays, radius and angle are arrays of the same length as radius and angle.\n\nExample\n\nCalculate polar coordinates (r varphi) of point with rectangular coordinates (x y) = (224 -187).\n\njulia> using AstroLib\n\njulia> r, phi = recpol(2.24, -1.87)\n(2.917961617293826, -0.6956158538564537)\n\nAngle varphi is given in radians.\n\n\n\n\n\n"
},

{
    "location": "ref/#AstroLib.rhotheta-NTuple{8,Real}",
    "page": "Reference",
    "title": "AstroLib.rhotheta",
    "category": "method",
    "text": "rhotheta(period, periastron, eccentricity, semimajor_axis, inclination, omega, omega2, epoch) -> rho, theta\n\nPurpose\n\nCalculate the separation and position angle of a binary star.\n\nExplanation\n\nThis function will return the separation rho and position angle theta of a visual binary star derived from its orbital elements.  The algorithms described in the following book will be used: Meeus J., 1992, Astronomische Algorithmen, Barth.  Compared to the examples given at page 400 and no discrepancy found.\n\nArguments\n\nperiod: period [year]\nperiastro: time of periastron passage [year]\neccentricity: eccentricity of the orbit\nsemimajor_axis: semi-major axis [arc second]\ninclination: inclination angle [degree]\nomega: node [degree]\nomega2: longitude of periastron [degree]\nepoch: epoch of observation [year]\n\nAll input parameters have to be scalars.\n\nOutput\n\nThe 2-tuple (rho theta), where\n\nrho is separation [arc second], and\ntheta is position angle (degree).\n\nExample\n\nFind the position of Eta Coronae Borealis at the epoch 2016\n\njulia> using AstroLib\n\njulia> ρ, θ = rhotheta(41.623, 1934.008, 0.2763, 0.907, 59.025, 23.717, 219.907, 2016)\n(0.6351167848659552, 214.42513387396497)\n\nNotes\n\nCode of this function is based on IDL Astronomy User\'s Library.\n\n\n\n\n\n"
},

{
    "location": "ref/#AstroLib.sec2rad-Tuple{Real}",
    "page": "Reference",
    "title": "AstroLib.sec2rad",
    "category": "method",
    "text": "sec2rad(sec) -> radians\n\nPurpose\n\nConvert from seconds to radians.\n\nArgument\n\nsec: number of seconds.\n\nOutput\n\nThe number of radians corresponding to sec.\n\nExample\n\njulia> using AstroLib\n\njulia> sec2rad(3600 * 30)\n0.5235987755982988\n\nNotes\n\nUse rad2sec to convert radians to seconds.\n\n\n\n\n\n"
},

{
    "location": "ref/#AstroLib.sixty-Tuple{Real}",
    "page": "Reference",
    "title": "AstroLib.sixty",
    "category": "method",
    "text": "sixty(number) -> [deg, min, sec]\n\nPurpose\n\nConverts a decimal number to sexagesimal.\n\nExplanation\n\nThe reverse of ten function.\n\nArgument\n\nnumber: decimal number to be converted to sexagesimal.\n\nOutput\n\nAn array of three AbstractFloat, that are the sexagesimal counterpart (degrees, minutes, seconds) of number.\n\nExample\n\njulia> using AstroLib\n\njulia> sixty(-0.615)\n3-element StaticArrays.SArray{Tuple{3},Float64,1,3}:\n -0.0\n 36.0\n 54.0\n\nNotes\n\nCode of this function is based on IDL Astronomy User\'s Library.\n\n\n\n\n\n"
},

{
    "location": "ref/#AstroLib.sphdist-NTuple{4,Real}",
    "page": "Reference",
    "title": "AstroLib.sphdist",
    "category": "method",
    "text": "sphdist(long1, lat1, long2, lat2[, degrees=true]) -> angular_distance\n\nPurpose\n\nAngular distance between points on a sphere.\n\nArguments\n\nlong1:  longitude of point 1\nlat1: latitude of point 1\nlong2: longitude of point 2\nlat2: latitude of point 2\ndegrees (optional boolean keyword): if true, all angles, including the output distance, are assumed to be in degrees, otherwise they are all in radians.  It defaults to false.\n\nOutput\n\nAngular distance on a sphere between points 1 and 2, as an AbstractFloat.  It is expressed in radians unless degrees keyword is set to true.\n\nExample\n\njulia> using AstroLib\n\njulia> sphdist(120, -43, 175, +22)\n1.5904422616007134\n\nNotes\n\ngcirc function is similar to sphdist, but may be more suitable for astronomical applications.\n\nCode of this function is based on IDL Astronomy User\'s Library.\n\n\n\n\n\n"
},

{
    "location": "ref/#AstroLib.sunpos-Tuple{Real}",
    "page": "Reference",
    "title": "AstroLib.sunpos",
    "category": "method",
    "text": "sunpos(jd[, radians=true]) -> ra, dec, elong, obliquity\n\nPurpose\n\nCompute the right ascension and declination of the Sun at a given date.\n\nArguments\n\njd: the Julian date of when you want to calculate Sun position.  It can be either a scalar or a vector.  Use jdcnv to get the Julian date for a given date and time.\nradians (optional boolean keyword): if set to true, all output quantities are given in radians.  The default is false, so all quantities are given in degrees.\n\nOutput\n\nThe 4-tuple (ra, dec, elong, obliquity):\n\nra: the right ascension of the Sun at that date\ndec: the declination of the Sun at that date\nelong: ecliptic longitude of the Sun at that date\nobliquity: the obliquity of the ecliptic\n\nAll quantities are given in degrees, unless radians keyword is set to true (see \"Arguments\" section).  If jd is an array, arrays of the same given as jd are returned.\n\nMethod\n\nUses a truncated version of Newcomb\'s Sun.  Adapted from the IDL routine SUN_POS by CD Pike, which was adapted from a FORTRAN routine by B. Emerson (RGO).\n\nExample\n\n(1) Find the apparent right ascension and declination of the Sun on May 1, 1982\n\njulia> using AstroLib\n\njulia> adstring(sunpos(jdcnv(1982, 5, 1))[1:2], precision=2)\n\" 02 31 32.614  +14 54 34.92\"\n\nThe Astronomical Almanac gives 02 31 32.58 +14 54 34.9 so the error for this case is < 0.5\".\n\n(2) Plot the apparent right ascension, in hours, and declination of the Sun, in degrees, for every day in 2016.  Use PyPlot.jl for plotting.\n\nusing PyPlot\ndays = DateTime(2016):DateTime(2016, 12, 31);\nra, declin = sunpos(jdcnv.(days));\nplot(days, ra/15); plot(days, declin)\n\nNotes\n\nPatrick Wallace (Rutherford Appleton Laboratory, UK) has tested the accuracy of a C adaptation of the present algorithm and found the following results.  From 1900-2100 sunpos gave 7.3 arcsec maximum error, 2.6 arcsec RMS.  Over the shorter interval 1950-2050 the figures were 6.4 arcsec max, 2.2 arcsec RMS.\n\nThe returned ra and dec are in the given date\'s equinox.\n\nCode of this function is based on IDL Astronomy User\'s Library.\n\n\n\n\n\n"
},

{
    "location": "ref/#AstroLib.ten",
    "page": "Reference",
    "title": "AstroLib.ten",
    "category": "function",
    "text": "ten(deg[, min, sec]) -> decimal\nten(\"deg:min:sec\") -> decimal\n\nPurpose\n\nConverts a sexagesimal number or string to decimal.\n\nExplanation\n\nten is the inverse of the sixty function.\n\nArguments\n\nten takes as argument either three scalars (deg, min, sec) or a string. The string should have the form \"deg:min:sec\" or \"deg min sec\".  Also any iterable like (deg, min, sec) or [deg, min, sec] is accepted as argument.\n\nIf minutes and seconds are not specified they default to zero.\n\nOutput\n\nThe decimal conversion of the sexagesimal numbers provided is returned.\n\nMethod\n\nThe formula used for the conversion is\n\nmathrmsign(mathrmdeg)left(mathrmdeg + fracmathrmmin60 + fracmathrmsec3600right)\n\nExample\n\njulia> using AstroLib\n\njulia> ten(-0.0, 19, 47)\n-0.3297222222222222\n\njulia> ten(\"+5:14:58\")\n5.249444444444444\n\njulia> ten(\"-10 26\")\n-10.433333333333334\n\njulia> ten((-10, 26))\n-10.433333333333334\n\nNotes\n\nThese functions cannot deal with -0 (negative integer zero) in numeric input. If it is important to give sense to negative zero, you can either make sure to pass a floating point negative zero -0.0 (this is the best option), or use negative minutes and seconds, or non-integer negative degrees and minutes.\n\n\n\n\n\n"
},

{
    "location": "ref/#AstroLib.tic_one",
    "page": "Reference",
    "title": "AstroLib.tic_one",
    "category": "function",
    "text": "tic_one(zmin, pixx, incr[, ra=true]) -> min2, tic1\n\nPurpose\n\nDetermine the position of the first tic mark for astronomical images.\n\nExplanation\n\nFor use in labelling images with right ascension and declination axes. This routine determines the position in pixels of the first tic.\n\nArguments\n\nzmin: astronomical coordinate value at axis zero point (degrees  or hours).\npixx: distance in pixels between tic marks (usually obtained from tics).\nincr - increment in minutes for labels (usually an even number obtained  from the procedure tics).\nra (optional boolean keyword): if true, incremental value being entered  is in minutes of time, else it is assumed that value is in else it\'s in minutes of arc.  Default is false.\n\nOutput\n\nThe 2 tuple (min2, tic1):\n\nmin2: astronomical coordinate value at first tic mark\ntic1: position in pixels of first tic mark\n\nExample\n\nSuppose a declination axis has a value of 30.2345 degrees at its zero point.  A tic mark is desired every 10 arc minutes, which corresponds to 12.74 pixels, with increment for labels being 10 minutes. Then\n\njulia> using AstroLib\n\njulia> tic_one(30.2345, 12.74, 10)\n(30.333333333333332, 7.554820000000081)\n\nyields values of min2 ≈ 30.333 and tic1 ≈ 7.55482, i.e. the first tic mark should be labeled 30 deg 20 minutes and be placed at pixel value 7.55482.\n\nNotes\n\nCode of this function is based on IDL Astronomy User\'s Library.\n\n\n\n\n\n"
},

{
    "location": "ref/#AstroLib.ticpos-Tuple{Real,Real,Real}",
    "page": "Reference",
    "title": "AstroLib.ticpos",
    "category": "method",
    "text": "ticpos(deglen, pixlen, ticsize) -> ticsize, incr, units\n\nPurpose\n\nSpecify distance between tic marks for astronomical coordinate overlays.\n\nExplanation\n\nUser inputs number an approximate distance between tic marks, and the axis length in degrees. ticpos will return a distance between tic marks such that the separation is a round multiple in arc seconds, arc minutes, or degrees.\n\nArguments\n\ndeglen: length of axis in degrees, positive scalar\npixlen: length of axis in plotting units (pixels), postive scalar\nticsize: distance between tic marks (pixels).  This value will be  adjusted by ticpos such that the distance corresponds to a round  multiple in the astronomical coordinate.\n\nOutput\n\nThe 3-tuple (ticsize, incr, units):\n\nticsize: distance between tic marks (pixels), positive scalar\nincr: incremental value for tic marks in round units given  by the units parameter\nunits: string giving units of ticsize, either \'Arc Seconds\', \'Arc Minutes\', or \'Degrees\'\n\nExample\n\nSuppose a 512 x 512 image array corresponds to 0.2 x 0.2 degrees on the sky. A tic mark is desired in round angular units, approximately every 75 pixels. Then\n\njulia> using AstroLib\n\njulia> ticpos(0.2, 512, 75)\n(85.33333333333333, 2.0, \"Arc Minutes\")\n\ni.e. a good tic mark spacing is every 2 arc minutes, corresponding to 85.333 pixels.\n\nNotes\n\nAll the arguments taken as input are assumed to be positive in nature.\n\nCode of this function is based on IDL Astronomy User\'s Library.\n\n\n\n\n\n"
},

{
    "location": "ref/#AstroLib.tics",
    "page": "Reference",
    "title": "AstroLib.tics",
    "category": "function",
    "text": "tics(radec_min, radec_max, numx, ticsize[, ra=true]) -> ticsize, incr\n\nPurpose\n\nCompute a nice increment between tic marks for astronomical images.\n\nExplanation\n\nFor use in labelling a displayed image with right ascension or declination axes.  An approximate distance between tic marks is input, and a new value is computed such that the distance between tic marks is in simple increments of the tic label values.\n\nArguements\n\nradec_min : minimum axis value (degrees).\nradec_min : maximum axis value (degrees).\nnumx : number of pixels in x direction.\nticsize : distance between tic marks (pixels).\nra (optional boolean keyword): if true, incremental value would be in minutes of time. Default is false.\n\nOutput\n\nA 2-tuple (ticsize, incr):\n\nticsize : distance between tic marks (pixels).\nincr : incremental value for tic labels.  The format is dependent on the optional keyword. If true (i.e for right ascension), it\'s in minutes of time, else it\'s in minutes of arc (for declination).\n\nExample\n\njulia> using AstroLib\n\njulia> tics(55, 60, 100.0, 1/2)\n(0.66, 2.0)\n\njulia> tics(30, 60, 12, 2, true)\n(2.75, 30.0)\n\nNotes\n\nCode of this function is based on IDL Astronomy User\'s Library.\n\n\n\n\n\n"
},

{
    "location": "ref/#AstroLib.true_obliquity-Tuple{Real}",
    "page": "Reference",
    "title": "AstroLib.true_obliquity",
    "category": "method",
    "text": "true_obliquity(jd) -> t_eps\n\nPurpose\n\nReturn the true obliquity of the ecliptic for a given Julian date\n\nExplanation\n\nThe function is used by the co_aberration procedure.\n\nArguments\n\njd: Julian date.\n\nOutput\n\nt_eps: true obliquity of the ecliptic, in radians\n\nExample\n\njulia> using AstroLib\n\njulia> true_obliquity(jdcnv(1978,01,7,11, 01))\n0.4090953896211926\n\nNotes\n\nThe function calls mean_obliquity.\n\n\n\n\n\n"
},

{
    "location": "ref/#AstroLib.trueanom-Tuple{Real,Real}",
    "page": "Reference",
    "title": "AstroLib.trueanom",
    "category": "method",
    "text": "trueanom(E, e) -> true anomaly\n\nPurpose\n\nCalculate true anomaly for a particle in elliptic orbit with eccentric anomaly E and eccentricity e.\n\nExplanation\n\nIn the two-body problem, once that the Kepler\'s equation is solved and E(t) is determined, the polar coordinates (r(t) theta(t)) of the body at time t in the elliptic orbit are given by\n\ntheta(t) = 2arctan left(sqrtfrac1 + e1 - e tanfracE(t)2 right)\n\nr(t) = fraca(1 - e^2)1 + ecos(theta(t) - theta_0)\n\nin which a is the semi-major axis of the orbit, and theta_0 the value of angular coordinate at time t = t_0.\n\nArguments\n\nE: eccentric anomaly.\ne: eccentricity, in the elliptic motion regime (0 leq e leq 1)\n\nOutput\n\nThe true anomaly.\n\nExample\n\nPlot the true anomaly as a function of mean anomaly for eccentricity e = 0, 05, 09.  Use PyPlot.jl for plotting.\n\nusing PyPlot\nM = range(0, stop=2pi, length=1001)[1:end-1];\nfor ecc in (0, 0.5, 0.9)\n    plot(M, mod2pi.(trueanom.(kepler_solver.(M, ecc), ecc)))\nend\n\nNotes\n\nThe eccentric anomaly can be calculated with kepler_solver function.\n\n\n\n\n\n"
},

{
    "location": "ref/#AstroLib.uvbybeta",
    "page": "Reference",
    "title": "AstroLib.uvbybeta",
    "category": "function",
    "text": "uvbybeta(by, m1, c1, n[, hbeta=NaN, eby_in=NaN]) -> te, mv, eby, delm0, radius\n\nPurpose\n\nDerive dereddened colors, metallicity, and Teff from Stromgren colors.\n\nArguments\n\nby: Stromgren b-y color\nm1: Stromgren line-blanketing parameter\nc1: Stromgren Balmer discontinuity parameter\nn: Integer which can be any value between 1 to 8, giving approximate stellar classification. (1) B0 - A0, classes III - V, 2.59 < Hbeta < 2.88,-0.20 <   c0   < 1.00 (2) B0 - A0, class   Ia     , 2.52 < Hbeta < 2.59,-0.15 <   c0   < 0.40 (3) B0 - A0, class   Ib     , 2.56 < Hbeta < 2.61,-0.10 <   c0   < 0.50 (4) B0 - A0, class   II     , 2.58 < Hbeta < 2.63,-0.10 <   c0   < 0.10 (5) A0 - A3, classes III - V, 2.87 < Hbeta < 2.93,-0.01 < (b-y)o < 0.06 (6) A3 - F0, classes III - V, 2.72 < Hbeta < 2.88, 0.05 < (b-y)o < 0.22 (7) F1 - G2, classes III - V, 2.60 < Hbeta < 2.72, 0.22 < (b-y)o < 0.39 (8) G2 - M2, classes  IV - V, 0.20 < m0    < 0.76, 0.39 < (b-y)o < 1.00\nhbeta (optional): H-beta line strength index. If it is not supplied, then by default its value will be NaN and the code will estimate a value based on by, m1,and c1. It is not used for stars in group 8.\neby_in (optional): specifies the E(b-y) color to use. If not supplied, then by default its value will be NaN and E(b-y) will be estimated from the Stromgren colors.\n\nOutput\n\nte: approximate effective temperature\nmv: absolute visible magnitude\neby: color excess E(b-y)\ndelm0: metallicity index, delta m0, may not be calculable for early B stars and so returns NaN.\nradius: stellar radius (R/R(solar))\n\nExample\n\nSuppose 5 stars have the following Stromgren parameters\n\nby = [-0.001 ,0.403, 0.244, 0.216, 0.394] m1 = [0.105, -0.074, -0.053, 0.167, 0.186] c1 = [0.647, 0.215, 0.051, 0.785, 0.362] hbeta = [2.75, 2.552, 2.568, 2.743, 0] nn = [1,2,3,7,8]\n\nDetermine the stellar parameters\n\njulia> using AstroLib\n\njulia> by = [-0.001 ,0.403, 0.244, 0.216, 0.394];\n\njulia> m1 = [0.105, -0.074, -0.053, 0.167, 0.186];\n\njulia> c1 = [0.647, 0.215, 0.051, 0.785, 0.362];\n\njulia> hbeta = [2.75, 2.552, 2.568, 2.743, 0];\n\njulia> nn = [1,2,3,7,8];\n\njulia> uvbybeta.(by, m1, c1, nn, hbeta)\n5-element Array{NTuple{5,Float64},1}:\n (13057.535222326893, -0.27375469585031265, 0.04954396423248884, -0.008292894218734928, 2.7136529525371897)\n (14025.053834219656, -6.907050783073221, 0.4140562248995983, NaN, 73.50771722263974)\n (18423.76405400214, -5.935816553877892, 0.2828247876690783, NaN, 39.84106215808709)\n (7210.507090112837, 2.2180408083364167, 0.018404079180028038, 0.018750927360588615, 2.0459018065648165)\n (5755.671513413262, 3.9449408311022, -0.025062997393370458, 0.03241423718769865, 1.5339239690774464)\n\nNotes\n\nCode of this function is based on IDL Astronomy User\'s Library.\n\n\n\n\n\n"
},

{
    "location": "ref/#AstroLib.vactoair-Tuple{Real}",
    "page": "Reference",
    "title": "AstroLib.vactoair",
    "category": "method",
    "text": "vactoair(wave_vacuum) -> wave_air\n\nPurpose\n\nConverts vacuum wavelengths to air wavelengths.\n\nExplanation\n\nCorrects for the index of refraction of air under standard conditions. Wavelength values below 2000 Å will not be altered.  Uses relation of Ciddor (1996).\n\nArguments\n\nwave_vacuum: vacuum wavelength in angstroms.  Wavelengths are corrected for the index of refraction of air under standard conditions.  Wavelength values below 2000 Å will not be altered, take care within 1 Å 2000 Å.\n\nOutput\n\nAir wavelength in angstroms.\n\nMethod\n\nUses relation of Ciddor (1996), Applied Optics 35, 1566 (http://adsabs.harvard.edu/abs/1996ApOpt..35.1566C).\n\nExample\n\nIf the vacuum wavelength is w = 2000, then vactoair(w) yields an air wavelength of 1999.353.\n\njulia> using AstroLib\n\njulia> vactoair(2000)\n1999.3526230448367\n\nNotes\n\nairtovac converts air wavelengths to vacuum wavelengths.\n\nCode of this function is based on IDL Astronomy User\'s Library.\n\n\n\n\n\n"
},

{
    "location": "ref/#AstroLib.xyz",
    "page": "Reference",
    "title": "AstroLib.xyz",
    "category": "function",
    "text": "xyz(jd[, equinox]) -> x, y, z, v_x, v_y, v_z\n\nPurpose\n\nCalculate geocentric x, y, and z and velocity coordinates of the Sun.\n\nExplanation\n\nCalculates geocentric x, y, and z vectors and velocity coordinates (dx, dy and dz) of the Sun.  (The positive x axis is directed towards the equinox, the y-axis, towards the point on the equator at right ascension 6h, and the z axis toward the north pole of the equator).  Typical position accuracy is 10^-4 AU (15000 km).\n\nArguments\n\njd: number of Reduced Julian Days for the wanted date.  It can be either a scalar or a vector.\nequinox (optional numeric argument): equinox of output. Default is 1950.\n\nYou can use juldate to get the number of Reduced Julian Days for the selected dates.\n\nOutput\n\nThe 6-tuple (x y z v_x v_y v_z), where\n\nx y z: scalars or vectors giving heliocentric rectangular coordinates (in AU) for each date supplied.  Note that sqrtx^2 + y^2 + z^2 gives the Earth-Sun distance for the given date.\nv_x v_y v_z: velocity vectors corresponding to x y, and z.\n\nExample\n\nWhat were the rectangular coordinates and velocities of the Sun on 1999-01-22T00:00:00 (= JD 2451200.5) in J2000 coords?  Note: Astronomical Almanac (AA) is in TDT, so add 64 seconds to UT to convert.\n\njulia> using AstroLib, Dates\n\njulia> jd = juldate(DateTime(1999, 1, 22))\n51200.5\n\njulia> xyz(jd + 64/86400, 2000)\n(0.514568709240398, -0.7696326261820209, -0.33376880143023935, 0.014947267514079971, 0.008314838205477328, 0.003606857607575486)\n\nCompare to Astronomical Almanac (1999 page C20)\n\n            x  (AU)        y  (AU)     z (AU)\nxyz:      0.51456871   -0.76963263  -0.33376880\nAA:       0.51453130   -0.7697110   -0.3337152\nabs(err): 0.00003739    0.00007839   0.00005360\nabs(err)\n    (km):   5609          11759         8040\n\nNOTE: Velocities in AA are for Earth/Moon barycenter       (a very minor offset) see AA 1999 page E3\n\n           x vel (AU/day) y vel (AU/day)   z vel (AU/day)\nxyz:      -0.014947268   -0.0083148382    -0.0036068576\nAA:       -0.01494574    -0.00831185      -0.00360365\nabs(err):  0.000001583    0.0000029886     0.0000032076\nabs(err)\n (km/sec): 0.00265        0.00519          0.00557\n\nNotes\n\nCode of this function is based on IDL Astronomy User\'s Library.\n\n\n\n\n\n"
},

{
    "location": "ref/#AstroLib.ydn2md-Tuple{Integer,Integer}",
    "page": "Reference",
    "title": "AstroLib.ydn2md",
    "category": "method",
    "text": "ydn2md(year, day) -> date\n\nPurpose\n\nConvert from year and day number of year to a date.\n\nExplanation\n\nReturns the date corresponding to the day of year.\n\nArguments\n\nyear: the year, as an integer.\nday: the day of year, as an integer.\n\nOutput\n\nThe date, of Date type, of textday - 1 days after January 1st of year.\n\nExample\n\nFind the date of the 60th and 234th days of the year 2016.\n\njulia> using AstroLib\n\njulia> ydn2md.(2016, [60, 234])\n2-element Array{Dates.Date,1}:\n 2016-02-29\n 2016-08-21\n\nNote\n\nymd2dn converts from a date to day of the year.\n\n\n\n\n\n"
},

{
    "location": "ref/#AstroLib.ymd2dn",
    "page": "Reference",
    "title": "AstroLib.ymd2dn",
    "category": "function",
    "text": "ymd2dn(date) -> number_of_days\n\nPurpose\n\nConvert from a date to day of the year.\n\nExplanation\n\nReturns the day of the year for date with January 1st being day 1.\n\nArguments\n\ndate: the date with Date type.  Can be a single date or an array of dates.\n\nOutput\n\nThe day of the year for the given date.  If date is an array, returns an array of days.\n\nExample\n\nFind the days of the year for March 5 in the years 2015 and 2016 (this is a leap year).\n\njulia> using AstroLib, Dates\n\njulia> ymd2dn.([Date(2015, 3, 5), Date(2016, 3, 5)])\n2-element Array{Int64,1}:\n 64\n 65\n\nNote\n\nydn2md converts from year and day number of year to a date.\n\n\n\n\n\n"
},

{
    "location": "ref/#AstroLib.zenpos",
    "page": "Reference",
    "title": "AstroLib.zenpos",
    "category": "function",
    "text": "zenpos(jd, latitude, longitude) -> zenith_right_ascension, declination\nzenpos(date, latitude, longitude, tz) -> zenith_right_ascension, declination\n\nPurpose\n\nReturn the zenith right ascension and declination in radians for a given Julian date or a local civil time and timezone.\n\nExplanation\n\nThe local sidereal time is computed with the help of ct2lst, which is the right ascension of the zenith. This and the observatories latitude (corresponding to the declination) are converted to radians and returned as the zenith direction.\n\nArguments\n\nThe function can be called in two different ways. The arguments common to both methods are latitude and longitude:\n\nlatitude : latitude of the desired location.\nlongitude : longitude of the desired location.\n\nThe zenith direction can be computed either by providing the Julian date:\n\njd : the Julian date of the date and time for which the zenith position is desired.\n\nor the time zone and the date:\n\ntz: the time zone (in hours) of the desired location (e.g. 4 = EDT, 5 = EST)\ndate: the local civil time with type DateTime.\n\nOutput\n\nA 2-tuple (ra, dec):\n\nra : the right ascension (in radians) of the zenith.\ndec : the declination (in radians) of the zenith.\n\nExample\n\njulia> using AstroLib, Dates\n\njulia> zenpos(DateTime(2017, 04, 25, 18, 59), 43.16, -24.32, 4)\n(0.946790432684706, 0.7532841051607526)\n\njulia> zenpos(jdcnv(2016, 05, 05, 13, 41), ten(35,0,42), ten(135,46,6))\n(3.5757821152779536, 0.6110688599440813)\n\nNotes\n\nCode of this function is based on IDL Astronomy User\'s Library.\n\n\n\n\n\n"
},

{
    "location": "ref/#AstroLib.POLELATLONG",
    "page": "Reference",
    "title": "AstroLib.POLELATLONG",
    "category": "constant",
    "text": "List of locations of North Magnetic Pole since 1590.\n\nThis is provided by World Magnetic Model (https://www.ngdc.noaa.gov/geomag/data/poles/NP.xy).\n\n\n\n\n\n"
},

{
    "location": "ref/#AstroLib.observatories",
    "page": "Reference",
    "title": "AstroLib.observatories",
    "category": "constant",
    "text": "List of observing sites.  The observatories have Observatory type.\n\n\n\n\n\n"
},

{
    "location": "ref/#AstroLib.planets",
    "page": "Reference",
    "title": "AstroLib.planets",
    "category": "constant",
    "text": "List of planets of the Solar System, from Mercury to Pluto.  The elements of the list have Planet type.\n\nReference for most quantities is the Planetary Fact Sheet: http://nssdc.gsfc.nasa.gov/planetary/factsheet/index.html and the Keplerian Elements for Approximate Positions of the Major Planets: https://ssd.jpl.nasa.gov/txt/pelemt1.txt\n\n\n\n\n\n"
},

{
    "location": "ref/#AstroLib.co_refract_forward-Tuple{Real,Real,Real}",
    "page": "Reference",
    "title": "AstroLib.co_refract_forward",
    "category": "method",
    "text": "co_refract_forward(alt, pre, temp) -> ref\n\nPurpose\n\nA function used by co_refract to find apparent (or observed) altitude\n\nArguments\n\nalt: the observed (or apparent) altitude, in degrees\npre: pressure, in millibars\ntemp: temperature, in Kelvins\n\nOutput\n\nref: the atmospheric refraction, in minutes of arc\n\nNotes\n\nThe atmospheric refraction is calculated by Saemundsson\'s formula\n\nCode of this function is based on IDL Astronomy User\'s Library.\n\n\n\n\n\n"
},

{
    "location": "ref/#Types-and-functions-organized-alphabetically-1",
    "page": "Reference",
    "title": "Types and functions organized alphabetically",
    "category": "section",
    "text": "Modules = [AstroLib]"
},

]}
