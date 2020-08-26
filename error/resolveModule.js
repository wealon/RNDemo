Error: Unable to resolve module `./debugger-ui/debuggerWorker.cff11639` from ``: 

None of these files exist:
  * debugger-ui/debuggerWorker.cff11639(.native|.native.js|.js|.native.json|.json|.native.ts|.ts|.native.tsx|.tsx)
  * debugger-ui/debuggerWorker.cff11639/index(.native|.native.js|.js|.native.json|.json|.native.ts|.ts|.native.tsx|.tsx)
    at ModuleResolver.resolveDependency (/Users/wealon/Desktop/RN/RNDemo/node_modules/metro/src/node-haste/DependencyGraph/ModuleResolution.js:163:15)
    at ResolutionRequest.resolveDependency (/Users/wealon/Desktop/RN/RNDemo/node_modules/metro/src/node-haste/DependencyGraph/ResolutionRequest.js:52:18)
    at DependencyGraph.resolveDependency (/Users/wealon/Desktop/RN/RNDemo/node_modules/metro/src/node-haste/DependencyGraph.js:287:16)
    at /Users/wealon/Desktop/RN/RNDemo/node_modules/metro/src/lib/transformHelpers.js:267:42
    at /Users/wealon/Desktop/RN/RNDemo/node_modules/metro/src/Server.js:1096:37
    at Generator.next (<anonymous>)
    at asyncGeneratorStep (/Users/wealon/Desktop/RN/RNDemo/node_modules/metro/src/Server.js:99:24)
    at _next (/Users/wealon/Desktop/RN/RNDemo/node_modules/metro/src/Server.js:119:9)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (internal/process/task_queues.js:93:5)
[Thu Aug 27 2020 24:56:40.546]  LOG      JavaScript logs will appear in your browser console

关掉Debug模式就好了