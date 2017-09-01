/**
 * Method Decorator
 * Restrict to a certain function signature:
 */


/**
 * [TypeRestrictedMethodDecorator description]
 * @param {Object}     target      [description]
 * @param {string}     propertyKey [description]
 * @param {number) =>          number>}     descriptor [description]
 */
function TypeRestrictedMethodDecorator(
    target: Object, // The prototype of the class
    propertyKey: string, // The name of the method
    descriptor: TypedPropertyDescriptor<(num: number) => number>
    ) {
    console.log("TypeRestrictedMethodDecorator called on: ", target, propertyKey, descriptor);
}

class TypeRestrictedMethodDecoratorExample {
    @TypeRestrictedMethodDecorator
    method(num: number): number {
        return 0;
    }
}