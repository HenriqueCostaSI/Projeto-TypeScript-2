export function inspect(target, property, descriptor) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`--- Método ${property}`);
        console.log(`------ Parâmetros ${JSON.stringify(args)}`);
        const retorno = metodoOriginal.apply(this, args);
        console.log(`------ Retorno ${JSON.stringify(retorno)}`);
        return retorno;
    };
    return descriptor;
}
