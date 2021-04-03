class Part {
    #color = '#000';
    #figures = [];

    constructor(color = '#000', figures = []) {
        this.#color = color;

        figures.forEach(f => {
            f.id = color;
            f.color = color;

            this.#figures.push(f);

            // this.#figures.push(f.rotate(0, color));
            // this.#figures.push(f.rotate(90, color));
            // this.#figures.push(f.rotate(180, color));
            // this.#figures.push(f.rotate(270, color));
        });
    }

    get figures() {
        return this.#figures;
    }

    print() {
        console.log('Part:', this.#color);
        this.#figures.forEach((f) => {
            f.print(this.#color);
            console.log();
        });
    }
}

module.exports = Part;