export class ResistorColor {
  private colors: string[];
  private colorMap: Map<string, string> = new Map([
    ["black", "0"],
    ["brown", "1"],
    ["red", "2"],
    ["orange", "3"],
    ["yellow", "4"],
    ["green", "5"],
    ["blue", "6"],
    ["violet", "7"],
    ["grey", "8"],
    ["white", "9"],
  ]);
  constructor(colors: string[]) {
    if (colors.length < 2)
      throw new Error("At least two colors need to be present");

    this.colors = colors;
  }

  value = (): number => {
    let resistance: string = "";
    for (let i = 0; i < 2; i++) {
      resistance += this.colorMap.get(this.colors[i]);
    }

    return parseInt(resistance);
  };
}
