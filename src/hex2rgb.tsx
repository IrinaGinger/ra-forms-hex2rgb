export const hex2Rgb = (hexColor: string) => {
    let itemCode: number | undefined;
    const hex: number[] = hexColor
        .toLowerCase()
        .replace('#', '')
        .split('')
        .map((item) => {
            const numberItem: number = parseInt(item, 10);
            if (Number.isNaN(numberItem)) {
                itemCode = item.codePointAt(0);
                if (!itemCode) {
                    return Infinity;
                } else {
                    return (itemCode - 87);
                }                
            } else {
                return numberItem;
            }
        });

    const decimal: number[] = hex.reduce((acc: number[], item: number, index: number) => {
        if (index % 2 === 0) {
            acc.push(item * 16)
        } else {
            acc[acc.length - 1] += item;
        }
        return acc;
    }, []);

    const rgbColor: string = `rgb(${decimal.join(', ')})`;

    return rgbColor;
}