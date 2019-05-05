console.log("hello");



let response = "";

let topics = ["c-sharp", "c sharp", "c#", "c++",
    "java", "spring", "restful", "http", "machine learning", "assembly", "ruby", "javascript",
    "php", "ror", "rails", "a#", ".net", "a++", "abap", "abc", "absys", "acc", ".net",
    "acl2", "dsl", "action script", "ada", "adenine", "agda",
    "adenine", "agilent vee", "agora", "aimms", "aldor", "alef", "algol",
    "amos", "alice", "ambienttalk", "amiga e", "amos", "angelscript", "apex", "android", "applescript",
    "apt", "arc", "arexx", "argus", "aspectj", "autohotkey", "autocoder", "autolt", "A# .NET", "A# (Axiom)", "A-0 System",
    "A+", "A++", "ABAP", "ABC", "ABC ALGOL", "ABSET", "ABSYS", "ACC", "Accent",
    "Ace DASL", "ACL2", "ACT-III", "Action!", "ActionScript", "Actor",
    "Ada", "Adenine", "Agda", "Agilent VEE", "Agora", "AIMMS", "Aldor", "Alef", "ALF", "ALGOL 58", "ALGOL 60",
    "ALGOL 68", "ALGOL W", "Alice", "Alma-0", "AmbientTalk", "Amiga E", "AMOS", "AMPL", "AngelScript", "Angular", "Apex",
    "APL", "AppleScript", "APT", "Arc", "ARexx", "Argus", "AspectJ",
    "Assembly", "ATS", "Ateji PX", "AutoHotkey", "Autocoder", "AutoIt", "AutoLISP / Visual LISP", "Averest",
    "AWK", "Axum", "Active Server Pages", "B", "Babbage", "Ballerina", "Bash", "BASIC", "bc", "BCPL", "BeanShell",
    "Batch file (Windows/MSDOS)", "Bertrand", "BETA", "BLISS", "Blockly", "BlooP", "Boo", "Boomerang", "Bourne shell",
    "bash", "bootstrap", "ksh", "BPEL", "C", "C--", "C++", "C*", "C#", "C/AL", "Caché ObjectScript",
    " C Shell (csh)", "Caml", "Cayenne", "CDuce", "Cecil", "Cesil", "Céu", "Ceylon", "CFEngine", "Cg", "Ch", "Chapel",
    "Charity", "Charm", "CHILL", "CHIP-8", "chomski", "ChucK", "Cilk", "Citrine", "CL", "Claire", "Clarion", "Clean",
    "Clipper", "CLIPS", "CLIST", "Clojure", "CLU", "CMS-2", "COBOL", "CobolScript", "Cobra", "CoffeeScript",
    "ColdFusion", "COMAL", "COMIT", "CSS",
    "Common Lisp", "COMPASS", "Component Pascal", "COMTRAN", "Cool", "Coq", "Coral 66",
    "CorVision", "COWSEL", "CPL", "Cryptol", " Crystal", "Csound", "CSP", "Cuneiform", "Curl", "Curry", "Cybil",
    "Cyclone", "Cython", "Carvalho", "D", "DASL", "Dart", "Darwin", "DataFlex", "Datalog", "DATATRIEVE", "dBase",
    "dc", "DCL", "Delphi", "DinkC", "DIBOL", "Dog", "Draco", "DRAKON", "Dylan", "DYNAMO",
    "DAX", "E", "Ease", "Easy PL/I", "EASYTRIEVE PLUS", "eC", "ECMAScript",
    "Edinburgh IMP", "EGL", "Eiffel", "ELAN", "Elixir", "Elm", "Emacs Lisp", "Emerald", "Epigram",
    "EPL", "Erlang", "es", "Escher", "ESPOL",
    "Esterel", "Etoys", "Euclid", "Euler", "Euphoria", "EusLisp", "CMS EXEC", "EXEC 2",
    "Executable UML", "F", "F#", "F*", "Factor", "Fantom", "FAUST", "FFP", "Fjölnir", "FL", "Flavors", "Flex",
    "FlooP", "FLOW-MATIC", "FOCAL", "FOCUS", "FOIL", "FORMAC", "@Formula", "Forth", "Fortran", "Fortress", "FoxBase",
    "FoxPro", "FP", "Franz Lisp", "F-Script", "G", "GameMonkey Script", "GAMS", "GAP", "G-code",
    "GDScript", "Genie", "GDL", "GJ", "GEORGE", "GLSL", "GNU E", "GM", "Go", "Go!", "GOAL", "Gödel", "Golo",
    "GOM (Good Old Mad)", "Google Apps Script", "Gosu", "GOTRAN", "GPSS", "GraphTalk", "GRASS", "Grasshopper", "Groovy",
    "Hack", "HAGGIS", "HAL/S", "Halide", "Hamilton C shell", "Harbour", "Hartmann pipelines", "Haskell", "Haxe", "Hermes",
    "High Level Assembly", "HLSL", "HolyC", "Hop", "Hopscotch", "Hope", "Hugo", "Hume", "HyperTalk", "Hexa", "HTML", "Io",
    "Icon", "IBM BASICA", "IBM HAScript", "IBM Informix-4GL", "IBM RPG", "Irineu", "IDL", "Idris", "Inform", "J", "J#",
    "J++", "JADE", "JAL", "Janus", "JASS", "Java", "JavaFX Script", "JavaScript", "JCL", "JEAN", "Join Java", "JOSS",
    "Joule", "JOVIAL", "Joy", "JScript", "JScript .NET", "JSON", "Julia", "Jython", "K", "Kaleidoscope", "Karel", "Karel++",
    "KEE", "Kixtart", "Klerer-May System", "KIF", "Kojo", "Kotlin", "KRC", "KRL", "KRYPTON", "Korn shell (ksh)", "Kodu",
    "Kv", "LabVIEW", "Ladder", "LANSA", "Lasso", "LaTeX", "Lava", "LC-3", "Leda", "Legoscript", "LIL", "LilyPond", "Limbo",
    "Limnor", "LINC", "Lingo", "LINQ", "LIS", "LISA", "Lisp", "Lite-C", "Lithe", "Little b", "LLL", "Logo", "Logtalk",
    "LotusScript", "LPC", "LSE", "LSL", "LiveCode", "LiveScript", "Lua", "Lucid", "Lustre", "LYaPAS", "Lynx", "M", "M2001",
    "M4", "M#", "MAD", "MAD/I", "Magik", "Magma", "make", "Maude", "Maple", "MAPPER", "MARK-IV", "Mary",
    "MASM Microsoft Assembly x86", "MATH-MATIC", "Mathematica", "MATLAB", "Maxima", "Macsyma", "Max", "MaxScript",
    "Maya (MEL)", "MDL", "Mercury", "Mesa", "Metafont", "MetaQuotes(MQL4/MQL5)", "MHEG-5", "Microcode", "MicroScript",
    "MIIS", "Milk", "MIMIC", "Mirah", "Miranda", "MIVA Script", "ML", "Model 204", "Modelica", "Modula", "Modula-2",
    "Modula-3", "Mohol", "MOO", "Mortran", "Mouse", "MPD", "Mathcad", "CIL", "MSL", "MUMPS", "MuPAD", "Mutan", "NASM",
    "Napier88", "Neko", "Nemerle", "NESL", "Net.Data", "NetLogo", "NetRexx", "NewLISP", "NEWP", "Newspeak", "NewtonScript",
    "Nial", "Nice", "Nickle", "NITIN", "Nim", "NPL", "Not eXactly C", "Not Quite C", "NSIS", "Nu", "NWScript", "NXT-G",
    "o:XML", "Oak", "Oberon", "OBJ2", "Object Lisp", "ObjectLOGO", "Object REXX", "Object Pascal", "Objective-C",
    "Objective-J", "Obliq", "OCaml", "occam", "occam-π", "Octave", "OmniMark", "Onyx", "Opa", "Opal", "OpenCL",
    "OpenEdge ABL", "OPL", "OpenVera", "OPS5", "OptimJ", "Orc", "ORCA/Modula-2", "Oriel", "Orwell", "Oxygene", "Oz", "P",
    "P4", "P′′", "ParaSail", "PARI/GP", "Pascal", "PCASTL", "PCF", "PEARL", "PeopleCode", "Perl", "PDL", "Perl 6", "Pharo",
    "PHP", "Pico", "Picolisp", "Pict", "Pig", "Pike", "PIKT", "PILOT", "Pipelines", "Pizza", "PL-11", "PL/0", "PL/B", "PL/C",
    "PL/I", "PL/M", "PL/P", "PL/SQL", "PL360", "PLANC", "Plankalkül", "Planner", "PLEX", "PLEXIL", "Plus", "POP-11", "POP-2",
    "PostScript", "PortablE", "POV-Ray SDL", "Powerhouse", "PowerBuilder", "PowerShell", "PPL", "Processing", "Processing.js",
    "Prograph", "PROIV", "Prolog", "PROMAL", "Promela", "PROSE ", "PROTEL", "ProvideX", "Pro*C", "Pure", "PureBasic", "Python",
    "Q", "Q ", "Q#", "Qalb", "QtScript", "QuakeC", "QPL", "R", "R++", "Racket", "RAPID", "Rapira", "Ratfiv", "Ratfor", "React",
    "rc", "REBOL", "Red", "Redcode", "REFAL", "Reia", "REXX", "Ring", "Rlab", "ROOP", "RPG", "RPL", "RSL", "RTL/2", "Ruby",
    "RuneScript", "Rust", "S", "S2", "S3", "S-Lang", "S-PLUS", "SA-C", "SabreTalk", "SAIL", "SALSA", "SAM76", "SAS", "SASL",
    "Sather", "Sawzall", "Scala", "Scheme", "Scilab", "Scratch", "Script.NET", "Sed", "Seed7", "Self", "SenseTalk", "SequenceL",
    "Serpent", "SETL", "SIMPOL", "SIGNAL", "SiMPLE", "SIMSCRIPT", "Simula", "Simulink", "Singularity", "SISAL", "SLIP", "SMALL",
    "Smalltalk", "SML", "Strongtalk", "Snap!", "SNOBOL", "SPITBOL", "Snowball", "SOL", "Solidity", "SOPHAEROS", "SPARK",
    "Speedcode", "SPIN", "SP/k", "SPS", "SQL", "SQR", "Squeak", "Squirrel", "SR", "S/SL", "Starlogo", "Strand", "Stata",
    "Stateflow", "Subtext", "SBL", "SuperCollider", "SuperTalk", "Swift", "Swift", "SYMPL", "SystemVerilog", "T", "TACL",
    "TACPOL", "TADS", "TAL", "Tcl", "Tea", "TECO", "TELCOMP", "TeX", "TEX", "TIE", "TMG", "Tom", "TOM", "Toi", "Topspeed",
    "TPU", "Trac", "TTM", "T-SQL", "Transcript", "TTCN", "Turing", "TUTOR", "TXL", "TypeScript", "Tynker", "Ubercode",
    "UCSD Pascal", "Umple", "Unicon", "Uniface", "UNITY", "Unix shell", "UnrealScript", "Vala", "Verilog", "VHDL",
    "Vim script", "Viper", "Visual Basic", "Visual Basic .NET", "Visual DataFlex", "Visual DialogScript", "Visual Fortran",
    "Visual FoxPro", "Visual J++", "Visual J#", "Visual LISP", "Visual Objects", "Visual Prolog", "VSXu", "V++",
    "WATFIV, WATFOR", "WebAssembly", "WebDNA", "Whiley", "Winbatch", "Wolfram", "Wyvern", "X++", "X10", "xBase", "xBase++",
    "XBL", "XC", "XMOS architecture", "xHarbour", "XL", "Xojo", "XOTcl", "XOD", "XPath", "XPL", "XPL0", "XQuery", "XSB",
    "XSharp", "XSLT", "Xtend", "Yorick", "YQL", "Yoix", "Z", "Zebra, ZPL, ZPL2", "Zeno", "ZetaLisp", "ZFRAME", "ZOPL",
    "Zsh", "ZPL", "Z++"];

let found = [];

function checkTopics(a) {
    for (let i = 0; i < topics.length; i++) {
        let tokens = a.label.split(" ");
        for (let j = 0; j < tokens.length; j++) {
            if (topics[i].toLowerCase().split(" ").includes(tokens[j].toLowerCase())) {
                if (found.includes(tokens[j].toLowerCase())) continue;
                found.push(tokens[j].toLowerCase());
                return true;
            }
        }

    }
    return false;
}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        doIt();
        window.setTimeout(function(){
            chrome.storage.sync.set({repos: toshow}, function () {});
            console.log(toshow);
            console.log("SENT");
            sendResponse({farewell: "goodbye"});
        }, 3000)
    });

function doIt() {

    let http = new XMLHttpRequest();
    let endpoint = "https://api.textrazor.com/";

    http.open("POST", endpoint, true);

    http.setRequestHeader("x-textrazor-key", "c4e40c4cbebe27a9cf41bb0019a7d7e8fa96bce7125733759cd41c16");
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    http.responseType = "json";

    http.onreadystatechange = function () {
        if (http.readyState === 4 && http.status === 200) {
            console.log(http.response);
            response = http.response.response.topics.sort((a, b) => (1 - parseFloat(a.score)) - (1 - parseFloat(b.score)));

            topics = response.filter(function (el) {
                return checkTopics(el);
            });

            console.log(topics);

            toshow = {
                features: topics.slice(0,4),
                data:[]
            };

            for (let k = 0; k < Math.min(4, topics.length); k++) {

                let gh = new XMLHttpRequest();
                let ghend_repo = "https://api.github.com/search/repositories"

                let body = "q=topic:" + topics[k].label.replace(" ", "+") + "&sort=stars&order=desc"
                gh.open("GET", ghend_repo + "?" + body, true);

                gh.setRequestHeader('Accept', 'application/vnd.github.mercy-preview+json');

                gh.responseType = "json";


                gh.onreadystatechange = function () {

                    if (http.readyState === 4 && http.status === 200) {

                        console.log(gh.response);

                        let repos = gh.response.items


                        toshow.data.push({
                            "name": repos[0].full_name,
                            "watchers": repos[0].watchers_count,
                            "link": repos[0].html_url,
                            "forks": repos[0].forks_count,
                            "stars": repos[0].stargazers_count,
                            "language": repos[0].language,
                            "description": repos[0].description,
                            "topics": repos[0].topics
                        });
                    }
                };

                gh.send()
            }


        }
    };


    http.send("extractors=topics&url=" + window.location.href);

}