export default function extendProperty(func: Function, ignoreIfCollision: boolean = false, name?: string) {
	const functionName = name ?? func.name;
  
  if (Number.hasOwnProperty(functionName)){
    if (ignoreIfCollision){
      throw Error(`Number.${functionName} has been defined. No overriding.`);
    } else {
      console.warn(`Number.${functionName} has been already defined. No overriding and ignore it. Please check if the behaviour is the equivalent.`);
    }
  }else{
    Object.defineProperty(Number, functionName, {
      value: func,
      writable: false,
      configurable: false,
      enumerable: false
    })
  }
}