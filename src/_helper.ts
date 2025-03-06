export interface Option {
  errorIfCollided?: boolean | string,
  warnIfCollided?: boolean | string
  functionName?: string
}

export default function extendProperty(func: Function, option?: Option) {
	const functionName = option?.functionName ?? func.name;
  
  if (Number.hasOwnProperty(functionName)){   
    
    const errorIfCollided = option?.errorIfCollided ?? true;
    const warnIfCollided = option?.warnIfCollided ?? true;
    const defaultErrorMessage = `Number.${functionName} has been already defined. No overriding and ignore it. Please check if the behaviour is the equivalent.`;
    
    // Skip defining the property
    if (errorIfCollided){
      console.error( errorIfCollided === true ? defaultErrorMessage : errorIfCollided );
    } else if (warnIfCollided) {
      console.warn( warnIfCollided === true ? defaultErrorMessage : warnIfCollided );
    }

  } else {

    Object.defineProperty(Number, functionName, {
      value: func,
      writable: false,
      configurable: false,
      enumerable: false
    })

  }
}