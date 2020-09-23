class EventEmitter {
  constructor(){
    this._events = {}
  }
  addListener(type, callback){
    if(typeof callback !== 'function'){
      throw new Error(`addListener require a function, ${callback} is not a function`);
    }
    if(typeof this._events[type] === 'undefined'){
      this._events[type] = [];
    }
    this._events[type].push(callback);
    return this;
  }
  removeListener(type, callback){
    if(!this._events[type]) return this;
    if(arguments.length === 1){
      delete this._events[type];
      return this;
    } else {
      this._events[type] = this._events[type].filter(e => e !== callback);
      return this;
    }
  }
  emit(type, ...rest){
    if(!Array.isArray(this._events[type])){
      return false;
    }
    this._events[type].map(e => {
      e(...rest);
    });
    return true;
  }
}