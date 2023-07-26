export type Mods = Record<string, boolean | string | undefined>;

export function classNames(
  style: string,
  mods: Mods = {},
  additional: Array<string | undefined> = [],
): string {
  return [
    style,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(' ');
}
