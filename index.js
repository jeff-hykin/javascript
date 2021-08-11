module.exports = evaler = {
    js: (strings, ...values)=>{
        var safeNamespace = {Object, key:null, value:null, strings, values:[...values], eachValue: null, eachDefinition: null, overwrittenDefinition: undefined, evalString: ""}
        for (let each of strings) {
            safeNamespace.evalString += each
            // add variable name if needed
            let next = values.shift()
            if (next instanceof Object) {
                if (Object.keys(next).length == 1) {
                    safeNamespace.evalString += Object.keys(next)[0]
                }
            }
        }
        for (safeNamespace.eachValue of safeNamespace.values) {
            if (safeNamespace.eachValue instanceof safeNamespace.Object) {
                for (safeNamespace.eachDefinition of safeNamespace.Object.entries(safeNamespace.eachValue)) {
                    // key = safeNamespace.eachDefinition[0]
                    // value = safeNamespace.eachDefinition[1]
                    // skip these edgecases
                    if (safeNamespace.eachDefinition == "safeNamespace") {
                        safeNamespace.overwrittenDefinition = safeNamespace.eachDefinition[1]
                    }
                    // otherwise define them
                    eval(`var ${safeNamespace.eachDefinition[0]} = safeNamespace.eachDefinition[1]`)
                }
            }
        }
        return eval(`
            (()=>{
                if (safeNamespace.overwrittenDefinition !== undefined) {
                    safeNamespace = safeNamespace.overwrittenDefinition
                }
                ${safeNamespace.evalString}
            })()
        `)
    },
    asyncJs: (strings, ...values)=>{
        var safeNamespace = {Object, key:null, value:null, strings, values:[...values], eachValue: null, eachDefinition: null, overwrittenDefinition: undefined, evalString: ""}
        for (let each of strings) {
            safeNamespace.evalString += each
            // add variable name if needed
            let next = values.shift()
            if (next instanceof Object) {
                if (Object.keys(next).length == 1) {
                    safeNamespace.evalString += Object.keys(next)[0]
                }
            }
        }
        for (safeNamespace.eachValue of safeNamespace.values) {
            if (safeNamespace.eachValue instanceof safeNamespace.Object) {
                for (safeNamespace.eachDefinition of safeNamespace.Object.entries(safeNamespace.eachValue)) {
                    // key = safeNamespace.eachDefinition[0]
                    // value = safeNamespace.eachDefinition[1]
                    // skip these edgecases
                    if (safeNamespace.eachDefinition == "safeNamespace") {
                        safeNamespace.overwrittenDefinition = safeNamespace.eachDefinition[1]
                    }
                    // otherwise define them
                    eval(`var ${safeNamespace.eachDefinition[0]} = safeNamespace.eachDefinition[1]`)
                }
            }
        }
        return eval(`
            (async ()=>{
                if (safeNamespace.overwrittenDefinition !== undefined) {
                    safeNamespace = safeNamespace.overwrittenDefinition
                }
                ${safeNamespace.evalString}
            })()
        `)
    },
}