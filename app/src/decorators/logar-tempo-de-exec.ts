export function logarTempoDeExecucao() {
    return function(
        terget: any,
        property: string,
        descriptor: PropertyDescriptor
    ){
        return descriptor;
    }
}