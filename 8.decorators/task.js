//Задача № 1
function cachingDecoratorNew(func) {
    let cache = [];
  
    function wrapper(...args) {
        const hash = md5(args.join(","));
        let objectInCache = cache.find((item) => item.hash === hash)
        if(objectInCache) {
            console.log("Из кеша: " + objectInCache.result);
            return "Из кеша: " + objectInCache.result;
        }
  
        const result = func(...args);
        cache.push({hash, result});
        if(cache.length > 5) {
            cache.shift()
        }
        console.log("Вычисляем: " + result);
        return "Вычисляем: " + result;
    }
    return wrapper;
  };

//Задача № 2
function debounceDecoratorNew(func, delay) {
    let timeoutId = null;
    wrapper.allCount = 0;
    wrapper.count = 0;
    
    function wrapper(...args) {
        wrapper.allCount++;
        if(timeoutId) {
          console.log("удалили текущий таймаут");
        clearTimeout(timeoutId);
        }
        else {
            wrapper.count++;
            func(...args)
        }
  
        console.log("создаём новый таймаут");
        timeoutId = setTimeout(() => {
          timeoutId = null;
          func(...args);
          console.log("вызвали колбек");
          }, delay);
    }
  
    return wrapper;
  };

