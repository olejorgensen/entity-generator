import { Component, Input, OnChanges } from '@angular/core';
import { Entity } from '../entity';

@Component({
  selector: 'app-sql-output',
  templateUrl: './sql-output.component.html',
})
export class SqlOutputComponent implements OnChanges {
  @Input() entity: Entity | null = null;
  output: string = '';

  ngOnChanges() {
    this.output = this.generateOutput();
  }

  generateOutput(): string {
    if (this.entity == null) return '';
    var result = `CREATE TABLE ${this.entity.name} (\n`;
    result += this.entity.properties
      .map((prop) => `  ${prop.name} ${prop.type}`)
      .join(',\n');
    result += '\n);';
    return result;
  }
}
