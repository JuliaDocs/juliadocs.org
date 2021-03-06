var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "#BinaryBuilder.jl-1",
    "page": "Home",
    "title": "BinaryBuilder.jl",
    "category": "section",
    "text": "The purpose of the BinaryBuilder.jl Julia package is to provide a system for compiling 3rd-party binary dependencies should work anywhere the official Julia distribution does.  In particular, using this package you will be able to compile your large pre-existing codebases of C, C++ and Fortran software into binaries that can be downloaded and loaded/run on a very wide range of machines.  As it is difficult (and often expensive) to natively compile software packages across the growing number of platforms that this package will need to support, we focus on Linux-hosted cross-compilers.  This package will therefore set up an environment to perform cross-compilation for all of the major platforms, and will do its best to make the compilation process as painless as possible.Note that at this time, BinaryBuilder runs on Linux x86_64 systems only, with macOS support under active development, although it builds binaries for all major platforms."
},

{
    "location": "#Project-flow-1",
    "page": "Home",
    "title": "Project flow",
    "category": "section",
    "text": "Suppose that you have a Julia package Foo.jl for which you want to build binary dependencies.  With BinaryBuilder, you will create a GitHub repository FooBuilder that contains a build_tarballs.jl script to build the libraries and other binaries needed by Foo.jl.  It is very common that you will want these binaries to be built by Travis CI automatically, so most builder repositories will want to create a .travis.yml file as well to automatically run build_tarballs.jl and upload (\"deploy\") the resulting binaries (\"build artifacts\") to a release in the FooBuilder repository.The result of a successful build is the set of built binaries as well as a build.jl file that can be used within Foo.jl (with the BinaryProvider package) to download and make available these binaries for Julia packages.  Much of this process can be done for you interactively through the run_wizard function, though that wizard currently only runs on Linux and MacOS with supported hardware.The build_tarballs.jl file is a Julia script of the form using BinaryBuilder; build_tarballs(ARGS, \"Foo\", sources, script, platforms, products, dependencies).  See below for a detailed description of the arguments, but essentially you provide: a list of sources to download (source code tarballs or git repositories, for example) and any dependencies required to build the sources, a bash script to build and install your code, a list of platforms to build on, and a list of build products (e.g. libraries) to save and upload.  This is the script that will be ultimately run when you run julia build_tarballs.jl locally, or on a Travis CI server.In order to build on Travis, you must have a Travis CI account and enable Travis for your FooBuilder repository that is hosted on Github.  This will allow Travis to automatically run your script whenever changes are pushed to the repository.  The .travis.yml file describes what Travis should run, and for BinaryBuilder this file should have a particular form that is automatically generated for you by the run_wizard function, and can also be created by the setup_travis function.  Alternatively, you can copy it from one of the provided examples, changing a couple of lines for the name of the repo and the OAuth token.In particular, Travis uploads the build products to a GitHub release whenever you push a new tag or create a new release in your FooBuilder repository.  To do this, Travis needs to authenticate itself to the Github server, and it does this using an encrypted OAuth token stored in your .travis.yml file.   This token is created for you automatically by the run_wizard or setup_travis functions, and it can also be created manually via travis setup releases using the travis command-line program.Once these files are created and uploaded to GitHub, and Travis is enabled for your FooBuilder repository, then simply creating a release in your repo will trigger Travis to run, using cross-compilers to generate binaries for all platforms simultaneously, and finally to automatically attach the binaries to the release, along with a build.jl file that is used by client Julia packages that wish to download and install this package.See also the FAQ, build tips, and tricksy gotchas for help with common problems."
},

{
    "location": "#Build-scripts-1",
    "page": "Home",
    "title": "Build scripts",
    "category": "section",
    "text": "A BinaryBuilder.jl build script (what is often referred to as a build_tarballs.jl file) looks something like this:using BinaryBuilder\n\nsrc_tarball = \"<path to source tarball>\"\nsrc_hash    = \"sha256 hash of the source tarball\"\nsources = [\n    (src_tarball, src_hash),\n]\n\nscript = raw\"\"\"\nmake\nmake install\n\"\"\"\n\nproducts(prefix) = [\n    LibraryProduct(prefix, \"libfoo\", :libfoo),\n    ExecutableProduct(prefix, \"fooifier\", :fooifier),\n]\n\ndependencies = []\n\n# Build \'em!\nbuild_tarballs(\n    ARGS,\n    \"libfoo\",\n    sources,\n    script,\n    platforms,\n    products,\n    dependencies,\n)This bare-bones snippet (an adapted form of the libfoo test within this repository) first identifies the sources to download and compile (there can be multiple sources listed here), then lists the bash commands to actually build this particular project.  Next, the products are defined.  These represent the output of the build process, and are how BinaryBuilder.jl knows that its build has succeeded.  Finally, we pass this information off to build_tarballs(), which takes it all in and runs the builds, placing output tarballs into the ./products directory.The bash commands contained within script will be executed for each platform that is passed in, so if there are platform differences that need to be addressed in the build script, using if statements and the $target environment variable can be a powerful tool.  See the OpenBLASBuilder build script for an example showcasing this.Once the build_tarballs() method completes, it will have written out a build.jl file to download and install the generated tarballs.  This file is what will be used in Julia packages that need to use your built binaries, and is typically included within the tagged release uploads from a builder repository.  Here is an example release from the IpoptBuilder repository, containing built tarballs as well as a build.jl that can be used within Ipopt.jl.While constructing your own build script is certainly possible, BinaryBuilder.jl supports a more interactive method for building the binary dependencies and capturing the commands used to build it into a build_tarballs.jl file; the Wizard interface."
},

{
    "location": "#Wizard-interface-1",
    "page": "Home",
    "title": "Wizard interface",
    "category": "section",
    "text": "BinaryBuilder.jl contains a wizard interface that will walk you through constructing a build_tarballs.jl file.  To launch it, run BinaryBuilder.run_wizard(), and follow the instructions on-screen."
},

{
    "location": "#How-does-this-all-work?-1",
    "page": "Home",
    "title": "How does this all work?",
    "category": "section",
    "text": "BinaryBuilder.jl wraps a root filesystem that has been carefully constructed so as to provide the set of cross-compilers needed to support the wide array of platforms that Julia runs on.  This RootFS is then used as the chroot jail for a sandboxed process which runs within the RootFS as if that were the whole world.  The workspace containing input source code and (eventually) output binaries is mounted within the RootFS and environment variables are setup such that the appropriate compilers for a particular target platform are used by build tools."
},

{
    "location": "build_tips/#",
    "page": "Building Packages",
    "title": "Building Packages",
    "category": "page",
    "text": ""
},

{
    "location": "build_tips/#Tips-for-Building-Packages-1",
    "page": "Building Packages",
    "title": "Tips for Building Packages",
    "category": "section",
    "text": "BinaryBuilder provides a convenient environment to enable cross-platform building. But, many libraries have complicated build scripts that may need to be adapted to support all of the BinaryBuilder targets.If you have additional tips, please submit a PR with suggestions."
},

{
    "location": "build_tips/#Initiating-different-shell-commands-based-on-target-1",
    "page": "Building Packages",
    "title": "Initiating different shell commands based on target",
    "category": "section",
    "text": "Sometimes, you need to adapt build scripts based on the target platform. This can be done within the shell script. Here is an example from staticfloat/OpenBLASBuilder:# Set BINARY=32 on i686 platforms and armv7l\nif [[ ${nbits} == 32 ]]; then\n    flags=\"${flags} BINARY=32\"\nfiHere are other examples of scripts with target-specific checks:davidanthoff/ReadStatBuilder - windows check\nJuliaDiffEq/SundialsBuilder - 32-bit checkIt is also possible to run quite different scripts for each target by running different build scripts for different sets of targets. Here is an example where windows builds are separated from other targets:Keno/ZlibBuilder"
},

{
    "location": "build_tips/#Autoconfigure-builds-1",
    "page": "Building Packages",
    "title": "Autoconfigure builds",
    "category": "section",
    "text": "Autoconfigure builds are generally quite straightforward. Here is a typical approach:./configure --prefix=$prefix --host=${target}\nmake -j${nproc}\nmake installHere are examples of autoconfigure build scripts:staticfloat/OggBuilder\nstaticfloat/NettleBuilder"
},

{
    "location": "build_tips/#CMake-builds-1",
    "page": "Building Packages",
    "title": "CMake builds",
    "category": "section",
    "text": "For CMake, the wizard will suggest a template for running CMake. Typically, this will look like:cmake -DCMAKE_INSTALL_PREFIX=$prefix -DCMAKE_TOOLCHAIN_FILE=/opt/$target/$target.toolchainThe toolchain file sets up several CMake environment variables for better cross-platform support: # Toolchain file for x86_64-linux-gnu\nset(CMAKE_SYSTEM_NAME Linux)\n\nset(CMAKE_SYSROOT /opt/x86_64-linux-gnu/x86_64-linux-gnu/sys-root/)\n\nset(CMAKE_C_COMPILER /opt/x86_64-linux-gnu/bin/x86_64-linux-gnu-gcc)\nset(CMAKE_CXX_COMPILER /opt/x86_64-linux-gnu/bin/x86_64-linux-gnu-g++)Examples of builds that include CMake parts include:staticfloat/IpoptBuilder\ndavidanthoff/SnappyBuilder\nJuliaDiffEq/SundialsBuilder\nNeeds -DSUNDIALS_INDEX_TYPE=int32_t on 32-bit targets (Sundials-specific way to specify integer size)\nNeeds to copy *.dll files from destdir/lib to destdir/bin for windows; this also removes symlinks by using cp -L\nNeeds -DCMAKE_FIND_ROOT_PATH=\"$WORKSPACE/destdir\", so CMake\'s find_library can find libraries from KLU"
},

{
    "location": "build_tips/#Builds-with-binary-dependencies-1",
    "page": "Building Packages",
    "title": "Builds with binary dependencies",
    "category": "section",
    "text": "A build script can depend on binaries generated by another Builder repository. A builder specifies dependencies like:dependencies = [\n    # We need libogg to build FLAC\n    \"https://github.com/staticfloat/OggBuilder/releases/download/v1.3.3-0/build.jl\"\n]Each of the dependencies points to a build.jl file, usually provided with a release of another Builder repository.In the wizard, this can be specified with the prompt: Do you require any (binary) dependencies?  [y/N].Examples of builders that depend on other binaries include:staticfloat/FLACBuilder depends on staticfloat/OggBuilder (build.jl)."
},

{
    "location": "build_tips/#Editing-files-in-the-wizard-1",
    "page": "Building Packages",
    "title": "Editing files in the wizard",
    "category": "section",
    "text": "In the wizard, the vi editor is available for editing files. But, it doesn\'t leave any record in the build script. One generally needs to provide patch files or use something like sed. Here is an approach using diff and patch:cp file.ext file.ext.orig\nvi file.ext     # make the changes\ndiff -u file.ext.orig file.ext\n# Create a patch based on the results copy-pasted from the output of `diff`\ncat > file.patch <<\'END\'\n--- file.ext.orig 2017-12-14 19:28:48.816021000 -0500\n+++ file.ext2017-12-14 19:29:03.912021000 -0500\n@@ -1,4 +1,5 @@\n -https://computation.llnl.gov/projects/sundials/download/sundials-3.0.0.tar.gz\n +https://computation.llnl.gov/projects/sundials/download/sundials-3.1.0.tar.gz\n  \n  http://faculty.cse.tamu.edu/davis/SuiteSparse/SuiteSparse-5.0.0.tar.gz\n \nEND\n# Apply the patch\npatch -l file.ext.orig file.patch -o file.extThere are plans to handle file changes in the wizard automatically (#25).Note that you can include local files like patches very easily by placing them within a bundled/patches nested directory, and then providing \"./bundled\" as one of the sources for your build.  See, for example, OpenBLASBuilder."
},

{
    "location": "build_tips/#Other-examples-1",
    "page": "Building Packages",
    "title": "Other examples",
    "category": "section",
    "text": "Examples of other interesting builders include:Keno/LinuxBuilder – Why not build Linux?"
},

{
    "location": "FAQ/#",
    "page": "FAQ",
    "title": "FAQ",
    "category": "page",
    "text": ""
},

{
    "location": "FAQ/#Frequently-Asked-Questions-1",
    "page": "FAQ",
    "title": "Frequently Asked Questions",
    "category": "section",
    "text": ""
},

{
    "location": "FAQ/#I\'m-having-trouble-compiling-project-name-here-1",
    "page": "FAQ",
    "title": "I\'m having trouble compiling <project name here>",
    "category": "section",
    "text": "First, make sure that you can compile that project natively on whatever platform you\'re attempting to compile it on.  Once you are assured of that, search around the internet to see if anyone else has run into issues cross-compiling that project for that platform.  In particular, most smaller projects should be just fine, but larger projects (and especially anything that does any kind of bootstrapping) may need some extra smarts smacked into their build system to support cross-compiling.  Finally, if you\'re still stuck, try reaching out for help on the #bindeps2 channel in the JuliaLang slack."
},

{
    "location": "FAQ/#How-do-I-use-this-to-compile-my-Julia-code?-1",
    "page": "FAQ",
    "title": "How do I use this to compile my Julia code?",
    "category": "section",
    "text": "This package does not compile Julia code; it compiles C/C++/Fortran dependencies.  Think about that time you wanted to use IJulia and you needed to download/install libnettle.  The purpose of this package is to make generated tarballs that can be downloaded/installed painlessly as possible."
},

{
    "location": "FAQ/#What-is-this-I-hear-about-the-macOS-SDK-license-agreement?-1",
    "page": "FAQ",
    "title": "What is this I hear about the macOS SDK license agreement?",
    "category": "section",
    "text": "Apple restricts distribution and usage of the macOS SDK, a necessary component to build software for macOS targets.  Please read the Apple and Xcode SDK agreement for more information on the restrictions and legal terms you agree to when using the SDK to build software for Apple operating systems.  As usual, you should not take legal advice from FAQs on the internet, but in an effort to distill that large document down a bit, it is a breach of the license agreement to use the SDK to compile macOS binaries on a machine that is itself not a macOS machine.  Although this toolkit is designed to primarily run on Linux machines, it would not be breaking the license agreement to run this toolkit within a virtualized environment on a macOS machine, whereas it would be breaking the license agreement to run this toolkit on, for example, an Amazon AWS machine running Linux.  The QEMU runner (currently in testing, bug reports appreciated) implements the virtualization approach on macOS machines.  BinaryBuilder.jl, by default, will not automatically download or use the macOS SDK on non-apple operating systems, unless the BINARYBUILDER_AUTOMATIC_APPLE environment variable is set to true."
},

{
    "location": "FAQ/#Are-there-other-environment-variables-I-can-use?-1",
    "page": "FAQ",
    "title": "Are there other environment variables I can use?",
    "category": "section",
    "text": "Yes, take a look."
},

{
    "location": "FAQ/#Hey,-this-is-cool,-can-I-use-this-for-my-non-Julia-related-project?-1",
    "page": "FAQ",
    "title": "Hey, this is cool, can I use this for my non-Julia related project?",
    "category": "section",
    "text": "Absolutely!  There\'s nothing Julia-specific about the binaries generated by the cross-compilers used by BinaryBuilder.jl.  Although the best interface for interacting with this software will always be the Julia interface defined within this package, you are free to use these software tools for other projects as well.  Note that the cross-compiler image is built within an enormous Docker image, see this repository for more information.  Further note the macOS SDK license agreement tidbit above."
},

{
    "location": "FAQ/#What-platforms-are-supported?-1",
    "page": "FAQ",
    "title": "What platforms are supported?",
    "category": "section",
    "text": "At the time of writing, we support Linux (x8664, i686, armv7l, aarch64, ppc64le), Windows (x8664, i686) and macOS (x86_64)."
},

{
    "location": "FAQ/#At-line-XXX,-ABORTED-(Operation-not-permitted)!-1",
    "page": "FAQ",
    "title": "At line XXX, ABORTED (Operation not permitted)!",
    "category": "section",
    "text": "Some linux distributions have a bug in their overlayfs implementation that prevents us from mounting overlay filesystems within user namespaces.  See this Ubuntu kernel bug report for a description of the situation and how Ubuntu has patched it in their kernels.  To work around this, you can launch BinaryBuilder.jl in \"privileged container\" mode.  Unfortunately, this involves running sudo every time you launch into a BinaryBuilder session, but on the other hand, this successfully works around the issue on distributions such as Arch linux.  To set \"privileged container\" mode, set the BINARYBUILDER_RUNNER environment variable to privileged."
},

{
    "location": "rootfs/#",
    "page": "RootFS",
    "title": "RootFS",
    "category": "page",
    "text": ""
},

{
    "location": "rootfs/#RootFS-1",
    "page": "RootFS",
    "title": "RootFS",
    "category": "section",
    "text": "The execution environment that all BinaryBuilder.jl builds are executed within is referred to as the \"root filesystem\" or RootFS.  This RootFS is built through the crossbuild Dockerfiles hosted within the staticfloat/julia-docker repository.  The rootfs image is based upon the docker alpine image, and is used to build compilers for every target platform we support.  The target platform compiler toolchains are stored within /opt/${triplet}, so the 64-bit Linux (using glibc as the backing libc) compilers would be found in /opt/x86_64-linux-gnu/bin.Each compiler \"shard\" is packaged separately, so that users do not have to download a multi-GB tarball just to build for a single platform.  The docker image that contains the whole image is exported and chopped up into an overall \"root\" shard, and then target-specific shards, that are downloaded and mounted on demand by BinaryBuilder.jl.Each shard is made available both as a .tar.gz file, and as a .squashfs image.  When mounting, a .tar.gz file must be extracted, taking up extra diskspace, whereas a .squashfs image can be mounted directly, but this unfortunately requires root privileges on the host machine.  This will hopefully be fixed in a future Linux kernel release, but if you have sudo privileges, it is often desireable to use the .squashfs files to save network bandwidth and disk space.  See the Environment Variables for instructions on how to do that.When launching a process within the RootFS image, BinaryBuilder.jl sets up a set of environment variables to enable a target-specific compiler toolchain, among other niceties.  See the src/Runner.jl file within this repository for the details on that.  Other tools that are available include a \"super\" binutils that can understand a ridiculously wide variety of binary formats (stored within /opt/super_binutils/bin), a few useful environment variables such as ${nproc}, ${nbits}, and ${proc_family}."
},

{
    "location": "environment_variables/#",
    "page": "Environment Variables",
    "title": "Environment Variables",
    "category": "page",
    "text": ""
},

{
    "location": "environment_variables/#Environment-Variables-1",
    "page": "Environment Variables",
    "title": "Environment Variables",
    "category": "section",
    "text": "BinaryBuilder.jl supports multiple environment variables to modify its behavior globally:BINARYBUILDER_AUTOMATIC_APPLE: when set to true, this automatically agrees to the Apple macOS SDK license agreement, enabling the building of binary objects for macOS systems.\nBINARYBUILDER_USE_SQUASHFS: when set to true, this uses .squashfs images instead of tarballs to download cross-compiler shards.  This consumes significantly less space on-disk and boasts a modest reduction in download size as well, but requires sudo on the local machine to mount the .squashfs images.  This is used by default on Travis, as the disk space requirements are tight.  This is always used on OSX, as the QEMU runner always uses squashfs images.\nBINARYBUILDER_STORAGE_DIE: When set to a path, storage for things like cross-compiler shards, downloaded source tarballs, the QEMU binaries, the ccache cache, etc... will be stored within this location, instead of the default location of <binarybuilder_root>/deps/.\nBINARYBUILDER_RUNNER: When set to a runner string, alters the execution engine that BinaryBuilder.jl will use to wrap the build process in a sandbox.  Valid values are one of \"userns\", \"privileged\" and \"qemu\".  If not given, BinaryBuilder.jl will do its best to guess.\nBINARYBUILDER_ALLOW_ECRYPTFS: When set to true, this allows the mounting of rootfs/shard/workspace directories from within encrypted mounts.  This is disabled by default, as at the time of writing, this triggers kernel bugs.  To avoid these kernel bugs on a system where e.g. the home directory has been encrypted, set the BINARYBUILDER_ROOTFS_DIR and BINARYBUILDER_SHARDS_DIR environment variables to a path outside of the encrypted home directory.\nBINARYBUILDER_USE_CCACHE: When set to true, this causes a /root/.ccache volume to be mounted within the build environment, and for the CC, CXX and FC environment variables to have ccache prepended to them.  This can significantly accelerate rebuilds of the same package on the same host.  Note that ccache will, by default, store 5G of cached data."
},

{
    "location": "tricksy_gotchas/#",
    "page": "Tricksy Gotchas",
    "title": "Tricksy Gotchas",
    "category": "page",
    "text": ""
},

{
    "location": "tricksy_gotchas/#Tricksy-Gotchas-1",
    "page": "Tricksy Gotchas",
    "title": "Tricksy Gotchas",
    "category": "section",
    "text": "There are a plethora of gotchas when it comes to binary compilation and distribution that must be appropriately addressed, or the binaries will only work on certain machines and not others.  Here is an incomplete list of things that BinaryBuilder.jl takes care of for you:Uniform compiler interfaceNo need to worry about invoking compilers through weird names; just run gcc within the proper environment and you\'ll get the appropriate cross-compiler.  Triplet-prefixed names (such as x86_64-linux-gnu-gcc) are, of course, also available, and the same version of gcc, g++ and gfortran is used across all platforms.glibc versioningOn Linux platforms that use glibc as the C runtime library (at the time of writing, this is the great majority of most desktop and server distros), it is necessary to compile code against a version of glibc that is older than any glibc version it will be run on.  E.g. if your code is compiled against glibc v2.5, it will run on glibc v2.6, but it will not run on glibc v2.4.  Therefore, to maximize compability, all code should be compiled against as old a version of glibc as possible.gfortran versioningWhen compiling FORTRAN code, the gfortran compiler has broken ABI compatibility in the 6.X -> 7.X transition, and the 7.X -> 8.X transition.  This means that code built with gfortran 6.X cannot be linked against code built with gfortran 7.X.  We therefore compile all gfortran code against multiple different gfortran versions, then at runtime decide which to download based upon the currently running process\' existing linkage.Library DependenciesA large source of problems in binary distribution is improper library linkage.  When building a binary object that depends upon another binary object, some operating systems (such as macOS) bake the absolute path to the dependee library into the dependent, whereas others rely on the library being present within a default search path.  BinaryBuilder.jl takes care of this by automatically discovering these errors and fixing them by using the RPATH/RUNPATH semantics of whichever platform it is targeting.  Note that this is technically a build system error, and although we will fix it automatically, it will raise a nice yellow warning during build prefix audit time.Instruction Set DifferencesWhen compiling for architectures that have evolved over time (such as x86_64), it is important to target the correct instruction set, otherwise a binary may contain instructions that will run on the computer it was compiled on, but will fail rather ungracefully when run on a machine that does not have as new a processor.  BinaryBuilder.jl will automatically disassemble every built binary object and inspect the instructions used, warning the user if a binary is found that does not conform to the agreed-upon minimum instruction set architecture.  It will also notice if the binary contains a cpuid instruction, which is a good sign that the binary is aware of this issue and will internally switch itself to use only available instructions."
},

{
    "location": "reference/#",
    "page": "Reference",
    "title": "Reference",
    "category": "page",
    "text": ""
},

{
    "location": "reference/#API-reference-1",
    "page": "Reference",
    "title": "API reference",
    "category": "section",
    "text": ""
},

{
    "location": "reference/#BinaryBuilder.DockerRunner",
    "page": "Reference",
    "title": "BinaryBuilder.DockerRunner",
    "category": "type",
    "text": "DockerRunner\n\nA DockerRunner represents Elliot\'s bowing of his head to the inevitability that the QemuRunner just isn\'t ready for primetime yet, and he needs something to use while he\'s on the plane to JuliaCon to whip up said JuliaCon presentation.\n\n\n\n\n\n"
},

{
    "location": "reference/#BinaryBuilder.QemuRunner",
    "page": "Reference",
    "title": "BinaryBuilder.QemuRunner",
    "category": "type",
    "text": "QemuRunner\n\nA QemuRunner represents an \"execution context\", an object that bundles all necessary information to run commands within the container that contains our crossbuild environment.  Use run() to actually run commands within the QemuRunner, and runshell() as a quick way to get an interactive shell within the crossbuild environment.\n\n\n\n\n\n"
},

{
    "location": "reference/#BinaryBuilder.UserNSRunner",
    "page": "Reference",
    "title": "BinaryBuilder.UserNSRunner",
    "category": "type",
    "text": "UserNSRunner\n\nA UserNSRunner represents an \"execution context\", an object that bundles all necessary information to run commands within the container that contains our crossbuild environment.  Use run() to actually run commands within the UserNSRunner, and runshell() as a quick way to get an interactive shell within the crossbuild environment.\n\n\n\n\n\n"
},

{
    "location": "reference/#BinaryBuilder.WizardState",
    "page": "Reference",
    "title": "BinaryBuilder.WizardState",
    "category": "type",
    "text": "WizardState\n\nBuilding large dependencies can take a lot of time. This state object captures all relevant state of this function. It can be passed back to the function to resume where we left off. This can aid debugging when code changes are necessary.  It also holds all necessary metadata such as input/output streams.\n\n\n\n\n\n"
},

{
    "location": "reference/#Types-1",
    "page": "Reference",
    "title": "Types",
    "category": "section",
    "text": "Modules = [BinaryBuilder]\nOrder = [:type]"
},

{
    "location": "reference/#BinaryBuilder.audit-Tuple{Prefix}",
    "page": "Reference",
    "title": "BinaryBuilder.audit",
    "category": "method",
    "text": "audit(prefix::Prefix; platform::Platform = platform_key_abi();\n                      verbose::Bool = false,\n                      silent::Bool = false,\n                      autofix::Bool = false)\n\nAudits a prefix to attempt to find deployability issues with the binary objects that have been installed within.  This auditing will check for relocatability issues such as dependencies on libraries outside of the current prefix, usage of advanced instruction sets such as AVX2 that may not be usable on many platforms, linkage against newer glibc symbols, etc...\n\nThis method is still a work in progress, only some of the above list is actually implemented, be sure to actually inspect Auditor.jl to see what is and is not currently in the realm of fantasy.\n\n\n\n\n\n"
},

{
    "location": "reference/#BinaryBuilder.autobuild-Tuple{AbstractString,AbstractString,VersionNumber,Array{T,1} where T,AbstractString,Array{T,1} where T,Function,Array{T,1} where T}",
    "page": "Reference",
    "title": "BinaryBuilder.autobuild",
    "category": "method",
    "text": "autobuild(dir::AbstractString, src_name::AbstractString,\n          src_version::VersionNumber, sources::Vector,\n          script::AbstractString, platforms::Vector,\n          products::Function, dependencies::Vector;\n          verbose::Bool = true, kwargs...)\n\nRuns the boiler plate code to download, build, and package a source package for a list of platforms.  src_name represents the name of the source package being built (and will set the name of the built tarballs), platforms is a list of platforms to build for, sources is a list of tuples giving (url, hash) of all sources to download and unpack before building begins, script is a string representing a bash script to run to build the desired products, which are listed as Product objects within the vector returned by the products function. dependencies gives a list of dependencies that provide build.jl files that should be installed before building begins to allow this build process to depend on the results of another build process. Setting debug to true will cause a failed build to drop into an interactive shell so that the build can be inspected easily.\n\n\n\n\n\n"
},

{
    "location": "reference/#BinaryBuilder.build_tarballs-NTuple{8,Any}",
    "page": "Reference",
    "title": "BinaryBuilder.build_tarballs",
    "category": "method",
    "text": "build_tarballs(ARGS, src_name, src_version, sources, script, platforms,\n               products, dependencies; kwargs...)\n\nThis should be the top-level function called from a build_tarballs.jl file. It takes in the information baked into a build_tarballs.jl file such as the sources to download, the products to build, etc... and will automatically download, build and package the tarballs, generating a build.jl file when appropriate.  Note that ARGS should be the top-level Julia ARGS command- line arguments object.  This function does some rudimentary parsing of the ARGS, call it with --help in the ARGS to see what it can do.\n\n\n\n\n\n"
},

{
    "location": "reference/#BinaryBuilder.collapse_symlinks-Tuple{Array{String,1}}",
    "page": "Reference",
    "title": "BinaryBuilder.collapse_symlinks",
    "category": "method",
    "text": "collapse_symlinks(files::Vector{String})\n\nGiven a list of files, prune those that are symlinks pointing to other files within the list.\n\n\n\n\n\n"
},

{
    "location": "reference/#BinaryBuilder.collect_files",
    "page": "Reference",
    "title": "BinaryBuilder.collect_files",
    "category": "function",
    "text": "collect_files(path::AbstractString, predicate::Function = f -> true)\n\nFind all files that satisfy predicate() when the full path to that file is passed in, returning the list of file paths.\n\n\n\n\n\n"
},

{
    "location": "reference/#BinaryBuilder.expand_gcc_versions-Tuple{Platform}",
    "page": "Reference",
    "title": "BinaryBuilder.expand_gcc_versions",
    "category": "method",
    "text": "expand_gcc_versions(p::Platform)\n\nGiven a Platform, returns an array of Platforms with a spread of identical entries with the exception of the gcc_version member of the CompilerABI struct within the Platform.  This is used to take, for example, a list of supported platforms and expand them to include multiple GCC versions for the purposes of ABI matching.  If the given Platform already specifies a GCC version (as opposed to :gcc_any) only that Platform is returned.\n\n\n\n\n\n"
},

{
    "location": "reference/#BinaryBuilder.product_hashes_from_github_release-Tuple{AbstractString,AbstractString}",
    "page": "Reference",
    "title": "BinaryBuilder.product_hashes_from_github_release",
    "category": "method",
    "text": "If you have a sharded build on Github, it would be nice if we could get an auto-generated build.jl just like if we build serially.  This function eases the pain by reconstructing it from a releases page.\n\n\n\n\n\n"
},

{
    "location": "reference/#BinaryBuilder.supported_platforms-Tuple{}",
    "page": "Reference",
    "title": "BinaryBuilder.supported_platforms",
    "category": "method",
    "text": "supported_platforms()\n\nReturn the list of supported platforms as an array of Platforms.  These are the platforms we officially support building for, if you see a mapping in get_shard_hash() that isn\'t represented here, it\'s probably because that platform is still considered \"in beta\".\n\n\n\n\n\n"
},

{
    "location": "reference/#BinaryBuilder.abi_agnostic-Union{Tuple{P}, Tuple{P}} where P<:Platform",
    "page": "Reference",
    "title": "BinaryBuilder.abi_agnostic",
    "category": "method",
    "text": "abi_agnostic(p::Platform)\n\nStrip out the CompilerABI portion of a Platform, making it \"ABI agnostic\".\n\n\n\n\n\n"
},

{
    "location": "reference/#BinaryBuilder.analyze_instruction_set-Tuple{ObjectFile.ObjectHandle,Platform}",
    "page": "Reference",
    "title": "BinaryBuilder.analyze_instruction_set",
    "category": "method",
    "text": "analyze_instruction_set(oh::ObjectHandle, platform::Platform; verbose::Bool = false)\n\nAnalyze the instructions within the binary located at the given path for which minimum instruction set it requires, taking note of groups of instruction sets used such as avx, sse4.2, i486, etc....\n\nSome binary files (such as libopenblas) contain multiple versions of functions, internally determining which version to call by using the cpuid instruction to determine processor support.  In an effort to detect this, we make note of any usage of the cpuid instruction, disabling our minimum instruction set calculations if such an instruction is found, and notifying the user of this if verbose is set to true.\n\nNote that this function only really makes sense for x86/x64 binaries.  Don\'t run this on armv7l, aarch64, ppc64le etc... binaries and expect it to work.\n\n\n\n\n\n"
},

{
    "location": "reference/#BinaryBuilder.canonicalize_file_url-Tuple{Any}",
    "page": "Reference",
    "title": "BinaryBuilder.canonicalize_file_url",
    "category": "method",
    "text": "Canonicalize URL to a file within a GitHub repo\n\n\n\n\n\n"
},

{
    "location": "reference/#BinaryBuilder.canonicalize_source_url-Tuple{Any}",
    "page": "Reference",
    "title": "BinaryBuilder.canonicalize_source_url",
    "category": "method",
    "text": "Canonicalize a GitHub repository URL\n\n\n\n\n\n"
},

{
    "location": "reference/#BinaryBuilder.change_script!-Tuple{Any,Any}",
    "page": "Reference",
    "title": "BinaryBuilder.change_script!",
    "category": "method",
    "text": "Change the script. This will invalidate all platforms to make sure we later\nverify that they still build with the new script.\n\n\n\n\n\n"
},

{
    "location": "reference/#BinaryBuilder.choose_shards-Tuple{Platform}",
    "page": "Reference",
    "title": "BinaryBuilder.choose_shards",
    "category": "method",
    "text": "choose_shards(p::Platform; rootfs_build, bcs_build, GCC_builds,\n                           LLVM_builds, archive_type)\n\nThis method chooses, given a Platform, which shards to download, extract and mount, returning a list of CompilerShard objects.  At the moment, this always consists of four shards, but that may not always be the case.\n\n\n\n\n\n"
},

{
    "location": "reference/#BinaryBuilder.chown_cleanup-Tuple{BinaryBuilder.DockerRunner}",
    "page": "Reference",
    "title": "BinaryBuilder.chown_cleanup",
    "category": "method",
    "text": "chown_cleanup(dr::DockerRunner)\n\nOn Linux, the user id inside of the docker container doesn\'t correspond to ours on the outside, so permissions get all kinds of screwed up.  To fix this, we have to chown -R $(id -u):$(id -g) $prefix, which really sucks, but is still better than nothing.  This is why we prefer the UserNSRunner on Linux.\n\n\n\n\n\n"
},

{
    "location": "reference/#BinaryBuilder.dir_name-Tuple{BinaryBuilder.CompilerShard}",
    "page": "Reference",
    "title": "BinaryBuilder.dir_name",
    "category": "method",
    "text": "dir_name(cs::CompilerShard)\n\nReturn a \"directory name\" for a compiler shard; used by e.g. extraction_path() or mount_path(), to create names like \"Rootfs.v2018.08.27-x86_64-linux-gnu\".\n\n\n\n\n\n"
},

{
    "location": "reference/#BinaryBuilder.download_all_shards-Tuple{}",
    "page": "Reference",
    "title": "BinaryBuilder.download_all_shards",
    "category": "method",
    "text": "download_all_shards(; verbose::Bool=false)\n\nHelper function to download all (.tar.gz AND .squashfs) shards, so that no matter what happens, you don\'t need an internet connection to build your precious, precious binaries.\n\n\n\n\n\n"
},

{
    "location": "reference/#BinaryBuilder.download_path-Tuple{BinaryBuilder.CompilerShard}",
    "page": "Reference",
    "title": "BinaryBuilder.download_path",
    "category": "method",
    "text": "download_path(cs::CompilerShard)\n\nReturn the location this shard will be downloaded to.\n\n\n\n\n\n"
},

{
    "location": "reference/#BinaryBuilder.download_source-Tuple{BinaryBuilder.WizardState}",
    "page": "Reference",
    "title": "BinaryBuilder.download_source",
    "category": "method",
    "text": "download_source(state::WizardState)\n\nAsk the user where the source code is coming from, then download and record the relevant parameters, returning the source url, the local path it is stored at after download, and a hash identifying the version of the code. In the case of a git source URL, the hash will be a git treeish identifying the exact commit used to build the code, in the case of a tarball, it is the sha256 hash of the tarball itself.\n\n\n\n\n\n"
},

{
    "location": "reference/#BinaryBuilder.edit_script-Tuple{BinaryBuilder.WizardState,AbstractString}",
    "page": "Reference",
    "title": "BinaryBuilder.edit_script",
    "category": "method",
    "text": "edit_script(state::WizardState, script::AbstractString)\n\nFor consistency (and security), use the sandbox for editing a script, launching vi within an interactive session to edit a buildscript.\n\n\n\n\n\n"
},

{
    "location": "reference/#BinaryBuilder.filename-Tuple{BinaryBuilder.CompilerShard}",
    "page": "Reference",
    "title": "BinaryBuilder.filename",
    "category": "method",
    "text": "filename(cs::CompilerShard)\n\nReturn the filename of this shard.  Used by e.g. url() or download_path().\n\n\n\n\n\n"
},

{
    "location": "reference/#BinaryBuilder.filter_object_files-Tuple{Any}",
    "page": "Reference",
    "title": "BinaryBuilder.filter_object_files",
    "category": "method",
    "text": "filter_object_files(files)\n\nGiven a list of files, filter out any that cannot be opened by readmeta() from ObjectFile.\n\n\n\n\n\n"
},

{
    "location": "reference/#BinaryBuilder.getgid-Tuple{}",
    "page": "Reference",
    "title": "BinaryBuilder.getgid",
    "category": "method",
    "text": "getgid()\n\nWrapper around libc\'s getgid() function\n\n\n\n\n\n"
},

{
    "location": "reference/#BinaryBuilder.getuid-Tuple{}",
    "page": "Reference",
    "title": "BinaryBuilder.getuid",
    "category": "method",
    "text": "getuid()\n\nWrapper around libc\'s getuid() function\n\n\n\n\n\n"
},

{
    "location": "reference/#BinaryBuilder.hash-Tuple{BinaryBuilder.CompilerShard}",
    "page": "Reference",
    "title": "BinaryBuilder.hash",
    "category": "method",
    "text": "hash(cs::CompilerShard)\n\nReturn the integrity hash for this compiler shard, for ensuring it has been downloaded properly/has not been tampered with.\n\n\n\n\n\n"
},

{
    "location": "reference/#BinaryBuilder.import_docker_image-Tuple{BinaryBuilder.CompilerShard}",
    "page": "Reference",
    "title": "BinaryBuilder.import_docker_image",
    "category": "method",
    "text": "import_docker_image(rootfs::CompilerShard; verbose::Bool = false)\n\nChecks to see if the given rootfs has been imported into docker yet; if it hasn\'t, then do so so that we can run things like:\n\ndocker run -ti binarybuilder_rootfs:v2018.08.27 /bin/bash\n\nWhich, after all, is the foundation upon which this whole doodad is built.\n\n\n\n\n\n"
},

{
    "location": "reference/#BinaryBuilder.init_git_config-Tuple{Any,Any}",
    "page": "Reference",
    "title": "BinaryBuilder.init_git_config",
    "category": "method",
    "text": "init_git_config(repo, state)\n\nAsk the user for their username and password for a repository-local .git/config file.  This is used during an interactive wizard session.\n\n\n\n\n\n"
},

{
    "location": "reference/#BinaryBuilder.instruction_mnemonics-Tuple{AbstractString,Platform}",
    "page": "Reference",
    "title": "BinaryBuilder.instruction_mnemonics",
    "category": "method",
    "text": "instruction_mnemonics(path::AbstractString, platform::Platform)\n\nDump a binary object with objdump, returning a list of instruction mnemonics for further analysis with analyze_instruction_set().\n\nNote that this function only really makes sense for x86/x64 binaries.  Don\'t run this on armv7l, aarch64, ppc64le etc... binaries and expect it to work.\n\nThis function returns the list of mnemonics as well as the counts of each, binned by the mapping defined within instruction_categories.\n\n\n\n\n\n"
},

{
    "location": "reference/#BinaryBuilder.interactive_build-Tuple{BinaryBuilder.WizardState,Prefix,BinaryBuilder.Runner,AbstractString}",
    "page": "Reference",
    "title": "BinaryBuilder.interactive_build",
    "category": "method",
    "text": "interactive_build(state::WizardState, prefix::Prefix,\n                  ur::Runner, build_path::AbstractString)\n\nRuns the interactive shell for building, then captures bash history to save\nreproducible steps for building this source. Shared between steps 3 and 5\n\n\n\n\n\n"
},

{
    "location": "reference/#BinaryBuilder.is_ecryptfs-Tuple{AbstractString}",
    "page": "Reference",
    "title": "BinaryBuilder.is_ecryptfs",
    "category": "method",
    "text": "is_ecryptfs(path::AbstractString; verbose::Bool=false)\n\nChecks to see if the given path (or any parent directory) is placed upon an ecryptfs mount.  This is known not to work on current kernels, see this bug for more details: https://bugzilla.kernel.org/show_bug.cgi?id=197603\n\nThis method returns whether it is encrypted or not, and what mountpoint it used to make that decision.\n\n\n\n\n\n"
},

{
    "location": "reference/#BinaryBuilder.is_for_platform-Tuple{ObjectFile.ObjectHandle,Platform}",
    "page": "Reference",
    "title": "BinaryBuilder.is_for_platform",
    "category": "method",
    "text": "is_for_platform(h::ObjectHandle, platform::Platform)\n\nReturns true if the given ObjectHandle refers to an object of the given platform; E.g. if the given platform is for AArch64 Linux, then h must be an ELFHandle with h.header.e_machine set to ELF.EM_AARCH64.\n\nIn particular, this method and platform_for_object() both exist because the latter is not smart enough to deal with :glibc and :musl yet.\n\n\n\n\n\n"
},

{
    "location": "reference/#BinaryBuilder.is_mounted-Tuple{BinaryBuilder.CompilerShard}",
    "page": "Reference",
    "title": "BinaryBuilder.is_mounted",
    "category": "method",
    "text": "is_mounted(cs::CompilerShard)\n\nReturn true if the given shard is mounted.  Uses run() so will error out if something goes awry.  Note that if you ask if a .tar.gz shard is mounted, this method will return true if the .squashfs version is mounted.  This is actually desirable, as we use this to see if we should unmount the .squashfs version before unpacking the .tar.gz version into the same place.\n\n\n\n\n\n"
},

{
    "location": "reference/#BinaryBuilder.map_target-Tuple{BinaryBuilder.CompilerShard}",
    "page": "Reference",
    "title": "BinaryBuilder.map_target",
    "category": "method",
    "text": "map_target(cs::CompilerShard)\n\nReturn the location this compiler shard should be mounted at.  We basically analyze the name and platform of this shard and return a path based on that.\n\n\n\n\n\n"
},

{
    "location": "reference/#BinaryBuilder.match_files-Tuple{BinaryBuilder.WizardState,Prefix,Platform,Array{T,1} where T}",
    "page": "Reference",
    "title": "BinaryBuilder.match_files",
    "category": "method",
    "text": "match_files(state::WizardState, prefix::Prefix,\n            platform::Platform, files::Vector; silent::Bool = false)\n\nInspects all binary files within a prefix, matching them with a given list of files, complaining if there are any files that are not properly matched and returning the set of normalized names that were not matched, or an empty set if all names were properly matched.\n\n\n\n\n\n"
},

{
    "location": "reference/#BinaryBuilder.minimum_instruction_set-Tuple{Dict,Bool}",
    "page": "Reference",
    "title": "BinaryBuilder.minimum_instruction_set",
    "category": "method",
    "text": "minimum_instruction_set(counts::Dict, is_64bit::Bool)\n\nThis function returns the minimum instruction set required, depending on whether the object file being pointed to is a 32-bit or 64-bit one:\n\nFor 32-bit object files, this returns one of [:pentium4, :prescott]\nFor 64-bit object files, this returns one of [:core2, :sandybridge, :haswell]\n\n\n\n\n\n"
},

{
    "location": "reference/#BinaryBuilder.mount-Tuple{BinaryBuilder.CompilerShard}",
    "page": "Reference",
    "title": "BinaryBuilder.mount",
    "category": "method",
    "text": "mount(cs::CompilerShard)\n\nMount a compiler shard, if possible.  Uses run() so will error out if something goes awry.  Note that this function only does something when using a .squashfs shard, with a UserNS or Docker runner, on Linux. All other combinations of shard archive type, runner and platform result in a no-op from this function.\n\n\n\n\n\n"
},

{
    "location": "reference/#BinaryBuilder.mount_path-Tuple{BinaryBuilder.CompilerShard}",
    "page": "Reference",
    "title": "BinaryBuilder.mount_path",
    "category": "method",
    "text": "mount_path(cs::CompilerShard)\n\nReturn the location this shard will be mounted to.  For .tar.gz shards, this is also the location it will be extracted to.\n\n\n\n\n\n"
},

{
    "location": "reference/#BinaryBuilder.normalize_name-Tuple{AbstractString}",
    "page": "Reference",
    "title": "BinaryBuilder.normalize_name",
    "category": "method",
    "text": "normalize_name(file::AbstractString)\n\nGiven a filename, normalize it, stripping out extensions.  E.g. the file path \"foo/libfoo.tar.gz\" would get mapped to \"libfoo\".\n\n\n\n\n\n"
},

{
    "location": "reference/#BinaryBuilder.pick_preferred_platform-Tuple{Any}",
    "page": "Reference",
    "title": "BinaryBuilder.pick_preferred_platform",
    "category": "method",
    "text": "Pick the first platform for use to run on. We prefer Linux x86_64 because\nthat\'s generally the host platform, so it\'s usually easiest. After that we\ngo by the following preferences:\n    - OS (in order): Linux, Windows, OSX\n    - Architecture: x86_64, i686, aarch64, powerpc64le, armv7l\n    - The first remaining after this selection\n\n\n\n\n\n"
},

{
    "location": "reference/#BinaryBuilder.platform_envs",
    "page": "Reference",
    "title": "BinaryBuilder.platform_envs",
    "category": "function",
    "text": "platform_envs(platform::Platform)\n\nGiven a platform, generate a Dict mapping representing all the environment variables to be set within the build environment to force compiles toward the defined target architecture.  Examples of things set are PATH, CC, RANLIB, as well as nonstandard things like target.\n\n\n\n\n\n"
},

{
    "location": "reference/#BinaryBuilder.platform_for_object-Tuple{ObjectFile.ObjectHandle}",
    "page": "Reference",
    "title": "BinaryBuilder.platform_for_object",
    "category": "method",
    "text": "platform_for_object(oh::ObjectHandle)\n\nReturns the platform the given ObjectHandle should run on.  E.g. if the given ObjectHandle is an x8664 Linux ELF object, this function will return `Linux(:x8664).  This function does not yet distinguish between different libc\'s such as:glibcand:musl`.\n\n\n\n\n\n"
},

{
    "location": "reference/#BinaryBuilder.prepare_shard-Tuple{BinaryBuilder.CompilerShard}",
    "page": "Reference",
    "title": "BinaryBuilder.prepare_shard",
    "category": "method",
    "text": "prepare_shard(cs::CompilerShard; mount_squashfs = true, verbose = false)\n\nDownload and mount the given compiler shard.  If it is a .tar.gz shard, it will be unpacked into the directory given by mount_path(cs).  If it is a .squashfs shard, it will be mounted into the directory given by mount_path(cs) (unless mount_squashfs is set to false.  This is done by the QEMU runner, for instance, as it prefers to read the .squashfs files directly, so no need to try mounting things).\n\nIf it is a macOS shard, you must have accepted the Xcode license before it will be downloaded or mounted.\n\n\n\n\n\n"
},

{
    "location": "reference/#BinaryBuilder.print_autoconf_hint-Tuple{BinaryBuilder.WizardState}",
    "page": "Reference",
    "title": "BinaryBuilder.print_autoconf_hint",
    "category": "method",
    "text": "print_autoconf_hint(state::WizardState)\n\nPrint a hint for projets that use autoconf to have a good ./configure line.\n\n\n\n\n\n"
},

{
    "location": "reference/#BinaryBuilder.provide_hints-Tuple{BinaryBuilder.WizardState,AbstractString}",
    "page": "Reference",
    "title": "BinaryBuilder.provide_hints",
    "category": "method",
    "text": "provide_hints(state::WizardState, path::AbstractString)\n\nGiven an unpacked source directory, provide hints on how a user might go about building the binary bounty they so richly desire.\n\n\n\n\n\n"
},

{
    "location": "reference/#BinaryBuilder.rewrite_squashfs_uids-Tuple{Any,Any}",
    "page": "Reference",
    "title": "BinaryBuilder.rewrite_squashfs_uids",
    "category": "method",
    "text": "rewrite_squashfs_uids(path, new_uid)\n\nIn order for the sandbox to work well, we need to have the uids of the squashfs images match the uid of the current unpriviledged user. Unfortunately there is no mount-time option to do this for us. However, fortunately, squashfs is simple enough that if the id table is uncompressed, we can just manually patch the uids to be what we need. This functions performs this operation, by rewriting all uids/gids to new_uid.\n\n\n\n\n\n"
},

{
    "location": "reference/#BinaryBuilder.runshell",
    "page": "Reference",
    "title": "BinaryBuilder.runshell",
    "category": "function",
    "text": "runshell(platform::Platform = platform_key_abi())\n\nLaunch an interactive shell session within the user namespace, with environment setup to target the given platform.\n\n\n\n\n\n"
},

{
    "location": "reference/#BinaryBuilder.set_global_git_config-Tuple{Any,Any}",
    "page": "Reference",
    "title": "BinaryBuilder.set_global_git_config",
    "category": "method",
    "text": "set_global_git_config(username, email)\n\nSets up a ~/.gitconfig with the given username and email.\n\n\n\n\n\n"
},

{
    "location": "reference/#BinaryBuilder.setup_travis-Tuple{Any}",
    "page": "Reference",
    "title": "BinaryBuilder.setup_travis",
    "category": "method",
    "text": "Sets up travis for an existing repository\n\n\n\n\n\n"
},

{
    "location": "reference/#BinaryBuilder.setup_workspace",
    "page": "Reference",
    "title": "BinaryBuilder.setup_workspace",
    "category": "function",
    "text": "setup_workspace(build_path::String, src_paths::Vector,\n                src_hashes::Vector, platform::Platform,\n                extra_env::Dict{String, String};\n                verbose::Bool = false, tee_stream::IO = stdout,\n                downloads_dir = nothing)\n\nSets up a workspace within build_path, creating the directory structure needed by further steps, unpacking the source within build_path, and defining the environment variables that will be defined within the sandbox environment.\n\nThis method returns the Prefix to install things into, and the runner that can be used to launch commands within this workspace.\n\n\n\n\n\n"
},

{
    "location": "reference/#BinaryBuilder.shard_mappings-Tuple{Array{BinaryBuilder.CompilerShard,1}}",
    "page": "Reference",
    "title": "BinaryBuilder.shard_mappings",
    "category": "method",
    "text": "shard_mappings(shards::Vector{CompilerShard})\n\nReturn the default mappings for a set of compiler shards\n\n\n\n\n\n"
},

{
    "location": "reference/#BinaryBuilder.step1-Tuple{BinaryBuilder.WizardState}",
    "page": "Reference",
    "title": "BinaryBuilder.step1",
    "category": "method",
    "text": "step1(state::WizardState)\n\nIt all starts with a single step, the unabashed ambition to leave your current stability and engage with the universe on a quest to create something new, and beautiful and unforseen.  It all ends with compiler errors.\n\nThis step selets the relevant platform(s) for the built binaries.\n\n\n\n\n\n"
},

{
    "location": "reference/#BinaryBuilder.step2-Tuple{BinaryBuilder.WizardState}",
    "page": "Reference",
    "title": "BinaryBuilder.step2",
    "category": "method",
    "text": "step2(state::WizardState)\n\nThis step obtains the source code to be built and required binary dependencies.\n\n\n\n\n\n"
},

{
    "location": "reference/#BinaryBuilder.step34-Tuple{BinaryBuilder.WizardState}",
    "page": "Reference",
    "title": "BinaryBuilder.step34",
    "category": "method",
    "text": "step34(state::WizardState)\n\nStarts initial build for Linux x86_64, which is our initial test target platform.  Sources that build properly for this platform continue on to attempt builds for more complex platforms.\n\n\n\n\n\n"
},

{
    "location": "reference/#BinaryBuilder.step3_audit-Tuple{BinaryBuilder.WizardState,Platform,Prefix}",
    "page": "Reference",
    "title": "BinaryBuilder.step3_audit",
    "category": "method",
    "text": "step3_audit(state::WizardState, platform::Platform, prefix::Prefix)\n\nAudit the prefix.\n\n\n\n\n\n"
},

{
    "location": "reference/#BinaryBuilder.step3_interactive-Tuple{BinaryBuilder.WizardState,Prefix,Platform,BinaryBuilder.Runner,AbstractString}",
    "page": "Reference",
    "title": "BinaryBuilder.step3_interactive",
    "category": "method",
    "text": "step3_interactive(state::WizardState, prefix::Prefix, platform::Platform,\n                  ur::Runner, build_path::AbstractString)\n\nThe interactive portion of step3, moving on to either rebuild with an edited script or proceed to step 4.\n\n\n\n\n\n"
},

{
    "location": "reference/#BinaryBuilder.step3_retry-Tuple{BinaryBuilder.WizardState}",
    "page": "Reference",
    "title": "BinaryBuilder.step3_retry",
    "category": "method",
    "text": "step3_retry(state::WizardState)\n\nRebuilds the initial Linux x86_64 build after things like editing the script file manually, etc...\n\n\n\n\n\n"
},

{
    "location": "reference/#BinaryBuilder.step4-Tuple{BinaryBuilder.WizardState,BinaryBuilder.Runner,Platform,AbstractString,Prefix}",
    "page": "Reference",
    "title": "BinaryBuilder.step4",
    "category": "method",
    "text": "step4(state::WizardState, ur::Runner, platform::Platform,\n      build_path::AbstractString, prefix::Prefix)\n\nThe fourth step selects build products after the first build is done\n\n\n\n\n\n"
},

{
    "location": "reference/#BinaryBuilder.translate_symlinks-Tuple{AbstractString}",
    "page": "Reference",
    "title": "BinaryBuilder.translate_symlinks",
    "category": "method",
    "text": "translate_symlinks(root::AbstractString; verbose::Bool=false)\n\nWalks through the root directory given within root, finding all symlinks that point to an absolute path within root, and rewriting them to be a relative symlink instead, increasing relocatability.\n\n\n\n\n\n"
},

{
    "location": "reference/#BinaryBuilder.uname-Tuple{}",
    "page": "Reference",
    "title": "BinaryBuilder.uname",
    "category": "method",
    "text": "uname()\n\nOn Linux systems, return the strings returned by the uname() function in libc\n\n\n\n\n\n"
},

{
    "location": "reference/#BinaryBuilder.unmount-Tuple{BinaryBuilder.CompilerShard}",
    "page": "Reference",
    "title": "BinaryBuilder.unmount",
    "category": "method",
    "text": "unmount(cs::CompilerShard)\n\nUnmount a compiler shard, if possible.  Uses run() so will error out if something goes awry.  Note that this function only does something when using a .squashfs shard, on Linux.  All other combinations of shard archive type and platform result in a no-op from this function.\n\n\n\n\n\n"
},

{
    "location": "reference/#BinaryBuilder.update_linkage-Tuple{Prefix,Platform,AbstractString,Any,Any}",
    "page": "Reference",
    "title": "BinaryBuilder.update_linkage",
    "category": "method",
    "text": "update_linkage(prefix::Prefix, platform::Platform, path::AbstractString,\n               old_libpath, new_libpath; verbose::Bool = false)\n\nGiven a binary object located at path within prefix, update its dynamic linkage to point to new_libpath instead of old_libpath.  This is done using a tool within the cross-compilation environment such as install_name_tool on MacOS or patchelf on Linux.  Windows platforms are completely skipped, as they do not encode paths or RPaths within their executables.\n\n\n\n\n\n"
},

{
    "location": "reference/#BinaryBuilder.update_qemu-Tuple{}",
    "page": "Reference",
    "title": "BinaryBuilder.update_qemu",
    "category": "method",
    "text": "update_qemu(;verbose::Bool = false)\n\nUpdate our QEMU and Linux kernel installations, downloading and installing both into <storage_dir>/qemu.\n\n\n\n\n\n"
},

{
    "location": "reference/#BinaryBuilder.url-Tuple{BinaryBuilder.CompilerShard}",
    "page": "Reference",
    "title": "BinaryBuilder.url",
    "category": "method",
    "text": "url(cs::CompilerShard)\n\nReturn the URL from which this shard can be downloaded.\n\n\n\n\n\n"
},

{
    "location": "reference/#BinaryBuilder.versioninfo-Tuple{}",
    "page": "Reference",
    "title": "BinaryBuilder.versioninfo",
    "category": "method",
    "text": "versioninfo()\n\nHelper function to print out some debugging information\n\n\n\n\n\n"
},

{
    "location": "reference/#BinaryBuilder.yn_prompt",
    "page": "Reference",
    "title": "BinaryBuilder.yn_prompt",
    "category": "function",
    "text": "yn_prompt(state::WizardState, question::AbstractString, default = :y)\n\nPerform a [Y/n] or [y/N] question loop, using default to choose between the prompt styles, and looping until a proper response (e.g. \"y\", \"yes\", \"n\" or \"no\") is received.\n\n\n\n\n\n"
},

{
    "location": "reference/#BinaryProvider.detect_libgfortran_abi-Tuple{ObjectFile.ObjectHandle,Platform}",
    "page": "Reference",
    "title": "BinaryProvider.detect_libgfortran_abi",
    "category": "method",
    "text": "detect_libgfortran_abi(oh::ObjectHandle, platform::Platform)\n\nGiven an ObjectFile, examine its dynamic linkage to discover which (if any) libgfortran it\'s linked against.  The major SOVERSION will determine which GCC version we\'re restricted to.\n\n\n\n\n\n"
},

{
    "location": "reference/#Functions-1",
    "page": "Reference",
    "title": "Functions",
    "category": "section",
    "text": "Modules = [BinaryBuilder]\nOrder = [:function]"
},

]}
