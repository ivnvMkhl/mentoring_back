class EnvService<EnvVariables> {
    variables: EnvVariables;

    constructor(variables: any) {
        this.variables = variables;
    }
}

export { EnvService };
