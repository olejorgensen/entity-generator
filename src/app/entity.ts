export class Entity {
  name: string;
  properties: { name: string; type: string }[];

  constructor(name: string, properties: { name: string; type: string }[]) {
    this.name = name;
    this.properties = properties;
  }
}
