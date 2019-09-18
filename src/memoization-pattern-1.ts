interface ICacheFunctionCache {
  item1: string;
  item2?: string;
}

interface ICacheFunction {
  cache: ICacheFunctionCache;
}

const cacheFunction = function(param: string){
  if(cacheFunction.cache){
    // do something
    cacheFunction.cache.item1 = param;
    console.log("cache: ", cacheFunction.cache);
    return;
  }
  console.log("no cache available.");
};

cacheFunction("name");

cacheFunction.cache = { item1: "" };

cacheFunction("name");
