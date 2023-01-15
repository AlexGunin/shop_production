type Mods = Record<string, boolean | string>;

export function cn(
  cls: string,
  mods: Mods = {},
  additional: string[] = [],
): string {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.keys(mods).filter((key) => mods[key]),
  ].join(' ');
}

export function bindCn(
  ...args: [cls: string, mods?: Mods, additional?: string[]]
) {
  return cn.bind(null, ...args);
}
