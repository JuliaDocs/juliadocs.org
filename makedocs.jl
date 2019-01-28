using Distributed, DependenciesParser
using Pkg
using Pkg.TOML
include("util.jl")
# gets all installable packages for julia 1.0
packages = DependenciesParser.alldeps(v"1.0.0")
# path were we move build docs
build_timeout = 5*60 # 5 min

tstart = time()

process_queue = []
max_packages = if isempty(ARGS)
    length(packages)
else
    parse(Int, ARGS[1])
end

for (name, url, version, dependency) in packages[1:max_packages]
    while length(process_queue) >= get(ENV, "NUM_PKG_PROCESSES", 12)
        filter!(process_running, process_queue)
        sleep(0.5)
    end
    push!(process_queue, run_process(name, url, version))
end

for proc in process_queue
    wait(proc)
end

@info("DONE in $(time() - tstart) seconds")
