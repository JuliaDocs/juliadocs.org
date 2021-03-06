var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "#SatelliteToolbox.jl-1",
    "page": "Home",
    "title": "SatelliteToolbox.jl",
    "category": "section",
    "text": "CurrentModule = SatelliteToolbox\nDocTestSetup = quote\n    using SatelliteToolbox\nendThis package contains several functions to build simulations related with satellites. It is used on a daily basis on projects at the Brazilian National Institute for Space Research (INPE), and it is the engine of the FOrPlan Satellite Simulator.warning: Warning\nThis documentation is under construction. However, the functions are extensively documented using the Julia documentation system, which can be accessed by typing ? followed by the function name in REPL."
},

{
    "location": "#Requirements-1",
    "page": "Home",
    "title": "Requirements",
    "category": "section",
    "text": "Julia >= 0.7\nInterpolations >= 0.8.0\nParameters >= 0.10.1\nOptionalData >= 0.2.0\nReferenceFrameRotations >= 0.5.0\nRemoteFiles >= 0.2.1\nStaticArrays >= 0.9.2"
},

{
    "location": "#Installation-1",
    "page": "Home",
    "title": "Installation",
    "category": "section",
    "text": "This package can be installed using:julia> using Pkg\njulia> Pkg.add(\"SatelliteToolbox\")"
},

{
    "location": "man/earth/atmospheric_models/#",
    "page": "Earth atmospheric models",
    "title": "Earth atmospheric models",
    "category": "page",
    "text": ""
},

{
    "location": "man/earth/atmospheric_models/#Earth-atmospheric-models-1",
    "page": "Earth atmospheric models",
    "title": "Earth atmospheric models",
    "category": "section",
    "text": "CurrentModule = SatelliteToolbox\nDocTestSetup = quote\n    using SatelliteToolbox\nendThis package implements natively three atmospheric models:Exponential atmospheric model according to [1];\nJacchia-Roberts 1971;\nJacchia-Bowman 2008; and\nNRLMSISE-00."
},

{
    "location": "man/earth/atmospheric_models/#Exponential-atmospheric-model-1",
    "page": "Earth atmospheric models",
    "title": "Exponential atmospheric model",
    "category": "section",
    "text": "This model assumes that the atmospheric density is computed by:rho(h) = rho_0 cdot exp leftlbrace - frach - h_0H rightrbracein which rho_0, h_0, and H are parameters obtained from tables. Reference [1] provides a discretization of those parameters based on the selected height h that was obtained after evaluation of some accurate models.In this toolbox, the model can be evaluated using the following function:function expatmosphere(h::Number)in which h is the desired height in meters.julia> expatmosphere(700e3)\n3.614e-14warning: Warning\nNotice that this model does not consider important effects such as the Sun activity, the geomagnetic activity, the local time at the desired location, etc.  Hence, although this can be used for fast evaluations, the accuracy is not good."
},

{
    "location": "man/earth/atmospheric_models/#Jacchia-Roberts-1971-1",
    "page": "Earth atmospheric models",
    "title": "Jacchia-Roberts 1971",
    "category": "section",
    "text": "This is an analytic atmospheric model based on the Jacchia\'s 1970 model. It was published in:Roberts, C. E (1971). An analytic model for upper atmosphere densities based upon Jacchia\'s 1970 models. Celestial mechanics, Vol. 4 (3-4), p. 368-377, DOI: 10.1007/BF01231398.Although it is quite old, this model is still used for some applications, like computing the estimated reentry time for an object on low Earth orbits.In this toolbox, the model can be evaluated using the following function:function jr1971(JD::Number, glat::Number, glon::Number, h::Number, F10::Number, F10ₐ::Number, Kp::Number)in which:JD: Julian day.\nglat: Geodetic latitude [rad].\nglon: Geodetic longitude [rad].\nh: Altitude [m].\nF10: 10.7-cm solar flux [10⁻²² W/(M² Hz)].\nF10ₐ: 10.7-cm averaged solar flux, 81-day centered on input time.\nKp: Kp geomagnetic index (with a delay of 3 hours).Unfortunately, it does not support fetching the space indices automatically yet.This function returns an object of type JR1971_Output that contains the following fields:nN2: Number density of N₂ [1/m³].\nnO2: Number density of O₂ [1/m³].\nnO: Number density of O [1/m³].\nnAr: Number density of Ar [1/m³].\nnHe: Number density of He [1/m³].\nnH: Number density of H [1/m³].\nrho: Total density [kg/m³].\nT_exo: Exospheric temperature [K].\nTz: Temperature at the selected altitude [K].julia> jr1971(DatetoJD(2018, 6, 19, 18, 35, 0), deg2rad(-22), deg2rad(-45), 700e3, 79, 73.5, 1.34)\nJR1971_Output{Float64}\n  nN2: Float64 2.8434980991304275e7\n  nO2: Float64 174222.87498004938\n  nO: Float64 1.4139107014677744e11\n  nAr: Float64 8.972570981074819\n  nHe: Float64 8.773885389988551e11\n  nH: Float64 5.70278100570227e10\n  rho: Float64 9.684902904883998e-15\n  T_exo: Float64 832.0244272210398\n  Tz: Float64 832.0204436414629"
},

{
    "location": "man/earth/atmospheric_models/#Jacchia-Bowman-2008-1",
    "page": "Earth atmospheric models",
    "title": "Jacchia-Bowman 2008",
    "category": "section",
    "text": "This is an empirical thermospheric density model based on the Jacchia theory. It was published in:Bowman, B. R., Tobiska, W. K., Marcos, F. A., Huang, C. Y., Lin, C. S., Burke, W. J (2008). A new empirical thermospheric density model JB2008 using new solar and geomagnetic indices. In the proeceeding of the AIAA/AAS Astrodynamics Specialist Conference, Honolulu, Hawaii.For more information, visit http://sol.spacenvironment.net/jb2008.In this toolbox, the model can be evaluated using the following functions:function jb2008(JD::Number, glat::Number, glon::Number, h::Number)\nfunction jb2008(JD::Number, glat::Number, glon::Number, h::Number, F10::Number, F10ₐ::Number, S10::Number, S10ₐ::Number, M10::Number, M10ₐ::Number, Y10::Number, Y10ₐ::Number, DstΔTc::Number)in which:JD: Julian day.\nglat: Geocentric latitude [rad].\nglon: Geocentric longitude [rad].\nh: Altitude [m].\nF10: 10.7-cm solar flux [10⁻²² W/(M² Hz)] (Tabular time 1 day earlier).\nF10ₐ: 10.7-cm averaged solar flux, 81-day centered on input time (Tabular         time 1 day earlier).\nS10: EUV index (26-34 nm) scaled to F10.7 (Tabular time 1 day earlier).\nS10ₐ: EUV 81-day averaged centered index (Tabular time 1 day earlier).\nM10: MG2 index scaled to F10.7 (Tabular time 2 days earlier).\nM10ₐ: MG2 81-day averaged centered index (Tabular time 2 days earlier).\nY10: Solar X-ray & Lya index scaled to F10.7 (Tabular time 5 days earlier).\nY10ₐ: Solar X-ray & Lya 81-day averaged centered index (Tabular time 5 days         earlier).\nDstΔTc: Temperature variation related to the Dst.If the parameters related with the space indices are not provided (first signature), then they will be automatically obtained. This, however, requires the initialization of the space indices (see [Space indices]).These functions returns an object of type JB2008_Output that contains the following fields:nN2: Number density of N₂ [1/m³].\nnO2: Number density of O₂ [1/m³].\nnO: Number density of O [1/m³].\nnAr: Number density of Ar [1/m³].\nnHe: Number density of He [1/m³].\nnH: Number density of H [1/m³].\nrho: Total density [kg/m³].\nT_exo: Exospheric temperature [K].\nTz: Temperature at the selected altitude [K].julia> jb2008(DatetoJD(2018, 6, 19, 18, 35, 0), deg2rad(-22), deg2rad(-45), 700e3, 79, 73.5, 55.1, 53.8, 78.9, 73.3, 80.2, 71.7, 50)\nJB2008_Output{Float64}\n  nN2: Float64 2.654172472933306e7\n  nO2: Float64 193981.21643718868\n  nO: Float64 7.674571609797366e10\n  nAr: Float64 13.375957587876735\n  nHe: Float64 4.642052516165778e11\n  nH: Float64 4.072455917445681e10\n  rho: Float64 5.193318161219438e-15\n  T_exo: Float64 819.7144509572894\n  Tz: Float64 826.768660327232"
},

{
    "location": "man/earth/atmospheric_models/#NRLMSISE-00-1",
    "page": "Earth atmospheric models",
    "title": "NRLMSISE-00",
    "category": "section",
    "text": "The NRLMSIS-00 empirical atmosphere model was developed by Mike Picone, Alan Hedin, and Doug Drob based on the MSISE90 model:Picone, J. M., Hedin, A. E., Drob, D. P., Aikin, A. C (2002). NRLMSISE-00 empirical model of the atmosphere: Statistical comparisons and scientific issues. Journal of Geophysical Research: Space Physics, Vol. 107 (A12), p. SIA 15-1 – SIA 15-16, DOI: 10.1029/2002JA009430.In this toolbox, the model can be evaluated using the following function:function nrlmsise00(JD::Number, alt::Number, g_lat::Number, g_long::Number [, f107A::Number, f107::Number, ap::Union{Number,AbstractVector}]; output_si::Bool = true, dversion::Bool = true)in which:JD: Julian Day [UTC].\nalt: Altitude [m].\ng_lat: Geodetic latitude [rad].\ng_long: Geodetic longitude [rad].\nf107A: 81 day average of F10.7 flux (centered on day of year doy).\nf107: Daily F10.7 flux for previous day.\nap: Magnetic index.If the keyword output_si is true, then the output will be in [m⁻³] for species number density and [kg/m⁻³] for the total density. Otherwise, the units will be [cm⁻³] and [g/cm⁻³], respectively.The keyword dversion can be used to select which algorithm will be used to compute the model. If it is set to true, then it will call the gtd7d function that includes the anomalous oxygen in the total density. Otherwise, the function gtd7 will be called and the anomalous oxygen will not be added in the total density.The parameter ap can be a number or a vector. If it is a number, then it must be the daily magnetic index. If it is a vector, then it must contain 7 elements as follows:Index Description\n1 Daily AP.\n2 3 hour AP index for current time.\n3 3 hour AP index for 3 hours before current time.\n4 3 hour AP index for 6 hours before current time.\n5 3 hour AP index for 9 hours before current time.\n6 Average of eight 3 hour AP indices from 12 to 33 hours prior to current time.\n7 Average of eight 3 hour AP indices from 36 to 57 hours prior to current time.If the parameters related with the space indices are not provided (f107A, f107, and ap), then they will be automatically obtained. This, however, requires the initialization of the space indices (see [Space indices]).The function return an object of type NRLMSISE00_Output that contains the following fields:den_N: Nitrogen number density [U].\nden_N2: N₂ number density [U].\nden_O: Oxygen number density [U].\nden_aO: Anomalous Oxygen number density [U].\nden_O2: O₂ number density [U].\nden_H: Hydrogen number density [U].\nden_He: Helium number density [U].\nden_Ar: Argon number density [U].\nden_Total: Total mass density [T/U] (this value has different meanings for routines gtd7 and gtd7d).\nT_exo: Exospheric temperature [K].\nT_alt: Temperature at the selected altitude [K].\nflags: Flags used to compute NRLMSISE-00 model.Notice that:If flags[:output_m_kg] is false, then [U] is [cm⁻³] and [T] is [g/cm⁻³].\nIf flags[:output_m_kg] is true, then [U] is [m⁻³] and [T] is [kg/m⁻³].julia> nrlmsise00(DatetoJD(2018, 6, 19, 18, 35, 0), 700e3, deg2rad(-22), deg2rad(-45), 73.5, 79, 5.13)\nNRLMSISE00_Output{Float64}\n  den_N: Float64 5.597834653523333e9\n  den_N2: Float64 5.743312510585916e7\n  den_O: Float64 1.2705655159941983e11\n  den_aO: Float64 2.4185558056141124e9\n  den_O2: Float64 340464.97523808276\n  den_H: Float64 1.2667781795293002e11\n  den_He: Float64 6.248499395447589e11\n  den_Ar: Float64 23.18462060029951\n  den_Total: Float64 7.930928885098513e-15\n  T_exo: Float64 837.4122645268103\n  T_alt: Float64 837.4119807046409\n  flags: NRLMSISE00_Flagsnote: Note\nIf the user wants more control over the NRLMSISE-00, they can use the low-level functions gtd7 and gtd7d, which has the same functionality as available in the FORTRAN version of the model. See the documentation of the functions for more information."
},

{
    "location": "man/earth/atmospheric_models/#References-1",
    "page": "Earth atmospheric models",
    "title": "References",
    "category": "section",
    "text": "[1] Vallado, D. A., McClain, W. D (2013). Fundamentals of astrodynamics and applications. Hawthorne, CA: Microcosm Press."
},

{
    "location": "man/earth/geomagnetic_field_models/#",
    "page": "Earth geomagnetic field models",
    "title": "Earth geomagnetic field models",
    "category": "page",
    "text": ""
},

{
    "location": "man/earth/geomagnetic_field_models/#Earth-geomagnetic-field-models-1",
    "page": "Earth geomagnetic field models",
    "title": "Earth geomagnetic field models",
    "category": "section",
    "text": "CurrentModule = SatelliteToolbox\nDocTestSetup = quote\n    using SatelliteToolbox\nendCurrently, there is only the IGFR model in this toolbox to compute the Earth geomagnetic field."
},

{
    "location": "man/earth/geomagnetic_field_models/#IGRF-v12-1",
    "page": "Earth geomagnetic field models",
    "title": "IGRF v12",
    "category": "section",
    "text": "There is a native Julia implementation of the International Geomagnetic Reference Field (IGRF) v12. This can be accessed by two functions:igrf12syn: This is the native Julia implementation of the original FORTRAN source-code with the same input parameters.\nigrf12: An independent (more readable) implementation of the IGRF model. However, it is not as fast as igrf12syn yet (~20% slower).The igrf12 function has the following signature:function igrf12(date::Number, r::Number, λ::Number, Ω::Number, T; show_warns = true)It computes the geomagnetic field vector [nT] at the date date [Year A.D.] and position (r, λ, Ω).The position representation is defined by T. If T is Val{:geocentric}, then the input must be geocentric coordinates:Distance from the Earth center r [m];\nGeocentric latitude λ (-pi2, +pi2) [rad]; and\nGeocentric longitude Ω (-pi, +pi) [rad].If T is Val{:geodetic}, then the input must be geodetic coordinates:Altitude above the reference ellipsoid h (WGS-84) [m];\nGeodetic latitude λ (-pi2, +pi2) [rad]; and\nGeodetic longitude Ω (-pi, +pi) [rad].If T is omitted, then it defaults to Val{:geocentric}.Notice that the output vector will be represented in the same reference system selected by the parameter T (geocentric or geodetic). The Y-axis of the output reference system always points East. In case of geocentric coordinates, the Z-axis points toward the center of Earth and the X-axis completes a right-handed coordinate system. In case of geodetic coordinates, the X-axis is tangent to the ellipsoid at the selected location and points toward North, whereas the Z-axis completes a right-hand coordinate system.If the keyword show_warns is true (default), then warnings will be printed to STDOUT.note: Note\nThe IGRF v12 implemented here can be used to compute the geomagnetic field from 1900 up to 2025. Notice, however, that for dates after 2020 the accuracy is reduced.julia> igrf12(2017.12313, 640e3, 50*pi/180, 25*pi/180, Val{:geodetic})\n3-element StaticArrays.SArray{Tuple{3},Float64,1,3}:\n 15374.385312809889\n  1267.9325221604724\n 34168.28074619655\n\njulia> igrf12(2017.12313, 6371e3+640e3, 50*pi/180, 25*pi/180, Val{:geocentric})\n3-element StaticArrays.SArray{Tuple{3},Float64,1,3}:\n 15174.122905727732\n  1262.6765496083972\n 34210.301848156094julia> igrf12(2022, 6371e3+640e3, 50*pi/180, 25*pi/180)\n┌ Warning: The magnetic field computed with this IGRF version may be of reduced accuracy for years greater than 2020.\n└ @ SatelliteToolbox ~/.julia/dev/SatelliteToolbox/src/earth/geomagnetic_field_models/igrf.jl:99\n3-element StaticArrays.SArray{Tuple{3},Float64,1,3}:\n 15167.758261587729\n  1423.7811941605075\n 34342.17638944679\n\njulia> igrf12(2022, 6371e3+640e3, 50*pi/180, 25*pi/180; show_warns=false)\n3-element StaticArrays.SArray{Tuple{3},Float64,1,3}:\n 15167.758261587729\n  1423.7811941605075\n 34342.17638944679"
},

{
    "location": "man/earth/space_indices/#",
    "page": "Space indices",
    "title": "Space indices",
    "category": "page",
    "text": ""
},

{
    "location": "man/earth/space_indices/#Space-indices-1",
    "page": "Space indices",
    "title": "Space indices",
    "category": "section",
    "text": "The SatelliteToolbox.jl can automatically fetch some space indices that are used in some computations, notably in the earth atmospheric models. First, it is necessary to initialize the related files, which is done by the function:function init_space_indices(...)When called without arguments, it will download all the supported files, if necessary. For more information about the many configuration options, please, see the function documentation.The supported files are:File Download frequency Information\nDTCFILE.TXT Daily This file contains the exospheric temperature variation caused by the Dst index. This is used for the JB2008 atmospheric model.\nfluxtable.txt Daily This file contains the F10.7 flux data in different formats.\nSOLFSMY.TXT Daily This files contains the indices necessary for the JB2008 atmospheric model.\nWDC Files Once / Daily* This set of files contain the Kp and Ap indices.*: The WDC files are separated by year. The file related to the current year is downloaded on a daily-basis and the files related to the previous years are downloaded only once.After the initialization of the files, the space indices can be obtained by the following function:function get_space_index(IND, JD::Number, ...)in which JD is the Julian Day in which the index will be computed, and IND is the desired space index as described in the following table.IND Space index\nF10() 10.7-cm adjusted solar flux\nF10adj() 10.7-cm adjusted solar flux\nF10obs() 10.7-cm observed solar flux\nF10M() Average of 10.7-cm adjusted solar flux\nF10Madj() Average of 10.7-cm adjusted solar flux\nF10Mobs() Average of 10.7-cm observed solar flux\nKp() Kp index (daily mean)\nKp_vect() A vector containing the Kp index for the following hours of the day: 0-3h, 3-6h, 6-9h, 9-12h, 12-15h, 15-18h, 18-20h, 20-23h\nAp() Ap index (daily mean)\nAp_vect() A vector containing the Ap index for the following hours of the day: 0-3h, 3-6h, 6-9h, 9-12h, 12-15h, 15-18h, 18-20h, 20-23h\nS10() EUV index (26-34 nm) scaled to F10.7\nM10() MG2 index scaled to F10.7\nY10() Solar X-ray & Lya index scaled to F10.7\nS81a() EUV 81-day averaged centered index\nM81a() MG2 81-day averaged centered index\nY81a() Solar X-ray & Lya 81-day averaged centered index\nDstΔTc() Exospheric temperature variation due to Dstnote: Note\nThe index DstΔTc() is interpolated to the selected instant of the Julian Day, whereas all the other indices are constants within the seleteced day.note: Note\nFor the indices F10M(), F10Madj(), and F10Mobs(), one can use an optional keyword window::Int that defines the size in days of the moving average window. If it is not specified, then it defaults to 81 days.julia> init_space_indices()\n[ Info: Downloading file \'DTCFILE.TXT\' from \'http://sol.spacenvironment.net/jb2008/indices/DTCFILE.TXT\'.\n[ Info: Downloading file \'fluxtable.txt\' from \'ftp://ftp.geolab.nrcan.gc.ca/data/solar_flux/daily_flux_values/fluxtable.txt\'.\n[ Info: Downloading file \'SOLFSMY.TXT\' from \'http://sol.spacenvironment.net/jb2008/indices/SOLFSMY.TXT\'.\n[ Info: Downloading file \'kp2017.wdc\' from \'ftp://ftp.gfz-potsdam.de/pub/home/obs/kp-ap/wdc/kp2017.wdc\'.\n[ Info: Downloading file \'kp2015.wdc\' from \'ftp://ftp.gfz-potsdam.de/pub/home/obs/kp-ap/wdc/kp2015.wdc\'.\n[ Info: Downloading file \'kp2016.wdc\' from \'ftp://ftp.gfz-potsdam.de/pub/home/obs/kp-ap/wdc/kp2016.wdc\'.\n[ Info: Downloading file \'kp2018.wdc\' from \'ftp://ftp.gfz-potsdam.de/pub/home/obs/kp-ap/wdc/kp2018.wdc\'.\n\njulia> get_space_index(F10(), DatetoJD(2018, 6, 19, 18, 35, 00))\n79.0\n\njulia> get_space_index(F10M(), DatetoJD(2018, 6, 19, 18, 35, 00))\n73.47037037037039\n\njulia> get_space_index(F10M(), DatetoJD(2018, 6, 19, 18, 35, 00); window = 51)\n74.60196078431372\n\njulia> get_space_index(Ap(), DatetoJD(2018, 6, 19, 18, 35, 00))\n5.125"
},

{
    "location": "man/orbit/anomalies/#",
    "page": "Anomalies",
    "title": "Anomalies",
    "category": "page",
    "text": ""
},

{
    "location": "man/orbit/anomalies/#Anomalies-1",
    "page": "Anomalies",
    "title": "Anomalies",
    "category": "section",
    "text": "CurrentModule = SatelliteToolbox\nDocTestSetup = quote\n    using SatelliteToolbox\nendThere are three types of anomalies[1] that can be used to describe the position of the satellite in the orbit plane with respect to the argument of perigee:The mean anomaly (M);\nThe eccentric anomaly (E); and\nThe true anomaly (f).This package contains the following functions that can be used to convert one to another:function M_to_E(e::Number, M::Number, tol::Number = 1e-10)\nfunction M_to_f(e::Number, M::Number, tol::Number = 1e-10)\nfunction E_to_f(e::Number, E::Number)\nfunction E_to_M(e::Number, E::Number)\nfunction f_to_E(e::Number,f::Number)\nfunction f_to_E(orb::Orbit)\nfunction f_to_M(e::Number, f::Number)\nfunction f_to_M(orb::Orbit)where:M is the mean anomaly [rad];\nE is the eccentric anomaly [rad];\nf is the true anomaly [rad];\ne is the eccentricity;\norb is an instance of the structure Orbit;\ntol is used to select the tolerance for the cases in which the conversion is performed by a numerical method, such as the Newton-Raphson algorithm.All the returned values are in [rad].julia> M_to_E(0.04, pi/4)\n0.8144932819286269\n\njulia> M_to_f(0.04, pi/4)\n0.8440031124631683\n\njulia> f_to_M(0.04, pi/4)\n0.7300148523821107\n\njulia> M_to_f(0, 0.343)\n0.3430000000000001\n\njulia> M_to_f(0.04, 0.343)\n0.37122803399203647[1]: In astronomy, anomaly is an angle."
},

{
    "location": "man/orbit/general/#",
    "page": "General analysis",
    "title": "General analysis",
    "category": "page",
    "text": ""
},

{
    "location": "man/orbit/general/#General-functions-1",
    "page": "General analysis",
    "title": "General functions",
    "category": "section",
    "text": "CurrentModule = SatelliteToolbox\nDocTestSetup = quote\n    using SatelliteToolbox\nendThis package contains some functions that helps in analysis of orbits."
},

{
    "location": "man/orbit/general/#Angular-velocity-1",
    "page": "General analysis",
    "title": "Angular velocity",
    "category": "section",
    "text": "The angular velocity of an object in orbit when considering a Keplerian orbit (unperturbed model) is given by:n = n_0 = sqrt fracmu_0a^3 where mu_0 is the standard gravitational parameter for Earth, and a is the semi-major axis.If the perturbation terms up to J_2 are considered, then the angular velocity is computed by:n = n_0 + frac34 cdot fracR_0^2 cdot J_2a^2left(1-e^2right)^2 cdot n_0 cdot leftsqrt1-e^2cdot(3cos^2(i)-1) + (5cos^2(i) - 1) rightwhere e is the eccentricity, i is the inclination, and R_0 is the Earth equatorial radius.In this package, the angular velocity [rad/s] can be computed by the following functions:function angvel(a::Number, e::Number, i::Number, pert::Symbol = :J2)\nfunction angvel(orb::Orbit, pert::Symbol = :J2)where:a is the semi-major axis [m];\ne is the eccentricity;\ni is the inclination [rad];\npert selects the perturbation terms it should be used, it can be :J0 or :J2[1]; and\norb is an instance of Orbit.julia> angvel(7130982.0, 0.001111, deg2rad(98.405))\n0.0010471974485046116\n\njulia> angvel(7130982.0, 0.001111, deg2rad(98.405), :J0)\n0.0010484431282179"
},

{
    "location": "man/orbit/general/#Time-derivative-of-the-argument-of-perigee-1",
    "page": "General analysis",
    "title": "Time-derivative of the argument of perigee",
    "category": "section",
    "text": "The time-derivative of the argument of perigee dotomega when considering perturbation terms up to J_2 is:dotomega = frac34 cdot fracR_0^2 cdot J_2a^2left(1-e^2right)^2 cdot n_0 cdot (5cos^2(i) - 1)where R_0 is the Earth equatorial radius, a is the semi-major axis, e is the eccentricity, i is the inclination, and n_0 is the unperturbed orbital angular velocity.In the unperturbed model (Keplerian orbit), the time-derivative of the argument of perigee is always 0.In this package, the time-derivative of the argument of perigee [rad/s] can be computed by the following functions:function dArgPer(a::Number, e::Number, i::Number, pert::Symbol = :J2)\nfunction dArgPer(orb::Orbit, pert::Symbol = :J2)where:a is the semi-major axis [m];\ne is the eccentricity;\ni is the inclination [rad];\npert selects the perturbation terms it should be used, it can be :J0 or :J2[1]; and\norb is an instance of Orbit.julia> dArgPer(7130982, 0.001111, deg2rad(98.405))\n-6.082892348533058e-7\n\njulia> dArgPer(7130982, 0.001111, deg2rad(63.435))\n-2.433253158726004e-12\n\njulia> dArgPer(7130982, 0.001111, deg2rad(98.405), :J0)\n0.0"
},

{
    "location": "man/orbit/general/#Time-derivative-of-the-RAAN-1",
    "page": "General analysis",
    "title": "Time-derivative of the RAAN",
    "category": "section",
    "text": "The time-derivative of the RAAN (right-ascension of the ascending node) dotOmega when considering perturbation terms up to J_2 is:dotOmega = -frac32 cdot fracR_0^2 cdot J_2a^2left(1-e^2right)^2 cdot n_0 cdot cos(i)where R_0 is the Earth equatorial radius, a is the semi-major axis, e is the eccentricity, i is the inclination, and n_0 is the unperturbed orbital angular velocity.In the unperturbed model (Keplerian orbit), the time-derivative of the RAAN is always 0.In this package, the time-derivative of the RAAN [rad/s] can be computed by the following functions:function dRAAN(a::Number, e::Number, i::Number, pert::Symbol = :J2)\nfunction dRAAN(orb::Orbit, pert::Symbol = :J2)where:a is the semi-major axis [m];\ne is the eccentricity;\ni is the inclination [rad];\npert selects the perturbation terms it should be used, it can be :J0 or :J2[1]; and\norb is an instance of Orbit.julia> dRAAN(7130982, 0.001111, deg2rad(98.405))\n1.9909533223838115e-7\n\njulia> dRAAN(7130982, 0.001111, deg2rad(98.405), :J0)\n0.0"
},

{
    "location": "man/orbit/general/#Period-1",
    "page": "General analysis",
    "title": "Period",
    "category": "section",
    "text": "The orbital period of an object in orbit is given by:T = frac2pinwhere n is the angular velocity as described in Angular velocity.In this package, the orbital period [s] can be computed by the following functions:function period(a::Number, e::Number, i::Number, pert::Symbol = :J2)\nfunction period(orb::Orbit, pert::Symbol = :J2)where:a is the semi-major axis [m];\ne is the eccentricity;\ni is the inclination [rad];\npert selects the perturbation terms it should be used, it can be :J0 or :J2[1]; and\norb is an instance of Orbit.julia> period(7130982, 0.001111, deg2rad(98.405))/60\n100.00000980636328\n\njulia> period(7130982, 0.001111, deg2rad(98.405), :J0)/60\n99.88119746433748[1]: If pert is :J0, then it will be consider a Keplerian, unperturbed orbit to compute the values. Otherwise, if pert is :J2, then it will be consider the perturbation terms up to J_2 to compute the values. It pert is omitted, then it defaults to :J2."
},

{
    "location": "man/orbit/propagators/#",
    "page": "Orbit propagators",
    "title": "Orbit propagators",
    "category": "page",
    "text": ""
},

{
    "location": "man/orbit/propagators/#Orbit-propagators-1",
    "page": "Orbit propagators",
    "title": "Orbit propagators",
    "category": "section",
    "text": "CurrentModule = SatelliteToolbox\nDocTestSetup = quote\n    using SatelliteToolbox\nendCurrently, there are three orbit propagators available: Two Body, J2, and SGP4.  All coded in Julia (no external libraries required)."
},

{
    "location": "man/orbit/propagators/#Two-Body-1",
    "page": "Orbit propagators",
    "title": "Two Body",
    "category": "section",
    "text": "This algorithm assumes a Keplerian orbit, i.e. considers that the Earth is spherical with the gravitational force computed by Newton\'s laws."
},

{
    "location": "man/orbit/propagators/#J2-1",
    "page": "Orbit propagators",
    "title": "J2",
    "category": "section",
    "text": "This algorithm considers the perturbation terms up to J2. The implementation available here was adapted from [1]."
},

{
    "location": "man/orbit/propagators/#SGP4-1",
    "page": "Orbit propagators",
    "title": "SGP4",
    "category": "section",
    "text": "The SGP4 algorithm here was based on [2,3]. It contains the deep space support that is automatically selected based on the input orbit. Hence, technically, it is the SPG4/SDP4 algorithm, which will be called just SGP4 here."
},

{
    "location": "man/orbit/propagators/#Initialization-1",
    "page": "Orbit propagators",
    "title": "Initialization",
    "category": "section",
    "text": "All the propagators need to be initialized first using the API function init_orbit_proapgator. The information can be passed in three different ways:function init_orbit_proapgator(T, epoch::Number, n_0::Number, e_0::Number, i_0::Number, Ω_0::Number, ω_0::Number, M_0::Number)where:T is the type of the orbit propagator (Val{:twobody} for Two Body, Val{:J2} for J2, and Val{:sgp4} for SGP4).\nepoch: Initial orbit epoch [Julian Day].\nn_0: Initial angular velocity [rad/s].\ne_0: Initial eccentricity.\ni_0: Initial inclination [rad].\nΩ_0: Initial right ascension of the ascending node [rad].\nω_0: Initial argument of perigee [rad].\nM_0: Initial mean anomaly [rad].function init_orbit_propagator(T, orb_0::Orbit)where:T is the type of the orbit propagator (Val{:twobody} for Two Body, Val{:J2} for J2, and Val{:sgp4} for SGP4).\norb_0: Initial orbital elements (see Orbit).function init_orbit_propagator(T, tle::TLE)where:T is the type of the orbit propagator (Val{:twobody} for Two Body, Val{:J2} for J2, and Val{:sgp4} for SGP4).\ntle: TLE that will be used to initialize the propagator (see TLE).There are some optional parameters that depend on the orbit propagator type that can be used to customize the algorithm. Those options are listed as follows:Two Bodyμ: Standard gravitational parameter of the central body [m³/s²] (Default = m0).J2 Orbit Propagatordn_o2: First time derivative of mean motion divided by 2 [rad/s²] (Default = 0).\nddn_o6: Second time derivative of mean motion divided by 6 [rad/s³] (Default = 0).\nj2_gc: J2 orbit propagator gravitational constants (see J2_GravCte) (Default = j2_gc_wgs84).warning: Warning\nThe two first options are not available when the TLE is used because this information is provided by the TLE.SPG4bstar: B* parameter of the SGP4 (Default = 0).\nsgp4_gc: Gravitational constants (see SGP4_GravCte) (Default = sgp4_gc_wgs84).warning: Warning\nThe first option is not available when the TLE is used because this information is provided by the TLE."
},

{
    "location": "man/orbit/propagators/#Propagation-1",
    "page": "Orbit propagators",
    "title": "Propagation",
    "category": "section",
    "text": "After the orbit propagator is initialized, the orbit can be propagated by the API functions propagate! and step!.The function propagate! has two signature. The first one isfunction propagate!(orbp, t::Number) where Tin which the orbit will be propagated until the instant t [s] with respect to the orbit epoch, which is defined in the initialization and is never changed. This function returns a tuple with three values:The mean Keplerian elements represented in the inertial reference frame encapsulated in an instance of the structure Orbit [SI units].\nThe position vector represented in the inertial reference frame [m].\nThe velocity vector represented in the inertial reference frame [m].The second signature of propagate! is:function propagate!(orbp, t::AbstractVector) where Twhere the orbit will be propagated for every value in the vector t [s], which is an instant with respect to the orbit epoch. In this case, an array of tuples with be returned with each element equivalent to that described for the first case.The step! function has the following signature:function step!(orbp, Δt::Number)where the orbit is propagated by Δt [s] from the last propagation instant. This function returns the same information of the first signature of propagate! method.In all cases, the structure orbp is modified by updating the orbit elements related to the last propagation instant.note: Note\nAll the algorithms can be used to propagate the orbit forward or backward in time."
},

{
    "location": "man/orbit/propagators/#Reference-systems-1",
    "page": "Orbit propagators",
    "title": "Reference systems",
    "category": "section",
    "text": "The inertial reference system in which the propagated values are represented depends on the reference system used to represent the input data. For TLE representation, it is very common to use the TEME (True Equator, Mean Equinox) frame. For more information, see [1]."
},

{
    "location": "man/orbit/propagators/#Examples-1",
    "page": "Orbit propagators",
    "title": "Examples",
    "category": "section",
    "text": "julia> orbp = init_orbit_propagator(Val{:twobody}, 0.0, 2*pi/6000, 0.001111, 98.405*pi/180, pi/2, 0.0, 0.0);\n\njulia> o,r,v = propagate!(orbp, collect(0:3:24)*60*60);\n\njulia> r\n9-element Array{StaticArrays.SArray{Tuple{3},Float64,1,3},1}:\n [5.30792e-7, 7.12871e6, 3.58939e-6]\n [-9.92441e5, 2.19024e6, -6.71674e6]\n [-6.12601e5, -5.78432e6, -4.14603e6]\n [6.12601e5, -5.78432e6, 4.14603e6]\n [9.92441e5, 2.19024e6, 6.71674e6]\n [-5.37523e-7, 7.12871e6, -3.64086e-6]\n [-9.92441e5, 2.19024e6, -6.71674e6]\n [-6.12601e5, -5.78432e6, -4.14603e6]\n [6.12601e5, -5.78432e6, 4.14603e6]julia> orbp = init_orbit_propagator(Val{:J2}, Orbit(0.0, 7130982.0, 0.001111, 98.405*pi/180, pi/2, 0.0, 0.0));\n\njulia> o,r,v = propagate!(orbp, collect(0:3:24)*60*60);\n\njulia> r\n9-element Array{StaticArrays.SArray{Tuple{3},Float64,1,3},1}:\n [5.30372e-7, 7.12306e6, 3.58655e-6]\n [-9.98335e5, 2.14179e6, -6.72549e6]\n [-5.75909e5, -5.83674e6, -4.06734e6]\n [6.65317e5, -5.69201e6, 4.2545e6]\n [9.62557e5, 2.37418e6, 6.65228e6]\n [-1.10605e5, 7.11845e6, -231186.0]\n [-1.02813e6, 1.90664e6, -6.79145e6]\n [-4.82921e5, -5.97389e6, -3.87579e6]\n [750898.0, -5.53993e6, 4.43709e6]julia> tle_scd1 = tle\"\"\"\n       SCD 1\n       1 22490U 93009B   18350.91204528  .00000219  00000-0  10201-4 0  9996\n       2 22490  24.9683 170.6788 0043029 357.3326 117.9323 14.44539175364603\n       \"\"\"[1];\n\njulia> orbp = init_orbit_propagator(Val{:sgp4}, tle_scd1);\n\njulia> o,r,v = propagate!(orbp, (0:3:24)*60*60);\n\njulia> r\n9-element Array{StaticArrays.SArray{Tuple{3},Float64,1,3},1}:\n [2.1104e6, -6.24894e6, 2.71038e6]\n [-5.59246e6, -3.78133e6, 2.1883e6]\n [-5.98838e6, 3.62748e6, -1.13273e6]\n [1.44056e6, 6.29603e6, -3.00473e6]\n [7.02615e6, 791502.0, -1.06173e6]\n [3.607e6, -5.74328e6, 2.21989e6]\n [-4.43043e6, -4.85364e6, 2.68863e6]\n [-6.67554e6, 2.3722e6, -2.79066e5]\n [-1.93293e5, 6.50127e6, -2.89155e6]\n\njulia> v\n9-element Array{StaticArrays.SArray{Tuple{3},Float64,1,3},1}:\n [7129.19, 1784.07, -1358.32]\n [4573.31, -5547.04, 2171.25]\n [-3969.35, -5663.64, 2940.09]\n [-7305.14, 1611.56, -49.363]\n [-1211.78, 6739.97, -2945.93]\n [6417.95, 3175.76, -2122.04]\n [5799.59, -4551.63, 1407.45]\n [-2391.64, -6387.69, 3161.66]\n [-7435.44, 128.809, 866.6]\n\njulia> orbp = init_orbit_propagator(Val{:sgp4}, tle_scd1);\n\njulia> o,r,v = step!(orbp, 3*60*60);\n\njulia> o,r,v = step!(orbp, 3*60*60);\n\njulia> o,r,v = step!(orbp, 3*60*60);\n\njulia> o,r,v = step!(orbp, 3*60*60);\n\njulia> o,r,v = step!(orbp, 3*60*60);\n\njulia> o,r,v = step!(orbp, 3*60*60);\n\njulia> o,r,v = step!(orbp, 3*60*60);\n\njulia> o,r,v = step!(orbp, 3*60*60);\n\njulia> r\n3-element StaticArrays.SArray{Tuple{3},Float64,1,3}:\n -193293.35025474802\n       6.501272877734011e6\n      -2.8915511460724953e6\n\njulia> v\n3-element StaticArrays.SArray{Tuple{3},Float64,1,3}:\n -7435.439550407856\n   128.80933740840044\n   866.5999572489231"
},

{
    "location": "man/orbit/propagators/#Low-level-access-1",
    "page": "Orbit propagators",
    "title": "Low level access",
    "category": "section",
    "text": "All propagators can be accessed by low-level functions. This allows the user to have more control about the algorithm and also to reduce the overhead related to the API functions. If such optimization is necessary, see the functions inside the directory ./src/orbit/propagators."
},

{
    "location": "man/orbit/propagators/#References-1",
    "page": "Orbit propagators",
    "title": "References",
    "category": "section",
    "text": "[1] Vallado, D. A., McClain, W. D (2013). Fundamentals of astrodynamics and applications. Hawthorne, CA: Microcosm Press.[2] Hoots, F. R., Roehrich, R. L (1980). Models for Propagation of NORAD Elements Set. Spacetrack Report No. 3.[3] Vallado, D. A., Crawford, P., Hujsak, R., Kelso, T. S (2006). Revisiting Spacetrack Report #3: Rev1. AIAA."
},

{
    "location": "man/orbit/tle/#",
    "page": "TLE",
    "title": "TLE",
    "category": "page",
    "text": ""
},

{
    "location": "man/orbit/tle/#TLE-1",
    "page": "TLE",
    "title": "TLE",
    "category": "section",
    "text": "The TLE, or Two Line Elements set, is a data format that contains information about the orbit at a specific epoch of an Earth-orbiting object. The information is split into two lines with 70 characters each. In the following, it is presented an example of a TLE describing the orbit of the Brazilian satellite SCD-1 at 25 December 2018:SCD 1                   \n1 22490U 93009B   18359.76217587  .00000186  00000-0  84512-6 0  9998\n2 22490  24.9694 116.1709 0043211  90.3968  62.0083 14.44539396366163For more information, see https://en.wikipedia.org/wiki/Two-line_element_set.The TLE contains all the necessary information to propagate the orbit using, for example, the SGP4 orbit propagator. Hence, this package contains a set of functions that helps to load the TLE information to be used in the Orbit propagators.If the TLEs are stored in one file, then they can be loaded using the function:function read_tle(tle_filename::String, verify_checksum::Bool = true)where the tle_filename is the file path. Each TLE line has a checksum to verify the correctness of the data. By default, if the checksum is wrong, then this function will throw an error. The checksum verification can be avoided by setting verify_checksum to false.This function returns an array of TLEs. Each TLE is an instance of the structure TLE.julia> tles = read_tle(\"tles\")\n2-element Array{TLE,1}:\n TLE(\"SCD 1\", 22490, \'U\', \"93009B  \", 18, 359.76217587, 2.45847826217587e6, 1.86e-6, 0.0, 8.4512e-7, 999, 8, 24.9694, 116.1709, 0.0043211, 90.3968, 62.0083, 14.44539396, 36616, 3)\n TLE(\"SCD 2\", 25504, \'U\', \"98060A  \", 18, 360.24309362, 2.45847874309362e6, 2.18e-6, 0.0, 1.0518e-5, 999, 6, 24.9967, 319.8664, 0.0017431, 121.381, 9.7939, 14.44057429, 6554, 1)\n\njulia> tles[1]\n                             TLE\n    ==========================================================\n                            Name: SCD 1\n                Satellite number: 22490\n        International designator: 93009B\n                    Epoch (Year): 18\n                     Epoch (Day): 359.76217587\n              Epoch (Julian Day): 2458478.26218\n              Element set number: 999\n                     Inclination:  24.96940000 deg\n                            RAAN: 116.17090000 deg\n             Argument of perigee:  90.39680000 deg\n                    Mean anomaly:  62.00830000 deg\n                 Mean motion (n):  14.44539396 revs/day\n               Revolution number: 36616\n\n                              B*: 0.000001 1/[er]\n\n                        1   d\n                       ---.--- n: 0.000002 rev/day²\n                        2  dt\n\n                        1   d²\n                       ---.--- n: 0.000000 rev/day³\n                        6  dt²\n    ==========================================================\n\njulia> tles[2]\n                             TLE\n    ==========================================================\n                            Name: SCD 2\n                Satellite number: 25504\n        International designator: 98060A\n                    Epoch (Year): 18\n                     Epoch (Day): 360.24309362\n              Epoch (Julian Day): 2458478.74309\n              Element set number: 999\n                     Inclination:  24.99670000 deg\n                            RAAN: 319.86640000 deg\n             Argument of perigee: 121.38100000 deg\n                    Mean anomaly:   9.79390000 deg\n                 Mean motion (n):  14.44057429 revs/day\n               Revolution number: 6554\n\n                              B*: 0.000011 1/[er]\n\n                        1   d\n                       ---.--- n: 0.000002 rev/day²\n                        2  dt\n\n                        1   d²\n                       ---.--- n: 0.000000 rev/day³\n                        6  dt²\n    ==========================================================If the TLE is stored in a string, then it can be read using the following functions:function read_tle_from_string(tles::String, verify_checksum::Bool = true)\nfunction read_tle_from_string(tle_l1::String, tle_l2::String, verify_checksum::Bool = false)In the first case, a list of TLEs can be passed in tles. In the second case, the first line and second line of a TLE can be passed in tle_l1 and tle_l2, respectively. In both cases an array of TLEs is returned.  The argument verify_checksum has the same function as described previously.julia> tles = \"\"\"\n       SCD 1\n       1 22490U 93009B   18359.76217587  .00000186  00000-0  84512-6 0  9998\n       2 22490  24.9694 116.1709 0043211  90.3968  62.0083 14.44539396366163\n\n       SCD 2\n       1 25504U 98060A   18360.24309362  .00000218  00000-0  10518-4 0  9996\n       2 25504  24.9967 319.8664 0017431 121.3810   9.7939 14.44057429 65541\n       \"\"\";\n\njulia> read_tle_from_string(tles)\n2-element Array{TLE,1}:\n TLE(\"SCD 1\", 22490, \'U\', \"93009B  \", 18, 359.76217587, 2.45847826217587e6, 1.86e-6, 0.0, 8.4512e-7, 999, 8, 24.9694, 116.1709, 0.0043211, 90.3968, 62.0083, 14.44539396, 36616, 3)\n TLE(\"SCD 2\", 25504, \'U\', \"98060A  \", 18, 360.24309362, 2.45847874309362e6, 2.18e-6, 0.0, 1.0518e-5, 999, 6, 24.9967, 319.8664, 0.0017431, 121.381, 9.7939, 14.44057429, 6554, 1)\n\njulia> tle_l1 = \"1 22490U 93009B   18359.76217587  .00000186  00000-0  84512-6 0  9998\"\n\"1 22490U 93009B   18359.76217587  .00000186  00000-0  84512-6 0  9998\"\n\njulia> tle_l2 = \"2 22490  24.9694 116.1709 0043211  90.3968  62.0083 14.44539396366163\"\n\"2 22490  24.9694 116.1709 0043211  90.3968  62.0083 14.44539396366163\"\n\njulia> read_tle_from_string(tle_l1, tle_l2)\n1-element Array{TLE,1}:\n TLE(\"UNDEFINED\", 22490, \'U\', \"93009B  \", 18, 359.76217587, 2.45847826217587e6, 1.86e-6, 0.0, 8.4512e-7, 999, 8, 24.9694, 116.1709, 0.0043211, 90.3968, 62.0083, 14.44539396, 36616, 3)It is also available two special types of strings, tle\" and tlenc\", that automatically loads a set of TLEs. In the first case the checksum is verified whereas in the second case it is not.julia> tles = tle\"\"\"\n       SCD 1\n       1 22490U 93009B   18359.76217587  .00000186  00000-0  84512-6 0  9998\n       2 22490  24.9694 116.1709 0043211  90.3968  62.0083 14.44539396366163\n\n       SCD 2\n       1 25504U 98060A   18360.24309362  .00000218  00000-0  10518-4 0  9996\n       2 25504  24.9967 319.8664 0017431 121.3810   9.7939 14.44057429 65541\n       \"\"\"\n2-element Array{TLE,1}:\n TLE(\"SCD 1\", 22490, \'U\', \"93009B  \", 18, 359.76217587, 2.45847826217587e6, 1.86e-6, 0.0, 8.4512e-7, 999, 8, 24.9694, 116.1709, 0.0043211, 90.3968, 62.0083, 14.44539396, 36616, 3)\n TLE(\"SCD 2\", 25504, \'U\', \"98060A  \", 18, 360.24309362, 2.45847874309362e6, 2.18e-6, 0.0, 1.0518e-5, 999, 6, 24.9967, 319.8664, 0.0017431, 121.381, 9.7939, 14.44057429, 6554, 1)\n\njulia> tles = tle\"\"\"\n       SCD 1\n       1 22490U 93009B   18359.76217587  .00000186  00000-0  84512-6 0  9998\n       2 22490  24.9694 116.1709 0043211  90.3968  62.0083 14.44539396366164\n       \"\"\"\nERROR: LoadError: The TLE file is not valid (error in line 3): Expected checksum: 3, line checksum: 4.\nStacktrace:\n [1] _parse_tle(::Base.GenericIOBuffer{Array{UInt8,1}}, ::Bool) at /Users/ronan.arraes/.julia/dev/SatelliteToolbox/src/orbit/tle.jl:346\n [2] read_tle_from_string(::String, ::Bool) at /Users/ronan.arraes/.julia/dev/SatelliteToolbox/src/orbit/tle.jl:97\n [3] @tle_str(::LineNumberNode, ::Module, ::Any) at /Users/ronan.arraes/.julia/dev/SatelliteToolbox/src/orbit/tle.jl:131\nin expression starting at REPL[12]:1\n\njulia> tles = tlenc\"\"\"\n       SCD 1\n       1 22490U 93009B   18359.76217587  .00000186  00000-0  84512-6 0  9998\n       2 22490  24.9694 116.1709 0043211  90.3968  62.0083 14.44539396366164\n       \"\"\"\n1-element Array{TLE,1}:\n TLE(\"SCD 1\", 22490, \'U\', \"93009B  \", 18, 359.76217587, 2.45847826217587e6, 1.86e-6, 0.0, 8.4512e-7, 999, 8, 24.9694, 116.1709, 0.0043211, 90.3968, 62.0083, 14.44539396, 36616, 4)"
},

{
    "location": "man/transformations/ecef_eci/#",
    "page": "ECEF and ECI",
    "title": "ECEF and ECI",
    "category": "page",
    "text": ""
},

{
    "location": "man/transformations/ecef_eci/#ECEF-and-ECI-1",
    "page": "ECEF and ECI",
    "title": "ECEF and ECI",
    "category": "section",
    "text": "CurrentModule = SatelliteToolbox\nDocTestSetup = quote\n    using SatelliteToolbox\nendThis package currently provides the entire IAU-76/FK5 model to transform reference systems. The following table lists the available coordinate frames and how they can be referenced in the functions that will be described later on.Reference Type Coordinate frame name\nITRF() ECEF International Terrestrial Reference Frame\nPEF() ECEF Pseudo-Earth Fixed reference frame\nMOD() ECI Mean-Of-Date reference frame\nTOD() ECI True-Of-Data reference frame\nGCRF() ECI Geocentric Celestial Reference Frame (GCRF)\nJ2000() ECI J2000 reference frame\nTEME() ECI True Equator, Mean Equinox reference framenote: Note\nECEF stands for Earth-Centered, Earth-Fixed whereas ECI stands for Earth-Centered Inertial."
},

{
    "location": "man/transformations/ecef_eci/#EOP-Data-1",
    "page": "ECEF and ECI",
    "title": "EOP Data",
    "category": "section",
    "text": "The conversions here sometimes requires additional data related to the Earth orientation. This information is provided by IERS (International Earth Rotation and Reference Systems Service). The SatelliteToolbox.jl has the capability to automatically download and parse the IERS EOP (Earth Orientation Parameters) data.The function that will automatically download the files, store them in the file system, and parse the data is:function get_iers_eop(data_type::Symbol = :IAU1980; force_download = false)in which:data_type is a symbol that specify what kind of data is desired (:IAU1980 for IAU1980 data and :IAU2000A for IAU2000A data). If omitted, then it defaults to :IAU1980.\nThe files are obtained on a daily-basis by the package RemoteFiles.jl. If the user wants to force the download, then the keyword force_download should be set to true.\nThis function returns an instance of the structure EOPData_IAU1980 or EOPData_IAU2000A depending on the selection of data_type. The returned value should be passed to the reference frame conversion functions as described in the following.note: Note\nNotice that, although we can fetch IAU2000A data, this IAU2000A theory is not implemented yet.julia> eop_IAU1980 = get_iers_eop();\n[ Info: Downloading file \'EOP_IAU1980.TXT\' from \'https://datacenter.iers.org/data/latestVersion/223_EOP_C04_14.62-NOW.IAU1980223.txt\'."
},

{
    "location": "man/transformations/ecef_eci/#ECEF-to-ECEF-1",
    "page": "ECEF and ECI",
    "title": "ECEF to ECEF",
    "category": "section",
    "text": "One ECEF frame can be converted to another one by the following function:function rECEFtoECEF([T,] ECEFo, ECEFf, JD_UTC::Number, eop_data)where it will be computed the rotation from the ECEF reference frame ECEFo to the ECEF reference frame ECEFf at the Julian Day [UTC] JD_UTC. The rotation description that will be used is given by T, which can be DCM or Quaternion. If T is omitted, then it defaults to DCM. The EOP data eop_data in this case is always necessary. Hence, the user must initialize it as described in the section EOP Data.julia> rECEFtoECEF(PEF(), ITRF(), DatetoJD(1986,6,19,21,35,0), eop_IAU1980)\n3×3 StaticArrays.SArray{Tuple{3,3},Float64,2,9}:\n  1.0          0.0         -4.3531e-7\n -6.30011e-13  1.0         -1.44727e-6\n  4.3531e-7    1.44727e-6   1.0\n\njulia> rECEFtoECEF(Quaternion, PEF(), ITRF(), DatetoJD(1986,6,19,21,35,0), eop_IAU1980)\nQuaternion{Float64}:\n  + 0.9999999999997147 - 7.236343481310813e-7.i + 2.1765518308012794e-7.j + 0.0.k"
},

{
    "location": "man/transformations/ecef_eci/#ECI-to-ECI-1",
    "page": "ECEF and ECI",
    "title": "ECI to ECI",
    "category": "section",
    "text": "One ECI frame can be converted to another ECI frame by one of the following functions:function rECEFtoECI([T,] ECIo, ECIf, JD_UTC::Number [, eop_data])\nfunction rECEFtoECI([T,] ECIo, JD_UTCo::Number, ECIf, JD_UTCf::Number [, eop_data])where it will be computed compute the rotation from the ECI reference frame ECIo to another ECI reference frame ECIf. If the origin and destination frame contain only one of date frame, then the first signature is used and JD_UTC is the epoch of this frame. On the other hand, if the origin and destination frame contain two of date frame[1], e.g. TOD => MOD, then the second signature must be used in which JD_UTCo is the epoch of the origin frame and JD_UTCf is the epoch of the destination frame. The rotation description that will be used is given by T, which can be DCM or Quaternion. If T is omitted, then it defaults to DCM. The EOP data eop_data, as described in section EOP Data, is required in some conversions, as described in the following table.[1]: TEME is an of date frame.Model ECIo ECIf EOP Data Function Signature\nIAU-76/FK5 GCRF J2000 EOP IAU1980 First\nIAU-76/FK5 GCRF MOD EOP IAU1980 First\nIAU-76/FK5 GCRF TOD EOP IAU1980 First\nIAU-76/FK5 GCRF TEME EOP IAU1980 First\nIAU-76/FK5 J2000 GCRF EOP IAU1980 First\nIAU-76/FK5 J2000 MOD EOP IAU1980 First\nIAU-76/FK5 J2000 TOD EOP IAU1980 First\nIAU-76/FK5 J2000 TEME Not required First\nIAU-76/FK5 MOD GCRF EOP IAU1980 First\nIAU-76/FK5 MOD J2000 EOP IAU1980 First\nIAU-76/FK5 MOD TOD EOP IAU1980 Second\nIAU-76/FK5 MOD TEME EOP IAU1980 Second\nIAU-76/FK5 TOD GCRF EOP IAU1980 First\nIAU-76/FK5 TOD J2000 EOP IAU1980 First\nIAU-76/FK5 TOD MOD EOP IAU1980 Second\nIAU-76/FK5 TOD TEME EOP IAU1980 Second\nIAU-76/FK5 TEME GCRF EOP IAU1980 First\nIAU-76/FK5 TEME J2000 Not requrired First\nIAU-76/FK5 TEME MOD EOP IAU1980 Second\nIAU-76/FK5 TEME TOD EOP IAU1980 Secondnote: Note\nIn this function, MOD and TOD frames are always defined with IERS EOP corrections. Hence, if one wants to obtain the MOD and TOD frames according to the original IAU-76/FK5 theory, it is necessary to use the low-level functions in file ./src/transformations/fk5/fk5.jl.julia> rECItoECI(DCM, GCRF(), J2000(), DatetoJD(1986, 6, 19, 21, 35, 0), eop_IAU1980)\n3×3 StaticArrays.SArray{Tuple{3,3},Float64,2,9}:\n  1.0          -2.45469e-12   4.56602e-10\n  2.45466e-12   1.0          -1.84455e-9\n -4.56602e-10   1.84455e-9    1.0\n\njulia> rECItoECI(Quaternion, TEME(), GCRF(), DatetoJD(1986, 6, 19, 21, 35, 0), eop_IAU1980)\nQuaternion{Float64}:\n  + 0.9999986335698654 + 1.8300414020900853e-5.i + 0.0006653038276169474.j - 0.0015132396749411375.k\n\njulia> rECItoECI(TOD(), DatetoJD(1986,6,19,21,35,0), TOD(), DatetoJD(1987,5,19,3,0,0), eop_IAU1980)\n3×3 StaticArrays.SArray{Tuple{3,3},Float64,2,9}:\n 1.0          -0.000224087  -9.73784e-5\n 0.000224086   1.0          -5.79859e-6\n 9.73797e-5    5.77677e-6    1.0\n\njulia> rECItoECI(Quaternion, TOD(), JD_J2000, MOD(), JD_J2000, eop_IAU1980)\nQuaternion{Float64}:\n  + 0.9999999993282687 - 1.400220690336851e-5.i + 1.3473593746216003e-5.j - 3.107834312843103e-5.k\n\njulia> rECItoECI(J2000(), TEME(), DatetoJD(1986,6,19,21,35,0))\n3×3 StaticArrays.SArray{Tuple{3,3},Float64,2,9}:\n  0.999995    0.0030265    0.00133055\n -0.00302645  0.999995    -3.86125e-5\n -0.00133066  3.45854e-5   0.999999"
},

{
    "location": "man/transformations/ecef_eci/#ECEF-to-ECI-1",
    "page": "ECEF and ECI",
    "title": "ECEF to ECI",
    "category": "section",
    "text": "One ECEF frame can be convert to one ECI frame using the following function:function rECEFtoECI([T,] ECEF, ECI, JD_UTC::Number [, eop_data])where it will be compute the rotation from the ECEF frame ECEF to the ECI frame ECI at the Julian Day [UTC] JD_UTC. The rotation description that will be used is given by T, which can be DCM or Quaternion. If it is omitted, then it defaults to DCM. The EOP data eop_data, as described in section EOP Data, is required in some conversions, as described in the following table.Model ECEF ECI EOP Data\nIAU-76/FK5 ITRF GCRF EOP IAU1980\nIAU-76/FK5 ITRF J2000 EOP IAU1980\nIAU-76/FK5 ITRF MOD EOP IAU1980\nIAU-76/FK5 ITRF TOD EOP IAU1980\nIAU-76/FK5 ITRF TEME EOP IAU1980\nIAU-76/FK5 PEF GCRF EOP IAU1980\nIAU-76/FK5 PEF J2000 Not required*\nIAU-76/FK5 PEF MOD EOP IAU1980\nIAU-76/FK5 PEF TOD EOP IAU1980\nIAU-76/FK5 PEF TEME Not required**: In this case, the Julian Time UTC will be assumed equal to Julian Time UT1 to compute the Greenwich Mean Sidereal Time. This is an approximation, but should be sufficiently accurate for some applications. Notice that, if EOP Data is provided, the Julian Day UT1 will be accurately computed.note: Note\nIn this function, MOD and TOD frames are always defined with IERS EOP corrections. Hence, if one wants to obtain the MOD and TOD frames according to the original IAU-76/FK5 theory, it is necessary to use the low-level functions in file ./src/transformations/fk5/fk5.jl.julia> rECEFtoECI(DCM, ITRF(), GCRF(), DatetoJD(1986, 06, 19, 21, 35, 0), eop_IAU1980)\n3×3 StaticArrays.SArray{Tuple{3,3},Float64,2,9}:\n -0.619267      0.78518     -0.00132979\n -0.78518      -0.619267     3.33492e-5\n -0.000797313   0.00106478   0.999999\n\njulia> rECEFtoECI(ITRF(), GCRF(), DatetoJD(1986, 06, 19, 21, 35, 0), eop_IAU1980)\n3×3 StaticArrays.SArray{Tuple{3,3},Float64,2,9}:\n -0.619267      0.78518     -0.00132979\n -0.78518      -0.619267     3.33492e-5\n -0.000797313   0.00106478   0.999999\n\njulia> rECEFtoECI(PEF(), J2000(), DatetoJD(1986, 06, 19, 21, 35, 0))\n3×3 StaticArrays.SArray{Tuple{3,3},Float64,2,9}:\n -0.619271      0.785176    -0.00133066\n -0.785177     -0.619272     3.45854e-5\n -0.000796885   0.00106622   0.999999\n\njulia> rECEFtoECI(PEF(), J2000(), DatetoJD(1986, 06, 19, 21, 35, 0), eop_IAU1980)\n3×3 StaticArrays.SArray{Tuple{3,3},Float64,2,9}:\n -0.619267      0.78518     -0.00133066\n -0.78518      -0.619267     3.45854e-5\n -0.000796879   0.00106623   0.999999\n\njulia> rECEFtoECI(Quaternion, ITRF(), GCRF(), DatetoJD(1986, 06, 19, 21, 35, 0), eop_IAU1980)\nQuaternion{Float64}:\n  + 0.4363098936462618 - 0.0005909969666939257.i + 0.00030510511316206974.j + 0.8997962182293519.k"
},

{
    "location": "man/transformations/ecef_eci/#ECI-to-ECEF-1",
    "page": "ECEF and ECI",
    "title": "ECI to ECEF",
    "category": "section",
    "text": "One ECI frame can be converted to one ECEF frame using the following function:function rECItoECEF([T,] ECI, ECEF, JD_UTC::Number [, eop_data])which has the same characteristics of the function rECEFtoECI described in Section ECEF to ECI, but with the inputs ECI  and ECEF swapped.note: Note\nThis function actually calls rECEFtoECI first and then uses inv_rotation. Hence, it has a slightly overhead on top of rECEFtoECI, which should be negligible for both rotation representations that are supported.julia> rECItoECEF(DCM, GCRF(), ITRF(), DatetoJD(1986, 06, 19, 21, 35, 0), eop_IAU1980)\n3×3 StaticArrays.SArray{Tuple{3,3},Float64,2,9}:\n -0.619267    -0.78518     -0.000797313\n  0.78518     -0.619267     0.00106478\n -0.00132979   3.33492e-5   0.999999\n\njulia> rECItoECEF(GCRF(), ITRF(), DatetoJD(1986, 06, 19, 21, 35, 0), eop_IAU1980)\n3×3 StaticArrays.SArray{Tuple{3,3},Float64,2,9}:\n -0.619267    -0.78518     -0.000797313\n  0.78518     -0.619267     0.00106478\n -0.00132979   3.33492e-5   0.999999\n\njulia> rECItoECEF(J2000(), PEF(), DatetoJD(1986, 06, 19, 21, 35, 0))\n3×3 StaticArrays.SArray{Tuple{3,3},Float64,2,9}:\n -0.619271    -0.785177    -0.000796885\n  0.785176    -0.619272     0.00106622\n -0.00133066   3.45854e-5   0.999999\n\njulia> rECItoECEF(J2000(), PEF(), DatetoJD(1986, 06, 19, 21, 35, 0), eop_IAU1980)\n3×3 StaticArrays.SArray{Tuple{3,3},Float64,2,9}:\n -0.619267    -0.78518     -0.000796879\n  0.78518     -0.619267     0.00106623\n -0.00133066   3.45854e-5   0.999999\n\njulia> rECItoECEF(Quaternion, GCRF(), ITRF(), DatetoJD(1986, 06, 19, 21, 35, 0), eop_IAU1980)\nQuaternion{Float64}:\n  + 0.4363098936462618 + 0.0005909969666939257.i - 0.00030510511316206974.j - 0.8997962182293519.k"
},

{
    "location": "man/transformations/geodetic_geocentric/#",
    "page": "Geodetic and Geocentric",
    "title": "Geodetic and Geocentric",
    "category": "page",
    "text": ""
},

{
    "location": "man/transformations/geodetic_geocentric/#Geodetic-and-Geocentric-1",
    "page": "Geodetic and Geocentric",
    "title": "Geodetic and Geocentric",
    "category": "section",
    "text": "CurrentModule = SatelliteToolbox\nDocTestSetup = quote\n    using SatelliteToolbox\nendThere are three functions that can help to convert between geodetic and geocentric representations. Notice that currently all Geodetic representations are based on the WGS84 reference ellipsoid."
},

{
    "location": "man/transformations/geodetic_geocentric/#ECEF-to-Geodetic-1",
    "page": "Geodetic and Geocentric",
    "title": "ECEF to Geodetic",
    "category": "section",
    "text": "It is possible to convert a position vector represented in an Earth-Centered, Earth-Fixed frame (ECEF) r_e to the Geodetic latitude, longitude, and altitude by the following function:function ECEFtoGeodetic(r_e::AbstractVector)which returns a tuple with:The Geocentric latitude [rad];\nThe longitude [rad]; and\nThe altitude above the reference ellipsoid [m].julia> ECEFtoGeodetic([R0;0;0])\n(0.0, 0.0, 0.0)\n\njulia> ECEFtoGeodetic([0;R0;0])\n(0.0, 1.5707963267948966, 0.0)\n\njulia> ECEFtoGeodetic([0;0;R0])\n(1.5707963267948966, 0.0, 21384.685754820704)"
},

{
    "location": "man/transformations/geodetic_geocentric/#Geodetic-to-ECEF-1",
    "page": "Geodetic and Geocentric",
    "title": "Geodetic to ECEF",
    "category": "section",
    "text": "The Geodetic latitude lat [rad], longitude lon [rad], and altitude h [m] can be converted to a vector represented in an ECEF reference frame by the following function:function GeodetictoECEF(lat::Number, lon::Number, h::Number)in which a 3x1 vector will be returned.julia> GeodetictoECEF(0,0,0)\n3-element StaticArrays.SArray{Tuple{3},Float64,1,3}:\n 6.378137e6\n 0.0\n 0.0\n\njulia> GeodetictoECEF(deg2rad(-22),deg2rad(-45),0)\n3-element StaticArrays.SArray{Tuple{3},Float64,1,3}:\n  4.1835869067109847e6\n -4.1835869067109837e6\n -2.3744128953028163e6"
},

{
    "location": "man/transformations/geodetic_geocentric/#Geodetic-to-Geocentric-1",
    "page": "Geodetic and Geocentric",
    "title": "Geodetic to Geocentric",
    "category": "section",
    "text": "Given a Geodetic latitude ϕ_gd [rad] and altitude above the reference ellipsoid h [m], one can obtain the Geocentric coordinates (Geocentric latitude and position from the center of Earth) using the following function:function GeodetictoGeocentric(ϕ_gd::Number, h::Number)in which a tuple with two values will be returned:The Geocentric latitude [rad]; and\nThe distance from the center of Earth [m].note: Note\nThe longitude is the same in both Geodetic and Geocentric representations.julia> GeodetictoGeocentric(deg2rad(-22), 0)\n(-0.38164509973650357, 6.375157677217675e6)\n\njulia> GeodetictoGeocentric(0,0)\n(0.0, 6.378137e6)"
},

{
    "location": "lib/library/#",
    "page": "Library",
    "title": "Library",
    "category": "page",
    "text": ""
},

{
    "location": "lib/library/#SatelliteToolbox.T_ECEFs",
    "page": "Library",
    "title": "SatelliteToolbox.T_ECEFs",
    "category": "constant",
    "text": "Union of all Earth-Centered Earth-Fixed (ECEF) frames supported.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.T_ECIs",
    "page": "Library",
    "title": "SatelliteToolbox.T_ECIs",
    "category": "constant",
    "text": "Union of all Earth-Centered Inertial (ECI) frames supported.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.T_ECIs_of_date",
    "page": "Library",
    "title": "SatelliteToolbox.T_ECIs_of_date",
    "category": "constant",
    "text": "Union of all of date Earth-Centered Inertial (ECI) frames supported.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.T_ROT",
    "page": "Library",
    "title": "SatelliteToolbox.T_ROT",
    "category": "constant",
    "text": "Union of all supported rotation descriptions.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.EOPData_IAU1980",
    "page": "Library",
    "title": "SatelliteToolbox.EOPData_IAU1980",
    "category": "type",
    "text": "EOP Data for IAU 1980.\n\nFields\n\nx, y: Polar motion with respect to the crust [arcsec].\nUT1_UTC: Irregularities of the rotation angle [s].\nLOD: Length of day offset [s].\ndPsi, dEps: Celestial pole offsets referred to the model IAU1980 [arcsec].\n*_err: Errors in the components [same unit as the component].\n\nRemarks\n\nEach field will be an AbstractInterpolation indexed by the Julian Day. Hence, if one want to obtain, for example, the X component of the polar motion with respect to the crust at 19 June 2018, the following can be used:\n\nx[DatestoJD(2018,19,06,0,0,0)]\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.EOPData_IAU2000A",
    "page": "Library",
    "title": "SatelliteToolbox.EOPData_IAU2000A",
    "category": "type",
    "text": "EOP Data for IAU 2000A.\n\nFields\n\nx, y: Polar motion with respect to the crust [arcsec].\nUT1_UTC: Irregularities of the rotation angle [s].\nLOD: Length of day offset [s].\ndX, dY: Celestial pole offsets referred to the model IAU2000A [arcsec].\n*_err: Errors in the components [same unit as the component].\n\nRemarks\n\nEach field will be an AbstractInterpolation indexed by the Julian Day. Hence, if one want to obtain, for example, the X component of the polar motion with respect to the crust at 19 June 2018, the following can be used:\n\nx[DatestoJD(2018,19,06,0,0,0)]\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.GravityModel_Coefs",
    "page": "Library",
    "title": "SatelliteToolbox.GravityModel_Coefs",
    "category": "type",
    "text": "Structure to store the information about a gravity model.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.ICGEM",
    "page": "Library",
    "title": "SatelliteToolbox.ICGEM",
    "category": "type",
    "text": "Structure to store the information contained in ICGEM files.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.J2_GravCte",
    "page": "Library",
    "title": "SatelliteToolbox.J2_GravCte",
    "category": "type",
    "text": "Gravitational constants for J2 orbit propagator.\n\nFields\n\nR0: Earth equatorial radius [m].\nμm: √GM [er/s]^(3/2).\nJ2: The second gravitational zonal harmonic of the Earth.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.J2_Structure",
    "page": "Library",
    "title": "SatelliteToolbox.J2_Structure",
    "category": "type",
    "text": "Low level J2 orbit propagator structure.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.JB2008_Output",
    "page": "Library",
    "title": "SatelliteToolbox.JB2008_Output",
    "category": "type",
    "text": "Output structure of the Jacchia-Bowman 2008.\n\nFields\n\nnN2: Number density of N₂ [1/m³].\nnO2: Number density of O₂ [1/m³].\nnO: Number density of O [1/m³].\nnAr: Number density of Ar [1/m³].\nnHe: Number density of He [1/m³].\nnH: Number density of H [1/m³].\nrho: Total density [kg/m³].\nT_exo: Exospheric temperature [K].\nTz: Temperature at the selected altitude [K].\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.JR1971_Output",
    "page": "Library",
    "title": "SatelliteToolbox.JR1971_Output",
    "category": "type",
    "text": "Output structure of the Jacchia-Roberts 1971 model.\n\nFields\n\nnN2: Number density of N₂ [1/m³].\nnO2: Number density of O₂ [1/m³].\nnO: Number density of O [1/m³].\nnAr: Number density of Ar [1/m³].\nnHe: Number density of He [1/m³].\nnH: Number density of H [1/m³].\nrho: Total density [kg/m³].\nT_exo: Exospheric temperature [K].\nTz: Temperature at the selected altitude [K].\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.NRLMSISE00_Flags",
    "page": "Library",
    "title": "SatelliteToolbox.NRLMSISE00_Flags",
    "category": "type",
    "text": "Flags to configure NRLMSISE-00.\n\nFields\n\noutput_m_kg\nF107_Mean\ntime_independent\nsym_annual\nsym_semiannual\nasym_annual\nasyn_semiannual\ndiurnal\nsemidiurnal\ndaily_ap\nall_ut_long_effects\nlongitudinal\nut_mixed_ut_long\nmixed_ap_ut_long\nterdiurnal\ndepartures_from_eq\nall_tinf_var\nall_tlb_var\nall_tn1_var\nall_s_var\nall_tn2_var\nall_nlb_var\nall_tn3_var\nturbo_scale_height\nuse_ap_array\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.NRLMSISE00_Output",
    "page": "Library",
    "title": "SatelliteToolbox.NRLMSISE00_Output",
    "category": "type",
    "text": "Output structure for NRLMSISE00 model.\n\nFields\n\nden_N: Nitrogen number density [U].\nden_N2: N₂ number density [U].\nden_O: Oxygen number density [U].\nden_aO: Anomalous Oxygen number density [U].\nden_O2: O₂ number density [U].\nden_H: Hydrogen number density [U].\nden_He: Helium number density [U].\nden_Ar: Argon number density [U].\nden_Total: Total mass density [T/U] (this value has different meanings for              routines gtd7 and gtd7d).\nT_exo: Exospheric temperature [K].\nT_alt: Temperature at the selected altitude [K].\nflags: Flags used to compute NRLMSISE-00 model.\n\nNotice that:\n\nIf flags.output_m_kg is false, then [U] is [cm⁻³] and [T] is [g/cm⁻³].\nIf flags.output_m_kg is true, then [U] is [m⁻³] and [T] is [kg/m⁻³].\n\nRemarks\n\nAnomalous oxygen is defined as hot atomic oxygen or ionized oxygen that can become appreciable at high altitudes (> 500 km) for some ranges of inputs, thereby affection drag on satellites and debris. We group these species under the term Anomalous Oxygen, since their individual variations are not presently separable with the drag data used to define this model component.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.NRLMSISE00_Structure",
    "page": "Library",
    "title": "SatelliteToolbox.NRLMSISE00_Structure",
    "category": "type",
    "text": "Structure with the configuration parameters for NRLMSISE-00 model. It can be created using the function conf_nrlmsise00.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.Orbit",
    "page": "Library",
    "title": "SatelliteToolbox.Orbit",
    "category": "type",
    "text": "This structure defines the orbit in terms of the Keplerian elements.\n\nFields\n\nt: Orbit epoch.\na: Semi-major axis [m].\ne: Eccentricity.\ni: Inclination [rad].\nΩ: Right ascension of the ascending node [rad].\nω: Argument of perigee [rad].\nf: True anomaly [rad].\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.Orbit-NTuple{6,Number}",
    "page": "Library",
    "title": "SatelliteToolbox.Orbit",
    "category": "method",
    "text": "function Orbit(a::Number, e::Number, i::Number, Ω::Number, ω::Number, f::Number)\n\nCreate an orbit with semi-major axis a [m], eccentricity e, inclination i [rad], right ascension of the ascending node Ω [rad], argument of perigee ω [rad], and true anomaly f [rad].\n\nReturns\n\nAn object of type Orbit with the specified orbit. The orbit epoch is defined as 0.0.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.OrbitPropagatorJ2",
    "page": "Library",
    "title": "SatelliteToolbox.OrbitPropagatorJ2",
    "category": "type",
    "text": "Structure that holds the information related to the J2 orbit propagator.\n\nFields\n\norb: Current orbit (see Orbit).\nj2d: Structure that stores the J2 orbit propagator data (see        J2_Structure).\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.OrbitPropagatorSGP4",
    "page": "Library",
    "title": "SatelliteToolbox.OrbitPropagatorSGP4",
    "category": "type",
    "text": "Structure that holds the information related to the SGP4 propagator.\n\nFields\n\norb: Current orbit (see Orbit).\nsgp4_gc: Gravitational contents of the SGP4 algorithm (see SGP4_GravCte).\nsgp4d: Structure that stores the SGP4 data (see SGP4_Structure).\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.OrbitPropagatorTwoBody",
    "page": "Library",
    "title": "SatelliteToolbox.OrbitPropagatorTwoBody",
    "category": "type",
    "text": "Structure that holds the information related to the Two Body orbit propagator.\n\nFields\n\norb: Current orbit (see Orbit).\ntbd: Structure that stores the Two Body orbit propagator data (see       TwoBody_Structure).\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.SGP4_GravCte",
    "page": "Library",
    "title": "SatelliteToolbox.SGP4_GravCte",
    "category": "type",
    "text": "Gravitational constants for SGP4.\n\nFields\n\nR0: Earth equatorial radius [km].\nXKE: √GM [er/s]^(3/2).\nJ2: The second gravitational zonal harmonic of the Earth.\nJ3: The thrid gravitational zonal harmonic of the Earth.\nJ4: The fourth gravitational zonal harmonic of the Earth.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.SGP4_Structure",
    "page": "Library",
    "title": "SatelliteToolbox.SGP4_Structure",
    "category": "type",
    "text": "Low level SGP4 structure.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.TLE",
    "page": "Library",
    "title": "SatelliteToolbox.TLE",
    "category": "type",
    "text": "This structure contains the same elements of the TLE with the same units.\n\nFields\n\nname: Name of the satellite.\n\nFirst line\n\nsat_num: Satellite number.\nclassification: Classification (\'U\', \'C\', or \'S\').\nint_designator: International designator.\nepoch_year: Epoch year (two digits).\nepoch_day: Epoch day (day + fraction of the day).\nepoch: The epoch represented in Julian Day.\ndn_o2: 1st time derivative of mean motion / 2 [rev/day²].\nddn_o6: 2nd time derivative of mean motion / 6 [rev/day³].\nbstar: B* drag term.\nelem_set_number: Element set number.\nchecksum_l1: Checksum of the line 1 (modulo 10).\n\nSecond line\n\ni: Inclination [deg].\nΩ: Right ascension of the ascending node [deg].\ne: Eccentricity.\nω: Argument of perigee [deg].\nM: Mean anomaly [deg].\nn: Mean motion [rev/day].\nrev_num: Revolution number at epoch [rev].\nchecksum_l2: Checksum of the line 2 (modulo 10).\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.TwoBody_Structure",
    "page": "Library",
    "title": "SatelliteToolbox.TwoBody_Structure",
    "category": "type",
    "text": "Low level Two Body orbit propagator structure.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.DatetoJD-Tuple{Dates.DateTime}",
    "page": "Library",
    "title": "SatelliteToolbox.DatetoJD",
    "category": "method",
    "text": "function DatetoJD(dateTime::DateTime)\n\nConvert the date and time dateTime to Julian Day.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.DatetoJD-Tuple{Dates.Date}",
    "page": "Library",
    "title": "SatelliteToolbox.DatetoJD",
    "category": "method",
    "text": "function DatetoJD(date::Date)\n\nConvert the date date to Julian Day.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.DatetoJD-Tuple{Int64,Int64,Int64,Int64,Int64,Number}",
    "page": "Library",
    "title": "SatelliteToolbox.DatetoJD",
    "category": "method",
    "text": "function DatetoJD(Y::Int, M::Int, D::Int, h::Int, m::Int, s::Number)\n\nConvert a date represented using the Gregorian Calendar (Year = y, Month = M (1-12), Day = D, Hour = h (0-24), minute = m, and second = s) to Julian Day.\n\nRemarks\n\nThe algorithm was obtained from [2] (Accessed on 2018-04-11).\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.ECEFtoGeodetic-Tuple{AbstractArray{T,1} where T}",
    "page": "Library",
    "title": "SatelliteToolbox.ECEFtoGeodetic",
    "category": "method",
    "text": "function ECEFtoGeodetic(r_e::AbstractVector)\n\nConvert the vector r_e [m] represented in the Earth-Centered, Earth-Fixed (ECEF) reference frame into Geodetic coordinates (WGS-84).\n\nReturns\n\nLatitude [rad].\nLongitude [rad].\nAltitude [m].\n\nRemarks\n\nBased on algorithm in [3].\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.E_to_M-Tuple{Number,Number}",
    "page": "Library",
    "title": "SatelliteToolbox.E_to_M",
    "category": "method",
    "text": "function E_to_M(e::Number, E::Number)\n\nCompute the mean anomaly (0,2π) [rad] given the eccentricity e and the eccentric anomaly E [rad].\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.E_to_f-Tuple{Number,Number}",
    "page": "Library",
    "title": "SatelliteToolbox.E_to_f",
    "category": "method",
    "text": "function E_to_f(e::Number, E::Number)\n\nCompute the true anomaly (0,2π) [rad] given the eccentricity e and the eccentric anomaly E [rad].\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.GeodetictoECEF-Tuple{Number,Number,Number}",
    "page": "Library",
    "title": "SatelliteToolbox.GeodetictoECEF",
    "category": "method",
    "text": "function GeodetictoECEF(lat::Number, lon::Number, h::Number)\n\nConvert the latitude lat [rad], longitude lon [rad], and altitude h [m] (WGS-84) into a vector represented on the Earth-Centered, Earth-Fixed (ECEF) reference frame.\n\nRemarks\n\nBased on algorithm in [3].\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.GeodetictoGeocentric-Tuple{Number,Number}",
    "page": "Library",
    "title": "SatelliteToolbox.GeodetictoGeocentric",
    "category": "method",
    "text": "function GeodetictoGeocentric(ϕ_gd::Number, h::Number)\n\nCompute the geocentric latitude and radius from the geodetic latitude ϕ_gd (-π/2,π/2) [rad] and height above the reference ellipsoid h [m] (WGS-84). Notice that the longitude is the same in both geocentric and geodetic coordinates.\n\nReturns\n\nGeocentric latitude [rad].\nRadius from the center of the Earth [m].\n\nRemarks\n\nBased on algorithm in [4, p. 3].\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.J2000toGMST-Tuple{Number}",
    "page": "Library",
    "title": "SatelliteToolbox.J2000toGMST",
    "category": "method",
    "text": "function J2000toGMST(J2000_UT1::Number)\n\nCompute the Greenwich Mean Sideral Time (GMST) [rad] given the instant J2000_UT1 in J2000.0 reference [UT1].\n\nRemarks\n\nBased on algorithm in 2, accessed at 2015-12-01.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.JD_TTtoUTC-Tuple{Number,Number}",
    "page": "Library",
    "title": "SatelliteToolbox.JD_TTtoUTC",
    "category": "method",
    "text": "function JD_TTtoUTC(JD_TT::Number, ΔAT::Number = 37)\n\nConvert the Julian Day in TT JD_TT (Terrestrial Time) to the Julian Day in UTC (Terrestrial Time) using the accumulated difference ΔAT between UTC and the International Atomic Time (TAI). If no value is provided, then the leap seconds will be obtained from the table ΔAT_Data. Notice that, in this case, if a date previous to 1973 is provided, then a fixed value of 10 will be used, leading to wrong computations.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.JD_UT1toUTC-Tuple{Number,Number}",
    "page": "Library",
    "title": "SatelliteToolbox.JD_UT1toUTC",
    "category": "method",
    "text": "function JD_UT1toUTC(JD_UT1::Number, ΔUT1::Number)\n\nConvert the Julian Day in UT1 JD_UT1 to the Julian Day in UTC using the accumulated difference ΔUT1, which is provided by IERS EOP Data.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.JD_UT1toUTC-Tuple{Number,Union{EOPData_IAU1980, EOPData_IAU2000A}}",
    "page": "Library",
    "title": "SatelliteToolbox.JD_UT1toUTC",
    "category": "method",
    "text": "function JD_UTCtoUT1(JD_UTC::Number, eop::Union{EOPData_IAU1980,EOPData_IAU2000A})\n\nConvert the Julian Day in UT1 JD_UT1 to the Julian Day in UTC using the accumulated difference given by the EOP Data eop (see get_iers_eop). Notice that the accumulated difference will be interpolated.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.JD_UTCtoTT-Tuple{Number,Number}",
    "page": "Library",
    "title": "SatelliteToolbox.JD_UTCtoTT",
    "category": "method",
    "text": "function JD_UTCtoTT(JD_UTC::Number [, ΔAT::Number])\n\nConvert the Julian Day in UTC JD_UTC to the Julian Day in TT (Terrestrial Time) using the accumulated difference ΔAT between UTC and the International Atomic Time (TAI). If no value is provided, then the leap seconds will be obtained from the table ΔAT_Data. Notice that, in this case, if a date previous to 1973 is provided, then a fixed value of 10 will be used, leading to wrong computations.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.JD_UTCtoUT1-Tuple{Number,Number}",
    "page": "Library",
    "title": "SatelliteToolbox.JD_UTCtoUT1",
    "category": "method",
    "text": "function JD_UTCtoUT1(JD_UTC::Number, ΔUT1::Number)\n\nConvert the Julian Day in UTC JD_UTC to the Julian Day in UT1 using the accumulated difference ΔUT1, which is provided by IERS EOP Data.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.JD_UTCtoUT1-Tuple{Number,Union{EOPData_IAU1980, EOPData_IAU2000A}}",
    "page": "Library",
    "title": "SatelliteToolbox.JD_UTCtoUT1",
    "category": "method",
    "text": "function JD_UTCtoUT1(JD_UTC::Number, eop::Union{EOPData_IAU1980,EOPData_IAU2000A})\n\nConvert the Julian Day in UTC JD_UTC to the Julian Day in UT1 using the accumulated difference given by the EOP Data eop (see get_iers_eop). Notice that the accumulated difference will be interpolated.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.JDtoDate-Tuple{Number}",
    "page": "Library",
    "title": "SatelliteToolbox.JDtoDate",
    "category": "method",
    "text": "function JDtoDate([T,] JD::Number)\n\nConvert a date represented in Julian Day JD to Gregorian Calendar. The optional parameter T defines the return type. If T is omitted, then it defaults to Int.\n\nReturns\n\nIf T is omitted or Int, then a tuple with the following data will be returned:\n\nYear.\nMonth (1 => January, 2 => February, ...).\nDay.\nHour (0 - 24).\nMinute (0 - 59).\nSecond (0 - 59).\n\nNotice that if T is Int, then the seconds field will be Integer. Otherwise, it will be floating point.\n\nIf T is Date, then it will return the Julia structure Date. Notice that the hours, minutes, and seconds will be neglected because the structure Date does not handle them.\n\nIf T is DateTime, then it will return the Julia structure DateTime.\n\nRemarks\n\nThe algorithm was obtained from [2] (Accessed on 2018-04-11). In [2], there is the following warning:\n\nNote: This method will not give dates accurately on the Gregorian Proleptic Calendar, i.e., the calendar you get by extending the Gregorian calendar backwards to years earlier than 1582. using the Gregorian leap year rules. In particular, the method fails if Y<400.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.JDtoGMST-Tuple{Number}",
    "page": "Library",
    "title": "SatelliteToolbox.JDtoGMST",
    "category": "method",
    "text": "function JDtoGMST(JD_UT1::Number)\n\nCompute the Greenwich Mean Sideral Time (GMST) [rad] for the Julian Day JD_UT1 [UT1].\n\nRemarks\n\nBased on algorithm in [1, pp. 188].\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.M_to_E",
    "page": "Library",
    "title": "SatelliteToolbox.M_to_E",
    "category": "function",
    "text": "function M_to_E(e::Number, M::Number, tol::Number = 1e-10)\n\nCompute the eccentric anomaly (0,2π) [rad] given the eccentricity e and the mean anomaly M [rad]. This function uses the Newton-Raphson algorithm and the tolerance to accept the solution is tol.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.M_to_f",
    "page": "Library",
    "title": "SatelliteToolbox.M_to_f",
    "category": "function",
    "text": "function M_to_f(e::Number, M::Number, tol::Number = 1e-10)\n\nCompute the true anomaly (0,2π) [rad] given the eccentricity e and the mean anomaly M [rad]. This function uses the Newton-Raphson algorithm and the tolerance to accept the solution is tol.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.adjacent_track_angle_grss-Tuple{Number,Number,Number,Int64,Number}",
    "page": "Library",
    "title": "SatelliteToolbox.adjacent_track_angle_grss",
    "category": "method",
    "text": "function adjacent_track_angle_grss(h::Number, T::Number, i::Number, To::Int, lat::Number)\n\nCompute the angle between two adjacent ground tracks [rad] in a given latitude lat [rad] measured from the satellite position for a ground repeating, Sun-synchronous orbit with altitude in the Equator h [m], period T [s], inclination i [rad], and orbit cycle To [days].\n\nRemarks\n\nThe functions does not check if the orbit is a GRSS orbit.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.adjacent_track_angle_grss-Tuple{Number,Number,Number,Number,Int64,Number}",
    "page": "Library",
    "title": "SatelliteToolbox.adjacent_track_angle_grss",
    "category": "method",
    "text": "function adjacent_track_angle_grss(h::Number, a::Number, e::Number, i::Number, To::Int, lat::Number)\n\nCompute the angle between two adjacent ground tracks [rad] in a given latitude lat [rad] measured from the satellite position for a ground repeating, Sun-synchronous orbit with altitude in the Equator h [m], semi-major axis a [m], eccentricity e, inclination i [rad], and orbit cycle To [days].\n\nRemarks\n\nThe functions does not check if the orbit is a GRSS orbit.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.adjacent_track_distance_grss-Tuple{Number,Number,Int64,Number}",
    "page": "Library",
    "title": "SatelliteToolbox.adjacent_track_distance_grss",
    "category": "method",
    "text": "function adjacent_track_distance_grss(T::Number, i::Number, To::Int, lat::Number)\n\nCompute the distance between adjacent ground tracks [m] at a given latitude lat [rad] for a ground repeating, Sun-synchronous orbit with period T [s], inclination i [rad], and orbit cycle To [days].\n\nRemarks\n\nThe functions does not check if the orbit is a GRSS orbit.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.adjacent_track_distance_grss-Tuple{Number,Number,Number,Int64,Number}",
    "page": "Library",
    "title": "SatelliteToolbox.adjacent_track_distance_grss",
    "category": "method",
    "text": "function adjacent_track_distance_grss(a::Number, e::Number, i::Number, To::Int, lat::Number)\n\nCompute the distance between adjacent ground tracks [m] at a given latitude lat [rad] for a ground repeating, Sun-synchronous orbit with semi-major axis a [m], eccentricity e, inclination i [rad], and orbit cycle To [days].\n\nRemarks\n\nThe functions does not check if the orbit is a GRSS orbit.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.angvel",
    "page": "Library",
    "title": "SatelliteToolbox.angvel",
    "category": "function",
    "text": "function angvel(a::Number, e::Number, i::Number, pert::Symbol = :J2)\nfunction angvel(orb::Orbit, pert::Symbol = :J2)\n\nCompute the angular velocity [rad/s] of an object in an orbit with semi-major axis a [m], eccentricity e, and inclination i [rad], using the perturbation terms specified by the symbol pert. The orbit can also be specified by orb, which is an instance of the structure Orbit.\n\npert can be:\n\n:J0: Consider a Keplerian orbit.\n:J2: Consider the perturbation terms up to J2.\n\nIf pert is omitted, then it defaults to :J2.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.change_oe_frame-Tuple{Number,Number,Number,Number,Number,Number,Vararg{Any,N} where N}",
    "page": "Library",
    "title": "SatelliteToolbox.change_oe_frame",
    "category": "method",
    "text": "function change_oe_frame(a::Number, e::Number, i::Number, Ω::Number, ω::Number, f::Number, conv_args...)\nfunction change_oe_frame(oe::Orbit, conv_args...)\n\nChange the reference frame of orbit elements. The orbit elements can be specified by a, e, i, Ω, ω, and f, or the structure oe (see Orbit).\n\nThe conversion arguments conv_args are the same arguments that one should pass to the function rECItoECI to convert between the desired frames. For more information, see the documentation of the function rECItoECI.\n\nArgs\n\na: Semi-major axis [m].\ne: Excentricity.\ni: Inclination [rad].\nΩ: Right-ascension of the ascending node [rad].\nω: Argument of perigee [rad].\nf: True anomaly [rad].\nconv_args...: Conversion arguments, which are the same arguments that one                 would pass to the function rECItoECI to convert between the                 desired frames.\noe: An instance of the structure Orbit with the orbit elements that will       be converted [SI units].\n\nReturns\n\nAn instance of the structure Orbit with the Keplerian elements [SI units] converted to the new frame.\n\nExamples\n\njulia> eop = get_iers_eop(:IAU1980);\n\njulia> teme_epoch = DatetoJD(2016,6,1,11,0,0);\n\njulia> tod_epoch  = DatetoJD(2016,1,1,0,0,0);\n\njulia> oe_teme    = Orbit(0,\n                          7130.982e3,\n                          0.001111,\n                          98.405*pi/180,\n                          227.336*pi/180,\n                          90*pi/180,\n                          320*pi/180)\n\n                 Orbit\n  =====================================\n                  t =        0.0\n    Semi-major axis =     7130.9820 km\n       Eccentricity =        0.001111\n        Inclination =       98.4050 ˚\n               RAAN =      227.3360 ˚\n    Arg. of Perigee =       90.0000 ˚\n       True Anomaly =      320.0000 ˚\n\njulia> oe_j2000 = change_oe_frame(oe_teme, TEME(), J2000(), teme_epoch, eop)\n\n                 Orbit\n  ======================================\n                  t =        0.0\n    Semi-major axis =     7130.9820 km\n       Eccentricity =        0.001111\n        Inclination =       98.3365 ˚\n               RAAN =      227.1345 ˚\n    Arg. of Perigee =       90.0604 ˚\n       True Anomaly =      320.0000 ˚\n\njulia> oe_tod   = change_oe_frame(oe_teme, TEME(), teme_epoch, TOD(), tod_epoch, eop)\n\n                 Orbit\n  ======================================\n                  t =        0.0\n    Semi-major axis =     7130.9820 km\n       Eccentricity =        0.001111\n        Inclination =       98.4037 ˚\n               RAAN =      227.3306 ˚\n    Arg. of Perigee =       90.0014 ˚\n       True Anomaly =      320.0000 ˚\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.compute_RAAN_lt-Tuple{Number,Number}",
    "page": "Library",
    "title": "SatelliteToolbox.compute_RAAN_lt",
    "category": "method",
    "text": "function compute_RAAN_lt(JD::Number, asc_node_lt::Number)\n\nCompute the RAAN (0,2π) [rad] so that the orbit plane local time is asc_node_lt [hour] at the Julian day JD.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.compute_U-Union{Tuple{T}, Tuple{GravityModel_Coefs{T},AbstractArray{T,1} where T}, Tuple{GravityModel_Coefs{T},AbstractArray{T,1} where T,Number}} where T<:Number",
    "page": "Library",
    "title": "SatelliteToolbox.compute_U",
    "category": "method",
    "text": "function compute_U(gm_coefs::GravityModel_Coefs{T}, r::AbstractVector, n_max::Number = 0) where T<:Number\n\nCompute the gravitational potential [J/kg] at r (ITRF) [m] using the coefficients gm_coefs (see GravityModel_Coefs). The maximum degree that will be used while computing the spherical harmonics will be n_max. If n_max is less or equal 0, then the maximum available degree will be used. If n_max is omitted, then it defaults to 0.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.compute_dU-Union{Tuple{T}, Tuple{GravityModel_Coefs{T},AbstractArray{T,1} where T}, Tuple{GravityModel_Coefs{T},AbstractArray{T,1} where T,Number}} where T<:Number",
    "page": "Library",
    "title": "SatelliteToolbox.compute_dU",
    "category": "method",
    "text": "function compute_dU(gm_coefs::GravityModel_Coefs{T}, r::AbstractVector, n_max::Number = 0) where T<:Number\n\nCompute the derivatives w.r.t. the spherical coordinates of the gravitational field (∂U/∂r, ∂U/∂ϕ, ∂U/∂λ) defined by the coefficients gm_coefs (see GravityModel_Coefs) at the position r [m] in ITRF. The maximum degree that will be used while computing the spherical harmonics will be n_max. If n_max is less or equal 0, then the maximum available degree will be used. If n_max is omitted, then it defaults to 0.\n\nReturns\n\nThe derivative of the gravitational field w.r.t. the radius (∂U/∂r).\nThe derivative of the gravitational field w.r.t. the latitude (∂U/∂ϕ).\nThe derivative of the gravitational field w.r.t. the longitude (∂U/∂λ).\n\nRemarks\n\nIn this case, ϕ is the geocentric latitude and λ is the geocentric longitude.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.compute_g-Union{Tuple{T}, Tuple{GravityModel_Coefs{T},AbstractArray{T,1} where T}, Tuple{GravityModel_Coefs{T},AbstractArray{T,1} where T,Number}} where T<:Number",
    "page": "Library",
    "title": "SatelliteToolbox.compute_g",
    "category": "method",
    "text": "function compute_g(gm_coefs::GravityModel_Coefs{T}, r::AbstractVector [, n_max::Number]) where T<:Number\n\nCompute the gravitational acceleration (ITRF) [m/s²] at position r [m] (ITRF) using the coefficients gm_coefs (see GravityModel_Coefs). The maximum degree that will be used while computing the spherical harmonics will be n_max. If n_max is less or equal 0, then the maximum available degree will be used. If n_max is omitted, then it defaults to 0.\n\nRemarks\n\nNotice that this function computes the gravitational acceleration. Hence, the acceleration due to Earth rotation rate is not included.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.compute_ss_orbit_by_ang_vel-Tuple{Number,Number}",
    "page": "Library",
    "title": "SatelliteToolbox.compute_ss_orbit_by_ang_vel",
    "category": "method",
    "text": "function compute_ss_orbit_by_ang_vel(n::Number, e::Number)\n\nCompute the Sun-synchronous orbit given the angular velocity n [rad/s] and the eccentricity e.\n\nReturns\n\nThe semi-major axis [m].\nThe inclination [rad].\nThe residues of the two functions.\nA boolean variable that indicates if the numerical algorithm converged.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.compute_ss_orbit_by_inclination-Tuple{Number,Number}",
    "page": "Library",
    "title": "SatelliteToolbox.compute_ss_orbit_by_inclination",
    "category": "method",
    "text": "function compute_ss_orbit_by_inclination(i::Number, e::Number)\n\nCompute the Sun-synchronous orbit given the inclination i [rad] and the eccentricity e.\n\nReturns\n\nThe semi-major axis of the Sun-synchronous orbit [m].\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.compute_ss_orbit_by_num_rev_per_day-Tuple{Number,Number}",
    "page": "Library",
    "title": "SatelliteToolbox.compute_ss_orbit_by_num_rev_per_day",
    "category": "method",
    "text": "function compute_ss_orbit_by_num_rev_per_day(numRevPD::Number, e::Number)\n\nCompute the Sun-synchronous orbit given the number of revolutions per day numRevPD and the eccentricity e.\n\nReturns\n\nThe semi-major axis [m].\nThe inclination [rad].\nThe residues of the two functions.\nA boolean variable that indicates if the numerical algorithm converged.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.compute_ss_orbit_by_semi_major_axis-Tuple{Number,Number}",
    "page": "Library",
    "title": "SatelliteToolbox.compute_ss_orbit_by_semi_major_axis",
    "category": "method",
    "text": "function compute_ss_orbit_by_semi_major_axis(a::Number, e::Number)\n\nCompute the Sun-synchronous orbit given the semi-major axis a [m] and the eccentricity e.\n\nReturns\n\nThe inclination of the Sun-synchronous orbit [rad].\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.conf_nrlmsise00",
    "page": "Library",
    "title": "SatelliteToolbox.conf_nrlmsise00",
    "category": "function",
    "text": "function conf_nrlmsise00(year::Int, doy::Int, sec::Number, alt::Number, g_lat::Number, g_long::Number, lst::Number, f107A::Number, f107::Number, ap::[Number, AbstractVector], flags::NRLMSISE00_Flags = NRLMSISE00_Flags())\n\nCreate the structure with the proper configuration to call the NRLMSISE-00 model.\n\nNotice that the input variables have the same units of the original model.\n\nArgs\n\nyear: Year (currently ignored).\ndoy: Day of year.\nsec: Seconds in day [UT].\nalt: Altitude [km].\ng_lat: Geodetic latitude [deg].\ng_long: Geodetic longitude [deg].\nlst: Local apparent solar time (hours).\nf107A: 81 day average of F10.7 flux (centered on day of year doy).\nf107: Daily F10.7 flux for previous day.\nap: Magnetic index (daily) if it is a number. If it is an array, then see       Remarks.\nflags: (OPTIONAL) An instance of the structure NRLMSISE00_Flags with the           configuration flags for NRLMSISE00. If omitted, then the default           configurations will be used.\n\nReturns\n\nAn instance of the structure NRLMSISE00_Structure.\n\nRemarks\n\nIf ap is a Vector, then it must be a vector with 7 dimensions as described below:\n\nIndex Description\n1 Daily AP.\n2 3 hour AP index for current time.\n3 3 hour AP index for 3 hours before current time.\n4 3 hour AP index for 6 hours before current time.\n5 3 hour AP index for 9 hours before current time.\n6 Average of eight 3 hour AP indices from 12 to 33 hours prior to current time.\n7 Average of eight 3 hour AP indices from 36 to 57 hours prior to current time.\n\nNotes on input variables\n\nUT, Local Time, and Longitude are used independently in the model and are not of equal importance for every situation. For the most physically realistic calculation these three variables should be consistent (lst=sec/3600 + g_long/15). The Equation of Time departures from the above formula for apparent local time can be included if available but are of minor importance.\n\nf107 and f107A values used to generate the model correspond to the 10.7 cm radio flux at the actual distance of the Earth from the Sun rather than the radio flux at 1 AU. The following site provides both classes of values:\n\nftp://ftp.ngdc.noaa.gov/STP/SOLAR_DATA/SOLAR_RADIO/FLUX/\n\nf107, f107A, and ap effects are neither large nor well established below 80 km and these parameters should be set to 150, 150, and 4 respectively.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.create_gravity_model_coefs-Tuple{ICGEM}",
    "page": "Library",
    "title": "SatelliteToolbox.create_gravity_model_coefs",
    "category": "method",
    "text": "function create_gravity_model_coefs(icgem::ICGEM)\n\nReturn an instance of the structure GravityModel_Coefs based on the information obtained from an ICGEM file in icgem (see parse_icgem).\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.dArgPer",
    "page": "Library",
    "title": "SatelliteToolbox.dArgPer",
    "category": "function",
    "text": "function dArgPer(a::Number, e::Number, i::Number, pert::Symbol = :J2)\nfunction dArgPer(orb::Orbit, pert::Symbol = :J2)\n\nCompute the time-derivative of the argument of perigee [rad/s] of an orbit with semi-major axis a [m], eccentricity e, and inclination i [rad], using the perturbation terms specified by the symbol pert. The orbit can also be specified by orb, which is an instance of the structure Orbit.\n\npert can be:\n\n:J0: Consider a Keplerian orbit.\n:J2: Consider the perturbation terms up to J2.\n\nIf pert is omitted, then it defaults to :J2.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.dRAAN",
    "page": "Library",
    "title": "SatelliteToolbox.dRAAN",
    "category": "function",
    "text": "function dRAAN(a::Number, e::Number, i::Number, pert::Symbol = :J2)\nfunction dRAAN(orb::Orbit, pert::Symbol = :J2)\n\nCompute the time-derivative of the right ascension of the ascending node [rad/s] of an orbit with semi-major axis a [m], eccentricity e, and inclination i [rad], using the perturbation terms specified by the symbol pert. The orbit can also be specified by orb, which is an instance of the structure Orbit.\n\npert can be:\n\n:J0: Consider a Keplerian orbit.\n:J2: Consider the perturbation terms up to J2.\n\nIf pert is omitted, then it defaults to :J2.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.dlegendre",
    "page": "Library",
    "title": "SatelliteToolbox.dlegendre",
    "category": "function",
    "text": "function dlegendre([N,] ϕ::Number, n_max::Number, ph_term::Bool = false)\n\nCompute the first-order derivative of the associated Legendre function P_n,m[cos(ϕ)] w.r.t. ϕ [rad]:\n\ndP_n,m[cos(ϕ)]\n--------------\n      dϕ\n\nThe maximum degree that will be computed is n_max.\n\nThe optional parameter N can be used to select the normalization. The following values are valid:\n\nVal{:full}: Compute the fully normalized associated Legendre function (see               legendre_fully_normalized).\nVal{:schmidt}: Compute the Schmidt quasi-normalized associated Legendre                  function (see legendre_schmidt_quasi_normalized).\nVal{:conv}: Compute the conventional associated Legendre function (see               dlegendre_conventional!).\n\nIf N is omitted, then the full normalization will be used (Val{:full}).\n\nIf ph_term is set to true, then the Condon-Shortley phase term (-1)ᵐ will be included. If ph_term is not present, then it defaults to false.\n\nReturns\n\nA matrix with the first-order derivative of the Legendre associated functions P_n,m[cos(ϕ)].\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.dlegendre!",
    "page": "Library",
    "title": "SatelliteToolbox.dlegendre!",
    "category": "function",
    "text": "function dlegendre!([N,] dP::AbstractMatrix, ϕ::Number, P::AbstractMatrix, ph_term::Bool = false)\n\nCompute the first-order derivative of the associated Legendre function P_n,m[x] w.r.t. ϕ [rad]:\n\ndP_n,m[cos(ϕ)]\n--------------\n      dϕ\n\nThe derivatives will be stored in the matrix dP. Hence, the maximum degree and order that will be computed are given by the dimensions of this matrix. Notice, however, that dP must be a square matrix.\n\nThis algorithm needs the matrix P with the associated Legendre function. This can be computed using the function legendre. Notice that this matrix must be computed using the same normalization (see N) as the one selected here.\n\nThe optional parameter N can be used to select the normalization. The following values are valid:\n\nVal{:full}: Compute the fully normalized associated Legendre function (see               dlegendre_fully_normalized!).\nVal{:schmidt}: Compute the Schmidt quasi-normalized associated Legendre                  function (see dlegendre_schmidt_quasi_normalized!).\nVal{:conv}: Compute the conventional associated Legendre function (see               dlegendre_conventional!).\n\nIf N is omitted, then the full normalization will be used (Val{:full}).\n\nIf ph_term is set to true, then the Condon-Shortley phase term (-1)ᵐ will be included. If ph_term is not present, then it defaults to false.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.dlegendre-Tuple{Number,Array{T,2} where T,Bool}",
    "page": "Library",
    "title": "SatelliteToolbox.dlegendre",
    "category": "method",
    "text": "function dlegendre([N,] ϕ::Number, P::Matrix, ph_term::Bool)\n\nCompute the first-order derivative of the associated Legendre function P_n,m[cos(ϕ)] w.r.t. ϕ [rad]:\n\ndP_n,m[cos(ϕ)]\n--------------\n      dϕ\n\nThis algorithm needs the matrix P with the associated Legendre function. This can be computed using the function legendre. The maximum order of the computed derivatives will be selected according to the dimensions of the matrix P. Notice that this matrix must be computed using the same normalization (see T) as the one selected here.\n\nThe optional parameter N can be used to select the normalization. The following values are valid:\n\nVal{:full}: Compute the fully normalized associated Legendre function (see               dlegendre_fully_normalized).\nVal{:schmidt}: Compute the Schmidt quasi-normalized associated Legendre                  function (see dlegendre_schmidt_quasi_normalized).\nVal{:conv}: Compute the conventional associated Legendre function (see               dlegendre_conventional!).\n\nIf N is omitted, then the full normalization will be used (Val{:full}).\n\nIf ph_term is set to true, then the Condon-Shortley phase term (-1)ᵐ will be included. If ph_term is not present, then it defaults to false.\n\nReturns\n\nA matrix with the first-order derivative of the Legendre associated functions P_n,m[cos(ϕ)].\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.dlegendre_conventional",
    "page": "Library",
    "title": "SatelliteToolbox.dlegendre_conventional",
    "category": "function",
    "text": "function dlegendre_conventional(ϕ::Number, n_max::Number, ph_term::Bool = false)\n\nCompute the first-order derivative of the conventional associated Legendre function P_n,m[cos(ϕ)] w.r.t. ϕ [rad]:\n\ndP_n,m[cos(ϕ)]\n--------------\n      dϕ\n\nThe maximum degree that will be computed is n_max.\n\nIf ph_term is set to true, then the Condon-Shortley phase term (-1)ᵐ will be included. If ph_term is not present, then it defaults to false.\n\nReturns\n\nA matrix with the first-order derivative of the Legendre associated functions P_n,m[cos(ϕ)].\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.dlegendre_conventional",
    "page": "Library",
    "title": "SatelliteToolbox.dlegendre_conventional",
    "category": "function",
    "text": "function dlegendre_conventional(ϕ::Number, P::AbstractMatrix, ph_term = false)\n\nCompute the first-order derivative of the conventional associated Legendre function P_n,m[cos(ϕ)] w.r.t. ϕ [rad]:\n\ndP_n,m[cos(ϕ)]\n--------------\n      dϕ\n\nThis algorithm needs the matrix P with the conventional associated Legendre function. This can be computed using the function legendre_schmidt_quasi_normalized. The maximum order of the computed derivatives will be selected according to the dimensions of the matrix P.\n\nIf ph_term is set to true, then the Condon-Shortley phase term (-1)ᵐ will be included. If ph_term is not present, then it defaults to false.\n\nReturns\n\nA matrix with the first-order derivative of the Legendre associated functions P_n,m[cos(ϕ)].\n\nRemarks\n\nThe user is responsible to pass a matrix P with the correct values. For example, if ph_term is true, then P must also be computed with ph_term set to true.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.dlegendre_conventional!",
    "page": "Library",
    "title": "SatelliteToolbox.dlegendre_conventional!",
    "category": "function",
    "text": "function dlegendre_conventional!(dP::AbstractMatrix, ϕ::Number, P::AbstractMatrix, ph_term::Bool = false)\n\nCompute the first-order derivative of the conventional associated Legendre function P_n,m[cos(ϕ)] w.r.t. ϕ [rad]:\n\ndP_n,m[cos(ϕ)]\n--------------\n      dϕ\n\nThe derivatives will be stored in the matrix dP. Hence, the maximum degree and order that will be computed are given by the dimensions of this matrix. Notice, however, that dP must be a square matrix.\n\nThis algorithm needs the matrix P with the conventional associated Legendre function. This can be computed using the function legendre_conventional.\n\nIf ph_term is set to true, then the Condon-Shortley phase term (-1)ᵐ will be included. If ph_term is not present, then it defaults to false.\n\nRemarks\n\nThe user is responsible to pass a matrix P with the correct values. For example, if ph_term is true, then P must also be computed with ph_term set to true.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.dlegendre_fully_normalized",
    "page": "Library",
    "title": "SatelliteToolbox.dlegendre_fully_normalized",
    "category": "function",
    "text": "function dlegendre_fully_normalized(ϕ::Number, n_max::Number, ph_term::Bool = false)\n\nCompute the first-order derivative of the Schmidt fully normalized associated Legendre function P_n,m[cos(ϕ)] w.r.t. ϕ [rad]:\n\ndP_n,m[cos(ϕ)]\n--------------\n      dϕ\n\nThe maximum degree that will be computed is n_max.\n\nIf ph_term is set to true, then the Condon-Shortley phase term (-1)ᵐ will be included. If ph_term is not present, then it defaults to false.\n\nReturns\n\nA matrix with the first-order derivative of the Legendre associated functions P_n,m[cos(ϕ)].\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.dlegendre_fully_normalized",
    "page": "Library",
    "title": "SatelliteToolbox.dlegendre_fully_normalized",
    "category": "function",
    "text": "function dlegendre_fully_normalized(ϕ::Number, P::AbstractMatrix, ph_term = false)\n\nCompute the first-order derivative of the Schmidt fully normalized associated Legendre function P_n,m[cos(ϕ)] w.r.t. ϕ [rad]:\n\ndP_n,m[cos(ϕ)]\n--------------\n      dϕ\n\nThis algorithm needs the matrix P with the Schmidt fully normalized associated Legendre function. This can be computed using the function legendre_fully_normalized. The maximum order of the computed derivatives will be selected according to the dimensions of the matrix P.\n\nIf ph_term is set to true, then the Condon-Shortley phase term (-1)ᵐ will be included. If ph_term is not present, then it defaults to false.\n\nReturns\n\nA matrix with the first-order derivative of the Legendre associated functions P_n,m[cos(ϕ)].\n\nRemarks\n\nThe user is responsible to pass a matrix P with the correct values. For example, if ph_term is true, then P must also be computed with ph_term set to true.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.dlegendre_fully_normalized!",
    "page": "Library",
    "title": "SatelliteToolbox.dlegendre_fully_normalized!",
    "category": "function",
    "text": "function dlegendre_fully_normalized!(dP::AbstractMatrix, ϕ::Number, P::AbstractMatrix, ph_term::Bool = false)\n\nCompute the first-order derivative of the fully normalized associated Legendre function P_n,m[cos(ϕ)] w.r.t. ϕ [rad]:\n\ndP_n,m[cos(ϕ)]\n--------------\n      dϕ\n\nThe derivatives will be stored in the matrix dP. Hence, the maximum degree and order that will be computed are given by the dimensions of this matrix. Notice, however, that dP must be a square matrix.\n\nThis algorithm needs the matrix P with the fully normalized associated Legendre function. This can be computed using the function legendre_fully_normalized.\n\nIf ph_term is set to true, then the Condon-Shortley phase term (-1)ᵐ will be included. If ph_term is not present, then it defaults to false.\n\nRemarks\n\nThe user is responsible to pass a matrix P with the correct values. For example, if ph_term is true, then P must also be computed with ph_term set to true.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.dlegendre_schmidt_quasi_normalized",
    "page": "Library",
    "title": "SatelliteToolbox.dlegendre_schmidt_quasi_normalized",
    "category": "function",
    "text": "function dlegendre_schmidt_quasi_normalized(ϕ::Number, n_max::Number, ph_term::Bool = false)\n\nCompute the first-order derivative of the Schmidt quasi-normalized associated Legendre function P_n,m[cos(ϕ)] w.r.t. ϕ [rad]:\n\ndP_n,m[cos(ϕ)]\n--------------\n      dϕ\n\nThe maximum degree that will be computed is n_max.\n\nIf ph_term is set to true, then the Condon-Shortley phase term (-1)ᵐ will be included. If ph_term is not present, then it defaults to false.\n\nReturns\n\nA matrix with the first-order derivative of the Legendre associated functions P_n,m[cos(ϕ)].\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.dlegendre_schmidt_quasi_normalized",
    "page": "Library",
    "title": "SatelliteToolbox.dlegendre_schmidt_quasi_normalized",
    "category": "function",
    "text": "function dlegendre_schmidt_quasi_normalized(ϕ::Number, P::AbstractMatrix, ph_term = false)\n\nCompute the first-order derivative of the Schmidt quasi-normalized associated Legendre function P_n,m[cos(ϕ)] w.r.t. ϕ [rad]:\n\ndP_n,m[cos(ϕ)]\n--------------\n      dϕ\n\nThis algorithm needs the matrix P with the Schmidt quasi-normalized associated Legendre function. This can be computed using the function legendre_schmidt_quasi_normalized. The maximum order of the computed derivatives will be selected according to the dimensions of the matrix P.\n\nIf ph_term is set to true, then the Condon-Shortley phase term (-1)ᵐ will be included. If ph_term is not present, then it defaults to false.\n\nReturns\n\nA matrix with the first-order derivative of the Legendre associated functions P_n,m[cos(ϕ)].\n\nRemarks\n\nThe user is responsible to pass a matrix P with the correct values. For example, if ph_term is true, then P must also be computed with ph_term set to true.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.dlegendre_schmidt_quasi_normalized!",
    "page": "Library",
    "title": "SatelliteToolbox.dlegendre_schmidt_quasi_normalized!",
    "category": "function",
    "text": "function dlegendre_schmidt_quasi_normalized!(dP::AbstractMatrix, ϕ::Number, P::AbstractMatrix, ph_term::Bool = false)\n\nCompute the first-order derivative of the Schmidt quasi-normalized associated Legendre function P_n,m[cos(ϕ)] w.r.t. ϕ [rad]:\n\ndP_n,m[cos(ϕ)]\n--------------\n      dϕ\n\nThe derivatives will be stored in the matrix dP. Hence, the maximum degree and order that will be computed are given by the dimensions of this matrix. Notice, however, that dP must be a square matrix.\n\nThis algorithm needs the matrix P with the Schmidt quasi-normalized associated Legendre function. This can be computed using the function legendre_schmidt_quasi_normalized.\n\nIf ph_term is set to true, then the Condon-Shortley phase term (-1)ᵐ will be included. If ph_term is not present, then it defaults to false.\n\nRemarks\n\nThe user is responsible to pass a matrix P with the correct values. For example, if ph_term is true, then P must also be computed with ph_term set to true.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.dsinit-Union{Tuple{T}, NTuple{11,T}} where T<:Number",
    "page": "Library",
    "title": "SatelliteToolbox.dsinit",
    "category": "method",
    "text": "function dsinit(epoch::T, nll_0::T, all_0::T, e_0::T, i_0::T, Ω_0::T, ω_0::T, M_0::T, dotM::T, dotω::T, dotΩ::T) where T<:Number\n\nInitialize the deep space structure. This function performs the initial computations and save the values at an instance of the structure SGP4_DeepSpace. Those will be used when calling the functions dsper! and dpsec!.\n\nArgs\n\nepoch: Epoch of the initial orbit [Julian Day].\nnll_0: Initial mean motion [rad/min].\nall_0: Initial semi-major axis [ER].\ne_0: Initial eccentricity.\ni_0: Initial inclination [rad].\nΩ_0: Initial right ascencion of the ascending node [rad].\nω_0: Initial argument of perigee [rad].\nM_0: Initial mean motion [rad].\ndotM: Time-derivative of the mean motion [rad/min].\ndotω: Time-derivative of the argument of perigee [rad/min].\ndotΩ: Time-derivative of the RAAN [rad/min].\n\nReturns\n\nAn instance of the structure SGP4_DeepSpace with the initalized values.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.dsper!-Union{Tuple{T}, Tuple{SGP4_DeepSpace{T},T,T,T,T,T,Number}} where T<:Number",
    "page": "Library",
    "title": "SatelliteToolbox.dsper!",
    "category": "method",
    "text": "function dsper!(sgp4_ds::SGP4_DeepSpace{T}, e_k::T, i_k::T, Ω_k::T, ω_k::T, M_k::T, Δt:Number) where T<:Number\n\nCompute the effects caused by Lunar-Solar periodics.\n\nNotice that the values in the structure sgp4_ds will be modified.\n\nArgs\n\nsgp4_ds: Deep space structure (see SGP4_DeepSpace).\ne_k: Current eccentricity.\ni_k: Current inclination [rad].\nΩ_k: Current right ascension of the ascending node [rad].\nω_k: Current argument of perigee [rad].\nM_k: Current mean anomaly [rad].\nΔt: Time interval since the epoch [min].\n\nReturns\n\nThe following elements perturbed by lunar-solar periodics.\n\nEccentricity.\nInclination [rad].\nRight ascension of the ascending node [rad].\nArgument of perigee [rad].\nMean anomaly [rad].\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.dssec!-Union{Tuple{T}, Tuple{SGP4_DeepSpace{T},T,T,T,T,T,T,T,T,Number}} where T<:Number",
    "page": "Library",
    "title": "SatelliteToolbox.dssec!",
    "category": "method",
    "text": "function dssec!(sgp4_ds::SGP4_DeepSpace{T}, nll_0::T, e_0::T, i_0::T, ω_0::T, Ω_k::T, ω_k::T, M_k::T, dotω::T, Δt::Number) where T<:Number\n\nCompute the secular effects.\n\nNotice that the values in the structure sgp4_ds will be modified.\n\nArgs\n\nsgp4_ds: Deep space structure (see SGP4_DeepSpace).\nnll_0: Initial mean motion [rad/min].\ne_0: Initial eccentricity.\ni_0: Initial inclination [rad].\nω_0: Initial argument of perigee [rad].\nΩ_k: Current right ascension of the ascending node [rad].\nω_k: Current argument of perigee [rad].\nM_k: Current mean anomaly [rad].\ndotω: Time-derivative of the argument of perigee [rad/min].\nΔt: Time interval since the epoch [min].\n\nReturns\n\nThe following elements perturbed by the secular effects:\n\nMean motion [rad/min].\nEccentricity.\nInclination [rad].\nRight ascension of the ascending node [rad].\nArgument of perigee [rad].\nMean anomaly [rad].\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.equation_of_time-Tuple{Number}",
    "page": "Library",
    "title": "SatelliteToolbox.equation_of_time",
    "category": "method",
    "text": "function equation_of_time(JD::Number)\n\nCompute the difference between the Sun apparent local time and the Sun mean local time [rad], which is called Equation of Time, at the Julian Day JD. The algorithm was adapted from [1, p. 178, 277-279].\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.expatmosphere-Tuple{Number}",
    "page": "Library",
    "title": "SatelliteToolbox.expatmosphere",
    "category": "method",
    "text": "function expatmosphere(h::Number)\n\nCompute the atmospheric density [kg/m³] at the altitude h [m] (above the ellipsoid) using the exponential atmospheric model:\n\n                ┌            ┐\n                │    h - h₀  │\nρ(h) = ρ₀ ⋅ exp │ - ──────── │ ,\n                │      H     │\n                └            ┘\n\nin which ρ₀, h₀, and H are parameters obtained from tables that depend only on h.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.f_to_E-Tuple{Number,Number}",
    "page": "Library",
    "title": "SatelliteToolbox.f_to_E",
    "category": "method",
    "text": "function f_to_E(e::Number,f::Number)\n\nCompute the eccentric anomaly (0,2π) [rad] given the eccentricity e and the true anomaly f [rad].\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.f_to_E-Tuple{Orbit}",
    "page": "Library",
    "title": "SatelliteToolbox.f_to_E",
    "category": "method",
    "text": "function f_to_E(orb::Orbit)\n\nCompute the eccentric anomaly (0,2π) [rad] given the orbit orb (see Orbit).\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.f_to_M-Tuple{Number,Number}",
    "page": "Library",
    "title": "SatelliteToolbox.f_to_M",
    "category": "method",
    "text": "function f_to_M(e::Number, f::Number)\n\nCompute the mean anomaly (0,2π) [rad] given the eccentricity e and the true anomaly f [rad].\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.f_to_M-Tuple{Orbit}",
    "page": "Library",
    "title": "SatelliteToolbox.f_to_M",
    "category": "method",
    "text": "function f_to_M(orb::Orbit)\n\nCompute the mean anomaly (0,2π) [rad] given the orbit orb (see Orbit).\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.get_Ap-Tuple{Number}",
    "page": "Library",
    "title": "SatelliteToolbox.get_Ap",
    "category": "method",
    "text": "function get_Ap(JD::Number; mean::Tuple{Int} = (), daily = false)\n\nReturn the Ap index.\n\nIf mean is a tuple of two integers (hi, hf), then the average between hi and hf previous hours will be computed.\n\nIf mean is empty and daily is true, then the day average will be computed.\n\nIf mean keyword is empty, and daily keyword is false, then the Ap at Julian day JD will be computed.\n\nBy default, mean is empty and daily is false.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.get_DstΔTc-Tuple{Number}",
    "page": "Library",
    "title": "SatelliteToolbox.get_DstΔTc",
    "category": "method",
    "text": "get_DstΔTc(JD::Number)\n\nGet the value of the index DstΔTc at Julian Day JD.\n\nThis function requires the initialization of the variable _dtcfile_data. Otherwise, an exception will be raised. To initialize it, run init_space_indices().\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.get_F10-Tuple{Number}",
    "page": "Library",
    "title": "SatelliteToolbox.get_F10",
    "category": "method",
    "text": "get_F10(JD::Number)\n\nGet the value of the index F10 at Julian Day JD.\n\nThis function requires the initialization of the variable _solfsmy_data. Otherwise, an exception will be raised. To initialize it, run init_space_indices().\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.get_F81a-Tuple{Number}",
    "page": "Library",
    "title": "SatelliteToolbox.get_F81a",
    "category": "method",
    "text": "get_F81a(JD::Number)\n\nGet the value of the index F81a at Julian Day JD.\n\nThis function requires the initialization of the variable _solfsmy_data. Otherwise, an exception will be raised. To initialize it, run init_space_indices().\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.get_Kp-Tuple{Number}",
    "page": "Library",
    "title": "SatelliteToolbox.get_Kp",
    "category": "method",
    "text": "function get_Kp(JD::Number)\n\nReturn the Kp index at Julian Day JD.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.get_M10-Tuple{Number}",
    "page": "Library",
    "title": "SatelliteToolbox.get_M10",
    "category": "method",
    "text": "get_M10(JD::Number)\n\nGet the value of the index M10 at Julian Day JD.\n\nThis function requires the initialization of the variable _solfsmy_data. Otherwise, an exception will be raised. To initialize it, run init_space_indices().\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.get_M81a-Tuple{Number}",
    "page": "Library",
    "title": "SatelliteToolbox.get_M81a",
    "category": "method",
    "text": "get_M81a(JD::Number)\n\nGet the value of the index M81a at Julian Day JD.\n\nThis function requires the initialization of the variable _solfsmy_data. Otherwise, an exception will be raised. To initialize it, run init_space_indices().\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.get_S10-Tuple{Number}",
    "page": "Library",
    "title": "SatelliteToolbox.get_S10",
    "category": "method",
    "text": "get_S10(JD::Number)\n\nGet the value of the index S10 at Julian Day JD.\n\nThis function requires the initialization of the variable _solfsmy_data. Otherwise, an exception will be raised. To initialize it, run init_space_indices().\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.get_S81a-Tuple{Number}",
    "page": "Library",
    "title": "SatelliteToolbox.get_S81a",
    "category": "method",
    "text": "get_S81a(JD::Number)\n\nGet the value of the index S81a at Julian Day JD.\n\nThis function requires the initialization of the variable _solfsmy_data. Otherwise, an exception will be raised. To initialize it, run init_space_indices().\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.get_Y10-Tuple{Number}",
    "page": "Library",
    "title": "SatelliteToolbox.get_Y10",
    "category": "method",
    "text": "get_Y10(JD::Number)\n\nGet the value of the index Y10 at Julian Day JD.\n\nThis function requires the initialization of the variable _solfsmy_data. Otherwise, an exception will be raised. To initialize it, run init_space_indices().\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.get_Y81a-Tuple{Number}",
    "page": "Library",
    "title": "SatelliteToolbox.get_Y81a",
    "category": "method",
    "text": "get_Y81a(JD::Number)\n\nGet the value of the index Y81a at Julian Day JD.\n\nThis function requires the initialization of the variable _solfsmy_data. Otherwise, an exception will be raised. To initialize it, run init_space_indices().\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.get_iers_eop",
    "page": "Library",
    "title": "SatelliteToolbox.get_iers_eop",
    "category": "function",
    "text": "function get_iers_eop(data_type::Symbol = :IAU1980; force_download = false)\n\nDownload and parse the IERS EOP C04 data. The data type is specified by data_type symbol. Supported values are:\n\nIAU1980: Get IERS EOP C04 IAU1980 data.\nIAU2000A: Get IERS EOP C04 IAU2000A data.\n\nIf data_type is omitted, then it defaults to IAU1980.\n\nThe files are downloaded using the RemoteFile package with daily updates. Hence, if one desires to force a download before the scheduled time, then set the keyword force_download to true.\n\nReturns\n\nA structure (EOPData_IAU1980 or EOPData_IAU2000A, depending on data_type) with the interpolations of the EOP parameters. Notice that the interpolation indexing is set to the Julian Day.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.get_iers_eop_iau_1980",
    "page": "Library",
    "title": "SatelliteToolbox.get_iers_eop_iau_1980",
    "category": "function",
    "text": "function get_iers_eop_iau_1980(url::String = \"https://datacenter.iers.org/data/latestVersion/223_EOP_C04_14.62-NOW.IAU1980223.txt\")\n\nGet the IERS EOP C04 IAU1980 data from the URL url. If url is omitted, then it defaults to https://datacenter.iers.org/data/latestVersion/223EOPC04_14.62-NOW.IAU1980223.txt\n\nThe file is downloaded using the RemoteFile package with daily updates. Hence, if one desires to force a download before the scheduled time, then set the keyword force_download to true.\n\nReturns\n\nThe structure EOPData_IAU1980 with the interpolations of the EOP parameters. Notice that the interpolation indexing is set to the Julian Day.\n\nRemarks\n\nFor every field in EOPData_IAU1980 to interpolation between two points in the grid is linear. If extrapolation is needed, then if will use the nearest value (flat extrapolation).\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.get_iers_eop_iau_2000A",
    "page": "Library",
    "title": "SatelliteToolbox.get_iers_eop_iau_2000A",
    "category": "function",
    "text": "function get_iers_eop_iau_2000A(url::String = \"https://datacenter.iers.org/data/latestVersion/224_EOP_C04_14.62-NOW.IAU2000A224.txt\"; force_download = false)\n\nGet the IERS EOP C04 IAU2000A data from the URL url. If url is omitted, then it defaults to https://datacenter.iers.org/data/latestVersion/224EOPC04_14.62-NOW.IAU2000A224.txt\n\nThe file is downloaded using the RemoteFile package with daily updates. Hence, if one desires to force a download before the scheduled time, then set the keyword force_download to true.\n\nReturns\n\nThe structure EOPData_IAU2000A with the interpolations of the EOP parameters. Notice that the interpolation indexing is set to the Julian Day.\n\nRemarks\n\nFor every field in EOPData_IAU2000A to interpolation between two points in the grid is linear. If extrapolation is needed, then if will use the nearest value (flat extrapolation).\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.get_space_index-Tuple{Type{Val{:F10}},Number}",
    "page": "Library",
    "title": "SatelliteToolbox.get_space_index",
    "category": "method",
    "text": "function get_space_index(T, JD::Number; ...)\n\nReturn the space index T at the day JD [Julian Day]. T can be:\n\nDaily 10.7-cm solar flux\n\nThe daily 10.7-cm solar flux can be obtained using:\n\nF10(): 10.7-cm adjusted solar flux [10⁻²² W/(M² Hz)].\nF10adj(): 10.7-cm adjusted solar flux [10⁻²² W/(M² Hz)].\nF10obs(): 10.7-cm observed solar flux [10⁻²² W/(M² Hz)].\n\nThese indices require fluxtable (see init_space_indices).\n\nDaily average 10.7-cm solar flux\n\nThe daily average 10.7-cm solar flux, centered at JD, can be obtained using:\n\nF10M(): 10.7-cm adjusted solar flux [10⁻²² W/(M² Hz)].\nF10Madj(): 10.7-cm adjusted solar flux [10⁻²² W/(M² Hz)].\nF10Mobs(): 10.7-cm observed solar flux [10⁻²² W/(M² Hz)].\n\nIn this case, the keyword window::Int can be passed to select the size of the window. By default, it is selected as 81.\n\nThese indices require fluxtable (see init_space_indices).\n\nDaily Kp and Ap\n\nKp(): Kp index (daily mean).\nKp_vect(): A vector containing the Kp index for the following hours of the              day: 0-3h, 3-6h, 6-9h, 9-12h, 12-15h, 15-18h, 18-20h, 20-23h.\nAp(): Ap index (daily mean).\nAp_vect(): A vector containing the Ap index for the following hours of the              day: 0-3h, 3-6h, 6-9h, 9-12h, 12-15h, 15-18h, 18-20h, 20-23h.\n\nThese indices require wdcfiles (see init_space_indices).\n\nDaily S10, M10, and Y10\n\nS10(): EUV index (26-34 nm) scaled to F10.7.\nM10(): MG2 index scaled to F10.7.\nY10(): Solar X-ray & Lya index scaled to F10.7.\n\nThese indices require solfsmy (see init_space_indices).\n\n81-day centered average of S10, M10, and Y10.\n\nS81a: EUV 81-day averaged centered index.\nM81a: MG2 81-day averaged centered index.\nY81a: Solar X-ray & Lya 81-day averaged centered index.\n\nThese indices require solfsmy (see init_space_indices).\n\nExospheric temperature variation due to Dst\n\nDstΔTc: Exospheric temperature variation due to Dst [K].\n\nThis index requires dtcfile (see init_space_indices).\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.get_ΔAT-Tuple{Number}",
    "page": "Library",
    "title": "SatelliteToolbox.get_ΔAT",
    "category": "method",
    "text": "function get_ΔAT(JD::Number)\n\nGet the accumulated leap seconds (ΔAT) [s] between UTC and International Atomic Time (TAI) in the given JD. This function search for ΔAT in the array ΔAT_Data.\n\nRemarks\n\nIf JD is before ΔAT_Data[1,1], then 10 will be returned. Notice that this can lead to errors.\n\nIf JD is after ΔAT_Data[end,1], then ΔAT_Data[end,2] will be returned, because it is not possible yet to predict when leap seconds will be added.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.gtd7-Union{Tuple{NRLMSISE00_Structure{T}}, Tuple{T}} where T<:Number",
    "page": "Library",
    "title": "SatelliteToolbox.gtd7",
    "category": "method",
    "text": "function gtd7(nrlmsise00d::NRLMSISE00_Structure{T}) where T<:Number\n\nNRLMSISE-00\n\nNeutral Atmosphere Empirical Model from the surface to lower exosphere.\n\nThis routine computes the NRLMSISE-00 outputs (see NRLMSISE00_Output) using the configurations in the structure nrlmsise00 (see NRLMSISE00_Structure).\n\nArgs\n\nnrlmsise00d: An instance of NRLMSISE00_Structure.\n\nReturns\n\nAn instance of structure NRLMSISE00_Output with the outputs.\n\nIn this case, the total mass den_Total (see NRLMSISE00_Output) is the sum of the mass densities of the species He, O, N₂, O₂, Ar, H, and N, but does not include anomalous oxygen.\n\nRemarks\n\nThe densities of O, H, and N are set to 0 below 72.5 km.\nThe exospheric temperature T_exo is set to global average for altitudes below 120 km. The 120 km gradient is left at global average value for altitudes below 72.5 km.\nAnomalous oxygen is defined as hot atomic oxygen or ionized oxygen that can become appreciable at high altitudes (> 500 km) for some ranges of inputs, thereby affection drag on satellites and debris. We group these species under the term Anomalous Oxygen, since their individual variations are not presently separable with the drag data used to define this model component.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.gtd7d-Union{Tuple{NRLMSISE00_Structure{T}}, Tuple{T}} where T<:Number",
    "page": "Library",
    "title": "SatelliteToolbox.gtd7d",
    "category": "method",
    "text": "function gtd7d(nrlmsise00d::NRLMSISE00_Structure{T}) where T<:Number\n\nNRLMSISE-00\n\nNeutral Atmosphere Empirical Model from the surface to lower exosphere.\n\nThis routine computes the NRLMSISE-00 outputs (see NRLMSISE00_Output) using the configurations in the structure nrlmsise00 (see NRLMSISE00_Structure).\n\nArgs\n\nnrlmsise00d: An instance of NRLMSISE00_Structure.\n\nReturns\n\nAn instance of structure NRLMSISE00_Output with the outputs.\n\nIn this case, the total mass den_Total (see NRLMSISE00_Output) is the effective total mass density for drag and is the sum of the mass densities of all species in this model including the anomalous oxygen.\n\nRemarks\n\nThe densities of O, H, and N are set to 0 below 72.5 km.\nThe exospheric temperature T_exo is set to global average for altitudes below 120 km. The 120 km gradient is left at global average value for altitudes below 72.5 km.\nAnomalous oxygen is defined as hot atomic oxygen or ionized oxygen that can become appreciable at high altitudes (> 500 km) for some ranges of inputs, thereby affection drag on satellites and debris. We group these species under the term Anomalous Oxygen, since their individual variations are not presently separable with the drag data used to define this model component.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.igrf12-NTuple{4,Number}",
    "page": "Library",
    "title": "SatelliteToolbox.igrf12",
    "category": "method",
    "text": "function igrf12(date::Number, r::Number, λ::Number, Ω::Number, T; show_warns = true)\n\nIGRF v12 Model\n\nCompute the geomagnetic field vector [nT] at the date date [Year A.D.] and position (r, λ, Ω).\n\nThe position representation is defined by T. If T is Val{:geocentric}, then the input must be geocentric coordinates:\n\nDistance from the Earth center r [m];\nGeocentric latitude λ (-π/2, +π/2) [rad]; and\nGeocentric longitude Ω (-π, +π) [rad].\n\nIf T is Val{:geodetic}, then the input must be geodetic coordinates:\n\nAltitude above the reference ellipsoid h (WGS-84) [m];\nGeodetic latitude λ (-π/2, +π/2) [rad]; and\nGeodetic longitude Ω (-π, +π) [rad].\n\nIf T is omitted, then it defaults to Val{:geocentric}.\n\nNotice that the output vector will be represented in the same reference system selected by the parameter T (geocentric or geodetic). The Y-axis of the output reference system always points East. In case of geocentric coordinates, the Z-axis points toward the center of Earth and the X-axis completes a right-handed coordinate system. In case of geodetic coordinates, the X-axis is tangent to the ellipsoid at the selected location and points toward North, whereas the Z-axis completes a right-hand coordinate system.\n\nKeywords\n\nshow_warns: Show warnings about the data (Default = true).\n\nRemarks\n\nThe date must be greater or equal to 1900 and less than or equal 2025. Notice that a warning message is printed for dates greater than 2020.\n\nDisclaimer\n\nThis function is an independent implementation of the IGRF model. It contains a more readable code than the original one in FORTRAN, because it uses features available in Julia language.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.igrf12syn-Tuple{Int64,Number,Int64,Number,Number,Number}",
    "page": "Library",
    "title": "SatelliteToolbox.igrf12syn",
    "category": "method",
    "text": "function igrf12syn(isv::Int, date::Number, itype::Int, alt::Number, colat::Number, elong::Number; show_warns = true)\n\nThis is a Julia implementation of the official IGRF source code, which was written in Fortran [2]. The input and output variables are exactly the same as the ones described in the function igrf12syn in [2].\n\nArgs\n\nisv: 0 if main-field values are required, 1 if secular variation values        are required.\ndate: Year A.D.\nitype: 1 if geodetic (spheroid), 2 if geocentric (sphere).\nalt: Height above sea level [km] if itype = 1, or distance from the center of        Earth [km] if itype = 2 (must be > 3485 km).\ncolat: Colatitude (0 - 180) [˚].\nelong: East-Longitude (0 - 360) [˚].\n\nKeywords\n\nshow_warns: Show warnings about the data (Default = true).\n\nReturns\n\nThe north component [nT] if isv = 0, or [nT/year] if isv = 1.\nThe east component [nT] if isv = 0, or [nT/year] if isv = 1.\nThe vertical component [nT] if isv = 0, or [nT/year] if isv = 1.\nThe total intensity if isv = 0, or rubbish if isv = 1.\n\nRemarks\n\nThe date must be greater or equal to 1900 and less than or equal 2025.\n\nNotice that a warning message is printed for dates grated than 2020.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.init_orbit_propagator",
    "page": "Library",
    "title": "SatelliteToolbox.init_orbit_propagator",
    "category": "function",
    "text": "function init_orbit_propagator(orbp_type::Type{Val{:J2}}, orb_0::Orbit, dn_o2::Number = 0, ddn_o6::Number = 0, j2_gc::J2_GravCte = j2_gc_wgs84)\nfunction init_orbit_propagator(orbp_type::Type{Val{:sgp4}}, orb_0::Orbit, bstar::Number = 0, sgp4_gc::SGP4_GravCte = sgp4_gc_wgs84)\nfunction init_orbit_propagator(orbp_type::Type{Val{:twobody}}, orb_0::Orbit, μ::Number = m0)\n\nInitialize the orbit propagator orbp_type, which can be:\n\nVal{:J2}: J2 orbit propagator;\nVal{:sgp4}: SGP4 orbit propagator; or\nVal{:twobody}: Two-body orbit propagator.\n\nArgs\n\norb_0: Initial orbital elements (see Orbit).\n\nJ2 orbit propagator\n\ndn_o2: (OPTIONAL) First time derivative of mean motion divided by 2 [rad/s²]          (Default = 0).\nddn_o6: (OPTIONAL) Second time derivative of mean motion divided by 6           [rad/s³] (Default = 0).\nj2_gc: (OPTIONAL) J2 orbit propagator gravitational constants (Default =          j2_gc_wgs84).\n\nSGP4 orbit propagator\n\nbstar: (OPTIONAL) B* parameter of the SGP4 (Default = 0).\nsgp4_gc: (OPTIONAL) Gravitational constants (Default = sgp4_gc_wgs84).\n\nTwo-body orbit propagator\n\nμ: (OPTIONAL) Standard gravitational parameter of the central body [m^3/s^2]      (Default = m0).\n\nReturns\n\nA new instance of the orbit propagator structure that stores the information of the orbit propagator.\n\nRemarks\n\nSGP4 Orbit Propagator\n\nNotice that the orbit elements specified in orb_0 must be represented in TEME frame.\n\nThis implementation includes also the deep space perturbations, which was originally called SDP4 algorithm. Modern approaches, such as [2] and [3], identifies if the selected orbit must be propagated using the deep space perturbations and automatically applied them. This is sometimes called SGDP4 algorithm.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.init_orbit_propagator",
    "page": "Library",
    "title": "SatelliteToolbox.init_orbit_propagator",
    "category": "function",
    "text": "function init_orbit_propagator(orbp_type::Type{Val{:J2}}, tle::TLE, j2_gc::J2_GravCte = j2_gc_wgs84)\nfunction init_orbit_propagator(orbp_type::Type{Val{:sgp4}}, tle::TLE, sgp4_gc::SGP4_Structure = sgp4_gc_wgs84)\nfunction init_orbit_propagator(orbp_type::Type{Val{:twobody}}, tle::TLE, μ::Number = m0)\n\nInitialize the orbit propagator orbp_type, which can be:\n\nVal{:J2}: J2 orbit propagator;\nVal{:sgp4}: SGP4 orbit propagator; or\nVal{:twobody}: Two-body orbit propagator.\n\nArgs\n\ntle: TLE that will be used to initialize the propagator.\n\nJ2 orbit propagator\n\nj2_gc: (OPTIONAL) J2 orbit propagator gravitational constants (Default =          j2_gc_wgs84).\n\nSGP4 orbit propagator\n\nsgp4_gc: (OPTIONAL) Gravitational constants (Default = sgp4_gc_wgs84).\n\nTwo-body orbit propagator\n\nμ: (OPTIONAL) Standard gravitational parameter of the central body [m^3/s^2]      (Default = m0).\n\nReturns\n\nA new instance of the orbit propagator structure that stores the information of the orbit propagator.\n\nRemarks\n\nSGP4 Orbit Propagator\n\nThis implementation includes also the deep space perturbations, which was originally called SDP4 algorithm. Modern approaches, such as [2] and [3], identifies if the selected orbit must be propagated using the deep space perturbations and automatically applied them. This is sometimes called SGDP4 algorithm.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.init_orbit_propagator-Union{Tuple{T}, Tuple{Type{Val{:J2}},Number,Number,Number,Number,Number,Number,Number}, Tuple{Type{Val{:J2}},Number,Number,Number,Number,Number,Number,Number,Number}, Tuple{Type{Val{:J2}},Number,Number,Number,Number,Number,Number,Number,Number,Number}, Tuple{Type{Val{:J2}},Number,Number,Number,Number,Number,Number,Number,Number,Number,J2_GravCte{T}}} where T",
    "page": "Library",
    "title": "SatelliteToolbox.init_orbit_propagator",
    "category": "method",
    "text": "function init_orbit_propagator(orbp_type::Type{Val{:J2}}, epoch::Number, n_0::Number, e_0::Number, i_0::Number, Ω_0::Number, ω_0::Number, M_0::Number, dn_o2::Number = 0, ddn_o6::Number = 0, j2_gc::J2_GravCte{T} = j2_gc_wgs84) where T\nfunction init_orbit_propagator(orbp_type::Type{Val{:sgp4}}, epoch::Number, n_0::Number, e_0::Number, i_0::Number, Ω_0::Number, ω_0::Number, M_0::Number, bstar::Number = 0, sgp4_gc::SGP4_GravCte{T} = sgp4_gc_wgs84) where T\nfunction init_orbit_propagator(orbp_type::Type{Val{:twobody}}, epoch::Number, n_0::Number, e_0::Number, i_0::Number, Ω_0::Number, ω_0::Number, M_0::Number, μ::T = m0) where T\n\nInitialize the orbit propagator orbp_type, which can be:\n\nVal{:J2}: J2 orbit propagator;\nVal{:sgp4}: SGP4 orbit propagator; or\nVal{:twobody}: Two-body orbit propagator.\n\nArgs\n\nepoch: Initial orbit epoch [Julian Day].\nn_0: Initial angular velocity [rad/s].\ne_0: Initial eccentricity.\ni_0: Initial inclination [rad].\nΩ_0: Initial right ascension of the ascending node [rad].\nω_0: Initial argument of perigee [rad].\nM_0: Initial mean anomaly [rad].\n\nJ2 orbit propagator\n\ndn_o2: (OPTIONAL) First time derivative of mean motion divided by 2 [rad/s²]          (Default = 0).\nddn_o6: (OPTIONAL) Second time derivative of mean motion divided by 6 [rad/s³]           (Default = 0).\nj2_gc: (OPTIONAL) J2 orbit propagator gravitational constants (Default =          j2_gc_wgs84).\n\nSGP4 orbit propagator\n\nbstar: (OPTIONAL) Initial B* parameter of the SGP4 (Default = 0).\nsgp4_gc: (OPTIONAL) Gravitational constants (Default = sgp4_gc_wgs84).\n\nTwo-body orbit propagator\n\nμ: (OPTIONAL) Standard gravitational parameter of the central body [m^3/s^2]      (Default = m0).\n\nReturns\n\nA new instance of the orbit propagator structure that stores the information of the orbit propagator.\n\nRemarks\n\nSGP4 Orbit Propagator\n\nNotice that the orbit elements must be represented in TEME frame.\n\nThis implementation includes also the deep space perturbations, which was originally called SDP4 algorithm. Modern approaches, such as [2] and [3], identifies if the selected orbit must be propagated using the deep space perturbations and automatically applied them. This is sometimes called SGDP4 algorithm.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.init_space_indices-Tuple{}",
    "page": "Library",
    "title": "SatelliteToolbox.init_space_indices",
    "category": "method",
    "text": "function init_space_indices(...)\n\nInitialize all space indices. The files that will be initialized must be indicated by the array of symbols passed to the keyword argument enabled_files. If this is nothing, which is the default, then all files will be initialized. The symbol related to each file is described next.\n\nNotice that the initialization process can be changed by a set of keywords as described next.\n\nDTCFILE\n\nSymbol: :dtcfile\n\nThis file contains the exospheric temperature variation caused by the Dst index. This is used for the JB2008 atmospheric model.\n\nKeywords\n\ndtcfile_path: Path for the file DTCFILE.TXT. If nothing, then it will be                 downloaded. (Default = nothing)\ndtcfile_force_download: If true, then the file will always be downloaded                           if the path is not specified. (Default =                           false).\n\nfluxtable\n\nSymbol: :fluxtable\n\nThis file contains the F10.7 flux data in different formats.\n\nKeywords\n\nfluxtable_path: Path for the file fluxtable.txt. If nothing, then it                   will be downloaded. (Default = nothing)\nfluxtable_force_download: If true, then the file will always be downloaded                             if the path is not specified.                             (Default = false).\n\nSOLFSMY\n\nSymbol: :solfsmy\n\nThis files contains the indices necessary for the JB2008 atmospheric model.\n\nKeywords\n\nsolfsmy_path: Path for the file SOLFSMY.TXT. If nothing, then it will be                 downloaded. (Default = nothing)\nsolfsmy_force_download: If true, then the file will always be downloaded                           if the path is not specified. (Default =                           false).\n\nWDC Files\n\nSymbol: :wdcfiles\n\nThis set of files contain the Kp and Ap indices.\n\nKeywords\n\nwdcfiles_path: Path for the directory with the WDC files. If nothing, then                  they will be downloaded. (Default = nothing)\nwdcfiles_force_download: If true, then the files will always be downloaded                           if the path is not specified. (Default =                           false).\nwdcfiles_oldest_year: Oldest year in which the WDC file will be obtained.                         (Default = past 3 years).\nwdcfiles_newest_year: Newest year in which the WDC file will be obtained. If                         it is nothing, then it defaults to the current year.                         (Default = nothing).\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.is_leap_year-Tuple{Int64}",
    "page": "Library",
    "title": "SatelliteToolbox.is_leap_year",
    "category": "method",
    "text": "function is_leap_year(year::Int)\n\nCheck if the year year is a leap year. It returns true if year is a leap year, or false otherwise.\n\nRemarks\n\nThis algorithm was based on [3].\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.j2!-Union{Tuple{T}, Tuple{J2_Structure{T},Number}} where T",
    "page": "Library",
    "title": "SatelliteToolbox.j2!",
    "category": "method",
    "text": "function j2!(j2d::J2_Structure{T}, t::Number) where T\n\nPropagate the orbit defined in j2d (see J2_Structure) until the time t [s]. Notice that the values in j2d will be modified.\n\nReturns\n\nThe position vector represented in the inertial frame at time t [m].\nThe velocity vector represented in the inertial frame at time t [m/s]\n\nRemarks\n\nThe inertial frame in which the output is represented depends on which frame it was used to generate the orbit parameters. If the orbit parameters are obtained from a TLE, then the inertial frame will be TEME. Notice, however, that the perturbation theory requires an inertial frame with true equator.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.j2_init-Union{Tuple{T}, Tuple{J2_GravCte{T},Number,Number,Number,Number,Number,Number,Number,Number,Number}} where T",
    "page": "Library",
    "title": "SatelliteToolbox.j2_init",
    "category": "method",
    "text": "function j2_init(j2_gc::J2_GravCte{T}, epoch::Number, n_0::Number, e_0::Number, i_0::Number, Ω_0::Number, ω_0::Number, M_0::Number, dn_o2::Number, ddn_o6::Number) where T\n\nInitialize the data structure of J2 orbit propagator algorithm.\n\nArgs\n\nj2_gc: J2 orbit propagator gravitational constants (see J2_GravCte).\nepoch: Epoch of the orbital elements [Julian Day].\nn_0: Mean motion at epoch [rad/s].\ne_0: Initial eccentricity.\ni_0: Initial inclination [rad].\nΩ_0: Initial right ascension of the ascending node [rad].\nω_0: Initial argument of perigee [rad].\nM_0: Initial mean anomaly [rad].\ndn_o2: First time derivative of the mean motion divided by two [rad/s^2].\nddn_o6: Second time derivative of the mean motion divided by six [rad/s^3].\n\nReturns\n\nThe structure J2_Structure with the initialized parameters.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.jb2008-NTuple{4,Number}",
    "page": "Library",
    "title": "SatelliteToolbox.jb2008",
    "category": "method",
    "text": "function jb2008(JD::Number, glat::Number, glon::Number, h::Number)\nfunction jb2008(JD::Number, glat::Number, glon::Number, h::Number, F10::Number, F10ₐ::Number, S10::Number, S10ₐ::Number, M10::Number, M10ₐ::Number, Y10::Number, Y10ₐ::Number, DstΔTc::Number)\n\nCompute the atmospheric density using the Jacchia-Bowman 2008 (JB2008) model.\n\nIf the space indices are not provided (first call), then they will be obtained from the online database. In this case, the function init_space_indices() must be called first and the function will throw an exception if the selected JD is outside of the available data.\n\nThis model is a product of the Space Environment Technologies, more information can be seen in the websites:\n\nhttp://sol.spacenvironment.net/jb2006/\n\nhttp://sol.spacenvironment.net/jb2008/\n\nArgs\n\nJD: Julian day.\nglat: Geocentric latitude [rad].\nglon: Geocentric longitude [rad].\nh: Altitude [m].\nF10: 10.7-cm solar flux [10⁻²² W/(M² Hz)] (Tabular time 1 day earlier).\nF10ₐ: 10.7-cm averaged solar flux, 81-day centered on input time (Tabular         time 1 day earlier).\nS10: EUV index (26-34 nm) scaled to F10.7 (Tabular time 1 day earlier).\nS10ₐ: EUV 81-day averaged centered index (Tabular time 1 day earlier).\nM10: MG2 index scaled to F10.7 (Tabular time 2 days earlier).\nM10ₐ: MG2 81-day averaged centered index (Tabular time 2 days earlier).\nY10: Solar X-ray & Lya index scaled to F10.7 (Tabular time 5 days earlier).\nY10ₐ: Solar X-ray & Lya 81-day averaged centered index (Tabular time 5 days         earlier).\nDstΔTc: Temperature variation related to the Dst.\n\nReturns\n\nAn instance of the structure JB2008_Output with the computed values.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.jr1971-NTuple{7,Number}",
    "page": "Library",
    "title": "SatelliteToolbox.jr1971",
    "category": "method",
    "text": "function jr1971(JD::Number, glat::Number, glon::Number, h::Number, F10::Number, F10ₐ::Number, Kp::Number)\n\nCompute the atmospheric density using the Jacchia-Roberts 1971 model.\n\nArgs\n\nJD: Julian day.\nglat: Geodetic latitude [rad].\nglon: Geodetic longitude [rad].\nh: Altitude [m].\nF10: 10.7-cm solar flux [10⁻²² W/(M² Hz)].\nF10ₐ: 10.7-cm averaged solar flux, 81-day centered on input time.\nKp: Kp geomagnetic index (with a delay of 3 hours).\n\nReturns\n\nAn instance of the structure JR1971_Output with the computed values.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.kepler_to_rv-NTuple{6,Number}",
    "page": "Library",
    "title": "SatelliteToolbox.kepler_to_rv",
    "category": "method",
    "text": "function kepler_to_rv(a::Number, e::Number, i::Number, Ω::Number, ω::Number, f::Number)\n\nConvert the Keplerian elements (a, e, i, Ω, ω, and f) to a Cartesian representation (position vector r and velocity vector v).\n\nArgs\n\na: Semi-major axis [m].\ne: Excentricity.\ni: Inclination [rad].\nΩ: Right ascension of the ascending node [rad].\nω: Argument of perigee [rad].\nf: True anomaly [rad].\n\nReturns\n\nThe position vector represented in the inertial reference frame [m].\nThe velocity vector represented in the inertial reference frame [m].\n\nReferences\n\nThis algorithm was adapted from [1] and [3, p. 37-38].\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.legendre",
    "page": "Library",
    "title": "SatelliteToolbox.legendre",
    "category": "function",
    "text": "function legendre([N,] ϕ::Number, n_max::Number, ph_term::Bool = false)\n\nCompute the associated Legendre function P_n,m[cos(ϕ)]. The maximum degree that will be computed is n_max.\n\nThe optional parameter N can be used to select the normalization. The following values are valid:\n\nVal{:full}: Compute the fully normalized associated Legendre function (see legendre_fully_normalized).\nVal{:schmidt}: Compute the Schmidt quasi-normalized associated Legendre function (see legendre_schmidt_quasi_normalized).\nVal{:conv}: Compute the conventional associated Legendre function (see legendre_conventional).\n\nIf N is omitted, then the full normalization will be used (Val{:full}).\n\nIf ph_term is set to true, then the Condon-Shortley phase term (-1)ᵐ will be included. If ph_term is not present, then it defaults to false.\n\nReturns\n\nA square matrix with the Legendre associated functions P_n,m[cos(ϕ)].\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.legendre!",
    "page": "Library",
    "title": "SatelliteToolbox.legendre!",
    "category": "function",
    "text": "function legendre!([N,] P::AbstractMatrix, ϕ::Number, ph_term::Bool = false)\n\nCompute the associated Legendre function P_n,m[cos(ϕ)]. The maximum degree and order that will be computed are given by the dimensions of matrix P. Notice, however, that P must be a square matrix.\n\nThe result will be stored at matrix P.\n\nThe optional parameter N can be used to select the normalization. The following values are valid:\n\nVal{:full}: Compute the fully normalized associated Legendre function (see legendre_fully_normalized!).\nVal{:schmidt}: Compute the Schmidt quasi-normalized associated Legendre function (see legendre_schmidt_quasi_normalized!).\nVal{:conv}: Compute the conventional associated Legendre function (see legendre_conventional!).\n\nIf N is omitted, then the full normalization will be used.\n\nIf ph_term is set to true, then the Condon-Shortley phase term (-1)ᵐ will be included. If ph_term is not present, then it defaults to false.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.legendre_conventional",
    "page": "Library",
    "title": "SatelliteToolbox.legendre_conventional",
    "category": "function",
    "text": "function legendre_conventional(ϕ::Number, n_max::Number, ph_term::Bool = false)\n\nCompute the conventional associated Legendre function P_n,m[cos(ϕ)]. The maximum degree that will be computed is n_max.\n\nIf ph_term is set to true, then the Condon-Shortley phase term (-1)ᵐ will be included. If ph_term is not present, then it defaults to false.\n\nReturns\n\nA square matrix with the Legendre associated functions P_n,m[cos(ϕ)].\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.legendre_conventional!",
    "page": "Library",
    "title": "SatelliteToolbox.legendre_conventional!",
    "category": "function",
    "text": "function legendre_conventional!(P::AbstractMatrix, ϕ::Number, ph_term::Bool = false)\n\nCompute the conventional associated Legendre function P_n,m[cos(ϕ)]. The maximum degree and order that will be computed are given by the dimensions of matrix P. Notice, however, that P must be a square matrix.\n\nThe result will be stored at matrix P.\n\nIf ph_term is set to true, then the Condon-Shortley phase term (-1)ᵐ will be included. If ph_term is not present, then it defaults to false.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.legendre_fully_normalized",
    "page": "Library",
    "title": "SatelliteToolbox.legendre_fully_normalized",
    "category": "function",
    "text": "function legendre_fully_normalized(ϕ::Number, n_max::Number, ph_term::Bool = false)\n\nCompute the fully normalized associated Legendre function P_n,m[cos(ϕ)]. The maximum degree that will be computed is n_max.\n\nIf ph_term is set to true, then the Condon-Shortley phase term (-1)ᵐ will be included. If ph_term is not present, then it defaults to false.\n\nReturns\n\nA square matrix with the Legendre associated functions P_n,m[cos(ϕ)].\n\nRemarks\n\nThis algorithm was based on [1]. Our definition of fully normalized associated Legendre function can be seen in [2, p. 546]. The conversion is obtained by:\n\n             _                     -\n            |  (n-m)! . k . (2n+1)  |      k = 1 if m  = 0\nK_n,m = sqrt| --------------------- |,     k = 2 if m != 0\n            |         (n+m)!        |\n             -                     -\n_\nP_n,m = P_n,m * K_n,m,\n\n      _\nwhere P_n,m is the fully normalized Legendre associated function.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.legendre_fully_normalized!",
    "page": "Library",
    "title": "SatelliteToolbox.legendre_fully_normalized!",
    "category": "function",
    "text": "function legendre_fully_normalized!(P::AbstractMatrix, ϕ::Number, ph_term::Bool = false)\n\nCompute the fully normalized associated Legendre function P_n,m[cos(ϕ)]. The maximum degree and order that will be computed are given by the dimensions of matrix P. Notice, however, that P must be a square matrix.\n\nThe result will be stored at matrix P.\n\nIf ph_term is set to true, then the Condon-Shortley phase term (-1)ᵐ will be included. If ph_term is not present, then it defaults to false.\n\nRemarks\n\nThis algorithm was based on [1]. Our definition of fully normalized associated Legendre function can be seen in [2, p. 546]. The conversion is obtained by:\n\n             _                     -\n            |  (n-m)! . k . (2n+1)  |      k = 1 if m  = 0\nK_n,m = sqrt| --------------------- |,     k = 2 if m != 0\n            |         (n+m)!        |\n             -                     -\n_\nP_n,m = P_n,m * K_n,m,\n\n      _\nwhere P_n,m is the fully normalized Legendre associated function.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.legendre_schmidt_quasi_normalized",
    "page": "Library",
    "title": "SatelliteToolbox.legendre_schmidt_quasi_normalized",
    "category": "function",
    "text": "function legendre_schmidt_quasi_normalized(ϕ::Number, n_max::Number, ph_term::Bool = false)\n\nCompute the fully normalized associated Legendre function P_n,m[cos(ϕ)]. The maximum degree that will be computed is n_max.\n\nIf ph_term is set to true, then the Condon-Shortley phase term (-1)ᵐ will be included. If ph_term is not present, then it defaults to false.\n\nReturns\n\nA square matrix with the Legendre associated functions P_n,m[cos(ϕ)].\n\nRemarks\n\nThis algorithm was based on [3,4]. The conversion is obtained by:\n\n             _           -\n            |     (n-m)!  |    k = 1 if m  = 0\nK_n,m = sqrt| k. -------- |,   k = 2 if m != 0\n            |     (n+m)!  |\n             -           -\n\n=\nP_n,m = P_n,m * K_n,m,\n\n      =\nwhere P_n,m is the quasi-normalized normalized Legendre associated function.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.legendre_schmidt_quasi_normalized!",
    "page": "Library",
    "title": "SatelliteToolbox.legendre_schmidt_quasi_normalized!",
    "category": "function",
    "text": "function legendre_schmidt_quasi_normalized!(P::AbstractMatrix, ϕ::Number, ph_term::Bool = false)\n\nCompute the Schmidt quasi-normalized associated Legendre function P_n,m[cos(ϕ)] [3,4].  The maximum degree and order that will be computed are given by the dimensions of matrix P. Notice, however, that P must be a square matrix.\n\nThe result will be stored at matrix P.\n\nIf ph_term is set to true, then the Condon-Shortley phase term (-1)ᵐ will be included. If ph_term is not present, then it defaults to false.\n\nRemarks\n\nThis algorithm was based on [3,4]. The conversion is obtained by:\n\n             _           -\n            |     (n-m)!  |    k = 1 if m  = 0\nK_n,m = sqrt| k. -------- |,   k = 2 if m != 0\n            |     (n+m)!  |\n             -           -\n\n=\nP_n,m = P_n,m * K_n,m,\n\n      =\nwhere P_n,m is the quasi-normalized normalized Legendre associated function.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.list_ss_orbits_by_rep_period",
    "page": "Library",
    "title": "SatelliteToolbox.list_ss_orbits_by_rep_period",
    "category": "function",
    "text": "function list_ss_orbits_by_rep_period(minRep::Int, maxRep::Int, minAlt::Number=-1.0, maxAlt::Number=-1.0, e::Number=0.0)\n\nCompute a list of repeating Sun-synchronous orbits.\n\nArgs\n\nminRep: Minimum repetition time of the orbit [days].\nmaxRep: Maximum repetition time of the orbit [days].\nminAlt: Minimum altitude of the orbits on the list [m].\nmaxAlt: Minimum altitude of the orbits on the list [m].\ne: Eccentricity.\n\nReturns\n\nA matrix containing the orbits found with the following format:\n\nSemi-major axis [m] | Altitude [m] | Period [s] | Int | Num | Den\n--------------------|--------------|------------|-----|-----|----\n\nin which the period is Int + Num/Den.\n\nRemarks\n\nIf minAlt or maxAlt is < 0.0, then the altitude will not be checked when a orbit is added to the list.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.load_gravity_model-Tuple{Type{Val{:egm96}}}",
    "page": "Library",
    "title": "SatelliteToolbox.load_gravity_model",
    "category": "method",
    "text": "function load_gravity_model(T)\n\nLoad an embedded gravity model coefficients T and return an instance of the structure GravityModel_Coefs with the parsed values.\n\nThe current supported values for T are:\n\nT Model Name Maximum Degree\nEGM96() Earth Gravitational Model 1996 360\nJGM2() Joint Earth Gravity Model 2 70\nJGM3() Joint Earth Gravity Model 3 70\n–––––- –––––––––––––––– ––––––––\n\nFor other models, you can downlad the gfc file at\n\nhttp://icgem.gfz-potsdam.de/home\n\nand load it using the functions parse_icgem and create_gravity_model_coefs.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.minimum_half_FOV_grss-Tuple{Real,Real,Real,Integer}",
    "page": "Library",
    "title": "SatelliteToolbox.minimum_half_FOV_grss",
    "category": "method",
    "text": "function minimum_half_FOV_grss(h::Real, T::Real, i::Real, To::Integer)\n\nCompute the minimum half FOV of a ground repeating Sun-synchronous (GRSS) orbit to cover the entire Equator within the revisit interval.\n\nArgs\n\nh: Orbit altitude in the Equator [m].\nT: Orbit period [s].\ni: Inclination [rad].\nTo: Orbit cycle [days].\n\nReturns\n\nThe minimum half FOV [rad].\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.minimum_half_FOV_grss-Tuple{Real,Real,Real,Real,Integer}",
    "page": "Library",
    "title": "SatelliteToolbox.minimum_half_FOV_grss",
    "category": "method",
    "text": "function minimum_half_FOV_grss(h::Real, a::Real, e::Real, i::Real, To::Integer)\n\nCompute the minimum half FOV of a ground repeating Sun-synchronous (GRSS) orbit to cover the entire Equator within the revisit interval.\n\nArgs\n\nh: Orbit altitude in the Equator [m].\na: Semi-major axis [m].\ne: Eccentricity.\ni: Inclination [rad].\nTo: Orbit cycle [days].\n\nReturns\n\nThe minimum half FOV [rad].\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.minimum_swath_grss-Tuple{Real,Real,Integer}",
    "page": "Library",
    "title": "SatelliteToolbox.minimum_swath_grss",
    "category": "method",
    "text": "function minimum_swath_grss(T::Real, i::Real, To::Integer)\n\nCompute the minimum swath of a ground repeating Sun-synchronous (GRSS) orbit to cover the entire Equator within the revisit interval.\n\nArgs\n\nT: Orbit period [s].\ni: Inclination [rad].\nTo: Orbit cycle [days].\n\nReturns\n\nThe minimum swath [m].\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.minimum_swath_grss-Tuple{Real,Real,Real,Integer}",
    "page": "Library",
    "title": "SatelliteToolbox.minimum_swath_grss",
    "category": "method",
    "text": "function minimum_swath_grss(a::Real, e::Real, i::Real, To::Integer)\n\nCompute the minimum swath of a ground repeating Sun-synchronous (GRSS) orbit to cover the entire Equator within the revisit interval.\n\nArgs\n\na: Semi-major axis [m].\ne: Eccentricity.\ni: Inclination [rad].\nTo: Orbit cycle [days].\n\nReturns\n\nThe minimum swath [m].\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.nrlmsise00-NTuple{4,Number}",
    "page": "Library",
    "title": "SatelliteToolbox.nrlmsise00",
    "category": "method",
    "text": "function nrlmsise00(JD::Number, alt::Number, g_lat::Number, g_long::Number [, f107A::Number, f107::Number, ap::Union{Number,AbstractVector}]; output_si::Bool = true, dversion::Bool = true)\n\nNRLMSISE-00\n\nNeutral Atmosphere Empirical Model from the surface to lower exosphere.\n\nThis routine computes the NRLMSISE-00 outputs (see NRLMSISE00_Output) using the configurations in the structure nrlmsise00 (see NRLMSISE00_Structure).\n\nNotice that the NRLMSISE-00 will be run using the default flags (see NRLMSISE00_DEFAULT_FLAGS). The user can only change the value of flags[:output_m_kg] using the keyword output_si to select whether the output must be converted to SI units. If more control is needed, then the user must manually call the function conf_nrlmsise00 and then call gtd7 or gtd7d with the desired flags.\n\nIf the space indices f107A, f107, and ap are missing, then they will be obtained from the online databases (see init_space_indices()).\n\nArgs\n\nJD: Julian Day [UTC].\nalt: Altitude [m].\ng_lat: Geodetic latitude [rad].\ng_long: Geodetic longitude [rad].\nf107A: 81 day average of F10.7 flux (centered on day of year JD).\nf107: Daily F10.7 flux for previous day.\nap: Magnetic index (daily) if it is a number. If it is an array, then see       Remarks.\n\nKeywords\n\noutput_si: (OPTIONAL) If true, then the output units will be [m⁻³] for              species number density and [kg/m⁻³] for the total density.              Otherwise, the units will be [cm⁻³] and [g/cm⁻³], respectively.\ndversion: (OPTIONAL) If true, run gtd7d. Otherwise, run gtd7 (see             Remarks).\n\nReturns\n\nAn instance of the structure NRLMSISE00_Output. The result in variable den_Total depends on the value of dversion (see Remarks, Notes on input variables).\n\nRemarks\n\nThe densities of O, H, and N are set to 0 below 72.5 km.\nThe exospheric temperature T_exo is set to global average for altitudes below 120 km. The 120 km gradient is left at global average value for altitudes below 72.5 km.\nAnomalous oxygen is defined as hot atomic oxygen or ionized oxygen that can become appreciable at high altitudes (> 500 km) for some ranges of inputs, thereby affection drag on satellites and debris. We group these species under the term Anomalous Oxygen, since their individual variations are not presently separable with the drag data used to define this model component.\n\nAP\n\nIf ap is a Vector, then it must be a vector with 7 dimensions as described below:\n\nIndex Description\n1 Daily AP.\n2 3 hour AP index for current time.\n3 3 hour AP index for 3 hours before current time.\n4 3 hour AP index for 6 hours before current time.\n5 3 hour AP index for 9 hours before current time.\n6 Average of eight 3 hour AP indices from 12 to 33 hours prior to current time.\n7 Average of eight 3 hour AP indices from 36 to 57 hours prior to current time.\n\nNotes on input variables\n\nf107 and f107A values used to generate the model correspond to the 10.7 cm radio flux at the actual distance of the Earth from the Sun rather than the radio flux at 1 AU. The following site provides both classes of values:\n\nftp://ftp.ngdc.noaa.gov/STP/SOLAR_DATA/SOLAR_RADIO/FLUX/\n\nf107, f107A, and ap effects are neither large nor well established below 80 km and these parameters should be set to 150, 150, and 4 respectively.\n\nIf dversion is true, then the total mass den_Total (see NRLMSISE00_Output) is the sum of the mass densities of the species He, O, N₂, O₂, Ar, H, and N, but does not include anomalous oxygen.\n\nIf dversion is false, then total mass den_Total (see NRLMSISE00_Output) is the effective total mass density for drag and is the sum of the mass densities of all species in this model including the anomalous oxygen.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.nutation_fk5",
    "page": "Library",
    "title": "SatelliteToolbox.nutation_fk5",
    "category": "function",
    "text": "function nutation_fk5(JD_TT::Number, n_max::Number = 106, nut_coefs_1980::Matrix = nut_coefs_1980)\n\nCompute the nutation parameters at the Julian Day JD_TT [Terrestrial Time] using the 1980 IAU Theory of Nutation. The coefficients are nut_coefs_1980 that must be a matrix in which each line has the following syntax [1, p. 1043]:\n\nan1  an2  an3  an4  an5  Ai  Bi  Ci  Di\n\nwhere the units of Ai and Ci are [0.0001\"] and the units of Bi and Di are [0.0001\"/JC]. The user can also specify the number of coefficients n_max that will be used when computing the nutation. If n_max is omitted, the it defaults to 106.\n\nReturns\n\nThe mean obliquity of the ecliptic [rad].\nThe nutation in obliquity of the ecliptic [rad].\nThe nutation in longitude [rad].\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.parse_icgem-Tuple{AbstractString}",
    "page": "Library",
    "title": "SatelliteToolbox.parse_icgem",
    "category": "method",
    "text": "function parse_icgem(filename::AbstractString)\n\nParse the ICGEM file filename and return an instance of the structure ICGEM with the parsed data.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.period",
    "page": "Library",
    "title": "SatelliteToolbox.period",
    "category": "function",
    "text": "function period(a::Number, e::Number, i::Number, pert::Symbol = :J2)\nfunction period(orb::Orbit, pert::Symbol = :J2)\n\nCompute the period [s] of an object in an orbit with semi-major axis a [m], eccentricity e, and inclination i [rad], using the perturbation terms specified by the symbol pert. The orbit can also be specified by orb, which is an instance of the structure Orbit.\n\npert can be:\n\n:J0: Consider a Keplerian orbit.\n:J2: Consider the perturbation terms up to J2.\n\nIf pert is omitted, then it defaults to :J2.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.precession_fk5-Tuple{Number}",
    "page": "Library",
    "title": "SatelliteToolbox.precession_fk5",
    "category": "method",
    "text": "function precession_fk5(JD_TT::Number)\n\nCompute the angles related to the precession movement in the Julian Day JD_TT [Terrestrial Time] using the theory IAU-76/FK5.\n\nReturns\n\nThe angles (ζ, Θ, z) as described in [1, p. 226-228].\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.propagate!-Union{Tuple{T}, Tuple{OrbitPropagatorJ2{T},Number}} where T",
    "page": "Library",
    "title": "SatelliteToolbox.propagate!",
    "category": "method",
    "text": "function propagate!(orbp, t::Number) where T\nfunction propagate!(orbp, t::AbstractVector) where T\n\nIf t is a number, then propagate orbp until the epoch defined by t [s]. Otherwise, if t is an array, then propagate the orbit in orbp using the time instants defined in the vector t [s].\n\nIn both cases, the orbit propagator algorithm is the one related to the structure orbp.\n\nThe structure orbp will contain the elements at the last propagation instant.\n\nReturns\n\nThe mean Keplerian elements represented in inertial frame in each time instant (see Orbit) [SI units].\nThe position vector represented in inertial frame in each time instant [m].\nThe velocity vector represented in inertial frame in each time instant [m].\n\nIf t is an array, then those values will be an array containing the information related to each epoch in t.\n\nRemarks\n\nThe inertial frame in which the output is represented depends on which frame it was used to generate the orbit parameters. If the orbit parameters are obtained from a TLE, then the inertial frame will be TEME. Notice, however, that the perturbation theory requires an inertial frame with true equator.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.rECEFtoECEF-Tuple{Union{Type{Val{:ITRF}}, Type{Val{:PEF}}},Union{Type{Val{:ITRF}}, Type{Val{:PEF}}},Number,EOPData_IAU1980}",
    "page": "Library",
    "title": "SatelliteToolbox.rECEFtoECEF",
    "category": "method",
    "text": "function rECEFtoECEF([T,] ECEFo, ECEFf, JD_UTC::Number, eop_data)\n\nCompute the rotation from an Earth-Centered, Earth-Fixed (ECEF) reference frame to another ECEF reference frame at the Julian Day [UTC] JD_UTC. The rotation description that will be used is given by T, which can be DCM or Quaternion. The origin ECEF frame is selected by the input ECEFo and the destination ECEF frame is selected by the input ECEFf. The model used to compute the rotation is specified by the selection of the origin and destination frames. Currently, only IAU-76/FK5 is supported.\n\nRotation description\n\nThe rotations that aligns the origin ECEF frame with the destination ECEF frame can be described by Direction Cosine Matrices or Quaternions. This is selected by the parameter T.\n\nThe possible values are:\n\nDCM: The rotation will be described by a Direction Cosine Matrix.\nQuaternion: The rotation will be described by a Quaternion.\n\nIf no value is specified, then it falls back to DCM.\n\nConversion model\n\nThe model that will be used to compute the rotation is automatically inferred given the selection of the origin and destination frames. Currently, only the IAU-76/FK5 model is supported.\n\nECEF Frame\n\nThe supported ECEF frames for both origin ECEFo and destination ECEFf are:\n\nITRF(): ECEF will be selected as the International Terrestrial Reference           Frame (ITRF).\nPEF(): ECEF will be selected as the Pseudo-Earth Fixed (PEF) reference          frame.\n\nEOP Data\n\nThe conversion between the supported ECEF frames always depends on EOP Data (see get_iers_eop and read_iers_eop). If IAU-76/FK5 model is used, then the type of eop_data must be EOPData_IAU1980.\n\nReturns\n\nThe rotation description represented by T that rotates the ECEF reference frame into alignment with the ECI reference frame.\n\nExamples\n\njulia> eop_IAU1980 = get_iers_eop(:IAU1980);\n\njulia> rECEFtoECEF(PEF(), ITRF(), DatetoJD(1986,6,19,21,35,0), eop_IAU1980)\n3×3 StaticArrays.SArray{Tuple{3,3},Float64,2,9}:\n  1.0          0.0         4.35684e-7\n  0.0          1.0         1.44762e-6\n -4.35684e-7  -1.44762e-6  1.0\n\njulia> rECEFtoECEF(Quaternion, PEF(), ITRF(), DatetoJD(1986,6,19,21,35,0), eop_IAU1980)\nQuaternion{Float64}:\n  + 0.9999999999997147 - 7.236343481310813e-7.i + 2.1765518308012794e-7.j + 0.0.k\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.rECEFtoECI-Tuple{Union{Type{Val{:ITRF}}, Type{Val{:PEF}}},Union{Type{Val{:GCRF}}, Type{Val{:J2000}}, Type{Val{:TOD}}, Type{Val{:MOD}}, Type{Val{:TEME}}},Number,EOPData_IAU1980}",
    "page": "Library",
    "title": "SatelliteToolbox.rECEFtoECI",
    "category": "method",
    "text": "function rECEFtoECI([T,] ECEF, ECI, JD_UTC::Number [, eop_data])\n\nCompute the rotation from an Earth-Centered, Earth-Fixed (ECEF) reference frame to an Earth-Centered Inertial (ECI) reference frame at the Julian Day [UTC] JD_UTC. The rotation description that will be used is given by T, which can be DCM or Quaternion. The ECEF frame is selected by the input ECEF and the ECI frame is selected by the input ECI. The possible values are listed below. The model used to compute the rotation is specified by the selection of the origin and destination frames. Currently, only IAU-76/FK5 is supported.\n\nRotation description\n\nThe rotations that aligns the ECEF with ECI can be described by Direction Cosine Matrices or Quaternions. This is selected by the parameter T. The possible values are:\n\nDCM: The rotation will be described by a Direction Cosine Matrix.\nQuaternion: The rotation will be described by a Quaternion.\n\nIf no value is specified, then it falls back to DCM.\n\nConversion model\n\nThe model that will be used to compute the rotation is automatically inferred given the selection of the origin and destination frames. Currently, only the IAU-76/FK5 model is supported.\n\nECEF Frame\n\nThe ECEF frame is selected by the parameter ECEF. The possible values are:\n\nITRF(): ECEF will be selected as the International Terrestrial Reference           Frame (ITRF).\nPEF(): ECEF will be selected as the Pseudo-Earth Fixed (PEF) reference          frame.\n\nECI Frame\n\nThe ECI frame is selected by the parameter ECI. The possible values are:\n\nTEME(): ECI will be selected as the True Equator Mean Equinox (TEME)           reference frame.\nTOD(): ECI will be selected as the True of Date (TOD).\nMOD(): ECI will be selected as the Mean of Date (MOD).\nJ2000(): ECI will be selected as the J2000 reference frame.\nGCRF(): ECI will be selected as the Geocentric Celestial Reference Frame           (GCRF).\n\nEOP Data\n\nThe conversion between the frames depends on EOP Data (see get_iers_eop and read_iers_eop). If IAU-76/FK5 model is used, then the type of eop_data must be EOPData_IAU1980. The following table shows the requirements for EOP data given the selected frames.\n\nModel ECEF ECI EOP Data\nIAU-76/FK5 ITRF GCRF EOP IAU1980\nIAU-76/FK5 ITRF J2000 EOP IAU1980\nIAU-76/FK5 ITRF MOD EOP IAU1980\nIAU-76/FK5 ITRF TOD EOP IAU1980\nIAU-76/FK5 ITRF TEME EOP IAU1980\nIAU-76/FK5 PEF GCRF EOP IAU1980\nIAU-76/FK5 PEF J2000 Not required*\nIAU-76/FK5 PEF MOD EOP IAU1980\nIAU-76/FK5 PEF TOD EOP IAU1980\nIAU-76/FK5 PEF TEME Not required*\n\n*: In this case, the Julian Time UTC will be assumed equal to Julian Time UT1 to compute the Greenwich Mean Sidereal Time. This is an approximation, but should be sufficiently accurate for some applications. Notice that, if EOP Data is provided, the Julian Day UT1 will be accurately computed.\n\nMOD and TOD\n\nIn this function, MOD and TOD frames are always defined with IERS EOP corrections. Hence, if one wants to obtain the MOD and TOD frames according to the original IAU-76/FK5 theory, it is necessary to use the low-level functions in file ./src/transformations/fk5/fk5.jl.\n\nReturns\n\nThe rotation description represented by T that rotates the ECEF reference frame into alignment with the ECI reference frame.\n\nExamples\n\njulia> eop_IAU1980 = get_iers_eop(:IAU1980);\n\njulia> rECEFtoECI(DCM, ITRF(), GCRF(), DatetoJD(1986, 06, 19, 21, 35, 0), eop_IAU1980)\n3×3 StaticArrays.SArray{Tuple{3,3},Float64,2,9}:\n -0.619267      0.78518     -0.00132979\n -0.78518      -0.619267     3.33492e-5\n -0.000797313   0.00106478   0.999999\n\njulia> rECEFtoECI(ITRF(), GCRF(), DatetoJD(1986, 06, 19, 21, 35, 0), eop_IAU1980)\n3×3 StaticArrays.SArray{Tuple{3,3},Float64,2,9}:\n -0.619267      0.78518     -0.00132979\n -0.78518      -0.619267     3.33492e-5\n -0.000797313   0.00106478   0.999999\n\njulia> rECEFtoECI(PEF(), J2000(), DatetoJD(1986, 06, 19, 21, 35, 0))\n3×3 StaticArrays.SArray{Tuple{3,3},Float64,2,9}:\n -0.619271      0.785176    -0.00133066\n -0.785177     -0.619272     3.45854e-5\n -0.000796885   0.00106622   0.999999\n\njulia> rECEFtoECI(PEF(), J2000(), DatetoJD(1986, 06, 19, 21, 35, 0), eop_IAU1980)\n3×3 StaticArrays.SArray{Tuple{3,3},Float64,2,9}:\n -0.619267      0.78518     -0.00133066\n -0.78518      -0.619267     3.45854e-5\n -0.000796879   0.00106623   0.999999\n\njulia> rECEFtoECI(Quaternion, ITRF(), GCRF(), DatetoJD(1986, 06, 19, 21, 35, 0), eop_IAU1980)\nQuaternion{Float64}:\n  + 0.4363098936462618 - 0.0005909969666939257.i + 0.00030510511316206974.j + 0.8997962182293519.k\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.rECItoECEF-Tuple{Union{Type{Val{:GCRF}}, Type{Val{:J2000}}, Type{Val{:TOD}}, Type{Val{:MOD}}, Type{Val{:TEME}}},Union{Type{Val{:ITRF}}, Type{Val{:PEF}}},Number,EOPData_IAU1980}",
    "page": "Library",
    "title": "SatelliteToolbox.rECItoECEF",
    "category": "method",
    "text": "function rECItoECEF([T,] ECI, ECEF, JD_UTC::Number [, eop_data])\n\nCompute the rotation from an Earth-Centered Inertial (ECI) reference frame to an Earth-Centered, Earth-Fixed (ECEF) reference frame at the Julian Day [UTC] JD_UTC. The rotation description that will be used is given by T, which can be DCM or Quaternion. The ECI frame is selected by the input ECI and the ECEF frame is selected by the input ECEF. The possible values are listed below. The model used to compute the rotation is specified by the selection of the origin and destination frames. Currently, only IAU-76/FK5 is supported.\n\nRotation description\n\nThe rotations that aligns the ECI with ECEF can be described by Direction Cosine Matrices or Quaternions. This is selected by the parameter T. The possible values are:\n\nDCM: The rotation will be described by a Direction Cosine Matrix.\nQuaternion: The rotation will be described by a Quaternion.\n\nIf no value is specified, then it falls back to DCM.\n\nConversion model\n\nThe model that will be used to compute the rotation is automatically inferred given the selection of the origin and destination frames. Currently, only the IAU-76/FK5 model is supported.\n\nECI Frame\n\nThe ECI frame is selected by the parameter ECI. The possible values are:\n\nTEME(): ECI will be selected as the True Equator Mean Equinox (TEME)           reference frame.\nTOD(): ECI will be selected as the True of Date (TOD).\nMOD(): ECI will be selected as the Mean of Date (MOD).\nJ2000(): ECI will be selected as the J2000 reference frame.\nGCRF(): ECI will be selected as the Geocentric Celestial Reference Frame           (GCRF).\n\nECEF Frame\n\nThe ECEF frame is selected by the parameter ECEF. The possible values are:\n\nITRF(): ECEF will be selected as the International Terrestrial Reference           Frame (ITRF).\nPEF(): ECEF will be selected as the Pseudo-Earth Fixed (PEF) reference          frame.\n\nEOP Data\n\nThe conversion between the frames depends on EOP Data (see get_iers_eop and read_iers_eop). If IAU-76/FK5 model is used, then the type of eop_data must be EOPData_IAU1980. The following table shows the requirements for EOP data given the selected frames.\n\nModel ECI ECEF EOP Data\nIAU-76/FK5 GCRF ITRF EOP IAU1980\nIAU-76/FK5 J2000 ITRF EOP IAU1980\nIAU-76/FK5 MOD ITRF EOP IAU1980\nIAU-76/FK5 TOD ITRF EOP IAU1980\nIAU-76/FK5 GCRF PEF EOP IAU1980\nIAU-76/FK5 J2000 PEF Not required*\nIAU-76/FK5 MOD PEF EOP IAU1980\nIAU-76/FK5 TOD PEF EOP IAU1980\nIAU-76/FK5 TEME PEF Not required*\n\n*: In this case, the Julian Time UTC will be assumed equal to Julian Time UT1 to compute the Greenwich Mean Sidereal Time. This is an approximation, but should be sufficiently accurate for some applications. Notice that, if EOP Data is provided, the Julian Day UT1 will be accurately computed.\n\nMOD and TOD\n\nIn this function, MOD and TOD frames are always defined with IERS EOP corrections. Hence, if one wants to obtain the MOD and TOD frames according to the original IAU-76/FK5 theory, it is necessary to use the low-level functions in file ./src/transformations/fk5/fk5.jl.\n\nReturns\n\nThe rotation description represented by T that rotates the ECI reference frame into alignment with the ECEF reference frame.\n\nExamples\n\njulia> eop_IAU1980 = get_iers_eop(:IAU1980);\n\njulia> rECItoECEF(DCM, GCRF(), ITRF(), DatetoJD(1986, 06, 19, 21, 35, 0), eop_IAU1980)\n3×3 StaticArrays.SArray{Tuple{3,3},Float64,2,9}:\n -0.619267    -0.78518     -0.000797313\n  0.78518     -0.619267     0.00106478\n -0.00132979   3.33492e-5   0.999999\n\njulia> rECItoECEF(GCRF(), ITRF(), DatetoJD(1986, 06, 19, 21, 35, 0), eop_IAU1980)\n3×3 StaticArrays.SArray{Tuple{3,3},Float64,2,9}:\n -0.619267    -0.78518     -0.000797313\n  0.78518     -0.619267     0.00106478\n -0.00132979   3.33492e-5   0.999999\n\njulia> rECItoECEF(J2000(), PEF(), DatetoJD(1986, 06, 19, 21, 35, 0))\n3×3 StaticArrays.SArray{Tuple{3,3},Float64,2,9}:\n -0.619271    -0.785177    -0.000796885\n  0.785176    -0.619272     0.00106622\n -0.00133066   3.45854e-5   0.999999\n\njulia> rECItoECEF(J2000(), PEF(), DatetoJD(1986, 06, 19, 21, 35, 0), eop_IAU1980)\n3×3 StaticArrays.SArray{Tuple{3,3},Float64,2,9}:\n -0.619267    -0.78518     -0.000796879\n  0.78518     -0.619267     0.00106623\n -0.00133066   3.45854e-5   0.999999\n\njulia> rECItoECEF(Quaternion, GCRF(), ITRF(), DatetoJD(1986, 06, 19, 21, 35, 0), eop_IAU1980)\nQuaternion{Float64}:\n  + 0.4363098936462618 + 0.0005909969666939257.i - 0.00030510511316206974.j - 0.8997962182293519.k\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.rECItoECI-Tuple{Union{Type{Val{:GCRF}}, Type{Val{:J2000}}, Type{Val{:TOD}}, Type{Val{:MOD}}, Type{Val{:TEME}}},Union{Type{Val{:GCRF}}, Type{Val{:J2000}}, Type{Val{:TOD}}, Type{Val{:MOD}}, Type{Val{:TEME}}},Number,EOPData_IAU1980}",
    "page": "Library",
    "title": "SatelliteToolbox.rECItoECI",
    "category": "method",
    "text": "function rECEFtoECI([T,] ECIo, ECIf, JD_UTC::Number [, eop_data])\nfunction rECEFtoECI([T,] ECIo, JD_UTCo::Number, ECIf, JD_UTCf::Number [, eop_data])\n\nCompute the rotation from an Earth-Centered Inertial (ECI) reference frame to another ECI reference frame. If the origin and destination frame contain only one of date frame, then the first signature is used and JD_UTC is the epoch of this frame. On the other hand, if the origin and destination frame contain two of date frame[1], e.g. TOD => MOD, then the second signature must be used in which JD_UTCo is the epoch of the origin frame and JD_UTCf is the epoch of the destination frame.\n\nThe rotation description that will be used is given by T, which can be DCM or Quaternion. The origin ECI frame is selected by the input ECIo and the destination ECI frame is selected by the input ECIf. The model used to compute the rotation is specified by the selection of the origin and destination frames. Currently, only IAU-76/FK5 is supported.\n\n[1]: TEME is an of date frame.\n\nRotation description\n\nThe rotations that aligns the origin ECI frame with the destination ECI frame can be described by Direction Cosine Matrices or Quaternions. This is selected by the parameter T.\n\nThe possible values are:\n\nDCM: The rotation will be described by a Direction Cosine Matrix.\nQuaternion: The rotation will be described by a Quaternion.\n\nIf no value is specified, then it falls back to DCM.\n\nConversion model\n\nThe model that will be used to compute the rotation is automatically inferred given the selection of the origin and destination frames. Currently, only the IAU-76/FK5 model is supported.\n\nECI Frame\n\nThe supported ECI frames for both origin ECIo and destination ECIf are:\n\nTEME(): ECI will be selected as the True Equator Mean Equinox (TEME)           reference frame.\nTOD(): ECI will be selected as the True of Date (TOD).\nMOD(): ECI will be selected as the Mean of Date (MOD).\nJ2000(): ECI will be selected as the J2000 reference frame.\nGCRF(): ECI will be selected as the Geocentric Celestial Reference Frame           (GCRF).\n\nEOP Data\n\nThe conversion between the frames depends on EOP Data (see get_iers_eop and read_iers_eop). If IAU-76/FK5 model is used, then the type of eop_data must be EOPData_IAU1980. The following table shows the requirements for EOP data given the selected frames.\n\nModel ECIo ECIf EOP Data Function Signature\nIAU-76/FK5 GCRF J2000 EOP IAU1980 First\nIAU-76/FK5 GCRF MOD EOP IAU1980 First\nIAU-76/FK5 GCRF TOD EOP IAU1980 First\nIAU-76/FK5 GCRF TEME EOP IAU1980 First\nIAU-76/FK5 J2000 GCRF EOP IAU1980 First\nIAU-76/FK5 J2000 MOD EOP IAU1980 First\nIAU-76/FK5 J2000 TOD EOP IAU1980 First\nIAU-76/FK5 J2000 TEME Not required First\nIAU-76/FK5 MOD GCRF EOP IAU1980 First\nIAU-76/FK5 MOD J2000 EOP IAU1980 First\nIAU-76/FK5 MOD TOD EOP IAU1980 Second\nIAU-76/FK5 MOD TEME EOP IAU1980 Second\nIAU-76/FK5 TOD GCRF EOP IAU1980 First\nIAU-76/FK5 TOD J2000 EOP IAU1980 First\nIAU-76/FK5 TOD MOD EOP IAU1980 Second\nIAU-76/FK5 TOD TEME EOP IAU1980 Second\nIAU-76/FK5 TEME GCRF EOP IAU1980 First\nIAU-76/FK5 TEME J2000 Not requrired First\nIAU-76/FK5 TEME MOD EOP IAU1980 Second\nIAU-76/FK5 TEME TOD EOP IAU1980 Second\n\nMOD and TOD\n\nIn this function, MOD and TOD frames are always defined with IERS EOP corrections. Hence, if one wants to obtain the MOD and TOD frames according to the original IAU-76/FK5 theory, it is necessary to use the low-level functions in file ./src/transformations/fk5/fk5.jl.\n\nReturns\n\nThe rotation description represented by T that rotates the origin ECI reference frame into alignment with the destination ECI reference frame.\n\nExamples\n\njulia> eop_IAU1980 = get_iers_eop(:IAU1980);\n\njulia> rECItoECI(DCM, GCRF(), J2000(), DatetoJD(1986, 6, 19, 21, 35, 0), eop_IAU1980)\n3×3 StaticArrays.SArray{Tuple{3,3},Float64,2,9}:\n  1.0          -2.45469e-12   4.56602e-10\n  2.45466e-12   1.0          -1.84455e-9\n -4.56602e-10   1.84455e-9    1.0\n\njulia> rECItoECI(Quaternion, TEME(), GCRF(), DatetoJD(1986, 6, 19, 21, 35, 0), eop_IAU1980)\nQuaternion{Float64}:\n  + 0.9999986335698654 + 1.8300414020900853e-5.i + 0.0006653038276169474.j - 0.0015132396749411375.k\n\njulia> rECItoECI(TOD(), DatetoJD(1986,6,19,21,35,0), TOD(), DatetoJD(1987,5,19,3,0,0), eop_IAU1980)\n3×3 StaticArrays.SArray{Tuple{3,3},Float64,2,9}:\n 1.0          -0.000224087  -9.73784e-5\n 0.000224086   1.0          -5.79859e-6\n 9.73797e-5    5.77677e-6    1.0\n\njulia> rECItoECI(Quaternion, TOD(), JD_J2000, MOD(), JD_J2000, eop_IAU1980)\nQuaternion{Float64}:\n  + 0.9999999993282687 - 1.400220690336851e-5.i + 1.3473593746216003e-5.j - 3.107834312843103e-5.k\n\njulia> rECItoECI(J2000(), TEME(), DatetoJD(1986,6,19,21,35,0))\n3×3 StaticArrays.SArray{Tuple{3,3},Float64,2,9}:\n  0.999995    0.0030265    0.00133055\n -0.00302645  0.999995    -3.86125e-5\n -0.00133066  3.45854e-5   0.999999\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.rGCRFtoITRF_fk5",
    "page": "Library",
    "title": "SatelliteToolbox.rGCRFtoITRF_fk5",
    "category": "function",
    "text": "function rGCRFtoITRF_fk5([T,] JD_UT1::Number, JD_TT::Number, x_p::Number, y_p::Number [, δΔϵ_1980::Number, δΔψ_1980::Number])\n\nCompute the rotation that aligns the Geocentric Celestial Reference Frame (GCRF) with the International Terrestrial Reference Frame (ITRF) at the Julian Day JD_UT1 [UT1] and JD_TT [Terrestrial Time], and considering the IERS EOP Data x_p [rad], y_p [rad], δΔϵ_1980 [rad], and δΔψ_1980 [rad] (see get_iers_eop). This algorithm uses the IAU-76/FK5 theory.\n\nx_p is the polar motion displacement about X-axis, which is the IERS Reference Meridian direction (positive south along the 0˚ longitude meridian). y_p is the polar motion displacement about Y-axis (90˚W or 270˚E meridian). δΔϵ_1980 is the nutation in obliquity. δΔψ_1980 is the nutation in longitude.\n\nThe Julian Day in UT1 is used to compute the Greenwich Mean Sidereal Time (GMST) (see JDtoGMST), whereas the Julian Day in Terrestrial Time is used to compute the nutation in the longitude. Notice that the Julian Day in UT1 and in Terrestrial Time must be equivalent, i.e. must be related to the same instant. This function does not check this.\n\nThe rotation type is described by the optional variable T. If it is DCM, then a DCM will be returned. Otherwise, if it is Quaternion, then a Quaternion will be returned. In case this parameter is omitted, then it falls back to DCM.\n\nReturns\n\nThe rotation that aligns the GCRF frame with the ITRF frame. The rotation representation is selected by the optional parameter T.\n\nRemarks\n\nThe EOP data related to the polar motion (x_p and y_p) is required, since this is the only way available to compute the conversion ITRF <=> PEF (the models are highly imprecise since the motion is still not very well understood [1]). However, the EOP data related to the nutation of the obliquity (δΔϵ_1980) and the nutation of the longitude (δΔψ_1980) can be omitted. In this case, the GCRF frame is what is usually called J2000 reference frame.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.rGCRFtoMOD_fk5-Tuple{Number}",
    "page": "Library",
    "title": "SatelliteToolbox.rGCRFtoMOD_fk5",
    "category": "method",
    "text": "function rGCRFtoMOD_fk5([T,] JD_TT::Number)\n\nCompute the rotation that aligns the Geocentric Celestial Reference Frame (GCRF) with the Mean of Date (MOD) frame at the Julian Day [Terrestrial Time] JD_TT. This algorithm uses the IAU-76/FK5 theory.\n\nThe rotation type is described by the optional variable T. If it is DCM, then a DCM will be returned. Otherwise, if it is Quaternion, then a Quaternion will be returned. In case this parameter is omitted, then it falls back to DCM.\n\nReturns\n\nThe rotation that aligns the GCRF frame with the MOD frame. The rotation representation is selected by the optional parameter T.\n\nRemarks\n\nThe Geocentric Celestial Reference Frame (GCRF) is rotated into the Mean of Date (MOD) frame considering the IAU 1976 Precession model.\n\nNotice that if the conversion MOD => TOD is performed without considering the EOP corrections, then the GCRF in this rotation is what is usually called the J2000 reference frame.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.rGCRFtoTEME",
    "page": "Library",
    "title": "SatelliteToolbox.rGCRFtoTEME",
    "category": "function",
    "text": "function rGCRFtoTEME([T,] JD_TT::Number [, δΔϵ_1980::Number = 0, δΔψ_1980::Number = 0])\n\nCompute the rotation that aligns the GCRF frame with the True Equator Mean Equinox (TEME) frame at the Julian Day JD_TT [Terrestrial Time]. This algorithm uses the IAU-76/FK5 theory and TEME definition in [1, p. 233]. Notice that one can provide corrections for the nutation in obliquity (δΔϵ_1980) [rad] and in longitude (δΔψ_1980) [rad] that are usually obtained from IERS EOP Data (see get_iers_eop).\n\nThe rotation type is described by the optional variable T. If it is DCM, then a DCM will be returned. Otherwise, if it is Quaternion, then a Quaternion will be returned. In case this parameter is omitted, then it falls back to DCM.\n\nReturns\n\nThe rotation that aligns the GCRF frame with the TEME frame. The rotation representation is selected by the optional parameter T.\n\nRemarks\n\nThe EOP data related to the nutation of the obliquity (δΔϵ_1980) and the nutation of the longitude (δΔψ_1980) can be omitted. In this case, the GCRF frame is what is usually called J2000 reference frame.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.rITRFtoGCRF_fk5",
    "page": "Library",
    "title": "SatelliteToolbox.rITRFtoGCRF_fk5",
    "category": "function",
    "text": "function rITRFtoGCRF_fk5([T,] JD_UT1::Number, JD_TT::Number, x_p::Number, y_p::Number [, δΔϵ_1980::Number, δΔψ_1980::Number])\n\nCompute the rotation that aligns the International Terrestrial Reference Frame (ITRF) with the Geocentric Celestial Reference Frame (GCRF) at the Julian Day JD_UT1 [UT1] and JD_TT [Terrestrial Time], and considering the IERS EOP Data x_p [rad], y_p [rad], δΔϵ_1980 [rad], and δΔψ_1980 [rad] (see get_iers_eop). This algorithm uses the IAU-76/FK5 theory.\n\nx_p is the polar motion displacement about X-axis, which is the IERS Reference Meridian direction (positive south along the 0˚ longitude meridian). y_p is the polar motion displacement about Y-axis (90˚W or 270˚E meridian). δΔϵ_1980 is the nutation in obliquity. δΔψ_1980 is the nutation in longitude.\n\nThe Julian Day in UT1 is used to compute the Greenwich Mean Sidereal Time (GMST) (see JDtoGMST), whereas the Julian Day in Terrestrial Time is used to compute the nutation in the longitude. Notice that the Julian Day in UT1 and in Terrestrial Time must be equivalent, i.e. must be related to the same instant. This function does not check this.\n\nThe rotation type is described by the optional variable T. If it is DCM, then a DCM will be returned. Otherwise, if it is Quaternion, then a Quaternion will be returned. In case this parameter is omitted, then it falls back to DCM.\n\nReturns\n\nThe rotation that aligns the ITRF frame with the GCRF frame. The rotation representation is selected by the optional parameter T.\n\nRemarks\n\nThe EOP data related to the polar motion (x_p and y_p) is required, since this is the only way available to compute the conversion ITRF <=> PEF (the models are highly imprecise since the motion is still not very well understood [1]). However, the EOP data related to the nutation of the obliquity (δΔϵ_1980) and the nutation of the longitude (δΔψ_1980) can be omitted. In this case, the GCRF frame is what is usually called J2000 reference frame.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.rITRFtoPEF_fk5-Tuple{Number,Number}",
    "page": "Library",
    "title": "SatelliteToolbox.rITRFtoPEF_fk5",
    "category": "method",
    "text": "function rITRFtoPEF_fk5([T,] x_p::Number, y_p::Number)\n\nCompute the rotation that aligns the International Terrestrial Reference Frame (ITRF) with the Pseudo-Earth Fixed (PEF) frame considering the polar motion represented by the angles x_p [rad] and y_p [rad] that are obtained from IERS EOP Data (see get_iers_eop).\n\nx_p is the polar motion displacement about X-axis, which is the IERS Reference Meridian direction (positive south along the 0˚ longitude meridian). y_p is the polar motion displacement about Y-axis (90˚W or 270˚E meridian).\n\nThe rotation type is described by the optional variable T. If it is DCM, then a DCM will be returned. Otherwise, if it is Quaternion, then a Quaternion will be returned. In case this parameter is omitted, then it falls back to DCM.\n\nReturns\n\nThe rotation that aligns the ITRF frame with the PEF frame. The rotation representation is selected by the optional parameter T.\n\nRemarks\n\nThe ITRF is defined based on the International Reference Pole (IRP), which is the location of the terrestrial pole agreed by international committees [1]. The Pseudo-Earth Fixed, on the other hand, is defined based on the Earth axis of rotation, or the Celestial Intermediate Pole (CIP). Hence, PEF XY-plane contains the True Equator. Furthermore, since the recovered latitude and longitude are sensitive to the CIP, then it should be computed considering the PEF frame.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.rMODtoGCRF_fk5-Tuple{Number}",
    "page": "Library",
    "title": "SatelliteToolbox.rMODtoGCRF_fk5",
    "category": "method",
    "text": "function rMODtoGCRF_fk5([T,] JD_TT::Number)\n\nCompute the rotation that aligns the Mean of Date (MOD) frame with the Geocentric Celestial Reference Frame (GCRF) at the Julian Day [Terrestrial Time] JD_TT. This algorithm uses the IAU-76/FK5 theory.\n\nThe rotation type is described by the optional variable T. If it is DCM, then a DCM will be returned. Otherwise, if it is Quaternion, then a Quaternion will be returned. In case this parameter is omitted, then it falls back to DCM.\n\nReturns\n\nThe rotation that aligns the MOD frame with the GCRF frame. The rotation representation is selected by the optional parameter T.\n\nRemarks\n\nThe Mean of Date (MOD) frame is rotated into the Geocentric Celestial Reference Frame (GCRF) considering the IAU 1976 Precession model.\n\nNotice that if the conversion TOD => MOD is performed without considering the EOP corrections, then the GCRF obtained by this rotation is what is usually called the J2000 reference frame.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.rMODtoPEF_fk5",
    "page": "Library",
    "title": "SatelliteToolbox.rMODtoPEF_fk5",
    "category": "function",
    "text": "function rMODtoPEF_fk5([T,] JD_UT1::Number, JD_TT::Number [, δΔϵ_1980::Number, δΔψ_1980::Number])\n\nCompute the rotation that aligns the Mean of Date (MOD) reference frame with the Pseudo-Earth Fixed (PEF) frame at the Julian Day JD_UT1 [UT1] and JD_TT [Terrestrial Time]. This algorithm uses the IAU-76/FK5 theory. Notice that one can provide corrections for the nutation in obliquity (δΔϵ_1980) [rad] and in longitude (δΔψ_1980) [rad] that are usually obtained from IERS EOP Data (see get_iers_eop).\n\nThe Julian Day in UT1 is used to compute the Greenwich Mean Sidereal Time (GMST) (see JDtoGMST), whereas the Julian Day in Terrestrial Time is used to compute the nutation in the longitude. Notice that the Julian Day in UT1 and in Terrestrial Time must be equivalent, i.e. must be related to the same instant. This function does not check this.\n\nThe rotation type is described by the optional variable T. If it is DCM, then a DCM will be returned. Otherwise, if it is Quaternion, then a Quaternion will be returned. In case this parameter is omitted, then it falls back to DCM.\n\nReturns\n\nThe rotation that aligns the MOD frame with the PEF frame. The rotation representation is selected by the optional parameter T.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.rMODtoTEME",
    "page": "Library",
    "title": "SatelliteToolbox.rMODtoTEME",
    "category": "function",
    "text": "function rMODtoTEME([T,] JD_TT::Number [, δΔϵ_1980::Number = 0, δΔψ_1980::Number = 0])\n\nCompute the rotation that aligns the Mean of Date (MOD) frame with the True Equator Mean Equinox (TEME) frame at the Julian Day JD_TT [Terrestrial Time]. This algorithm uses the IAU-76/FK5 theory and TEME definition in [1, p. 233]. Notice that one can provide corrections for the nutation in obliquity (δΔϵ_1980) [rad] and in longitude (δΔψ_1980) [rad] that are usually obtained from IERS EOP Data (see get_iers_eop).  .\n\nThe rotation type is described by the optional variable T. If it is DCM, then a DCM will be returned. Otherwise, if it is Quaternion, then a Quaternion will be returned. In case this parameter is omitted, then it falls back to DCM.\n\nReturns\n\nThe rotation that aligns the MOD frame with the TEME frame. The rotation representation is selected by the optional parameter T.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.rMODtoTOD_fk5",
    "page": "Library",
    "title": "SatelliteToolbox.rMODtoTOD_fk5",
    "category": "function",
    "text": "function rMODtoTOD_fk5([T,] JD_TT::Number [, δΔϵ_1980::Number, δΔψ_1980::Number])\n\nCompute the rotation that aligns the Mean of Date (MOD) frame with the True of Date (TOD) frame at the Julian Day JD_TT [Terrestrial Time]. This algorithm uses the IAU-76/FK5 theory. Notice that one can provide corrections for the nutation in obliquity (δΔϵ_1980) [rad] and in longitude (δΔψ_1980) [rad] that are usually obtained from IERS EOP Data (see get_iers_eop).\n\nThe rotation type is described by the optional variable T. If it is DCM, then a DCM will be returned. Otherwise, if it is Quaternion, then a Quaternion will be returned. In case this parameter is omitted, then it falls back to DCM.\n\nReturns\n\nThe rotation that aligns the MOD frame with the TOD frame. The rotation representation is selected by the optional parameter T.\n\nRemarks\n\nThe Mean of Date (MOD) frame is rotated into the True of Date (TOD) frame considering the 1980 IAU Theory of Nutation. The IERS EOP corrections must be added if one wants to make the rotation consistent with the Geocentric Celestial Reference Systems (GCRS).\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.rPEFtoITRF_fk5-Tuple{Number,Number}",
    "page": "Library",
    "title": "SatelliteToolbox.rPEFtoITRF_fk5",
    "category": "method",
    "text": "function rPEFtoITRF_fk5([T,] x_p::Number, y_p::Number)\n\nCompute the rotation that aligns the Pseudo-Earth Fixed (PEF) with the International Terrestrial Reference Frame (ITRF) considering the polar motion represented by the angles x_p [rad] and y_p [rad] that are obtained from IERS EOP Data (see get_iers_eop).\n\nx_p is the polar motion displacement about X-axis, which is the IERS Reference Meridian direction (positive south along the 0˚ longitude meridian). y_p is the polar motion displacement about Y-axis (90˚W or 270˚E meridian).\n\nThe rotation type is described by the optional variable T. If it is DCM, then a DCM will be returned. Otherwise, if it is Quaternion, then a Quaternion will be returned. In case this parameter is omitted, then it falls back to DCM.\n\nReturns\n\nThe rotation that aligns the PEF frame with the ITRF. The rotation representation is selected by the optional parameter T.\n\nRemarks\n\nThe ITRF is defined based on the International Reference Pole (IRP), which is the location of the terrestrial pole agreed by international committees [1]. The Pseudo-Earth Fixed, on the other hand, is defined based on the Earth axis of rotation, or the Celestial Intermediate Pole (CIP). Hence, PEF XY-plane contains the True Equator. Furthermore, since the recovered latitude and longitude are sensitive to the CIP, then it should be computed considering the PEF frame.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.rPEFtoMOD_fk5",
    "page": "Library",
    "title": "SatelliteToolbox.rPEFtoMOD_fk5",
    "category": "function",
    "text": "function rPEFtoMOD_fk5([T,] JD_UT1::Number, JD_TT::Number [, δΔϵ_1980::Number, δΔψ_1980::Number])\n\nCompute the rotation that aligns the Pseudo-Earth Fixed (PEF) frame with the Mean of Date (MOD) at the Julian Day JD_UT1 [UT1] and JD_TT [Terrestrial Time]. This algorithm uses the IAU-76/FK5 theory. Notice that one can provide corrections for the nutation in obliquity (δΔϵ_1980) [rad] and in longitude (δΔψ_1980) [rad] that are usually obtained from IERS EOP Data (see get_iers_eop).\n\nThe Julian Day in UT1 is used to compute the Greenwich Mean Sidereal Time (GMST) (see JDtoGMST), whereas the Julian Day in Terrestrial Time is used to compute the nutation in the longitude. Notice that the Julian Day in UT1 and in Terrestrial Time must be equivalent, i.e. must be related to the same instant. This function does not check this.\n\nThe rotation type is described by the optional variable T. If it is DCM, then a DCM will be returned. Otherwise, if it is Quaternion, then a Quaternion will be returned. In case this parameter is omitted, then it falls back to DCM.\n\nReturns\n\nThe rotation that aligns the PEF frame with the TOD frame. The rotation representation is selected by the optional parameter T.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.rPEFtoTEME-Tuple{Number}",
    "page": "Library",
    "title": "SatelliteToolbox.rPEFtoTEME",
    "category": "method",
    "text": "function rPEFtoTEME([T,] JD_TT::Number)\n\nCompute the rotation that aligns the Pseudo-Earth Fixed (PEF) frame with the True Equator Mean Equinox (TEME) frame at the Julian Day JD_TT [Terrestrial Time]. This algorithm uses the IAU-76/FK5 theory and TEME definition in [1, p. 233].\n\nThe rotation type is described by the optional variable T. If it is DCM, then a DCM will be returned. Otherwise, if it is Quaternion, then a Quaternion will be returned. In case this parameter is omitted, then it falls back to DCM.\n\nReturns\n\nThe rotation that aligns the PEF frame with the TEME frame. The rotation representation is selected by the optional parameter T.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.rPEFtoTOD_fk5",
    "page": "Library",
    "title": "SatelliteToolbox.rPEFtoTOD_fk5",
    "category": "function",
    "text": "function rPEFtoTOD_fk5([T,] JD_UT1::Number, JD_TT::Number [, δΔψ_1980::Number])\n\nCompute the rotation that aligns the Pseudo-Earth Fixed (PEF) frame with the True of Date (TOD) frame at the Julian Day JD_UT1 [UT1] and JD_TT [Terrestrial Time]. This algorithm uses the IAU-76/FK5 theory. Notice that one can provide correction for the nutation in longitude (δΔψ_1980) [rad] that is usually obtained from IERS EOP Data (see get_iers_eop).\n\nThe Julian Day in UT1 is used to compute the Greenwich Mean Sidereal Time (GMST) (see JDtoGMST), whereas the Julian Day in Terrestrial Time is used to compute the nutation in the longitude. Notice that the Julian Day in UT1 and in Terrestrial Time must be equivalent, i.e. must be related to the same instant. This function does not check this.\n\nThe rotation type is described by the optional variable T. If it is DCM, then a DCM will be returned. Otherwise, if it is Quaternion, then a Quaternion will be returned. In case this parameter is omitted, then it falls back to DCM.\n\nReturns\n\nThe rotation that aligns the PEF frame with the TOD frame. The rotation representation is selected by the optional parameter T.\n\nRemarks\n\nThe Pseudo-Earth Fixed (PEF) frame is rotated into the True of Date (TOD) frame considering the 1980 IAU Theory of Nutation. The IERS EOP corrections must be added if one wants to make the rotation consistent with the Geocentric Celestial Reference Systems (GCRS).\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.rTEMEtoGCRF",
    "page": "Library",
    "title": "SatelliteToolbox.rTEMEtoGCRF",
    "category": "function",
    "text": "function rTEMEtoGCRF([T,] JD_TT::Number [, δΔϵ_1980::Number = 0, δΔψ_1980::Number = 0])\n\nCompute the rotation that aligns the True Equator Mean Equinox (TEME) frame with the Geocentric Celestial Reference Frame (GCRF) at the Julian Day JD_TT [Terrestrial Time]. This algorithm uses the IAU-76/FK5 theory and TEME definition in [1, p. 233]. Notice that one can provide corrections for the nutation in obliquity (δΔϵ_1980) [rad] and in longitude (δΔψ_1980) [rad] that are usually obtained from IERS EOP Data (see get_iers_eop).\n\nThe rotation type is described by the optional variable T. If it is DCM, then a DCM will be returned. Otherwise, if it is Quaternion, then a Quaternion will be returned. In case this parameter is omitted, then it falls back to DCM.\n\nReturns\n\nThe rotation that aligns the TEME frame with the GCRF frame. The rotation representation is selected by the optional parameter T.\n\nRemarks\n\nThe EOP data related to the nutation of the obliquity (δΔϵ_1980) and the nutation of the longitude (δΔψ_1980) can be omitted. In this case, the GCRF frame is what is usually called J2000 reference frame.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.rTEMEtoMOD",
    "page": "Library",
    "title": "SatelliteToolbox.rTEMEtoMOD",
    "category": "function",
    "text": "function rTEMEtoMOD([T,] JD_TT::Number [, δΔϵ_1980::Number = 0, δΔψ_1980::Number = 0])\n\nCompute the rotation that aligns the True Equator Mean Equinox (TEME) frame with the Mean of Date (MOD) frame at the Julian Day JD_TT [Terrestrial Time]. This algorithm uses the IAU-76/FK5 theory and TEME definition in [1, p. 233]. Notice that one can provide corrections for the nutation in obliquity (δΔϵ_1980) [rad] and in longitude (δΔψ_1980) [rad] that are usually obtained from IERS EOP Data (see get_iers_eop).\n\nThe rotation type is described by the optional variable T. If it is DCM, then a DCM will be returned. Otherwise, if it is Quaternion, then a Quaternion will be returned. In case this parameter is omitted, then it falls back to DCM.\n\nReturns\n\nThe rotation that aligns the TEME frame with the MOD frame. The rotation representation is selected by the optional parameter T.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.rTEMEtoPEF-Tuple{Number}",
    "page": "Library",
    "title": "SatelliteToolbox.rTEMEtoPEF",
    "category": "method",
    "text": "function rTEMEtoPEF([T,] JD_TT::Number)\n\nCompute the rotation that aligns the True Equator Mean Equinox (TEME) frame with the Pseudo-Earth Fixed (PEF) frame at the Julian Day JD_TT [Terrestrial Time]. This algorithm uses the IAU-76/FK5 theory and TEME definition in [1, p. 233].\n\nThe rotation type is described by the optional variable T. If it is DCM, then a DCM will be returned. Otherwise, if it is Quaternion, then a Quaternion will be returned. In case this parameter is omitted, then it falls back to DCM.\n\nReturns\n\nThe rotation that aligns the TEME frame with the PEF frame. The rotation representation is selected by the optional parameter T.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.rTEMEtoTOD",
    "page": "Library",
    "title": "SatelliteToolbox.rTEMEtoTOD",
    "category": "function",
    "text": "function rTEMEtoTOD([T,] JD_TT::Number [, δΔϵ_1980::Number = 0, δΔψ_1980::Number = 0])\n\nCompute the rotation that aligns the True Equator Mean Equinox (TEME) frame with the True of Date (TOD) frame at the Julian Day JD_TT [Terrestrial Time]. This algorithm uses the IAU-76/FK5 theory and TEME definition in [1, p. 233]. Notice that one can provide corrections for the nutation in obliquity (δΔϵ_1980) [rad] and in longitude (δΔψ_1980) [rad] that are usually obtained from IERS EOP Data (see get_iers_eop).\n\nThe rotation type is described by the optional variable T. If it is DCM, then a DCM will be returned. Otherwise, if it is Quaternion, then a Quaternion will be returned. In case this parameter is omitted, then it falls back to DCM.\n\nReturns\n\nThe rotation that aligns the TEME frame with the TOD frame. The rotation representation is selected by the optional parameter T.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.rTODtoMOD_fk5",
    "page": "Library",
    "title": "SatelliteToolbox.rTODtoMOD_fk5",
    "category": "function",
    "text": "function rTODtoMOD_fk5([T,] JD_TT::Number [, δΔϵ_1980::Number, δΔψ_1980::Number])\n\nCompute the rotation that aligns the True of Date (TOD) frame with the Mean of Date (MOD) frame at the Julian Day JD_TT [Terrestrial Time]. This algorithm uses the IAU-76/FK5 theory. Notice that one can provide corrections for the nutation in obliquity (δΔϵ_1980) [rad] and in longitude (δΔψ_1980) [rad] that are usually obtained from IERS EOP Data (see get_iers_eop).\n\nThe rotation type is described by the optional variable T. If it is DCM, then a DCM will be returned. Otherwise, if it is Quaternion, then a Quaternion will be returned. In case this parameter is omitted, then it falls back to DCM.\n\nReturns\n\nThe rotation that aligns the TOD frame with the MOD frame. The rotation representation is selected by the optional parameter T.\n\nRemarks\n\nThe True of Date (TOD) frame is rotated into the Mean of Date (MOD) frame considering the 1980 IAU Theory of Nutation. The IERS EOP corrections must be added if one wants to make the rotation consistent with the Geocentric Celestial Reference Systems (GCRS).\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.rTODtoPEF_fk5",
    "page": "Library",
    "title": "SatelliteToolbox.rTODtoPEF_fk5",
    "category": "function",
    "text": "function rTODtoPEF_fk5([T,] JD_UT1::Number, JD_TT::Number [, δΔψ_1980::Number])\n\nCompute the rotation that aligns the True of Date (TOD) frame with the Pseudo-Earth Fixed (PEF) frame at the Julian Day JD_UT1 [UT1] and JD_TT [Terrestrial Time]. This algorithm uses the IAU-76/FK5 theory. Notice that one can provide correction for the nutation in longitude (δΔψ_1980) [rad] that is usually obtained from IERS EOP Data (see get_iers_eop).\n\nThe Julian Day in UT1 is used to compute the Greenwich Mean Sidereal Time (GMST) (see JDtoGMST), whereas the Julian Day in Terrestrial Time is used to compute the nutation in the longitude. Notice that the Julian Day in UT1 and in Terrestrial Time must be equivalent, i.e. must be related to the same instant. This function does not check this.\n\nThe rotation type is described by the optional variable T. If it is DCM, then a DCM will be returned. Otherwise, if it is Quaternion, then a Quaternion will be returned. In case this parameter is omitted, then it falls back to DCM.\n\nReturns\n\nThe rotation that aligns the TOD frame with the PEF frame. The rotation representation is selected by the optional parameter T.\n\nRemarks\n\nThe True of Date (TOD) frame is rotated into the Pseudo-Earth Fixed (PEF) frame considering the 1980 IAU Theory of Nutation. The IERS EOP corrections must be added if one wants to make the rotation consistent with the Geocentric Celestial Reference Systems (GCRS).\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.rTODtoTEME",
    "page": "Library",
    "title": "SatelliteToolbox.rTODtoTEME",
    "category": "function",
    "text": "function rTODtoTEME([T,] JD_TT::Number [, δΔϵ_1980::Number = 0, δΔψ_1980::Number = 0])\n\nCompute the rotation that aligns the True of Date (TOD) frame with the True Equator Mean Equinox (TEME) frame at the Julian Day JD_TT [Terrestrial Time]. This algorithm uses the IAU-76/FK5 theory and TEME definition in [1, p. 233]. Notice that one can provide corrections for the nutation in obliquity (δΔϵ_1980) [rad] and in longitude (δΔψ_1980) [rad] that are usually obtained from IERS EOP Data (see get_iers_eop).\n\nThe rotation type is described by the optional variable T. If it is DCM, then a DCM will be returned. Otherwise, if it is Quaternion, then a Quaternion will be returned. In case this parameter is omitted, then it falls back to DCM.\n\nReturns\n\nThe rotation that aligns the TOD frame with the TEME frame. The rotation representation is selected by the optional parameter T.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.read_iers_eop",
    "page": "Library",
    "title": "SatelliteToolbox.read_iers_eop",
    "category": "function",
    "text": "function read_iers_eop(filename::String, data_type::Symbol = :IAU1980)\n\nRead IERS EOP Data from the file filename. The user must specify if the data is related to the model IAU 1980 (data_type = :IAU1980), which is the default, or to the model IAU 2000A (data_type = :IAU2000A).\n\nReturns\n\nA structure (EOPData_IAU1980 or EOPData_IAU2000A, depending on data_type) with the interpolations of the EOP parameters. Notice that the interpolation indexing is set to the Julian Day.\n\nRemarks\n\nThe input file must be exactly the same as provided by IERS. One can download it using the following commands:\n\nIAU 1980\n  curl -O https://datacenter.iers.org/data/latestVersion/223_EOP_C04_14.62-NOW.IAU1980223.txt\n  wget https://datacenter.iers.org/data/latestVersion/223_EOP_C04_14.62-NOW.IAU1980223.txt\nIAU 2000A\n  curl -O https://datacenter.iers.org/data/latestVersion/224_EOP_C04_14.62-NOW.IAU2000A224.txt\n  wget https://datacenter.iers.org/data/latestVersion/224_EOP_C04_14.62-NOW.IAU2000A224.txt\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.read_tle",
    "page": "Library",
    "title": "SatelliteToolbox.read_tle",
    "category": "function",
    "text": "function read_tle(tle_filename::String, verify_checksum::Bool = true)\n\nRead the TLEs in the file tle_filename and return an array of TLE with the parsed TLEs.\n\nIf verify_checksum if true, then the checksum of both TLE lines will be verified. Otherwise, the checksum will not be checked. If verify_checksum is omitted, then it defaults to true.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.read_tle_from_string",
    "page": "Library",
    "title": "SatelliteToolbox.read_tle_from_string",
    "category": "function",
    "text": "function read_tle_from_string(tles::String, verify_checksum::Bool = true)\nfunction read_tle_from_string(tle_l1::String, tle_l2::String, verify_checksum::Bool = false)\n\nParse a set of TLEs in the string tles or one TLE with first line tle_l1 and second line tle_l2. This function returns an array of TLE with the parsed TLEs.\n\nIf verify_checksum if true, then the checksum of both TLE lines will be verified. Otherwise, the checksum will not be checked. If verify_checksum is omitted, then it defaults to true.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.rv_to_kepler-NTuple{6,Number}",
    "page": "Library",
    "title": "SatelliteToolbox.rv_to_kepler",
    "category": "method",
    "text": "function rv_to_kepler(x::Number, y::Number, z::Number, vx::Number, vy::Number, vz::Number)\n\nConvert a Cartesian representation (position vector [x;y;z] [m] and velocity vector [vx;vy;vz] [m/s²]) to the Keplerian elements.\n\nReturns\n\nAn instance of the structure Orbit with the Keplerian elements [SI units].\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.rv_to_kepler-Tuple{AbstractArray{T,1} where T,AbstractArray{T,1} where T}",
    "page": "Library",
    "title": "SatelliteToolbox.rv_to_kepler",
    "category": "method",
    "text": "function rv_to_kepler(r::Vector, v::Vector)\n\nConvert a Cartesian representation (position vector r [m] and velocity vector v [m/s²]) to the Keplerian elements.\n\nReturns\n\nAn instance of the structure Orbit with the Keplerian elements [SI units].\n\nReferences\n\nThe algorithm was adapted from [1].\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.satellite_beta_angle-Tuple{Number,Number,Number,Number,Number,Integer}",
    "page": "Library",
    "title": "SatelliteToolbox.satellite_beta_angle",
    "category": "method",
    "text": "function satellite_beta_angle(JD0::Number, a::Number, e::Number, i::Number, RAAN::Number, numDays::Integer)\n\nCompute the beta angle of a satellite.\n\nArgs\n\nJD0: Initial instant for the analysis [Julian day].\na: Semi-major axis of the orbit [m].\ne: Orbit eccentricity.\ni: Orbit inclination [rad].\nRAAN: Right ascension of the ascending node at JD0 [rad].\nnumDays: Number of days of the analysis.\n\nReturns\n\nThe beta angle [deg] computed for each day.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.satellite_check_Brazil-Tuple{Number,Number}",
    "page": "Library",
    "title": "SatelliteToolbox.satellite_check_Brazil",
    "category": "method",
    "text": "function satellite_check_Brazil(lat::Number, lon::Number)\n\nVerify if a point described by latitude lat [rad] and longitude lon [rad] is inside Brazil. Returns true if the point is inside Brazil, of false otherwise.\n\nRemarks\n\nThis function was based on the algorithm sent by Renato Branco to Ronan Arraes by e-mail at 2016-02-16.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.satellite_check_station-Tuple{Array{T,1} where T,Array{T,1} where T,Number}",
    "page": "Library",
    "title": "SatelliteToolbox.satellite_check_station",
    "category": "method",
    "text": "function satellite_check_station(r_e::Vector, rs_e::Vector, minElev::Number)\n\nCheck if the satellite with position vector r_e (ECEF) is inside the visibility circle of a ground station with position vector rs_e (ECEF) and a minimum elevation angle of minElev [rad].\n\nNotice that r_e and rs_e must be represented in the same ECEF frame, and must have the same unit.\n\nReturns true if the satellite is inside the visibility circle, or false otherwise.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.satellite_check_station-Tuple{Array{T,1} where T,Number,Number,Number,Number}",
    "page": "Library",
    "title": "SatelliteToolbox.satellite_check_station",
    "category": "method",
    "text": "function satellite_check_station(r_e::Vector, lat_s::Number, lon_s::Number, h_s::Number, minElev::Number)\n\nCheck if the satellite with position vector r_e (ECEF) is inside the visibility circle of a ground station with latitude lat_s [rad], longitude lon_s [rad], altitude h_s (WGS-84), and a minimum elevation angle of minElev [rad].\n\nNotice that the units of r_e and h_s must be the same.\n\nReturns true if the satellite is inside the visibility circle, or false otherwise.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.satellite_eclipse_time",
    "page": "Library",
    "title": "SatelliteToolbox.satellite_eclipse_time",
    "category": "function",
    "text": "function satellite_eclipse_time(JD0::Number, a::Number, e::Number, i::Number, w::Number, RAAN::Number, numDays::Integer, relative::Bool = false)\n\nCompute the eclipse time of a satellite.\n\nArgs\n\nJD0: Initial instant for the analysis [Julian day].\na: Semi-major axis of the orbit [m].\ne: Orbit eccentricity.\ni: Orbit inclination [rad].\nw: Argument of perigee [rad].\nRAAN: Right ascension of the ascending node at JD0 [rad].\nnumDays: Number of days of the analysis.\nrelative: Compute the eclipse time relative to the nodal period.\n\nReturns\n\nThe following table:\n\n    day | Sunlight Time | Penumbra Time | Umbra Time\n   -----+---------------+---------------+------------\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.satellite_lighting_condition-Tuple{AbstractArray{T,1} where T,AbstractArray{T,1} where T}",
    "page": "Library",
    "title": "SatelliteToolbox.satellite_lighting_condition",
    "category": "method",
    "text": "function satellite_lighting_condition(r_i::AbstractVector, s_i::AbstractVector)\n\nCompute the satellite lighting condition given the Sun unitary vector s_i [m] and the satellite position vector r_i [m].\n\nReturns\n\nSAT_LIGHTING_SUNLIGHT: Satellite is under sunlight.\nSAT_LIGHTING_PENUMBRA: Satellite is at penumbra region.\nSAT_LIGHTING_UMBRA: Satellite is at umbra region.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.satellite_position_i-NTuple{6,Number}",
    "page": "Library",
    "title": "SatelliteToolbox.satellite_position_i",
    "category": "method",
    "text": "function satellite_position_i(a::Number, e::Number, i::Number, RAAN::Number, w::Number, f::Number)\n\nCompute the satellite position in the Earth-Centered Inertial (ECI) reference frame given the orbital elements a, e, i, RAAN, w, and f.\n\nNotice that the ECI frame used will be the same as the frame of the orbital elements.\n\nArgs\n\na: Semi-major axis.\ne: Eccentricity.\ni: Inclination [rad].\nRAAN: Right ascension of the ascending node [rad].\nw: Argument of perigee [rad].\nf: True anomaly [rad].\n\nReturns\n\nThe satellite position vector represented in the ECI reference frame.\nThe unit vector perpendicular to the satellite position vector that lies on the orbit plane represented in the ECI reference frame.\n\nRemarks\n\nThe satellite position vector will have the same unit of the semi-major axis.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.satellite_sun_angle_earth_pointing",
    "page": "Library",
    "title": "SatelliteToolbox.satellite_sun_angle_earth_pointing",
    "category": "function",
    "text": "function satellite_sun_angle_earth_pointing(JD0::Number, a::Number, e::Number, i::Number, RAAN::Number, w::Number, numDays::Integer, N::AbstractVector, step::Number = 0.1*pi/180.0)\n\nCompute the Sun angle on a satellite surface for an Earth-pointing mission.\n\nArgs\n\nJD0: Initial instant for the analysis [Julian day].\na: Semi-major axis of the orbit [m].\ne: Orbit eccentricity.\ni: Orbit inclination [rad].\nw: Argument of perigee [rad].\nRAAN: Right ascension of the ascending node at JD0 [rad].\nnumDays: Number of days for the analysis.\nN: Vector normal to the surface represented in the body reference frame.\nmeanAnomaly: (OPTIONAL) If true, compute using angular steps in the mean                anomaly instead of in the orbit latitude (Default: false).\nstep: (OPTIONAL) Mean anomaly step (Default: 0.1 deg).\n\nReturns\n\nA matrix containing the Sun angle for each position in orbit for each day.\n\nNOTE: if the Sun angle is larger than 90 deg or if the satellite is in eclipse, then NaN is returned in the matrix.\n\nRemarks\n\nThe body reference frame is defined as:\n\nZ axis points towards the center of Earth;\nY axis points towards the negative direction of orbit normal;\nX axis completes the right-hand reference frame.\n\nIf the mean anomaly is used, then the average value of the output is the average sun radiation received by the satellite surface, because every angular steps have a fixed time interval.\n\nIf the mean anomaly is used, then the angle interval is [0, 2π]. Otherwise, the angle interval is [-π,π].\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.satellite_sun_angle_earth_pointing",
    "page": "Library",
    "title": "SatelliteToolbox.satellite_sun_angle_earth_pointing",
    "category": "function",
    "text": "function satellite_sun_angle_earth_pointing(JD0::Number, a::Number, e::Number, i::Number, RAAN::Number, w::Number, numDays::Integer, fN_k::Function, meanAnomaly::Bool = false, step::Number = 0.1*pi/180.0)\n\nCompute the Sun angle on a satellite surface for an Earth-pointing mission.\n\nArgs\n\nJD0: Initial instant for the analysis [Julian day].\na: Semi-major axis of the orbit [m].\ne: Orbit eccentricity.\ni: Orbit inclination [rad].\nw: Argument of perigee [rad].\nRAAN: Right ascension of the ascending node at JD0 [rad].\nnumDays: Number of days for the analysis.\nfN_k: Function f(s_b) that describes the solar panel normal at each k-th         sampling step. Notice that s_b is the Sun vector represented in         the body coordinate frame.\nmeanAnomaly: (OPTIONAL) If true, compute using angular steps in the mean                anomaly instead of in the orbit latitude (Default: false).\nstep: (OPTIONAL) Mean anomaly step (Default: 0.1 deg).\n\nReturns\n\nA matrix containing the sun angle [rad] for each position in orbit for each day.\n\nNOTE: if the Sun angle is larger than 90 deg or if the satellite is in eclipse, then NaN is returned in the matrix.\n\nRemarks\n\nThe body reference frame is defined as:\n\nZ axis points towards the center of Earth;\nY axis points towards the negative direction of orbit normal;\nX axis completes the right-hand reference frame.\n\nIf the mean anomaly is used, then the average value of the output is the average sun radiation received by the satellite surface, because every angular steps have a fixed time interval.\n\nIf the mean anomaly is used, then the angle interval is [0, 2π]. Otherwise, the angle interval is [-π,π].\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.satellite_sun_radiation_earth_pointing",
    "page": "Library",
    "title": "SatelliteToolbox.satellite_sun_radiation_earth_pointing",
    "category": "function",
    "text": "function satellite_sun_radiation_earth_pointing(JD0::Number, a::Number, e::Number, i::Number, RAAN::Number, w::Number, numDays::Integer, fN_k::Function, meanAnomaly::Bool = false, step::Number = 0.1*pi/180.0)\n\nCompute the Sun radiation on a satellite surface for an Earth-pointing mission.\n\nArgs\n\nJD0: Initial instant for the analysis [Julian day].\na: Semi-major axis of the orbit [m].\ne: Orbit eccentricity.\ni: Orbit inclination [rad].\nw: Argument of perigee [rad].\nRAAN: Right ascension of the ascending node at JD0 [rad].\nnumDays: Number of days for the analysis.\nfN_k: Function f(s_b) that describes the solar panel normal at each k-th         sampling step. Notice that s_b is the Sun vector represented in         the body coordinate frame.\nmeanAnomaly: (OPTIONAL) If true, compute using angular steps in the mean                anomaly instead of in the orbit latitude (Default: false).\nstep: (OPTIONAL) Mean anomaly step (Default: 0.1 deg).\n\nReturns\n\nA matrix containing the Sun radiation [W/m²] for each position in orbit for each day.\n\nNOTE: if the Sun angle is larger than 90 deg or if the satellite is in eclipse, then NaN is returned in the matrix.\n\nRemarks\n\nThe body reference frame is defined as:\n\nZ axis points towards the center of Earth;\nY axis points towards the negative direction of orbit normal;\nX axis completes the right-hand reference frame.\n\nIf the mean anomaly is used, then the average value of the output is the average sun radiation received by the satellite surface, because every angular steps have a fixed time interval.\n\nIf the mean anomaly is used, then the angle interval is [0, 2π]. Otherwise, the angle interval is [-π,π].\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.satellite_sun_radiation_earth_pointing",
    "page": "Library",
    "title": "SatelliteToolbox.satellite_sun_radiation_earth_pointing",
    "category": "function",
    "text": "function satellite_sun_radiation_earth_pointing(JD0::Number, a::Number, e::Number, i::Number, RAAN::Number, w::Number, numDays::Integer, N::Vector, meanAnomaly::Bool = false, step::Number = 0.1*pi/180.0)\n\nCompute the Sun radiation on a satellite surface for an Earth-pointing mission.\n\nArgs\n\nJD0: Initial instant for the analysis [Julian day].\na: Semi-major axis of the orbit [m].\ne: Orbit eccentricity.\ni: Orbit inclination [rad].\nw: Argument of perigee [rad].\nRAAN: Right ascension of the ascending node at JD0 [rad].\nnumDays: Number of days for the analysis.\nN: Vector normal to the surface represented in the body reference frame.\nmeanAnomaly: (OPTIONAL) If true, compute using angular steps in the mean                anomaly instead of in the orbit latitude (Default: false).\nstep: (OPTIONAL) Mean anomaly step (Default: 0.1 deg).\n\nReturns\n\nA matrix containing the Sun radiation [W/m²] for each position in orbit for each day.\n\nNOTE: if the Sun angle is larger than 90 deg or if the satellite is in eclipse, then NaN is returned in the matrix.\n\nRemarks\n\nThe body reference frame is defined as:\n\nZ axis points towards the center of Earth;\nY axis points towards the negative direction of orbit normal;\nX axis completes the right-hand reference frame.\n\nIf the mean anomaly is used, then the average value of the output is the average sun radiation received by the satellite surface, because every angular steps have a fixed time interval.\n\nIf the mean anomaly is used, then the angle interval is [0, 2π]. Otherwise, the angle interval is [-π,π].\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.satellite_sun_radiation_earth_pointing_mean",
    "page": "Library",
    "title": "SatelliteToolbox.satellite_sun_radiation_earth_pointing_mean",
    "category": "function",
    "text": "function satellite_sun_radiation_earth_pointing_mean(JD0::Number, a::Number, e::Number, i::Number, RAAN::Number, w::Number, numDays::Integer, N::AbstractVector, step::Number = 0.1*pi/180.0)\n\nCompute the mean Sun radiation on a satellite surface for an Earth-pointing mission.\n\nArgs\n\nJD0: Initial instant for the analysis [Julian day].\na: Semi-major axis of the orbit [m].\ne: Orbit eccentricity.\ni: Orbit inclination [rad].\nw: Argument of perigee [rad].\nRAAN: Right ascension of the ascending node at JD0 [rad].\nnumDays: Number of days for the analysis.\nN: Vector normal to the surface represented in the body reference frame.\nmeanAnomaly: (OPTIONAL) If true, compute using angular steps in the mean                anomaly instead of in the orbit latitude (Default: false).\nstep: (OPTIONAL) Mean anomaly step (Default: 0.1 deg).\n\nReturns\n\nThe mean Sun radiation on a surface [W/m²].\n\nRemarks\n\nFor more details, see satellitesunradiationearthpointing.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.satellite_sun_radiation_earth_pointing_mean",
    "page": "Library",
    "title": "SatelliteToolbox.satellite_sun_radiation_earth_pointing_mean",
    "category": "function",
    "text": "function satellite_sun_radiation_earth_pointing_mean(JD0::Number, a::Number, e::Number, i::Number, RAAN::Number, w::Number, numDays::Integer, fN_k::Function, step::Number = 0.1*pi/180.0)\n\nCompute the mean Sun radiation on a satellite surface for an Earth-pointing mission.\n\nArgs\n\nJD0: Initial instant for the analysis [Julian day].\na: Semi-major axis of the orbit [m].\ne: Orbit eccentricity.\ni: Orbit inclination [rad].\nw: Argument of perigee [rad].\nRAAN: Right ascension of the ascending node at JD0 [rad].\nnumDays: Number of days for the analysis.\nfN_k: Function f(s_b) that describes the solar panel normal at each k-th         sampling step. Notice that s_b is the Sun vector represented in         the body coordinate frame.\nmeanAnomaly: (OPTIONAL) If true, compute using angular steps in the mean                anomaly instead of in the orbit latitude (Default: false).\nstep: (OPTIONAL) Mean anomaly step (Default: 0.1 deg).\n\nReturns\n\nThe mean Sun radiation on a surface [W/m²].\n\nRemarks\n\nFor more details, see satellitesunradiationearthpointing.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.sgp4!-Union{Tuple{T}, Tuple{SGP4_Structure{T},Number}} where T",
    "page": "Library",
    "title": "SatelliteToolbox.sgp4!",
    "category": "method",
    "text": "function sgp4!(sgp4d::SGP4_Structure{T}, t::Number) where T\n\nPropagate the orbit defined in sgp4d (see SGP4_Structure) until the time t [min]. Notice that the values in sgp4d will be modified.\n\nReturns\n\nThe position vector represented in TEME frame at time t [km].\nThe velocity vector represented in TEME frame at time t [km/s].\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.sgp4_init-Union{Tuple{T}, Tuple{SGP4_GravCte{T},Number,Number,Number,Number,Number,Number,Number,Number}} where T",
    "page": "Library",
    "title": "SatelliteToolbox.sgp4_init",
    "category": "method",
    "text": "function sgp4_init(spg4_gc::SGP4_GravCte{T}, epoch::Number, n_0::Number, e_0::Number, i_0::Number, Ω_0::Number, ω_0::Number, M_0::Number, bstar::Number) where T\n\nInitialize the data structure of SGP4 algorithm.\n\nArgs\n\nspg4_gc: SPG4 gravitational constants (see SGP4_GravCte).\nepoch: Epoch of the orbital elements [Julian Day].\nn_0: SGP type \"mean\" mean motion at epoch [rad/min].\ne_0: \"Mean\" eccentricity at epoch.\ni_0: \"Mean\" inclination at epoch [rad].\nΩ_0: \"Mean\" longitude of the ascending node at epoch [rad].\nω_0: \"Mean\" argument of perigee at epoch [rad].\nM_0: \"Mean\" mean anomaly at epoch [rad].\nbstar: Drag parameter (B*).\n\nReturns\n\nThe structure SGP4_Structure with the initialized parameters.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.sim_RAAN_J2-Tuple{Number,Number,Number,Number,Integer}",
    "page": "Library",
    "title": "SatelliteToolbox.sim_RAAN_J2",
    "category": "method",
    "text": "function sim_RAAN_J2(a::Number, e::Number, i::Number, RAAN_0::Number, numDays::Integer)\n\nSimulate the RAAN of an orbit with semi-major axis a [m], eccentricity e, inclination i [rad], and initial RAAN RAAN_0 [rad] considering J2 perturbations. The analysis is performed for numDays days.\n\nReturns\n\nA numDays × 2 matrix in which the i-th line is:\n\n| day | RAAN (0,2π) [rad] |\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.sort_list_ss_orbits_by_height-Tuple{Array{T,2} where T}",
    "page": "Library",
    "title": "SatelliteToolbox.sort_list_ss_orbits_by_height",
    "category": "method",
    "text": "sortlistssorbitsbyheight(ssorbits::Matrix)\n\nSort the list of Sun-synchronous orbits ss_orbits (see list_ss_orbits_by_rep_period) by height and return a new matrix.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.step!-Tuple{OrbitPropagatorJ2,Number}",
    "page": "Library",
    "title": "SatelliteToolbox.step!",
    "category": "method",
    "text": "function step!(orbp, Δt::Number)\n\nPropagate the orbit in orbp by Δt [s] using the algorithm of orbp. The new parameters will be written in orbp.\n\nReturns\n\nThe Keplerian elements represented in the inertial frame after the step (see Orbit) [SI units].\nThe position vector represented in the inertial frame after the step [m].\nThe velocity vector represented in the inertial frame after the step [m].\n\nRemarks\n\nThe inertial frame in which the output is represented depends on which frame it was used to generate the orbit parameters. If the orbit parameters are obtained from a TLE, then the inertial frame will be TEME. Notice, however, that the perturbation theory requires an inertial frame with true equator.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.sun_position_i-Tuple{Number}",
    "page": "Library",
    "title": "SatelliteToolbox.sun_position_i",
    "category": "method",
    "text": "function sun_position_i(JD::Number)\n\nCompute the Sun position represented in the Mean Equinox of Date (MOD) at the Julian Day JD. The algorithm was adapted from [3, p. 277-279].\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.sun_velocity_i-Tuple{Number}",
    "page": "Library",
    "title": "SatelliteToolbox.sun_velocity_i",
    "category": "method",
    "text": "function sun_velocity_i(JD::Number)\n\nCompute the Sun velocity represented in the Mean Equinox of Date (MOD) at the Julian Day JD. The algorithm was obtained by computing the time derivative of the Sun position in [3, p. 277-279].\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.swath_width-Tuple{Real,Real}",
    "page": "Library",
    "title": "SatelliteToolbox.swath_width",
    "category": "method",
    "text": "function swath_width(h::real, HalfFOV::real)\n\nCompute the swath width given the orbit altitude and the half FOV.\n\nArgs\n\nh: Orbit altitude [m].\nHalfFOV: Half field of view [rad].\n\nReturns\n\nThe swath width [m].\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.twobody!-Tuple{TwoBody_Structure,Number}",
    "page": "Library",
    "title": "SatelliteToolbox.twobody!",
    "category": "method",
    "text": "function twobody!(tbd::TwoBody_Structure, t::Number)\n\nPropagate the orbit defined in tbd (see TwoBody_Structure) until the time t [s]. Notice that the values in tbd will be modified.\n\nReturns\n\nThe position vector represented in the inertial frame at time t [m].\nThe velocity vector represented in the inertial frame at time t [m/s]\n\nRemarks\n\nThe inertial frame in which the output is represented depends on which frame it was used to generate the orbit parameters. If the orbit parameters are obtained from a TLE, then the inertial frame will be TEME.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.twobody_init-Union{Tuple{T}, Tuple{Number,Number,Number,Number,Number,Number,Number,T}} where T",
    "page": "Library",
    "title": "SatelliteToolbox.twobody_init",
    "category": "method",
    "text": "function twobody_init(epoch::Number, n_0::Number, e_0::Number, i_0::Number, Ω_0::Number, ω_0::Number, M_0::Number, μ::T) where T\n\nInitialize the data structure of Two Body orbit propagator algorithm.\n\nArgs\n\nepoch: Epoch of the orbital elements [s].\nn_0: Mean motion at epoch [rad/s].\ne_0: Initial eccentricity.\ni_0: Initial inclination [rad].\nΩ_0: Initial right ascension of the ascending node [rad].\nω_0: Initial argument of perigee [rad].\nM_0: Initial mean anomaly.\nμ: Standard gravitational parameter of the central body [m^3/s^2].\n\nReturns\n\nThe structure TwoBody_Structure with the initialized parameters.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.@check_orbit-Tuple{Any,Any}",
    "page": "Library",
    "title": "SatelliteToolbox.@check_orbit",
    "category": "macro",
    "text": "macro check_orbit(a, e)\n\nVerify if the orbit with semi-major axis a [m] and eccentricity e is valid. This macro throws an exception if the orbit is not valid.\n\nReturn true is the orbit is valid, and false otherwise.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.@tle_str-Tuple{Any}",
    "page": "Library",
    "title": "SatelliteToolbox.@tle_str",
    "category": "macro",
    "text": "macro tle_str(str)\n\nParse a set of TLEs in the string str and return as an array of TLE. This version verifies the checksum of the TLE. If the checksum verification is not desired, see @tlenc_str.\n\nExample\n\njulia> tles = tle\"\"\"\n       CBERS 4\n       1 40336U 14079A   18166.15595376 -.00000014  00000-0  10174-4 0  9993\n       2 40336  98.4141 237.7928 0001694  75.7582 284.3804 14.35485112184485\n       SCD 1\n       1 22490U 93009B   18165.62596833  .00000225  00000-0  11410-4 0  9991\n       2 22490  24.9690 231.7852 0042844 200.7311 292.7198 14.44524498338066\n       SCD 2\n       1 25504U 98060A   18165.15074951  .00000201  00000-0  55356-5 0  9994\n       2 25504  24.9961  80.1303 0017060 224.4822 286.6438 14.44043397 37312\n       \"\"\"\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.@tlenc_str-Tuple{Any}",
    "page": "Library",
    "title": "SatelliteToolbox.@tlenc_str",
    "category": "macro",
    "text": "macro tlenc_str(str)\n\nParse a set of TLEs in the string str and return as an array of TLE. This version does not verify the checksum of the TLE. If the checksum verification is required, see @tle_str.\n\nExample\n\njulia> tles = tlenc\"\"\"\n       CBERS 4\n       1 40336U 14079A   18166.15595376 -.00000014  00000-0  10174-4 0  9993\n       2 40336  98.4141 237.7928 0001694  75.7582 284.3804 14.35485112184485\n       SCD 1\n       1 22490U 93009B   18165.62596833  .00000225  00000-0  11410-4 0  9991\n       2 22490  24.9690 231.7852 0042844 200.7311 292.7198 14.44524498338066\n       SCD 2\n       1 25504U 98060A   18165.15074951  .00000201  00000-0  55356-5 0  9994\n       2 25504  24.9961  80.1303 0017060 224.4822 286.6438 14.44043397 37312\n       \"\"\"\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox._expatmosphere_H",
    "page": "Library",
    "title": "SatelliteToolbox._expatmosphere_H",
    "category": "constant",
    "text": "Scale height for the exponential atmospheric model [km].\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox._expatmosphere_h₀",
    "page": "Library",
    "title": "SatelliteToolbox._expatmosphere_h₀",
    "category": "constant",
    "text": "Base altitude for the exponential atmospheric model [km].\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox._expatmosphere_ρ₀",
    "page": "Library",
    "title": "SatelliteToolbox._expatmosphere_ρ₀",
    "category": "constant",
    "text": "Nominal density for the exponential atmospheric model [kg/m³].\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox._jr1971_constants",
    "page": "Library",
    "title": "SatelliteToolbox._jr1971_constants",
    "category": "constant",
    "text": "Constants for the Jacchia-Roberts 1971 Atmospheric Model.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox._jr1971_id",
    "page": "Library",
    "title": "SatelliteToolbox._jr1971_id",
    "category": "constant",
    "text": "Index of the species for the Jacchia-Roberts 1971 Atmospheric Model.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.JR1971_CONSTANTS",
    "page": "Library",
    "title": "SatelliteToolbox.JR1971_CONSTANTS",
    "category": "type",
    "text": "Structure with the constants for the Jacchia-Roberts 1971 Atmospheric Model.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox._DTCFILE_Structure",
    "page": "Library",
    "title": "SatelliteToolbox._DTCFILE_Structure",
    "category": "type",
    "text": "Structure to store the interpolations of the data in DTCFILE.TXT file.\n\nFields\n\nDstΔTc: Temperature variation due to Dst [K].\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox._SOLFSMY_Structure",
    "page": "Library",
    "title": "SatelliteToolbox._SOLFSMY_Structure",
    "category": "type",
    "text": "Structure to store the interpolations of the data in SOLFSMY.TXT file.\n\nFields\n\nF10: 10.7-cm solar flux [10⁻²² W/(m² Hz)].\nF81a: 10.7-cm averaged solar flux, 81-day centered on input time.\nS10: EUV index.\nS81a: EUV 81-day averaged centered index.\nM10: MG2 index scaled to F10.\nM81a: MG2 81-day averaged centered index.\nY81a: Solar X-ray & Lya 81-day averaged centered index.\nY81a: Solar X-ray & Lya 81-day averaged centered index.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox._WDC_Structure",
    "page": "Library",
    "title": "SatelliteToolbox._WDC_Structure",
    "category": "type",
    "text": "Structure to store the interpolations of the data in WDC files.\n\nFields\n\nKp: Kp index.\nAp: Ap index.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox._ccor-Union{Tuple{T}, NTuple{4,T}} where T<:Number",
    "page": "Library",
    "title": "SatelliteToolbox._ccor",
    "category": "method",
    "text": "function _ccor(alt::T, r::T, h1::T, zh::T) where T<:Number\n\nChemistry / Dissociation correction for MSIS models.\n\nArgs\n\nalt: Altitude.\nr: Target ratio.\nh1: Transition scale length.\nzh: Altitude of 1/2 r.\n\nReturns\n\nThe chemistry / dissociation correction.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox._ccor2-Union{Tuple{T}, NTuple{5,T}} where T<:Number",
    "page": "Library",
    "title": "SatelliteToolbox._ccor2",
    "category": "method",
    "text": "function _ccor2(alt::T, r::T, h1::T, zh::T, h2::T) where T<:Number\n\nChemistry / Dissociation correction for MSIS models.\n\nArgs\n\nalt: Altitude.\nr: Target ration.\nh1: Transition scale length.\nzh: Altitude of 1/2 r.\nh2: Transition scale length 2.\n\nReturns\n\nThe chemistry / dissociation correction.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox._densm-Union{Tuple{N3}, Tuple{N2}, Tuple{T}, Tuple{T,T,T,T,T,T,StaticArray{Tuple{N3},T,1},AbstractArray{T,1},AbstractArray{T,1},StaticArray{Tuple{N2},T,1},AbstractArray{T,1},AbstractArray{T,1}}} where N3 where N2 where T<:Number",
    "page": "Library",
    "title": "SatelliteToolbox._densm",
    "category": "method",
    "text": "function _densm(re::T, gsurf::T, alt::T, d0::T, xm::T, tz::T, zn3::StaticVector{N3,T}, tn3::AbstractVector{T}, tgn3::AbstractVector{T}, zn2::StaticVector{N2,T}, tn2::AbstractVector{T}, tgn2::AbstractVector{T}) where T<:Number where N2 where N3\n\nCompute the temperature and density profiles for lower atmosphere.\n\nReturns\n\nThe density.\nThe temperature.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox._densu-Union{Tuple{N}, Tuple{T}, Tuple{T,T,T,T,T,T,T,T,T,T,StaticArray{Tuple{N},T,1},AbstractArray{T,1},AbstractArray{T,1}}} where N where T<:Number",
    "page": "Library",
    "title": "SatelliteToolbox._densu",
    "category": "method",
    "text": "function _densu(re::T, gsurf::T, alt::T, dlb::T, tinf::T, tlb::T, xm::T, alpha::T, zlb::T, s2::T, zn1::StaticVector{N,T}, tn1::AbstractVector{T}, tgn1::AbstractVector{T}) where T<:Number where N\n\nCompute the temperature and density profiles for MSIS models.\n\nThis algorithm uses new lower thermo polynomial.\n\nReturns\n\nThe density.\nThe temperature.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox._dnet-Union{Tuple{T}, NTuple{5,T}} where T<:Number",
    "page": "Library",
    "title": "SatelliteToolbox._dnet",
    "category": "method",
    "text": "function _dnet(dd::T, dm::T, zhm::T, xmm::T, xm::T) where T<:Number\n\nTurbopause correction for MSIS models.\n\nArgs\n\ndd: Diffusive density.\ndm: Full mixed density.\nzhm: Transition scale length.\nxmm: Full mixed molecular weight.\nxm: Species molecular weight.\n\nReturns\n\nThe combined density.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox._glob7s-Union{Tuple{T}, Tuple{AbstractArray{T,1},NRLMSISE00_Structure{T}}} where T<:Number",
    "page": "Library",
    "title": "SatelliteToolbox._glob7s",
    "category": "method",
    "text": "function _glob7s(p::AbstractVector{T}, nrlmsise00d::NRLMSISE00_Structure{T}) where T<:Number\n\nVersion of Globe for lower atmosphere (1999-10-26).\n\nArgs\n\np: Vector with the coefficients.\nnrlmsise00d: NRLMSISE-00 structure (see NRLMSISE00_Structure).\n\nReturns\n\nThe temperature (?).\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox._globe7!-Union{Tuple{T}, Tuple{AbstractArray{T,1},NRLMSISE00_Structure{T}}} where T<:Number",
    "page": "Library",
    "title": "SatelliteToolbox._globe7!",
    "category": "method",
    "text": "function _globe7!(p::AbstractVector{T}, nrlmsise00d::NRLMSISE00_Structure{T}) where T<:Number\n\nCompute G(L) function.\n\nNotice that the parameters apt and apdf of structure nrlmsise00d are modified.\n\nArgs\n\np: Vector with the coefficients.\nnrlmsise00d: NRLMSISE-00 structure (see NRLMSISE00_Structure).\n\nReturns\n\nThe temperature (?).\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox._init_dtcfile-Tuple{}",
    "page": "Library",
    "title": "SatelliteToolbox._init_dtcfile",
    "category": "method",
    "text": "function _init_dctfile(;force_download = false, local_path = nothing)\n\nInitialize the data in the file DTCFILE.TXT by creating _dtcfile_data. The initialization process is composed of:\n\nDownload the file, if it is necessary;\nParse the file;\nCreate the interpolations and the structures.\n\nIf the keyword force_download is true, then the file will always be downloaded.\n\nThe user can also specify a location for the file using the keyword local_path. If it is nothing, which is the default, then the file will be downloaded.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox._init_fluxtable-Tuple{}",
    "page": "Library",
    "title": "SatelliteToolbox._init_fluxtable",
    "category": "method",
    "text": "function _init_fluxtable(;force_download = false, local_path = nothing)\n\nInitialize the data in the file fluxtable.txt by creating _fluxtable_data. The initialization process is composed of:\n\nDownload the file, if it is necessary;\nParse the file;\nCreate the interpolations and the structures.\n\nIf the keyword force_download is true, then the file will always be downloaded.\n\nThe user can also specify a location for the file using the keyword local_path. If it is nothing, which is the default, then the file will be downloaded.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox._init_solfsmy-Tuple{}",
    "page": "Library",
    "title": "SatelliteToolbox._init_solfsmy",
    "category": "method",
    "text": "function _init_solfsmy(;force_download = false, local_path = nothing)\n\nInitialize the data in the file SOLFSMY.TXT by creating _solfsmy_data. The initialization process is composed of:\n\nDownload the file, if it is necessary;\nParse the file;\nCreate the interpolations and the structures.\n\nIf the keyword force_download is true, then the file will always be downloaded.\n\nThe user can also specify a location for the file using the keyword local_path. If it is nothing, which is the default, then the file will be downloaded.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox._init_wdcfiles-Tuple{}",
    "page": "Library",
    "title": "SatelliteToolbox._init_wdcfiles",
    "category": "method",
    "text": "function _init_wdcfiles(;force_download = false, local_dir = nothing, wdcfiles_oldest_year = year(now())-3)\n\nInitialize the data in the WDC files by creating _wdcfiles_data. The initialization process is composed of:\n\nDownload the files, if it is necessary;\nParse the files;\nCreate the interpolations and the structures.\n\nIf the keyword force_download is true, then the files will always be downloaded.\n\nThe user can also specify a location for the directory with the WDC files using the keyword local_dir. If it is nothing, which is the default, then the file will be downloaded.\n\nThe user can select what is the oldest year in which the data will be downloaded by the keyword wdcfiles_oldest_year. By default, it will download the data from 3 previous years.\n\nThe user can select what is the newest year in which the data will be downloaded by the keyword wdcfiles_newest_year. It it is nothing, which is the default, then it is set to the current year.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox._jb2008_M-Union{Tuple{R}, Tuple{R}} where R",
    "page": "Library",
    "title": "SatelliteToolbox._jb2008_M",
    "category": "method",
    "text": "function _jb2008_M(z::R) where R\n\nCompute the mean molecular mass at altitude z [km] using the empirical profile in eq. 1 [3].\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox._jb2008_T-Union{Tuple{R}, Tuple{R,R,R}} where R<:Number",
    "page": "Library",
    "title": "SatelliteToolbox._jb2008_T",
    "category": "method",
    "text": "function _jb2008_T(z::R, Tx::R, T∞::R) where R<:Number\n\nCompute the temperature [K] at height z [km] given the temperature Tx [K] at the inflection point, and the exospheric temperature T∞ [K] according to the theory of the model Jacchia 1971 [3].\n\nThe inflection point is considered to by z = 125 km.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox._jb2008_grav-Union{Tuple{R}, Tuple{R}} where R",
    "page": "Library",
    "title": "SatelliteToolbox._jb2008_grav",
    "category": "method",
    "text": "function _jb2008_grav(z::R) where R\n\nCompute the gravity [m/s] at altitude z [km] according to the model Jacchia 1971 [3].\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox._jb2008_highaltitude-Tuple{Number,Number}",
    "page": "Library",
    "title": "SatelliteToolbox._jb2008_highaltitude",
    "category": "method",
    "text": "function _jb2008_highaltitude(h::Number, F10ₐ::Number)\n\nCompute the high altitude exospheric density correction factor in altitude h [km] and the averaged 10.7-cm solar flux (81-day centered on input time) [10⁻²² W/(M² Hz)].\n\nThis function uses the model in Section 6.2 of [2].\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox._jb2008_int-Tuple{Number,Number,Number,Number,Number,Function}",
    "page": "Library",
    "title": "SatelliteToolbox._jb2008_int",
    "category": "method",
    "text": "function _jb2008_int(z₀::Number, z₁::Number, R::Number, Tx::Number, T∞::Number, δf::Function)\n\nCompute the integral of the function δf between z₀ and z₁ using the Newton-Cotes 4th degree method. R is a number that defines the step size, Tx is the temperature at the inflection point, and T∞ is the exospheric temperature.\n\nThe signature of the function δf is:\n\nδf(z, Tx, T∞)\n\nand it must be _jb2008_δf1 or _jb2008_δf2.\n\nThis function returns a tuple containing the integral and last value of z used in the numerical algorithm.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox._jb2008_semiannual-NTuple{5,Number}",
    "page": "Library",
    "title": "SatelliteToolbox._jb2008_semiannual",
    "category": "method",
    "text": "function _jb2008_semiannual(doy::Number, h::Number, F10ₐ::Number, S10ₐ::Number, M10ₐ::Number)\n\nCompute the semiannual variation of the density considering the JB2008 model [1].\n\nArgs\n\ndoy: Day of the year + fraction of the day.\nh: Height [km].\nF10ₐ: Averaged 10.7-cm flux (81-day centered on input-time)         [10⁻²² W/(M² Hz)].\nS10ₐ: EUV 81-day averaged centered index.\nM10ₐ: MG2 81-day averaged centered index.\n\nReturns\n\nSemiannual F(z) heigh function.\nSemiannual G(t) yearly periodic function.\nSemiannual variation of the density Δsalog₁₀ρ.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox._jb2008_ΔTc-NTuple{4,Number}",
    "page": "Library",
    "title": "SatelliteToolbox._jb2008_ΔTc",
    "category": "method",
    "text": "function _jb2008_ΔTc(F10::Number, lst::Number, glat::Number, h::Number)\n\nCompute the correction in the Tc for Jacchia-Bowman model.\n\nThis correction is mention in [2]. However, the equations do not seem to match those in the source-code. The ones implemented here are exactly the same as in the source-code.\n\nArgs\n\nF10: F10.7 flux.\nlst: Local solar time (0 - 24) [hr].\nglat: Geocentric latitude [rad].\nh: Altitude [km].\n\nReturns\n\nThe correction ΔTc [K].\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox._jb2008_δf1-Tuple{Any,Any,Any}",
    "page": "Library",
    "title": "SatelliteToolbox._jb2008_δf1",
    "category": "method",
    "text": "function _jb2008_δf1(z, Tx, T∞)\n\nAuxiliary function to compute the integrand in _jb2008_int.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox._jb2008_δf2-Tuple{Any,Any,Any}",
    "page": "Library",
    "title": "SatelliteToolbox._jb2008_δf2",
    "category": "method",
    "text": "function _jb2008_δf2(z, Tx, T∞)\n\nAuxiliary function to compute the integrand in _jb2008_int.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox._jr1971_M-Union{Tuple{R}, Tuple{R}} where R",
    "page": "Library",
    "title": "SatelliteToolbox._jr1971_M",
    "category": "method",
    "text": "function _jr1971_M(z::R) where R\n\nCompute the mean molecular mass at altitude z [km] using the empirical profile in eq. 1 [3,4].\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox._jr1971_T-Union{Tuple{R}, Tuple{R,R,R}} where R<:Number",
    "page": "Library",
    "title": "SatelliteToolbox._jr1971_T",
    "category": "method",
    "text": "function _jr1971_T(z::R, Tx::R, T∞::R) where R<:Number\n\nCompute the temperature [K] at height z [km] given the temperature Tx [K] at the inflection point, and the exospheric temperature T∞ [K] according to the theory of the model Jacchia-Roberts 1971 [1,3,4].\n\nThe inflection point is considered to by z = 125 km.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox._jr1971_roots-Union{Tuple{Array{R,1}}, Tuple{R}} where R",
    "page": "Library",
    "title": "SatelliteToolbox._jr1971_roots",
    "category": "method",
    "text": "function _jr1971_roots(p::Polynomial{R}) where R\n\nCompute the roots of the polynomial p necessary to compute the density below 125 km. It returns the value r₁, r₂, x, and y.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox._parse_dtcfile-Tuple{AbstractString}",
    "page": "Library",
    "title": "SatelliteToolbox._parse_dtcfile",
    "category": "method",
    "text": "function _parse_dtcfile(path::AbstractString)\n\nParse the DTCFILE.TXT file in path and return an instance of the structure _DTCFILE_Structure with the initialized interpolations.\n\nThe format of the file DTCFILE.TXT must be:\n\nDTC YYYY DOY DTC_0h DTC_1h DTC_2h ... DTC_22h DTC_23h\n\nin which DOY is the day of the year and DTC_Xh is the ΔTc at hour X.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox._parse_fluxtable-Tuple{AbstractString}",
    "page": "Library",
    "title": "SatelliteToolbox._parse_fluxtable",
    "category": "method",
    "text": "function _parse_fluxtable(path::AbstractString)\n\nParse the fluxtable.txt file in path and return an instance of the structure _fluxtable_Structure with the initialize interpolations.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox._parse_solfsmy-Tuple{AbstractString}",
    "page": "Library",
    "title": "SatelliteToolbox._parse_solfsmy",
    "category": "method",
    "text": "function _parse_solfsmy(path::AbstractString)\n\nParse the SOLFSMY.TXT file in path and retur an instance of the structure _SOLFSMY_Structure with the initialized interpolations.\n\nThe format of the file SOLFSMY.TXT must be:\n\nYYYY DDD   JulianDay  F10   F81c  S10   S81c  M10   M81c  Y10   Y81c  Ssrc\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox._parse_wdcfiles-Tuple{Array{String,1},Array{Int64,1}}",
    "page": "Library",
    "title": "SatelliteToolbox._parse_wdcfiles",
    "category": "method",
    "text": "function _parse_wdcfiles(filepaths::Vector{String}, years::Vector{Int})\n\nParse the WDC files with paths in filepaths related to the years in years.\n\nNotice that the files must be sorted by the year!\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox._prepare_wdc_remote_files-Tuple{Number,Number}",
    "page": "Library",
    "title": "SatelliteToolbox._prepare_wdc_remote_files",
    "category": "method",
    "text": "function _prepare_wdc_remote_files(oldest_year::Number, newest_year::Number)\n\nConfigure all the WDC remote files between newest_year and oldest_year. Notice that previous years will never be updated whereas the current year will be updated daily.\n\nIf oldest_year is greater than current year, then only the files from the current year will be downloaded.\n\nIf newest_year is smaller than oldest_year, then only the files from the oldest_year will be downloaded.\n\nThis function modifies the global variable _wdcfiles.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox._spline-Union{Tuple{N}, Tuple{T}, Tuple{StaticArray{Tuple{N},T,1},StaticArray{Tuple{N},T,1},T,T}} where N where T<:Number",
    "page": "Library",
    "title": "SatelliteToolbox._spline",
    "category": "method",
    "text": "function _spline(x::StaticVector{N,T}, y::StaticVector{N,T}, yp1::T, ypn::T) where {T<:Number,N}\n\nCompute the 2nd derivatives of cubic spline interpolation function tabulated by x and y given the 2nd derivatives values at x[1] (yp1) and at x[N] (ypn).\n\nThis function was adapted from Numerical Recipes.\n\nArgs\n\nx: X components of the tabulated function in ascending order.\ny: Y components of the tabulated function evaluated at x.\nyp1: 2nd derivative value at x[1].\nypn: 2nd derivative value at x[N].\n\nReturns\n\nThe 2nd derivative of cubic spline interpolation function evaluated at x.\n\nRemarks\n\nValues higher than 1e30 in the 2nd derivatives at the borders (yp1 and ypn) are interpreted as 0.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox._splini-Union{Tuple{N}, Tuple{T}, Tuple{StaticArray{Tuple{N},T,1},StaticArray{Tuple{N},T,1},StaticArray{Tuple{N},T,1},T}} where N where T<:Number",
    "page": "Library",
    "title": "SatelliteToolbox._splini",
    "category": "method",
    "text": "function _splini(xa::StaticVector{N,T}, ya::StaticVector{N,T}, y2a::StaticVector{N,T}, x::T) where {T<:Number,N}\n\nCompute the integral of the cubic spline function from xa[1] to x.\n\nArgs\n\nxa: X components of the tabulated function in ascending order.\nya: Y components of the tabulated function evaluated at xa.\ny2a: Second derivatives.\nx: Abscissa endpoint for integration.\n\nReturns\n\nThe integral of cubic spline function from xa[1] to x.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox._splint-Union{Tuple{N}, Tuple{T}, Tuple{StaticArray{Tuple{N},T,1},StaticArray{Tuple{N},T,1},StaticArray{Tuple{N},T,1},T}} where N where T<:Number",
    "page": "Library",
    "title": "SatelliteToolbox._splint",
    "category": "method",
    "text": "function _splint(xa::StaticVector{N,T}, ya::StaticVector{N,T}, y2a::StaticVector{N,T}, x::T) where {T<:Number,N}\n\nCompute the cubic spline interpolation value at x.\n\nThis function was adapted from Numerical Recipes.\n\nArgs\n\nxa: X components of the tabulated function in ascending order.\nya: Y components of the tabulated function evaluated at xa.\ny2a: Second derivatives.\nx: Abscissa endpoint for interpolation.\n\nReturns\n\nThe cubic spline interpolation value at x.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.compute_checksum-Tuple{AbstractString}",
    "page": "Library",
    "title": "SatelliteToolbox.compute_checksum",
    "category": "method",
    "text": "function compute_checksum(str::AbstractString)\n\nCompute the checksum of the line str modulo 10.\n\nThe algorithm is simple: add all the numbers in the line, ignoring letters, spaces, periods, and plus signs, but assigning +1 to the minus signs. The checksum is the remainder of the division by 10.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.gts7-Union{Tuple{NRLMSISE00_Structure{T}}, Tuple{T}} where T<:Number",
    "page": "Library",
    "title": "SatelliteToolbox.gts7",
    "category": "method",
    "text": "function gts7(nrlmsise00d::NRLMSISE00_Structure{T}) where T<:Number\n\nThermospheric portion of NRLMSISE-00. This function should not be called to compute NRLMSISE-00. Use gtd7 or gtd7d instead.\n\nArgs\n\nnrlmsise00d: An instance of NRLMSISE00_Structure.\n\nReturns\n\nAn instance of structure NRLMSISE00_Structure with the outputs.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.print_tle",
    "page": "Library",
    "title": "SatelliteToolbox.print_tle",
    "category": "function",
    "text": "function print_tle(io::IO, tle::TLE, color::Bool = true)\n\nPrint the TLE tle in the IO io.\n\nIf color is true, then the text will be printed using colors. If color is omitted, then it defaults to true.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.@_keyword_found-Tuple{Any,Any,Any}",
    "page": "Library",
    "title": "SatelliteToolbox.@_keyword_found",
    "category": "macro",
    "text": "macro _keyword_found(keyword, keywords_found, current_line)\n\nCheck if the keyword exists in the list keywords_found. If true, then throw an error indicating that the problem occurred on the current_line.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.@_parse_float-Tuple{Any}",
    "page": "Library",
    "title": "SatelliteToolbox.@_parse_float",
    "category": "macro",
    "text": "macro _parse_float(input)\n\nParse the input to float substituting all Ds and ds  to e, so that we can convert numbers in FORTRAN format.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#SatelliteToolbox.@parse_value-Tuple{Any,Any,Any}",
    "page": "Library",
    "title": "SatelliteToolbox.@parse_value",
    "category": "macro",
    "text": "macro parsevalue(T, str, linenum)\n\nParse the string str using the type T. If it is not succeeded, then throw an error indicating the line line_num with the problem.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#Library-1",
    "page": "Library",
    "title": "Library",
    "category": "section",
    "text": "Documentation for SatelliteToolbox.jl.Modules = [SatelliteToolbox]"
},

]}
